"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RiskReversalItem {
  title: string;
  description: string;
}

interface RiskReversalProps {
  title?: string;
  subtitle?: string;
  items: RiskReversalItem[];
  closingNote?: string;
  variant?: "grid" | "split";
  leftTriggers?: string[];
  rightBlocks?: RiskReversalItem[];
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

export function RiskReversal({
  title = "When Teams Bring Us In",
  subtitle,
  items,
  closingNote,
  variant = "grid",
  leftTriggers,
  rightBlocks,
}: RiskReversalProps) {
  // Split layout variant
  if (variant === "split" && leftTriggers && rightBlocks) {
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

          {/* Split layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left side - Trigger statements (editorial) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-4"
            >
              <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-4">
                When teams reach out
              </p>
              {leftTriggers.map((trigger, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2.5" />
                  <p className="text-text-secondary leading-relaxed">
                    {trigger}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Right side - Risk reduction blocks (compact) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-5"
            >
              <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-4">
                How we reduce risk
              </p>
              {rightBlocks.map((block, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <div>
                    <span className="text-text-primary">
                      {block.title}
                    </span>
                    <span className="text-text-muted"> — </span>
                    <span className="text-text-secondary">
                      {block.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Closing note */}
          {closingNote && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 pt-8 border-t border-border text-center"
            >
              <p className="text-text-secondary text-sm sm:text-base max-w-3xl mx-auto">
                {closingNote}
              </p>
            </motion.div>
          )}
        </div>
      </section>
    );
  }

  // Default grid layout
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
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Items grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, index) => (
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
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Checkmark icon */}
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4",
                    "bg-accent/10 border border-accent/20"
                  )}
                >
                  <svg
                    className="w-5 h-5 text-accent-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing note */}
        {closingNote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div
              className={cn(
                "inline-block px-6 py-4 rounded-xl",
                "bg-accent/5 border border-accent/20"
              )}
            >
              <p className="text-text-secondary text-sm sm:text-base">
                {closingNote}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
