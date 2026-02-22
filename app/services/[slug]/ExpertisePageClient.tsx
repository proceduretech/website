"use client";

import { type ReactNode } from "react";
import type { ExpertisePageForListing } from "@/lib/content";
import { Icons } from "@/lib/expertise-data";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation, m } from "framer-motion";

// Dynamic import slug-specific sections — each slug's chunk only downloads for that page
const WhySection = dynamic(() => import("./slug-sections/WhySection"));
const DecisionFramework = dynamic(() => import("./slug-sections/DecisionFramework"));
const TechDecisionTable = dynamic(() => import("./slug-sections/TechDecisionTable"));
const FrameworkComparison = dynamic(() => import("./slug-sections/FrameworkComparison"));
const CustomStackTable = dynamic(() => import("./slug-sections/CustomStackTable"));
const DotnetSections = dynamic(() => import("./slug-sections/DotnetSections"));

// Dynamic import below-fold sections — defers JS hydration for faster LCP
const CapabilitiesGrid = dynamic(() => import("@/components/expertise/CapabilitiesGrid").then(mod => ({ default: mod.CapabilitiesGrid })));
const WhyProcedure = dynamic(() => import("@/components/expertise/WhyProcedure").then(mod => ({ default: mod.WhyProcedure })));
const TechStack = dynamic(() => import("@/components/expertise/TechStack").then(mod => ({ default: mod.TechStack })));
const FAQSection = dynamic(() => import("@/components/expertise/FAQSection").then(mod => ({ default: mod.FAQSection })));
const RelatedExpertise = dynamic(() => import("@/components/expertise/RelatedExpertise").then(mod => ({ default: mod.RelatedExpertise })));
const WhoWeWorkWith = dynamic(() => import("@/components/expertise/WhoWeWorkWith").then(mod => ({ default: mod.WhoWeWorkWith })));
const ProcessTimeline = dynamic(() => import("@/components/expertise/ProcessTimeline").then(mod => ({ default: mod.ProcessTimeline })));
const UseCasesGrid = dynamic(() => import("@/components/expertise/UseCasesGrid").then(mod => ({ default: mod.UseCasesGrid })));
const WhyChooseProcedure = dynamic(() => import("@/components/expertise/WhyChooseProcedure").then(mod => ({ default: mod.WhyChooseProcedure })));
const QualityMatters = dynamic(() => import("@/components/expertise/QualityMatters").then(mod => ({ default: mod.QualityMatters })));
const ArchitectureSection = dynamic(() => import("@/components/expertise/ArchitectureSection").then(mod => ({ default: mod.ArchitectureSection })));
const EngagementModels = dynamic(() => import("@/components/expertise/EngagementModels").then(mod => ({ default: mod.EngagementModels })));
const RiskReversal = dynamic(() => import("@/components/expertise/RiskReversal").then(mod => ({ default: mod.RiskReversal })));
const PhilosophySection = dynamic(() => import("@/components/expertise/PhilosophySection").then(mod => ({ default: mod.PhilosophySection })));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => ({ default: mod.Testimonials })));
const Stats = dynamic(() => import("@/components/sections/Stats").then(mod => ({ default: mod.Stats })));
const CalInline = dynamic(() => import("@/components/CalInline").then(mod => ({ default: mod.CalInline })));

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
  heroSlot?: ReactNode;
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
  "react":
    "Tell us about your React project. Whether it\u2019s a new build, migration, or performance optimization, we\u2019ll discuss architecture and give honest next steps.",
  "python":
    "Tell us about your Python project. Whether it\u2019s backend APIs, AI engineering, or a full system migration, we\u2019ll discuss architecture and give honest next steps.",
  "angular":
    "Tell us about your Angular project. Whether it\u2019s a new build, AngularJS migration, or performance optimization, we\u2019ll discuss architecture and give honest next steps.",
  "flutter":
    "Tell us about your Flutter project. Whether it\u2019s a new app, migration from native, or multi-platform expansion, we\u2019ll discuss architecture and give honest next steps.",
  "react-native":
    "Tell us about your React Native project. Whether it\u2019s a new app, migration from native, or adding mobile to your React web app, we\u2019ll discuss architecture and give honest next steps.",
  "prometheus-monitoring":
    "Talk directly with engineers, not sales. We'll assess your monitoring stack and give honest next steps - even if that means sticking with what you have.",
  "istio-consulting":
    "Talk directly with engineers, not sales. We'll assess fit and give honest next steps.",
  "thanos-long-term-storage":
    "Talk directly with engineers, not sales. We'll assess your monitoring stack and give honest next steps - even if that means you don't need Thanos yet.",
};

