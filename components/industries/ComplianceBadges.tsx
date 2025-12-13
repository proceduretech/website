"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Badge {
  icon: ReactNode;
  name: string;
  description?: string;
}

interface ComplianceBadgesProps {
  title?: string;
  badges: Badge[];
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

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ComplianceBadges({
  title = "Compliance & Trust",
  badges,
}: ComplianceBadgesProps) {
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
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
            {title}
          </h2>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={badgeVariants}
              className={cn(
                "flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-xl",
                "bg-surface-elevated border border-border",
                "hover:border-accent-teal/30 transition-colors duration-300",
              )}
            >
              <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <div className="w-5 h-5 text-green-400">{badge.icon}</div>
              </div>
              <div>
                <div className="font-medium text-text-primary text-sm">
                  {badge.name}
                </div>
                {badge.description && (
                  <div className="text-xs text-text-muted">
                    {badge.description}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
