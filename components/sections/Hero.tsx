"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClientLogos } from "./ClientLogos";
import { CalButton } from "@/components/CalButton";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-base to-base" />

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
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content - CENTERED */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Tagline pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-6 justify-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-accent-teal-light bg-accent-teal/10 border border-accent-teal/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              AI Engineering & Security
            </span>
            <span className="px-3 py-1.5 text-xs font-medium text-text-secondary bg-surface-elevated border border-border rounded-full">
              Production-tested engineering
            </span>
          </motion.div>

          {/* Main headline - larger, bolder for center layout */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight"
          >
            AI Engineering
            <br />
            <span className="text-highlight">That Ships to Production</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Senior engineers embedded with your team to build AI-powered products
            and secure AI systems. Battle-tested delivery—now focused on AI.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <CalButton className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-lg hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25 cursor-pointer">
              Start Your AI Project
            </CalButton>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-surface-elevated border border-border rounded-lg hover:border-accent-teal hover:bg-accent-teal/10 transition-all duration-200"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Visual element - What We Build pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-14"
          >
            <p className="text-xs text-text-muted uppercase tracking-wider mb-4">
              What we build
            </p>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-surface/80 backdrop-blur-sm border border-border rounded-xl hover:border-accent-teal/30 transition-colors cursor-default"
              >
                <div className="w-6 h-6 rounded-md bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-accent-teal-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-text-primary">
                  LLM Applications
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-surface/80 backdrop-blur-sm border border-border rounded-xl hover:border-accent-blue/30 transition-colors cursor-default"
              >
                <div className="w-6 h-6 rounded-md bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-accent-blue-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-text-primary">
                  AI Security
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-surface/80 backdrop-blur-sm border border-border rounded-xl hover:border-accent-teal/30 transition-colors cursor-default"
              >
                <div className="w-6 h-6 rounded-md bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-accent-teal-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-text-primary">
                  Product Engineering
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-surface/80 backdrop-blur-sm border border-border rounded-xl hover:border-accent-teal/30 transition-colors cursor-default"
              >
                <div className="w-6 h-6 rounded-md bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-accent-teal-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-text-primary">
                  Design
                </span>
              </motion.div>
            </div>
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
          <div className="w-1 h-3 bg-text-muted rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
