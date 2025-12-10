'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

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
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export function CapabilitiesGrid({
  title = 'Key Capabilities',
  subtitle,
  capabilities,
}: CapabilitiesGridProps) {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Capabilities grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={cn(
                'group relative p-6 rounded-2xl',
                'bg-surface-elevated/50 backdrop-blur-sm',
                'border border-border hover:border-accent-teal/30',
                'transition-all duration-300',
                'hover:shadow-lg hover:shadow-accent-teal/5',
                'hover:-translate-y-1'
              )}
            >
              {/* Icon container */}
              <div className={cn(
                'w-12 h-12 rounded-xl mb-4',
                'bg-gradient-to-br from-accent-teal/20 to-accent-blue/20',
                'border border-accent-teal/20',
                'flex items-center justify-center',
                'group-hover:border-accent-teal/40 group-hover:scale-105',
                'transition-all duration-300'
              )}>
                <div className="w-6 h-6 text-accent-teal-light">
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

              {/* Hover glow effect */}
              <div className={cn(
                'absolute inset-0 rounded-2xl opacity-0',
                'bg-gradient-to-br from-accent-teal/5 to-transparent',
                'group-hover:opacity-100 transition-opacity duration-300',
                'pointer-events-none'
              )} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
