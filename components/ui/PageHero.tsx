"use client";

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
  badge?: string;
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
  showClientLogos?: boolean;
}

export function PageHero({
  badge,
  badgeVariant = "teal",
  headline,
  headlineAccent,
  tagline,
  description,
  stats,
  primaryCTA = { text: "Talk to the Team", href: "/contact-us" },
  secondaryCTA,
  children,
  showClientLogos = true,
}: PageHeroProps) {
  const glowColor = cn(
    "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[120px]",
    badgeVariant === "blue" ? "bg-accent-secondary/8" : "bg-accent/8"
  );

  return (
    <section className="relative pt-32 pb-12 sm:pb-16 bg-base overflow-hidden">
      {/* Animated background glow - CSS animation, no JS needed */}
      <div className="absolute inset-0 pointer-events-none hero-glow-fade">
        <div className={glowColor} />
      </div>

      {/* Main content - CENTERED */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge - disabled per design decision */}
          {/* {badge && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-6",
                badgeVariant === "blue"
                  ? "bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20"
                  : "bg-accent/10 text-accent border border-accent/20"
              )}
            >
              {badge}
            </motion.div>
          )} */}

          {/* Headline - NO animation, visible immediately for LCP.
              framer-motion's initial={{ opacity: 0 }} bakes into SSR HTML as
              style="opacity:0", keeping text invisible until JS hydrates.
              Removing motion wrapper ensures the H1 paints on first frame. */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-text-primary mb-6">
            {headline}
            {headlineAccent && (
              <>
                <br />
                <span className="text-highlight">{headlineAccent}</span>
              </>
            )}
          </h1>

          {/* Tagline - CSS animation instead of framer-motion.
              CSS animations start on stylesheet parse (~0ms with inline CSS),
              framer-motion waits for JS hydration (potentially seconds). */}
          {tagline && (
            <p className="text-xl sm:text-2xl text-text-secondary font-medium mb-4 hero-fade-in">
              {tagline}
            </p>
          )}

          {/* Description - CSS animation for same reason */}
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed hero-fade-in hero-fade-in-delay">
            {description}
          </p>

          {/* Stats Row (optional) - CSS animation for performance */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 max-w-2xl mx-auto hero-stats-container">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 rounded-xl text-center bg-surface-elevated border border-border hero-stat-item"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary mt-1 sm:mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTAs - CSS animation for faster interactivity */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-fade-in" style={{ animationDelay: "0.15s" }}>
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
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button variant="outline" size="lg">
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>

          {/* Optional children content - CSS animation for performance */}
          {children && (
            <div className="mt-12 hero-children-fade">
              {children}
            </div>
          )}

          {/* Client Logos */}
          {showClientLogos && (
            <div className="mt-16">
              <ClientLogos />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
