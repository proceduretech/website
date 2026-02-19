"use client";

import { m } from "framer-motion";
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

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const outcomeCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const reasonVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
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
        <m.div
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
        </m.div>

        {/* Outcomes - prominent 3-column showcase */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
          className="mb-14 sm:mb-20"
        >
          <m.h3
            variants={reasonVariants}
            className="font-outfit text-sm font-semibold uppercase tracking-widest text-accent-light mb-8 text-center"
          >
            {outcomesTitle}
          </m.h3>

          <div
            className={cn(
              "grid gap-4 sm:gap-6",
              outcomes.length === 3
                ? "grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto"
                : outcomes.length === 2
                  ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
                  : outcomes.length === 1
                    ? "grid-cols-1 max-w-md mx-auto"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
          >
            {outcomes.map((outcome, index) => (
              <m.div
                key={index}
                variants={outcomeCardVariants}
                className={cn(
                  "group relative p-6 sm:p-8 rounded-2xl text-center",
                  "bg-surface-elevated/80 backdrop-blur-sm",
                  "border border-border",
                  "hover:border-accent/30 transition-all duration-500"
                )}
              >
                {/* Subtle accent glow on hover */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100",
                    "bg-gradient-to-b from-accent/5 via-transparent to-transparent",
                    "transition-opacity duration-500 pointer-events-none"
                  )}
                />

                <div className="relative">
                  <span className="block font-outfit text-3xl sm:text-4xl font-bold text-highlight mb-3">
                    {outcome.value}
                  </span>
                  <span className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {outcome.label}
                  </span>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-14 sm:mb-20 max-w-4xl mx-auto">
          <div className="flex-1 h-px bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Reasons */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
          className="max-w-4xl mx-auto"
        >
          <m.h3
            variants={reasonVariants}
            className="font-outfit text-sm font-semibold uppercase tracking-widest text-text-muted mb-8 text-center"
          >
            {reasonsTitle}
          </m.h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <m.div
                key={index}
                variants={reasonVariants}
                className={cn(
                  "flex items-start gap-3.5 p-4 sm:p-5 rounded-xl",
                  "bg-surface-elevated/50 border border-border/60",
                  "hover:border-border-light transition-colors duration-300",
                  // If odd number of items, last one spans full width on sm+
                  reasons.length % 2 !== 0 &&
                    index === reasons.length - 1 &&
                    "sm:col-span-2 sm:max-w-[calc(50%-0.5rem)] sm:mx-auto"
                )}
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-5 h-5 rounded-full mt-0.5",
                    "bg-accent/15 border border-accent/25",
                    "flex items-center justify-center"
                  )}
                >
                  <svg
                    className="w-3 h-3 text-accent-light"
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
                <span className="text-sm sm:text-[0.9375rem] text-text-secondary leading-relaxed">
                  {reason}
                </span>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
