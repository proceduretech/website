"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui";

const benefits = [
  {
    title: "Compliance-First Architecture",
    description:
      "Security and compliance are not afterthoughts. Every system we build starts with your regulatory requirements. SOC 2, HIPAA, GDPR, PCI-DSS. We architect for compliance from line one, not line ten thousand.",
    stat: "Day 1",
    statLabel: "Compliance built-in",
  },
  {
    title: "Enterprise Security Standards",
    description:
      "Your security team will actually approve our work. Proper authentication, encryption at rest and in transit, audit logging, penetration testing, and vulnerability management. We speak your CISO's language.",
    stat: "100%",
    statLabel: "Security review pass rate",
  },
  {
    title: "Integration With Your Stack",
    description:
      "Enterprise systems do not exist in isolation. Our engineers integrate with your existing identity providers, data warehouses, and business systems. Seamless connection to your technology ecosystem.",
    stat: "Any",
    statLabel: "System integration",
  },
  {
    title: "Procurement-Ready Engagement",
    description:
      "We understand enterprise procurement. MSAs, SOWs, insurance requirements, vendor security questionnaires. Our contracts and processes are designed for enterprise legal and procurement workflows.",
    stat: "Fast",
    statLabel: "Procurement cycles",
  },
];

const process = [
  {
    step: "01",
    title: "Executive Alignment",
    duration: "Week 1",
    description:
      "Technical and business stakeholder sessions to define success criteria, compliance requirements, and integration points. Everyone aligned before engineering begins.",
  },
  {
    step: "02",
    title: "Security & Architecture",
    duration: "Week 2-3",
    description:
      "Detailed architecture design reviewed by your security and infrastructure teams. Documented threat models, data flows, and compliance controls.",
  },
  {
    step: "03",
    title: "Governed Development",
    duration: "Week 4-16",
    description:
      "Iterative development with enterprise change management. Regular security checkpoints, compliance documentation, and stakeholder reviews built into the delivery cadence.",
  },
  {
    step: "04",
    title: "Enterprise Launch",
    duration: "Week 17-20",
    description:
      "Production deployment through your change management process. Full documentation, training, and support handoff. Ongoing maintenance agreements available.",
  },
];

const compliance = [
  "SOC 2 Type II Certified",
  "HIPAA Compliant",
  "GDPR Ready",
  "ISO 27001 Aligned",
  "Enterprise SSO & RBAC",
  "Air-Gapped Deployment Options",
];

const idealFor = [
  "CIOs and CTOs launching strategic AI initiatives that require board-level confidence in security and governance",
  "Enterprise architects integrating AI capabilities into complex existing technology ecosystems",
  "Regulated industry leaders in finance, healthcare, and government who require compliance-first development",
  "IT leaders managing vendor relationships who need partners that understand enterprise procurement and security",
  "Innovation teams with executive mandates who must demonstrate AI value within enterprise constraints",
  "Security and compliance officers who need AI implementations that meet organizational standards",
];

export default function EnterprisePage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="Enterprise-Grade AI Solutions"
        badgeVariant="blue"
        headline="Enterprise AI That Passes Security Review"
        headlineAccent="on the First Try"
        description="Enterprise AI development built for your compliance requirements, security standards, and procurement processes. Senior engineers who have shipped in regulated industries and understand that enterprise-grade means audit-ready, not just functional."
        primaryCTA={{
          text: "Schedule Enterprise Consultation",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Enterprise Case Studies",
          href: "/case-studies",
        }}
      />

      {/* Benefits */}
      <section className="py-24 sm:py-36 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Why Enterprises Choose Procedure
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
                className="p-6 rounded-xl bg-surface-elevated border border-border hover:border-slate-600 transition-colors"
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
      <section className="py-24 sm:py-36 bg-base">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              How Enterprise Engagements Work
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
                <div className="w-14 h-14 mx-auto rounded-full bg-accent-teal/10 border border-border flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-accent-teal-light">
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

      {/* Compliance & Security */}
      <section className="py-24 sm:py-36 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Compliance & Security
            </h2>
            <p className="text-text-secondary">
              Built for regulated industries and enterprise requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {compliance.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-surface-elevated border border-border text-center flex items-center justify-center gap-3"
              >
                <svg
                  className="w-5 h-5 text-accent-blue-light shrink-0"
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
                <span className="text-sm text-text-primary">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-24 sm:py-36 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Who Enterprise Engagements Are For
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
      <section className="py-24 sm:py-36 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Enterprise AI That Ships{" "}
              <span className="text-highlight">With Confidence</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Your stakeholders need AI that meets enterprise standards. Our
              engagements include the security, compliance, and governance your
              organization requires.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-cta/25"
            >
              Schedule Enterprise Consultation
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
