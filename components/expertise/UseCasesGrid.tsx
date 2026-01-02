"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface UseCase {
  icon: ReactNode;
  title: string;
  description: string;
}

interface UseCasesGridProps {
  title?: string;
  subtitle?: string;
  useCases: UseCase[];
  columns?: 2 | 3;
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
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function UseCasesGrid({
  title = "Use Cases",
  subtitle,
  useCases,
  columns = 2,
}: UseCasesGridProps) {
  return (
    <section className="py-16 sm:py-24 bg-base">
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

        {/* Use cases grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className={cn(
            "grid gap-5",
            columns === 3
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2"
          )}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={cn(
                "group relative flex gap-4 p-5 rounded-xl",
                "bg-surface-elevated/60 backdrop-blur-sm",
                "border border-border",
                "hover:border-accent/30 hover:bg-surface-elevated/80",
                "transition-all duration-300"
              )}
            >
              {/* Icon container */}
              <div
                className={cn(
                  "flex-shrink-0 w-12 h-12 rounded-lg",
                  "bg-accent/10 border border-accent/20",
                  "flex items-center justify-center",
                  "group-hover:border-accent/40 group-hover:bg-accent/15",
                  "transition-all duration-300"
                )}
              >
                <div className="w-6 h-6 text-accent-light">{useCase.icon}</div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-text-primary mb-1.5 group-hover:text-highlight transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
