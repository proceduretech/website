"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CostItem {
  icon?: ReactNode;
  title: string;
  description: string;
}

interface BenefitItem {
  icon?: ReactNode;
  title: string;
}

interface QualityMattersProps {
  title?: string;
  subtitle?: string;
  costsTitle?: string;
  costs: CostItem[];
  benefitsTitle?: string;
  benefits: BenefitItem[];
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const benefitVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function QualityMatters({
  title = "Why Quality Matters",
  subtitle,
  costsTitle = "Poor engineering costs you",
  costs,
  benefitsTitle = "Premium development is an investment in",
  benefits,
}: QualityMattersProps) {
  return (
    <section className="py-16 sm:py-24 bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="font-outfit text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Costs section -- the pain points */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
          className="mb-12 sm:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-8"
          >
            <div
              className={cn(
                "w-8 h-8 rounded-lg",
                "bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)]",
                "flex items-center justify-center flex-shrink-0"
              )}
            >
              <svg
                className="w-4 h-4 text-[#fbbf24]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="font-outfit text-sm font-semibold uppercase tracking-widest text-text-muted">
              {costsTitle}
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {costs.map((cost, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={cn(
                  "group relative flex items-start gap-4 p-5 rounded-xl",
                  "bg-surface-elevated/50 border border-border/60",
                  "hover:border-[rgba(245,158,11,0.15)] transition-all duration-300",
                  // If odd number of items, center the last one
                  costs.length % 2 !== 0 &&
                    index === costs.length - 1 &&
                    "sm:col-span-2 sm:max-w-[calc(50%-0.5rem)] sm:mx-auto"
                )}
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-7 h-7 rounded-md mt-0.5",
                    "bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.15)]",
                    "flex items-center justify-center",
                    "group-hover:bg-[rgba(245,158,11,0.12)] transition-colors duration-300"
                  )}
                >
                  {cost.icon || (
                    <svg
                      className="w-3.5 h-3.5 text-[#fbbf24]/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-text-primary text-[0.9375rem] mb-1">
                    {cost.title}
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {cost.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transition divider -- problem to solution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 mb-12 sm:mb-16 max-w-4xl mx-auto"
        >
          <div className="flex-1 h-px bg-border" />
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-accent/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Benefits section -- the resolution */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <motion.div
            variants={benefitVariants}
            className="flex items-center gap-3 mb-8"
          >
            <div
              className={cn(
                "w-8 h-8 rounded-lg",
                "bg-accent/10 border border-accent/20",
                "flex items-center justify-center flex-shrink-0"
              )}
            >
              <svg
                className="w-4 h-4 text-accent-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-outfit text-sm font-semibold uppercase tracking-widest text-accent-light">
              {benefitsTitle}
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={benefitVariants}
                className={cn(
                  "group relative p-5 rounded-xl",
                  "bg-surface-elevated/80 backdrop-blur-sm border border-border",
                  "hover:border-accent/25 transition-all duration-500",
                  // If odd number of items, center the last one
                  benefits.length % 2 !== 0 &&
                    index === benefits.length - 1 &&
                    "sm:col-span-2 sm:max-w-[calc(50%-0.5rem)] sm:mx-auto"
                )}
              >
                {/* Subtle accent glow on hover */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100",
                    "bg-gradient-to-br from-accent/5 via-transparent to-transparent",
                    "transition-opacity duration-500 pointer-events-none"
                  )}
                />

                <div className="relative flex items-center gap-3.5">
                  <div
                    className={cn(
                      "flex-shrink-0 w-7 h-7 rounded-md",
                      "bg-accent/12 border border-accent/25",
                      "flex items-center justify-center",
                      "group-hover:bg-accent/18 transition-colors duration-300"
                    )}
                  >
                    {benefit.icon || (
                      <svg
                        className="w-3.5 h-3.5 text-accent-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-[0.9375rem] text-text-primary font-medium leading-snug">
                    {benefit.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
