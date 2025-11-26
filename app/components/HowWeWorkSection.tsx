"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const engagementModels = [
  {
    id: "staff-aug",
    title: "Staff Augmentation",
    description: "Embed our engineers directly into your team. Scale up or down as needed.",
  },
  {
    id: "end-to-end",
    title: "End-to-End",
    description: "We own the project from discovery to deployment. You stay focused on your business.",
  },
  {
    id: "bot",
    title: "Build-Operate-Transfer",
    description: "We build it, run it until it's stable, then transfer ownership to your team.",
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

      <div className="relative mx-auto max-w-5xl">
        {/* Section header */}
        <motion.p
          className="mb-4 text-xs font-medium uppercase tracking-widest"
          animate={{ color: config.accentColor }}
          transition={{ duration: 0.3 }}
        >
          How We Work
        </motion.p>

        <h2 className="mb-16 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
          Flexible engagement models<br />
          <span className="text-[var(--muted)]">to fit how you operate</span>
        </h2>

        {/* Engagement Models */}
        <div className="mb-16">
          <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
            Engagement Models
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:border-transparent"
                style={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
                whileHover={{
                  boxShadow: `0 4px 20px rgba(${config.accentColorRgb}, 0.15)`,
                  borderColor: config.accentColor,
                }}
              >
                {/* Number indicator */}
                <div
                  className="mb-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: `rgba(${config.accentColorRgb}, 0.1)`,
                    color: config.accentColor,
                  }}
                >
                  {index + 1}
                </div>

                <h4 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                  {model.title}
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {model.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Models */}
        <div>
          <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
            Pricing Models
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {pricingModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] p-6"
                style={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                {/* Accent bar */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-1"
                  style={{ backgroundColor: config.accentColor }}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
