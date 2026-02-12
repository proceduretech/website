"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
  { value: "10", label: "Seats Only" },
  { value: "Paid", label: "Position" },
];

const curriculumData = {
  primary: [
    "Frontend (Next/TypeScript)",
    "Backend (Java/Go/Python)",
    "Mobile (Android/iOS/Flutter)",
    "SRE",
  ],
  essential: [
    "Data Structure and Algorithm",
    "Low-Level Design",
    "High-Level Design",
    "Programming Paradigms",
  ],
  technical: [
    "Databases",
    "Observability and Instrumentation",
    "Automated Testing",
    "Build Tools, Packaging and Distribution",
  ],
  soft: ["Career Navigation", "Documentation", "Soft Skills", "FOSS"],
};

const outcomes = [
  "Build software efficiently as a part of a team",
  "Work on real-world problems with real teams and understand tradeoffs",
  "Deploy your software to any cloud provider",
  "Understand important metrics for software engineering teams",
  "Able to write technical blogs and/or make videos",
  "Understand the business of software development",
  "Set a solid foundation for the rest of your career",
];

const requirements = [
  "Want to be a life-long learner",
  "Are a fresh computer engineering graduate",
  "Knows to code hobby-grade projects",
  "Are curious",
  "Want to make a career in software engineering",
  "Want a SOLID foundation at the start of your career",
  "Are not afraid of solving difficult problems",
  "Are fun to work with",
];

const faqs = [
  {
    question: "Do I need to pay for the BootCamp?",
    answer:
      "We will be hiring you. You will be paid for your time. But instead of working on a project from Day 1, you will be put in a boot camp to prepare you for a real-world project.",
  },
  {
    question: "What if I can't come to Mumbai for the boot camp?",
    answer:
      "This is only for folks who can be in Mumbai for the boot camp. After the boot camp, if you are shortlisted to be a full-time employee of Procedure, you can work from anywhere as long as you have good internet connectivity.",
  },
  {
    question: "What happens after the Bootcamp?",
    answer:
      "You will be evaluated at the end of the boot camp. And if we like working with you and so do you, you will be a full-time employee, i.e. SDE1 at Procedure. Welcome to the real world. More responsibilities and better pay.",
  },
  {
    question: "How will I manage my expenses in Mumbai?",
    answer:
      "You will be given a monthly salary. You will be able to cover your basic expenses with it.",
  },
  {
    question: "How can I apply?",
    answer:
      "Fill out the application form linked on this page. We'll review your submission and get back to you.",
  },
];

const applicationSteps = [
  {
    step: "01",
    title: "Fill the Form",
    description:
      "Submit your application through our form with your details and background.",
  },
  {
    step: "02",
    title: "Telephonic Screening",
    description:
      "You will get an invitation for a telephonic screening if we shortlist you.",
  },
  {
    step: "03",
    title: "Evaluation Test",
    description:
      "You will be given an evaluation test if you are shortlisted further.",
  },
];

