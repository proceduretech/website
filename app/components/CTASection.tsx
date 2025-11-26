"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { CalButton } from "./CalButton";

export function CTASection() {
  const { config } = useTheme();

  return (
    <section id="cta" className="relative overflow-hidden py-32 px-6">
      {/* Background gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: `linear-gradient(135deg, rgba(${config.accentColorRgb}, 0.08) 0%, transparent 50%, rgba(${config.accentColorRgb}, 0.05) 100%)`,
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl"
          animate={{ color: config.accentColor }}
          transition={{ duration: 0.3 }}
        >
          Let's build something great
        </motion.h2>

        <p className="mb-10 text-lg text-[var(--muted)] md:text-xl">
          Whether you need to ship faster, scale your AI, or secure your systems —
          we're ready to help. Book a call and let's talk.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CalButton />

          <a
            href="mailto:hello@procedure.tech"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
