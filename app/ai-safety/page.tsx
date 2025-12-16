"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { CalButton } from "@/components/CalButton";
import type { Metadata } from "next";

// ============================================
// DATA
// ============================================

const principles = [
  {
    number: "01",
    title: "Transparency & Explainability",
    description:
      "Every AI system we build includes mechanisms for explaining its behavior. Model cards documenting capabilities and limitations. Audit trails for decisions. When stakeholders ask 'why did the AI do that?' there is always an answer.",
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
  },
  {
    number: "02",
    title: "Fairness & Bias Mitigation",
    description:
      "AI systems must serve all users equitably. We systematically test for and eliminate discriminatory patterns in training data and model outputs. Regular fairness audits ensure models stay within acceptable bounds.",
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
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Privacy by Design",
    description:
      "Data privacy is not a policy document. It is an architectural decision. We build systems that minimize data exposure, implement appropriate anonymization, and prevent AI models from memorizing or leaking sensitive information.",
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
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Human Oversight",
    description:
      "We design systems with appropriate human-in-the-loop checkpoints. Not blanket approval workflows that slow everything down, but targeted intervention points where human judgment adds value. Augmentation, not replacement.",
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
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Security & Robustness",
    description:
      "AI systems face unique attack vectors. We harden against adversarial inputs, prompt injection, data poisoning, and model extraction threats. Red-teaming is not a checkbox—we find vulnerabilities before adversaries do.",
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
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Accountability & Governance",
    description:
      "Clear ownership, documented decisions, audit trails. We establish governance frameworks that ensure responsible AI practices scale with your organization. Continuous monitoring catches issues before they become problems.",
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
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    ),
  },
];

const safetyPhases = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery & Risk Assessment",
    description:
      "We identify AI-specific risks before a single line of code is written. Threat modeling, data sensitivity classification, and regulatory mapping.",
    activities: [
      "Threat modeling for AI systems",
      "Data sensitivity classification",
      "Regulatory requirement mapping",
      "Stakeholder impact analysis",
    ],
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
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
  },
  {
    id: "design",
    number: "02",
    title: "Responsible Design",
    description:
      "Safety considerations are embedded into architecture decisions. Privacy by design, explainability requirements, human oversight integration.",
    activities: [
      "Bias audit planning",
      "Privacy architecture design",
      "Explainability requirements",
      "Human oversight integration points",
    ],
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
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    id: "build",
    number: "03",
    title: "Secure Development",
    description:
      "Automated governance pipelines enforce safety policies without becoming bottlenecks. Input validation, model access controls, secure training.",
    activities: [
      "Adversarial testing",
      "Input validation layers",
      "Model access controls",
      "Secure training pipelines",
    ],
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
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    id: "deploy",
    number: "04",
    title: "Validated Deployment",
    description:
      "Red team testing and compliance verification before launch. Staged rollouts with monitoring and established rollback procedures.",
    activities: [
      "Red team testing",
      "Compliance verification",
      "Staged rollout with monitoring",
      "Rollback procedures",
    ],
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
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
  {
    id: "monitor",
    number: "05",
    title: "Continuous Monitoring",
    description:
      "AI systems drift. We implement continuous monitoring for model performance, fairness metrics, and safety indicators. Automated alerts catch degradation early.",
    activities: [
      "Drift detection",
      "Fairness metrics tracking",
      "Incident response",
      "Ongoing bias audits",
    ],
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
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        />
      </svg>
    ),
  },
];

const frameworks = [
  {
    name: "NIST AI Risk Management Framework",
    abbrev: "NIST AI RMF",
    description:
      "Comprehensive approach to managing AI risks across the system lifecycle. We use it to structure risk identification, assessment, and mitigation.",
  },
  {
    name: "EU AI Act",
    abbrev: "EU AI Act",
    description:
      "Risk-based requirements for AI systems. We help organizations build compliant systems for high-risk use cases in healthcare, finance, and HR.",
  },
  {
    name: "ISO/IEC 42001",
    abbrev: "ISO 42001",
    description:
      "International standard for AI management systems. We help organizations prepare for certification with required processes and documentation.",
  },
  {
    name: "OECD AI Principles",
    abbrev: "OECD",
    description:
      "Foundational principles adopted by governments worldwide. Our engineering practices align with guidelines on transparency and accountability.",
  },
];

const certifications = [
  { name: "SOC 2 Type II", status: "Certified" },
  { name: "GDPR", status: "Compliant" },
  { name: "HIPAA", status: "Compliant" },
  { name: "ISO 27001", status: "Certified" },
  { name: "CCPA", status: "Ready" },
];

