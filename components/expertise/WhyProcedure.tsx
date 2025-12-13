"use client";

import { motion } from "framer-motion";

interface WhyProcedureProps {
  title?: string;
  points: string[];
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function WhyProcedure({
  title = "Why Procedure?",
  points,
}: WhyProcedureProps) {
  return (
    <section className="py-24 sm:py-36 bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-6">
              {title}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              We bring senior engineering expertise and production-tested
              patterns to every engagement. No junior developers learning on
              your project.
            </p>
          </motion.div>

          {/* Right side - Points */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4"
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 rounded-xl bg-surface-elevated border border-border"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-accent-teal-light"
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
                <p className="text-text-primary leading-relaxed pt-1">
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
