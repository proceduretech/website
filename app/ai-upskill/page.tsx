"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const bootcampHighlights = [
  { value: "12", label: "Week Intensive" },
  { value: "5-8", label: "Hours Per Week" },
  { value: "100%", label: "Hands-On Projects" },
];

const curriculumData = {
  fundamentals: [
    "LLM Evaluation",
    "Prompt Engineering",
    "Vector Databases",
    "Reasoning Models",
  ],
  building: [
    "RAG (Retrieval-Augmented Generation)",
    "Agents",
    "Fine-tuning",
    "MCP and Agentic Apps",
  ],
  production: ["MLOps", "Monitoring", "Observability", "Data Engineering"],
  advanced: [
    "Agent Architecture Breakdown",
    "Agent Evaluations",
    "Reading AI Papers",
    "Cost Optimization",
  ],
};

const outcomes = [
  "Identify problems that are genuinely fit for AI solutions",
  "Create code and low-code POCs rapidly",
  "Build production-ready solutions using RAG, Agents, and Fine-tuning",
  "Optimize solutions across four levers: skills, cost, latency, and performance",
  "Deploy and monitor AI systems at scale",
  "Read and apply insights from AI research papers",
  "Contribute to Procedure's AI thought leadership",
];

const requirements = [
  "Want to stay relevant in a rapidly changing industry",
  "Are comfortable with ambiguity and learning new things",
  "Can commit 5-8 hours per week outside regular work",
  "Are willing to demo your work and learn in public",
  "Want to contribute to Procedure's AI positioning",
  "Are curious about how LLMs actually work under the hood",
  "Prefer building over theorizing",
  "Are excited about creating content and sharing knowledge",
];

const faqs = [
  {
    question: "When does the next cohort start?",
    answer:
      "Watch for announcements in Slack. Our target launch is Q2 2025 (July). We'll share exact dates and registration details as they're finalized.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Not necessarily. We cover both code and low-code approaches to AI engineering. However, some coding experience (TypeScript or Python) will help you get more out of the technical sessions.",
  },
  {
    question: "How much time will I need to commit?",
    answer:
      "Plan for 5-8 hours per week outside your regular work schedule. This includes live sessions, pair programming, and working on your assignments.",
  },
  {
    question: "Will sessions be recorded?",
    answer:
      "Yes, all sessions will be recorded. However, live attendance is strongly encouraged—the discussions, questions, and real-time collaboration are where the real learning happens.",
  },
  {
    question: "Who pays for API costs?",
    answer:
      "Procedure covers all API and infrastructure costs. You'll receive access to the keys and tools you need to build and experiment.",
  },
  {
    question: "Is creating content mandatory?",
    answer:
      "Yes. Part of this program's purpose is to establish Procedure as an AI engineering leader. Every participant contributes content—whether that's a LinkedIn post, blog article, newsletter contribution, or video. It's also great for your personal brand.",
  },
];

const applicationSteps = [
  {
    step: "01",
    title: "Express Interest",
    description:
      "Reach out via Slack or fill out the interest form. Let us know your current role and what excites you about AI engineering.",
  },
  {
    step: "02",
    title: "Cohort Matching",
    description:
      "We'll pair you with colleagues from similar backgrounds. Each pair works through concepts together, building POCs and presenting weekly demos.",
  },
  {
    step: "03",
    title: "Start Building",
    description:
      "Dive into the curriculum. Every week brings new concepts, hands-on assignments, and opportunities to create content.",
  },
];

