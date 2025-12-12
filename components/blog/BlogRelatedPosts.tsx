"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blog-types";
import { BlogPostCard } from "./BlogPostCard";

interface BlogRelatedPostsProps {
  posts: BlogPost[];
  title?: string;
}

export function BlogRelatedPosts({
  posts,
  title = "Continue Reading",
}: BlogRelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 pt-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
          {title}
        </h2>
        <p className="text-text-secondary mt-2">
          More insights from the Procedure engineering team
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {posts.map((post, idx) => (
          <BlogPostCard key={post.id} post={post} index={idx} />
        ))}
      </div>
    </section>
  );
}
