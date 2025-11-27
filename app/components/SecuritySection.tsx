"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTheme } from "../context/ThemeContext";

const highlightKeys = ["soc2", "encryption", "gdpr", "accessControl"] as const;

const highlightIcons = [
  <svg key="soc2" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="encryption" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>,
  <svg key="gdpr" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="access" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </svg>,
];

export function SecuritySection() {
  const { config } = useTheme();
  const t = useTranslations("security");

  return (
    <section id="security" className="relative overflow-hidden py-32 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="geo-grid opacity-25" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]"
          animate={{ color: config.accentColor }}
          transition={{ duration: 0.3 }}
        >
          {t("label")}
        </motion.p>

        <h2 className="mb-8 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
          {t("title")}
        </h2>

        <p className="mb-14 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          {t("description")}
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlightKeys.map((key, index) => {
            // Rotate through colors: primary, secondary, tertiary, primary
            const colorSets = [
              { color: config.accentColor, colorRgb: config.accentColorRgb },
              { color: config.secondaryColor, colorRgb: config.secondaryColorRgb },
              { color: config.tertiaryColor, colorRgb: config.tertiaryColorRgb },
              { color: config.accentColor, colorRgb: config.accentColorRgb },
            ];
            const { color, colorRgb } = colorSets[index % colorSets.length];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: `rgba(${colorRgb}, 0.1)`,
                    color: color,
                  }}
                >
                  {highlightIcons[index]}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {t(`${key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
