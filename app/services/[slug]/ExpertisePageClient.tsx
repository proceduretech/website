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
  ExpertiseCTAWithTestimonial,
  RelatedExpertise,
  WhoWeWorkWith,
  ProcessTimeline,
  UseCasesGrid,
  WhyChooseProcedure,
  QualityMatters,
  ArchitectureSection,
  EngagementModels,
  RiskReversal,
  PhilosophySection,
} from "@/components/expertise";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";

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
        serviceType:
          expertise.slug === "software-testing-and-qa"
            ? ["Software Testing", "Quality Assurance", "Test Automation", "Performance Testing", "API Testing"]
            : expertise.slug === "ai-security"
            ? ["AI Security", "LLM Security", "AI Threat Protection", "Secure AI Development"]
            : expertise.slug === "mobile-development"
            ? ["iOS App Development", "Android App Development", "Cross-Platform App Development", "Mobile Backend Development", "Mobile App Modernization"]
            : expertise.slug === "ai-engineering"
            ? ["AI Engineering", "ML Development", "LLMOps", "MLOps", "AI System Architecture"]
            : expertise.slug === "product-design"
            ? ["Product Design", "UX Design", "UI Design", "Design Systems", "Product Strategy", "User Research"]
            : expertise.slug === "kubernetes"
            ? ["Kubernetes Consulting", "Container Orchestration", "Cloud Native Infrastructure", "Kubernetes Implementation", "Kubernetes Optimization"]
            : expertise.slug === "dotnet-development"
            ? [".NET Development Services", "ASP.NET Core Development", "C# Development", "Azure .NET Development", ".NET Migration Services", "Enterprise .NET Consulting"]
            : pageData.hero.badge,
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "India" },
        ],
        availableChannel: [
          {
            "@type": "ServiceChannel",
            serviceUrl: `https://procedure.tech/services/${expertise.slug}`,
            serviceType: "In-Person",
          },
          {
            "@type": "ServiceChannel",
            serviceUrl: `https://procedure.tech/services/${expertise.slug}`,
            serviceType: "Remote",
          },
        ],
        category:
          expertise.slug === "software-testing-and-qa"
            ? ["Software Testing", "Quality Assurance", "Test Automation"]
            : expertise.slug === "ai-security"
            ? ["AI Security", "LLM Security", "AI Threat Modeling", "Secure AI Engineering"]
            : expertise.slug === "mobile-development"
            ? ["Mobile App Development", "iOS Development", "Android Development", "Cross-Platform Development"]
            : expertise.slug === "ai-engineering"
            ? ["AI Engineering", "Machine Learning", "MLOps", "AI System Development"]
            : expertise.slug === "product-design"
            ? ["Product Design", "UX Design", "UI Design", "Design Systems", "User Experience"]
            : expertise.slug === "kubernetes"
            ? ["Kubernetes Consulting", "Container Orchestration", "Cloud Native", "Infrastructure Engineering"]
            : expertise.slug === "backend-development"
            ? ["Backend Engineering", "Software Development", "API Development"]
            : expertise.slug === "frontend-development"
            ? ["Frontend Engineering", "Web Development", "UI/UX Development"]
            : expertise.slug === "dotnet-development"
            ? [".NET Development", "ASP.NET Core", "C# Development", "Azure Development", "Enterprise Software Development"]
            : [pageData.hero.badge, "Enterprise AI Engineering", "Software Development"],
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
            : expertise.slug === "backend-development"
            ? { text: "Talk to a Backend Specialist", href: "/contact-us" }
            : expertise.slug === "dotnet-development"
            ? { text: "Talk to a .NET Expert", href: "/contact-us" }
            : undefined
        }
        secondaryCTA={
          [
            "ai-engineering",
            "ai-agents",
            "ai-security",
            "ai-privacy",
            "dotnet-development",
          ].includes(expertise.slug)
            ? undefined
            : { text: "View Case Studies", href: "/work" }
        }
      />

      {expertise.slug === "dotnet-development" && (
        <Stats
          title="Proven Outcomes from Enterprise .NET Engineering"
          stats={[
            { value: "40+", label: ".NET systems running in production" },
            { value: "6–8 weeks", label: "Typical time to production-ready release" },
            { value: "95%+", label: "Client retention across long-term engagements" },
            { value: "3+ years", label: "Average system lifecycle supported" },
          ]}
        />
      )}

      <CapabilitiesGrid
        title={expertise.slug === "dotnet-development" ? ".NET Development Capabilities for Production-Grade Systems" : "Key Capabilities"}
        subtitle={expertise.slug === "dotnet-development" ? "Everything required to design, modernize, and operate production-grade .NET systems at scale." : "Everything you need to build production-grade solutions"}
        capabilities={capabilities}
      />

      {["frontend-development", "backend-development", "dotnet-development"].includes(expertise.slug) && pageData.whoWeWorkWith && (
        <WhoWeWorkWith
          title={pageData.whoWeWorkWith.title || "Who We Work With"}
          audiences={pageData.whoWeWorkWith.audiences.map((a) => ({
            ...a,
            icon: Icons[a.icon as keyof typeof Icons] || Icons.users,
          }))}
          closingStatement={pageData.whoWeWorkWith.closingStatement}
          commonApplications={pageData.whoWeWorkWith.commonApplications}
          variant={expertise.slug === "dotnet-development" ? "tabs" : "cards"}
        />
      )}

      {/* For dotnet-development: Philosophy section comes early, before TechStack */}
      {expertise.slug === "dotnet-development" && pageData.philosophy && (
        <PhilosophySection
          title={pageData.philosophy.title}
          subtitle={pageData.philosophy.subtitle}
          blocks={pageData.philosophy.blocks}
        />
      )}

      {pageData.process && (
        <ProcessTimeline
          title={expertise.slug === "frontend-development" ? "Our Frontend Development Process" : expertise.slug === "backend-development" ? "Our Backend Development Process" : "Our Process"}
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

      {expertise.slug === "dotnet-development" ? (
        <TechStack
          title=".NET Technology Stack (Production-Proven)"
          variant="grouped"
          groups={[
            { category: "Runtime & Frameworks", items: [".NET 8", "ASP.NET Core", "C#", "Entity Framework Core"] },
            { category: "Cloud & Infrastructure", items: ["Azure", "Docker", "Kubernetes"] },
            { category: "Data & Caching", items: ["SQL Server", "PostgreSQL", "Redis"] },
            { category: "Observability & Messaging", items: ["Serilog", "MediatR"] },
          ]}
        />
      ) : (
        <TechStack
          title="Technologies We Use"
          subtitle="Production-tested tools and frameworks"
          technologies={technologies}
        />
      )}

      {pageData.useCases && (
        <UseCasesGrid
          title={expertise.slug === "frontend-development" ? "Frontend Development Use Cases" : expertise.slug === "backend-development" ? "Backend Development Use Cases" : "Use Cases"}
          subtitle={pageData.useCasesSubtitle || (expertise.slug === "frontend-development" ? "Our frontend development services support" : expertise.slug === "backend-development" ? "Our backend development services support" : "Real-world applications we help teams build and scale")}
          useCases={pageData.useCases.map((uc) => ({
            ...uc,
            icon: Icons[uc.icon as keyof typeof Icons] || Icons.code,
          }))}
          columns={2}
        />
      )}

      {/* For non-dotnet pages: Philosophy section in original position */}
      {expertise.slug !== "dotnet-development" && pageData.whyChoose && (
        <WhyChooseProcedure
          title={pageData.whyChoose.title || (expertise.slug === "frontend-development" ? "Why Choose Procedure for Frontend Development" : expertise.slug === "backend-development" ? "Why Choose Procedure for Backend Development" : `Why Choose Procedure for ${pageData.hero.badge}`)}
          subtitle={pageData.whyChoose.subtitle}
          reasonsTitle={pageData.whyChoose.reasonsTitle}
          reasons={pageData.whyChoose.reasons}
          outcomesTitle={pageData.whyChoose.outcomesTitle || (expertise.slug === "frontend-development" ? "Outcomes from recent frontend engagements" : expertise.slug === "backend-development" ? "Outcomes from recent backend engagements" : "Outcomes from recent engagements")}
          outcomes={pageData.whyChoose.outcomes}
        />
      )}

      {pageData.testimonials && pageData.testimonials.length > 0 && (
        <Testimonials />
      )}

      {pageData.qualityMatters && (
        <QualityMatters
          title={expertise.slug === "frontend-development" ? "Why Frontend Quality Matters" : expertise.slug === "backend-development" ? "Why Backend Quality Matters" : "Why Quality Matters"}
          subtitle={expertise.slug === "frontend-development" ? "The frontend is often the first—and only—touchpoint users have with your product" : expertise.slug === "backend-development" ? "Backend systems fail quietly — until they don't" : undefined}
          costsTitle={expertise.slug === "frontend-development" ? "Poor frontend engineering costs you" : expertise.slug === "backend-development" ? "Poor backend engineering costs you" : "Poor engineering costs you"}
          costs={pageData.qualityMatters.costs}
          benefitsTitle={expertise.slug === "frontend-development" ? "Premium frontend development is an investment in" : expertise.slug === "backend-development" ? "Premium backend development is an investment in" : "Premium development is an investment in"}
          benefits={pageData.qualityMatters.benefits}
        />
      )}

      {pageData.architecture && (
        <ArchitectureSection
          title={pageData.architecture.title}
          subtitle={pageData.architecture.subtitle}
          diagramSrc={pageData.architecture.diagramSrc}
          layers={pageData.architecture.layers}
        />
      )}

      {pageData.engagementModels && (
        <EngagementModels
          title={pageData.engagementModels.title}
          subtitle={pageData.engagementModels.subtitle}
          models={pageData.engagementModels.models}
        />
      )}

      {pageData.riskReversal && (
        <RiskReversal
          title={pageData.riskReversal.title}
          subtitle={pageData.riskReversal.subtitle}
          items={pageData.riskReversal.items || []}
          closingNote={pageData.riskReversal.closingNote}
          variant={pageData.riskReversal.variant}
          leftTriggers={pageData.riskReversal.leftTriggers}
          rightBlocks={pageData.riskReversal.rightBlocks}
        />
      )}

      {/* CTA with testimonial for pages that have it, regular CTA otherwise */}
      {pageData.ctaTestimonial ? (
        <ExpertiseCTAWithTestimonial
          headline={pageData.cta.headline}
          description={pageData.cta.description}
          buttonText={pageData.cta.buttonText}
          buttonLink={pageData.cta.buttonLink}
          supportingNote={pageData.cta.supportingNote}
          testimonial={pageData.ctaTestimonial}
        />
      ) : (
        <ExpertiseCTA
          headline={pageData.cta.headline}
          description={pageData.cta.description}
        />
      )}

      {pageData.faqs.length > 0 && <FAQSection faqs={pageData.faqs} />}

      {relatedPages.length > 0 && <RelatedExpertise pages={relatedPages} />}
    </main>
  );
}
