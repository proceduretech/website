"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BlogPost } from "@/lib/blog-types";
import { BlogPostCard } from "./BlogPostCard";
import { BlogNewsletter } from "./BlogNewsletter";
import { BlogEmpty } from "./BlogEmpty";

interface BlogGridProps {
  posts: BlogPost[];
  activeCategory: string;
  onResetFilters: () => void;
  showNewsletter?: boolean;
  newsletterPosition?: number;
}

export function BlogGrid({
  posts,
  activeCategory,
  onResetFilters,
  showNewsletter = true,
  newsletterPosition = 5,
}: BlogGridProps) {
  if (posts.length === 0) {
    return <BlogEmpty onReset={onResetFilters} />;
  }

  // Insert newsletter card at specified position
  const renderItems = () => {
    const items: React.ReactNode[] = [];

    posts.forEach((post, idx) => {
      // Insert newsletter before the specified position
      if (showNewsletter && idx === newsletterPosition && posts.length > newsletterPosition) {
        items.push(
          <div key="newsletter" className="md:col-span-1">
            <BlogNewsletter variant="card" />
          </div>
        );
      }

      items.push(
        <BlogPostCard key={post.id} post={post} index={idx} />
      );
    });

    // If we have fewer posts than newsletter position, add it at the end
    if (showNewsletter && posts.length <= newsletterPosition && posts.length >= 3) {
      items.push(
        <div key="newsletter" className="md:col-span-1">
          <BlogNewsletter variant="card" />
        </div>
      );
    }

    return items;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {renderItems()}
      </motion.div>
    </AnimatePresence>
  );
}
