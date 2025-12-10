"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CalButton } from "@/components/CalButton";

// Capabilities data
const capabilities = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Full-Stack Development",
    description: "Build complete applications from database to user interface with engineers fluent in modern tech stacks. You get cohesive architecture decisions, clean code practices, and applications that perform at scale.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Cloud Architecture & DevOps",
    description: "Design and deploy infrastructure that handles production workloads from day one. Your applications run on battle-tested cloud architecture with automated CI/CD pipelines and monitoring that catches issues before users do.",
    tags: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "API Development & Integration",
    description: "Create robust APIs that connect your systems, partners, and customers. You get RESTful and GraphQL APIs built for performance and security, along with seamless third-party integrations.",
    tags: ["REST", "GraphQL", "Webhooks", "OAuth", "API Gateway"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "Frontend Engineering",
    description: "Deliver exceptional user experiences with React, Next.js, and TypeScript. Your users get fast, accessible interfaces that work flawlessly across devices—built with component-driven architecture.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Accessibility"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Backend Systems & Microservices",
    description: "Architect scalable backend systems that handle enterprise workloads. You get well-designed microservices, event-driven architectures, and database schemas optimized for your access patterns.",
    tags: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Event-Driven"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Quality Assurance & Testing",
    description: "Ship with confidence through comprehensive testing at every layer. Your codebase gains automated test suites, performance benchmarks, and security scanning—catching regressions before they reach production.",
    tags: ["Jest", "Playwright", "Cypress", "Performance Testing", "Security Scanning"],
  },
];

// Process steps data
const processSteps = [
  {
    step: 1,
    title: "Discovery & Scoping",
    duration: "1-2 days",
    description: "We start with a focused technical discovery session to understand your product vision, technical constraints, and success criteria. You receive a detailed scope document with architecture recommendations.",
  },
  {
    step: 2,
    title: "Team Assembly",
    duration: "2-3 days",
    description: "We curate a dedicated engineering team matched to your technology stack and domain. Every engineer is senior-level with 8+ years of experience. You interview and approve each team member.",
  },
  {
    step: 3,
    title: "Rapid Integration",
    duration: "Day 1",
    description: "Your engineers integrate immediately into your development workflow—joining standups, adopting your tools, and contributing code from the first day.",
  },
  {
    step: 4,
    title: "Iterative Delivery",
    duration: "Ongoing",
    description: "You receive working software in weekly iterations, with demos and stakeholder feedback loops built into the cadence. Our engineers own outcomes, not just tasks.",
  },
  {
    step: 5,
    title: "Knowledge Transfer",
    duration: "Continuous",
    description: "Every engagement includes comprehensive documentation, architecture decision records, and knowledge transfer sessions. Scale capacity up or down without losing institutional knowledge.",
  },
];

// Industries data
const industries = [
  {
    name: "FinTech & Financial Services",
    description: "Build secure, compliant financial applications that handle sensitive transactions at scale. Our engineers understand PCI-DSS requirements and the regulatory landscape.",
    outcomes: ["SOC 2 compliant architecture", "Real-time transaction processing"],
  },
  {
    name: "B2B SaaS Platforms",
    description: "Accelerate your SaaS product roadmap with engineers experienced in multi-tenant architecture, subscription billing systems, and enterprise adoption patterns.",
    outcomes: ["Faster feature delivery", "Reduced churn through UX improvements"],
  },
  {
    name: "Healthcare & Life Sciences",
    description: "Develop HIPAA-compliant healthcare platforms that improve patient outcomes while meeting stringent security requirements.",
    outcomes: ["HIPAA-compliant systems", "Improved patient engagement"],
  },
  {
    name: "AI-Native Products",
    description: "Build products with AI at the core—from LLM-powered features to ML-driven recommendations. Our engineers combine traditional product engineering with deep AI expertise.",
    outcomes: ["Intelligent user experiences", "Seamless AI integration"],
  },
];

