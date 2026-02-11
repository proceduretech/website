"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/lib/expertise-data";

interface Scenario {
  title: string;
  description: string;
  icon: string;
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
          className="flex flex-wrap justify-center gap-6"
        >
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
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
                  <div className="w-5 h-5 text-accent-light">
                    {Icons[scenario.icon as keyof typeof Icons] as ReactNode}
                  </div>
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
