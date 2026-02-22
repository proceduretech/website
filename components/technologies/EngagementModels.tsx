"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface EngagementModel {
  title: string;
  description: string;
  teamSize?: string;
  bestFor?: string;
  typicalDuration?: string;
}

interface EngagementModelsProps {
  title?: string;
  models: EngagementModel[];
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

const progressWidths = ["w-1/3", "w-2/3", "w-full"];

export function EngagementModels({
  title = "Engagement Models",
  models,
}: EngagementModelsProps) {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-5">
            {title}
          </h2>
        </m.div>

        {/* Models grid */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {models.map((model, index) => (
            <m.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative rounded-2xl overflow-hidden",
                "bg-surface-elevated/80 backdrop-blur-sm",
                "border border-border",
                "hover:border-accent/30 transition-all duration-300",
                "hover:shadow-lg hover:shadow-accent/5"
              )}
            >
              {/* Progress bar showing scale progression */}
              <div
                className={cn(
                  "absolute top-0 left-0 h-1 bg-accent/40 group-hover:bg-accent transition-all duration-500",
                  progressWidths[index] || "w-full"
                )}
              />

              <div className="p-6 pt-7">
                {/* Team size display */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-bold text-accent/20 leading-none">
                    {model.teamSize || String(index + 1)}
                  </span>
                  <div className="w-px h-8 bg-border" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {model.title}
                    </h3>
                    {model.bestFor && (
                      <span className="text-xs text-accent-light font-medium">
                        {model.bestFor}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {model.description}
                </p>

                {/* Typical Duration */}
                {model.typicalDuration && (
                  <p className="mt-4 text-xs font-medium text-accent-light">
                    {model.typicalDuration}
                  </p>
                )}
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
