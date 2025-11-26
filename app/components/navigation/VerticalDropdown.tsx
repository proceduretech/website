"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, verticals, Vertical } from "../../context/ThemeContext";

const verticalOrder: Vertical[] = ["ai-engineering", "software", "design", "ai-security"];

export function VerticalDropdown() {
  const { activeVertical, setActiveVertical, config } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (vertical: Vertical) => {
    setActiveVertical(vertical);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white"
        style={{ backgroundColor: config.accentColor }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{verticals[activeVertical].shortLabel}</span>
        <motion.svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 mt-2 min-w-[180px] -translate-x-1/2 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-lg"
          >
            {verticalOrder.map((id) => {
              const vertical = verticals[id];
              const isActive = activeVertical === id;

              return (
                <motion.button
                  key={id}
                  onClick={() => handleSelect(id)}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-[var(--border)]"
                  whileTap={{ scale: 0.98 }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: vertical.accentColor }}
                  />
                  <span
                    className={`font-medium ${
                      isActive ? "text-[var(--foreground)]" : "text-[var(--muted)]"
                    }`}
                  >
                    {vertical.shortLabel}
                  </span>
                  {isActive && (
                    <svg
                      className="ml-auto h-4 w-4"
                      style={{ color: config.accentColor }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
