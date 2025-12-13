import { Metadata } from "next";
import {
  getBlogPostsForListing,
  getCategoriesForListing,
  getFeaturedBlogPostsForListing,
} from "@/lib/content";
import { BlogListingClient } from "./BlogListingClient";

export const metadata: Metadata = {
  title: "Blog | AI Engineering Insights | Procedure",
  description:
    "Expert insights on AI engineering, LLM applications, production systems, and enterprise AI. Learn from engineers who ship.",
  openGraph: {
    title: "Blog | AI Engineering Insights | Procedure",
    description:
      "Expert insights on AI engineering, LLM applications, production systems, and enterprise AI.",
    type: "website",
  },
};

export default function BlogPage() {
  const blogPosts = getBlogPostsForListing();
  const categories = getCategoriesForListing();
  const featuredPosts = getFeaturedBlogPostsForListing();

  return (
    <BlogListingClient
      blogPosts={blogPosts}
      categories={categories}
      featuredPosts={featuredPosts}
    />
  );
}
