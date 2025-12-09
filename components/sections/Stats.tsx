"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "AI Systems Deployed" },
  { value: "10x", label: "Faster Time to Production" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Forward-Deployed Support" },
];

export function Stats() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
