"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Ship Production AI in Days, Not Quarters",
    description:
      "Your embedded AI engineers arrive ready to contribute. No lengthy onboarding decks or discovery phases. They integrate with your codebase on day one and start shipping production-ready code by day two.",
    stat: "72 hrs",
    statLabel: "First PR merged",
  },
  {
    title: "Zero Knowledge Transfer Friction",
    description:
      "Traditional consulting creates handoff problems. Forward-deployed engineers eliminate them entirely. They work in your repositories, document in your wikis, and pair program with your developers.",
    stat: "100%",
    statLabel: "Knowledge retention",
  },
  {
    title: "Senior Expertise Without the Hiring Bottleneck",
    description:
      "Finding senior AI engineers takes 6-8 months on average. Our forward-deployed model delivers engineers with 8+ years of production AI experience within 5 business days.",
    stat: "5 days",
    statLabel: "Time to deploy",
  },
  {
    title: "Flexibility to Scale Up or Down",
    description:
      "Enterprise priorities shift. Your embedded team scales with you. Add engineers for a product launch, reduce capacity during planning phases, or pivot to different specializations as your AI strategy evolves.",
    stat: "0",
    statLabel: "Long-term commitments",
  },
];

const process = [
  {
    step: "01",
    title: "Technical Discovery",
    duration: "30 min",
    description:
      "A focused call with our principal engineers to understand your AI objectives, tech stack, and team dynamics.",
  },
  {
    step: "02",
    title: "Engineer Matching",
    duration: "1-2 days",
    description:
      "We curate a shortlist of senior AI engineers matched to your specific requirements. You interview and approve every engineer.",
  },
  {
    step: "03",
    title: "Embedded Integration",
    duration: "Day 1",
    description:
      "Your forward-deployed engineers onboard directly into your systems: Slack, GitHub, Jira. They attend your standups immediately.",
  },
  {
    step: "04",
    title: "Continuous Delivery",
    duration: "Ongoing",
    description:
      "Your embedded team ships code daily, participates in code reviews, and drives technical decisions alongside your engineers.",
  },
];

const idealFor = [
  "Engineering leaders building AI products who need senior expertise without the hiring timeline",
  "CTOs with aggressive AI roadmaps who cannot wait 6+ months to scale their teams",
  "VPs of Engineering at growth-stage startups who need to move fast without sacrificing quality",
  "Enterprise teams launching AI initiatives who want to de-risk delivery with proven engineers",
];

export default function ForwardDeployedPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-surface via-base to-base" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-accent-teal/8 rounded-full blur-[100px]" />
          <div className="absolute top-40 left-1/3 w-[400px] h-[400px] bg-accent-blue/8 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6">
              <span className="text-xs font-medium text-accent-teal-light">
                Forward-Deployed Engineering
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight tracking-tight mb-6">
              Embedded AI Engineers That Ship Like They&apos;re On Your Payroll
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
              Forward-deployed engineering puts senior AI engineers directly
              inside your organization. They attend your standups, use your
              tools, and ship production code alongside your team. Your team,
              without the 6-month hiring cycle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-accent-teal to-accent-blue rounded-xl hover:from-accent-teal-light hover:to-accent-blue-light transition-all duration-300 shadow-lg shadow-accent-teal/20"
              >
                Schedule a Strategy Call
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-text-primary border border-border rounded-xl hover:border-accent-teal hover:text-accent-teal-light transition-all duration-300"
              >
                View Case Studies
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
              Why Forward-Deployed Engineers Deliver Results
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
                className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-accent-teal/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="px-3 py-1.5 rounded-lg bg-accent-teal/10 border border-accent-teal/20">
                    <span className="text-xl font-bold text-accent-teal-light">
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
              How Forward-Deployed Engineering Works
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
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-accent-teal to-accent-blue flex items-center justify-center mb-4 shadow-lg shadow-accent-teal/25">
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
                <span className="inline-flex px-2 py-1 text-xs font-medium text-accent-teal-light bg-accent-teal/10 border border-accent-teal/20 rounded-full">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Who Forward-Deployed Teams Are For
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
                <div className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center shrink-0 mt-0.5">
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
      <section className="py-20 sm:py-24 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Get Embedded AI Engineers Deployed{" "}
              <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                This Week
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Stop waiting months for the perfect hire. Most teams have
              engineers integrated within 5 business days.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent-teal to-accent-blue rounded-xl hover:from-accent-teal-light hover:to-accent-blue-light transition-all duration-300 shadow-lg shadow-accent-teal/20"
            >
              Schedule Your Strategy Call
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
