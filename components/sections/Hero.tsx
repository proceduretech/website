"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClientLogos } from "./ClientLogos";

export function Hero() {
  return (
    
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base will-change-transform">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-base to-base" />

        {/* Large ambient glow - creates depth */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
        style={{ willChange: "opacity" }}
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-accent/4 rounded-full blur-[100px]" />
      </motion.div>

      {/* Subtle grid pattern - uses CSS class for theme-aware styling */}
      <div className="absolute inset-0 hero-grid-pattern" />

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
          className="absolute top-[20%] left-[15%] w-3 h-3 bg-accent/40 rounded-full blur-sm"
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
          className="absolute top-[30%] right-[20%] w-2 h-2 bg-accent/50 rounded-full blur-sm"
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
          className="absolute top-[40%] left-[10%] w-4 h-4 bg-accent/30 rounded-full blur-sm"
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
          className="absolute top-[25%] right-[12%] w-5 h-5 bg-accent/25 rounded-full blur-md"
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
            stroke="url(#line-gradient)"
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

      {/* Main content - CENTERED */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Main headline - optimized for LCP */}
          {/* Render text immediately for fast LCP, animate opacity instead of text generation */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-text-primary leading-[1.1] tracking-tight mb-6">
            AI Engineering Services
            <br />
            <span className="text-highlight">
              That Ship to Production
            </span>
          </h1>

          {/* Subheadline - reduced delay for better LCP */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Senior AI engineers embedded with your team within 2-5 days. We
            build LLM applications, AI agents, and secure AI systems that ship
            to production.
          </motion.p>

          {/* CTA buttons - reduced delay for faster interactivity */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-lg hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25"
            >
              Schedule AI Strategy Call
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-lg hover:border-accent/30 transition-all duration-200"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        <ClientLogos />
      </div>

      {/* Scroll indicator */}
      <motion.div
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
      </motion.div>
    </section>
    
  );
}
