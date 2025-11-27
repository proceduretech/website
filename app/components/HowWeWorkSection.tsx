"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTheme } from "../context/ThemeContext";

const engagementModelIcons = [
  <svg key="staff" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  <svg key="e2e" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path d="M4 4v16h16" />
    <path d="M4 14l4-4 4 4 8-8" />
  </svg>,
  <svg key="bot" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
  </svg>,
];

const engagementModelKeys = ["staffAug", "endToEnd", "bot"] as const;
const pricingModelKeys = ["timeMaterial", "fixedBid"] as const;

export function HowWeWorkSection() {
  const { config } = useTheme();
  const t = useTranslations("howWeWork");

  return (
    <section id="how-we-work" className="relative overflow-hidden py-24 px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="geo-grid opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        {/* Section header */}
        <motion.p
          className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]"
          animate={{ color: config.accentColor }}
          transition={{ duration: 0.3 }}
        >
          {t("label")}
        </motion.p>

        <h2 className="mb-20 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          <span className="text-[var(--foreground)]">{t("title")}</span>
          <br />
          <span className="text-[var(--muted)]">{t("subtitle")}</span>
        </h2>

        {/* Engagement Models */}
        <div className="mb-20 text-left">
          <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
            {t("engagementModels")}
          </h3>
          <div className="grid gap-5 md:grid-cols-3">
            {engagementModelKeys.map((key, index) => {
              // Rotate through colors: primary, secondary, tertiary
              const colorSets = [
                { color: config.accentColor, colorRgb: config.accentColorRgb },
                { color: config.secondaryColor, colorRgb: config.secondaryColorRgb },
                { color: config.tertiaryColor, colorRgb: config.tertiaryColorRgb },
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
                  {/* Icon */}
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `rgba(${colorRgb}, 0.1)`,
                      color: color,
                    }}
                  >
                    {engagementModelIcons[index]}
                  </div>

                  <h4 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                    {t(`${key}.title`)}
                  </h4>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {t(`${key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pricing Models */}
        <div className="text-left">
          <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
            {t("pricingModels")}
          </h3>
          <div className="grid gap-5 md:grid-cols-2">
            {pricingModelKeys.map((key, index) => {
              // Use secondary and tertiary for pricing cards
              const colorSets = [
                { color: config.secondaryColor },
                { color: config.tertiaryColor },
              ];
              const { color } = colorSets[index % colorSets.length];

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm"
                >
                  {/* Accent bar */}
                  <div
                    className="absolute left-0 top-0 h-full w-1"
                    style={{ backgroundColor: color }}
                  />

                  <div className="pl-4">
                    <h4 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                      {t(`${key}.title`)}
                    </h4>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
