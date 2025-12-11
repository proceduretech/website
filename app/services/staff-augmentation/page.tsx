"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui";

const benefits = [
  {
    title: "Senior Engineers Only",
    description:
      "Every contract AI developer in our network has a minimum of 8 years of production experience. They have shipped AI systems at scale, navigated enterprise complexity, and solved problems similar to yours.",
    stat: "8+",
    statLabel: "Years minimum experience",
  },
  {
    title: "Start in Days, Not Months",
    description:
      "The average time to hire a senior AI engineer internally is 6-8 months. Our AI engineer staffing model delivers pre-vetted talent within 5 business days. Stop losing competitive advantage to hiring bottlenecks.",
    stat: "5",
    statLabel: "Days to start",
  },
  {
    title: "Zero Recruiting Overhead",
    description:
      "No job postings, no resume screening, no coordinating interview panels. You describe your requirements, review curated candidates, and approve your team. We handle the rest.",
    stat: "0",
    statLabel: "Recruiting burden",
  },
  {
    title: "Flexible Engagement Terms",
    description:
      "Scale your contract AI developers based on project needs. Start with one engineer and expand to a full team. Reduce capacity between major initiatives. No long-term commitments required.",
    stat: "100%",
    statLabel: "Flexibility",
  },
];

const process = [
  {
    step: "01",
    title: "Requirements Consultation",
    duration: "30 min",
    description:
      "A focused conversation to understand your technical requirements, team dynamics, and project goals.",
  },
  {
    step: "02",
    title: "Candidate Curation",
    duration: "1-2 days",
    description:
      "We present a shortlist of senior AI engineers matched to your specific needs with detailed profiles.",
  },
  {
    step: "03",
    title: "Your Interview Process",
    duration: "Your timeline",
    description:
      "You interview candidates directly and make the final decision. Hiring authority stays with your team.",
  },
  {
    step: "04",
    title: "Rapid Onboarding",
    duration: "Day 1",
    description:
      "Your selected engineers onboard immediately with ongoing account management to ensure success.",
  },
];

const roles = [
  "ML Engineers & Data Scientists",
  "LLM Application Developers",
  "MLOps & AI Infrastructure Engineers",
  "AI Security Specialists",
  "Computer Vision Engineers",
  "NLP Engineers",
];

const idealFor = [
  "Engineering managers facing urgent AI deadlines who cannot wait for traditional recruiting",
  "Startups scaling AI capabilities who need senior expertise without full-time headcount commitments",
  "Enterprise teams with specialized requirements who need niche AI skills unavailable internally",
  "Organizations building AI centers of excellence who want to accelerate team formation",
];

export default function StaffAugmentationPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="AI Engineer Staffing"
        headline="Hire Senior AI Engineers"
        headlineAccent="Without the 6-Month Search"
        description="AI engineer staffing solves the hardest problem in enterprise AI: finding senior talent that actually exists. While your competitors spend months searching for unicorn candidates, you can hire senior AI engineers and have them contributing within days."
        primaryCTA={{ text: "Find Your AI Engineer", href: "/contact" }}
        secondaryCTA={{ text: "View Available Talent", href: "/case-studies" }}
      />

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
              Why Procedure for AI Engineer Staffing
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
              How AI Staff Augmentation Works
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

      {/* Roles We Staff */}
      <section className="py-20 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Roles We Staff
            </h2>
            <p className="text-text-secondary">
              Senior AI engineers across every specialization
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-surface-elevated border border-border text-center"
              >
                <span className="text-sm text-text-primary">{role}</span>
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
              Who AI Staff Augmentation Is For
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
              Your Senior AI Engineer Is{" "}
              <span className="text-highlight">Already Waiting</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Skip the 6-month recruiting cycle. Tell us what you need, and we
              will present qualified senior AI engineers within 48 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-cta/25"
            >
              Find Your AI Engineer
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