export default function RubberDuckPage() {
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
              Rubber Duck
              <br />
              <span className="text-highlight">The Bootcamp</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              A 12-week intensive in-person boot camp to give you a solid
              foundation in software engineering. Learn various aspects of
              software engineering like development, infrastructure, deployment,
              best practices, estimation, metrics, working with teams, managing
              stakeholders, influence, networking and much more.
            </motion.p>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-amber-500/15 border border-amber-400/30 mb-10"
            >
              <span className="text-warning text-xl">⚠️</span>
              <span className="text-sm text-white/90">
                We will be <strong className="text-warning">hiring</strong>{" "}
                you. You will be paid for this. This is how we onboard and
                induct new folks into our team.
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
                href="https://forms.gle/WfD8KrmzZVzyDfUZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-cta-text font-semibold rounded-xl hover:brightness-110 transition-all"
              >
                Apply Now
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

      {/* What You'll Get Section */}
      <section className="relative py-16 sm:py-24 bg-surface">
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
              What is <span className="text-highlight">Rubber Duck</span>?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-text-secondary max-w-3xl mx-auto"
            >
              This boot camp is the right blend of geekiness and pragmatism.
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
                icon: "📍",
                text: "12-week in-person boot camp held in Mumbai",
              },
              {
                icon: "👨‍🏫",
                text: "Instructed by the builders from Procedure with tons of experience",
              },
              {
                icon: "🎤",
                text: "Guest sessions by engineering leaders in the industry",
              },
              {
                icon: "🔧",
                text: "Real problems, real teams, real deliverables, real engineering",
              },
              {
                icon: "🚀",
                text: "Chance to continue as a full-time employee at Procedure",
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
      <section className="relative py-16 sm:py-24 bg-base">
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
                Our Mission
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold text-text-primary mb-6"
              >
                Why are we <span className="text-highlight">doing this</span>?
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="space-y-4 text-text-secondary"
              >
                <p>
                  Have you ever wondered how software products are built and
                  what it takes for a team to ship them quickly and with high
                  quality? Each of us at Procedure was curious about it as well.
                  But now that we have been doing it for decades, we understand
                  its nuances and want to pay it forward.
                </p>
                <p>But that&apos;s only half of the story.</p>
                <p>
                  This is also our long, drawn-out and extensive onboarding
                  process. You will be{" "}
                  <strong className="text-text-primary">
                    hired but be on probation
                  </strong>{" "}
                  until you complete the boot camp.
                </p>
                <p>
                  Throughout this boot camp, we will understand your various
                  strengths and weaknesses. You will learn about the culture of
                  the organisation. We will go through the ebbs and flows of
                  defining and delivering problems. Helping you grow as an
                  engineer and a team member.
                </p>
                <p>
                  We are <em className="text-accent-light">picky</em> about
                  the people we work with. Whether it is a team member, a vendor
                  or a client, we only work with people who will challenge us
                  and are fun. So if we like you and you like us, we will have a
                  great time working together.
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
                  By the end of the BootCamp, you will be able to:
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
      <section id="curriculum" className="relative py-16 sm:py-24 bg-surface">
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
              What&apos;s in the{" "}
              <span className="text-highlight">boot camp</span>?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-text-secondary max-w-3xl mx-auto"
            >
              The idea is to introduce all the major skills of building
              software. This will help you choose your expertise for later.
            </motion.p>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-base rounded-2xl border border-border p-6 mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-text-primary font-semibold">
                    ProcedureHQ, Mumbai
                  </p>
                  <p className="text-sm text-text-muted">
                    Selected folks are expected to be in Mumbai for this
                    duration and come to the office for at least 8 hours daily
                    on weekdays.
                  </p>
                </div>
              </div>
              <a
                href="https://goo.gl/maps/tBgGYvnfuT989Ucq8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-light hover:text-accent transition-colors text-sm font-medium md:ml-auto"
              >
                View on Maps
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
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
                Primary Skills
              </h4>
              <ul className="space-y-3">
                {curriculumData.primary.map((skill, idx) => (
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
                Essential Skills
              </h4>
              <ul className="space-y-3">
                {curriculumData.essential.map((skill, idx) => (
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
                Technical Skills
              </h4>
              <ul className="space-y-3">
                {curriculumData.technical.map((skill, idx) => (
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
                Soft Skills
              </h4>
              <ul className="space-y-3">
                {curriculumData.soft.map((skill, idx) => (
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
            className="text-center text-text-muted text-sm mb-12"
          >
            This is an{" "}
            <strong className="text-text-secondary">
              intensive but by no means an exhaustive
            </strong>{" "}
            course. Mastering each of these will take decades. So we won&apos;t
            try to sell you that you will become good at everything.
          </motion.p>

          {/* T-Shaped Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-base rounded-2xl border border-border p-8 lg:p-10"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div>
                <span className="inline-block text-sm font-medium text-accent-light uppercase tracking-wider mb-3">
                  Our Approach
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                  T-Shaped <span className="text-highlight">Foundation</span>
                </h3>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    The most effective engineers aren&apos;t just
                    specialists&mdash;they&apos;re{" "}
                    <strong className="text-text-primary">
                      T-shaped professionals
                    </strong>{" "}
                    with deep expertise in one area and broad understanding
                    across many.
                  </p>
                  <p>
                    The{" "}
                    <strong className="text-text-primary">
                      horizontal bar
                    </strong>{" "}
                    represents your breadth: exposure to frontend, backend,
                    mobile, SRE, databases, and soft skills. This gives you
                    context to collaborate effectively with any team.
                  </p>
                  <p>
                    The{" "}
                    <strong className="text-text-primary">vertical bar</strong>{" "}
                    represents your depth: we&apos;ll help you develop mastery
                    in your chosen specialization&mdash;the skill you&apos;ll be
                    known for.
                  </p>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-surface-elevated border border-border">
                  <p className="text-accent-light font-medium text-sm">
                    The BootCamp ends in 12 weeks. Your learning doesn&apos;t.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-secondary/10 rounded-xl blur-2xl" />
                <div className="relative">
                  <Image
                    src="/t-shaped.png"
                    alt="T-Shaped Foundation - Deep expertise in one area, broad understanding across others"
                    width={800}
                    height={400}
                    className="rounded-xl border border-border w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* This is for you Section */}
      <section className="relative py-16 sm:py-24 bg-base">
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
                Requirements
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold text-text-primary mb-6"
              >
                This is for <span className="text-highlight">you</span> if
                you...
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-text-secondary mb-6"
              >
                We&apos;re looking for curious minds who want to build a strong
                foundation in software engineering. If you check most of these
                boxes, we&apos;d love to hear from you.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20"
              >
                <span className="text-accent-secondary text-xl">‼️</span>
                <span className="text-sm text-text-secondary">
                  We are only looking to hire{" "}
                  <strong className="text-text-primary">
                    fresh computer engineering graduates
                  </strong>{" "}
                  for this cohort.
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="relative py-16 sm:py-24 bg-surface">
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
              Meet Your Mentors
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            >
              Who are we, and why should you{" "}
              <span className="text-highlight">start your career</span> with us?
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
                    Lead Instructor & Co-founder
                  </p>
                </div>
              </div>
              <p className="text-text-secondary">
                Ulhas, our co-founder, will be your lead instructor for this
                boot camp. He has over a decade of experience building software,
                teams and organisations. He has been a part of startups that got
                acquired by listed companies. He has worked in large teams which
                built products for scale. He also advises startups on their
                engineering practices.
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
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Expert Instructors
                  </h3>
                  <p className="text-accent-light">
                    Frontend, Backend, SRE, Design & PM
                  </p>
                </div>
              </div>
              <p className="text-text-secondary">
                Other instructors include Frontend, Backend, SRE, Design and
                product management experts with at least five years of
                experience. They have built products with stellar product
                engineering teams, including PayTm, Treebo, KredX, Arogya Setu,
                and Setu.
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
                &ldquo;We&apos;re doers, teachers, mentors, and
                seen-it-all-beforers. We just don&apos;t preach; we practice as
                well.&rdquo;
              </p>
              <p className="text-accent-light font-semibold">
                We believe choosing a mentor is more important than choosing a
                company. We have both.
              </p>
            </div>
          </motion.div>

          {/* Glassdoor mention */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-text-muted text-sm">
              Don&apos;t believe what we say. Check our{" "}
              <a
                href="https://www.glassdoor.co.in/Reviews/Procedure-Technologies-Reviews-E2578960.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:text-accent transition-colors"
              >
                Glassdoor reviews
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="relative py-16 sm:py-24 bg-base">
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
              Apply Now
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            >
              How to apply, and what is the{" "}
              <span className="text-highlight">process</span>?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-text-secondary max-w-2xl mx-auto"
            >
              The entire process will not take more than two weeks.
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
            <a
              href="https://forms.gle/WfD8KrmzZVzyDfUZ9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-cta-text font-semibold rounded-xl hover:brightness-110 transition-all"
            >
              Start Your Application
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
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="relative py-16 sm:py-24 bg-surface">
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
      <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
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
              Ready to start your{" "}
              <span className="text-highlight">engineering journey</span>?
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Fill out the form to experience the highs and the lows of software
              engineering. It won&apos;t be easy, but it will be fun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/WfD8KrmzZVzyDfUZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-cta-text font-semibold rounded-xl hover:brightness-110 transition-all"
              >
                Apply Now
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
