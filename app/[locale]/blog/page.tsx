"use client";

export const runtime = "edge";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme, verticals } from "../../context/ThemeContext";
import { blogPosts, getFeaturedPosts } from "../../data/blog";
import { Vertical } from "../../config/verticals";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const { config } = useTheme();
  const [activeFilter, setActiveFilter] = useState<Vertical | "all">("all");

  const featuredPosts = getFeaturedPosts();
  const filteredPosts =
    activeFilter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.vertical === activeFilter);

  const filters: { id: Vertical | "all"; label: string }[] = [
    { id: "all", label: "All Posts" },
    { id: "ai-engineering", label: "AI Engineering" },
    { id: "software", label: "Software" },
    { id: "design", label: "Design" },
    { id: "ai-security", label: "AI Security" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-36 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="geo-dots opacity-30" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(${config.accentColorRgb}, 0.06), transparent)`,
            }}
            transition={{ duration: 0.7 }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-medium uppercase tracking-widest"
            style={{ color: config.accentColor }}
          >
            Blog & Case Studies
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl"
          >
            Insights from the
            <br />
            <motion.span
              animate={{ color: config.accentColor }}
              transition={{ duration: 0.3 }}
            >
              engineering trenches
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-[var(--muted)] md:text-xl"
          >
            Technical deep-dives, case studies, and lessons learned from building
            production systems.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPosts.length > 0 && (
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href={`/blog/${featuredPosts[0].slug}`}
                className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[16/10] md:aspect-auto">
                    <Image
                      src={featuredPosts[0].coverImage}
                      alt={featuredPosts[0].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r" />
                    <span
                      className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium text-white"
                      style={{ backgroundColor: verticals[featuredPosts[0].vertical].accentColor }}
                    >
                      Featured
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
                      <span
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: `rgba(${verticals[featuredPosts[0].vertical].accentColorRgb}, 0.1)`,
                          color: verticals[featuredPosts[0].vertical].accentColor,
                        }}
                      >
                        {verticals[featuredPosts[0].vertical].label}
                      </span>
                      {featuredPosts[0].isCaseStudy && (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-[var(--muted)]">
                          Case Study
                        </span>
                      )}
                      <span>{formatDate(featuredPosts[0].date)}</span>
                      <span>·</span>
                      <span>{featuredPosts[0].readTime} min read</span>
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)] md:text-3xl">
                      {featuredPosts[0].title}
                    </h2>
                    <p className="mb-6 text-[var(--muted)]">
                      {featuredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={featuredPosts[0].author.avatar}
                        alt={featuredPosts[0].author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-[var(--foreground)]">
                          {featuredPosts[0].author.name}
                        </p>
                        <p className="text-xs text-[var(--muted)]">
                          {featuredPosts[0].author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter Tabs */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              const filterColor =
                filter.id === "all"
                  ? config.accentColor
                  : verticals[filter.id].accentColor;
              const filterColorRgb =
                filter.id === "all"
                  ? config.accentColorRgb
                  : verticals[filter.id].accentColorRgb;

              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: isActive
                      ? `rgba(${filterColorRgb}, 0.1)`
                      : "transparent",
                    color: isActive ? filterColor : "var(--muted)",
                    border: `1px solid ${isActive ? filterColor : "var(--border)"}`,
                  }}
                >
                  {filter.label}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * (index % 6) }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full overflow-hidden rounded-xl border border-[var(--border)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    {post.isCaseStudy && (
                      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-[var(--foreground)]">
                        Case Study
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
                      <span
                        className="rounded-full px-2 py-0.5 font-medium"
                        style={{
                          backgroundColor: `rgba(${verticals[post.vertical].accentColorRgb}, 0.1)`,
                          color: verticals[post.vertical].accentColor,
                        }}
                      >
                        {verticals[post.vertical].shortLabel}
                      </span>
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.readTime} min</span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold leading-snug text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                      {post.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-[var(--muted)]">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={28}
                        height={28}
                        className="rounded-full"
                      />
                      <span className="text-xs font-medium text-[var(--muted)]">
                        {post.author.name}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-[var(--muted)]">No posts found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
