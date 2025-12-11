"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui";

const benefits = [
  {
    title: "Weeks to Market, Not Months",
    description:
      "Your competitors are fundraising on vaporware. You will have a working product. Our startup engagements deliver functional AI products in 4-8 weeks. Ship to early customers while your market is still emerging.",
    stat: "4-8",
    statLabel: "Weeks to MVP",
  },
  {
    title: "Investor-Ready Architecture",
    description:
      "Technical due diligence kills deals. We build products that survive scrutiny. Clean architecture, proper testing, scalable infrastructure. When investors ask about your tech, you will have the right answers.",
    stat: "DD",
    statLabel: "Ready from day one",
  },
  {
    title: "Founders Who Get It",
    description:
      "Our engineers have worked at startups, built startups, and understand the trade-offs you face daily. We optimize for learning speed, not engineering perfection. Build what matters, defer what does not.",
    stat: "50+",
    statLabel: "Startups shipped",
  },
  {
    title: "Pricing That Works for Startups",
    description:
      "Enterprise pricing does not work at seed stage. Our startup engagements are scoped to your budget and timeline. Transparent pricing, no surprise invoices, options to scale as you grow.",
    stat: "Flex",
    statLabel: "Engagement models",
  },
];

const process = [
  {
    step: "01",
    title: "Founder Strategy Call",
    duration: "30 min",
    description:
      "A focused conversation about your product vision, go-to-market timeline, and technical requirements. We scope an engagement that fits your stage.",
  },
  {
    step: "02",
    title: "Rapid Scoping",
    duration: "2-3 days",
    description:
      "We define your MVP scope, identify must-have vs. nice-to-have features, and create a delivery timeline you can share with investors.",
  },
  {
    step: "03",
    title: "Sprint Development",
    duration: "4-8 weeks",
    description:
      "Weekly demos, daily communication, and rapid iteration. You see progress every week and can course-correct based on customer feedback.",
  },
  {
    step: "04",
    title: "Launch & Iterate",
    duration: "Ongoing",
    description:
      "Ship to early customers, gather feedback, and iterate. We stay engaged through your first customer cohort or transition to your internal team.",
  },
];

const services = [
  "MVP Development",
  "AI Feature Prototyping",
  "Technical Due Diligence Prep",
  "Demo Day Engineering",
  "Post-Seed Scaling",
  "Fractional CTO Support",
];

const idealFor = [
  "First-time founders building AI-powered products who need senior technical guidance and execution speed",
  "Technical founders who want to stay focused on product vision while we handle implementation",
  "Seed and Series A companies who need to ship product before their next fundraise",
  "Solo founders or small teams who need to punch above their weight with enterprise-quality engineering",
  "Accelerator and incubator companies with compressed timelines and demo day deadlines",
];

export default function StartupsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="Built for Startup Speed"
        headline="Ship Your AI Product"
        headlineAccent="Before Your Runway Burns"
        description="Startup AI development that matches your urgency. Senior engineers who have shipped at early-stage companies understand that every week matters. We build MVPs that win customers and raise capital, not science projects that impress no one."
        primaryCTA={{ text: "Talk to Us This Week", href: "/contact" }}
        secondaryCTA={{ text: "See Startup Case Studies", href: "/case-studies" }}
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
              Why Startups Choose Procedure
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
              How Startup Engagements Work
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
              Startup Services
            </h2>
            <p className="text-text-secondary">
              Everything early-stage companies need to ship
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
              Who Startup Engagements Are For
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
              Your MVP Ships{" "}
              <span className="text-highlight">
                Next Month
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Stop losing time to hiring and ramp-up. Most startup engagements
              begin within one week and ship MVPs within two months.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-cta/25"
            >
              Talk to Us This Week
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
