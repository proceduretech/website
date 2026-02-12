"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Solution {
  icon: ReactNode;
  title: string;
  description: string;
  featured?: boolean;
}

interface SolutionsGridProps {
  title?: string;
  subtitle?: string;
  solutions: Solution[];
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

export function SolutionsGrid({
  title = "How We Solve It",
  subtitle,
  solutions,
}: SolutionsGridProps) {
  return (
    <section className="py-16 sm:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
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

        {/* Uniform solutions grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={cn(
                "p-6 rounded-2xl",
                "bg-surface-elevated/50 backdrop-blur-sm",
                "border border-border hover:border-accent/30",
                "transition-all duration-300",
                "hover:shadow-lg hover:shadow-accent/5",
                "hover:-translate-y-1",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-xl mb-4",
                  "bg-gradient-to-br from-accent/20 to-accent-secondary/20",
                  "border border-accent/20",
                  "flex items-center justify-center",
                )}
              >
                <div className="w-6 h-6 text-accent-light">
                  {solution.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {solution.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
