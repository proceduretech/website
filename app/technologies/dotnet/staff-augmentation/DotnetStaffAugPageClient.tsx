"use client";

import { PageHero } from "@/components/ui/PageHero";
import { ProcessTimeline } from "@/components/expertise/ProcessTimeline";
import { FAQSection } from "@/components/expertise/FAQSection";
import { CalInline } from "@/components/CalInline";
import {
  ProblemSignals,
  ServiceFeatures,
  SkillsTable,
  UseCaseStories,
  EngagementModels,
  RelatedDotnetServices,
} from "@/components/technologies";
import {
  heroData,
  problemSignals,
  problemTitle,
  problemIntro,
  serviceFeatures,
  serviceFeaturesTitle,
  approachSteps,
  skillsTitle,
  skillsTable,
  specializedSkills,
  useCasesTitle,
  useCases,
  whyProcedureTitle,
  whyProcedure,
  engagementModelsTitle,
  engagementModels,
  faqs,
  ctaData,
  relatedServices,
} from "@/lib/dotnet-staff-augmentation-data";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function DotnetStaffAugPageClient() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://procedure.tech/technologies/dotnet/staff-augmentation#service",
        name: ".NET Staff Augmentation",
        description: heroData.description,
        provider: {
          "@type": "Organization",
          "@id": "https://procedure.tech/#organization",
        },
        serviceType: [
          ".NET Staff Augmentation",
          "Hire .NET Developers",
          ".NET Developer Augmentation",
          "ASP.NET Core Developers for Hire",
          ".NET Team Extension",
        ],
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: ".NET Staff Augmentation Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Individual .NET Developer",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: ".NET Developer Pod",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Extended .NET Team",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://procedure.tech/technologies/dotnet/staff-augmentation#faq",
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
          "https://procedure.tech/technologies/dotnet/staff-augmentation#breadcrumb",
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
            name: ".NET Staff Augmentation",
            item: "https://procedure.tech/technologies/dotnet/staff-augmentation",
          },
        ],
      },
    ],
  };

  return (
    <LazyMotion features={domAnimation}>
    <main className="min-h-screen">
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
        headlineAccent={heroData.headlineAccent}
        description={heroData.description}
        primaryCTA={heroData.primaryCTA}
        showClientLogos={true}
      >
        <div className="flex items-center justify-center gap-3 text-xs text-text-muted -mt-6">
          {heroData.trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-1.5">
              {index > 0 && (
                <div className="w-1 h-1 rounded-full bg-border mr-1.5" />
              )}
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
              {signal}
            </div>
          ))}
        </div>
      </PageHero>

      {/* Why Staff Augmentation */}
      <ProblemSignals
        title={problemTitle}
        intro={problemIntro}
        signals={problemSignals}
      />

      {/* What You Get */}
      <ServiceFeatures
        title={serviceFeaturesTitle}
        features={serviceFeatures}
        variant="editorial"
      />

      {/* How It Works */}
      <ProcessTimeline
        title="How .NET Staff Augmentation Works"
        subtitle="From requirements to a productive developer in under a week"
        steps={approachSteps}
      />

      {/* Skills Table */}
      <SkillsTable
        title={skillsTitle}
        skills={skillsTable}
        specializedSkills={specializedSkills}
      />

      {/* Use Cases */}
      <UseCaseStories title={useCasesTitle} cases={useCases} />

      {/* Why Procedure */}
      <ServiceFeatures
        title={whyProcedureTitle}
        features={whyProcedure.map((vp) => ({
          title: vp.title,
          description: vp.description,
          icon: vp.icon,
        }))}
        variant="compact"
      />

      {/* Engagement Models */}
      <EngagementModels
        title={engagementModelsTitle}
        models={engagementModels}
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
      <FAQSection title=".NET Staff Augmentation FAQ" faqs={faqs} />

      {/* Related Services */}
      <RelatedDotnetServices
        title="Related .NET Services"
        services={relatedServices}
      />
    </main>
    </LazyMotion>
  );
}
