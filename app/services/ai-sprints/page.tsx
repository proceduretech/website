"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Validate Before You Invest",
    description:
      "Traditional AI projects burn 6-12 months before revealing whether the approach works. AI rapid prototyping proves viability in weeks. Make investment decisions based on working software, not projections.",
    stat: "2-4",
    statLabel: "Weeks to prototype",
  },
  {
    title: "Production Code, Not Throwaway Demos",
    description:
      "Most prototypes get scrapped when reality hits. Our sprint methodology produces code that evolves into your production system. Clean architecture, proper testing, and documentation from day one.",
    stat: "100%",
    statLabel: "Reusable code",
  },
  {
    title: "De-Risk Major AI Initiatives",
    description:
      "Large-scale AI transformations carry substantial risk. AI sprints let you test assumptions, validate technical feasibility, and demonstrate value to stakeholders before committing significant resources.",
    stat: "10x",
    statLabel: "Risk reduction",
  },
  {
    title: "Build Internal Momentum",
    description:
      "Seeing is believing. A working AI prototype generates excitement across your organization. Use sprint deliverables to secure executive buy-in and build momentum for larger initiatives.",
    stat: "Fast",
    statLabel: "Stakeholder buy-in",
  },
];

const process = [
  {
    step: "01",
    title: "Scope Definition",
    duration: "Day 1-2",
    description:
      "Define a focused problem statement and success criteria. The best sprints solve one meaningful problem exceptionally well.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    duration: "Day 3-5",
    description:
      "Design a system architecture that balances speed with production-readiness. You review and approve the approach before coding begins.",
  },
  {
    step: "03",
    title: "Rapid Development",
    duration: "Week 1-3",
    description:
      "Daily progress updates and weekly demos keep you informed. Your team can observe, provide feedback, and course-correct in real-time.",
  },
  {
    step: "04",
    title: "Delivery & Roadmap",
    duration: "Week 4",
    description:
      "Receive a fully functional prototype, documentation, and detailed roadmap for production deployment.",
  },
];

const sprintExamples = [
  "LLM-powered customer service automation",
  "RAG systems for internal knowledge bases",
  "AI-driven document processing pipelines",
  "Intelligent search and recommendation engines",
  "Conversational AI assistants",
  "Automated content generation systems",
];

const idealFor = [
  "Product leaders exploring AI features who need to validate concepts before committing engineering resources",
  "Innovation teams with executive mandates who need to demonstrate AI value quickly",
  "CTOs evaluating AI opportunities who want data-driven decisions, not vendor promises",
  "Enterprise teams with stalled AI initiatives who need fresh approaches and rapid results",
];

export default function AISprintsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-surface via-base to-base" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-accent-blue/8 rounded-full blur-[100px]" />
          <div className="absolute top-40 left-1/3 w-[400px] h-[400px] bg-accent-teal/8 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-6">
              <span className="text-xs font-medium text-accent-blue-light">
                Rapid AI Development
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight tracking-tight mb-6">
              From AI Concept to Working Prototype in Weeks
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
              AI sprint development compresses months of exploration into
              focused 2-4 week engagements. Instead of lengthy discovery phases
              and PowerPoint strategies, you get a working prototype that proves
              whether your AI concept delivers real business value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-accent-teal to-accent-blue rounded-xl hover:from-accent-teal-light hover:to-accent-blue-light transition-all duration-300 shadow-lg shadow-accent-teal/20"
              >
                Start Your AI Sprint
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-text-primary border border-border rounded-xl hover:border-accent-teal hover:text-accent-teal-light transition-all duration-300"
              >
                See Sprint Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Why AI Sprints Accelerate Innovation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-accent-blue/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="px-3 py-1.5 rounded-lg bg-accent-blue/10 border border-accent-blue/20">
                    <span className="text-xl font-bold text-accent-blue-light">
                      {benefit.stat}
                    </span>
                  </div>
                  <span className="text-xs text-text-muted uppercase tracking-wider mt-2">
                    {benefit.statLabel}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24 bg-base">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              How AI Sprint Development Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-accent-blue to-accent-teal flex items-center justify-center mb-4 shadow-lg shadow-accent-blue/25">
                  <span className="text-lg font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary mb-2">
                  {step.description}
                </p>
                <span className="inline-flex px-2 py-1 text-xs font-medium text-accent-blue-light bg-accent-blue/10 border border-accent-blue/20 rounded-full">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sprint Examples */}
      <section className="py-20 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Sprint Examples
            </h2>
            <p className="text-text-secondary">
              Common AI sprint projects we deliver
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sprintExamples.map((example, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-surface-elevated border border-border text-center"
              >
                <span className="text-sm text-text-primary">{example}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 sm:py-24 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Who AI Sprints Are For
            </h2>
          </motion.div>

          <div className="space-y-4">
            {idealFor.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-surface-elevated border border-border"
              >
                <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center shrink-0 mt-0.5">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-text-primary">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Launch Your AI Sprint{" "}
              <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                This Month
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Stop debating AI feasibility in conference rooms. Start a sprint
              and have working software in your hands within 4 weeks.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent-teal to-accent-blue rounded-xl hover:from-accent-teal-light hover:to-accent-blue-light transition-all duration-300 shadow-lg shadow-accent-teal/20"
            >
              Start Your AI Sprint
              <svg
                className="w-5 h-5 ml-2"
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
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
