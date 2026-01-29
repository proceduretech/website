"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface PageHeroProps {
  badge: string;
  badgeVariant?: "teal" | "blue";
  headline: string;
  headlineAccent?: string;
  tagline?: string;
  description: string;
  stats?: Stat[];
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  children?: ReactNode;
}

// Smooth easing curve for premium feel
const smoothEasing = [0.16, 1, 0.3, 1] as const;

export function PageHero({
  badge,
  badgeVariant = "teal",
  headline,
  headlineAccent,
  tagline,
  description,
  stats,
  primaryCTA = { text: "Talk to the Team", href: "/contact-us" },
  secondaryCTA = { text: "View Case Studies", href: "/work" },
  children,
}: PageHeroProps) {
  // Use full class names so Tailwind can detect them (not in template literals)
  const badgeColorClasses = cn(
    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8",
    badgeVariant === "blue"
      ? "bg-accent-secondary/10 border-accent-secondary/20 text-accent-secondary-light"
      : "bg-accent/10 border-accent/20 text-accent-light"
  );

  const pulseColorClass = cn(
    "w-1.5 h-1.5 rounded-full animate-pulse",
    badgeVariant === "blue" ? "bg-accent-secondary-light" : "bg-accent-light"
  );

  const glowColor = cn(
    "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[120px]",
    badgeVariant === "blue" ? "bg-accent-secondary/8" : "bg-accent/8"
  );

  return (
    <section className="relative pt-32 pb-24 sm:pb-36 bg-base overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className={glowColor} />
      </motion.div>

      {/* Main content - CENTERED */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-text-primary mb-6">
            {headline}
            {headlineAccent && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-highlight"
              >
                {" "}
                {headlineAccent}
              </motion.span>
            )}
          </h1>

          {/* Tagline */}
          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: smoothEasing }}
              className="text-xl sm:text-2xl text-text-secondary font-medium mb-4"
            >
              {tagline}
            </motion.p>
          )}

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: smoothEasing }}
            className="text-lg text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Stats Row (optional) */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: smoothEasing }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.1,
                    ease: smoothEasing,
                  }}
                  className="p-4 sm:p-6 rounded-xl text-center bg-surface-elevated border border-border"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary mt-1 sm:mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: stats ? 0.5 : 0.4,
              ease: smoothEasing,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
            <Link href={secondaryCTA.href}>
              <Button variant="outline" size="lg">
                {secondaryCTA.text}
              </Button>
            </Link>
          </motion.div>

          {/* Optional children content */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12"
            >
              {children}
            </motion.div>
          )}

          {/* Client Logos - always show */}
          <div className="mt-16 mb-16">
            <ClientLogos />
          </div>
        </div>
      </div>
    </section>
  );
}
