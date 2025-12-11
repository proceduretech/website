"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClientLogos } from "./ClientLogos";
import { CalButton } from "@/components/CalButton";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-base to-base" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23E5E7EB'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-teal/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[300px] bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Main content */}
          <div className="text-center lg:text-left">
            {/* Tagline pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start"
            >
              <span className="px-3 py-1.5 text-xs font-medium text-text-secondary bg-surface-elevated border border-border rounded-full">
                Forward-deployed AI engineers
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-accent-teal-light bg-accent-teal/10 border border-accent-teal/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                Secure by design
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight tracking-tight"
            >
              Build AI. Build with AI.
              <br />
              <span className="text-highlight">
                We do both.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Elite AI engineers embedded with your team to ship
              production-grade AI systems—from strategy to deployment. You get
              builders, not consultants.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <CalButton className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-cta-text bg-cta rounded-lg hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25 cursor-pointer">
                Book a Strategy Call
              </CalButton>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold text-white bg-surface-elevated border border-border rounded-lg hover:border-accent-teal hover:bg-accent-teal/10 transition-all duration-200"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right column - Feature card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-surface border border-border rounded-2xl overflow-hidden">
                {/* Card header with teal accent */}
                <div className="bg-gradient-to-r from-accent-teal/20 to-accent-teal/5 border-b border-border px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-teal/20 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-accent-teal-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary">
                        What We Build
                      </h3>
                      <p className="text-xs text-text-muted">
                        Production AI systems
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-surface-elevated rounded-lg border border-border">
                    <div className="w-8 h-8 rounded-md bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-accent-teal-light"
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
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary">
                        LLM Applications
                      </p>
                      <p className="text-xs text-text-muted">
                        RAG, agents, chatbots
                      </p>
                    </div>
                    <span className="px-2 py-0.5 text-xs font-medium text-accent-teal-light bg-accent-teal/10 rounded">
                      Core
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-surface-elevated rounded-lg border border-border">
                    <div className="w-8 h-8 rounded-md bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-accent-blue-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary">
                        ML Infrastructure
                      </p>
                      <p className="text-xs text-text-muted">
                        Pipelines, training, deployment
                      </p>
                    </div>
                    <span className="px-2 py-0.5 text-xs font-medium text-accent-blue-light bg-accent-blue/10 rounded">
                      Scale
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-surface-elevated rounded-lg border border-border">
                    <div className="w-8 h-8 rounded-md bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-accent-teal-light"
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
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary">
                        Full Product Build
                      </p>
                      <p className="text-xs text-text-muted">
                        End-to-end development
                      </p>
                    </div>
                    <span className="px-2 py-0.5 text-xs font-medium text-accent-teal-light bg-accent-teal/10 rounded">
                      Ship
                    </span>
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-6 py-4 border-t border-border bg-surface-elevated/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                      <span className="text-xs text-text-muted">
                        Shipping production code
                      </span>
                    </div>
                    <span className="text-xs text-text-muted">Since 2017</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-teal/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl" />

              {/* Chip mascot */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-8 -right-4 z-20"
              >
                <Image
                  src="/mascots/characters/chip/chip-hero-holograms-transparent.png"
                  alt="Chip the Shiba Inu engineer looking at AI interfaces"
                  width={180}
                  height={180}
                  className="w-36 h-auto drop-shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <ClientLogos />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-muted rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
