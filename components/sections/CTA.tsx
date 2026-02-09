"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

export function CTA() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(20, 184, 166, 0.4)"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5" />
      {/* Diamond/rhombus pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3e%3cpath d='M18 4L32 18L18 32L4 18Z' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
        }}
      />

      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
          Ready to secure your AI initiatives?
        </h2>
        <p className="text-base sm:text-lg text-text-secondary mb-8 sm:mb-10 max-w-2xl mx-auto">
          Whether you&apos;re building your first LLM application or scaling
          existing AI systems, our engineers can be embedded with your team
          within 2-5 days.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-cta-text bg-cta rounded-lg hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25"
        >
          Schedule AI Strategy Call
        </Link>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
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
      </m.div>
    </section>
    </LazyMotion>
  );
}
