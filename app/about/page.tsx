"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Leadership team data
const leadership = [
  {
    name: "Ulhas Mandrawadkar",
    role: "CTO & Co-Founder",
    bio: "Engineering leader with deep expertise in product development and system architecture. Mentoring engineers and driving technical excellence across enterprise clients.",
    linkedin: "https://linkedin.com/in/ulhasm",
    image: "/team/ulhas.jpg",
  },
  {
    name: "Braj Baheti",
    role: "CEO & Co-Founder",
    bio: "Founded Procedure with a vision to deliver exceptional product engineering. Leading strategy, partnerships, and domain expertise across diverse industries.",
    linkedin: "https://linkedin.com/in/brajkishorb",
    image: "/team/braj.jpg",
  },
];

// Core values data
const values = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    title: "Intentional Craft",
    description:
      "Every system we build reflects care, context, and the people behind it. We don't rush the details or cut corners on architecture. Production-grade from day one means code that scales, maintains, and stands up to real-world pressure.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Embedded Partnership",
    description:
      "We don't believe in the agency model where contractors disappear after handoff. Our engineers become true extensions of your team—attending your standups, understanding your codebase, and caring about your outcomes.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Action Over Perfection",
    description:
      "We'd rather ship and improve than wait for perfect. Progress comes from trying, testing, and refining. We move fast by making smart architectural decisions upfront and staying focused on problems that actually matter.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Honest Conversations",
    description:
      "No black boxes. No vague timelines. No surprise invoices. We keep it real because feedback isn't about being right—it's about making things better together. Respect and candor travel in both directions.",
  },
];

// Milestones data
const milestones = [
  {
    year: "2017",
    title: "Founded",
    description:
      "Started as a small crew that just loved making things work better. Focused on building software that ships.",
  },
  {
    year: "2020",
    title: "Scaled Delivery",
    description:
      "Expanded across fintech, healthcare, and enterprise SaaS. Established our embedded partnership model.",
  },
  {
    year: "2023",
    title: "AI Integration",
    description:
      "Applied our production engineering expertise to AI-powered solutions. Built our first LLM applications.",
  },
  {
    year: "2024",
    title: "AI Engineering Focus",
    description:
      "Deepened investment in AI engineering, AI security, and MLOps. Now shipping AI systems that reach production.",
  },
];

// Differentiators data
const differentiators = [
  {
    stat: "2-5",
    unit: "days",
    label: "Average time to deploy engineers",
    description: "Not weeks. We move fast because your timeline matters.",
  },
  {
    stat: "98",
    unit: "%",
    label: "Client retention rate",
    description: "Clients stay because we consistently deliver results.",
  },
  {
    stat: "3+",
    unit: "years",
    label: "Average partnership length",
    description: "We build long-term relationships, not short-term projects.",
  },
  {
    stat: "10",
    unit: "x",
    label: "Faster than traditional hiring",
    description: "Skip the 6-month hiring cycle for senior AI talent.",
  },
];

// Certifications data
const certifications = [
  { name: "SOC 2 Type II", description: "Certified" },
  { name: "GDPR", description: "Compliant" },
  { name: "ISO 27001", description: "Certified" },
  { name: "HIPAA", description: "Compliant" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative pt-32 pb-24 sm:pb-36 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              <span className="text-xs font-medium text-accent-teal-light">
                Product Engineering Since 2017
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
            >
              Engineers Who Ship.
              <br />
              <span className="text-highlight">Problems That Matter.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              We are forward-deployed engineers, designers, and thinkers who stay
              close to the problem—not tucked behind layers of process. From idea
              to deploy, we move with intent, learn in the open, and keep the
              &quot;why&quot; visible.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12"
            >
              {[
                { value: "Since 2017", label: "Building Software" },
                { value: "75+", label: "Clients Trusted Us" },
                { value: "150+", label: "Projects Shipped" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-highlight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          MISSION SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-36 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              Our Mission
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary max-w-4xl mx-auto leading-tight mb-6">
              Built for real problems.{" "}
              <span className="text-highlight">Shipped by real teams.</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Procedure started as a small crew that just loved making things work
              better, and that hasn&apos;t changed. Today, we&apos;re applying our
              engineering rigor to AI-powered systems, enterprise applications, and
              complex technical challenges. We still experiment, break, fix, and
              ship together—because that&apos;s how real products and real teams grow.
            </p>
          </motion.div>

          {/* Values Grid - Bento Style */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="p-8 rounded-2xl bg-surface-elevated border border-border hover:border-slate-600 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center text-accent-teal-light mb-5">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          LEADERSHIP TEAM SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-36 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              Leadership
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Choosing a mentor is more important than choosing a company
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our founders have more than a decade of experience in their
              respective fields. They lead by mentoring, not managing—helping
              engineers and clients alike grow through real collaboration.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {leadership.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-slate-600 transition-colors">
                  {/* Photo placeholder */}
                  <div className="relative w-24 h-24 mx-auto mb-5">
                    <div className="w-full h-full rounded-full bg-accent-teal/20 border border-accent-teal/30 flex items-center justify-center">
                      <span className="text-3xl font-bold text-accent-teal-light">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent-teal-light font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    {/* LinkedIn link */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-teal-light transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      Connect
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          COMPANY TIMELINE SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-36 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              Our Journey
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
              From product engineering to AI-powered solutions
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative md:flex md:items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-surface-elevated border border-border">
                      <span className="inline-block px-3 py-1 text-sm font-bold text-accent-teal-light bg-accent-teal/10 rounded-full mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot - hidden on mobile */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-teal border-4 border-surface" />

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          WHY PROCEDURE / DIFFERENTIATORS SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-36 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              Why Procedure
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
              The numbers speak for themselves
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We&apos;ve built our reputation on delivering results, not
              promises.
            </p>
          </motion.div>

          {/* Differentiators Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, idx) => (
              <motion.div
                key={diff.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-slate-600 transition-colors h-full">
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl sm:text-5xl font-bold text-highlight">
                      {diff.stat}
                    </span>
                    <span className="text-xl font-bold text-accent-teal-light">
                      {diff.unit}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-2">
                    {diff.label}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CERTIFICATIONS & PARTNERS SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-36 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              Trust & Compliance
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-8">
              Enterprise-grade security you can trust
            </h2>

            {/* Certification badges */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-elevated border border-border"
                >
                  <svg
                    className="w-5 h-5 text-accent-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-text-primary">
                      {cert.name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-36 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to Ship Software
              <br />
              <span className="text-highlight">That Actually Works?</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Whether you&apos;re launching your first AI initiative, scaling an
              existing product, or trying to rescue a stalled project, we&apos;d
              love to hear about your challenges. Our team will give you an honest
              assessment—even if the answer is that you don&apos;t need us yet.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25"
              >
                Start a Conversation
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
              <Link
                href="/careers"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent-teal hover:bg-accent-teal/10 transition-all duration-200"
              >
                Join Our Team
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <svg
                  className="w-4 h-4 text-accent-teal"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                SOC 2 Type II
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <svg
                  className="w-4 h-4 text-accent-teal"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                GDPR Compliant
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <svg
                  className="w-4 h-4 text-accent-teal"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                NDA Available
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
