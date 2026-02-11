"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/lib/expertise-data";

interface ServiceFeature {
  title: string;
  description: string;
  items?: string[];
  icon?: string;
}

interface ServiceFeaturesProps {
  title?: string;
  features: ServiceFeature[];
  variant?: "editorial" | "compact";
  className?: string;
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

function EditorialCard({
  feature,
  index,
}: {
  feature: ServiceFeature;
  index: number;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "bg-surface-elevated/80 backdrop-blur-sm",
        "border border-border",
        "hover:border-accent/30 transition-all duration-300",
        "hover:shadow-lg hover:shadow-accent/5"
      )}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/30 group-hover:bg-accent transition-colors duration-300" />

      <div className="pl-8 pr-6 py-6">
        {/* Top row: number + title */}
        <div className="flex items-center gap-4 mb-3">
          <div
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-xl",
              "bg-accent/10 border border-accent/20",
              "text-lg font-bold text-accent-light"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="text-lg font-semibold text-text-primary">
            {feature.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed">
          {feature.description}
        </p>

        {/* Optional items in 2-column grid */}
        {feature.items && feature.items.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 mt-4">
            {feature.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
              >
                <svg
                  className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

function CompactCard({ feature }: { feature: ServiceFeature }) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "group relative p-6 rounded-2xl",
        "bg-surface-elevated/80 backdrop-blur-sm",
        "border border-border",
        "hover:border-accent/30 transition-all duration-300",
        "hover:shadow-lg hover:shadow-accent/5"
      )}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Icon */}
        {feature.icon && (
          <div
            className={cn(
              "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4",
              "bg-accent/10 border border-accent/20"
            )}
          >
            <div className="w-6 h-6 text-accent-light">
              {Icons[feature.icon as keyof typeof Icons] as ReactNode}
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ServiceFeatures({
  title = "Service Features",
  features,
  variant = "editorial",
  className,
}: ServiceFeaturesProps) {
  return (
    <section className={cn("py-16 sm:py-24", variant === "editorial" ? "bg-surface" : "bg-base", className)}>
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

        {/* Feature cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className={
            variant === "editorial"
              ? "flex flex-col gap-5"
              : "grid grid-cols-1 md:grid-cols-2 gap-6"
          }
        >
          {features.map((feature, index) =>
            variant === "editorial" ? (
              <EditorialCard key={index} feature={feature} index={index} />
            ) : (
              <CompactCard key={index} feature={feature} />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
