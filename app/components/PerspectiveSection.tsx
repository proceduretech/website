"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { perspectiveContent } from "../data/verticalContent";

export function PerspectiveSection() {
  const { activeVertical, config } = useTheme();
  const content = perspectiveContent[activeVertical];

  return (
    <section id="perspective" className="relative overflow-hidden py-24 px-6">
      {/* Geometric background - dots pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="geo-dots" />

        {/* Accent circle */}
        <motion.div
          className="absolute -right-20 top-1/3 h-[300px] w-[300px] rounded-full border"
          style={{ borderColor: `rgba(${config.accentColorRgb}, 0.1)` }}
          animate={{ borderColor: `rgba(${config.accentColorRgb}, 0.1)` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Subtle gradient overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: `linear-gradient(180deg, transparent 0%, rgba(${config.accentColorRgb}, 0.02) 50%, transparent 100%)`,
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Section label */}
        <motion.p
          className="mb-4 text-xs font-medium uppercase tracking-widest"
          animate={{ color: config.accentColor }}
          transition={{ duration: 0.3 }}
        >
          Our Perspective
        </motion.p>

        {/* Animated content wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVertical}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Headline */}
            <h2 className="mb-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
              {content.headline}
            </h2>

            {/* Subheadline */}
            <p className="mb-16 text-lg text-[var(--muted)] md:text-xl">
              {content.subheadline}
            </p>

            {/* Points grid */}
            <motion.div
              className="grid gap-8 md:grid-cols-3"
              initial="initial"
              animate="animate"
              variants={{
                initial: {},
                animate: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {content.points.map((point, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                  className="group relative"
                >
                  {/* Accent bar */}
                  <motion.div
                    className="mb-6 h-1 w-12 rounded-full"
                    style={{ backgroundColor: config.accentColor }}
                    whileHover={{ width: 64 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Problem statement */}
                  <p className="mb-4 text-base font-medium leading-relaxed text-[var(--foreground)]">
                    {point.problem}
                  </p>

                  {/* Insight/solution */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: config.accentColor }}
                  >
                    {point.insight}
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
