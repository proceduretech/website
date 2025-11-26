"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme, verticals } from "../../context/ThemeContext";
import { BlogPost, getRecentPosts } from "../../data/blog";
import { MarkdownRenderer } from "../../components/MarkdownRenderer";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const { config } = useTheme();
  const verticalConfig = verticals[post.vertical];

  const relatedPosts = getRecentPosts(4).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-32 pb-12">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(${verticalConfig.accentColorRgb}, 0.06), transparent)`,
            }}
            transition={{ duration: 0.7 }}
          />
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 text-sm text-[var(--muted)]"
          >
            <Link href="/blog" className="hover:text-[var(--foreground)]">
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: verticalConfig.accentColor }}>
              {verticalConfig.label}
            </span>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4 flex flex-wrap gap-2"
          >
            <span
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{
                backgroundColor: `rgba(${verticalConfig.accentColorRgb}, 0.1)`,
                color: verticalConfig.accentColor,
              }}
            >
              {verticalConfig.label}
            </span>
            {post.isCaseStudy && (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-[var(--muted)]">
                Case Study
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-8 text-lg text-[var(--muted)] md:text-xl"
          >
            {post.excerpt}
          </motion.p>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 border-b border-[var(--border)] pb-8"
          >
            {/* Author */}
            <div className="flex items-center gap-3">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-[var(--foreground)]">
                  {post.author.name}
                </p>
                <p className="text-sm text-[var(--muted)]">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime} min read</span>
            </div>

            {/* Social links */}
            <div className="ml-auto flex items-center gap-2">
              {post.author.twitter && (
                <a
                  href={`https://twitter.com/${post.author.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-[var(--muted)] transition-colors hover:bg-gray-100 hover:text-[var(--foreground)]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {post.author.linkedin && (
                <a
                  href={`https://linkedin.com/in/${post.author.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-[var(--muted)] transition-colors hover:bg-gray-100 hover:text-[var(--foreground)]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative aspect-[2/1] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Case Study Results */}
      {post.isCaseStudy && post.results && (
        <section className="px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto max-w-3xl"
          >
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: `rgba(${verticalConfig.accentColorRgb}, 0.05)`,
                border: `1px solid rgba(${verticalConfig.accentColorRgb}, 0.2)`,
              }}
            >
              <div className="mb-4 flex items-center gap-4 text-sm">
                {post.client && (
                  <span className="text-[var(--muted)]">
                    <strong className="text-[var(--foreground)]">Client:</strong>{" "}
                    {post.client}
                  </span>
                )}
                {post.industry && (
                  <span className="text-[var(--muted)]">
                    <strong className="text-[var(--foreground)]">Industry:</strong>{" "}
                    {post.industry}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {post.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="mb-1 text-2xl font-bold md:text-3xl"
                      style={{ color: verticalConfig.accentColor }}
                    >
                      {result.value}
                    </div>
                    <div className="text-xs text-[var(--muted)]">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Content */}
      <section className="px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto max-w-3xl"
        >
          <MarkdownRenderer content={post.content} />
        </motion.div>
      </section>

      {/* Tags */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2 border-t border-[var(--border)] pt-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-[var(--muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Share */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-gray-50 p-6">
            <div>
              <p className="font-medium text-[var(--foreground)]">
                Found this helpful?
              </p>
              <p className="text-sm text-[var(--muted)]">
                Share it with your network
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://procedure.tech/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 text-[var(--muted)] transition-colors hover:bg-white hover:text-[var(--foreground)]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://procedure.tech/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 text-[var(--muted)] transition-colors hover:bg-white hover:text-[var(--foreground)]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-[var(--border)] bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-[var(--foreground)]">
              More from the blog
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block overflow-hidden rounded-xl border border-[var(--border)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2 text-xs text-[var(--muted)]">
                      <span
                        className="rounded-full px-2 py-0.5 font-medium"
                        style={{
                          backgroundColor: `rgba(${verticals[relatedPost.vertical].accentColorRgb}, 0.1)`,
                          color: verticals[relatedPost.vertical].accentColor,
                        }}
                      >
                        {verticals[relatedPost.vertical].shortLabel}
                      </span>
                      <span>{relatedPost.readTime} min</span>
                    </div>
                    <h3 className="font-semibold leading-snug text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="mb-4 text-2xl font-bold md:text-3xl"
            style={{ color: config.accentColor }}
          >
            Need help with a similar project?
          </h2>
          <p className="mb-8 text-[var(--muted)]">
            Let&apos;s discuss how we can help you achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: config.accentColor,
              boxShadow: `0 4px 14px rgba(${config.accentColorRgb}, 0.25)`,
            }}
          >
            Get in touch
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
