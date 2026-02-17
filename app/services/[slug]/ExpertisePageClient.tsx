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
    "Share your AI project requirements, from model architecture to MLOps infrastructure. We'll outline a practical path from prototype to production-ready deployment.",
  "ai-agents":
    "Tell us about the workflows you want to automate with AI agents. We'll discuss tool integrations, safety guardrails, and a realistic timeline to deployment.",
  "mobile-development":
    "Walk us through your mobile app vision, native or cross-platform. We'll help you choose the right approach and plan for a smooth App Store launch.",
  "frontend-development":
    "Tell us about your web application challenges, whether a new build or performance optimization. We'll discuss framework choices, design implementation, and Core Web Vitals.",
  "backend-development":
    "Describe your backend architecture needs: APIs, data pipelines, or scaling challenges. We'll assess the right stack and infrastructure for your growth trajectory.",
  "software-testing-and-qa":
    "Share your testing challenges: flaky tests, missing coverage, or CI/CD gaps. We'll outline a test automation strategy that fits your development workflow.",
  "product-design":
    "Tell us about your AI product and the user experience challenges you face. We'll discuss research methods, prototyping, and design patterns that build user trust.",
  "kubernetes":
    "Describe your container orchestration needs: new clusters, migrations, or operational pain points. We'll assess your workloads and recommend a production-ready approach.",
  "dotnet":
    "Talk directly with engineers, not sales. We\u2019ll assess fit and give honest next steps.",
  "nextjs":
    "Tell us about your Next.js project. Whether it\u2019s a new build, migration, or performance optimization, we\u2019ll discuss architecture and give honest next steps.",
  "nodejs":
    "Tell us about your backend requirements. Whether it\u2019s APIs, microservices, or a full system migration, we\u2019ll give honest architecture guidance.",
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
            : expertise.slug === "nextjs"
            ? ["Next.js Development Services", "React Development", "SSR Development", "Frontend Engineering", "Web Application Development"]
            : expertise.slug === "nodejs"
            ? ["Node.js Development Services", "API Development", "Microservices Development", "Backend Engineering", "Real-Time Applications"]
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
            : expertise.slug === "nextjs"
            ? ["Next.js Development", "React Development", "Frontend Engineering", "Web Application Development", "Server-Side Rendering"]
            : expertise.slug === "nodejs"
            ? ["Node.js Development", "Backend Engineering", "API Development", "Microservices Architecture", "Real-Time Systems"]
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
            : expertise.slug === "nextjs"
            ? { text: "Talk to a Next.js Engineer", href: "#book-call" }
            : expertise.slug === "nodejs"
            ? { text: "Talk to a Backend Engineer", href: "#book-call" }
            : undefined
        }
        secondaryCTA={
          [
            "ai-engineering",
            "ai-agents",
            "dotnet",
            "nextjs",
            "nodejs",
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
        {expertise.slug === "nextjs" && (
          <>
            <div className="flex items-center justify-center gap-3 text-xs text-text-muted -mt-6">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                No strings attached
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
                Talk to engineers, not sales
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 text-sm">
              <a href="#services" className="text-accent hover:text-accent-light transition-colors flex items-center gap-1.5">
                Need an app built?
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <a href="#hire" className="text-accent hover:text-accent-light transition-colors flex items-center gap-1.5">
                Need developers on your team?
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>
          </>
        )}
        {expertise.slug === "nodejs" && (
          <>
            <div className="flex items-center justify-center gap-3 text-xs text-text-muted -mt-6">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Zero commitment to start
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
                Talk to engineers, not sales
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 text-sm">
              <a href="#services" className="text-accent hover:text-accent-light transition-colors flex items-center gap-1.5">
                Need a project built?
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <a href="#hire" className="text-accent hover:text-accent-light transition-colors flex items-center gap-1.5">
                Need developers on your team?
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>
          </>
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

      <div id={["nodejs", "nextjs"].includes(expertise.slug) ? "services" : undefined}>
        <CapabilitiesGrid
          title={expertise.slug === "dotnet" ? ".NET Development Services We Offer" : expertise.slug === "nextjs" ? "What We Build With Next.js" : expertise.slug === "nodejs" ? "Node.js Development Services" : "Key Capabilities"}
          subtitle={expertise.slug === "dotnet" ? "End-to-end .NET services, from greenfield builds to legacy modernization." : expertise.slug === "nextjs" ? "From marketing sites to complex web applications, we deliver production-grade Next.js solutions." : expertise.slug === "nodejs" ? "APIs, microservices, real-time systems, and the backend your product runs on." : "Everything you need to build production-grade solutions"}
          capabilities={capabilities}
        />
      </div>

      {["frontend-development", "backend-development", "dotnet", "nextjs"].includes(expertise.slug) && pageData.whoWeWorkWith && (
        <WhoWeWorkWith
          title={pageData.whoWeWorkWith.title || "Who We Work With"}
          audiences={pageData.whoWeWorkWith.audiences.map((a) => ({
            ...a,
            icon: Icons[a.icon as keyof typeof Icons] || Icons.users,
          }))}
          closingStatement={pageData.whoWeWorkWith.closingStatement}
          commonApplications={pageData.whoWeWorkWith.commonApplications}
          variant={expertise.slug === "dotnet" || expertise.slug === "nextjs" ? "tabs" : "cards"}
        />
      )}

      {/* Node.js: Decision table - Is Node.js Right for Your Backend? */}
      {expertise.slug === "nodejs" && (
        <section id="fit" className="relative py-16 sm:py-24 bg-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Is Node.js Right for Your <span className="text-highlight">Backend?</span>
              </h2>
              <p className="text-text-secondary">The right tool for the job, not the trendy one.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { need: "REST APIs and GraphQL services", fit: "Non-blocking I/O handles thousands of concurrent API calls without choking under load" },
                { need: "Real-time applications (chat, notifications, live dashboards)", fit: "Event-driven architecture and native WebSocket support built for persistent connections" },
                { need: "Microservices architecture", fit: "Lightweight runtime with fast cold starts and a small memory footprint per service" },
                { need: "Full-stack JavaScript teams", fit: "Same language across frontend and backend. Shared types with TypeScript. Fewer context switches, faster cycles." },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6"
                >
                  <p className="font-semibold text-text-primary mb-2">{row.need}</p>
                  <p className="text-sm text-text-secondary">{row.fit}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-sm text-text-muted mb-6 max-w-3xl mx-auto text-center">
                Not always the right call for CPU-intensive processing like video encoding or ML model training, or for teams deeply invested in Python or Java with no JavaScript experience. We&apos;ll tell you upfront if something else fits better.
              </p>
              <div className="text-center">
                <a
                  href="#book-call"
                  className="inline-flex items-center text-accent hover:text-accent-light transition-colors text-sm font-medium"
                >
                  Book a free architecture call
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <p className="text-xs text-text-muted mt-2">
                  We&apos;ve recommended Python and Go over Node.js when the workload demanded it.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
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
        <div id={expertise.slug === "nodejs" ? "process" : undefined}>
          <ProcessTimeline
            title={expertise.slug === "frontend-development" ? "Our Frontend Development Process" : expertise.slug === "backend-development" ? "Our Backend Development Process" : expertise.slug === "nextjs" ? "How We Deliver Next.js Projects" : expertise.slug === "nodejs" ? "How We Deliver Node.js Projects" : "Our Process"}
            subtitle={expertise.slug === "nodejs" ? "Working software every sprint, not just progress updates." : "A predictable process built for high-quality delivery"}
            steps={pageData.process}
          />
        </div>
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
      ) : expertise.slug === "nextjs" ? (
        <TechStack
          title="Next.js Technology Stack We Use"
          variant="grouped"
          groups={[
            { category: "Framework & Language", items: ["Next.js 14 / 15", "React 18 / 19", "TypeScript"] },
            { category: "Styling & UI", items: ["Tailwind CSS", "CSS Modules", "Radix UI", "shadcn/ui", "Framer Motion"] },
            { category: "CMS & Content", items: ["Sanity", "Contentful", "Strapi", "Notion API", "MDX"] },
            { category: "Database & ORM", items: ["PostgreSQL", "Prisma", "Drizzle", "Supabase", "PlanetScale"] },
            { category: "Auth & Identity", items: ["NextAuth.js", "Clerk", "Auth0", "Supabase Auth"] },
            { category: "Hosting & Deployment", items: ["Vercel", "AWS Amplify", "Docker", "Cloudflare Pages"] },
            { category: "Testing", items: ["Playwright", "Cypress", "Vitest", "React Testing Library"] },
            { category: "CI/CD & Monitoring", items: ["GitHub Actions", "Vercel Analytics", "Sentry", "DataDog"] },
          ]}
        />
      ) : expertise.slug === "nodejs" ? (
        /* Node.js: Custom 3-column stack table */
        <section id="stack" className="relative py-16 sm:py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Our <span className="text-highlight">Node.js</span> Stack
              </h2>
              <p className="text-text-secondary">Every tool earns its place. Here&apos;s what we ship with and why.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-x-auto -mx-4 sm:mx-0"
            >
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary w-[20%]">Layer</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary w-[30%]">Tools</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary w-[50%]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { layer: "Runtime", tools: "Node.js 22 LTS", why: "Long-term support, native ESM, meaningful performance gains over older versions" },
                    { layer: "Framework", tools: "NestJS, Fastify, Express", why: "NestJS for enterprise patterns, Fastify for raw throughput, Express for ecosystem breadth" },
                    { layer: "Language", tools: "TypeScript (strict mode)", why: "Type safety across the full stack. Non-negotiable on our projects." },
                    { layer: "ORM / Query", tools: "Prisma, Drizzle ORM", why: "Prisma for type-safe queries and migrations. Drizzle when targeting edge or serverless runtimes." },
                    { layer: "Database", tools: "PostgreSQL, MongoDB, Redis", why: "Postgres for relational data, MongoDB for document workloads, Redis for caching and job queues" },
                    { layer: "Message Queue", tools: "BullMQ, AWS SQS, RabbitMQ", why: "BullMQ for straightforward background jobs. SQS or RabbitMQ for service-to-service communication." },
                    { layer: "API Style", tools: "REST, GraphQL (Apollo), gRPC", why: "REST for public-facing APIs, GraphQL for frontend flexibility, gRPC for low-latency internal calls" },
                    { layer: "Auth", tools: "Passport.js, JWT, OAuth2", why: "Strategy-based auth with Passport, stateless tokens via JWT, third-party login with OAuth2" },
                    { layer: "Testing", tools: "Jest, Vitest, Supertest", why: "Unit and integration tests alongside every feature. Supertest for API endpoint validation." },
                    { layer: "Hosting", tools: "AWS (ECS, Lambda), GCP, Vercel", why: "Containers when you need control, serverless when cost efficiency matters" },
                    { layer: "CI/CD", tools: "GitHub Actions, Docker", why: "Automated test runs, container builds, and zero-downtime deployments on every merge" },
                    { layer: "Monitoring", tools: "Datadog, Sentry, Prometheus + Grafana", why: "APM for performance bottlenecks, Sentry for error tracking, Grafana for custom dashboards" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-surface-elevated/30 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-accent">{row.layer}</td>
                      <td className="py-3 px-4 text-sm text-text-primary">{row.tools}</td>
                      <td className="py-3 px-4 text-sm text-text-secondary">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 border-l-2 border-accent/40 pl-4 max-w-3xl"
            >
              <p className="text-sm text-text-secondary">
                We pick the framework based on your constraints. NestJS if your team values structure and enterprise patterns. Fastify if raw throughput is the priority. Express if simplicity and ecosystem size matter most. There is no single right answer, and anyone telling you otherwise is selling something.
              </p>
            </motion.div>
          </div>
        </section>
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
          subtitle={expertise.slug === "frontend-development" ? "The frontend is often the first, and often only, touchpoint users have with your product" : expertise.slug === "backend-development" ? "Backend systems fail quietly, until they don't" : undefined}
          costsTitle={expertise.slug === "frontend-development" ? "Poor frontend engineering costs you" : expertise.slug === "backend-development" ? "Poor backend engineering costs you" : "Poor engineering costs you"}
          costs={pageData.qualityMatters.costs}
          benefitsTitle={expertise.slug === "frontend-development" ? "Premium frontend development is an investment in" : expertise.slug === "backend-development" ? "Premium backend development is an investment in" : "Premium development is an investment in"}
          benefits={pageData.qualityMatters.benefits}
        />
      )}

      {/* Mid-page CTA for dotnet/nextjs/nodejs - before Architecture section */}
      {["dotnet", "nextjs", "nodejs"].includes(expertise.slug) && (
        <section className="relative py-16 sm:py-24 bg-base">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Discuss Your <span className="text-highlight">{expertise.slug === "nextjs" ? "Next.js" : expertise.slug === "nodejs" ? "Node.js" : ".NET"} Project</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                {expertise.slug === "nextjs"
                  ? "Whether it\u2019s a new build, migration, or performance optimization, we\u2019re happy to talk through your situation."
                  : expertise.slug === "nodejs"
                  ? "Whether it\u2019s APIs, microservices, or a full backend migration, we\u2019re happy to talk through your situation."
                  : "Whether modernizing legacy systems or building new, we\u2019re happy to talk through your situation."}
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
        <div id={["nodejs", "nextjs"].includes(expertise.slug) ? "hire" : undefined}>
          {/* Node.js: "What you get" block before EngagementModels */}
          {expertise.slug === "nodejs" && (
            <section className="relative pt-16 sm:pt-24 pb-0 bg-base">
              <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 sm:p-8 mb-0"
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-3">What you get</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Engineers with 4+ years building production Node.js systems in NestJS, Express, or Fastify. Not tutorial-level experience. Full backend capability spanning API design, database optimization, DevOps, and cloud infrastructure. TypeScript as standard across every project. Clean, tested, documented code.
                  </p>
                  <p className="text-xs text-text-muted mt-4">
                    Our team is based in India with flexible hours overlapping US EST and PST time zones.
                  </p>
                </motion.div>
              </div>
            </section>
          )}

          <EngagementModels
            title={pageData.engagementModels.title}
            subtitle={pageData.engagementModels.subtitle}
            models={pageData.engagementModels.models}
          />

          {/* Node.js: Pricing line + CTA after EngagementModels */}
          {expertise.slug === "nodejs" && (
            <section className="relative pt-0 pb-8 bg-base">
              <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <p className="text-sm text-text-secondary mb-6">
                    Starting at $3,500/month per developer for full-time dedicated engagement.
                  </p>
                  <a
                    href="#book-call"
                    className="inline-flex items-center px-8 py-3 rounded-lg bg-cta text-cta-text font-semibold hover:brightness-110 transition-all"
                  >
                    Talk to Us About Your Team
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </section>
          )}
        </div>
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
        <div id={expertise.slug === "nodejs" ? "faq" : undefined}>
          <FAQSection
            title={expertise.slug === "dotnet" ? ".NET Development Services FAQ" : expertise.slug === "nextjs" ? "Next.js Development FAQ" : expertise.slug === "nodejs" ? "Node.js Development FAQ" : undefined}
            faqs={pageData.faqs}
          />
        </div>
      )}

      {relatedPages.length > 0 && <RelatedExpertise pages={relatedPages} />}
    </main>
  );
}
