"use client";

import { m } from "framer-motion";
import { TechIcon, hasTechIcon } from "@/lib/tech-icons";
import { LinkedText } from "@/components/ui/LinkedText";

interface Technology {
  name: string;
  icon?: React.ReactNode;
}

interface TechGroup {
  category: string;
  items: string[];
}

interface TechStackProps {
  title?: string;
  subtitle?: string;
  technologies?: Technology[];
  groups?: TechGroup[];
  variant?: "grid" | "grouped";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function TechStack({
  title = "Technologies We Use",
  subtitle,
  technologies = [],
  groups,
  variant = "grid",
}: TechStackProps) {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
          )}
        </m.div>

        {/* Grouped chips variant */}
        {variant === "grouped" && groups && (
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {groups.map((group, index) => (
                <m.div
                  key={index}
                  variants={itemVariants}
                  className="relative p-5 sm:p-6 rounded-2xl bg-surface-elevated/80 border border-border hover:border-accent/20 transition-all duration-300 group"
                >
                  {/* Subtle gradient glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    {/* Category header with accent indicator */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-1 h-5 rounded-full bg-accent/40 group-hover:bg-accent/70 transition-colors duration-300" />
                      <h3 className="text-sm font-semibold text-text-primary tracking-wide">
                        {group.category}
                      </h3>
                    </div>
                    {/* Technology items */}
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1.5 text-sm text-text-secondary bg-surface/80 border border-border rounded-lg hover:border-accent/20 hover:text-text-primary transition-colors duration-200"
                        >
                          <LinkedText text={item} />
                        </span>
                      ))}
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        )}

        {/* Tech grid (default) */}
        {variant === "grid" && technologies && technologies.length > 0 && (
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
          >
            {technologies.map((tech, index) => (
              <m.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-surface-elevated border border-border hover:border-accent/30 transition-colors"
              >
                {/* Icon */}
                {tech.icon ? (
                  <div className="h-10 w-10 flex items-center justify-center text-text-secondary">
                    {tech.icon}
                  </div>
                ) : hasTechIcon(tech.name) ? (
                  <div className="h-10 w-10 flex items-center justify-center text-text-secondary">
                    <TechIcon name={tech.name} size={28} />
                  </div>
                ) : (
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-accent-light">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Tech name */}
                <span className="text-xs text-center font-medium text-text-muted">
                  {tech.name}
                </span>
              </m.div>
            ))}
          </m.div>
        )}
      </div>
    </section>
  );
}
