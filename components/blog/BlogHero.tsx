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
    { value: "50+", label: "Technical Deep-Dives" },
    { value: "15K+", label: "Monthly Readers" },
    { value: "100%", label: "Practitioner-Written" },
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient mesh background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-surface via-base to-base" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-accent-teal/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-40 left-1/4 w-[500px] h-[500px] bg-accent-blue/6 rounded-full blur-[100px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23E5E7EB'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-teal/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal-light animate-pulse" />
            <span className="text-sm font-medium text-accent-teal-light">
              Engineering Insights
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
          >
            Engineering AI Systems
            <br />
            <span className="text-highlight">That Actually Ship</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Battle-tested insights on LLMs, AI security, and production systems
            from engineers building enterprise AI infrastructure.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto"
          >
            {displayStats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-6 rounded-xl text-center bg-surface/80 backdrop-blur-sm border border-border"
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
