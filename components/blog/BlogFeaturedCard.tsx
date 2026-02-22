"use client";

import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { BlogPost } from "@/lib/blog-types";
import { formatDateShort, getCategoryColor } from "@/lib/blog-utils";

interface BlogFeaturedCardProps {
  post: BlogPost;
}

export function BlogFeaturedCard({ post }: BlogFeaturedCardProps) {
  const categoryColors = getCategoryColor(post.category.color);

  return (
    <m.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link
        href={`/blogs/${post.slug}`}
        className="flex flex-col lg:flex-row bg-surface-elevated border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-colors"
      >
        {/* Image Container */}
        <div className="relative w-full lg:w-[60%] aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden">
          {/* Featured Image or Placeholder */}
          {post.featuredImage && post.featuredImage !== "/blog/default.jpg" ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-accent/10 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-accent/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
          )}

          {/* Gradient overlay for content fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-elevated/90 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated/80 to-transparent lg:hidden" />
        </div>

        {/* Content Area */}
        <div className="relative w-full lg:w-[40%] p-8 lg:p-10 flex flex-col justify-center">
          {/* Featured Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-secondary/20 border border-accent-secondary/30 text-accent-secondary-light text-xs font-semibold mb-4 w-fit">
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
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary leading-tight mb-4 group-hover:text-accent-light transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta Row */}
          <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
            {/* Author Avatar */}
            <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-accent-light">
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
          <div className="inline-flex items-center gap-2 text-accent-light font-semibold group-hover:gap-3 transition-all">
            <span>Read Article</span>
            <div className="w-6 h-px bg-accent-light group-hover:w-10 transition-all" />
          </div>
        </div>
      </Link>
    </m.article>
  );
}
