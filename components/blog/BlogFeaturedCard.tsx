"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blog-types";
import { formatDateShort, getCategoryColor } from "@/lib/blog-utils";

interface BlogFeaturedCardProps {
  post: BlogPost;
}

export function BlogFeaturedCard({ post }: BlogFeaturedCardProps) {
  const categoryColors = getCategoryColor(post.category.color);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col lg:flex-row bg-surface-elevated border border-border rounded-2xl overflow-hidden hover:border-accent-teal/30 transition-colors"
      >
        {/* Image Container */}
        <div className="relative w-full lg:w-[60%] aspect-[16/10] lg:aspect-auto overflow-hidden">
          {/* Placeholder background */}
          <div className="absolute inset-0 bg-accent-teal/10" />

          {/* Gradient overlay for content fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-elevated/90 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated/80 to-transparent lg:hidden" />
        </div>

        {/* Content Area */}
        <div className="relative w-full lg:w-[40%] p-8 lg:p-10 flex flex-col justify-center">
          {/* Featured Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/20 border border-accent-blue/30 text-accent-blue-light text-xs font-semibold mb-4 w-fit">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            Featured
          </div>

          {/* Category Badge */}
          <div
            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full mb-4 w-fit ${categoryColors.bg} ${categoryColors.border} border ${categoryColors.text}`}
          >
            {post.category.name}
          </div>

          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary leading-tight mb-4 group-hover:text-accent-teal-light transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta Row */}
          <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
            {/* Author Avatar */}
            <div className="w-8 h-8 rounded-full bg-accent-teal/20 border border-accent-teal/30 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-accent-teal-light">
                {post.author.name.charAt(0)}
              </span>
            </div>

            {/* Author Name */}
            <span className="font-medium text-text-secondary">
              {post.author.name}
            </span>

            {/* Separator */}
            <span className="w-1 h-1 rounded-full bg-border" />

            {/* Date */}
            <span>{formatDateShort(post.publishedAt)}</span>

            {/* Separator */}
            <span className="w-1 h-1 rounded-full bg-border" />

            {/* Read Time */}
            <span>{post.readTime} min read</span>
          </div>

          {/* CTA */}
          <div className="inline-flex items-center gap-2 text-accent-teal-light font-semibold group-hover:gap-3 transition-all">
            <span>Read Article</span>
            <div className="w-6 h-px bg-accent-teal-light group-hover:w-10 transition-all" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
