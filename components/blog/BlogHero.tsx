"use client";

import { motion } from "framer-motion";

interface BlogHeroProps {
  stats?: {
    value: string;
    label: string;
  }[];
}

export function BlogHero({ stats }: BlogHeroProps) {
  const defaultStats = [
    { value: "30+", label: "Technical Deep-Dives" },
    { value: "3K+", label: "Monthly Readers" },
    { value: "100%", label: "Practitioner-Sourced" },
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className="relative pt-32 pb-24 sm:pb-36 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
{/* Headline - reduced delays for better LCP */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
          >
            Engineering Insights
            <br />
            <span className="text-highlight">From the Trenches</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Deep-dives on AI, product development, and cloud infrastructure from
            engineers building real systems.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto"
          >
            {displayStats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-6 rounded-xl text-center bg-surface-elevated border border-border"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-text-secondary mt-1 sm:mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
