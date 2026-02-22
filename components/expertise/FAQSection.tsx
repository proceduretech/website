"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

export function FAQSection({
  title = "Frequently Asked Questions",
  faqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-base">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
            {title}
          </h2>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "rounded-xl border overflow-hidden transition-colors",
                "bg-surface-elevated",
                openIndex === index ? "border-slate-600" : "border-border",
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span
                  className={cn(
                    "font-medium transition-colors duration-200",
                    openIndex === index
                      ? "text-text-primary"
                      : "text-text-secondary",
                  )}
                >
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center ml-4">
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      openIndex === index
                        ? "text-text-primary rotate-180"
                        : "text-text-muted",
                    )}
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
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-border mb-4" />
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
