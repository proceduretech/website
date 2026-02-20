"use client";

import { PageHero } from "@/components/ui/PageHero";
import { ProcessTimeline } from "@/components/expertise/ProcessTimeline";
import { FAQSection } from "@/components/expertise/FAQSection";
import { CalInline } from "@/components/CalInline";
import {
  ProblemSignals,
  MigrationPathsTable,
  TechnicalCapabilities,
  RiskMitigation,
  RelatedDotnetServices,
} from "@/components/technologies";
import {
  heroData,
  problemSignals,
  problemIntro,
  migrationPaths,
  migrationPathsIntro,
  migrationPathsNote,
  approachSteps,
  technicalCapabilities,
  riskScenarios,
  riskIntro,
  faqs,
  ctaData,
  relatedServices,
} from "@/lib/dotnet-modernization-data";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function DotnetModernizationPageClient() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://procedure.tech/technologies/dotnet/modernization#service",
        name: ".NET Modernization Services",
        description: heroData.description,
        provider: {
          "@type": "Organization",
          "@id": "https://procedure.tech/#organization",
        },
        serviceType: [
          ".NET Modernization",
          ".NET Migration Services",
          ".NET Framework to .NET 8 Migration",
          "Legacy .NET Modernization",
          "ASP.NET Core Migration",
        ],
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "India" },
        ],
        availableChannel: [
          {
            "@type": "ServiceChannel",
            serviceUrl:
              "https://procedure.tech/technologies/dotnet/modernization",
            serviceType: "Remote",
          },
        ],
        category: [
          ".NET Modernization",
          "Application Migration",
          "Legacy System Modernization",
          "Cloud Migration",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://procedure.tech/technologies/dotnet/modernization#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://procedure.tech/technologies/dotnet/modernization#breadcrumb",
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
            name: ".NET Development",
            item: "https://procedure.tech/technologies/dotnet",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: ".NET Modernization",
            item: "https://procedure.tech/technologies/dotnet/modernization",
          },
        ],
      },
    ],
  };

  return (
    <LazyMotion features={domAnimation}>
    <main className="min-h-screen">
      {/* Combined JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />

      {/* Hero Section */}
      <PageHero
        badge={heroData.badge}
        headline={heroData.headline}
        description={heroData.description}
        primaryCTA={heroData.primaryCTA}
        showClientLogos={true}
      >
        <div className="flex items-center justify-center gap-3 text-xs text-text-muted -mt-6">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-accent"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            No obligation
          </div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-accent"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            2-week assessment
          </div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-accent"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Technical roadmap included
          </div>
        </div>
      </PageHero>

      {/* Problem Signals Section */}
      <ProblemSignals
        title="Is Your Legacy .NET Holding You Back?"
        intro={problemIntro}
        signals={problemSignals}
      />

      {/* Migration Paths Table */}
      <MigrationPathsTable
        title=".NET Migration Paths We Support"
        intro={migrationPathsIntro}
        paths={migrationPaths}
        note={migrationPathsNote}
      />

      {/* Approach / Process Timeline */}
      <ProcessTimeline
        title="Our .NET Modernization Approach"
        subtitle="A proven process that minimizes risk and maximizes velocity"
        steps={approachSteps}
      />

      {/* Technical Capabilities */}
      <TechnicalCapabilities
        title="What We Modernize in .NET"
        groups={technicalCapabilities}
      />

      {/* Risk Mitigation */}
      <RiskMitigation
        title="How We Prevent .NET Modernization Failures"
        intro={riskIntro}
        scenarios={riskScenarios}
      />

      {/* CTA Section with Cal.com Embed */}
      <section
        id="book-call"
        className="relative py-16 sm:py-24 bg-surface scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary mb-6">
              {ctaData.title}
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-4">
              {ctaData.description}
            </p>
            <p className="text-sm text-text-muted">{ctaData.closingNote}</p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-border bg-surface-elevated"
          >
            <CalInline className="h-[600px]" />
          </m.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title=".NET Modernization FAQ" faqs={faqs} />

      {/* Related Services */}
      <RelatedDotnetServices
        title="Related .NET Services"
        services={relatedServices}
      />
    </main>
    </LazyMotion>
  );
}
