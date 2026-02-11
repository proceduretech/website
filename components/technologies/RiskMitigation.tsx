"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Scenario {
  title: string;
  description: string;
}

interface RiskMitigationProps {
  title?: string;
  intro?: string;
  scenarios: Scenario[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function RiskMitigation({
  title = "Risk Mitigation",
  intro,
  scenarios,
}: RiskMitigationProps) {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-5">
            {title}
          </h2>
          {intro && (
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              {intro}
            </p>
          )}
        </motion.div>

        {/* Scenarios grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative p-6 rounded-2xl",
                "bg-surface-elevated/80 backdrop-blur-sm",
                "border border-border",
                "hover:border-accent/30 transition-all duration-300",
                "hover:shadow-lg hover:shadow-accent/5"
              )}
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Risk icon */}
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4",
                    "bg-accent/10 border border-accent/20"
                  )}
                >
                  <svg
                    className="w-5 h-5 text-accent-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>

                {/* Quoted title */}
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  &ldquo;{scenario.title}&rdquo;
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
