"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ProcessTimeline({
  title = "Our Process",
  subtitle,
  steps,
}: ProcessTimelineProps) {
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

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative"
        >
          {/* Vertical connecting line - visible on md+ */}
          <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-accent/40" />

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative"
              >
                <div
                  className={cn(
                    "flex flex-col md:flex-row gap-4 md:gap-6",
                    "p-6 rounded-2xl",
                    "bg-surface-elevated/80 backdrop-blur-sm",
                    "border border-border",
                    "hover:border-accent/30 transition-all duration-300",
                    "group"
                  )}
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 flex items-start">
                    <div
                      className={cn(
                        "relative z-10 w-[78px] h-[78px] rounded-2xl",
                        "bg-gradient-to-br from-accent/20 to-accent/5",
                        "border-2 border-accent/30",
                        "flex items-center justify-center",
                        "group-hover:border-accent/50 group-hover:from-accent/30 group-hover:to-accent/10",
                        "transition-all duration-300"
                      )}
                    >
                      <span className="text-2xl font-bold text-accent-light">
                        {String(step.number).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      {step.icon && (
                        <div className="w-6 h-6 text-accent-light">
                          {step.icon}
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative arrow on hover - visible on lg+ */}
                  <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-10">
                    <svg
                      className="w-5 h-5 text-accent-light opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
