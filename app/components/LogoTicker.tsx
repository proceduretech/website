"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { clientLogos } from "../data/verticalContent";

export function LogoTicker() {
  const { activeVertical, config } = useTheme();
  const logos = clientLogos[activeVertical];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

      {/* Label */}
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
        Trusted by industry leaders
      </p>

      {/* Ticker with AnimatePresence for vertical changes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeVertical}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -50 * logos.length],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex h-10 min-w-[120px] items-center justify-center rounded-lg border border-[var(--border)] bg-white px-5"
              >
                <span
                  className="whitespace-nowrap text-sm font-medium transition-colors duration-300"
                  style={{ color: config.accentColor }}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
