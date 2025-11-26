"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const stats = [
  { label: "Founded", value: "2017" },
  { label: "Engineers", value: "50+" },
  { label: "Locations", value: "Mumbai & SF" },
];

export function AboutSection() {
  const { config } = useTheme();

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
              About Us
            </motion.p>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
              Engineering teams<br />
              <span className="text-[var(--muted)]">you can rely on</span>
            </h2>

            <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
              We&apos;re a team of engineers who&apos;ve built and scaled products at startups and enterprises alike.
              We partner with companies to solve hard technical problems — from AI systems that actually
              work in production to platforms that scale with your ambition.
            </p>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="mb-2 text-3xl font-bold md:text-4xl"
                  animate={{ color: config.accentColor }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
