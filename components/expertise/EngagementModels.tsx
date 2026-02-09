"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EngagementModel {
  title: string;
  description: string;
  bestFor: string;
}

interface EngagementModelsProps {
  title?: string;
  subtitle?: string;
  models: EngagementModel[];
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function EngagementModels({
  title = "How Clients Work With Us",
  subtitle,
  models,
}: EngagementModelsProps) {
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
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Models grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {models.map((model, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={cn(
                "group relative p-6 sm:p-8 rounded-2xl",
                "bg-surface-elevated/80 backdrop-blur-sm",
                "border border-border",
                "hover:border-accent/30 transition-all duration-300",
                "hover:shadow-lg hover:shadow-accent/5"
              )}
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Number badge */}
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-8 h-8 rounded-lg mb-4",
                    "bg-accent/10 border border-accent/20",
                    "text-sm font-semibold text-accent-light"
                  )}
                >
                  {index + 1}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {model.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {model.description}
                </p>

                {/* Best for tag */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-text-muted uppercase tracking-wide">
                    Best for:
                  </span>
                  <span className="text-sm text-accent-light font-medium">
                    {model.bestFor}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
