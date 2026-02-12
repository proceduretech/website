"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTAContent {
  headingLine1: string;
  headingLine2: string;
  description: string;
  secondaryLabel: string;
  secondaryHref: string;
}

const categoryCTAMap: Record<string, CTAContent> = {
  "ai-engineering": {
    headingLine1: "Ready to Build Production",
    headingLine2: "AI Systems?",
    description:
      "Our team has deployed AI systems serving billions of requests. Let\u2019s talk about your AI engineering challenges and how we can help.",
    secondaryLabel: "Explore AI Engineering Services",
    secondaryHref: "/services/ai-engineering",
  },
  "llm-applications": {
    headingLine1: "Ready to Build with",
    headingLine2: "Large Language Models?",
    description:
      "From RAG pipelines to AI agents, we build LLM-powered applications that scale in production. Let\u2019s discuss your use case.",
    secondaryLabel: "Explore AI Engineering Services",
    secondaryHref: "/services/ai-engineering",
  },
  engineering: {
    headingLine1: "Need Senior Engineers",
    headingLine2: "Who Ship from Day One?",
    description:
      "Our embedded engineering teams write production code from week one. Scale your team with senior developers who integrate seamlessly.",
    secondaryLabel: "Explore Engineering Services",
    secondaryHref: "/services/frontend-development",
  },
  "product-development": {
    headingLine1: "Ready to Ship Your",
    headingLine2: "Product Faster?",
    description:
      "From concept to production in weeks, not months. Our product engineering teams have shipped 100+ products to production.",
    secondaryLabel: "Explore Product Development",
    secondaryHref: "/services/product-build",
  },
  "industry-insights": {
    headingLine1: "Ready to Transform",
    headingLine2: "Your Business with AI?",
    description:
      "Our team brings deep industry expertise and proven engineering practices to every engagement. Let\u2019s discuss your next project.",
    secondaryLabel: "View Our Work",
    secondaryHref: "/work",
  },
  "ai-security": {
    headingLine1: "Need to Secure Your",
    headingLine2: "AI Systems?",
    description:
      "From prompt injection defense to model security, we help teams ship AI systems that are secure by design.",
    secondaryLabel: "Explore AI Security Services",
    secondaryHref: "/services/ai-security",
  },
  "cloud-infrastructure": {
    headingLine1: "Ready to Scale Your",
    headingLine2: "Cloud Infrastructure?",
    description:
      "Our cloud architects design and implement infrastructure that scales reliably. From Kubernetes to multi-cloud, we\u2019ve got you covered.",
    secondaryLabel: "Explore Cloud Services",
    secondaryHref: "/services/cloud",
  },
};

const defaultCTA: CTAContent = {
  headingLine1: "Ready to Build Production",
  headingLine2: "AI Systems?",
  description:
    "Our team has deployed AI systems serving billions of requests. Let\u2019s talk about your engineering challenges and how we can help.",
  secondaryLabel: "View Our Work",
  secondaryHref: "/work",
};

interface BlogCTAProps {
  categorySlug?: string;
}

export function BlogCTA({ categorySlug }: BlogCTAProps) {
  const cta = (categorySlug && categoryCTAMap[categorySlug]) || defaultCTA;

  return (
    <section className="relative py-16 sm:py-24 bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary mb-6">
            {cta.headingLine1}
            <br />
            <span className="text-highlight">{cta.headingLine2}</span>
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            {cta.description}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25"
            >
              Schedule a Technical Consultation
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href={cta.secondaryHref}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent hover:bg-accent/10 transition-all duration-200"
            >
              {cta.secondaryLabel}
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <svg
                className="w-4 h-4 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              No obligation
            </div>
            <div className="w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <svg
                className="w-4 h-4 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              30-minute call
            </div>
            <div className="w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <svg
                className="w-4 h-4 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              Talk with engineers, not sales
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
