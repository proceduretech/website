'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui';

interface UseCaseHeroProps {
  badge: string;
  headline: string;
  highlightedText: string;
  tagline: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function UseCaseHero({
  badge,
  headline,
  highlightedText,
  tagline,
  description,
  primaryCTA = { text: 'Book a Call', href: '/contact' },
  secondaryCTA = { text: 'See Demo', href: '/contact' },
}: UseCaseHeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pb-28 overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base to-surface" />

      {/* Accent glow - top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent-blue/8 to-transparent blur-3xl" />

      {/* Secondary glow - bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-accent-teal/6 to-transparent blur-3xl" />

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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent-blue-light animate-pulse" />
          <span className="text-sm font-medium text-accent-blue-light">
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
          <span className="text-highlight">
            {highlightedText}
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

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
