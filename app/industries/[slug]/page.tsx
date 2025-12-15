import { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryIcons } from "@/lib/industries-data";
import {
  getAllIndustrySlugsFromContent,
  getIndustryForListing,
} from "@/lib/content";
import {
  IndustryHero,
  ChallengesSection,
  SolutionsGrid,
  SuccessMetrics,
  ComplianceBadges,
  IndustryCTA,
} from "@/components/industries";
import { FAQSection } from "@/components/expertise";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllIndustrySlugsFromContent().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryForListing(slug);

  if (!page) {
    return {
      title: "AI Solutions by Industry | Enterprise AI | Procedure",
    };
  }

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: `/industries/${slug}`,
    },
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

// Shield check icon for compliance badges
const ShieldCheckIcon = (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  </svg>
);

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getIndustryForListing(slug);

  if (!pageData) {
    notFound();
  }

  // Map challenges with their icons
  const challenges = pageData.challenges.map((challenge) => ({
    ...challenge,
    icon:
      IndustryIcons[challenge.icon as keyof typeof IndustryIcons] ||
      IndustryIcons.alert,
  }));

  // Map solutions with their icons
  const solutions = pageData.solutions.map((solution) => ({
    ...solution,
    icon:
      IndustryIcons[solution.icon as keyof typeof IndustryIcons] ||
      IndustryIcons.sparkles,
  }));

  // Map compliance badges with icon
  const complianceBadges = pageData.compliance.map((badge) => ({
    ...badge,
    icon: ShieldCheckIcon,
  }));

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data for FAQs */}
      {pageData.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: pageData.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      <IndustryHero
        badge={pageData.hero.badge}
        headline={pageData.hero.headline}
        headlineAccent={pageData.hero.headlineAccent}
        tagline={pageData.hero.tagline}
        description={pageData.hero.description}
        stats={pageData.hero.stats}
      />

      {challenges.length > 0 && (
        <ChallengesSection
          title={`The ${pageData.hero.badge} AI Challenge`}
          challenges={challenges}
        />
      )}

      {solutions.length > 0 && (
        <SolutionsGrid
          title="How We Solve It"
          subtitle="Production-ready solutions for your industry's unique challenges"
          solutions={solutions}
        />
      )}

      {pageData.metrics.length > 0 && (
        <SuccessMetrics
          title="Success Metrics"
          subtitle="Real results from our industry engagements"
          metrics={pageData.metrics}
        />
      )}

      {complianceBadges.length > 0 && (
        <ComplianceBadges
          title="Compliance & Trust"
          badges={complianceBadges}
        />
      )}

      {pageData.faqs.length > 0 && <FAQSection faqs={pageData.faqs} />}

      <IndustryCTA
        headline={pageData.cta.headline}
        description={pageData.cta.description}
      />
    </main>
  );
}
