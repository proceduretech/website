'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Step {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ArchitectureDiagramProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export function ArchitectureDiagram({
  title = 'How It Works',
  subtitle,
  steps,
}: ArchitectureDiagramProps) {
  return (
    <section className="py-20 sm:py-28 bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent-teal/20 via-accent-teal/40 to-accent-blue/20" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid grid-cols-4 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className={cn(
                  'relative p-6 rounded-2xl text-center',
                  'bg-surface-elevated border border-border',
                  'hover:border-accent-teal/30 transition-colors duration-300'
                )}
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-r from-accent-teal to-accent-blue text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-accent-teal/25">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 mt-2 rounded-xl bg-gradient-to-br from-accent-teal/20 to-accent-blue/20 border border-accent-teal/20 flex items-center justify-center">
                  <div className="w-7 h-7 text-accent-teal-light">
                    {step.icon}
                  </div>
                </div>

                <h4 className="font-semibold text-text-primary mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="lg:hidden space-y-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-accent-teal to-accent-blue text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-accent-teal/25">
                {index + 1}
              </div>
              <div className="flex-1 p-4 rounded-xl bg-surface-elevated border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-teal/20 to-accent-blue/20 flex items-center justify-center">
                    <div className="w-4 h-4 text-accent-teal-light">
                      {step.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-text-primary">
                    {step.title}
                  </h4>
                </div>
                <p className="text-sm text-text-secondary pl-11">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
