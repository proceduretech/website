"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme, verticals, Vertical } from "../context/ThemeContext";
import { useScroll } from "../context/ScrollContext";

const verticalOrder: Vertical[] = ["ai-engineering", "software", "design", "ai-security"];

export function Header() {
  const { activeVertical, setActiveVertical, config } = useTheme();
  const { isHeroVisible } = useScroll();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="text-xl font-semibold tracking-tight">
          procedure
          <motion.span
            animate={{ color: config.accentColor }}
            transition={{ duration: 0.3 }}
          >
            .
          </motion.span>
        </a>

        {/* Vertical toggle - animated visibility based on scroll */}
        <AnimatePresence>
          {!isHeroVisible && (
            <motion.nav
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--background)] p-1"
            >
              {verticalOrder.map((id) => {
                const vertical = verticals[id];
                const isActive = activeVertical === id;

                return (
                  <button
                    key={id}
                    onClick={() => setActiveVertical(id)}
                    className="relative cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300"
                    style={{
                      color: isActive ? vertical.accentColor : "var(--muted)",
                      backgroundColor: isActive
                        ? `rgba(${vertical.accentColorRgb}, 0.1)`
                        : "transparent",
                    }}
                  >
                    {vertical.shortLabel}
                    {isActive && (
                      <motion.span
                        layoutId="header-active-indicator"
                        className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full"
                        style={{ backgroundColor: vertical.accentColor }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* CTA button */}
        <motion.a
          href="mailto:hello@procedure.tech"
          className="rounded-full px-5 py-2 text-sm font-medium text-white"
          animate={{ backgroundColor: config.accentColor }}
          whileHover={{ scale: 1.02, opacity: 0.9 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          Get in touch
        </motion.a>
      </div>
    </header>
  );
}
