"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What AI systems do you build?",
    answer:
      "We build production AI systems including LLM applications, AI agents, RAG systems, and AI-enhanced products. From conversational AI to document processing to intelligent automation—we handle the complete development lifecycle from architecture to secure production deployment.",
  },
  {
    question: "How quickly can you start our AI project?",
    answer:
      "Most AI engagements begin within 2-5 days. We match senior engineers based on your AI requirements and tech stack, then integrate them into your development workflow immediately. No months of discovery—we start building fast.",
  },
  {
    question: "How do you handle AI security?",
    answer:
      "AI security is built into every system we deliver. We implement prompt injection defense, data leakage prevention, access controls, and AI-specific security measures from day one. Your AI systems pass enterprise security review.",
  },
  {
    question: "What makes you different from AI consultancies?",
    answer:
      "Traditional AI consultants deliver slide decks and POCs that never ship. We deliver production AI. Our engineers embed with your team, write code daily, and ship AI systems that work. No handoffs, no knowledge silos—just AI that reaches production.",
  },
  {
    question: "Do you work with enterprise clients?",
    answer:
      "Yes. We partner with companies ranging from funded startups to public enterprises on AI initiatives. Our client retention rate is 98%, with many partnerships lasting 3+ years. We understand enterprise security, compliance, and procurement requirements.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-base">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3e%3ccircle cx='10' cy='10' r='1.5' fill='%23E5E7EB'/%3e%3c/svg%3e")`,
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
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-3 sm:mb-4">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
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
              className="bg-surface-elevated rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-surface transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold text-text-primary pr-4">
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-surface border border-border text-text-secondary">
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
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-text-secondary leading-relaxed">
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
