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
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function UseCasesGrid({
  title = "Use Cases",
  subtitle,
  useCases,
  columns = 2,
}: UseCasesGridProps) {
  // Split use cases into columns for the two-column layout
  const midpoint = Math.ceil(useCases.length / (columns === 3 ? 3 : 2));
  const columnGroups =
    columns === 3
      ? [
          useCases.slice(0, midpoint),
          useCases.slice(midpoint, midpoint * 2),
          useCases.slice(midpoint * 2),
        ]
      : [useCases.slice(0, midpoint), useCases.slice(midpoint)];

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

        {/* Numbered list layout -- no cards, divider-based */}
        <div
          className={cn(
            "grid gap-x-12 lg:gap-x-16",
            columns === 3
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2"
          )}
        >
          {columnGroups.map((group, colIndex) => (
            <motion.div
              key={colIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
              className="flex flex-col"
            >
              {/* Top border for the column */}
              <div className="h-px bg-border" />

              {group.map((useCase, index) => {
                const globalIndex =
                  colIndex * midpoint + index;
                const number = String(globalIndex + 1).padStart(2, "0");

                return (
                  <motion.div
                    key={globalIndex}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex gap-5 sm:gap-6 py-6 sm:py-7">
                      {/* Large subtle number */}
                      <span
                        className={cn(
                          "flex-shrink-0 font-outfit text-2xl sm:text-3xl font-semibold",
                          "text-text-muted/30 tabular-nums leading-none pt-0.5",
                          "group-hover:text-accent/40 transition-colors duration-300",
                          "select-none w-8 sm:w-10"
                        )}
                      >
                        {number}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          {/* Inline icon */}
                          <div className="flex-shrink-0 w-5 h-5 text-accent-light opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                            {useCase.icon}
                          </div>
                          <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-highlight transition-colors duration-300">
                            {useCase.title}
                          </h3>
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed pl-[30px]">
                          {useCase.description}
                        </p>
                      </div>
                    </div>

                    {/* Divider line */}
                    <div className="h-px bg-border" />
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
