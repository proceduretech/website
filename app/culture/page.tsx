"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Core values data
const values = [
  {
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
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
        />
      </svg>
    ),
    title: "Craftsmanship Over Speed",
    description:
      "We take pride in work that will still be running flawlessly five years from now. Every architecture decision, every code review, every deployment reflects our belief that enterprise systems deserve production-grade engineering from day one.",
    featured: true,
    stats: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "50+", label: "Systems Shipped" },
    ],
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
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
    title: "Ownership Without Ego",
    description:
      "Senior engineers here own their projects end-to-end—from initial architecture through production deployment. That ownership comes with real authority to make decisions and real accountability for outcomes.",
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
    title: "Intellectual Honesty",
    description:
      "We tell clients the truth, even when it's not what they want to hear. We acknowledge mistakes quickly and learn from them openly. There's no room for politics or posturing when you're building AI infrastructure that enterprises depend on.",
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
    title: "Compounding Growth",
    description:
      "AI evolves faster than any technology we've seen. We invest heavily in learning because engineers who stop growing become liabilities. Weekly knowledge shares, dedicated learning time, and access to every major AI platform.",
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
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Client Outcomes Over Billable Hours",
    description:
      "We succeed when our clients succeed. That means optimizing for shipping production systems that deliver measurable business impact—not for maximizing hours logged. Our longest partnerships began with projects that finished ahead of schedule.",
    tall: true,
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
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Trust Over Process",
    description:
      "We hire experienced professionals and trust them to manage their own work. No micromanagement, no permission-seeking, no mandatory status meetings that interrupt deep work. Clear goals, transparent expectations, and the autonomy to execute.",
    wide: true,
  },
];

// Life at Procedure items
const lifeItems = [
  {
    category: "Deep Work",
    title: "Focus Time by Default",
    description:
      "Our communication defaults to asynchronous. Meetings exist to make decisions, not to share updates that belong in documentation.",
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    category: "Global Team",
    title: "Distributed by Design",
    description:
      "Engineers across 4 continents, connected by shared standards rather than shared time zones. We built our culture for senior engineers who do their best work with long blocks of uninterrupted time.",
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
  },
  {
    category: "Real Impact",
    title: "Problems Worth Solving",
    description:
      "Our clients come to us because their internal teams couldn't solve what they needed to solve. That means complex AI systems at scale, novel architectures, and genuine technical challenges.",
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
  },
  {
    category: "Partnership",
    title: "Embedded, Not Outsourced",
    description:
      "Every engineer works directly with clients—attending their standups, understanding their codebase, and becoming a genuine extension of their team.",
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
];

// Team stats
const teamStats = [
  { value: "8+", label: "Years Avg Experience" },
  { value: "15+", label: "Countries" },
  { value: "100%", label: "Senior Engineers" },
  { value: "4", label: "Continents" },
];

// Team members (sample)
const teamMembers = [
  { name: "Alex", team: "AI Engineering", initials: "AK" },
  { name: "Maya", team: "Cloud", initials: "MR" },
  { name: "Jordan", team: "AI Engineering", initials: "JC" },
  { name: "Sam", team: "Product", initials: "SP" },
  { name: "Kai", team: "Architecture", initials: "KT" },
  { name: "Riley", team: "AI Engineering", initials: "RL" },
  { name: "Quinn", team: "Cloud", initials: "QM" },
  { name: "Morgan", team: "AI Engineering", initials: "MH" },
  { name: "Avery", team: "Product", initials: "AB" },
  { name: "Blake", team: "Architecture", initials: "BD" },
  { name: "Casey", team: "AI Engineering", initials: "CW" },
  { name: "Drew", team: "Cloud", initials: "DF" },
];

const teamColors: Record<string, string> = {
  "AI Engineering": "bg-accent-teal",
  Cloud: "bg-purple-500",
  Product: "bg-accent-blue",
  Architecture: "bg-amber-500",
};

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
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Top-Tier Compensation",
    description:
      "Above-market salaries benchmarked against FAANG. Plus equity participation for all full-time engineers.",
    highlight: "90th percentile",
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
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    title: "Learning Budget",
    description:
      "Annual stipend for courses, conferences, books, and certifications. Never stop growing.",
    highlight: "$3,000/year",
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
    title: "Health & Wellness",
    description:
      "Full medical, dental, vision coverage plus dedicated wellness stipend for gym, therapy, or whatever keeps you sharp.",
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
    title: "Flexible PTO",
    description:
      "Flexible time off with a minimum of four weeks strongly encouraged annually. We measure output, not hours.",
  },
];

