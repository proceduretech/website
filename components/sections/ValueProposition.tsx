"use client";

import { motion } from "framer-motion";

const values = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-accent-teal-light"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
    iconBg: "bg-accent-teal/10",
    hoverBorder: "hover:border-accent-teal/50",
    title: "AI That Ships to Production",
    description:
      "From LLM applications to AI agents, you get production-ready AI systems built on deep engineering excellence. No science projects—real products that scale.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-accent-blue-light"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    iconBg: "bg-accent-blue/10",
    hoverBorder: "hover:border-accent-blue/50",
    title: "Security Built Into AI",
    description:
      "Your AI systems are protected from day one. Prompt injection defense, data leakage prevention, and AI-specific security measures that enterprise teams require.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-accent-teal-light"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    iconBg: "bg-accent-teal/10",
    hoverBorder: "hover:border-accent-teal/50",
    title: "Your AI Team, Extended",
    description:
      "Senior AI engineers embedded directly with your team—same tools, same standups, same commitment to shipping. You get AI capacity without the hiring overhead.",
  },
];

export function ValueProposition() {
  return (
    <section className="relative pt-0 pb-16 sm:pb-24 bg-surface overflow-hidden">
      {/* Gradient transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-base to-surface" />

      {/* Ambient glow - continuation from Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-teal/5 rounded-full blur-[120px]" />
      <div className="absolute top-20 left-1/4 w-[400px] h-[300px] bg-accent-blue/4 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Compact header - feels like continuation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-xs sm:text-sm font-medium text-accent-teal-light uppercase tracking-wider mb-3">
            Why teams choose us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
            AI engineers who build, not consultants who advise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-2xl bg-surface-elevated border border-border ${card.hoverBorder} transition-colors`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-6`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {card.title}
              </h3>
              <p className="text-text-secondary">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust & Security badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-border"
        >
          <p className="text-center text-xs sm:text-sm font-medium text-text-muted uppercase tracking-wider mb-6">
            Enterprise-ready security & compliance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2 text-text-secondary">
              <svg
                className="w-5 h-5 text-accent-teal-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <span className="text-sm font-medium">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <svg
                className="w-5 h-5 text-accent-teal-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <span className="text-sm font-medium">NDA Protected</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <svg
                className="w-5 h-5 text-accent-teal-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <span className="text-sm font-medium">IP Assignment</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <svg
                className="w-5 h-5 text-accent-teal-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
              <span className="text-sm font-medium">Secure Code Practices</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
