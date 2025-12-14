"use client";

import { useState, useMemo } from "react";
import {
  BlogHero,
  BlogFilters,
  BlogFeaturedCard,
  BlogGrid,
  BlogCTA,
} from "@/components/blog";
import { filterPostsByCategory, sortPostsByDate } from "@/lib/blog-utils";
import type { BlogPost, BlogCategory } from "@/lib/blog-types";

interface BlogListingClientProps {
  blogPosts: BlogPost[];
  categories: BlogCategory[];
  featuredPosts: BlogPost[];
}

export function BlogListingClient({
  blogPosts,
  categories,
  featuredPosts,
}: BlogListingClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    const filtered = filterPostsByCategory(blogPosts, activeCategory);
    return sortPostsByDate(filtered);
  }, [blogPosts, activeCategory]);

  // Get non-featured posts for the grid
  const gridPosts = useMemo(() => {
    return filteredPosts.filter((post) => !post.featured);
  }, [filteredPosts]);

  // Show featured section only when "all" is selected
  const showFeatured = activeCategory === "all" && featuredPosts.length > 0;
  const featuredPost = featuredPosts[0];

  const handleResetFilters = () => {
    setActiveCategory("all");
  };

  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* Hero Section */}
      <BlogHero />

      {/* Filters Section */}
      <BlogFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Featured Post Section */}
      {showFeatured && featuredPost && (
        <section className="relative py-12 sm:py-16 bg-base">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-accent-teal-light"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-text-primary">
                Editor&apos;s Pick
              </h2>
            </div>

            <BlogFeaturedCard post={featuredPost} />
          </div>
        </section>
      )}

      {/* Blog Grid Section */}
      <section className="relative py-12 sm:py-16 bg-surface">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3e%3cpath d='M16 8v16M8 16h16' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          {!showFeatured && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary">
                {activeCategory === "all"
                  ? "All Articles"
                  : categories.find((c) => c.slug === activeCategory)?.name ||
                    "Articles"}
              </h2>
              <p className="text-sm text-text-muted mt-1">
                {filteredPosts.length} article
                {filteredPosts.length !== 1 ? "s" : ""}
              </p>
            </div>
          )}

          {showFeatured && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary">
                Latest Articles
              </h2>
              <p className="text-sm text-text-muted mt-1">
                {gridPosts.length} more article
                {gridPosts.length !== 1 ? "s" : ""}
              </p>
            </div>
          )}

          {/* Blog Grid */}
          <BlogGrid
            posts={showFeatured ? gridPosts : filteredPosts}
            activeCategory={activeCategory}
            onResetFilters={handleResetFilters}
            showNewsletter={true}
            newsletterPosition={5}
          />

          {/* Load More Button (placeholder for pagination) */}
          {filteredPosts.length > 9 && (
            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent-teal hover:bg-accent-teal/10 transition-all duration-200">
                Load More Articles
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <BlogCTA />
    </main>
  );
}
