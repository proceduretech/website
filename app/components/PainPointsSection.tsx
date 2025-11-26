"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { painPointsContent } from "../data/verticalContent";

export function PainPointsSection() {
  const { activeVertical, config } = useTheme();
  const content = painPointsContent[activeVertical];

  return (
    <section id="pain-points" className="relative overflow-hidden py-24 px-6">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="geo-dots opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Animated content wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVertical}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            {/* Headline */}
            <h2 className="mb-14 text-2xl font-semibold tracking-tight text-[var(--muted)] md:text-3xl lg:text-4xl">
              {content.headline}
            </h2>

            {/* Pain points */}
            <motion.div
              className="grid gap-5 md:grid-cols-2 lg:gap-6"
              initial="initial"
              animate="animate"
              variants={{
                initial: {},
                animate: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.15,
                  },
                },
              }}
            >
              {content.painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4 },
                    },
                  }}
                  className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* Accent stripe */}
                  <div
                    className="absolute left-0 top-0 h-full w-1"
                    style={{ backgroundColor: config.accentColor }}
                  />

                  {/* Quote icon */}
                  <div
                    className="mb-2 text-xl opacity-30"
                    style={{ color: config.accentColor }}
                  >
                    &ldquo;
                  </div>

                  <p className="pl-1 text-base leading-relaxed text-[var(--foreground)]">
                    {point}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
