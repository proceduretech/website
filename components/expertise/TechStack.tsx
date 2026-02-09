"use client";

import { motion } from "framer-motion";
import { TechIcon, hasTechIcon } from "@/lib/tech-icons";

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
        <motion.div
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
        </motion.div>

        {/* Grouped chips variant */}
        {variant === "grouped" && groups && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {groups.map((group, index) => (
                <div key={index}>
                  <h3 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1.5 text-sm text-text-secondary bg-surface-elevated border border-border rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tech grid (default) */}
        {variant === "grid" && technologies && technologies.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
          >
            {technologies.map((tech, index) => (
              <motion.div
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
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
