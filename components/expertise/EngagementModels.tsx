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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
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

        {/* Horizontal comparison layout -- no cards, column-based with vertical dividers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className={cn(
            "relative rounded-2xl overflow-hidden",
            "bg-surface-elevated/40",
            "border border-border"
          )}
        >
          {/* Inner flex layout */}
          <div
            className={cn(
              "flex flex-col",
              models.length <= 3
                ? "md:flex-row"
                : "md:flex-row md:flex-wrap"
            )}
          >
            {models.map((model, index) => {
              const isLast = index === models.length - 1;

              return (
                <motion.div
                  key={index}
                  variants={columnVariants}
                  className={cn(
                    "group relative flex-1 min-w-0",
                    // Vertical divider on desktop (border-right on all but last)
                    !isLast && "md:border-r md:border-border",
                    // Horizontal divider on mobile (border-bottom on all but last)
                    !isLast && "border-b border-border md:border-b-0"
                  )}
                >
                  {/* Top accent line */}
                  <div className="h-[2px] bg-gradient-to-r from-accent/60 via-accent-light/40 to-accent/60 opacity-60 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-10">
                    {/* Model number + title */}
                    <div className="mb-4">
                      <span className="text-xs font-medium text-text-muted uppercase tracking-widest mb-2 block">
                        Model {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-semibold text-text-primary group-hover:text-highlight transition-colors duration-300">
                        {model.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {model.description}
                    </p>

                    {/* Best for tag */}
                    <div
                      className={cn(
                        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
                        "bg-accent/8 border border-accent/15",
                        "group-hover:bg-accent/12 group-hover:border-accent/25",
                        "transition-all duration-300"
                      )}
                    >
                      <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                        Best for
                      </span>
                      <span className="text-sm text-accent-light font-medium">
                        {model.bestFor}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