export default function AIUpskillPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-surface via-base to-base" />
          <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-40 left-1/4 w-[500px] h-[500px] bg-accent-secondary/6 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
{/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
            >
              Become an AI Engineer.
              <br />
              <span className="text-highlight">Build What&apos;s Next.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              A 12-week intensive bootcamp designed to transform developers into
              AI engineers. Master RAG, Agents, Fine-tuning, and MLOps through
              hands-on projects that ship to production. No theory-only
              lectures—just practical skills that matter.
            </motion.p>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-amber-500/15 border border-amber-400/30 mb-10"
            >
              <span className="text-warning text-xl">i</span>
              <span className="text-sm text-text-primary">
                This is an{" "}
                <strong className="text-warning">internal program</strong> for
                Procedure team members. All API costs covered by Procedure.
              </span>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto mb-10"
            >
              {bootcampHighlights.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 sm:p-6 rounded-xl text-center bg-surface/80 backdrop-blur-sm border border-border"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary mt-1 sm:mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#application"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-cta-text font-semibold rounded-xl hover:brightness-110 transition-all"
              >
                Apply to Join
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface-elevated border border-border text-text-primary font-semibold rounded-xl hover:border-accent/30 transition-all"
              >
                View Curriculum
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Is AI Upskill Section */}
      <section className="relative py-20 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-sm font-medium text-accent-light uppercase tracking-wider mb-4"
            >
              The Bootcamp
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            >
              What is <span className="text-highlight">AI Upskill</span>?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-text-secondary max-w-3xl mx-auto"
            >
              A practical, problem-first AI engineering bootcamp that bridges
              the gap between where you are and where the industry is heading.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {[
              {
                icon: "📅",
                text: "12-week structured program with weekly demos and pair programming sessions",
              },
              {
                icon: "💻",
                text: "Build code and low-code solutions for real-world LLM applications",
              },
              {
                icon: "👥",
                text: "Paired learning with colleagues from similar backgrounds for collaborative growth",
              },
              {
                icon: "🚀",
                text: "Every concept taught becomes a POC, case study, or published content",
              },
              {
                icon: "🎯",
                text: "Problem-first approach: identify AI-fit problems, then build the solution",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative p-6 rounded-2xl bg-base border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative py-20 sm:py-24 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block text-sm font-medium text-accent-light uppercase tracking-wider mb-4"
              >
                Our Vision
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold text-text-primary mb-6"
              >
                Why <span className="text-highlight">AI Upskill</span> exists
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="space-y-4 text-text-secondary"
              >
                <p>
                  We looked at where software engineering is heading in three,
                  five, and ten years. The answer was unanimous: AI. Not as a
                  buzzword or a feature—but as the foundation of how software
                  gets built, deployed, and evolved.
                </p>
                <p>
                  The future will be AI-driven. Companies that don&apos;t adapt
                  will be left behind. But here&apos;s the opportunity: this is
                  a new domain for everyone. There are no ten-year veterans. No
                  gatekeepers. Just engineers willing to learn, experiment, and
                  ship.
                </p>
                <p>
                  That&apos;s why we&apos;re changing the fabric of Procedure.
                  We want every engineer to{" "}
                  <strong className="text-text-primary">
                    live and breathe AI
                  </strong>
                  —as both producers and consumers of AI tools.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-surface-elevated rounded-2xl border border-border p-8">
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  By the end of the bootcamp, you will be able to:
                </h3>
                <ul className="space-y-4">
                  {outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                        <span className="text-accent-light text-sm font-bold">
                          {idx + 1}
                        </span>
                      </span>
                      <span className="text-text-secondary">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="relative py-20 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-sm font-medium text-accent-light uppercase tracking-wider mb-4"
            >
              Curriculum
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            >
              What you&apos;ll <span className="text-highlight">learn</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-text-secondary max-w-3xl mx-auto"
            >
              A comprehensive curriculum covering the full spectrum of AI
              engineering—from foundational concepts to production deployment.
              Every concept is examined through four levers: skills, cost,
              latency, and performance.
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-base rounded-2xl border border-border p-6"
            >
              <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                AI Fundamentals
              </h4>
              <ul className="space-y-3">
                {curriculumData.fundamentals.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-text-secondary text-sm flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 text-accent-light flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-base rounded-2xl border border-border p-6"
            >
              <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-secondary" />
                Building & Integration
              </h4>
              <ul className="space-y-3">
                {curriculumData.building.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-text-secondary text-sm flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 text-accent-light flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-base rounded-2xl border border-border p-6"
            >
              <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Production & Scale
              </h4>
              <ul className="space-y-3">
                {curriculumData.production.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-text-secondary text-sm flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 text-accent-light flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-base rounded-2xl border border-border p-6"
            >
              <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Advanced Topics
              </h4>
              <ul className="space-y-3">
                {curriculumData.advanced.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-text-secondary text-sm flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 text-accent-light flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Notice */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-text-muted text-sm"
          >
            This is an{" "}
            <strong className="text-text-secondary">
              intensive but not exhaustive
            </strong>{" "}
            course. Mastering each concept takes years. Our goal is to give you
            a strong foundation and the confidence to keep learning.
          </motion.p>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="relative py-20 sm:py-24 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {requirements.map((req, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface-elevated border border-border"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-accent-light"
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
                    </span>
                    <span className="text-text-secondary text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="order-1 lg:order-2"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block text-sm font-medium text-accent-light uppercase tracking-wider mb-4"
              >
                Is This For You?
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold text-text-primary mb-6"
              >
                This bootcamp is for <span className="text-highlight">you</span>{" "}
                if you...
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-text-secondary mb-6"
              >
                AI Upskill is for Procedure team members who want to specialize
                in AI engineering and lead AI initiatives on client engagements.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20"
              >
                <span className="text-accent-secondary text-xl">!</span>
                <span className="text-sm text-text-secondary">
                  This cohort demands{" "}
                  <strong className="text-text-primary">
                    5-8 hours per week
                  </strong>{" "}
                  over and above your regular work schedule.
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="relative py-20 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-sm font-medium text-accent-light uppercase tracking-wider mb-4"
            >
              Your Mentors
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            >
              Learn from{" "}
              <span className="text-highlight">engineers who ship</span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-base rounded-2xl border border-border p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">U</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Ulhas</h3>
                  <p className="text-accent-light">
                    Lead Instructor & CTO
                  </p>
                </div>
              </div>
              <p className="text-text-secondary">
                Ulhas, our CTO and co-founder, will lead this bootcamp. With
                over a decade of experience building software, teams, and
                organizations, he&apos;s been at the forefront of
                Procedure&apos;s evolution into AI engineering. He&apos;s worked
                with startups acquired by listed companies and now advises
                organizations on their AI engineering practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-base rounded-2xl border border-border p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-accent-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    AI Engineering Team
                  </h3>
                  <p className="text-accent-light">
                    RAG, Agents, MLOps & More
                  </p>
                </div>
              </div>
              <p className="text-text-secondary">
                Learn from engineers actively building AI systems for enterprise
                clients. Our instructors bring hands-on experience from real
                deployments—not just theoretical knowledge. They&apos;ve shipped
                RAG pipelines, agent architectures, and production ML systems.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-base rounded-2xl border border-border p-8 max-w-3xl">
              <p className="text-lg text-text-secondary italic mb-4">
                &ldquo;We don&apos;t just teach AI. We build AI systems every
                day. This bootcamp is how we scale that knowledge across the
                entire organization.&rdquo;
              </p>
              <p className="text-accent-light font-semibold">
                Learn from engineers who&apos;ve shipped AI to production.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process Section */}
      <section id="application" className="relative py-20 sm:py-24 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-sm font-medium text-accent-light uppercase tracking-wider mb-4"
            >
              How It Works
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            >
              Ready to become an{" "}
              <span className="text-highlight">AI Engineer</span>?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-text-secondary max-w-2xl mx-auto"
            >
              The process is simple. The commitment is real.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {applicationSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="bg-surface-elevated rounded-2xl border border-border p-8 h-full hover:border-accent/30 transition-all">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <span className="text-5xl font-bold text-accent/20">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary mt-4 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary">{step.description}</p>
                  </div>
                </div>
                {idx < applicationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-border">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-text-secondary mb-6">
              Interested in joining the next cohort? Look out for Slack
              announcements.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-cta-text font-semibold rounded-xl hover:brightness-110 transition-all"
            >
              Contact Us
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="relative py-20 sm:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-sm font-medium text-accent-light uppercase tracking-wider mb-4"
            >
              FAQs
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-text-primary"
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-base rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-text-primary font-medium pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
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
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-text-secondary">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 sm:py-24 bg-base overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              The future is AI-driven.
              <br />
              <span className="text-highlight">
                Build the skills to lead it.
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Join Procedure&apos;s AI Upskill bootcamp and transform from a
              developer into an AI engineer. Real projects. Real skills. Real
              impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#application"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-cta-text font-semibold rounded-xl hover:brightness-110 transition-all"
              >
                Apply to Join
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface-elevated border border-border text-text-primary font-semibold rounded-xl hover:border-accent/30 transition-all"
              >
                Have Questions?
              </Link>
            </div>

            {/* Social links */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <span className="text-text-muted text-sm">Find us online:</span>
              <div className="flex gap-3">
                <a
                  href="https://in.linkedin.com/company/procedurehq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-text-muted hover:text-accent-light hover:border-accent/30 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/procedure_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-text-muted hover:text-accent-light hover:border-accent/30 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/procedure.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-text-muted hover:text-accent-light hover:border-accent/30 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