// Team member card component
function TeamMemberCard({
  member,
  delay,
}: {
  member: (typeof teamMembers)[0];
  delay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-elevated border border-border group-hover:border-accent-teal/50 transition-all duration-300">
        <div className="w-full h-full bg-gradient-to-br from-accent-teal/30 to-accent-blue/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <span className="text-2xl font-bold text-white/90">
            {member.initials}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Name badge */}
        <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm font-semibold text-text-primary truncate">
            {member.name}
          </p>
          <p className="text-xs text-accent-teal-light">{member.team}</p>
        </div>

        {/* Team indicator dot */}
        <div
          className={`absolute top-2 right-2 w-3 h-3 rounded-full ${teamColors[member.team]} border-2 border-surface-elevated`}
        />
      </div>

      {/* Tooltip on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 rounded-lg bg-surface-elevated border border-border shadow-2xl whitespace-nowrap"
          >
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <span
                className={`w-2 h-2 rounded-full ${teamColors[member.team]}`}
              />
              {member.team} Team
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CulturePage() {
  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-surface via-base to-base" />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-accent-teal/6 rounded-full blur-[150px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.06, 0.1, 0.06],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent-blue/8 rounded-full blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.08, 0.04, 0.08],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23E5E7EB'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
          />

          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-teal/5 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              <span className="text-sm font-medium text-accent-teal-light tracking-wide">
                Our Culture
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-6"
            >
              Where Elite Engineers
              <br />
              <span className="bg-gradient-to-r from-accent-teal-light via-accent-blue-light to-accent-teal-light bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                Build What Matters
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl"
            >
              We created Procedure for engineers who refuse to compromise—on
              technical excellence, on the problems they solve, or on the people
              they build alongside. This is a place where senior talent ships
              production AI systems that transform how enterprises operate.
            </motion.p>

            {/* Dual CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/careers"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent-teal to-accent-blue rounded-xl hover:from-accent-teal-light hover:to-accent-blue-light transition-all duration-200 shadow-lg shadow-accent-teal/20"
              >
                View Open Roles
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
              <a
                href="#values"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent-teal hover:bg-accent-teal/10 transition-all duration-200"
              >
                Explore Our Values
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text-muted rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* ============================================
          CORE VALUES SECTION - Bento Grid
          ============================================ */}
      <section
        id="values"
        className="relative py-24 sm:py-32 bg-surface overflow-hidden scroll-mt-24"
      >
        {/* Hexagon pattern background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 49' width='28' height='49'%3e%3cpath fill='none' stroke='%23E5E7EB' d='M14 0L0 12v24l14 12 14-12V12L14 0z'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Principles That Guide
              <br />
              <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                Every Decision
              </span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              These aren&apos;t aspirational values on a wall. They&apos;re the
              operating principles we use to make hard choices every day.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Value 1 - Large featured card */}
            <motion.div
              className="md:col-span-7 md:row-span-2 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-accent-teal/10 to-accent-blue/5 border border-accent-teal/20 overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-teal/20 rounded-full blur-3xl" />

                {/* Large icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent-teal/20 border border-accent-teal/30 flex items-center justify-center text-accent-teal-light mb-6">
                  {values[0].icon}
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                  {values[0].title}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
                  {values[0].description}
                </p>

                {/* Supporting stats */}
                {values[0].stats && (
                  <div className="flex items-center gap-6 pt-6 border-t border-border/50">
                    {values[0].stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-3xl font-bold text-accent-teal-light">
                          {stat.value}
                        </div>
                        <div className="text-sm text-text-muted">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Remaining values */}
            {values.slice(1).map((value, idx) => (
              <motion.div
                key={value.title}
                className={`group ${
                  value.tall
                    ? "md:col-span-5 md:row-span-2"
                    : value.wide
                      ? "md:col-span-7"
                      : "md:col-span-5"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                <div className="relative h-full p-6 lg:p-8 rounded-3xl bg-surface-elevated border border-border group-hover:border-accent-teal/40 transition-all duration-300">
                  {/* Icon container */}
                  <div className="w-12 h-12 rounded-xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center mb-5 text-accent-teal-light group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-teal-light transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          LIFE AT PROCEDURE SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-base overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3e%3ccircle cx='2' cy='2' r='1' fill='%23E5E7EB'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              Life at Procedure
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Built for Deep Work
              <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                {" "}
                and Meaning
              </span>
            </h2>
            <p className="text-lg text-text-secondary">
              Remote-first doesn&apos;t mean disconnected. Here&apos;s what
              building enterprise AI together actually looks like.
            </p>
          </motion.div>

          {/* Feature cards grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {lifeItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                <div className="relative p-8 rounded-2xl bg-surface-elevated border border-border group-hover:border-accent-teal/30 transition-all duration-300 h-full">
                  <span className="text-xs font-medium text-accent-teal-light uppercase tracking-wider mb-3 block">
                    {item.category}
                  </span>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center text-accent-teal-light flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {item.description}
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
          TEAM SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-surface overflow-hidden">
        {/* Plus pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3e%3cpath d='M16 8v16M8 16h16' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              The Team
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Engineers Who
              <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                {" "}
                Ship
              </span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              100+ senior engineers across 4 continents, united by a shared
              obsession with building production AI that works.
            </p>
          </motion.div>

          {/* Team stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-16 py-8 border-y border-border"
          >
            {teamStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Team grid - offset rows */}
          <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:-ml-8">
              {teamMembers.slice(0, 6).map((member, idx) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  delay={idx * 0.05}
                />
              ))}
            </div>

            {/* Row 2 - offset */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:ml-8">
              {teamMembers.slice(6, 12).map((member, idx) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  delay={idx * 0.05 + 0.3}
                />
              ))}
            </div>
          </div>

          {/* Join us teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-surface-elevated border border-border">
              <span className="text-text-secondary">Your face here?</span>
              <Link
                href="/careers"
                className="text-accent-teal-light font-medium hover:underline"
              >
                View open roles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          BENEFITS SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-base overflow-hidden">
        {/* Abstract decorative shape */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full border border-accent-teal/10 opacity-30" />
        <div className="absolute top-1/3 -right-24 w-72 h-72 rounded-full border border-accent-blue/10 opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header - left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              Benefits & Perks
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              More Than a
              <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                {" "}
                Paycheck
              </span>
            </h2>
            <p className="text-lg text-text-secondary">
              We&apos;ve designed a benefits package for senior engineers who
              want meaningful work, continuous growth, and sustainable careers.
            </p>
          </motion.div>

          {/* Benefits layout */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Featured benefit - takes 2 columns */}
            <motion.div
              className="lg:col-span-2 lg:row-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-full p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-accent-teal/15 to-accent-blue/10 border border-accent-teal/30 relative overflow-hidden group">
                {/* Animated background element */}
                <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-accent-teal/20 blur-3xl group-hover:scale-150 transition-transform duration-700" />

                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-teal to-accent-blue flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-white"
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
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                  100% Remote, Globally Distributed
                </h3>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Work from anywhere in the world. Our team spans 4 continents
                  and 12+ time zones. We&apos;ve built our entire culture around
                  asynchronous communication and trust.
                </p>

                {/* Sub-features */}
                <div className="space-y-3 pt-6 border-t border-border/30">
                  {[
                    "No mandatory meetings before 10am your time",
                    "$1,500 annual home office stipend",
                    "Co-working space allowance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-text-secondary"
                    >
                      <svg
                        className="w-5 h-5 text-accent-teal flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Secondary benefits grid */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-6 rounded-2xl bg-surface-elevated border border-border group-hover:border-accent-teal/40 transition-all duration-300">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center mb-4 text-accent-teal-light group-hover:bg-accent-teal/20 transition-colors">
                      {benefit.icon}
                    </div>

                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Highlight stat */}
                    {benefit.highlight && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="text-2xl font-bold text-accent-teal-light">
                          {benefit.highlight}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          JOIN US CTA SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/10 via-base to-accent-blue/10" />

        {/* Animated orbs */}
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-teal/15 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-blue/15 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.15, 0.25],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23E5E7EB'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow with position count */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-border mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              <span className="text-sm font-medium text-text-secondary">
                <span className="text-accent-teal-light font-semibold">
                  6 positions
                </span>{" "}
                currently open
              </span>
            </div>

            {/* Main headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6">
              Ready to Build AI
              <br />
              <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                That Actually Ships?
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
              Join a team of elite engineers working on production AI for the
              world&apos;s most ambitious companies. Remote-first,
              async-friendly, and obsessed with impact.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent-teal to-accent-blue rounded-xl hover:from-accent-teal-light hover:to-accent-blue-light transition-all duration-300 shadow-lg shadow-accent-teal/25 hover:shadow-xl hover:shadow-accent-teal/30 hover:-translate-y-0.5"
              >
                Explore Open Positions
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent-teal/50 hover:bg-accent-teal/5 transition-all duration-300"
              >
                Learn About Procedure
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
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
                <span>SOC 2 Type II Certified</span>
              </div>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent-teal"
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
                <span>100% Remote</span>
              </div>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent-teal"
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
                <span>100+ Engineers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