const industries = [
  {
    name: "Healthcare",
    icon: (
      <svg
        className="w-8 h-8"
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
    considerations: [
      "HIPAA compliance for patient data",
      "FDA guidance on AI/ML medical devices",
      "Clinical decision support safety",
      "Protected health information handling",
    ],
  },
  {
    name: "Financial Services",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
    considerations: [
      "Fair lending compliance",
      "Model risk management (SR 11-7)",
      "Explainable credit decisions",
      "Anti-discrimination requirements",
    ],
  },
  {
    name: "Enterprise SaaS",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    considerations: [
      "Content moderation safety",
      "Personalization without privacy violations",
      "AI assistants that stay on-topic",
      "User trust through transparency",
    ],
  },
];

// ============================================
// COMPONENTS
// ============================================

function PrincipleCard({
  principle,
  index,
}: {
  principle: (typeof principles)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Hover glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700" />

      <div className="relative p-8 rounded-2xl bg-surface-elevated border border-border group-hover:border-accent/40 transition-all duration-500 h-full group-hover:shadow-xl group-hover:shadow-black/20 group-hover:-translate-y-1">
        {/* Number + Icon Row */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-5xl font-bold text-border group-hover:text-accent/30 transition-colors duration-300">
            {principle.number}
          </span>
          <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-secondary group-hover:text-white group-hover:border-transparent transition-all duration-300">
            {principle.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-light transition-colors duration-300">
          {principle.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary leading-relaxed">
          {principle.description}
        </p>
      </div>
    </motion.div>
  );
}

function ProcessPhaseCard({
  phase,
  index,
}: {
  phase: (typeof safetyPhases)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Hover glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700" />

      <div className="relative p-6 sm:p-8 rounded-2xl bg-surface-elevated border border-border group-hover:border-accent/40 transition-all duration-500 h-full group-hover:shadow-xl group-hover:shadow-black/20 group-hover:-translate-y-1">
        {/* Phase Number + Icon Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-secondary group-hover:text-white group-hover:border-transparent transition-all duration-300">
            {phase.icon}
          </div>
          <span className="text-4xl font-bold text-border group-hover:text-accent/30 transition-colors duration-300">
            {phase.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-light transition-colors duration-300">
          {phase.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {phase.description}
        </p>

        {/* Activities - always visible */}
        <div className="pt-4 border-t border-border">
          <ul className="space-y-2">
            {phase.activities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-accent shrink-0 mt-0.5"
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
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function IndustryCard({
  industry,
  index,
}: {
  industry: (typeof industries)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="p-8 rounded-2xl bg-surface-elevated border border-border hover:border-accent/40 transition-all duration-300 h-full hover:shadow-lg hover:shadow-black/10 hover:-translate-y-1">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 border border-accent/20 flex items-center justify-center text-accent-light mx-auto mb-6 group-hover:from-accent/30 group-hover:to-accent-secondary/30 transition-all duration-300">
          {industry.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary text-center mb-4 group-hover:text-accent-light transition-colors duration-300">
          {industry.name}
        </h3>

        {/* Considerations */}
        <ul className="space-y-2">
          {industry.considerations.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <svg
                className="w-4 h-4 text-accent shrink-0 mt-0.5"
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
              <span className="text-text-secondary">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export default function AISafetyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <main className="min-h-screen">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-base to-base" />

        {/* Large ambient glows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-accent-secondary/6 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-accent/5 rounded-full blur-[100px]" />
        </motion.div>

        {/* Hexagon shield pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 52' width='60' height='52'%3e%3cpath d='M30 0L60 15v22L30 52 0 37V15z' stroke='%2314B8A6' stroke-width='0.5' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[15%] w-3 h-3 bg-accent/40 rounded-full blur-sm"
          />
          <motion.div
            animate={{ y: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-[30%] right-[20%] w-2 h-2 bg-accent-secondary/50 rounded-full blur-sm"
          />
          <motion.div
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-[40%] left-[10%] w-4 h-4 bg-accent/30 rounded-full blur-sm"
          />
        </div>

        {/* Main content */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-16"
        >
          <div className="text-center">
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3 justify-center mb-8"
            >
              {certifications.slice(0, 4).map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-border"
                >
                  <svg
                    className="w-4 h-4 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs font-medium text-text-secondary">
                    {cert.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent-light">
                Responsible AI Engineering
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
            >
              Responsible AI.
              <br />
              <span className="text-highlight">Built Into the Code.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Responsible AI is not about pledges and principles posted on a
              wall. It is about the decisions engineers make every day: how
              models are tested, how outputs are validated, how systems fail
              gracefully. We build AI safety into your architecture from the
              first commit.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CalButton className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-lg hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25 cursor-pointer">
                Discuss Your AI Safety Needs
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
              </CalButton>
              <Link
                href="/expertise/ai-security"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-lg hover:border-accent hover:text-accent-light transition-all duration-200"
              >
                View AI Security Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          WHY IT MATTERS SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-surface overflow-hidden">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23E5E7EB'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Quote marks */}
            <svg
              className="w-16 h-16 mx-auto mb-6 text-accent/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            {/* Quote */}
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-8 max-w-4xl mx-auto">
              Safety enables speed.{" "}
              <span className="text-highlight">Not the opposite.</span>
            </blockquote>

            {/* Attribution */}
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Organizations that build safety into their AI systems from the
              start ship faster and with more confidence. They catch issues
              before production. They avoid the costly rollbacks and reputation
              damage that come from deploying systems that behave unpredictably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          PRINCIPLES SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
        {/* Diamond pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3e%3cpath d='M18 4L32 18L18 32L4 18Z' stroke='%2314B8A6' stroke-width='0.5' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Our Principles
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
              Six Pillars of{" "}
              <span className="text-highlight">Responsible AI.</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
              These are not theoretical frameworks. They are the engineering
              decisions we make on every AI project, operationalized into our
              development process.
            </p>
          </motion.div>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <PrincipleCard
                key={principle.number}
                principle={principle}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          IMPLEMENTATION PROCESS SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-surface overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3e%3ccircle cx='2' cy='2' r='1' fill='%23E5E7EB'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              How We Operationalize Safety
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
              Safety Integrated at{" "}
              <span className="text-highlight">Every Stage.</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
              AI safety is not a checklist at the end. It is woven into every
              phase of our development process.
            </p>
          </motion.div>

          {/* Phase Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyPhases.map((phase, idx) => (
              <ProcessPhaseCard key={phase.id} phase={phase} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FRAMEWORKS & COMPLIANCE SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Frameworks & Standards
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
              Built on{" "}
              <span className="text-highlight">Industry Standards.</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
              We do not invent our own definitions of safe AI. We align with
              established frameworks from leading institutions.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Frameworks */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-6">
                Frameworks We Follow
              </h3>
              <div className="space-y-4">
                {frameworks.map((framework, idx) => (
                  <motion.div
                    key={framework.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 rounded-xl bg-surface-elevated border border-border hover:border-accent/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light shrink-0">
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
                            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-text-primary mb-1">
                          {framework.name}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {framework.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-6">
                Compliance & Certifications
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="p-5 rounded-xl bg-surface-elevated border border-border text-center hover:border-accent/40 transition-all duration-300"
                  >
                    <svg
                      className="w-8 h-8 mx-auto mb-3 text-success"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm font-semibold text-text-primary">
                      {cert.name}
                    </p>
                    <p className="text-xs text-accent-light">
                      {cert.status}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Additional info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-xl bg-accent/5 border border-accent/20"
              >
                <p className="text-sm text-text-secondary">
                  We have experience building AI systems that meet
                  sector-specific requirements: HIPAA for healthcare, SOC 2 for
                  SaaS, fair lending regulations for financial services, and DoD
                  ethical AI principles for defense applications.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          INDUSTRY APPLICATIONS SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-surface overflow-hidden">
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'%3e%3cpath d='M0 40L40 0' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Industry-Specific Safety
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
              Tailored for <span className="text-highlight">Your Domain.</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
              Different industries face different AI risks. We bring specialized
              knowledge to each sector we serve.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <IndustryCard
                key={industry.name}
                industry={industry}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5" />

        {/* Animated orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-secondary/10 rounded-full blur-[120px]"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Shield icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-accent-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to Build AI
              <br />
              <span className="text-highlight">You Can Trust?</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Let us discuss how responsible AI practices can accelerate your
              project while protecting your organization. Our team will assess
              your needs and recommend the right approach for your industry and
              use case.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <CalButton className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25 cursor-pointer">
                Schedule a Safety Assessment
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
              </CalButton>
              <Link
                href="/expertise/ai-security"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent hover:text-accent-light transition-all duration-200"
              >
                View AI Security Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <svg
                  className="w-4 h-4 text-accent"
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
                  className="w-4 h-4 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                NDA Available
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <svg
                  className="w-4 h-4 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                30 min call
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <svg
                  className="w-4 h-4 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                No commitment
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
