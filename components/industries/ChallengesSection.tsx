"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Challenge {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ChallengesSectionProps {
  title?: string;
  challenges: Challenge[];
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

export function ChallengesSection({
  title = "The Challenge",
  challenges,
}: ChallengesSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary">
            {title}
          </h2>
        </m.div>

        {/* Challenges grid */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {challenges.map((challenge, index) => (
            <m.div
              key={index}
              variants={cardVariants}
              className={cn(
                "p-6 rounded-2xl",
                "bg-surface-elevated/30 border border-border",
                "group hover:border-error/20 transition-all duration-300",
              )}
            >
              {/* Icon container */}
              <div
                className={cn(
                  "w-12 h-12 rounded-xl mb-4",
                  "bg-error/10 border border-error/20",
                  "flex items-center justify-center",
                  "group-hover:border-error/30 transition-colors",
                )}
              >
                <div className="w-6 h-6 text-error">{challenge.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {challenge.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {challenge.description}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
