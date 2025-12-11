"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AboutTeaser() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-surface">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-text-primary font-medium mb-2">
            Seasoned builders delivering software products—
            <span className="text-accent-teal-light">with and without AI</span>.
          </p>
          <p className="text-text-secondary mb-8">
            Production-tested engineering. Your partner for what&apos;s next.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-text-primary bg-surface-elevated border border-border rounded-lg hover:border-accent-teal/50 hover:text-accent-teal-light transition-all duration-200"
            >
              Learn About Us
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
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-accent-teal-light bg-accent-teal/10 border border-accent-teal/20 rounded-lg hover:bg-accent-teal/20 hover:border-accent-teal/40 transition-all duration-200"
            >
              We&apos;re Hiring
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