// Technology logo paths for the "What you get" section
const technologyLogos: Record<string, string> = {
  react: "/technologies/react-logo.svg",
  nodejs: "/technologies/nodejs-logo.svg",
  python: "/technologies/python-logo.svg",
  nextjs: "/technologies/nextjs-logo.svg",
  angular: "/technologies/angular-logo.svg",
  dotnet: "/technologies/dotnet-logo.svg",
  flutter: "/technologies/flutter-logo.svg",
  "react-native": "/technologies/react-logo.svg",
};

// "What you get" content per technology - used in the hire section
const whatYouGetContent: Record<string, { items: string[] } | { paragraph: string; footnote?: string }> = {
  react: {
    items: [
      "Engineers with 3+ years building production React applications",
      "Full-stack capability: React frontend + Node.js or Python backend",
      "React Native experience available for cross-platform mobile projects",
      "Same timezone overlap (India-based team, flexible to US working hours)",
      "No recruiting overhead - engineers are vetted, onboarded, and managed",
    ],
  },
  python: {
    items: [
      "Engineers with 3+ years building production Python systems in Django, FastAPI, or Flask",
      "Full-stack capability: Python backend + React, Next.js, or Angular frontend",
      "AI/ML experience available: PyTorch, scikit-learn, LangChain, data pipelines",
      "Same timezone overlap (India-based team, flexible to US working hours)",
      "No recruiting overhead - engineers are vetted, onboarded, and managed",
    ],
  },
  nodejs: {
    paragraph: "Engineers with 4+ years building production Node.js systems in NestJS, Express, or Fastify. Full backend capability spanning API design, database optimization, DevOps, and cloud infrastructure. TypeScript as standard. Clean, tested, documented code.",
    footnote: "Our team is based in India with flexible hours overlapping US EST and PST time zones.",
  },
  angular: {
    items: [
      "Engineers with 3+ years of production Angular experience (Signals, standalone components, not just legacy patterns)",
      "Full-stack capability: Angular frontend + Node.js or Python backend",
      "Same timezone overlap (India-based team, flexible to US working hours)",
      "No recruiting overhead - engineers are vetted, onboarded, and managed",
    ],
  },
  flutter: {
    items: [
      "Engineers shipping Flutter 3.38+ with Impeller, Dart 3.x, sound null safety",
      "Multi-platform experience (mobile + web + desktop, not just cross-platform mobile)",
      "Backend integration skills (Firebase, Supabase, Node.js, Python)",
      "India-based, 4-5 hours of US timezone overlap (EST/PST)",
      "Direct communication with engineers, not through project managers",
    ],
  },
  "react-native": {
    items: [
      "Engineers comfortable with Expo SDK 55, TypeScript, and the New Architecture",
      "React web + React Native mobile capability (full-stack mobile)",
      "Node.js or Python backend experience in the same team",
      "India-based, 4-5 hours of US timezone overlap (EST/PST)",
      "Direct communication with engineers, not through project managers",
    ],
  },
};

