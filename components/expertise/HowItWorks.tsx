"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HowItWorksStep {
  title: string;
  description: string;
}

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps: HowItWorksStep[];
  closingNote?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HowItWorks({
  title = "How It Works",
  subtitle,
  steps,
  closingNote,
}: HowItWorksProps) {
  return (
    <section className="py-16 sm:py-24 bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Vertical timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative flex gap-5 sm:gap-6"
              >
                {/* Step number circle */}
                <div
                  className={cn(
                    "relative z-10 flex-shrink-0",
                    "w-[48px] h-[48px] sm:w-[56px] sm:h-[56px]",
                    "rounded-full flex items-center justify-center",
                    "bg-surface-elevated border-2 border-accent/30",
                    "group-hover:border-accent/60 transition-colors duration-300"
                  )}
                >
                  <span className="text-base sm:text-lg font-bold text-accent-light">
                    {index + 1}
                  </span>
                </div>

                {/* Step content card */}
                <div
                  className={cn(
                    "flex-1 p-5 sm:p-6 rounded-xl",
                    "bg-surface-elevated/80 backdrop-blur-sm",
                    "border border-border",
                    "hover:border-accent/30 transition-colors duration-300"
                  )}
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing note */}
        {closingNote && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-base sm:text-lg text-accent-light font-medium mt-10 sm:mt-12"
          >
            {closingNote}
          </motion.p>
        )}
      </div>
    </section>
  );
}
