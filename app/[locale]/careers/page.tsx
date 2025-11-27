"use client";

import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const openPositions = [
  {
    title: "Senior AI Engineer",
    location: "Mumbai / Remote",
    type: "Full-time",
    description: "Build and deploy production AI systems for enterprise clients.",
  },
  {
    title: "Full Stack Engineer",
    location: "Mumbai",
    type: "Full-time",
    description: "Work on modern web applications using React, Node.js, and cloud technologies.",
  },
  {
    title: "Product Designer",
    location: "Mumbai / Remote",
    type: "Full-time",
    description: "Design intuitive user experiences for complex enterprise applications.",
  },
  {
    title: "Security Engineer",
    location: "San Francisco / Remote",
    type: "Full-time",
    description: "Secure AI systems and implement robust security practices for clients.",
  },
];

const values = [
  {
    title: "Engineering Excellence",
    description: "We obsess over code quality, performance, and reliability. Ship fast, but ship right.",
  },
  {
    title: "Client Partnership",
    description: "We embed with our clients, understanding their business deeply to deliver real impact.",
  },
  {
    title: "Continuous Learning",
    description: "The tech landscape evolves quickly. We stay ahead through constant exploration.",
  },
  {
    title: "Remote-First Culture",
    description: "Work from anywhere. We trust our team and optimize for output, not hours.",
  },
];

export default function CareersPage() {
  const { config } = useTheme();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="geo-dots opacity-30" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(${config.accentColorRgb}, 0.06), transparent)`,
            }}
            transition={{ duration: 0.7 }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-medium uppercase tracking-widest"
            style={{ color: config.accentColor }}
          >
            Careers
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl"
          >
            Build the future
            <br />
            <motion.span
              animate={{ color: config.accentColor }}
              transition={{ duration: 0.3 }}
            >
              with us
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-[var(--muted)] md:text-xl"
          >
            Join a team of engineers and designers solving hard problems for ambitious companies.
            Remote-first, impact-driven, and always learning.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="relative mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 text-center text-xs font-medium uppercase tracking-widest"
            style={{ color: config.accentColor }}
          >
            What We Value
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl"
          >
            How we work
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-elevated p-8"
              >
                <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
                  {value.title}
                </h3>
                <p className="text-[var(--muted)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="relative overflow-hidden px-6 py-20">
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{
            background: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(${config.accentColorRgb}, 0.04) 0%, transparent 70%)`,
          }}
          transition={{ duration: 0.5 }}
        />

        <div className="relative mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 text-center text-xs font-medium uppercase tracking-widest"
            style={{ color: config.accentColor }}
          >
            Open Positions
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl"
          >
            Join our team
          </motion.h2>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer rounded-xl border border-[var(--border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lg"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">
                      {position.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)]">{position.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-[var(--muted)]">
                        {position.location}
                      </span>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-[var(--muted)]">
                        {position.type}
                      </span>
                    </div>
                    <svg
                      className="h-5 w-5 text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: config.accentColor }}
          >
            Don&apos;t see a role that fits?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-10 text-lg text-[var(--muted)]"
          >
            We&apos;re always looking for talented people. Send us your resume and tell us what you&apos;re passionate about.
          </motion.p>

          <motion.a
            href="mailto:careers@procedure.tech"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-7 py-4 text-base font-medium text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--foreground)] hover:shadow-md"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Get in touch
            <svg
              className="h-4 w-4 opacity-60 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </div>
      </section>
    </main>
  );
}
