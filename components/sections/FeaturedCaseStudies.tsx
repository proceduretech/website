"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CaseStudyCard } from "@/components/ui";
import type { CaseStudy } from "@/lib/case-studies-data";

interface FeaturedCaseStudiesProps {
  caseStudies: CaseStudy[];
}

export function FeaturedCaseStudies({ caseStudies }: FeaturedCaseStudiesProps) {
  return (
    <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
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
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-3 sm:mb-4">
              Proven Results
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
              AI that ships. Results that matter.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-accent-light font-semibold text-sm hover:gap-3 transition-all"
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
          {caseStudies.map((study, idx) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              index={idx}
              variant="compact"
              showReadMore
            />
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
            <span className="text-accent-light font-semibold">
              $250M+ in client ROI
            </span>{" "}
            generated across 50+ production AI systems
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-text-primary bg-surface-elevated border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
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
