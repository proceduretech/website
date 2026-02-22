"use client";

import { LazyMotion, domAnimation, m, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { CalButton } from "@/components/CalButton";

// ============================================
// DATA
// ============================================

const processPhases = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery",
    tagline: "Understand the Real Problem",
    duration: "1-2 Weeks",
    description:
      "We don't do multi-month discovery phases. We go deep fast. Our engineers immerse themselves in your domain, interview stakeholders, and map technical constraints. By the end of week one, we have a shared understanding of what success looks like.",
    deliverables: [
      "Technical architecture assessment",
      "Risk identification and mitigation plan",
      "Scope definition with clear milestones",
      "Team structure recommendations",
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
    title: "Design",
    tagline: "Architect for Production",
    duration: "1-2 Weeks",
    description:
      "We design systems meant to run in production under real load with real users. Not diagrams that look good in executive presentations. Every architectural decision is documented with its trade-offs visible. We optimize for maintainability and iteration speed.",
    deliverables: [
      "Production-ready system architecture",
      "API contracts and data models",
      "Security and compliance framework",
      "Technical decision records",
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
    title: "Build",
    tagline: "Ship Incrementally. Learn Continuously.",
    duration: "Ongoing Sprints",
    description:
      "We work in tight iterations, shipping working software every week. Not features that almost work. Features that are deployed, monitored, and ready for users. Our engineers pair program, conduct code reviews, and maintain production-grade standards from the first commit.",
    deliverables: [
      "Weekly deployable increments",
      "Continuous integration and deployment",
      "Real-time progress visibility",
      "Knowledge transfer throughout",
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
    id: "ship",
    number: "04",
    title: "Ship",
    tagline: "Production is Day One, Not the Finish Line",
    duration: "Milestone-Based",
    description:
      "Getting to production is just the beginning. We instrument everything, monitor performance, and iterate based on real user data. When issues arise (and they will), we're there to diagnose, fix, and improve. Your product gets better every week it's live.",
    deliverables: [
      "Production deployment and monitoring",
      "Performance optimization",
      "Incident response and resolution",
      "Data-driven iteration cycles",
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
    id: "iterate",
    number: "05",
    title: "Iterate",
    tagline: "Evolve Based on Evidence",
    duration: "Continuous",
    description:
      "User behavior tells you what documentation never can. We analyze how people actually use your product, identify friction points, and prioritize improvements that move the metrics that matter. Features are validated, not assumed.",
    deliverables: [
      "Usage analytics and insights",
      "Feature prioritization based on data",
      "Continuous improvement cycles",
      "Long-term product roadmap input",
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
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    ),
  },
];

const differentiators = [
  {
    id: "embedded",
    title: "Embedded, Not Outsourced",
    description:
      "Our engineers don't work in isolation on the other side of an account manager. They join your standups, use your tools, and care about your outcomes. Our certified best workplace culture means engineers are engaged and invested in your success. When the engagement ends, the knowledge stays with your team.",
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
  },
  {
    id: "context",
    title: "Context Over Communication",
    description:
      "We believe shared understanding beats constant check-ins. Instead of flooding your inbox with status updates, we invest in making sure everyone has the context they need to make good decisions without waiting for a meeting.",
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
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    id: "ship",
    title: "Ship and Improve, Not Wait for Perfect",
    description:
      "Perfection is the enemy of progress. We'd rather put working software in front of users and learn from real feedback than debate hypotheticals in endless planning sessions. Momentum matters.",
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
    id: "why",
    title: "The Why Stays Visible",
    description:
      "Every technical decision comes with its rationale documented. When you ask 'why did we build it this way?' there's always an answer. We learn in the open because transparency makes teams stronger.",
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
  },
];

const principles = [
  {
    number: "01",
    title: "Intentional Craft",
    description:
      "Every system we build reflects care, context, and the people behind it. We don't rush the details or cut corners on architecture. Production-grade from day one.",
  },
  {
    number: "02",
    title: "Honest Conversations",
    description:
      "No black boxes. No vague timelines. No surprise invoices. We tell you what's working and what isn't. Feedback is about making things better together.",
  },
  {
    number: "03",
    title: "Zero Politics",
    description:
      "We have no room for ego or noise. Transparency, trust, and shared intent keep our teams aligned and focused on what actually matters: shipping software.",
  },
  {
    number: "04",
    title: "Ownership and Autonomy",
    description:
      "When you build something at Procedure, you own it. We trust our engineers to make good calls and back them with accountability. No micromanagement.",
  },
  {
    number: "05",
    title: "Learning from Mistakes",
    description:
      "If you're not making mistakes and learning from them, you're not growing. We run blameless post-mortems and celebrate lessons as much as wins.",
  },
  {
    number: "06",
    title: "Users First",
    description:
      "Our compass is simple: make it useful, make it clear. We design for the person on the other side of the screen, not metrics, not trends. Real users, real solutions.",
  },
];

const outcomes = [
  {
    stat: "98",
    unit: "%",
    label: "Client Retention",
    description: "Clients stay because we consistently deliver results",
  },
  {
    stat: "3+",
    unit: "Years",
    label: "Average Partnership",
    description: "We build long-term relationships, not short-term projects",
  },
  {
    stat: "150",
    unit: "+",
    label: "Products Shipped",
    description: "Production code running for real users",
  },
  {
    stat: "100",
    unit: "%",
    label: "Knowledge Transfer",
    description: "Your team gets stronger, not more dependent",
  },
];

// ============================================
// COMPONENTS
// ============================================

function ProcessPhaseCard({
  phase,
  index,
  isActive,
  onClick,
}: {
  phase: (typeof processPhases)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className={`group relative cursor-pointer ${isActive ? "z-10" : ""}`}
    >
      {/* Glow effect when active */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r from-accent/30 to-accent-secondary/30 rounded-2xl blur-lg transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
        }`}
      />

      <div
        className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-500 h-full ${
          isActive
            ? "bg-surface-elevated border-accent/40 shadow-xl shadow-black/20"
            : "bg-surface-elevated/60 border-border hover:border-accent/30"
        }`}
      >
        {/* Phase Number + Icon Row */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-br from-accent to-accent-secondary text-white"
                : "bg-accent/10 border border-accent/20 text-accent-light"
            }`}
          >
            {phase.icon}
          </div>
          <span
            className={`text-4xl font-bold transition-colors duration-300 ${
              isActive ? "text-accent-light" : "text-border"
            }`}
          >
            {phase.number}
          </span>
        </div>

        {/* Title + Tagline */}
        <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-accent-light transition-colors duration-300">
          {phase.title}
        </h3>
        <p className="text-sm text-accent-light font-medium mb-3">
          {phase.tagline}
        </p>

        {/* Duration Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs text-text-muted mb-4">
          <svg
            className="w-3 h-3"
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
          {phase.duration}
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {phase.description}
        </p>

        {/* Deliverables (expanded when active) */}
        <m.div
          initial={false}
          animate={{
            height: isActive ? "auto" : 0,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-text-muted uppercase tracking-wider mb-3">
              Deliverables
            </p>
            <ul className="space-y-2">
              {phase.deliverables.map((item, idx) => (
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
        </m.div>

        {/* Expand Indicator */}
        <div
          className={`absolute bottom-4 right-4 transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-5 h-5 text-text-muted"
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
        </div>
      </div>
    </m.div>
  );
}

function DifferentiatorCard({
  data,
  index,
}: {
  data: (typeof differentiators)[0];
  index: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Hover glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700" />

      <div className="relative p-8 rounded-2xl bg-surface-elevated/90 backdrop-blur-sm border border-border group-hover:border-accent/40 transition-all duration-500 h-full group-hover:shadow-xl group-hover:shadow-black/20 group-hover:-translate-y-1">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light mb-6 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-secondary group-hover:text-white group-hover:border-transparent transition-all duration-300">
          {data.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-light transition-colors duration-300">
          {data.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary leading-relaxed">
          {data.description}
        </p>
      </div>
    </m.div>
  );
}

function PrincipleCard({
  principle,
  index,
}: {
  principle: (typeof principles)[0];
  index: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <div className="p-6 rounded-xl bg-surface-elevated/60 border border-border hover:border-accent/30 transition-all duration-300 h-full hover:shadow-lg hover:shadow-black/10">
        {/* Number */}
        <span className="text-5xl font-bold text-border group-hover:text-accent/30 transition-colors duration-300 block mb-3">
          {principle.number}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-light transition-colors duration-300">
          {principle.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed">
          {principle.description}
        </p>
      </div>
    </m.div>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export default function ApproachPage() {
  const [activePhase, setActivePhase] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <LazyMotion features={domAnimation}>
    <main className="min-h-screen">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 sm:pb-24 overflow-hidden bg-base"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-base to-base" />

        {/* Large ambient glows */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-accent-secondary/6 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-accent/5 rounded-full blur-[100px]" />
        </m.div>

        {/* Hexagon pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 52' width='60' height='52'%3e%3cpath d='M30 0L60 15v22L30 52 0 37V15z' stroke='%2314B8A6' stroke-width='0.5' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <m.div
            animate={{ y: [0, -20, 0], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[15%] w-3 h-3 bg-accent/40 rounded-full blur-sm"
          />
          <m.div
            animate={{ y: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-[30%] right-[20%] w-2 h-2 bg-accent-secondary/50 rounded-full blur-sm"
          />
          <m.div
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-[40%] left-[10%] w-4 h-4 bg-accent/30 rounded-full blur-sm"
          />
          <m.div
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-[25%] right-[12%] w-5 h-5 bg-accent-secondary/25 rounded-full blur-md"
          />
        </div>

        {/* Main content */}
        <m.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6"
        >
          <div className="text-center">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-text-primary leading-[1.1] tracking-tight mb-6">
              Stay Close to the Problem.
              <br />
              <span className="text-highlight">Ship What Matters.</span>
            </h1>

            {/* Subheadline */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              We&apos;re not process consultants who disappear into discovery
              for months. We&apos;re forward-deployed engineers who embed with
              your team, understand your constraints, and ship production code
              from week one. No layers. No handoffs. Just focused engineering.
            </m.p>

            {/* CTAs */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <CalButton className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-lg hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25 cursor-pointer">
                Start Your Project
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
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-lg hover:border-accent hover:text-accent-light transition-all duration-200"
              >
                View Case Studies
              </Link>
            </m.div>

          </div>
        </m.div>

        {/* Scroll indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-border rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-text-muted rounded-full mt-2" />
          </m.div>
        </m.div>
      </section>

      {/* ============================================
          PHILOSOPHY SECTION
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
          <m.div
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
              We stay close because{" "}
              <span className="text-highlight">distance creates drift</span>.
              And drift kills products.
            </blockquote>

            {/* Attribution */}
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Procedure engineers are forward-deployed. We sit inside your
              systems, your Slack channels, your codebase. We understand not
              just what you&apos;re building, but why it matters and who
              it&apos;s for. When engineers understand the problem firsthand,
              they build better solutions.
            </p>
          </m.div>
        </div>
      </section>

      {/* ============================================
          PROCESS SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3e%3ccircle cx='2' cy='2' r='1' fill='%23E5E7EB'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              How We Work
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              From First Conversation{" "}
              <span className="text-highlight">to Production.</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
              A proven methodology designed for speed without sacrificing craft.
              Every phase builds on the last, and every decision stays visible.
            </p>
          </m.div>

          {/* Timeline visualization - Desktop */}
          <div className="hidden lg:block mb-12">
            <div className="relative flex justify-between items-center max-w-5xl mx-auto">
              {/* Connection line */}
              <div className="absolute left-0 right-0 h-1 top-1/2 -translate-y-1/2">
                <div className="h-full bg-border rounded-full" />
                <m.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-accent-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>

              {/* Phase dots */}
              {processPhases.map((phase, idx) => (
                <m.button
                  key={phase.id}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                  onClick={() => setActivePhase(idx)}
                  className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activePhase === idx
                      ? "bg-gradient-to-br from-accent to-accent-secondary text-white scale-110 shadow-lg shadow-accent/30"
                      : "bg-surface-elevated border-2 border-border text-text-muted hover:border-accent/50 hover:text-accent-light"
                  }`}
                >
                  <span className="text-sm font-bold">{phase.number}</span>
                </m.button>
              ))}
            </div>

            {/* Phase labels - Desktop */}
            <div className="flex justify-between max-w-5xl mx-auto mt-4">
              {processPhases.map((phase, idx) => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(idx)}
                  className={`text-center transition-colors duration-300 ${
                    activePhase === idx
                      ? "text-accent-light"
                      : "text-text-muted hover:text-text-secondary"
                  }`}
                >
                  <span className="text-sm font-semibold">{phase.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Phase Cards Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {processPhases.map((phase, idx) => (
              <div key={phase.id} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <ProcessPhaseCard
                  phase={phase}
                  index={idx}
                  isActive={activePhase === idx}
                  onClick={() => setActivePhase(idx)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          DIFFERENTIATORS SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-surface overflow-hidden">
        {/* Diagonal lines pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'%3e%3cpath d='M0 40L40 0' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Ambient glow */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              What Makes Us Different
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              Not Your Typical <span className="text-highlight">Dev Shop.</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
              We built Procedure because we were tired of how agencies work.
              Here&apos;s what we do differently.
            </p>
          </m.div>

          {/* Differentiators Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {differentiators.map((diff, idx) => (
              <DifferentiatorCard key={diff.id} data={diff} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PRINCIPLES SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
        {/* Cross pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3e%3cpath d='M16 8v16M8 16h16' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Our Principles
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              The beliefs that{" "}
              <span className="text-highlight">guide our work.</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
              These are not just words on a wall. They are the principles we use
              to make decisions every day.
            </p>
          </m.div>

          {/* Principles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          OUTCOMES SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-surface overflow-hidden">
        {/* Diamond pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3e%3cpath d='M18 4L32 18L18 32L4 18Z' stroke='%2314B8A6' stroke-width='0.5' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              What You Can Expect
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              Outcomes, <span className="text-highlight">Not Outputs.</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
              We measure success by what ships and the impact it creates, not by
              hours logged or tickets closed.
            </p>
          </m.div>

          {/* Large Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {outcomes.map((outcome, idx) => (
              <m.div
                key={outcome.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-surface-elevated border border-border hover:border-accent/40 transition-all duration-300 text-center h-full group-hover:shadow-lg group-hover:shadow-black/10">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl sm:text-6xl font-bold text-highlight">
                      {outcome.stat}
                    </span>
                    <span className="text-2xl font-bold text-accent-light">
                      {outcome.unit}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {outcome.label}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {outcome.description}
                  </p>
                </div>
              </m.div>
            ))}
          </div>

          {/* Testimonial */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 sm:p-12 rounded-2xl bg-surface-elevated border border-border">
              {/* Quote mark */}
              <svg
                className="absolute top-8 left-8 w-12 h-12 text-accent/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="relative text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 pl-0 sm:pl-8">
                &quot;What started with one engineer nearly three years ago has grown into a team of five, each fully owning their deliverables. They&apos;ve taken on critical core roles across teams. We&apos;re extremely pleased with the commitment and engagement they bring.&quot;
              </blockquote>

              <div className="flex items-center gap-4 pl-0 sm:pl-8">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-elevated border border-border">
                  <Image
                    src="/testimonials/shrivatsa.jpg"
                    alt="Shrivatsa Swadi"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">
                    Shrivatsa Swadi
                  </div>
                  <div className="text-sm text-text-secondary">
                    Director of Engineering, Setu
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5" />

        {/* Animated orbs */}
        <m.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]"
        />
        <m.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-secondary/10 rounded-full blur-[120px]"
        />

        {/* Diamond pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3e%3cpath d='M18 4L32 18L18 32L4 18Z' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to Build
              <br />
              <span className="text-highlight">Something Real?</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Skip the months of discovery and the endless proposal cycles.
              Let&apos;s have an honest conversation about what you&apos;re
              building and how we can help. If we&apos;re not the right fit,
              we&apos;ll tell you.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <CalButton className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25 cursor-pointer">
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
              </CalButton>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent hover:text-accent-light transition-all duration-200"
              >
                See How We&apos;ve Helped Others
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
                Secure SDLC
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
          </m.div>
        </div>
      </section>
    </main>
    </LazyMotion>
  );
}
