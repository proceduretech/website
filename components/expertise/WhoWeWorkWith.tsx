"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TargetAudience {
  icon: ReactNode;
  title: string;
  description: string;
}

interface WhoWeWorkWithProps {
  title?: string;
  subtitle?: string;
  audiences: TargetAudience[];
  closingStatement?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function WhoWeWorkWith({
  title = "Who We Work With",
  subtitle,
  audiences,
  closingStatement,
}: WhoWeWorkWithProps) {
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

        {/* Audience cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className={cn(
            "grid gap-6",
            audiences.length === 3
              ? "grid-cols-1 md:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {audiences.map((audience, index) => (
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
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon container */}
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl mb-5",
                    "bg-accent/10 border border-accent/20",
                    "flex items-center justify-center",
                    "group-hover:border-accent/40 transition-colors duration-300"
                  )}
                >
                  <div className="w-7 h-7 text-accent-light">{audience.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {audience.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing statement */}
        {closingStatement && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 sm:mt-16"
          >
            <div
              className={cn(
                "max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl text-center",
                "bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5",
                "border border-accent/20"
              )}
            >
              <p className="text-lg text-text-primary leading-relaxed">
                {closingStatement}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
