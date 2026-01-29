"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "AI Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build production-grade AI systems, from LLM integrations to custom ML models. Work with cutting-edge technology and shape the future of AI applications.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Product Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Ship modern web applications with React, Next.js, and Node.js. Collaborate with AI teams to build intelligent, user-centric products.",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Cloud & DevOps",
    location: "Remote",
    type: "Full-time",
    description:
      "Design and manage cloud infrastructure for AI workloads. Build CI/CD pipelines and Kubernetes deployments that scale effortlessly.",
  },
];

export function Careers() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative py-16 sm:py-24 overflow-hidden bg-surface">
      {/* Hexagon pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48' height='48'%3e%3cpath d='M24 4l18 10v20l-18 10L6 34V14z' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-3 sm:mb-4">
            Join Our Team
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Build the future of AI with us
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We&apos;re looking for talented engineers who are passionate about
            AI and want to work on challenging problems with real impact.
          </p>
        </m.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {jobOpenings.map((job, idx) => (
            <m.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative bg-surface-elevated rounded-2xl p-6 sm:p-8 border border-border hover:border-accent/50 transition-all duration-300"
            >
              {/* Department badge */}
              <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-light bg-accent/10 border border-accent/20 rounded-full mb-4">
                {job.department}
              </span>

              {/* Job title */}
              <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-light transition-colors">
                {job.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {job.description}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-text-muted">
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
              </div>

              {/* Apply link */}
              <Link
                href={`/careers/${job.id}`}
                className="inline-flex items-center gap-2 text-accent-light font-medium text-sm group-hover:text-accent transition-colors"
              >
                View Position
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </m.div>
          ))}
        </div>

        {/* CTA to careers page */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/careers"
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-text-primary bg-surface-elevated border-2 border-border rounded-lg hover:border-accent/50 hover:text-accent-light transition-all duration-200"
          >
            <span>View All Openings</span>
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
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </m.div>
      </div>
    </section>
    </LazyMotion>
  );
}
