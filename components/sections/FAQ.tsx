"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is forward-deployed AI engineering?",
    answer:
      "Forward-deployed AI engineering means our senior engineers work directly within your team—using your tools, attending your standups, and shipping code alongside your developers. Unlike traditional consulting, we don't deliver recommendations; we build and deploy production systems.",
  },
  {
    question: "How quickly can you embed engineers with our team?",
    answer:
      "Most engagements begin within 2-4 weeks. We match senior engineers based on your tech stack and AI requirements, then integrate them into your development workflow immediately.",
  },
  {
    question: "What types of AI systems do you build?",
    answer:
      "We build production-grade AI systems including LLM-powered applications, RAG systems, AI agents, custom ML models, and AI-augmented development workflows. Our engineers handle everything from architecture to deployment and MLOps.",
  },
  {
    question: "Do you work with enterprise clients?",
    answer:
      "Yes. We partner with companies ranging from funded startups to public enterprises. Our client retention rate is 98%, with many partnerships lasting 3+ years.",
  },
  {
    question: "How is this different from traditional AI consulting?",
    answer:
      "Traditional consultants deliver slide decks and recommendations. We deliver production code. Our engineers embed with your team, write code daily, and own outcomes alongside your developers. No handoffs, no knowledge silos.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50" />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3e%3ccircle cx='10' cy='10' r='1.5' fill='%23000'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3 sm:mb-4">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-zinc-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-zinc-50 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900 pr-4">
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openIndex === idx ? "rotate-180" : ""
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
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-zinc-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