// FAQ data
const faqs = [
  {
    question: "What technologies do your product engineering teams specialize in?",
    answer: "Our engineers are experts in modern technology stacks including React, Next.js, TypeScript, Node.js, Python, Go, and cloud platforms (AWS, GCP, Azure). We match team composition to your existing tech stack and product requirements, ensuring seamless integration with your architecture decisions.",
  },
  {
    question: "How do you deliver software faster without sacrificing quality?",
    answer: "We leverage AI-augmented development workflows that accelerate coding, testing, and documentation by 40-60%. Combined with senior engineers who make correct architectural decisions upfront, you get velocity that compounds—not technical debt that slows you down later.",
  },
  {
    question: "Can you work with our existing development team?",
    answer: "Absolutely. Most engagements involve our engineers embedding directly with your in-house team. They join your standups, use your tools, and follow your coding standards. The result is seamless collaboration, not a handoff model that creates knowledge silos.",
  },
  {
    question: "What is your minimum engagement size?",
    answer: "We typically engage with teams seeking 2+ dedicated senior engineers for 3+ month engagements. This ensures enough context and continuity to deliver meaningful business outcomes. For shorter or smaller projects, we recommend our Managed Delivery model.",
  },
  {
    question: "How do you handle intellectual property and security?",
    answer: "All code and intellectual property belong to you from day one. Our engineers sign NDAs and follow your security protocols, including SOC 2 compliance requirements. We're experienced working with enterprise security teams and can accommodate custom requirements.",
  },
  {
    question: "What happens if we need to scale up or down?",
    answer: "Our engagement model is designed for flexibility. Scale your team up within days when you're accelerating, or scale down without penalty when priorities shift. No long-term lock-ins, no renegotiation games—just engineering capacity that matches your actual needs.",
  },
];

// Testimonial data
const testimonial = {
  quote: "Procedure's engineers integrated with our team on day one and helped us ship a complete platform rebuild in 4 months. Their AI-augmented workflows genuinely accelerated our delivery without compromising code quality.",
  author: "Jennifer Park",
  role: "CTO",
  company: "Series B SaaS Company",
};

