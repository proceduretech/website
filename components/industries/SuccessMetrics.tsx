"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Metric {
  value: string;
  label: string;
  context?: string;
}

interface SuccessMetricsProps {
  title?: string;
  subtitle?: string;
  metrics: Metric[];
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function SuccessMetrics({
  title = "Success Metrics",
  subtitle,
  metrics,
}: SuccessMetricsProps) {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={cn(
                "p-6 sm:p-8 rounded-2xl text-center flex flex-col",
                "bg-gradient-to-br from-accent/10 to-accent-secondary/10",
                "border border-accent/20",
                "hover:border-accent/40 transition-colors duration-300",
              )}
            >
              <div className="flex-1 flex items-end justify-center pb-3">
                <div className="text-3xl sm:text-4xl font-bold text-highlight whitespace-nowrap">
                  {metric.value}
                </div>
              </div>
              <div className="text-text-primary font-medium">
                {metric.label}
              </div>
              {metric.context ? (
                <div className="text-sm text-text-muted mt-1">
                  {metric.context}
                </div>
              ) : (
                <div className="text-sm mt-1">&nbsp;</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
