"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Outcome {
  value: string;
  label: string;
}

interface WhyChooseProcedureProps {
  title?: string;
  subtitle?: string;
  reasonsTitle?: string;
  reasons: string[];
  outcomesTitle?: string;
  outcomes: Outcome[];
}

const containerVariants = {
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
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const outcomeVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function WhyChooseProcedure({
  title = "Why Choose Procedure",
  subtitle,
  reasonsTitle = "Companies choose Procedure because:",
  reasons,
  outcomesTitle = "Outcomes from Recent Engagements",
  outcomes,
}: WhyChooseProcedureProps) {
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
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Reasons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={cn(
              "p-6 sm:p-8 rounded-2xl",
              "bg-surface-elevated/80 backdrop-blur-sm",
              "border border-border"
            )}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              {reasonsTitle}
            </h3>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div
                    className={cn(
                      "flex-shrink-0 w-6 h-6 rounded-full mt-0.5",
                      "bg-accent/20 border border-accent/30",
                      "flex items-center justify-center"
                    )}
                  >
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
                  </div>
                  <span className="text-text-secondary leading-relaxed">
                    {reason}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right side - Outcomes */}
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
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              {outcomesTitle}
            </h3>
            <div className="grid gap-4">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  variants={outcomeVariants}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl",
                    "bg-surface-elevated/60 backdrop-blur-sm",
                    "border border-border",
                    "hover:border-accent/30 transition-colors duration-300"
                  )}
                >
                  <div className="flex-shrink-0">
                    <span className="text-3xl sm:text-4xl font-bold text-highlight">
                      {outcome.value}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-text-primary font-medium">
                      {outcome.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
