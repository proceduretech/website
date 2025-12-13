"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Work beliefs from the team
const workBeliefs = [
  {
    number: "01",
    title: "Work is Only One Part of Your Life",
    description:
      "We treat it as such. Your career matters, but so does everything else that makes you who you are.",
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
  },
  {
    number: "02",
    title: "Weekends Are Sacred",
    description:
      "Not to be messed around with. You won't be asked to work on one. Ever.",
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
  },
  {
    number: "03",
    title: "Commuting is a Waste of Time",
    description:
      "Working from home saves you additional time. Go crazy with it. Build a life around your work, not the other way around.",
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
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Side Gigs Are Welcome",
    description:
      "We believe there are multiple avenues to learn and grow. So why restrict it only to work?",
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
    number: "05",
    title: "Asynchronous by Default",
    description:
      "Synchronous communication is expensive, so we default to writing docs and literature to enable async communication.",
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
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Good Things Come in Pairs",
    description:
      "Errors get halved. Productivity, ideas, and fun get doubled. Learning gets accelerated exponentially.",
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
    number: "07",
    title: "Learning from Mistakes",
    description:
      "If you are not making mistakes and learning from them, you are not growing. We celebrate the lessons, not just the wins.",
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

// Principles that shape Procedure
const principles = [
  {
    title: "Intentional Craft",
    description:
      "We don't rush the details. Every build, from architecture to microcopy, reflects care, context, and the people behind it. Good work moves fast when it's done with intention.",
  },
  {
    title: "Continuous Learning",
    description:
      "There's always something new to explore - a tool, a mindset, a mistake that teaches. We view curiosity as a skill and sharing as an integral part of our job.",
  },
  {
    title: "Users First",
    description:
      "Our compass is simple: make it useful, make it clear. We design for the person on the other side of the screen - not metrics, not trends.",
  },
  {
    title: "Honest Conversations",
    description:
      "We keep it real, even when it's hard. Feedback isn't about being right - it's about making things better together. Respect and candor travel in both directions.",
  },
  {
    title: "Zero Politics",
    description:
      "We've got no room for ego or noise. Transparency, trust, and shared intent keep our teams aligned and our focus on what actually matters - the work.",
  },
  {
    title: "Action Over Perfection",
    description:
      "We'd rather ship and improve than wait for perfect. Progress comes from trying, testing, and refining - momentum over hesitation.",
  },
  {
    title: "Ownership & Autonomy",
    description:
      "When you build something here, it's yours to shape, improve, and stand behind. We trust people to make good calls and back them with accountability.",
  },
  {
    title: "Context Over Communication",
    description:
      "We believe clarity beats volume. The more context everyone has, the stronger the collaboration - no confusion, no crossed wires, just shared understanding.",
  },
];

// Growth programs
const growthPrograms = [
  {
    title: "Extensive Boot Camp",
    description:
      "Get to learn, regardless of your experience, about Data Structures and Algorithms, LLD, HLD, DevOps, frontend, backend and test engineering.",
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
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
    highlight: "All Levels",
  },
  {
    title: "Book Club",
    description:
      "Broaden your horizons by picking up a book every month and have fun doing so. We discuss ideas that go beyond just code.",
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
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    highlight: "Monthly",
  },
  {
    title: "P1 - Half Yearly Tech Conference",
    description:
      "Here's where we explore futuristic themes to keep you informed about what's happening in the tech space outside our office.",
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
    highlight: "Bi-Annual",
  },
  {
    title: "Internal Projects",
    description:
      "Where your craft, experimentation and learning take precedence over deadlines. Try out new technologies and domains without client pressure.",
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
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    highlight: "Ongoing",
  },
];

// Stats
const stats = [
  { value: "Since 2017", label: "Building better systems" },
  { value: "75+", label: "Clients trusted us" },
  { value: "150+", label: "Projects shipped" },
];

export default function CulturePage() {
  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
          <div className="max-w-4xl">
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
              Built for Real Problems.
              <br />
              <span className="text-highlight">Shipped by Real Teams.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-3xl"
            >
              We&apos;re forward-deployed engineers, designers, and thinkers who
              stay close to the problem, not tucked behind layers of process.
              From idea to deploy, we move with intent, learn in the open, and
              keep the &apos;why&apos; visible.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 sm:gap-12 mb-12"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-highlight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/careers"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25"
              >
                Help Shape What Ships
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
                href="#beliefs"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent-teal hover:bg-accent-teal/10 transition-all duration-200"
              >
                How We Work
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
          ORIGIN STORY SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-surface overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-6">
              How It Started
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-8">
              Procedure started as a small crew that just loved making things
              work better, and that hasn&apos;t changed.
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              Today, we&apos;re still experimenting, breaking, fixing, and
              shipping together, because that&apos;s how real products and real
              teams grow. Our team is a mixed bag. Of the smart and the hard
              workers. Of the organised and slightly chaotic. Of the early
              risers and the burners of the midnight oil. We appreciate
              diversity and truly like having differing perspectives in the
              room.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          WORK BELIEFS SECTION
          ============================================ */}
      <section
        id="beliefs"
        className="relative py-24 sm:py-32 bg-base overflow-hidden scroll-mt-24"
      >
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
              Our Beliefs About Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              How We Think
              <span className="text-highlight"> About Work</span>
            </h2>
            <p className="text-lg text-text-secondary">
              These aren&apos;t corporate values on a poster. These are the
              beliefs that guide our daily decisions and how we treat each
              other.
            </p>
          </motion.div>

          {/* Beliefs Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workBeliefs.map((belief, idx) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                <div className="relative p-6 sm:p-8 rounded-2xl bg-surface-elevated border border-border group-hover:border-accent-teal/30 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center text-accent-teal-light flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {belief.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-accent-teal-light mb-2 block">
                        {belief.number}
                      </span>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {belief.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {belief.description}
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
          PRINCIPLES SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-surface overflow-hidden">
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
              The Principles That Shape Procedure
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Values That Keep Us
              <br />
              <span className="text-highlight">Aligned & Real</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The values that keep our teams aligned, our code intentional, and
              our culture authentic.
            </p>
          </motion.div>

          {/* Principles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, idx) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl bg-surface-elevated border border-border group-hover:border-accent-teal/40 transition-all duration-300">
                  {/* Number indicator */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-teal to-accent-blue flex items-center justify-center text-white font-bold text-sm mb-4">
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent-teal-light transition-colors">
                    {principle.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          GROWTH & LEARNING SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-base overflow-hidden">
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
              Growth Requires Investment
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              We Invest in
              <span className="text-highlight"> Growing You</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Apart from work, we continually invest in growing you as a
              professional and a human. Because choosing a mentor is more
              important than choosing a company.
            </p>
          </motion.div>

          {/* Growth Programs Grid */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {growthPrograms.map((program, idx) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 rounded-3xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                <div className="relative p-8 rounded-3xl bg-surface-elevated border border-border group-hover:border-accent-teal/30 transition-all duration-300 h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-teal/20 to-accent-blue/20 border border-accent-teal/30 flex items-center justify-center text-accent-teal-light flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {program.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-text-primary">
                          {program.title}
                        </h3>
                        <span className="px-2 py-0.5 text-xs font-semibold text-accent-teal-light bg-accent-teal/10 border border-accent-teal/20 rounded-full">
                          {program.highlight}
                        </span>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {program.description}
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
          WHAT IT'S LIKE SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-surface overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
                What It&apos;s Like Here
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                A Place for the
                <span className="text-highlight"> Curious</span>
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  We love debating over languages and frameworks and want
                  someone who can bring their opinions to these discussions. We
                  love reading and sharing articles, podcasts, and tech essays.
                </p>
                <p>
                  If you are someone who loves tea or coffee, Marvel or DC,
                  Peterson or Zizek, or even something eclectic, you will feel
                  right at home.
                </p>
                <p>
                  Continuous improvement is at the heart of everything we do at
                  work and outside. We pride ourselves on being early adopters
                  of the latest tools, libraries and frameworks while
                  consistently delivering business value.
                </p>
                <p className="text-text-primary font-medium">
                  People who work with us fall in love with their craft. We have
                  changed the definition of &quot;work&quot; for them.
                </p>
              </div>
            </motion.div>

            {/* Right content - Feature highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                {
                  title: "Trust us, there's never a dull day at work.",
                  description:
                    "Since we are a service company, you will have the advantage of working on a wide gamut of problems, technology & real world-wise.",
                },
                {
                  title: "You'll be involved in all stages of a product lifecycle.",
                  description:
                    "You'll never have to wonder why you are working on something because you'll always know it.",
                },
                {
                  title: "Mentorship that accelerates careers.",
                  description:
                    "Our founders have more than a decade of experience in their respective fields. Ask our ex-employees how it has helped their careers.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-accent-teal/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
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
            {/* Main headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6">
              Come Build
              <br />
              <span className="text-highlight">What&apos;s Next</span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
              Join a team that values autonomy, learning, and thoughtful
              engineering over everything else. We&apos;re growing, and
              we&apos;d love to grow with you.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-cta/25 hover:shadow-xl hover:shadow-cta/30 hover:-translate-y-0.5"
              >
                Help Shape What Ships
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent-teal/50 hover:bg-accent-teal/5 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
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
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Weekends Off</span>
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
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                <span>Continuous Learning</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
