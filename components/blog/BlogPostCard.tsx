"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blog-types";
import { formatDateShort, getCategoryColor, getPostTypeLabel } from "@/lib/blog-utils";

interface BlogPostCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogPostCard({ post, index = 0 }: BlogPostCardProps) {
  const categoryColors = getCategoryColor(post.category.color);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      {/* Hover glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

      <Link
        href={`/blog/${post.slug}`}
        className="relative flex flex-col h-full bg-surface-elevated border border-border rounded-2xl overflow-hidden hover:border-accent-teal/30 transition-all duration-300"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[16/10]">
          {/* Placeholder gradient for now */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/20 to-accent-blue/20" />

          {/* Image gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Category Badge */}
          <div
            className={`absolute top-4 left-4 px-2.5 py-1 text-xs font-medium rounded-full backdrop-blur ${categoryColors.bg} ${categoryColors.border} border ${categoryColors.text}`}
          >
            {post.category.name}
          </div>

          {/* Post Type Badge (optional) */}
          {post.postType !== "article" && (
            <div className="absolute top-4 right-4 px-2.5 py-1 text-xs font-medium rounded-full backdrop-blur bg-black/50 border border-white/20 text-white">
              {getPostTypeLabel(post.postType)}
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col p-6">
          {/* Title */}
          <h3 className="text-lg font-semibold text-text-primary leading-snug mb-3 group-hover:text-accent-teal-light transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Meta Row */}
          <div className="flex items-center gap-3 text-xs text-text-muted">
            {/* Author Avatar */}
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-teal to-accent-blue flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-white">
                {post.author.name.charAt(0)}
              </span>
            </div>

            {/* Author Name */}
            <span className="font-medium truncate max-w-[100px]">
              {post.author.name}
            </span>

            {/* Separator */}
            <span className="w-1 h-1 rounded-full bg-border flex-shrink-0" />

            {/* Date */}
            <span className="flex-shrink-0">{formatDateShort(post.publishedAt)}</span>

            {/* Separator */}
            <span className="w-1 h-1 rounded-full bg-border flex-shrink-0" />

            {/* Read Time */}
            <span className="flex items-center gap-1 flex-shrink-0">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readTime} min
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
