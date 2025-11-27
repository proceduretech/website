"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTheme } from "../context/ThemeContext";

const statKeys = ["founded", "engineers", "locations"] as const;

export function AboutSection() {
  const { config } = useTheme();
  const t = useTranslations("about");

  return (
    <section id="about" className="relative overflow-hidden py-24 px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="geo-dots opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left: Content */}
          <div>
            <motion.p
              className="mb-4 text-xs font-medium uppercase tracking-widest"
              animate={{ color: config.accentColor }}
              transition={{ duration: 0.3 }}
            >
              {t("label")}
            </motion.p>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
              {t("title")}<br />
              <span className="text-[var(--muted)]">{t("subtitle")}</span>
            </h2>

            <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
              {t("description")}
            </p>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-3 gap-4">
            {statKeys.map((key, index) => {
              // Rotate through colors: primary, secondary, tertiary
              const colorSets = [
                config.accentColor,
                config.secondaryColor,
                config.tertiaryColor,
              ];
              const color = colorSets[index % colorSets.length];

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className="mb-2 text-3xl font-bold md:text-4xl"
                    animate={{ color: color }}
                    transition={{ duration: 0.3 }}
                  >
                    {t(`${key}Value`)}
                  </motion.div>
                  <div className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                    {t(key)}
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
