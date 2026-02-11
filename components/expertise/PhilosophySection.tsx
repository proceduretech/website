"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhilosophyBlock {
  title: string;
  description: string;
}

interface PhilosophySectionProps {
  title: string;
  subtitle?: string;
  blocks: PhilosophyBlock[];
}

export function PhilosophySection({
  title,
  subtitle,
  blocks,
}: PhilosophySectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-base">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-5">
            {title}
          </h2>
          {subtitle && (
            <p className="text-text-secondary leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Philosophy blocks */}
        <div className="space-y-10">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-medium text-text-primary mb-2">
                {block.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
