"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ArchitectureLayer {
  name: string;
  description: string;
}

interface ArchitectureSectionProps {
  title?: string;
  subtitle?: string;
  diagramSrc?: string;
  diagramAlt?: string;
  layers: ArchitectureLayer[];
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
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ArchitectureSection({
  title = "Our Technical Approach",
  subtitle,
  diagramSrc,
  diagramAlt = "Architecture diagram",
  layers,
}: ArchitectureSectionProps) {
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
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left side - Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
              "relative rounded-2xl",
              "bg-surface-elevated border border-border"
            )}
          >
            {diagramSrc ? (
              <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={diagramSrc}
                  alt={diagramAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6"
                />
              </div>
            ) : (
              /* Conceptual architecture diagram - 4 layers with inward dependencies */
              <div className="flex flex-col items-center px-6 pt-12 pb-8 sm:px-8 sm:pt-14 sm:pb-10">
                <div className="relative w-full max-w-[300px] sm:max-w-[360px] aspect-square">
                  {/* Outermost layer - API */}
                  <div className="absolute inset-0 rounded-full border-[1.5px] border-white/[0.12] flex items-center justify-center">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium text-text-secondary bg-surface-elevated px-2.5 py-0.5 rounded-sm whitespace-nowrap">
                      API
                    </span>
                  </div>
                  {/* Arrow between API and Infrastructure */}
                  <svg className="absolute top-[11%] left-1/2 -translate-x-1/2 w-4 h-4 text-text-muted/70" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2L6 10M6 10L3 7M6 10L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* Second layer - Infrastructure */}
                  <div className="absolute inset-[16%] rounded-full border-[1.5px] border-white/[0.12] flex items-center justify-center">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium text-text-secondary bg-surface-elevated px-2.5 py-0.5 rounded-sm whitespace-nowrap">
                      Infrastructure
                    </span>
                  </div>
                  {/* Arrow between Infrastructure and Application */}
                  <svg className="absolute top-[27%] left-1/2 -translate-x-1/2 w-4 h-4 text-text-muted/70" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2L6 10M6 10L3 7M6 10L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* Third layer - Application */}
                  <div className="absolute inset-[32%] rounded-full border-[1.5px] border-accent/30 flex items-center justify-center">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium text-text-secondary bg-surface-elevated px-2.5 py-0.5 rounded-sm whitespace-nowrap">
                      Application
                    </span>
                  </div>
                  {/* Arrow between Application and Domain */}
                  <svg className="absolute top-[43%] left-1/2 -translate-x-1/2 w-4 h-4 text-accent/50" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2L6 10M6 10L3 7M6 10L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* Innermost layer - Domain (protected core) */}
                  <div className="absolute inset-[48%] rounded-full bg-accent/10 border-[1.5px] border-accent/50 flex items-center justify-center">
                    <span className="text-sm text-accent-light font-semibold whitespace-nowrap">
                      Domain
                    </span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-text-secondary text-center max-w-[280px]">
                  Dependencies point inward to protect core business logic.
                </p>
              </div>
            )}
          </motion.div>

          {/* Right side - Layer descriptions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4"
          >
            {layers.map((layer, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={cn(
                  "p-5 rounded-xl",
                  "bg-surface-elevated/80 backdrop-blur-sm",
                  "border border-border",
                  "hover:border-accent/30 transition-colors duration-300"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-lg mt-0.5",
                      "bg-accent/10 border border-accent/20",
                      "flex items-center justify-center"
                    )}
                  >
                    <span className="text-sm font-semibold text-accent-light">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-1">
                      {layer.name}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
