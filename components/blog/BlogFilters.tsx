"use client";

import { motion } from "framer-motion";
import { BlogCategory } from "@/lib/blog-types";

interface BlogFiltersProps {
  categories: BlogCategory[];
  activeCategory: string;
  onCategoryChange: (categorySlug: string) => void;
}

export function BlogFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: BlogFiltersProps) {
  const allCategories = [
    { id: "all", name: "All", slug: "all" },
    ...categories,
  ];

  return (
    <section className="relative py-6 sm:py-8 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop: Centered row */}
        <div className="hidden sm:flex flex-wrap gap-2 justify-center">
          {allCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.slug)}
              className="relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200"
            >
              {activeCategory === category.slug && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-accent-teal/20 border border-accent-teal/30 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeCategory === category.slug
                    ? "text-accent-teal-light"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="relative sm:hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface to-transparent pointer-events-none z-10" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface to-transparent pointer-events-none z-10" />

          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-2 pb-2">
              {allCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.slug)}
                  className={`flex-shrink-0 px-5 py-3 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeCategory === category.slug
                      ? "bg-accent-teal/20 text-accent-teal-light border border-accent-teal/30"
                      : "bg-surface-elevated text-text-secondary border border-border"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
