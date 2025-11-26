"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, verticals, Vertical } from "../context/ThemeContext";
import { useScroll } from "../context/ScrollContext";
import { LogoTicker } from "./LogoTicker";
import { CalButton } from "./CalButton";

const verticalOrder: Vertical[] = ["ai-engineering", "software", "design", "ai-security"];

export function Hero() {
  const { activeVertical, setActiveVertical, config } = useTheme();
  const { setIsHeroVisible } = useScroll();
  const heroRef = useRef<HTMLElement>(null);

  // Intersection Observer to track hero visibility
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Consider hero "visible" if more than 20% is in view
        setIsHeroVisible(entry.intersectionRatio > 0.2);
      },
      {
        threshold: [0, 0.2, 0.5, 1],
        rootMargin: "-64px 0px 0px 0px", // Account for fixed header
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.unobserve(heroElement);
    };
  }, [setIsHeroVisible]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden px-4 pt-20 sm:px-6"
    >
      {/* Geometric background patterns - different per vertical */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeVertical === "ai-engineering" && (
            <motion.div
              key="ai-eng-geo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Neural network / connected nodes pattern - with floating */}
              <div
                className="animate-float absolute right-[10%] top-[15%] h-5 w-5 rounded-full"
                style={{
                  backgroundColor: `rgba(${config.accentColorRgb}, 0.3)`,
                  boxShadow: `0 0 20px rgba(${config.accentColorRgb}, 0.2)`
                }}
              />
              <div
                className="animate-float-slow absolute right-[25%] top-[25%] h-4 w-4 rounded-full"
                style={{
                  backgroundColor: `rgba(${config.accentColorRgb}, 0.25)`,
                  animationDelay: '1s'
                }}
              />
              <div
                className="animate-float absolute right-[15%] top-[35%] h-6 w-6 rounded-full"
                style={{
                  backgroundColor: `rgba(${config.accentColorRgb}, 0.2)`,
                  boxShadow: `0 0 30px rgba(${config.accentColorRgb}, 0.15)`,
                  animationDelay: '2s'
                }}
              />
              <div
                className="animate-float-slow absolute left-[8%] bottom-[20%] h-5 w-5 rounded-full"
                style={{
                  backgroundColor: `rgba(${config.accentColorRgb}, 0.25)`,
                  boxShadow: `0 0 25px rgba(${config.accentColorRgb}, 0.15)`
                }}
              />
              <div
                className="animate-float absolute left-[15%] bottom-[35%] h-4 w-4 rounded-full"
                style={{
                  backgroundColor: `rgba(${config.accentColorRgb}, 0.2)`,
                  animationDelay: '1.5s'
                }}
              />
              {/* Connecting lines */}
              <svg className="absolute inset-0 h-full w-full">
                <line
                  x1="90%" y1="17%" x2="75%" y2="27%"
                  stroke={`rgba(${config.accentColorRgb}, 0.12)`}
                  strokeWidth="1.5"
                />
                <line
                  x1="75%" y1="27%" x2="85%" y2="37%"
                  stroke={`rgba(${config.accentColorRgb}, 0.12)`}
                  strokeWidth="1.5"
                />
                <line
                  x1="90%" y1="17%" x2="85%" y2="37%"
                  stroke={`rgba(${config.accentColorRgb}, 0.08)`}
                  strokeWidth="1"
                />
                <line
                  x1="8%" y1="80%" x2="15%" y2="65%"
                  stroke={`rgba(${config.accentColorRgb}, 0.12)`}
                  strokeWidth="1.5"
                />
              </svg>
              {/* Large decorative circle with glow */}
              <div
                className="animate-pulse-glow absolute -right-32 top-[20%] h-[450px] w-[450px] rounded-full border-2"
                style={{
                  borderColor: `rgba(${config.accentColorRgb}, 0.1)`,
                  boxShadow: `inset 0 0 60px rgba(${config.accentColorRgb}, 0.03)`
                }}
              />
            </motion.div>
          )}

          {activeVertical === "software" && (
            <motion.div
              key="software-geo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Code brackets / terminal pattern */}
              <div
                className="absolute right-[8%] top-[20%] text-[120px] font-light leading-none"
                style={{ color: `rgba(${config.accentColorRgb}, 0.08)` }}
              >
                {"{"}
              </div>
              <div
                className="absolute right-[8%] top-[45%] text-[120px] font-light leading-none"
                style={{ color: `rgba(${config.accentColorRgb}, 0.08)` }}
              >
                {"}"}
              </div>
              <div
                className="absolute left-[5%] bottom-[25%] text-[80px] font-light leading-none"
                style={{ color: `rgba(${config.accentColorRgb}, 0.06)` }}
              >
                {"</>"}
              </div>
              {/* Horizontal lines like code */}
              <div
                className="absolute left-[12%] top-[30%] h-[2px] w-[80px]"
                style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.1)` }}
              />
              <div
                className="absolute left-[12%] top-[34%] h-[2px] w-[120px]"
                style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.08)` }}
              />
              <div
                className="absolute left-[12%] top-[38%] h-[2px] w-[60px]"
                style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.06)` }}
              />
            </motion.div>
          )}

          {activeVertical === "design" && (
            <motion.div
              key="design-geo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Overlapping shapes - creative/design feel */}
              <div
                className="absolute right-[10%] top-[15%] h-[200px] w-[200px] rounded-full border-2"
                style={{ borderColor: `rgba(${config.accentColorRgb}, 0.12)` }}
              />
              <div
                className="absolute right-[18%] top-[22%] h-[150px] w-[150px] rounded-full"
                style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.05)` }}
              />
              <div
                className="absolute left-[5%] bottom-[15%] h-[180px] w-[180px] rotate-45 border"
                style={{ borderColor: `rgba(${config.accentColorRgb}, 0.1)` }}
              />
              <div
                className="absolute left-[10%] bottom-[20%] h-[100px] w-[100px] rotate-12"
                style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.04)` }}
              />
              {/* Bezier curve hint */}
              <svg className="absolute right-[5%] bottom-[30%] h-[150px] w-[150px]">
                <path
                  d="M 10 140 Q 75 10 140 80"
                  fill="none"
                  stroke={`rgba(${config.accentColorRgb}, 0.15)`}
                  strokeWidth="2"
                />
                <circle cx="10" cy="140" r="4" fill={`rgba(${config.accentColorRgb}, 0.2)`} />
                <circle cx="140" cy="80" r="4" fill={`rgba(${config.accentColorRgb}, 0.2)`} />
              </svg>
            </motion.div>
          )}

          {activeVertical === "ai-security" && (
            <motion.div
              key="ai-sec-geo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Shield / hexagon security pattern */}
              <svg className="absolute right-[8%] top-[15%] h-[200px] w-[180px]">
                <polygon
                  points="90,10 170,50 170,130 90,170 10,130 10,50"
                  fill="none"
                  stroke={`rgba(${config.accentColorRgb}, 0.12)`}
                  strokeWidth="2"
                />
                <polygon
                  points="90,40 140,65 140,115 90,140 40,115 40,65"
                  fill={`rgba(${config.accentColorRgb}, 0.03)`}
                  stroke={`rgba(${config.accentColorRgb}, 0.08)`}
                  strokeWidth="1"
                />
              </svg>
              {/* Lock icon hint */}
              <div
                className="absolute left-[8%] bottom-[20%] h-[60px] w-[50px] rounded-t-full border-2"
                style={{ borderColor: `rgba(${config.accentColorRgb}, 0.1)` }}
              />
              <div
                className="absolute left-[6%] bottom-[10%] h-[50px] w-[70px] rounded-lg"
                style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.06)` }}
              />
              {/* Scanning lines */}
              <div
                className="absolute right-[30%] top-[60%] h-[1px] w-[100px]"
                style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.15)` }}
              />
              <div
                className="absolute right-[35%] top-[65%] h-[1px] w-[80px]"
                style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.1)` }}
              />
              <div
                className="absolute right-[32%] top-[70%] h-[1px] w-[60px]"
                style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.08)` }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle gradient overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(${config.accentColorRgb}, 0.06), transparent)`,
        }}
        animate={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(${config.accentColorRgb}, 0.06), transparent)`,
        }}
        transition={{ duration: 0.7 }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center">
        {/* Anchor line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]"
        >
          Four disciplines. One partner.
        </motion.p>

        {/* Dynamic main headline with AnimatePresence */}
        <AnimatePresence mode="popLayout">
          <motion.h1
            key={`tagline-${activeVertical}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-10 text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
            style={{ color: config.accentColor }}
          >
            {config.tagline}
          </motion.h1>
        </AnimatePresence>

        {/* Vertical toggle pills */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {verticalOrder.map((id) => {
            const vertical = verticals[id];
            const isActive = activeVertical === id;

            return (
              <motion.button
                key={id}
                onClick={() => setActiveVertical(id)}
                className="group relative cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium"
                style={{
                  color: isActive ? "#ffffff" : "var(--muted)",
                  backgroundColor: isActive ? vertical.accentColor : "transparent",
                  border: `1px solid ${isActive ? vertical.accentColor : "var(--border)"}`,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {vertical.label}
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic description with AnimatePresence */}
        <AnimatePresence mode="popLayout">
          <motion.p
            key={`desc-${activeVertical}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
            className="mx-auto mb-14 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl lg:text-[1.35rem]"
          >
            {config.description}
          </motion.p>
        </AnimatePresence>

        {/* Logo Ticker - inside hero, above CTAs */}
        <div className="mb-14">
          <LogoTicker />
        </div>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CalButton />
          <motion.a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-7 py-4 text-base font-medium text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)] hover:shadow-md"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Explore services
            <svg
              className="h-4 w-4 opacity-60 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div
          className="h-10 w-6 rounded-full border-2 p-1"
          style={{ borderColor: `rgba(${config.accentColorRgb}, 0.3)` }}
        >
          <motion.div
            className="mx-auto h-2 w-1 rounded-full"
            style={{ backgroundColor: config.accentColor }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
