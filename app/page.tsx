import type { Metadata } from "next";
import {
  Hero,
  ValueProposition,
  Services,
  HowWeWork,
  EngagementModels,
  FeaturedCaseStudies,
  Testimonials,
  Stats,
  AboutTeaser,
  FAQ,
  CTA,
} from "@/components/sections";
import { JsonLd } from "@/components/seo";
import { getNotionFeaturedCaseStudies } from "@/lib/notion-case-studies";

// Force static generation at build time
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

// Homepage-specific FAQ schema (general company FAQs).
// Subpages define their own FAQPage schemas; this prevents duplicates.
// AggregateRating for the Organization, homepage only.
// Kept out of root layout.tsx to avoid appearing on blog/article pages.
const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://procedure.tech/#organization",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "32",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What AI systems do you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build production AI systems including LLM applications, AI agents, RAG systems, and AI-enhanced products. From conversational AI to document processing to intelligent automation. We handle the complete development lifecycle from architecture to secure production deployment.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you start our AI project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI engagements begin within 2-5 days. We match senior engineers based on your AI requirements and tech stack, then integrate them into your development workflow immediately. No months of discovery. We start building fast.",
      },
    },
    {
      "@type": "Question",
      name: "How much does AI development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI development costs vary by engagement model. AI Sprints range from $15K-$50K for 2-4 week rapid prototypes. Forward-deployed engineering teams start at $50K/month for embedded senior engineers. Enterprise engagements are scoped based on compliance requirements and project complexity. Contact us for a detailed estimate based on your specific needs.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build an AI product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timeline depends on scope and approach. AI Sprints deliver working prototypes in 2-4 weeks. Full product builds with embedded teams typically reach MVP in 8-12 weeks. Enterprise AI systems requiring compliance and security review take 17-20 weeks from architecture to production deployment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only work with large enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We work with high-growth startups, scale-ups, and enterprises. What matters is the complexity of the AI challenge and your commitment to shipping production systems. If you need serious AI engineering, not consulting theater, we can help.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Procedure different from AI consultancies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're engineers who write production code, not consultants who deliver slide decks. Our team embeds with yours, ships working systems, and leaves your team stronger. No months of discovery, no handoff nightmares, no POCs that never reach production.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle security and compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Security is built into every system we develop. Not bolted on later. We implement secure architectures, ensure data privacy, and meet compliance requirements (SOC 2, HIPAA, GDPR). Our security practices come from building production systems that enterprises trust.",
      },
    },
  ],
};

export default async function Home() {
  const featuredCaseStudies = await getNotionFeaturedCaseStudies();

  return (
    <main className="min-h-screen">
      <JsonLd data={aggregateRatingSchema} />
      <JsonLd data={faqSchema} />
      <Hero />
      <ValueProposition />
      <Testimonials />
      <Services />
      <HowWeWork />
      <EngagementModels />
      <FeaturedCaseStudies caseStudies={featuredCaseStudies} />
      <Stats />
      <AboutTeaser />
      <FAQ />
      <CTA />
    </main>
  );
}
