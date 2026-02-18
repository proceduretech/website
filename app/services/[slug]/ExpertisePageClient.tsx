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
            ? { text: "Talk to a Node.js Engineer", href: "#book-call" }
            : expertise.slug === "react"
            ? { text: "Talk to a React Engineer", href: "#book-call" }
            : expertise.slug === "python"
            ? { text: "Talk to a Python Engineer", href: "#book-call" }
            : expertise.slug === "angular"
            ? { text: "Talk to an Angular Engineer", href: "#book-call" }
            : expertise.slug === "flutter"
            ? { text: "Talk to a Flutter Engineer", href: "#book-call" }
            : expertise.slug === "react-native"
            ? { text: "Talk to a React Native Engineer", href: "#book-call" }
            : undefined
        }
        secondaryCTA={
          [
            "ai-engineering",
            "ai-agents",
            "dotnet",
            "nextjs",
            "nodejs",
            "react",
            "python",
            "angular",
            "flutter",
            "react-native",
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
        {expertise.slug === "react" && (
          <>
            <div className="flex items-center justify-center gap-3 text-xs text-text-muted -mt-6">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Free architecture review
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
        {expertise.slug === "python" && (
          <>
            <div className="flex items-center justify-center gap-3 text-xs text-text-muted -mt-6">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Free architecture review
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
        {expertise.slug === "angular" && (
          <>
            <div className="flex items-center justify-center gap-3 text-xs text-text-muted -mt-6">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Free architecture review
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
                Need an application built?
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <a href="#hire" className="text-accent hover:text-accent-light transition-colors flex items-center gap-1.5">
                Need developers on your team?
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>
          </>
        )}
        {expertise.slug === "flutter" && (
          <>
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
        {expertise.slug === "react-native" && (
          <>
            <div className="flex items-center justify-center gap-3 text-xs text-text-muted -mt-6">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Free architecture review
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                30-minute call with an engineer
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Talk to builders, not account managers
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 text-sm">
              <a href="#services" className="text-accent hover:text-accent-light transition-colors flex items-center gap-1.5">
                See our services
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <a href="#hire" className="text-accent hover:text-accent-light transition-colors flex items-center gap-1.5">
                Hire React Native developers
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

      <div id={["nodejs", "nextjs", "react", "python", "angular", "flutter", "react-native"].includes(expertise.slug) ? "services" : undefined}>
        <CapabilitiesGrid
          title={expertise.slug === "dotnet" ? ".NET Development Services We Offer" : expertise.slug === "nextjs" ? "What We Build With Next.js" : expertise.slug === "nodejs" ? "Node.js Development Services" : expertise.slug === "react" ? "React Development Services" : expertise.slug === "python" ? "Python Development Services" : expertise.slug === "angular" ? "Angular Development Services" : expertise.slug === "flutter" ? "What We Build With Flutter" : expertise.slug === "react-native" ? "What We Build With React Native" : "Key Capabilities"}
          subtitle={expertise.slug === "dotnet" ? "End-to-end .NET services, from greenfield builds to legacy modernization." : expertise.slug === "nextjs" ? "From marketing sites to complex web applications, we deliver production-grade Next.js solutions." : expertise.slug === "nodejs" ? "APIs, microservices, real-time systems, and the backend your product runs on." : expertise.slug === "react" ? "From SPAs to enterprise dashboards, we build React applications that ship fast and stay maintainable." : expertise.slug === "python" ? "Backend systems, AI/ML, and the data infrastructure your product depends on." : expertise.slug === "angular" ? "Full-stack applications, migrations, and performance work." : expertise.slug === "flutter" ? "Cross-platform apps for mobile, web, and desktop from a single Dart codebase." : expertise.slug === "react-native" ? "Cross-platform mobile apps from a single TypeScript codebase." : "Everything you need to build production-grade solutions"}
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
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
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

      {/* React: Decision table - Is React Right for Your Project? */}
      {expertise.slug === "react" && (
        <section id="decision" className="relative py-16 sm:py-24 bg-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                Is React Right for Your <span className="text-highlight">Project?</span>
              </h2>
              <p className="text-text-secondary">The most popular frontend library isn&apos;t always the right one.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { need: "Dynamic, interaction-heavy UIs (dashboards, editors, tools)", fit: "React's component model and virtual DOM are built for UIs that change constantly. State management is mature, and the ecosystem has a solution for almost any interaction pattern you need." },
                { need: "You need web and mobile from one team", fit: "React + React Native lets you share business logic, types, and sometimes entire components across web, iOS, and Android. No other ecosystem offers this level of code sharing." },
                { need: "Your team knows JavaScript/TypeScript", fit: "React has the largest talent pool in frontend. 44.7% of developers use it (Stack Overflow 2025). Hiring is easier, onboarding is faster, and the community support is unmatched." },
                { need: "SPAs where SEO isn't the primary concern", fit: "Internal tools, authenticated dashboards, B2B platforms where users log in first. React with Vite gives you fast builds and a simple mental model without SSR complexity." },
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
                If SEO and page speed are your top priority, <a href="/technologies/nextjs/" className="text-accent hover:text-accent-light">Next.js</a> gives you server-side rendering, static generation, and edge functions built on React. For structured enterprise apps with strict conventions, <a href="/technologies/angular/" className="text-accent hover:text-accent-light">Angular</a> provides routing, forms, and dependency injection out of the box. Need a lightweight backend to pair with React? <a href="/technologies/nodejs/" className="text-accent hover:text-accent-light">Node.js</a> or <a href="/technologies/python/" className="text-accent hover:text-accent-light">Python</a> depending on your workload. Not sure? That&apos;s what our <a href="#book-call" className="text-accent hover:text-accent-light">architecture consultation</a> is for.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Python: Decision table - Is Python Right for Your Backend? */}
      {expertise.slug === "python" && (
        <section id="decision" className="relative py-16 sm:py-24 bg-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                Is Python Right for Your <span className="text-highlight">Backend?</span>
              </h2>
              <p className="text-text-secondary">The right tool for the job. Not the trendy one.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { need: "AI/ML features are core to your product", fit: "Python owns the AI ecosystem. PyTorch, TensorFlow, scikit-learn, LangChain - the models, libraries, and talent pool all live here. No other language comes close for ML." },
                { need: "Data-heavy applications (analytics, ETL, reporting)", fit: "Pandas, NumPy, and Airflow make data manipulation fast. Python handles everything from quick scripts to petabyte-scale processing pipelines." },
                { need: "APIs serving high concurrency (with FastAPI)", fit: "FastAPI handles 20,000+ requests/second on Uvicorn. Native async, automatic OpenAPI docs, Pydantic validation. Built for the workloads Django wasn't designed for." },
                { need: "Full-stack web apps with complex business logic", fit: "Django gives you ORM, auth, admin panel, and security middleware out of the box. Instagram, Spotify, and Dropbox run on it. Proven at scale." },
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
                Need raw API throughput without the Python ecosystem? <a href="/technologies/nodejs/" className="text-accent hover:text-accent-light">Node.js</a> with NestJS or Fastify handles I/O-bound workloads with a lighter runtime. Building a frontend-heavy application where the backend is thin? <a href="/technologies/nextjs/" className="text-accent hover:text-accent-light">Next.js</a> API routes might be all you need. CPU-intensive work like video encoding or real-time game servers? Go or Rust will outperform Python. Not sure? That&apos;s what our <a href="#book-call" className="text-accent hover:text-accent-light">architecture consultation</a> is for.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Angular: Decision table - Is Angular Right for Your Project? */}
      {expertise.slug === "angular" && (
        <section id="decision" className="relative py-16 sm:py-24 bg-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                Is Angular Right for Your <span className="text-highlight">Project?</span>
              </h2>
              <p className="text-text-secondary">The right framework for the job. Not the trending one.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { situation: "Complex enterprise apps with large teams (10+ devs)", fit: "Angular's opinionated architecture, dependency injection, and CLI enforce consistency. Everyone follows the same patterns. Less time debating, more time building." },
                { situation: "Long-lived applications (5+ year lifespan)", fit: "Google maintains Angular with 18-month LTS cycles and predictable 6-month releases. TypeScript catches errors at compile time. Codebases stay maintainable at scale." },
                { situation: "Data-heavy dashboards and admin panels", fit: "Built-in forms, validation, HTTP client, and RxJS for real-time data streams. No need to stitch together 8 different libraries." },
                { situation: "Applications requiring strict security and compliance", fit: "Angular's built-in XSS protection, CSP support, and structured architecture make security audits straightforward. Banks and government agencies choose Angular for a reason." },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6"
                >
                  <p className="font-semibold text-text-primary mb-2">{row.situation}</p>
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
              <p className="text-sm text-text-muted mb-6 max-w-3xl mx-auto">
                Building a content-heavy marketing site? <a href="/technologies/nextjs" className="text-accent hover:text-accent-light transition-colors">Next.js</a> is likely a better fit. Need a lightweight, flexible UI for a smaller team? React with Vite gives you more freedom with less structure. Internal tool with simple CRUD? React or even a low-code solution might be faster. Not sure? That&apos;s what our <a href="#book-call" className="text-accent hover:text-accent-light transition-colors">architecture consultation</a> is for - we&apos;ve recommended against Angular when it wasn&apos;t the right call.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Flutter: Decision table - When Flutter Makes Sense */}
      {expertise.slug === "flutter" && (
        <section id="fit" className="relative py-16 sm:py-24 bg-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                When Flutter <span className="text-highlight">Makes Sense</span>
              </h2>
              <p className="text-text-secondary">The right framework for the job, not the trendy one.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { need: "Cross-platform mobile apps (iOS + Android)", fit: "Flutter's Impeller rendering engine compiles to native ARM code. No JavaScript bridge, no WebView. Your app renders at 60fps with pixel-perfect consistency across platforms." },
                { need: "Multi-platform apps (mobile + web + desktop)", fit: "One codebase targeting six platforms. Flutter renders everything itself rather than delegating to platform UI components, so your app looks identical everywhere." },
                { need: "Custom UI and animation-heavy experiences", fit: "Flutter's own rendering engine (Impeller, built on Vulkan/Metal) means you're not limited by platform UI components. If you can design it, Flutter can render it at 60fps." },
                { need: "MVP validation on both platforms fast", fit: "Hot Reload lets developers see changes instantly without restarting the app. Validate on iOS and Android in 8-12 weeks, not 16-24 with two native teams." },
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
                Flutter isn&apos;t the right call for every project. Apps that need deep platform-native UI (following iOS HIG or Material Design exactly), or teams with existing React/JavaScript expertise where React Native would reuse skills better. We&apos;ll tell you upfront if something else fits.
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
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* React: React vs Next.js comparison */}
      {expertise.slug === "react" && (
        <section id="react-vs-nextjs" className="relative py-16 sm:py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                React vs Next.js: <span className="text-highlight">When You Need What</span>
              </h2>
              <p className="text-text-secondary">We build with both. Here&apos;s how we decide.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  name: "React (Vite + React Router)",
                  bestFor: "Internal tools, dashboards, authenticated apps, SPAs",
                  why: "Simpler mental model, faster development for apps behind a login. No server-side complexity. Vite builds in seconds, hot module replacement is instant.",
                  useWhen: "Your app doesn't need SEO, users always log in first, and you want a clean client-side architecture without SSR overhead.",
                },
                {
                  name: "Next.js (React + Framework)",
                  bestFor: "Marketing sites, e-commerce, SEO-critical apps, full-stack",
                  why: "Server Components, static generation, API routes, edge functions. SEO is handled. Performance is handled. The framework makes decisions so your team doesn't have to.",
                  useWhen: "Search traffic matters, you need a public-facing site, or you want one framework handling both frontend and backend.",
                },
              ].map((fw, i) => (
                <motion.div
                  key={fw.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{fw.name}</h3>
                  <div className="mb-3">
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">Best for</p>
                    <p className="text-sm text-text-secondary">{fw.bestFor}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">Why</p>
                    <p className="text-sm text-text-secondary">{fw.why}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">We use it when</p>
                    <p className="text-sm text-text-secondary">{fw.useWhen}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 max-w-3xl mx-auto"
            >
              <p className="text-sm text-text-secondary italic">
                Many projects use both. A public marketing site on Next.js, an authenticated dashboard on React + Vite, sharing the same component library and design system. We architect for this pattern regularly.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Python: Framework comparison - Django vs FastAPI vs Flask */}
      {expertise.slug === "python" && (
        <section id="frameworks" className="relative py-16 sm:py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                Django vs FastAPI vs Flask: <span className="text-highlight">Which One?</span>
              </h2>
              <p className="text-text-secondary">We use all three. Here&apos;s how we decide.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  name: "Django",
                  bestFor: "Full-stack web apps, admin-heavy platforms, SaaS",
                  why: "ORM, auth, admin panel, security middleware built in. Batteries-included means faster development for complex apps. 20 years of battle-tested stability.",
                  useWhen: "Your app needs user management, complex data models, and an admin interface. Most enterprise Python projects start here.",
                },
                {
                  name: "FastAPI",
                  bestFor: "High-performance APIs, AI/ML serving, microservices",
                  why: "Native async, automatic OpenAPI docs, Pydantic validation, 4-5x faster than Django for API workloads. The default choice for AI backends in 2026.",
                  useWhen: "You're building APIs that serve ML models, need high concurrency, or want auto-generated documentation.",
                },
                {
                  name: "Flask",
                  bestFor: "Lightweight services, serverless functions, prototypes",
                  why: "Minimal footprint, fast startup, zero opinions about architecture. Perfect when you need just enough framework to get out of the way.",
                  useWhen: "The service is small and focused, you're deploying to Lambda/serverless, or you need maximum control over the stack.",
                },
              ].map((fw, i) => (
                <motion.div
                  key={fw.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{fw.name}</h3>
                  <div className="mb-3">
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">Best for</p>
                    <p className="text-sm text-text-secondary">{fw.bestFor}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">Why</p>
                    <p className="text-sm text-text-secondary">{fw.why}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">We use it when</p>
                    <p className="text-sm text-text-secondary">{fw.useWhen}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 max-w-3xl mx-auto"
            >
              <p className="text-sm text-text-secondary italic">
                Most projects aren&apos;t purely one framework. We&apos;ve built systems where Django handles the main app, FastAPI serves the ML inference endpoints, and Flask runs lightweight webhook handlers. The framework follows the workload.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Flutter: Flutter vs React Native comparison */}
      {expertise.slug === "flutter" && (
        <section id="flutter-vs-rn" className="relative py-16 sm:py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                Flutter vs React Native: <span className="text-highlight">When You Need What</span>
              </h2>
              <p className="text-text-secondary">We build with both. Here&apos;s how we decide.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  name: "Flutter (Dart)",
                  bestFor: "Custom UI, animation-heavy apps, multi-platform (mobile + web + desktop)",
                  why: "Flutter renders every pixel itself via Impeller. Complete design control, 60fps animations, and one codebase targeting six platforms. Ideal when your app needs to look and feel exactly as designed.",
                  useWhen: "Visual quality and brand consistency matter more than ecosystem breadth. You need web and desktop alongside mobile. Your team is open to learning Dart.",
                },
                {
                  name: "React Native (JavaScript)",
                  bestFor: "Teams with JavaScript expertise, code sharing with React web apps",
                  why: "JavaScript developers outnumber Dart developers roughly 20:1. If your team knows React, React Native lets you share business logic, types, and components between web and mobile.",
                  useWhen: "Hiring speed matters, your web app is already React, or you need the broadest possible talent pool.",
                },
              ].map((fw, i) => (
                <motion.div
                  key={fw.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{fw.name}</h3>
                  <div className="mb-3">
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">Best for</p>
                    <p className="text-sm text-text-secondary">{fw.bestFor}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">Why</p>
                    <p className="text-sm text-text-secondary">{fw.why}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">We use it when</p>
                    <p className="text-sm text-text-secondary">{fw.useWhen}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 max-w-3xl mx-auto"
            >
              <p className="text-sm text-text-secondary italic">
                Some projects use both. A Flutter mobile app for the consumer experience, a React Native companion for a partner-facing tool sharing the same backend. We architect for this when it makes sense.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* React Native: Decision table - When React Native Makes Sense */}
      {expertise.slug === "react-native" && (
        <section id="fit" className="relative py-16 sm:py-24 bg-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                When React Native <span className="text-highlight">Makes Sense</span>
              </h2>
              <p className="text-text-secondary">The right framework for the job, not the trending one.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { situation: "Need iOS + Android from one team", fit: "Single codebase, shared logic, consistent UX. Ship both platforms simultaneously instead of maintaining two separate apps and two separate teams." },
                { situation: "Your team already knows React", fit: "React Native uses the same component model, hooks, and state management. Your web developers can contribute to mobile without learning Swift or Kotlin." },
                { situation: "Speed to market matters", fit: "Expo's managed workflow, over-the-air updates, and hot reloading mean faster iteration. MVP in 8-12 weeks, not 6 months." },
                { situation: "Budget-conscious but quality-focused", fit: "Cross-platform cuts 30-40% vs. native iOS + native Android. You're not sacrificing quality - Instagram, Shopify, Discord, and Coinbase all run React Native in production." },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6"
                >
                  <p className="font-semibold text-text-primary mb-2">{row.situation}</p>
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
                If your app is primarily 3D/gaming (Unity or native), needs extreme low-level hardware access (Bluetooth LE edge cases, heavy AR), or your team is already deep in Dart, you may want to explore <a href="/technologies/flutter" className="text-accent hover:text-accent-light transition-colors">Flutter</a> or go fully native. For SEO-critical marketing sites, <a href="/technologies/nextjs" className="text-accent hover:text-accent-light transition-colors">Next.js</a> is the better call. For complex backend needs alongside your mobile app, see our <a href="/technologies/nodejs" className="text-accent hover:text-accent-light transition-colors">Node.js</a> and <a href="/technologies/python" className="text-accent hover:text-accent-light transition-colors">Python</a> services.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* React Native: React Native vs Flutter comparison */}
      {expertise.slug === "react-native" && (
        <section id="rn-vs-flutter" className="relative py-16 sm:py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                React Native vs Flutter: <span className="text-highlight">When You Need What</span>
              </h2>
              <p className="text-text-secondary">We build with both. Here&apos;s how we decide.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  name: "React Native (JavaScript/TypeScript)",
                  bestFor: "Teams with existing JavaScript/React expertise, code sharing with a React web app, brownfield integration into existing native apps",
                  why: "React Native uses the same component model, hooks, and state management as React. Your web developers can contribute to mobile without learning a new language. JavaScript developers outnumber Dart developers roughly 20:1, making hiring easier.",
                  useWhen: "React Native 0.83 ships with the New Architecture by default. The old performance criticisms were about the JavaScript bridge, which no longer exists. With Fabric, TurboModules, and Hermes, React Native now achieves near-native performance at 60fps on most devices.",
                },
                {
                  name: "Flutter (Dart)",
                  bestFor: "Pixel-perfect custom UI that looks identical on both platforms, heavy animation or graphically intensive apps, mobile + web + desktop from one codebase",
                  why: "Flutter has surpassed React Native in GitHub stars (170K vs 121K) and shows 46% cross-platform market share vs React Native's 35%. But market share doesn't equal 'better' - it depends on your team and project.",
                  useWhen: "Teams starting fresh with no existing JavaScript investment, apps targeting mobile + web + desktop from one codebase (Flutter's widget engine renders everywhere), or when pixel-perfect custom UI is the top priority.",
                },
              ].map((fw, i) => (
                <motion.div
                  key={fw.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{fw.name}</h3>
                  <div className="mb-3">
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">Best for</p>
                    <p className="text-sm text-text-secondary">{fw.bestFor}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">Why</p>
                    <p className="text-sm text-text-secondary">{fw.why}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">Key context</p>
                    <p className="text-sm text-text-secondary">{fw.useWhen}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 max-w-3xl mx-auto"
            >
              <p className="text-sm text-text-secondary italic">
                Many companies use both. React Native for business apps where platform-native feel matters, Flutter for consumer apps where custom UI is the priority. We build with both - see our <a href="/technologies/flutter" className="text-accent hover:text-accent-light transition-colors">Flutter services</a>.
              </p>
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
        <div id={["nodejs", "react", "python", "angular", "flutter", "react-native"].includes(expertise.slug) ? "process" : undefined}>
          <ProcessTimeline
            title={expertise.slug === "frontend-development" ? "Our Frontend Development Process" : expertise.slug === "backend-development" ? "Our Backend Development Process" : expertise.slug === "nextjs" ? "How We Deliver Next.js Projects" : expertise.slug === "nodejs" ? "How We Deliver Node.js Projects" : expertise.slug === "react" ? "How We Deliver React Projects" : expertise.slug === "python" ? "How We Deliver Python Projects" : expertise.slug === "angular" ? "How We Deliver Angular Projects" : expertise.slug === "flutter" ? "From Concept to App Store" : expertise.slug === "react-native" ? "From Idea to App Store" : "Our Process"}
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
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-4">
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
              className="mt-8 bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 max-w-3xl mx-auto"
            >
              <p className="text-sm text-text-secondary">
                We pick the framework based on your constraints. NestJS for enterprise structure, Fastify for raw throughput, Express for ecosystem breadth. There is no single right answer.
              </p>
            </motion.div>
          </div>
        </section>
      ) : expertise.slug === "react" ? (
        /* React: Custom 3-column stack table */
        <section id="stack" className="relative py-16 sm:py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-4">
                Our <span className="text-highlight">React</span> Stack
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
                    { layer: "Framework", tools: "React 19, Next.js 15 (when SSR needed)", why: "React 19 for SPAs and dashboards, Next.js when SEO or server rendering matters" },
                    { layer: "Language", tools: "TypeScript (strict mode)", why: "Non-negotiable. Type safety across the full stack catches bugs before users do." },
                    { layer: "Build", tools: "Vite, Turbopack", why: "Vite for React SPAs (sub-second HMR), Turbopack for Next.js projects" },
                    { layer: "Routing", tools: "React Router 7, Next.js App Router", why: "React Router for SPAs, App Router for server-rendered apps" },
                    { layer: "State", tools: "Zustand, Redux Toolkit, React Query", why: "Zustand for simple global state, Redux Toolkit for complex flows, React Query for server state" },
                    { layer: "UI Components", tools: "Radix UI, shadcn/ui, Headless UI", why: "Accessible primitives, composable, unstyled by default so your brand isn't fighting a framework" },
                    { layer: "Styling", tools: "Tailwind CSS, CSS Modules", why: "Tailwind for rapid development, CSS Modules when you need strict scoping" },
                    { layer: "Forms", tools: "React Hook Form, Zod", why: "Performant forms with schema-based validation. No re-renders on every keystroke." },
                    { layer: "Testing", tools: "Vitest, Playwright, React Testing Library", why: "Unit tests with Vitest, E2E with Playwright, component tests with RTL" },
                    { layer: "Hosting", tools: "Vercel, AWS (CloudFront + S3, ECS), Cloudflare", why: "Vercel for Next.js, CloudFront + S3 for static SPAs, ECS for containerized apps" },
                    { layer: "CI/CD", tools: "GitHub Actions, Docker", why: "Automated tests, preview deployments on every PR, production deploys on merge" },
                    { layer: "Monitoring", tools: "Sentry, Datadog, Vercel Analytics", why: "Error tracking, performance monitoring, and Core Web Vitals dashboards" },
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
              className="mt-8 bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 max-w-3xl mx-auto"
            >
              <p className="text-sm text-text-secondary">
                We pick the tooling based on your project. A dashboard doesn&apos;t need Next.js and Vercel - React + Vite + CloudFront is faster to build and cheaper to run. A marketing site doesn&apos;t need Redux - server state with React Query is enough. The stack follows the problem.
              </p>
            </motion.div>
          </div>
        </section>
      ) : expertise.slug === "python" ? (
        /* Python: Custom 3-column stack table */
        <section id="stack" className="relative py-16 sm:py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-4">
                Our <span className="text-highlight">Python</span> Stack
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
                    { layer: "Language", tools: "Python 3.12+ (strict typing)", why: "Performance improvements, pattern matching, type hints as contracts" },
                    { layer: "Web Framework", tools: "Django 5.x, FastAPI, Flask", why: "Django for apps, FastAPI for APIs, Flask for lightweight services" },
                    { layer: "ORM / Query", tools: "Django ORM, SQLAlchemy, Prisma", why: "Django ORM for Django apps, SQLAlchemy for FastAPI/Flask, Prisma for type safety" },
                    { layer: "Database", tools: "PostgreSQL, MongoDB, Redis", why: "Postgres for relational, MongoDB for documents, Redis for cache and queues" },
                    { layer: "AI/ML", tools: "PyTorch, scikit-learn, LangChain, Hugging Face", why: "PyTorch for custom models, scikit-learn for classical ML, LangChain for LLM apps" },
                    { layer: "Data", tools: "Pandas, NumPy, Apache Airflow, Celery", why: "Data manipulation, orchestration, and async task processing" },
                    { layer: "API", tools: "REST (DRF, FastAPI), GraphQL (Strawberry)", why: "DRF for Django REST APIs, FastAPI for async, Strawberry for type-safe GraphQL" },
                    { layer: "Auth", tools: "Django auth, OAuth2, JWT", why: "Built-in auth for Django, token-based for APIs" },
                    { layer: "Testing", tools: "pytest, Hypothesis, Locust", why: "pytest for unit/integration, Hypothesis for property-based, Locust for load testing" },
                    { layer: "Hosting", tools: "AWS (ECS, Lambda, SageMaker), GCP, Vercel", why: "Containers for control, serverless for cost efficiency, SageMaker for ML deployment" },
                    { layer: "CI/CD", tools: "GitHub Actions, Docker", why: "Automated tests, container builds, and deployments on every merge" },
                    { layer: "Monitoring", tools: "Datadog, Sentry, Prometheus + Grafana", why: "APM, error tracking, and custom dashboards" },
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
              className="mt-8 bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 max-w-3xl mx-auto"
            >
              <p className="text-sm text-text-secondary">
                We pick the framework based on your constraints. Django if your team needs structure and a built-in admin. FastAPI if throughput and async matter. Flask if simplicity and a small footprint are the priority. There is no single right answer.
              </p>
            </motion.div>
          </div>
        </section>
      ) : expertise.slug === "angular" ? (
        /* Angular: Custom 3-column stack table */
        <section id="stack" className="relative py-16 sm:py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-4">
                Our <span className="text-highlight">Angular</span> Stack
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
                    <th className="text-left py-3 px-4 text-sm font-semibold tracking-wide text-text-primary w-[20%]">Layer</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold tracking-wide text-text-primary w-[30%]">Tools</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold tracking-wide text-text-primary w-[50%]">Why We Chose Them</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { layer: "Framework", tools: "Angular 20+ (Standalone Components)", why: "Signals, zoneless CD, incremental hydration" },
                    { layer: "Language", tools: "TypeScript (strict mode)", why: "Type safety across the full stack. Non-negotiable." },
                    { layer: "State", tools: "NgRx (SignalStore), Angular Signals", why: "NgRx for complex state, Signals for component-level reactivity" },
                    { layer: "UI Components", tools: "Angular Material, PrimeNG, CDK", why: "Material for Google-style UI, PrimeNG for data-heavy components, CDK for custom" },
                    { layer: "Styling", tools: "Tailwind CSS, SCSS", why: "Tailwind for utility-first speed, SCSS for component-scoped styles" },
                    { layer: "Forms", tools: "Reactive Forms, Signal Forms", why: "Reactive Forms for production, Signal Forms for new projects" },
                    { layer: "HTTP & Data", tools: "HttpClient, httpResource, RxJS", why: "Built-in HTTP with interceptors, RxJS for complex async flows" },
                    { layer: "Routing", tools: "Angular Router (lazy-loaded)", why: "Code splitting per route, guards for auth" },
                    { layer: "Testing", tools: "Vitest, Playwright, Angular Testing Library", why: "Unit with Vitest (Angular 21 default), E2E with Playwright" },
                    { layer: "Build", tools: "Angular CLI, esbuild, Vite", why: "esbuild for fast builds, Vite for dev server HMR" },
                    { layer: "Monorepo", tools: "Nx", why: "Shared libraries, affected builds, consistent tooling across teams" },
                    { layer: "CI/CD", tools: "GitHub Actions, Vercel/AWS", why: "Automated testing and preview deployments on every PR" },
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
              className="mt-8 bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 max-w-3xl mx-auto"
            >
              <p className="text-sm text-text-secondary">
                We use Angular Material where it fits and swap in PrimeNG when the project needs data tables, tree views, or complex form controls that Material doesn&apos;t cover well. No dogma about component libraries - we pick what serves the project.
              </p>
            </motion.div>
          </div>
        </section>
      ) : expertise.slug === "react-native" ? (
        /* React Native: Custom 2-column stack table */
        <section id="stack" className="relative py-16 sm:py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-4">
                Our <span className="text-highlight">Technology</span> Stack
              </h2>
              <p className="text-text-secondary">Every tool earns its place. Here&apos;s what we ship with.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-x-auto -mx-4 sm:mx-0"
            >
              <table className="w-full min-w-[480px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary w-[30%]">Layer</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary w-[70%]">What We Use</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { layer: "Framework", tools: "React Native 0.83 (New Architecture)" },
                    { layer: "Development Platform", tools: "Expo SDK 55 (managed or bare workflow)" },
                    { layer: "Language", tools: "TypeScript (strict mode)" },
                    { layer: "JS Engine", tools: "Hermes (default), Hermes v1 (opt-in for advanced perf)" },
                    { layer: "Navigation", tools: "Expo Router (file-based), React Navigation 7" },
                    { layer: "State Management", tools: "Zustand, Redux Toolkit, React Query/TanStack Query" },
                    { layer: "UI Components", tools: "React Native Paper, Tamagui, NativeWind (Tailwind for RN)" },
                    { layer: "Animations", tools: "Reanimated 4 (UI thread), Moti, Lottie" },
                    { layer: "Forms", tools: "React Hook Form + Zod validation" },
                    { layer: "Testing", tools: "Jest, Detox (E2E), React Native Testing Library" },
                    { layer: "CI/CD", tools: "EAS Build, EAS Submit, Fastlane" },
                    { layer: "OTA Updates", tools: "EAS Update (Hermes bytecode diffing for smaller updates)" },
                    { layer: "Monitoring", tools: "Sentry, Expo Insights" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-surface-elevated/30 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-accent">{row.layer}</td>
                      <td className="py-3 px-4 text-sm text-text-primary">{row.tools}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      ) : expertise.slug === "flutter" ? (
        /* Flutter: Custom 2-column stack table */
        <section id="stack" className="relative py-16 sm:py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-4">
                Our <span className="text-highlight">Flutter</span> Stack
              </h2>
              <p className="text-text-secondary">Every tool earns its place. Here&apos;s what we ship with.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-x-auto -mx-4 sm:mx-0"
            >
              <table className="w-full min-w-[480px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary w-[30%]">Layer</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary w-[70%]">What We Use</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { layer: "Framework", tools: "Flutter 3.41" },
                    { layer: "Language", tools: "Dart 3.10 (sound null safety, strict typing)" },
                    { layer: "Rendering Engine", tools: "Impeller (Vulkan on Android, Metal on iOS)" },
                    { layer: "State Management", tools: "BLoC (enterprise), Riverpod (lean projects)" },
                    { layer: "UI Framework", tools: "Material 3, Cupertino, custom widget libraries" },
                    { layer: "Animation", tools: "Rive, Flutter implicit/explicit animations, Hero transitions" },
                    { layer: "Navigation", tools: "GoRouter, Navigator 2.0" },
                    { layer: "Backend / BaaS", tools: "Firebase, Supabase, custom REST/GraphQL APIs" },
                    { layer: "Local Storage", tools: "Hive, Isar, Drift (SQLite)" },
                    { layer: "Testing", tools: "Widget tests, integration tests, golden tests (visual regression)" },
                    { layer: "CI/CD", tools: "Codemagic, Fastlane, GitHub Actions" },
                    { layer: "Monitoring", tools: "Sentry, Firebase Crashlytics" },
                    { layer: "Distribution", tools: "App Store, Play Store, Firebase App Distribution, TestFlight" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-surface-elevated/30 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-accent">{row.layer}</td>
                      <td className="py-3 px-4 text-sm text-text-primary">{row.tools}</td>
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
              className="mt-8 bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 max-w-3xl mx-auto"
            >
              <p className="text-sm text-text-secondary">
                We pick state management based on your project complexity. BLoC for enterprise apps with complex business logic and testing requirements. Riverpod for leaner projects where simplicity matters. No dogma, just the right tool.
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

      {/* Mid-page CTA for dotnet/nextjs/nodejs/react/python/angular/flutter/react-native - before Architecture section */}
      {["dotnet", "nextjs", "nodejs", "react", "python", "angular", "flutter", "react-native"].includes(expertise.slug) && (
        <section id={["react", "python", "angular", "flutter", "react-native"].includes(expertise.slug) ? "discuss" : undefined} className="relative py-16 sm:py-24 bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-6">
                {expertise.slug === "flutter" || expertise.slug === "react-native"
                  ? <><span className="text-highlight">Let&apos;s Talk</span> About Your App</>
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
        <div id={["nodejs", "nextjs", "react", "python", "angular", "flutter", "react-native"].includes(expertise.slug) ? "hire" : undefined}>
          {/* "What you get" block with technology logo - before EngagementModels */}
          {whatYouGetContent[expertise.slug] && (
            <div className="bg-surface pt-12 sm:pt-16">
              <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div
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
                      <motion.div
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
                      </motion.div>
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
                </motion.div>
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
        <div id={["nodejs", "react", "python", "angular", "flutter", "react-native"].includes(expertise.slug) ? "faq" : undefined}>
          <FAQSection
            title={expertise.slug === "dotnet" ? ".NET Development Services FAQ" : expertise.slug === "nextjs" ? "Next.js Development FAQ" : expertise.slug === "nodejs" ? "Node.js Development FAQ" : expertise.slug === "react" ? "React Development FAQ" : expertise.slug === "python" ? "Python Development FAQ" : expertise.slug === "angular" ? "Angular Development FAQ" : expertise.slug === "flutter" ? "Flutter App Development FAQ" : expertise.slug === "react-native" ? "React Native Development FAQ" : undefined}
            faqs={pageData.faqs}
          />
        </div>
      )}

      {relatedPages.length > 0 && <RelatedExpertise pages={relatedPages} />}
    </main>
  );
}
