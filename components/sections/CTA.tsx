"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative py-16 sm:py-24 bg-zinc-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-sky-500/5" />
      {/* Diamond/rhombus pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3e%3cpath d='M18 4L32 18L18 32L4 18Z' stroke='%23cbd5e1' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-zinc-900 mb-4 sm:mb-6">
          Ready to ship AI?
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
          Let&apos;s talk about your AI initiatives. Our forward-deployed engineers
          can be embedded with your team within weeks, not months.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-600 rounded-lg hover:from-blue-500 hover:to-sky-500 transition-all duration-200 shadow-lg shadow-blue-500/25"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