export default function ProductEngineeringPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface via-base to-base" />
          <div className="absolute top-20 right-1/4 w-[600px] h-[400px] bg-accent-blue/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-1/4 w-[500px] h-[300px] bg-accent-teal/6 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23E5E7EB'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-accent-teal-light transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-accent-teal-light transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-text-secondary">Product Engineering</li>
            </ol>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Service Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-6"
              >
                <svg className="w-4 h-4 text-accent-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <span className="text-sm font-semibold text-accent-blue-light uppercase tracking-wider">
                  Product Engineering Services
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
              >
                Ship Production Software
                <br />
                <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                  In Days, Not Weeks
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl"
              >
                Enterprise product engineering services powered by AI-augmented workflows. Your team gets senior full-stack engineers who deliver clean, scalable code at startup speed—with enterprise-grade reliability.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <CalButton className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent-teal to-accent-blue rounded-xl hover:from-accent-teal-light hover:to-accent-blue-light transition-all duration-200 shadow-lg shadow-accent-teal/20 cursor-pointer">
                  Schedule a Strategy Call
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </CalButton>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent-teal/50 hover:bg-accent-teal/5 transition-all duration-200"
                >
                  View Our Work
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-6 pt-8 border-t border-border"
              >
                {[
                  { icon: "40-60%", label: "Faster Delivery" },
                  { icon: "8+", label: "Years Avg Experience" },
                  { icon: "98%", label: "Client Retention" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="text-lg font-bold bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                      {item.icon}
                    </span>
                    <span className="text-sm text-text-secondary">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-teal/10 rounded-full blur-2xl" />

                <div className="bg-surface border border-border rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-blue/10 to-transparent rounded-bl-full" />

                  <h3 className="text-lg font-semibold text-text-primary mb-6">Tech Stack Expertise</h3>

                  <div className="space-y-4">
                    {[
                      { label: "Frontend", sublabel: "React, Next.js, TypeScript", color: "teal" },
                      { label: "Backend", sublabel: "Node.js, Python, Go", color: "blue" },
                      { label: "Cloud", sublabel: "AWS, GCP, Kubernetes", color: "teal" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 p-4 bg-surface-elevated rounded-xl border border-border"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-accent-${item.color}/10 flex items-center justify-center flex-shrink-0`}>
                          <div className={`w-3 h-3 rounded-full bg-accent-${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-text-primary">{item.label}</p>
                          <p className="text-xs text-text-muted">{item.sublabel}</p>
                        </div>
                        <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                      <span className="text-xs text-text-muted">AI-augmented workflows</span>
                    </div>
                    <span className="text-xs text-text-muted">Since 2017</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICE OVERVIEW SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-surface">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3e%3ccircle cx='2' cy='2' r='1' fill='%23E5E7EB'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              The Procedure Difference
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight max-w-4xl">
              End-to-end product engineering for companies building{" "}
              <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                ambitious software products
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="text-lg text-text-secondary leading-relaxed">
                Procedure delivers end-to-end product engineering services for companies building ambitious software products. Our senior engineers embed directly with your team, leveraging AI-augmented development workflows to accelerate delivery by 40-60% without compromising code quality or security.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                From greenfield applications to legacy modernization, you get production-ready software that scales with your business. Every line of code is written to be maintainable, testable, and ready for the long term.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent-teal-light font-medium hover:text-accent-teal transition-colors"
              >
                Start building faster
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Right Column - Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-4"
            >
              {[
                { value: "40-60%", label: "Faster time-to-market" },
                { value: "70%", label: "Reduction in QA cycles" },
                { value: "Zero", label: "Junior developers on your project" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="relative p-6 rounded-2xl bg-surface-elevated border border-border overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-teal to-accent-blue rounded-full" />
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-text-secondary">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CAPABILITIES SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-base">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3e%3cpath d='M16 8v16M8 16h16' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              What We Build
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Full-Stack Engineering Capabilities
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From frontend interfaces to backend systems and cloud infrastructure, we cover the complete software development lifecycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-surface-elevated border border-border hover:border-accent-teal/40 hover:shadow-lg hover:shadow-accent-teal/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-teal/20 to-accent-blue/10 border border-accent-teal/20 flex items-center justify-center text-accent-teal-light mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {capability.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {capability.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                  {capability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-text-muted bg-surface border border-border rounded-full hover:border-accent-teal/30 hover:text-accent-teal-light transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROCESS SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3e%3cpath d='M18 4L32 18L18 32L4 18Z' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
                Our Process
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
                From Discovery to Delivery in Weeks
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-text-secondary max-w-md"
            >
              A proven methodology that gets software into production faster without compromising on quality or maintainability.
            </motion.p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-teal via-accent-blue to-accent-teal/30" />

            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="w-20 h-20 rounded-full bg-surface-elevated border-2 border-accent-blue flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg shadow-accent-blue/20">
                    <span className="text-2xl font-bold text-accent-blue-light">
                      {step.step.toString().padStart(2, "0")}
                    </span>
                  </div>

                  <div className="p-6 rounded-xl bg-surface-elevated border border-border">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">
                      {step.description}
                    </p>
                    <span className="inline-flex px-3 py-1 text-xs font-medium text-accent-blue-light bg-accent-blue/10 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          INDUSTRIES SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-base">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'%3e%3cpath d='M0 40L40 0' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              Industry Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Software Solutions Across Industries
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Deep expertise in the verticals that matter most to enterprise clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl bg-surface-elevated border border-border hover:border-accent-teal/40 transition-all duration-300"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2 text-sm text-accent-teal-light">
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIAL SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-surface">
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 sm:p-16 rounded-3xl bg-surface-elevated border border-border overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl" />

            <svg
              className="w-16 h-16 text-accent-blue/20 mb-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <blockquote className="relative text-2xl sm:text-3xl md:text-4xl font-medium text-text-primary leading-relaxed tracking-tight mb-10">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-teal to-accent-blue flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-base">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3e%3ccircle cx='10' cy='10' r='1.5' fill='%23E5E7EB'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Common Questions About Product Engineering
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-elevated rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-surface border border-border text-text-secondary">
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openFAQ === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {openFAQ === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-teal/10" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3e%3cpath d='M18 4L32 18L18 32L4 18Z' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-accent-teal/10 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to
              <br />
              <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                Ship Faster?
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Book a 30-minute strategy call with our technical leadership. No sales pitch—just an honest conversation about your product challenges and how we might help solve them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CalButton className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent-teal to-accent-blue rounded-xl hover:from-accent-teal-light hover:to-accent-blue-light transition-all duration-200 shadow-lg shadow-accent-teal/20 cursor-pointer">
                Schedule a Strategy Call
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </CalButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent-teal/50 hover:bg-accent-teal/5 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { label: "SOC 2 Type II" },
                { label: "GDPR Compliant" },
                { label: "NDA Available" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-text-muted">
                  <svg className="w-4 h-4 text-accent-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
