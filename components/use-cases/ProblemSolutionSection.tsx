"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProblemSolutionSectionProps {
  before: string[];
  after: string[];
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
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export function ProblemSolutionSection({
  before,
  after,
}: ProblemSolutionSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary">
            The Transformation
          </h2>
        </m.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Before Card */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={cn(
              "p-6 sm:p-8 rounded-2xl",
              "bg-error/5 border border-error/20",
            )}
          >
            <div className="flex items-center gap-2 text-sm font-medium text-error mb-6">
              <svg
                className="w-5 h-5"
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
              Before Procedure
            </div>
            <ul className="space-y-4">
              {before.map((item, index) => (
                <m.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-error"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <span className="text-text-secondary">{item}</span>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* After Card */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={cn(
              "p-6 sm:p-8 rounded-2xl",
              "bg-accent/5 border border-accent/20",
            )}
          >
            <div className="flex items-center gap-2 text-sm font-medium text-accent-light mb-6">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              After Procedure
            </div>
            <ul className="space-y-4">
              {after.map((item, index) => (
                <m.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
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
                  <span className="text-text-primary">{item}</span>
                </m.li>
              ))}
            </ul>
          </m.div>
        </div>
      </div>
    </section>
  );
}
