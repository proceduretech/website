"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const highlights = [
  {
    title: "SOC 2 Type II",
    description: "Annual audits for security, availability, and confidentiality",
  },
  {
    title: "Data Encryption",
    description: "AES-256 at rest, TLS 1.3 in transit",
  },
  {
    title: "GDPR Ready",
    description: "Full compliance with EU data protection",
  },
  {
    title: "Access Control",
    description: "RBAC with audit logging and regular reviews",
  },
];

export function SecuritySection() {
  const { config } = useTheme();

  return (
    <section id="security" className="relative overflow-hidden py-24 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="geo-grid opacity-30" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.p
          className="mb-4 text-xs font-medium uppercase tracking-widest"
          animate={{ color: config.accentColor }}
          transition={{ duration: 0.3 }}
        >
          Security & Compliance
        </motion.p>

        <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
          Built on trust
        </h2>

        <p className="mb-12 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
          Security isn't an afterthought — it's foundational to how we work.
          Enterprise-grade practices to protect your data.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5"
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.1)` }}
              >
                <svg
                  className="h-5 w-5"
                  style={{ color: config.accentColor }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-1 font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--muted)]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
