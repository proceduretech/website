"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface CapabilityGroup {
  title: string;
  items: string[];
}

interface TechnicalCapabilitiesProps {
  title?: string;
  groups: CapabilityGroup[];
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

export function TechnicalCapabilities({
  title = "Technical Capabilities",
  groups,
}: TechnicalCapabilitiesProps) {
  return (
    <section className="py-16 sm:py-24 bg-base">
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

        {/* Groups grid */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {groups.map((group, index) => (
            <m.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group p-6 rounded-2xl",
                "bg-surface-elevated/80 backdrop-blur-sm",
                "border border-border",
                "hover:border-accent/30 transition-all duration-300",
                "hover:shadow-lg hover:shadow-accent/5"
              )}
            >
              {/* Group title */}
              <h3 className="text-lg font-semibold text-text-primary mb-5">
                {group.title}
              </h3>

              {/* Items list */}
              <ul className="space-y-2.5">
                {group.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
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
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
