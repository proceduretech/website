import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Icons } from "@/lib/expertise-data";
import {
  getAllExpertiseSlugsFromContent,
  getExpertiseForListing,
  getRelatedExpertiseForListing,
} from "@/lib/content";
import {
  ExpertiseHero,
  CapabilitiesGrid,
  WhyProcedure,
  TechStack,
  FAQSection,
  ExpertiseCTA,
  RelatedExpertise,
} from "@/components/expertise";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllExpertiseSlugsFromContent().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getExpertiseForListing(slug);

  if (!page) {
    return {
      title: "AI Expertise | Enterprise Solutions | Procedure",
    };
  }

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: `/expertise/${slug}`,
    },
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta.title,
      description: page.meta.description,
      site: "@procedurehq",
      creator: "@procedurehq",
    },
  };
}

export default async function ExpertisePage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getExpertiseForListing(slug);

  if (!pageData) {
    notFound();
  }

  // Map capabilities with their icons
  const capabilities = pageData.capabilities.map((cap) => ({
    ...cap,
    icon: Icons[cap.icon as keyof typeof Icons] || Icons.brain,
  }));

  // Get related expertise pages
  const relatedPages = getRelatedExpertiseForListing(pageData.relatedExpertise);

  // Map technologies to objects
  const technologies = pageData.technologies.map((name) => ({ name }));

  // Build combined schema (Service + FAQ + Breadcrumb)
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // Service Schema
      {
        "@type": "Service",
        "@id": `https://procedure.tech/expertise/${slug}#service`,
        name: pageData.meta.title,
        description: pageData.meta.description,
        url: `https://procedure.tech/expertise/${slug}`,
        provider: {
          "@type": "Organization",
          "@id": "https://procedure.tech/#organization",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "United States",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ],
        serviceType: pageData.hero.badge,
        category: [pageData.hero.badge, "Enterprise AI Engineering", "Software Development"],
      },
      // FAQ Schema (only if FAQs exist)
      ...(pageData.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `https://procedure.tech/expertise/${slug}#faq`,
              mainEntity: pageData.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
      // Breadcrumb Schema
      {
        "@type": "BreadcrumbList",
        "@id": `https://procedure.tech/expertise/${slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://procedure.tech/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Expertise",
            item: "https://procedure.tech/expertise",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pageData.hero.badge,
            item: `https://procedure.tech/expertise/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen">
      {/* Combined JSON-LD Structured Data (Service + FAQ + Breadcrumb) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />

      <ExpertiseHero
        badge={pageData.hero.badge}
        headline={pageData.hero.headline}
        headlineAccent={pageData.hero.headlineAccent}
        tagline={pageData.hero.tagline}
        description={pageData.hero.description}
        secondaryCTA={
          ["llm-applications", "ai-agents", "ai-security", "ai-privacy"].includes(slug)
            ? undefined
            : { text: "View Case Studies", href: "/work" }
        }
      />

      <CapabilitiesGrid
        title="Key Capabilities"
        subtitle="Everything you need to build production-grade solutions"
        capabilities={capabilities}
      />

      {pageData.whyProcedure.length > 0 && (
        <WhyProcedure
          title={`Why Procedure for ${pageData.hero.badge}?`}
          points={pageData.whyProcedure}
        />
      )}

      <TechStack
        title="Technologies We Use"
        subtitle="Production-tested tools and frameworks"
        technologies={technologies}
      />

      {pageData.faqs.length > 0 && <FAQSection faqs={pageData.faqs} />}

      {relatedPages.length > 0 && <RelatedExpertise pages={relatedPages} />}

      <ExpertiseCTA
        headline={pageData.cta.headline}
        description={pageData.cta.description}
      />
    </main>
  );
}
