"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const engagementModels = [
  {
    id: "staff-aug",
    title: "Staff Augmentation",
    description: "Embed our engineers directly into your team. Scale up or down as needed.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "end-to-end",
    title: "End-to-End",
    description: "We own the project from discovery to deployment. You stay focused on your business.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M4 4v16h16" />
        <path d="M4 14l4-4 4 4 8-8" />
      </svg>
    ),
  },
  {
    id: "bot",
    title: "Build-Operate-Transfer",
    description: "We build it, run it until it's stable, then transfer ownership to your team.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
      </svg>
    ),
  },
];

const pricingModels = [
  {
    id: "time-material",
    title: "Time & Material",
    description: "Flexible scope, pay for actual work. Best for evolving requirements.",
  },
  {
    id: "fixed-bid",
    title: "Fixed Bid",
    description: "Defined scope, agreed price. Best for well-specified projects.",
  },
];

export function HowWeWorkSection() {
  const { config } = useTheme();

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
          How We Work
        </motion.p>

        <h2 className="mb-20 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          <span className="text-[var(--foreground)]">Flexible engagement models</span>
          <br />
          <span className="text-[var(--muted)]">to fit how you operate</span>
        </h2>

        {/* Engagement Models */}
        <div className="mb-20 text-left">
          <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
            Engagement Models
          </h3>
          <div className="grid gap-5 md:grid-cols-3">
            {engagementModels.map((model, index) => {
              // Rotate through colors: primary, secondary, tertiary
              const colorSets = [
                { color: config.accentColor, colorRgb: config.accentColorRgb },
                { color: config.secondaryColor, colorRgb: config.secondaryColorRgb },
                { color: config.tertiaryColor, colorRgb: config.tertiaryColorRgb },
              ];
              const { color, colorRgb } = colorSets[index % colorSets.length];

              return (
                <motion.div
                  key={model.id}
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
                    {model.icon}
                  </div>

                  <h4 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                    {model.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {model.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pricing Models */}
        <div className="text-left">
          <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
            Pricing Models
          </h3>
          <div className="grid gap-5 md:grid-cols-2">
            {pricingModels.map((model, index) => {
              // Use secondary and tertiary for pricing cards
              const colorSets = [
                { color: config.secondaryColor },
                { color: config.tertiaryColor },
              ];
              const { color } = colorSets[index % colorSets.length];

              return (
                <motion.div
                  key={model.id}
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
                      {model.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">
                      {model.description}
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
