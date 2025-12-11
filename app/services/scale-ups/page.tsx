"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Add Senior Capacity in Days",
    description:
      "Your hiring pipeline takes 4-6 months per senior engineer. Our scale-up model delivers production-ready engineers within 5 business days. Stop losing customers to feature delays caused by hiring bottlenecks.",
    stat: "5",
    statLabel: "Days to capacity",
  },
  {
    title: "Engineers Who Scale Systems",
    description:
      "Growth breaks things. Our engineers have scaled systems from thousands to millions of users. They know where bottlenecks hide and how to architect for 10x growth before you need it.",
    stat: "10x",
    statLabel: "Scale-ready architecture",
  },
  {
    title: "Flexible Team Composition",
    description:
      "Product launches need different skills than maintenance phases. Scale your team composition based on what you are building. Add AI specialists for new features, infrastructure engineers for scale, frontend experts for user experience.",
    stat: "100%",
    statLabel: "Team flexibility",
  },
  {
    title: "Knowledge Transfer Built In",
    description:
      "External teams that create dependencies hurt you long-term. Our engineers document, pair program, and mentor your internal team. When the engagement ends, your team is stronger, not dependent.",
    stat: "0",
    statLabel: "Dependency risk",
  },
];

const process = [
  {
    step: "01",
    title: "Growth Assessment",
    duration: "1-2 hours",
    description:
      "We assess your roadmap, team composition, and scaling challenges. You get a clear recommendation on what type and how much capacity will accelerate your delivery.",
  },
  {
    step: "02",
    title: "Team Design",
    duration: "2-3 days",
    description:
      "We curate a team matched to your tech stack, culture, and immediate priorities. You interview and approve every engineer before they start.",
  },
  {
    step: "03",
    title: "Rapid Integration",
    duration: "Week 1",
    description:
      "Your new team members integrate with your workflows, tools, and processes. They attend your standups and start contributing to your codebase immediately.",
  },
  {
    step: "04",
    title: "Continuous Delivery",
    duration: "Ongoing",
    description:
      "Ship features consistently while we handle capacity management. Scale up for launches, scale down during planning phases, adjust specializations as priorities shift.",
  },
];

const services = [
  "Team Augmentation",
  "AI Feature Acceleration",
  "Infrastructure Scaling",
  "Technical Debt Reduction",
  "Architecture Modernization",
  "Platform Engineering",
];

const idealFor = [
  "Series B and C companies with aggressive roadmaps who cannot wait 6 months for each senior hire",
  "Engineering leaders managing growth while maintaining velocity and quality standards",
  "Companies launching new AI product lines who need specialized expertise not available internally",
  "Teams preparing for major product launches who need temporary capacity surge",
  "CTOs building engineering organizations who want to de-risk delivery while hiring continues",
  "Product companies where customer retention depends on shipping features faster than competitors",
];

export default function ScaleUpsPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6">
              <span className="text-xs font-medium text-accent-teal-light">
                Engineering for Growth Stage
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight tracking-tight mb-6">
              Scale Your Engineering Velocity Without the Hiring Bottleneck
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
              Growth-stage companies face a paradox: customer demand outpaces
              engineering capacity, but hiring takes months. Scale-up
              engagements add senior AI and engineering talent within days, not
              quarters. Ship the features your customers are waiting for.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-cta/25"
              >
                Scale Your Team Now
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-text-primary border border-border rounded-xl hover:border-accent-teal hover:text-accent-teal-light transition-all duration-300"
              >
                View Scale-Up Case Studies
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
              Why Scale-Ups Choose Procedure
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
              How Scale-Up Engagements Work
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

      {/* Services */}
      <section className="py-20 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Scale-Up Services
            </h2>
            <p className="text-text-secondary">
              Engineering capacity that grows with you
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-surface-elevated border border-border text-center"
              >
                <span className="text-sm text-text-primary">{service}</span>
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
              Who Scale-Up Engagements Are For
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
      <section className="py-20 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Scale Your Team{" "}
              <span className="text-highlight">
                This Week
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Your customers are waiting. Your competitors are shipping. Add
              senior engineering capacity in days, not months.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-cta/25"
            >
              Scale Your Team Now
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
