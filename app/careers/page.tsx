"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui";

// Job openings data
const jobOpenings = [
  {
    id: "senior-ai-engineer",
    title: "Senior AI Engineer",
    department: "AI Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Lead the development of production AI systems that power critical business operations for Fortune 500 clients. You will architect LLM integrations, RAG pipelines, and custom ML models that process millions of requests daily while maintaining enterprise-grade reliability.",
    responsibilities: [
      "Design and deploy production AI/ML systems serving enterprise workloads",
      "Architect LLM-powered applications with advanced RAG and agent frameworks",
      "Partner with client stakeholders to translate business requirements into technical solutions",
      "Mentor team members and establish engineering best practices through code reviews",
    ],
    requirements: [
      "5+ years of software engineering with production deployments",
      "3+ years building ML/AI systems at scale",
      "Expert proficiency in Python and ML frameworks (PyTorch, TensorFlow, Hugging Face)",
      "Hands-on experience with LLM APIs (OpenAI, Anthropic, Google) and vector databases",
    ],
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    department: "Product Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Build intelligent web applications that bring AI capabilities to enterprise users. You will own the full stack, from pixel-perfect React interfaces to scalable Node.js APIs, creating products that transform how organizations leverage artificial intelligence.",
    responsibilities: [
      "Develop high-performance web applications using React, Next.js, and TypeScript",
      "Design and implement scalable RESTful and GraphQL APIs",
      "Integrate LLM and ML capabilities into intuitive user experiences",
      "Deliver production-ready code with comprehensive test coverage",
    ],
    requirements: [
      "4+ years of full-stack development with shipped production applications",
      "Expert-level React and TypeScript with modern patterns and best practices",
      "Strong backend experience with Node.js or Python API development",
      "Familiarity with CI/CD pipelines, containerization, and cloud deployment",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Cloud & Infrastructure",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Architect and operate the cloud infrastructure that powers enterprise AI systems. You will build resilient, cost-optimized platforms on AWS and GCP that handle GPU-intensive ML workloads with 99.9% uptime requirements.",
    responsibilities: [
      "Design and maintain production cloud infrastructure on AWS and GCP",
      "Build and optimize CI/CD pipelines for rapid, reliable deployments",
      "Manage Kubernetes clusters optimized for ML workloads and GPU scheduling",
      "Implement infrastructure as code using Terraform and GitOps workflows",
    ],
    requirements: [
      "4+ years of DevOps or Site Reliability Engineering experience",
      "Expert-level Kubernetes and container orchestration skills",
      "Deep proficiency with AWS or GCP services and architecture patterns",
      "Strong experience with Terraform, Ansible, or similar IaC tools",
    ],
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    department: "AI Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Own the complete ML lifecycle for mission-critical enterprise applications. You will design data pipelines, train and fine-tune models, and deploy inference systems that serve predictions at scale with sub-100ms latency requirements.",
    responsibilities: [
      "Build end-to-end ML pipelines from data ingestion to production serving",
      "Optimize model performance for inference latency and throughput",
      "Implement MLOps best practices including versioning, monitoring, and automated retraining",
      "Partner with data scientists to productionize research models",
    ],
    requirements: [
      "4+ years of ML engineering with production deployment experience",
      "Strong Python proficiency and deep expertise with PyTorch or TensorFlow",
      "Hands-on experience with ML platforms (Kubeflow, MLflow, SageMaker, or Vertex AI)",
      "Background in distributed computing and large-scale data processing",
    ],
  },
  {
    id: "technical-project-manager",
    title: "Technical Project Manager",
    department: "Delivery",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Drive complex AI engineering initiatives from discovery to production deployment. You will serve as the critical bridge between technical teams and enterprise stakeholders, ensuring projects deliver measurable business outcomes on time and within scope.",
    responsibilities: [
      "Lead end-to-end delivery of AI projects for enterprise clients",
      "Coordinate cross-functional engineering teams across multiple time zones",
      "Define project scope, milestones, and success metrics aligned with business objectives",
      "Proactively identify risks and implement mitigation strategies",
    ],
    requirements: [
      "5+ years of technical project management in software or consulting",
      "Demonstrated experience delivering AI/ML or complex software projects",
      "Strong command of agile methodologies and delivery frameworks",
      "Exceptional communication skills with technical and executive audiences",
    ],
  },
  {
    id: "solutions-architect",
    title: "Solutions Architect",
    department: "Architecture",
    location: "Remote",
    type: "Full-time",
    experience: "7+ years",
    description:
      "Design enterprise-grade AI architectures that deliver measurable ROI at scale. You will lead technical discovery with C-suite stakeholders, translate complex business requirements into robust technical solutions, and guide implementation across multi-million dollar engagements.",
    responsibilities: [
      "Design scalable, secure AI/ML architectures meeting enterprise compliance requirements",
      "Lead technical discovery sessions and solution design with client executives",
      "Author technical proposals, architecture documentation, and implementation roadmaps",
      "Provide architectural guidance and oversight to engineering teams throughout delivery",
    ],
    requirements: [
      "7+ years of software or solutions architecture experience",
      "Deep expertise in distributed systems and cloud-native architecture patterns",
      "Proven experience designing AI/ML systems for enterprise production environments",
      "Executive presence with strong client-facing communication and presentation skills",
    ],
  },
];

// Department filters
const departments = [
  "All Departments",
  "AI Engineering",
  "Product Engineering",
  "Cloud & Infrastructure",
  "Delivery",
  "Architecture",
];

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
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const filteredJobs =
    selectedDepartment === "All Departments"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === selectedDepartment);

  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <PageHero
        badge={`${jobOpenings.length} Open Positions`}
        headline="AI Engineering Careers"
        headlineAccent="That Shape the Future"
        description="Build production AI systems for Fortune 500 companies and high-growth startups. We offer remote ML engineer and AI developer positions with top-tier compensation, meaningful work, and a certified best workplace culture built for senior technical talent."
        primaryCTA={{ text: "Explore AI Engineering Roles", href: "#openings" }}
        secondaryCTA={{ text: "Learn About Our Culture", href: "/culture" }}
        showClientLogos={false}
      />

      {/* ============================================
          CERTIFICATION BADGE
          ============================================ */}
      <section className="relative py-8 sm:py-12 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-accent/5 via-surface-elevated to-accent-secondary/5 border border-accent/20"
          >
            <Image
              src="/assets/bptw-badge.webp"
              alt="TSOW Certified Best Workplace"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
                Officially a TSOW Certified Best Workplace
              </h3>
              <p className="text-text-secondary text-sm sm:text-base">
                We&apos;re proud to be recognized for creating a culture where
                people feel valued, supported, and inspired to do their best
                work. This certification reflects our commitment to trust,
                belonging, growth, and well-being.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
          JOB OPENINGS SECTION
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

          {/* Department Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  selectedDepartment === dept
                    ? "bg-accent text-white"
                    : "bg-surface-elevated text-text-secondary border border-border hover:border-accent/50 hover:text-text-primary"
                }`}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group"
              >
                <div
                  className={`relative rounded-2xl bg-surface-elevated border transition-all duration-300 overflow-hidden ${
                    expandedJob === job.id
                      ? "border-accent/50"
                      : "border-border hover:border-accent/30"
                  }`}
                >
                  {/* Job Header - Always Visible */}
                  <button
                    onClick={() =>
                      setExpandedJob(expandedJob === job.id ? null : job.id)
                    }
                    className="w-full p-6 sm:p-8 text-left"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-grow">
                        {/* Department badge */}
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-light bg-accent/10 border border-accent/20 rounded-full mb-3">
                          {job.department}
                        </span>

                        {/* Job title */}
                        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-light transition-colors">
                          {job.title}
                        </h3>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
                          <span className="flex items-center gap-1.5">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                              />
                            </svg>
                            {job.location}
                          </span>
                          <span className="w-1 h-1 bg-border rounded-full" />
                          <span className="flex items-center gap-1.5">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {job.type}
                          </span>
                          <span className="w-1 h-1 bg-border rounded-full" />
                          <span className="flex items-center gap-1.5">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                            {job.experience}
                          </span>
                        </div>
                      </div>

                      {/* Expand/Collapse indicator */}
                      <div className="flex items-center gap-4">
                        <motion.div
                          animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted group-hover:border-accent/50 group-hover:text-accent-light transition-colors"
                        >
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
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedJob === job.id ? "auto" : 0,
                      opacity: expandedJob === job.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-8 pt-0">
                      <div className="border-t border-border pt-6">
                        {/* Description */}
                        <p className="text-text-secondary leading-relaxed mb-6">
                          {job.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                              What You&apos;ll Do
                            </h4>
                            <ul className="space-y-3">
                              {job.responsibilities.map((resp, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm text-text-secondary"
                                >
                                  <svg
                                    className="w-5 h-5 text-accent shrink-0 mt-0.5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                              What We&apos;re Looking For
                            </h4>
                            <ul className="space-y-3">
                              {job.requirements.map((req, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm text-text-secondary"
                                >
                                  <svg
                                    className="w-5 h-5 text-accent shrink-0 mt-0.5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Apply Button */}
                        <Link
                          href={`/contact-us?role=${job.id}`}
                          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25"
                        >
                          Apply Now
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
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-elevated border border-border flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <p className="text-text-secondary mb-4">
                No positions found in {selectedDepartment}.
              </p>
              <button
                onClick={() => setSelectedDepartment("All Departments")}
                className="text-accent-light font-medium hover:underline"
              >
                View all positions
              </button>
            </motion.div>
          )}
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
