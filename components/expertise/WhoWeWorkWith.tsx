"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface TargetAudience {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  bullets?: string[];
}

interface CommonApplicationItem {
  title: string;
  description: string;
}

interface CommonApplications {
  title: string;
  items: (string | CommonApplicationItem)[];
}

interface WhoWeWorkWithProps {
  title?: string;
  subtitle?: string;
  audiences: TargetAudience[];
  closingStatement?: string;
  commonApplications?: CommonApplications;
  variant?: "cards" | "tabs";
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
  commonApplications,
  variant = "cards",
}: WhoWeWorkWithProps) {
  const [activeTab, setActiveTab] = useState(0);

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
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-5">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Tabs variant */}
        {variant === "tabs" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {audiences.map((audience, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-200",
                    activeTab === index
                      ? "bg-accent/20 text-accent-light border border-accent/30"
                      : "bg-surface-elevated/60 text-text-secondary border border-border hover:border-accent/20 hover:text-text-primary"
                  )}
                >
                  {audience.title}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div
              className={cn(
                "max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl",
                "bg-surface-elevated/80 backdrop-blur-sm",
                "border border-border"
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {audiences[activeTab].subtitle && (
                    <p className="text-text-muted text-sm mb-5">
                      {audiences[activeTab].subtitle}
                    </p>
                  )}
                  {audiences[activeTab].bullets && (
                    <ul className="space-y-4">
                      {audiences[activeTab].bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-text-secondary leading-relaxed"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-[9px]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Cards variant (original) */}
        {variant === "cards" && (
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
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {audience.title}
                  </h3>
                  {audience.subtitle && (
                    <p className="text-sm text-text-muted mb-3">{audience.subtitle}</p>
                  )}
                  {audience.bullets ? (
                    <ul className="space-y-2">
                      {audience.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary text-sm leading-relaxed">
                          <span className="text-accent mt-1 flex-shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : audience.description ? (
                    <p className="text-text-secondary leading-relaxed">
                      {audience.description}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Common Applications - structured card grid */}
        {commonApplications && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 sm:mt-16"
          >
            <div className="max-w-5xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-text-primary mb-8 text-center">
                {commonApplications.title}
              </h3>
              <div className={cn(
                "grid grid-cols-1 sm:grid-cols-2 gap-4",
                commonApplications.items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"
              )}>
                {commonApplications.items.map((item, index) => {
                  const isObject = typeof item === "object";

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-surface-elevated/60 border border-border hover:border-accent/20 transition-all duration-200"
                    >
                      <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-accent/60" />
                      <div>
                        {isObject ? (
                          <>
                            <span className="block text-text-primary font-medium text-sm mb-1">{item.title}</span>
                            {item.description && (
                              <span className="block text-text-muted text-sm leading-relaxed">{item.description}</span>
                            )}
                          </>
                        ) : (
                          <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Legacy closing statement (fallback) */}
        {closingStatement && !commonApplications && (
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
