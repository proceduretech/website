"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EngagementModel {
  title: string;
  description: string;
}

interface EngagementModelsProps {
  title?: string;
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function EngagementModels({
  title = "Engagement Models",
  models,
}: EngagementModelsProps) {
  return (
    <section className="py-16 sm:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-5">
            {title}
          </h2>
        </motion.div>

        {/* Models grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {models.map((model, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative p-6 rounded-2xl",
                "bg-surface-elevated/80 backdrop-blur-sm",
                "border border-border",
                "hover:border-accent/30 transition-all duration-300",
                "hover:shadow-lg hover:shadow-accent/5"
              )}
            >
              {/* Numbered badge */}
              <div
                className={cn(
                  "inline-flex items-center justify-center w-8 h-8 rounded-full mb-4",
                  "bg-accent/10 border border-accent/20",
                  "text-sm font-semibold text-accent-light"
                )}
              >
                {index + 1}
              </div>

              {/* Model title */}
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {model.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed">
                {model.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
