"use client";

import { motion } from "framer-motion";
import { Author } from "@/lib/blog-types";

interface BlogAuthorBioProps {
  author: Author;
}

export function BlogAuthorBio({ author }: BlogAuthorBioProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 p-6 sm:p-8 rounded-2xl bg-surface-elevated border border-border"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-teal to-accent-blue flex items-center justify-center flex-shrink-0">
          <span className="text-2xl font-bold text-white">
            {author.name.charAt(0)}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Name */}
          <h3 className="text-lg font-semibold text-text-primary mb-1">
            {author.name}
          </h3>

          {/* Role */}
          <p className="text-sm text-accent-teal-light font-medium mb-3">
            {author.role}
          </p>

          {/* Bio */}
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {author.bio}
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {author.twitter && (
              <a
                href={author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-accent-teal-light hover:border-accent-teal/30 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-accent-teal-light hover:border-accent-teal/30 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
