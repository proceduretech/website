"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTheme } from "../context/ThemeContext";
import { CalButton } from "./CalButton";

export function CTASection() {
  const { config } = useTheme();
  const t = useTranslations("cta");

  return (
    <section id="cta" className="relative overflow-hidden py-32 px-6">
      {/* Background gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(${config.accentColorRgb}, 0.06) 0%, transparent 70%)`,
        }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <motion.h2
          className="mb-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          animate={{ color: config.accentColor }}
          transition={{ duration: 0.3 }}
        >
          {t("title")}
        </motion.h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-[var(--muted)] md:text-xl lg:text-[1.35rem]">
          {t("description")}
        </p>

        <motion.div
          className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CalButton />

          <a
            href="mailto:hello@procedure.tech"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-7 py-4 text-base font-medium text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--foreground)] hover:shadow-md"
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
            {t("emailUs")}
            <svg
              className="h-4 w-4 opacity-60 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
