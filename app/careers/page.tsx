"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { KekaJobsEmbed } from "@/components/KekaJobsEmbed";

// Benefits data
const benefits = [
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
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    title: "100% Remote Positions",
    description:
      "Work from anywhere with a globally distributed team spanning 4 continents. Async-first communication means no mandatory meetings disrupting your focus time.",
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
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Top-Tier Compensation",
    description:
      "Above-market salaries benchmarked against top tech companies, plus equity participation. We invest in talent that delivers enterprise-grade results.",
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
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
    title: "$3,000 Learning Budget",
    description:
      "Annual stipend for courses, conferences, and certifications. Stay current with AI advancements and earn credentials that accelerate your career trajectory.",
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
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: "Comprehensive Health Coverage",
    description:
      "Full medical, dental, and vision insurance for you and your dependents. Plus a dedicated wellness stipend for gym memberships, mental health support, or whatever keeps you performing at your best.",
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
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
    title: "Unlimited PTO Policy",
    description:
      "Flexible time off with a minimum of 4 weeks encouraged annually. Sustainable performance requires genuine rest, and we trust senior professionals to manage their own schedules.",
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
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
    title: "Enterprise AI Projects",
    description:
      "Solve complex AI challenges for industry-leading clients. Direct access to cutting-edge models from OpenAI, Anthropic, and Google, plus the latest MLOps tooling and infrastructure.",
  },
];

// Values data
const values = [
  {
    title: "Production-First Engineering",
    description:
      "Every system we build is designed for enterprise-scale production. Our engineers take pride in delivering AI solutions that handle millions of requests and meet the strictest SLAs.",
  },
  {
    title: "Continuous Technical Growth",
    description:
      "AI evolves rapidly, and so do we. Weekly knowledge sharing, dedicated learning time, and a culture of experimentation ensure you stay at the forefront of the industry. Our Best Workplace certification reflects this commitment to your growth.",
  },
  {
    title: "Direct, Transparent Communication",
    description:
      "We value candid feedback, thoughtful debate, and clear expectations. No politics or ambiguity, just honest collaboration focused on delivering exceptional results for our clients.",
  },
  {
    title: "Ownership and Accountability",
    description:
      "Senior engineers own their projects end-to-end. You will have the autonomy to make architectural decisions and the responsibility to deliver outcomes that drive real business impact.",
  },
];

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <PageHero
        headline="AI Engineering Careers"
        headlineAccent="That Shape the Future"
        description="Build production AI systems for Fortune 500 companies and high-growth startups. We offer remote ML engineer and AI developer positions with top-tier compensation, meaningful work, and a certified best workplace culture built for senior technical talent."
        primaryCTA={{ text: "Explore AI Engineering Roles", href: "#openings" }}
        secondaryCTA={{ text: "Learn About Our Culture", href: "/culture" }}
        showClientLogos={false}
      >
        {/* TSOW Certification Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Image
            src="/assets/bptw-badge.webp"
            alt="TSOW Certified Best Workplace"
            width={64}
            height={64}
            className="shrink-0"
          />
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base font-medium text-text-primary">
              Officially a TSOW Certified Best Workplace
            </p>
            <p className="text-text-muted text-xs sm:text-sm">
              Recognized for creating a culture where people thrive.
            </p>
          </div>
        </div>
      </PageHero>

      {/* ============================================
          WHY JOIN US SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-surface">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3e%3ccircle cx='2' cy='2' r='1' fill='%23E5E7EB'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Why Join Procedure
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Benefits Designed for Senior AI Engineers
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Competitive compensation, flexible remote work, and continuous
              learning opportunities. Everything you need to do career-defining
              work on enterprise AI projects.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                <div className="relative p-6 rounded-2xl bg-surface-elevated border border-border group-hover:border-accent/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          OUR VALUES SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base">
        {/* Plus/cross pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3e%3cpath d='M16 8v16M8 16h16' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Our Engineering Culture
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
              The Values That Drive Our Work
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A certified best workplace culture built on trust, technical excellence,
              and a shared commitment to delivering production AI systems that
              transform enterprises.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                <div className="relative p-8 rounded-2xl bg-surface-elevated border border-border group-hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {value.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          JOB OPENINGS SECTION - KEKA EMBED
          ============================================ */}
      <section
        id="openings"
        className="relative py-16 sm:py-24 bg-surface scroll-mt-24"
      >
        {/* Hexagon pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48' height='48'%3e%3cpath d='M24 4l18 10v20l-18 10L6 34V14z' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Current Openings
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Remote AI and Engineering Positions
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              All roles are fully remote with global hiring. We support
              engineers across every timezone and prioritize asynchronous
              collaboration.
            </p>
          </motion.div>

          {/* Keka Careers Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <KekaJobsEmbed />
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5" />

        {/* Accent orbs */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-accent-secondary/10 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              No Perfect Match? Let&apos;s Talk Anyway.
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Exceptional AI talent is rare, and we are always building our
              pipeline. Submit your resume with a note about your ideal role,
              and we will reach out when the right opportunity emerges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us?type=general-application"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25"
              >
                Submit Your Application
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
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent hover:bg-accent/10 transition-all duration-200"
              >
                Learn About Procedure
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
