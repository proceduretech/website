'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui';

interface Stat {
  value: string;
  label: string;
}

interface IndustryHeroProps {
  badge: string;
  headline: string;
  headlineAccent: string;
  tagline: string;
  description: string;
  stats: Stat[];
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function IndustryHero({
  badge,
  headline,
  headlineAccent,
  tagline,
  description,
  stats,
  primaryCTA = { text: 'Book a Call', href: '/contact' },
  secondaryCTA = { text: 'View Case Studies', href: '/case-studies' },
}: IndustryHeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pb-28 overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base to-surface" />

      {/* Accent glow - top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent-teal/8 to-transparent blur-3xl" />

      {/* Secondary glow - bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-accent-blue/6 to-transparent blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23E5E7EB'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent-teal-light animate-pulse" />
          <span className="text-sm font-medium text-accent-teal-light">
            {badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-text-primary mb-6"
        >
          {headline}{' '}
          <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
            {headlineAccent}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-text-secondary font-medium mb-4"
        >
          {tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg text-text-secondary max-w-3xl mb-10 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 sm:gap-6 mb-10"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-xl text-center bg-surface-elevated/50 backdrop-blur-sm border border-border"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-text-secondary mt-1 sm:mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href={primaryCTA.href}>
            <Button variant="primary" size="lg">
              {primaryCTA.text}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </Link>
          <Link href={secondaryCTA.href}>
            <Button variant="outline" size="lg">
              {secondaryCTA.text}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
