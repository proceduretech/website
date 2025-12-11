"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Featured case studies - subset of data for homepage
const featuredCaseStudies = [
  {
    id: "fintech-fraud-detection",
    industry: "Financial Services",
    serviceType: "AI Engineering",
    title: "Real-Time Fraud Detection That Saved $47M in Year One",
    description:
      "Deployed a multi-model AI ensemble that analyzes transactions in under 50ms, catching fraud patterns their legacy rules-based system never could.",
    metrics: [
      { value: "94%", label: "Fraud detection" },
      { value: "67%", label: "Fewer false positives" },
      { value: "$47M", label: "Prevented losses" },
    ],
    tags: ["PyTorch", "Kafka", "AWS SageMaker"],
  },
  {
    id: "healthcare-clinical-ai",
    industry: "Healthcare",
    serviceType: "AI Engineering",
    title: "Clinical Documentation AI That Gives Physicians 2 Hours Back Daily",
    description:
      "Built a HIPAA-compliant AI assistant that listens to patient encounters and generates structured clinical notes, reducing documentation time by 75%.",
    metrics: [
      { value: "2hrs", label: "Saved daily" },
      { value: "98.7%", label: "Accuracy" },
      { value: "4.8/5", label: "Satisfaction" },
    ],
    tags: ["LLMs", "Speech-to-Text", "HIPAA"],
  },
  {
    id: "ecommerce-personalization",
    industry: "E-Commerce",
    serviceType: "AI Engineering",
    title: "AI-Powered Search That Increased Revenue by $180M Annually",
    description:
      "Rebuilt search infrastructure with semantic understanding and real-time personalization, transforming their highest-traffic feature into their highest-converting one.",
    metrics: [
      { value: "34%", label: "Higher conversion" },
      { value: "$180M", label: "Revenue lift" },
      { value: "2.3x", label: "Search-to-purchase" },
    ],
    tags: ["Vector Search", "Python", "ML"],
  },
];

export function FeaturedCaseStudies() {
  return (
    <section className="relative py-16 sm:py-24 bg-surface overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3e%3ccircle cx='2' cy='2' r='1' fill='%23E5E7EB'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-12"
        >
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-3 sm:mb-4">
              Proven Results
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
              AI that ships. Results that matter.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-accent-teal-light font-semibold text-sm hover:gap-3 transition-all"
          >
            View all case studies
            <svg
              className="w-4 h-4"
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
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredCaseStudies.map((study, idx) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

              <div className="relative h-full flex flex-col bg-surface-elevated border border-border rounded-2xl overflow-hidden group-hover:border-accent-teal/30 transition-all duration-300">
                {/* Image placeholder with gradient */}
                <div className="relative h-40 bg-gradient-to-br from-accent-teal/20 to-accent-blue/20 overflow-hidden">
                  {/* Abstract pattern for visual interest */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <svg
                      className="w-32 h-32 text-accent-teal"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="30"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.5"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.3"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.2"
                      />
                    </svg>
                  </div>

                  {/* Industry badge */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 text-xs font-medium text-accent-teal-light bg-surface/90 backdrop-blur rounded-full border border-accent-teal/20">
                    {study.industry}
                  </span>

                  {/* Service type badge */}
                  <span className="absolute top-4 right-4 px-2.5 py-1 text-xs font-medium text-accent-teal-light bg-accent-teal/20 backdrop-blur rounded-full border border-accent-teal/30">
                    {study.serviceType}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col">
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2 leading-snug group-hover:text-accent-teal-light transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-2">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {study.metrics.map((metric, i) => (
                      <div
                        key={metric.label}
                        className="text-center p-2 rounded-lg bg-surface border border-border"
                      >
                        <div
                          className={`text-base font-bold ${
                            i === 0
                              ? "text-accent-teal-light"
                              : i === 1
                                ? "text-accent-blue-light"
                                : "text-text-primary"
                          }`}
                        >
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-text-muted mt-0.5 leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium text-text-muted bg-surface border border-border rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more link */}
                  <Link
                    href={`/case-studies`}
                    className="inline-flex items-center gap-2 text-accent-teal-light font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    Read case study
                    <span className="w-5 h-px bg-accent-teal-light group-hover:w-7 transition-all" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary mb-4">
            Over{" "}
            <span className="text-accent-teal-light font-semibold">
              $250M+ in client ROI
            </span>{" "}
            generated across 50+ production AI systems
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-text-primary bg-surface-elevated border border-border rounded-lg hover:border-accent-teal/50 hover:bg-accent-teal/5 transition-all duration-200"
          >
            Explore All Success Stories
            <svg
              className="w-4 h-4 ml-2"
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
        </motion.div>
      </div>
    </section>
  );
}
