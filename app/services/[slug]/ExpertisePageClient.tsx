"use client";

import type { ExpertisePageForListing } from "@/lib/content";
import { Icons } from "@/lib/expertise-data";
import {
  ExpertiseHero,
  CapabilitiesGrid,
  WhyProcedure,
  TechStack,
  FAQSection,
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
import { CalInline } from "@/components/CalInline";
import { motion } from "framer-motion";

interface RelatedPage {
  slug: string;
  title: string;
  description: string;
  badge: string;
}

interface Props {
  expertise: ExpertisePageForListing;
  relatedPages: RelatedPage[];
  basePath?: string;
}

// Customized booking section copy per expertise
const bookingSubtext: Record<string, string> = {
  "ai-engineering":
    "Share your AI project requirements—from model architecture to MLOps infrastructure. We'll outline a practical path from prototype to production-ready deployment.",
  "ai-agents":
    "Tell us about the workflows you want to automate with AI agents. We'll discuss tool integrations, safety guardrails, and a realistic timeline to deployment.",
  "ai-security":
    "Describe your AI system's architecture and security concerns. We'll assess prompt injection risks, output vulnerabilities, and recommend a defense strategy.",
  "ai-privacy":
    "Share your compliance requirements and data handling challenges. We'll discuss privacy-preserving architectures and how to meet GDPR, HIPAA, or SOC 2 standards.",
  "mobile-development":
    "Walk us through your mobile app vision—native or cross-platform. We'll help you choose the right approach and plan for a smooth App Store launch.",
  "frontend-development":
    "Tell us about your web application challenges—whether a new build or performance optimization. We'll discuss framework choices, design implementation, and Core Web Vitals.",
  "backend-development":
    "Describe your backend architecture needs—APIs, data pipelines, or scaling challenges. We'll assess the right stack and infrastructure for your growth trajectory.",
  "software-testing-and-qa":
    "Share your testing challenges—flaky tests, missing coverage, or CI/CD gaps. We'll outline a test automation strategy that fits your development workflow.",
  "product-design":
    "Tell us about your AI product and the user experience challenges you face. We'll discuss research methods, prototyping, and design patterns that build user trust.",
  "kubernetes":
    "Describe your container orchestration needs—new clusters, migrations, or operational pain points. We'll assess your workloads and recommend a production-ready approach.",
  "dotnet":
    "Talk directly with engineers\u2014not sales. We\u2019ll assess fit and give honest next steps.",
};

export default function ExpertisePageClient({
  expertise,
  relatedPages,
  basePath = "/services",
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
        "@id": `https://procedure.tech${basePath}/${expertise.slug}#service`,
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
            : expertise.slug === "dotnet"
            ? [".NET Development Services", "ASP.NET Core Development", "C# Development", "Azure .NET Development", ".NET Migration Services", "Enterprise .NET Consulting"]
            : pageData.hero.badge,
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "India" },
        ],
        availableChannel: [
          {
            "@type": "ServiceChannel",
            serviceUrl: `https://procedure.tech${basePath}/${expertise.slug}`,
            serviceType: "In-Person",
          },
          {
            "@type": "ServiceChannel",
            serviceUrl: `https://procedure.tech${basePath}/${expertise.slug}`,
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
            : expertise.slug === "dotnet"
            ? [".NET Development", "ASP.NET Core", "C# Development", "Azure Development", "Enterprise Software Development"]
            : [pageData.hero.badge, "Enterprise AI Engineering", "Software Development"],
      },
      // FAQ Schema (only if FAQs exist)
      ...(pageData.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `https://procedure.tech${basePath}/${expertise.slug}#faq`,
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
        "@id": `https://procedure.tech${basePath}/${expertise.slug}#breadcrumb`,
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
            name: basePath === "/technologies" ? "Technologies" : "Services",
            item: `https://procedure.tech${basePath}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pageData.hero.badge,
            item: `https://procedure.tech${basePath}/${expertise.slug}`,
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
        description={pageData.hero.description}
        primaryCTA={
          expertise.slug === "frontend-development"
            ? { text: "Talk to a Frontend Specialist", href: "#book-call" }
            : expertise.slug === "backend-development"
            ? { text: "Talk to a Backend Specialist", href: "#book-call" }
            : expertise.slug === "dotnet"
            ? { text: "Talk to a .NET Expert", href: "#book-call" }
            : undefined
        }
        secondaryCTA={
          [
            "ai-engineering",
            "ai-agents",
            "ai-security",
            "ai-privacy",
            "dotnet",
          ].includes(expertise.slug)
            ? undefined
            : { text: "View Case Studies", href: "/work" }
        }
      >
        {expertise.slug === "dotnet" && (
          <div className="flex items-center justify-center gap-3 text-xs text-text-muted -mt-6">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              No obligation
            </div>
            <div className="w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              30-minute call
            </div>
            <div className="w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              Talk with engineers, not sales
            </div>
          </div>
        )}
      </ExpertiseHero>

      {expertise.slug === "dotnet" && (
        <Stats
          title=".NET Development Track Record"
          stats={[
            { value: "40+", label: "Production .NET Systems" },
            { value: "6\u20138 Weeks", label: "Time to Production Release" },
            { value: "95%+", label: "Client Retention Rate" },
            { value: ".NET 8 + Azure", label: "Primary Stack" },
          ]}
        />
      )}

      <CapabilitiesGrid
        title={expertise.slug === "dotnet" ? ".NET Development Services We Offer" : "Key Capabilities"}
        subtitle={expertise.slug === "dotnet" ? "End-to-end .NET services\u2014from greenfield builds to legacy modernization." : "Everything you need to build production-grade solutions"}
        capabilities={capabilities}
      />

      {["frontend-development", "backend-development", "dotnet"].includes(expertise.slug) && pageData.whoWeWorkWith && (
        <WhoWeWorkWith
          title={pageData.whoWeWorkWith.title || "Who We Work With"}
          audiences={pageData.whoWeWorkWith.audiences.map((a) => ({
            ...a,
            icon: Icons[a.icon as keyof typeof Icons] || Icons.users,
          }))}
          closingStatement={pageData.whoWeWorkWith.closingStatement}
          commonApplications={pageData.whoWeWorkWith.commonApplications}
          variant={expertise.slug === "dotnet" ? "tabs" : "cards"}
        />
      )}

      {/* For dotnet: Philosophy section comes early, before TechStack */}
      {expertise.slug === "dotnet" && pageData.philosophy && (
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

      {expertise.slug === "dotnet" ? (
        <TechStack
          title=".NET Technology Stack We Use"
          variant="grouped"
          groups={[
            { category: "Runtime & Frameworks", items: [".NET 8 / .NET 9", "ASP.NET Core", "Blazor", "Entity Framework Core", "Minimal APIs"] },
            { category: "Cloud Platforms", items: ["Microsoft Azure", "AWS", "GCP"] },
            { category: "Infrastructure & DevOps", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Azure DevOps"] },
            { category: "Data & Caching", items: ["SQL Server", "PostgreSQL", "Redis", "Azure Cosmos DB"] },
            { category: "Observability", items: ["Application Insights", "Serilog", "OpenTelemetry", "Seq"] },
            { category: "Messaging & Patterns", items: ["RabbitMQ", "Azure Service Bus", "MediatR", "MassTransit"] },
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
      {expertise.slug !== "dotnet" && pageData.whyChoose && (
        <WhyChooseProcedure
          title={pageData.whyChoose.title || (expertise.slug === "frontend-development" ? "Why Choose Procedure for Frontend Development" : expertise.slug === "backend-development" ? "Why Choose Procedure for Backend Development" : `Why Choose Procedure for ${pageData.hero.badge}`)}
          subtitle={pageData.whyChoose.subtitle}
          reasonsTitle={pageData.whyChoose.reasonsTitle}
          reasons={pageData.whyChoose.reasons}
          outcomesTitle={pageData.whyChoose.outcomesTitle || (expertise.slug === "frontend-development" ? "Outcomes from recent frontend engagements" : expertise.slug === "backend-development" ? "Outcomes from recent backend engagements" : "Outcomes from recent engagements")}
          outcomes={pageData.whyChoose.outcomes}
        />
      )}

      {expertise.slug !== "dotnet" && pageData.testimonials && pageData.testimonials.length > 0 && (
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

      {/* Mid-page CTA for dotnet - before Architecture section */}
      {expertise.slug === "dotnet" && (
        <section className="relative py-16 sm:py-24 bg-base">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Discuss Your <span className="text-highlight">.NET Project</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Whether modernizing legacy systems or building new&mdash;we&rsquo;re happy to talk through your situation.
              </p>
              <a
                href="#book-call"
                className="inline-flex items-center px-8 py-3 rounded-lg bg-cta text-cta-text font-semibold hover:brightness-110 transition-all"
              >
                Schedule a Call
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <p className="text-sm text-text-muted mt-4">No sales pitch. Just an honest conversation.</p>
            </motion.div>
          </div>
        </section>
      )}

      {pageData.architecture && (
        <ArchitectureSection
          title={pageData.architecture.title}
          subtitle={pageData.architecture.subtitle}
          diagramSrc={pageData.architecture.diagramSrc}
          layers={pageData.architecture.layers}
        />
      )}

      {/* For dotnet: Testimonials after Architecture (social proof earlier) */}
      {expertise.slug === "dotnet" && pageData.testimonials && pageData.testimonials.length > 0 && (
        <Testimonials />
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

      {/* Book a Call Section */}
      <section id="book-call" className="relative py-16 sm:py-24 bg-surface scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to Discuss Your
              <br />
              <span className="text-highlight">{pageData.hero.badge} Project?</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              {bookingSubtext[expertise.slug] ||
                "Schedule a call with our engineering team. We'll discuss your technical requirements and provide an honest assessment of how we can help."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-border bg-surface-elevated"
          >
            <CalInline className="h-[600px]" />
          </motion.div>
        </div>
      </section>

      {pageData.faqs.length > 0 && (
        <FAQSection
          title={expertise.slug === "dotnet" ? ".NET Development Services FAQ" : undefined}
          faqs={pageData.faqs}
        />
      )}

      {relatedPages.length > 0 && <RelatedExpertise pages={relatedPages} />}
    </main>
  );
}
