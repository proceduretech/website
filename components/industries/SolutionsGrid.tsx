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
  const featuredSolution = solutions.find((s) => s.featured);
  const regularSolutions = solutions.filter((s) => !s.featured);

  return (
    <section className="py-20 sm:py-28 bg-base">
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

        {/* Solutions layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Featured + side cards layout */}
          {featuredSolution && (
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              {/* Featured card - takes 2 columns */}
              <motion.div
                variants={cardVariants}
                className={cn(
                  "lg:col-span-2 p-8 rounded-2xl",
                  "bg-gradient-to-br from-accent-teal/10 to-accent-blue/5",
                  "border border-accent-teal/20",
                  "group hover:border-accent-teal/40 transition-all duration-300",
                )}
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl mb-6",
                    "bg-gradient-to-br from-accent-teal/20 to-accent-blue/20",
                    "border border-accent-teal/30",
                    "flex items-center justify-center",
                    "group-hover:border-accent-teal/50 transition-colors",
                  )}
                >
                  <div className="w-7 h-7 text-accent-teal-light">
                    {featuredSolution.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {featuredSolution.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {featuredSolution.description}
                </p>
              </motion.div>

              {/* Side cards */}
              <div className="space-y-6">
                {regularSolutions.slice(0, 2).map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className={cn(
                      "p-6 rounded-2xl",
                      "bg-surface-elevated/50 backdrop-blur-sm",
                      "border border-border hover:border-accent-teal/30",
                      "transition-all duration-300",
                      "hover:shadow-lg hover:shadow-accent-teal/5",
                    )}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg mb-4",
                        "bg-gradient-to-br from-accent-teal/20 to-accent-blue/20",
                        "border border-accent-teal/20",
                        "flex items-center justify-center",
                      )}
                    >
                      <div className="w-5 h-5 text-accent-teal-light">
                        {solution.icon}
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {solution.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(featuredSolution ? regularSolutions.slice(2) : solutions).map(
              (solution, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={cn(
                    "p-6 rounded-2xl",
                    "bg-surface-elevated/50 backdrop-blur-sm",
                    "border border-border hover:border-accent-teal/30",
                    "transition-all duration-300",
                    "hover:shadow-lg hover:shadow-accent-teal/5",
                    "hover:-translate-y-1",
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl mb-4",
                      "bg-gradient-to-br from-accent-teal/20 to-accent-blue/20",
                      "border border-accent-teal/20",
                      "flex items-center justify-center",
                    )}
                  >
                    <div className="w-6 h-6 text-accent-teal-light">
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
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
