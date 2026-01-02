"use client";

import type { ExpertisePageForListing } from "@/lib/content";
import { Icons } from "@/lib/expertise-data";
import {
  ExpertiseHero,
  CapabilitiesGrid,
  WhyProcedure,
  TechStack,
  FAQSection,
  ExpertiseCTA,
  RelatedExpertise,
  WhoWeWorkWith,
  ProcessTimeline,
  UseCasesGrid,
  WhyChooseProcedure,
  QualityMatters,
} from "@/components/expertise";
import { Testimonials } from "@/components/sections/Testimonials";

interface RelatedPage {
  slug: string;
  title: string;
  description: string;
  badge: string;
}

interface Props {
  expertise: ExpertisePageForListing;
  relatedPages: RelatedPage[];
}

export default function ExpertisePageClient({
  expertise,
  relatedPages,
}: Props) {
  const pageData = expertise;

  // Map capabilities with Icons
  const capabilities = pageData.capabilities.map((cap) => ({
    ...cap,
    icon: Icons[cap.icon as keyof typeof Icons] || Icons.brain,
  }));

  // Map technologies to Technology objects
  const technologies = pageData.technologies.map((tech) => ({ name: tech }));

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // Service Schema
      {
        "@type": "Service",
        "@id": `https://procedure.tech/services/${expertise.slug}#service`,
        name: `${pageData.hero.headline} ${pageData.hero.headlineAccent}`,
        description: pageData.hero.description,
        provider: {
          "@type": "Organization",
          "@id": "https://procedure.tech/#organization",
        },
        serviceType: pageData.hero.badge,
        areaServed: "Worldwide",
        category: [
          pageData.hero.badge,
          "Enterprise AI Engineering",
          "Software Development",
        ],
      },
      // FAQ Schema (only if FAQs exist)
      ...(pageData.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `https://procedure.tech/services/${expertise.slug}#faq`,
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
        "@id": `https://procedure.tech/services/${expertise.slug}#breadcrumb`,
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
            name: "Services",
            item: "https://procedure.tech/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pageData.hero.badge,
            item: `https://procedure.tech/services/${expertise.slug}`,
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
        primaryCTA={
          expertise.slug === "frontend-development"
            ? { text: "Talk to a Frontend Specialist", href: "/contact-us" }
            : undefined
        }
        secondaryCTA={
          [
            "ai-engineering",
            "ai-agents",
            "ai-security",
            "ai-privacy",
          ].includes(expertise.slug)
            ? undefined
            : { text: "View Case Studies", href: "/work" }
        }
      />

      <CapabilitiesGrid
        title="Key Capabilities"
        subtitle="Everything you need to build production-grade solutions"
        capabilities={capabilities}
      />

      {expertise.slug === "frontend-development" && pageData.whoWeWorkWith && (
        <WhoWeWorkWith
          title="Who We Work With"
          audiences={pageData.whoWeWorkWith.audiences.map((a) => ({
            ...a,
            icon: Icons[a.icon as keyof typeof Icons] || Icons.users,
          }))}
          closingStatement={pageData.whoWeWorkWith.closingStatement}
        />
      )}

      {expertise.slug === "frontend-development" && pageData.process && (
        <ProcessTimeline
          title="Our Frontend Development Process"
          subtitle="A predictable process built for high-quality delivery"
          steps={pageData.process}
        />
      )}

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

      {expertise.slug === "frontend-development" && pageData.useCases && (
        <UseCasesGrid
          title="Frontend Development Use Cases"
          subtitle="Our frontend development services support"
          useCases={pageData.useCases.map((uc) => ({
            ...uc,
            icon: Icons[uc.icon as keyof typeof Icons] || Icons.code,
          }))}
          columns={2}
        />
      )}

      {expertise.slug === "frontend-development" && pageData.whyChoose && (
        <WhyChooseProcedure
          title="Why Choose Procedure for Frontend Development"
          subtitle="Companies choose Procedure because"
          reasons={pageData.whyChoose.reasons}
          outcomesTitle="Outcomes from recent frontend engagements"
          outcomes={pageData.whyChoose.outcomes}
        />
      )}

      {pageData.testimonials && pageData.testimonials.length > 0 && (
        <Testimonials />
      )}

      {expertise.slug === "frontend-development" && pageData.qualityMatters && (
        <QualityMatters
          title="Why Frontend Quality Matters"
          subtitle="The frontend is often the first—and only—touchpoint users have with your product"
          costsTitle="Poor frontend engineering costs you"
          costs={pageData.qualityMatters.costs}
          benefitsTitle="Premium frontend development is an investment in"
          benefits={pageData.qualityMatters.benefits}
        />
      )}

      {pageData.faqs.length > 0 && <FAQSection faqs={pageData.faqs} />}

      {relatedPages.length > 0 && <RelatedExpertise pages={relatedPages} />}

      <ExpertiseCTA
        headline={pageData.cta.headline}
        description={pageData.cta.description}
      />
    </main>
  );
}
