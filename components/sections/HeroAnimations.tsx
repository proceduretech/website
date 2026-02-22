"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

// Client component - loads after initial render, provides visual enhancements
export function HeroAnimations() {
  return (
    <LazyMotion features={domAnimation}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-base to-base" />

      {/* Large ambient glow - creates depth */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
        style={{ willChange: "opacity" }}
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-accent/4 rounded-full blur-[100px]" />
      </m.div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 hero-grid-pattern" />

      {/* Floating abstract elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <m.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-[15%] w-3 h-3 bg-accent/40 rounded-full blur-sm"
        />
        <m.div
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
          className="absolute top-[30%] right-[20%] w-2 h-2 bg-accent/50 rounded-full blur-sm"
        />
        <m.div
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
          className="absolute top-[40%] left-[10%] w-4 h-4 bg-accent/30 rounded-full blur-sm"
        />
        <m.div
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
          className="absolute top-[25%] right-[12%] w-5 h-5 bg-accent/25 rounded-full blur-md"
        />

        {/* Connecting lines - subtle tech feel */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <m.line
            x1="10%"
            y1="30%"
            x2="25%"
            y2="45%"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <m.line
            x1="75%"
            y1="25%"
            x2="90%"
            y2="40%"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="var(--color-accent-light)"
                stopOpacity="0.5"
              />
              <stop
                offset="100%"
                stopColor="var(--color-accent-light)"
                stopOpacity="0.2"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </LazyMotion>
  );
}

// Scroll indicator - separate client component
export function HeroScrollIndicator() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div
            className="w-1 h-3 rounded-full mt-2"
            style={{ backgroundColor: "var(--color-text-muted)" }}
          />
        </div>
      </m.div>
    </LazyMotion>
  );
}