export default function ExpertisePageClient({
  expertise,
  relatedPages,
  basePath = "/services",
  heroSlot,
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
            : expertise.slug === "react"
            ? ["React Development Services", "Single-Page Applications", "Dashboard Development", "Component Libraries", "React Native Cross-Platform", "Performance Optimization"]
            : expertise.slug === "python"
            ? ["Python Development Services", "Python Backend Development", "AI/ML Engineering", "API Development", "Data Engineering", "Legacy Migration"]
            : expertise.slug === "angular"
            ? ["Angular Development Services", "Enterprise Angular Applications", "AngularJS to Angular Migration", "Angular Performance Optimization", "Hire Angular Developers"]
            : expertise.slug === "flutter"
            ? ["Flutter App Development Services", "Cross-Platform App Development", "Dart Development", "Flutter Mobile Development", "Multi-Platform Development", "Flutter Migration"]
            : expertise.slug === "react-native"
            ? ["React Native Development Services", "Cross-Platform App Development", "Mobile App Development", "Expo Development", "React Native Migration"]
            : expertise.slug === "prometheus-monitoring"
            ? ["Prometheus Consulting", "Prometheus Implementation", "Prometheus Commercial Support", "Observability Engineering"]
            : expertise.slug === "istio-consulting"
            ? ["Istio Consulting", "Service Mesh Implementation", "Istio Commercial Support", "Istio Ambient Mode Migration"]
            : expertise.slug === "thanos-long-term-storage"
            ? ["Thanos Consulting", "Thanos Implementation", "Thanos Commercial Support", "Observability Engineering", "Prometheus Long-term Storage"]
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
            : expertise.slug === "react"
            ? ["React Development", "Frontend Engineering", "Web Application Development", "Single-Page Applications", "UI Engineering"]
            : expertise.slug === "python"
            ? ["Python Development", "Backend Engineering", "AI/ML Engineering", "API Development", "Data Engineering"]
            : expertise.slug === "angular"
            ? ["Angular Development", "Enterprise Web Applications", "Frontend Engineering", "SPA Development", "TypeScript Development"]
            : expertise.slug === "flutter"
            ? ["Flutter Development", "Cross-Platform Development", "Dart Development", "Mobile App Development", "Multi-Platform Engineering"]
            : expertise.slug === "react-native"
            ? ["React Native Development", "Cross-Platform Development", "Mobile App Development", "iOS Development", "Android Development"]
            : expertise.slug === "prometheus-monitoring"
            ? ["Prometheus Monitoring", "Observability", "Infrastructure Engineering", "DevOps", "Kubernetes Monitoring"]
            : expertise.slug === "istio-consulting"
            ? ["Service Mesh", "Istio", "Kubernetes Networking", "Cloud Native Infrastructure", "Microservices"]
            : expertise.slug === "thanos-long-term-storage"
            ? ["Thanos", "Prometheus Long-term Storage", "Multi-cluster Observability", "Infrastructure Engineering", "DevOps"]
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
    <LazyMotion features={domAnimation}>
    <main className="min-h-screen">
      {/* Combined JSON-LD Structured Data (Service + FAQ + Breadcrumb) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />

      {heroSlot}

      {expertise.slug === "istio-consulting" && (
        <Stats
          title="Istio & Service Mesh Experience"
          stats={[
            { value: "6+ Years", label: "Kubernetes & Service Mesh Experience" },
            { value: "10+", label: "Istio Deployments" },
            { value: "95%+", label: "Client Retention Rate" },
          ]}
        />
      )}

      {expertise.slug === "prometheus-monitoring" && (
        <Stats
          title="Prometheus Track Record"
          stats={[
            { value: "15+", label: "Production Prometheus Deployments" },
            { value: "6+ Years", label: "Prometheus & Kubernetes Experience" },
            { value: "95%+", label: "Client Retention Rate" },
          ]}
        />
      )}

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

      <div id={["nodejs", "nextjs", "react", "python", "angular", "flutter", "react-native", "prometheus-monitoring", "istio-consulting", "thanos-long-term-storage"].includes(expertise.slug) ? "services" : undefined}>
        <CapabilitiesGrid
          title={expertise.slug === "dotnet" ? ".NET Development Services We Offer" : expertise.slug === "nextjs" ? "What We Build With Next.js" : expertise.slug === "nodejs" ? "Node.js Development Services" : expertise.slug === "react" ? "React Development Services" : expertise.slug === "python" ? "Python Development Services" : expertise.slug === "angular" ? "Angular Development Services" : expertise.slug === "flutter" ? "What We Build With Flutter" : expertise.slug === "react-native" ? "What We Build With React Native" : expertise.slug === "prometheus-monitoring" ? "Prometheus Consulting & Implementation Services" : expertise.slug === "istio-consulting" ? "Istio Consulting & Implementation Services" : "Key Capabilities"}
          subtitle={expertise.slug === "dotnet" ? "End-to-end .NET services, from greenfield builds to legacy modernization." : expertise.slug === "nextjs" ? "From marketing sites to complex web applications, we deliver production-grade Next.js solutions." : expertise.slug === "nodejs" ? "APIs, microservices, real-time systems, and the backend your product runs on." : expertise.slug === "react" ? "From SPAs to enterprise dashboards, we build React applications that ship fast and stay maintainable." : expertise.slug === "python" ? "Backend systems, AI/ML, and the data infrastructure your product depends on." : expertise.slug === "angular" ? "Full-stack applications, migrations, and performance work." : expertise.slug === "flutter" ? "Cross-platform apps for mobile, web, and desktop from a single Dart codebase." : expertise.slug === "react-native" ? "Cross-platform mobile apps from a single TypeScript codebase." : expertise.slug === "prometheus-monitoring" ? "From initial setup to enterprise production support." : expertise.slug === "istio-consulting" ? "From fresh deployment to ambient mode migration and enterprise support." : "Everything you need to build production-grade solutions"}
          capabilities={capabilities}
        />
      </div>

      {["frontend-development", "backend-development", "dotnet", "nextjs", "prometheus-monitoring", "istio-consulting", "thanos-long-term-storage"].includes(expertise.slug) && pageData.whoWeWorkWith && (
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

      {/* CNCF tools: Why section (dynamically imported) */}
      {["prometheus-monitoring", "istio-consulting", "thanos-long-term-storage"].includes(expertise.slug) && (
        <WhySection slug={expertise.slug} />
      )}

      {/* CNCF tools: Decision Framework (dynamically imported) */}
      {["prometheus-monitoring", "istio-consulting", "thanos-long-term-storage"].includes(expertise.slug) && (
        <DecisionFramework slug={expertise.slug} />
      )}

      {/* Dotnet: Specialized .NET Services + Industries (dynamically imported) */}
      {expertise.slug === "dotnet" && <DotnetSections slot="specialized" />}
      {expertise.slug === "dotnet" && <DotnetSections slot="industries" />}

      {/* Tech slugs: Decision tables (dynamically imported) */}
      {["nodejs", "react", "python", "angular", "flutter", "react-native"].includes(expertise.slug) && (
        <TechDecisionTable slug={expertise.slug} />
      )}

      {/* Tech slugs: Framework comparisons (dynamically imported) */}
      {["react", "python", "flutter", "react-native"].includes(expertise.slug) && (
        <FrameworkComparison slug={expertise.slug} />
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
        <div id={["nodejs", "react", "python", "angular", "flutter", "react-native", "prometheus-monitoring", "istio-consulting", "thanos-long-term-storage"].includes(expertise.slug) ? "process" : undefined}>
          <ProcessTimeline
            title={expertise.slug === "frontend-development" ? "Our Frontend Development Process" : expertise.slug === "backend-development" ? "Our Backend Development Process" : expertise.slug === "nextjs" ? "How We Deliver Next.js Projects" : expertise.slug === "nodejs" ? "How We Deliver Node.js Projects" : expertise.slug === "react" ? "How We Deliver React Projects" : expertise.slug === "python" ? "How We Deliver Python Projects" : expertise.slug === "angular" ? "How We Deliver Angular Projects" : expertise.slug === "flutter" ? "From Concept to App Store" : expertise.slug === "react-native" ? "From Idea to App Store" : expertise.slug === "prometheus-monitoring" ? "How Prometheus Consulting Works" : expertise.slug === "istio-consulting" ? "How Istio Consulting Works" : "Our Process"}
            subtitle={expertise.slug === "nodejs" ? "Working software every sprint, not just progress updates." : expertise.slug === "react" ? "Working software every sprint, not just progress updates." : expertise.slug === "python" ? "Working software every sprint, not just progress updates." : expertise.slug === "flutter" ? "Working software every sprint, not just progress updates." : expertise.slug === "react-native" ? "Working software every sprint, not just progress updates." : ["angular"].includes(expertise.slug) ? "Working software every sprint, not just progress updates." : "A predictable process built for high-quality delivery"}
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
      ) : ["nodejs", "react", "python", "angular", "react-native", "flutter", "prometheus-monitoring", "thanos-long-term-storage", "istio-consulting"].includes(expertise.slug) ? (
        <CustomStackTable slug={expertise.slug} />
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
          columns={pageData.useCases.length === 3 ? 3 : 2}
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

      {/* Mid-page CTA for dotnet/nextjs/nodejs/react/python/angular/flutter/react-native/prometheus-monitoring/istio-consulting - before Architecture section */}
      {["dotnet", "nextjs", "nodejs", "react", "python", "angular", "flutter", "react-native", "prometheus-monitoring", "istio-consulting", "thanos-long-term-storage"].includes(expertise.slug) && (
        <section id={["react", "python", "angular", "flutter", "react-native", "prometheus-monitoring", "istio-consulting", "thanos-long-term-storage"].includes(expertise.slug) ? "discuss" : undefined} className="relative py-16 sm:py-24 bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-6">
                {expertise.slug === "flutter" || expertise.slug === "react-native"
                  ? <><span className="text-highlight">Let&apos;s Talk</span> About Your App</>
                  : expertise.slug === "prometheus-monitoring"
                  ? <>Not Sure If Prometheus Is <span className="text-highlight">Right for Your Stack?</span></>
                  : expertise.slug === "thanos-long-term-storage"
                  ? <>Prometheus Metrics Growing Faster Than Your <span className="text-highlight">Retention Budget?</span></>
                  : expertise.slug === "istio-consulting"
                  ? <>Not Sure If You Need a <span className="text-highlight">Service Mesh?</span></>
                  : <>Discuss Your <span className="text-highlight">{expertise.slug === "nextjs" ? "Next.js" : expertise.slug === "nodejs" ? "Node.js" : expertise.slug === "react" ? "React" : expertise.slug === "python" ? "Python" : expertise.slug === "angular" ? "Angular" : ".NET"} Project</span></>
                }
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                {expertise.slug === "nextjs"
                  ? "Whether it\u2019s a new build, migration, or performance optimization, we\u2019re happy to talk through your situation."
                  : expertise.slug === "nodejs"
                  ? "Whether it\u2019s APIs, microservices, or a full backend migration, we\u2019re happy to talk through your situation."
                  : expertise.slug === "react"
                  ? "Whether it\u2019s a new build, migration, or performance optimization, we\u2019re happy to talk through your situation."
                  : expertise.slug === "python"
                  ? "Whether it\u2019s APIs, AI engineering, or a full backend migration, we\u2019re happy to talk through your situation."
                  : expertise.slug === "angular"
                  ? "Whether it\u2019s a new build, migration, or performance optimization, we\u2019re happy to talk through your situation."
                  : expertise.slug === "flutter"
                  ? "Whether it\u2019s a new app, migration from native, or multi-platform expansion, we\u2019re happy to talk through your situation."
                  : expertise.slug === "react-native"
                  ? "Whether you\u2019re building from scratch or migrating an existing native app, we\u2019ll give you a straight answer on what React Native can and can\u2019t do for your project."
                  : expertise.slug === "prometheus-monitoring"
                  ? "We'll give you an honest assessment - even if the answer is \"stick with what you have.\""
                  : expertise.slug === "thanos-long-term-storage"
                  ? "We'll audit your current setup and tell you whether Thanos is the right move - or if something else makes more sense."
                  : expertise.slug === "istio-consulting"
                  ? "We'll give you an honest assessment. Sometimes the answer is \"not yet\" or \"use something simpler.\" We'd rather tell you that upfront."
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
            </m.div>
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
        <div id={["nodejs", "nextjs", "react", "python", "angular", "flutter", "react-native"].includes(expertise.slug) ? "hire" : undefined}>
          {/* "What you get" block with technology logo - before EngagementModels */}
          {whatYouGetContent[expertise.slug] && (
            <div className="bg-surface pt-12 sm:pt-16">
              <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative overflow-hidden bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 sm:p-8 md:p-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-8 tracking-tight">What you get</h3>
                      {(() => {
                        const content = whatYouGetContent[expertise.slug];
                        if (!content) return null;
                        if ("items" in content) {
                          return (
                            <ul className="space-y-2.5">
                              {content.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-text-secondary">
                                  <svg className="w-4 h-4 text-accent mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                  </svg>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <>
                            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">{content.paragraph}</p>
                            {content.footnote && <p className="text-xs text-text-muted mt-4">{content.footnote}</p>}
                          </>
                        );
                      })()}
                    </div>

                    {technologyLogos[expertise.slug] && (
                      <m.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="hidden md:flex items-center justify-center w-32 lg:w-40 h-32 lg:h-40 shrink-0"
                        aria-hidden="true"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={technologyLogos[expertise.slug]}
                          alt=""
                          className="w-full h-full object-contain opacity-[0.15] select-none pointer-events-none"
                        />
                      </m.div>
                    )}
                  </div>

                  {/* Ambient glow behind logo */}
                  {technologyLogos[expertise.slug] && (
                    <div
                      className="hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
                      style={{ background: "radial-gradient(circle, rgba(29, 155, 105, 0.08) 0%, transparent 70%)" }}
                      aria-hidden="true"
                    />
                  )}
                </m.div>
              </div>
            </div>
          )}

          <EngagementModels
            title={pageData.engagementModels.title}
            subtitle={pageData.engagementModels.subtitle}
            models={pageData.engagementModels.models}
          />

          {/* Node.js / React / Python / Angular / Flutter: Pricing line + CTA after EngagementModels */}
          {["nodejs", "react", "python", "angular", "flutter", "react-native"].includes(expertise.slug) && (
            <section className="relative pt-0 pb-16 sm:pb-24 bg-surface">
              <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <m.div
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
                </m.div>
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
          <m.div
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

      {pageData.faqs.length > 0 && (
        <div id={["nodejs", "react", "python", "angular", "flutter", "react-native", "prometheus-monitoring", "istio-consulting", "thanos-long-term-storage"].includes(expertise.slug) ? "faq" : undefined}>
          <FAQSection
            title={expertise.slug === "dotnet" ? ".NET Development Services FAQ" : expertise.slug === "nextjs" ? "Next.js Development FAQ" : expertise.slug === "nodejs" ? "Node.js Development FAQ" : expertise.slug === "react" ? "React Development FAQ" : expertise.slug === "python" ? "Python Development FAQ" : expertise.slug === "angular" ? "Angular Development FAQ" : expertise.slug === "flutter" ? "Flutter App Development FAQ" : expertise.slug === "react-native" ? "React Native Development FAQ" : expertise.slug === "prometheus-monitoring" ? "Prometheus Consulting FAQ" : expertise.slug === "istio-consulting" ? "Istio Consulting FAQ" : undefined}
            faqs={pageData.faqs}
          />
        </div>
      )}

      {relatedPages.length > 0 && <RelatedExpertise pages={relatedPages} />}
    </main>
    </LazyMotion>
  );
}
