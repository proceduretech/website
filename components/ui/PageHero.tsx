"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui";
import { ReactNode } from "react";

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

export function PageHero({
  badge,
  badgeVariant = "teal",
  headline,
  headlineAccent,
  tagline,
  description,
  stats,
  primaryCTA = { text: "Book a Call", href: "/contact" },
  secondaryCTA = { text: "View Case Studies", href: "/case-studies" },
  children,
}: PageHeroProps) {
  const badgeColorClasses =
    badgeVariant === "blue"
      ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue-light"
      : "bg-accent-teal/10 border-accent-teal/20 text-accent-teal-light";

  const pulseColorClass =
    badgeVariant === "blue" ? "bg-accent-blue-light" : "bg-accent-teal-light";

  return (
    <section className="relative pt-32 pb-20 sm:pb-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-base to-surface" />

      {/* Large ambient glow - creates depth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-teal/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-accent-blue/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-accent-teal/5 rounded-full blur-[100px]" />
      </motion.div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23E5E7EB'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      {/* Floating abstract elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-[15%] w-3 h-3 bg-accent-teal/40 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[30%] right-[20%] w-2 h-2 bg-accent-blue/50 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[40%] left-[10%] w-4 h-4 bg-accent-teal/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-[25%] right-[12%] w-5 h-5 bg-accent-blue/25 rounded-full blur-md"
        />

        {/* Connecting lines - subtle tech feel */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            x1="10%"
            y1="30%"
            x2="25%"
            y2="45%"
            stroke="url(#page-line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="75%"
            y1="25%"
            x2="90%"
            y2="40%"
            stroke="url(#page-line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <defs>
            <linearGradient
              id="page-line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content - CENTERED */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 ${badgeColorClasses}`}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${pulseColorClass}`}
            />
            <span className="text-sm font-medium">{badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-text-primary mb-6"
          >
            {headline}
            {headlineAccent && (
              <>
                {" "}
                <span className="text-highlight">{headlineAccent}</span>
              </>
            )}
          </motion.h1>

          {/* Tagline */}
          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl text-text-secondary font-medium mb-4"
            >
              {tagline}
            </motion.p>
          )}

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Stats Row (optional) */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 rounded-xl text-center bg-surface/80 backdrop-blur-sm border border-border"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary mt-1 sm:mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stats ? 0.35 : 0.3 }}
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
        </div>
      </div>
    </section>
  );
}
