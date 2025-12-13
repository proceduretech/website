"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TechIcon, hasTechIcon } from "@/lib/tech-icons";

interface Technology {
  name: string;
  icon?: React.ReactNode;
}

interface TechStackProps {
  title?: string;
  subtitle?: string;
  technologies: Technology[];
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
  technologies,
}: TechStackProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-surface">
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

        {/* Tech grid with hover effect */}
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
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated hover background */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-gradient-to-br from-accent-teal/20 via-accent-blue/15 to-accent-teal/20 block rounded-xl"
                    layoutId="techHoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.2 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.1 },
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Card content */}
              <div
                className={cn(
                  "relative z-10 flex flex-col items-center gap-2 p-4 rounded-xl",
                  "bg-surface-elevated/40 backdrop-blur-sm",
                  "border border-border/50",
                  "group-hover:border-accent-teal/40",
                  "transition-all duration-300",
                )}
              >
                {/* Icon container with glow effect */}
                <div className="relative">
                  {/* Glow effect on hover */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-full blur-xl transition-opacity duration-500",
                      "bg-gradient-to-br from-accent-teal/30 to-accent-blue/30",
                      hoveredIndex === index ? "opacity-100" : "opacity-0",
                    )}
                  />

                  {/* Icon */}
                  {tech.icon ? (
                    <div
                      className={cn(
                        "relative h-10 w-10 flex items-center justify-center",
                        "text-text-muted transition-all duration-300",
                        hoveredIndex === index
                          ? "text-accent-teal-light scale-110"
                          : "group-hover:text-text-secondary",
                      )}
                    >
                      {tech.icon}
                    </div>
                  ) : hasTechIcon(tech.name) ? (
                    <div
                      className={cn(
                        "relative h-10 w-10 flex items-center justify-center",
                        "text-text-muted transition-all duration-300",
                        hoveredIndex === index
                          ? "text-accent-teal-light scale-110"
                          : "group-hover:text-text-secondary",
                      )}
                    >
                      <TechIcon name={tech.name} size={28} />
                    </div>
                  ) : (
                    <div
                      className={cn(
                        "relative h-10 w-10 rounded-lg flex items-center justify-center",
                        "bg-gradient-to-br from-accent-teal/20 to-accent-blue/20",
                        "transition-all duration-300",
                        hoveredIndex === index && "scale-110",
                      )}
                    >
                      <span className="text-lg font-semibold text-accent-teal-light">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Tech name */}
                <span
                  className={cn(
                    "text-xs text-center font-medium transition-colors duration-300",
                    hoveredIndex === index
                      ? "text-text-primary"
                      : "text-text-muted group-hover:text-text-secondary",
                  )}
                >
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
