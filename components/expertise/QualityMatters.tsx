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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function QualityMatters({
  title = "Why Quality Matters",
  subtitle,
  costsTitle = "Poor engineering costs you:",
  costs,
  benefitsTitle = "Premium development invests in:",
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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Costs column - Problems */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={cn(
              "p-6 sm:p-8 rounded-2xl",
              "bg-error/5 border border-error/20"
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={cn(
                  "w-10 h-10 rounded-xl",
                  "bg-error/10 border border-error/20",
                  "flex items-center justify-center"
                )}
              >
                <svg
                  className="w-5 h-5 text-error"
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
              <h3 className="text-lg font-semibold text-error">{costsTitle}</h3>
            </div>

            <div className="space-y-4">
              {costs.map((cost, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-xl",
                    "bg-surface-elevated/40 border border-error/10",
                    "hover:border-error/20 transition-colors duration-300"
                  )}
                >
                  <div
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-lg mt-0.5",
                      "bg-error/10 border border-error/20",
                      "flex items-center justify-center"
                    )}
                  >
                    {cost.icon || (
                      <svg
                        className="w-4 h-4 text-error"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-1">
                      {cost.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {cost.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits column - Solutions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={cn(
              "p-6 sm:p-8 rounded-2xl",
              "bg-gradient-to-br from-accent/10 via-accent/5 to-transparent",
              "border border-accent/20"
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={cn(
                  "w-10 h-10 rounded-xl",
                  "bg-accent/15 border border-accent/30",
                  "flex items-center justify-center"
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-accent-light">
                {benefitsTitle}
              </h3>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl",
                    "bg-surface-elevated/60 border border-accent/10",
                    "hover:border-accent/30 transition-colors duration-300"
                  )}
                >
                  <div
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-lg",
                      "bg-accent/15 border border-accent/30",
                      "flex items-center justify-center"
                    )}
                  >
                    {benefit.icon || (
                      <svg
                        className="w-4 h-4 text-accent-light"
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
                  <span className="text-text-primary font-medium">
                    {benefit.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
