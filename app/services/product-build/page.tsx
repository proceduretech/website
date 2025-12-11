"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "One Team, Complete Ownership",
    description:
      "Traditional agencies fragment your product across multiple teams and vendors. Full product build assigns a dedicated squad of senior AI engineers who own your entire stack. Frontend, backend, AI/ML, infrastructure. No coordination overhead, no finger-pointing.",
    stat: "1",
    statLabel: "Accountable team",
  },
  {
    title: "Production-Ready From Day One",
    description:
      "Every line of code ships with proper architecture, testing, and documentation. We build products that scale to millions of users, not prototypes that collapse under load. Your codebase is an asset, not technical debt.",
    stat: "100%",
    statLabel: "Production-grade code",
  },
  {
    title: "Launch in Weeks, Not Quarters",
    description:
      "Enterprise product timelines stretch 6-12 months. Our full product build methodology compresses that to 6-12 weeks without sacrificing quality. Ship to market while your competitors are still in requirements gathering.",
    stat: "6-12",
    statLabel: "Weeks to launch",
  },
  {
    title: "Your IP, Your Control",
    description:
      "You own everything we build. Full codebase access from day one. Complete documentation. Optional training for your internal team to take over. No vendor lock-in, no ongoing dependencies.",
    stat: "100%",
    statLabel: "IP ownership",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Architecture",
    duration: "Week 1",
    description:
      "Deep-dive into your requirements, user needs, and business goals. We deliver a technical architecture and detailed roadmap you approve before development begins.",
  },
  {
    step: "02",
    title: "Foundation Sprint",
    duration: "Week 2-3",
    description:
      "Core infrastructure, authentication, and foundational components. You have a working application skeleton with CI/CD pipelines operational.",
  },
  {
    step: "03",
    title: "Feature Development",
    duration: "Week 4-10",
    description:
      "Iterative development with weekly demos. Your product takes shape with full AI/ML integration, user-facing features, and polished interfaces.",
  },
  {
    step: "04",
    title: "Launch & Handoff",
    duration: "Week 11-12",
    description:
      "Production deployment, performance optimization, documentation, and optional team training. You launch with confidence.",
  },
];

const productTypes = [
  "AI-Powered SaaS Platforms",
  "Internal Tools & Dashboards",
  "Customer-Facing AI Applications",
  "Data Products & Analytics Platforms",
  "Developer Tools & APIs",
  "Mobile AI Applications",
];

const idealFor = [
  "Founders with validated ideas who need to move from concept to market before the window closes",
  "Product leaders launching new AI-powered business lines who need speed without sacrificing enterprise quality",
  "Companies replacing legacy systems who want a clean-slate rebuild with modern AI capabilities",
  "Technical teams who want to accelerate delivery by augmenting with a fully-integrated product squad",
  "Investors and boards who need demonstrable product progress within a defined timeline and budget",
];

export default function ProductBuildPage() {
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
                End-to-End Product Development
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight tracking-tight mb-6">
              Ship Your Complete AI Product in Weeks, Not Quarters
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
              Full product build delivers your entire application from first
              commit to production launch. One team, one timeline, zero
              handoffs. We own the architecture, engineering, and deployment so
              you can focus on your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-cta/25"
              >
                Start Your Product Build
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-text-primary border border-border rounded-xl hover:border-accent-blue hover:text-accent-blue-light transition-all duration-300"
              >
                View Our Work
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
              Why Full Product Build Delivers Results
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
              How Full Product Build Works
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

      {/* What We Build */}
      <section className="py-20 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              What We Build
            </h2>
            <p className="text-text-secondary">
              Complete AI-powered products across every category
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {productTypes.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-surface-elevated border border-border text-center"
              >
                <span className="text-sm text-text-primary">{product}</span>
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
              Who Full Product Build Is For
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
              Launch Your AI Product{" "}
              <span className="text-highlight">
                This Quarter
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Stop waiting on hiring cycles and internal bandwidth. Most
              products go from kickoff to production in under 12 weeks.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-cta/25"
            >
              Start Your Product Build
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
