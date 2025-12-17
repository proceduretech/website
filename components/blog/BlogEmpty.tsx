"use client";

import { motion } from "framer-motion";

interface BlogEmptyProps {
  onReset: () => void;
}

export function BlogEmpty({ onReset }: BlogEmptyProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-16"
    >
      <div className="w-16 h-16 rounded-2xl bg-surface-elevated border border-border flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-8 h-8 text-text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-text-primary mb-2">
        No articles found
      </h3>
      <p className="text-text-secondary mb-6">
        Try adjusting your filters or search terms.
      </p>

      <button
        onClick={onReset}
        className="px-6 py-3 text-sm font-semibold text-accent-light bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent/20 transition-colors"
      >
        Clear all filters
      </button>
    </motion.div>
  );
}
