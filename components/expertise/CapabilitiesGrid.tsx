"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Capability {
  icon: ReactNode;
  title: string;
  description: string;
}

interface CapabilitiesGridProps {
  title?: string;
  subtitle?: string;
  capabilities: Capability[];
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

export function CapabilitiesGrid({
  title = "Key Capabilities",
  subtitle,
  capabilities,
}: CapabilitiesGridProps) {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-5">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </m.div>

        {/* Capabilities grid */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-6",
            (capabilities.length % 3 === 0 || capabilities.length === 3) &&
              "lg:grid-cols-3"
          )}
        >
          {capabilities.map((capability, index) => (
            <m.div
              key={index}
              variants={cardVariants}
              className="group p-6 rounded-xl bg-surface-elevated border border-border hover:border-accent/30 transition-colors"
            >
              {/* Icon container */}
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 text-accent-light">
                  {capability.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {capability.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {capability.description}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
