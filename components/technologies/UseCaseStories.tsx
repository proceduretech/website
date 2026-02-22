"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/lib/expertise-data";
import { renderLinkedText } from "@/lib/render-linked-text";

interface UseCase {
  title: string;
  description: string;
  category?: string;
  highlight?: string;
  icon?: string;
}

interface UseCaseStoriesProps {
  title?: string;
  cases: UseCase[];
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

export function UseCaseStories({
  title = "Use Cases",
  cases,
}: UseCaseStoriesProps) {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Cases grid */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cases.map((useCase, index) => (
            <m.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative flex flex-col rounded-2xl overflow-hidden h-full",
                "bg-surface-elevated/80 backdrop-blur-sm",
                "border border-border",
                "hover:border-accent/30 transition-all duration-300",
                "hover:shadow-lg hover:shadow-accent/5"
              )}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex flex-col h-full p-6">
                {/* Top: category badge + icon */}
                <div className="flex items-center justify-between mb-5">
                  {useCase.category && (
                    <span
                      className={cn(
                        "inline-flex px-3 py-1 rounded-full",
                        "bg-accent/10 border border-accent/20",
                        "text-xs font-medium text-accent-light uppercase tracking-wider"
                      )}
                    >
                      {useCase.category}
                    </span>
                  )}
                  {useCase.icon && (
                    <div
                      className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-xl",
                        "bg-accent/10 border border-accent/20"
                      )}
                    >
                      <div className="w-5 h-5 text-accent-light">
                        {Icons[useCase.icon as keyof typeof Icons] as ReactNode}
                      </div>
                    </div>
                  )}
                </div>

                {/* Title with quotes */}
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  &ldquo;{useCase.title}&rdquo;
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                  {renderLinkedText(useCase.description)}
                </p>

                {/* Outcome bar */}
                {useCase.highlight && (
                  <div className="mt-5 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-accent flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-sm font-medium text-accent-light">
                        {useCase.highlight}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
