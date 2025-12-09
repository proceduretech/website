"use client";

import { motion } from "framer-motion";

const values = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconBg: "bg-blue-100",
    hoverBorder: "hover:border-blue-300",
    title: "Build AI Products",
    description: "From LLM applications to custom ML models, we architect and build AI systems that solve real business problems.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    iconBg: "bg-sky-100",
    hoverBorder: "hover:border-sky-300",
    title: "Build with AI",
    description: "We leverage AI to ship faster. Copilot-augmented development, AI-powered testing, and automated code reviews built into our process.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    iconBg: "bg-blue-100",
    hoverBorder: "hover:border-blue-300",
    title: "Forward-Deployed",
    description: "Our engineers work as an extension of your team—same tools, same standups, same commitment to shipping.",
  },
];

export function ValueProposition() {
  return (
    <section className="relative py-16 sm:py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            AI engineering, not AI consulting
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
            We embed senior engineers directly into your team. No slide decks.
            No endless discovery phases. Just production code shipped fast.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-2xl bg-white border border-zinc-200 ${card.hoverBorder} transition-colors shadow-sm`}
            >
              <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-6`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">{card.title}</h3>
              <p className="text-zinc-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
