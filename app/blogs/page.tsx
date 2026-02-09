import { Metadata } from "next";
import {
  getBlogPostsWithFallback,
  getCategoriesWithFallback,
  getFeaturedPostsWithFallback,
} from "@/lib/notion-blog";
import { BlogListingClient } from "./BlogListingClient";

// Force static generation at build time
// This ensures the page is pre-rendered during `next build`
// and the Notion API is only called at build time, not on every request
export const dynamic = "force-static";
export const revalidate = false;

// Default OG image configuration
const defaultOgImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Procedure - AI Engineering Services",
};

export const metadata: Metadata = {
  title: "Blog | AI Engineering Insights | Procedure",
  description:
    "Expert insights on AI engineering, LLM applications, production systems, and enterprise AI. Learn from engineers who ship.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog | AI Engineering Insights | Procedure",
    description:
      "Expert insights on AI engineering, LLM applications, production systems, and enterprise AI.",
    type: "website",
    url: "/blogs",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | AI Engineering Insights | Procedure",
    description:
      "Expert insights on AI engineering, LLM applications, production systems, and enterprise AI.",
    images: [defaultOgImage],
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default async function BlogPage() {
  // These functions are called at build time (during `next build`)
  // The data is fetched from Notion once and baked into the static HTML
  const blogPosts = await getBlogPostsWithFallback();
  const categories = await getCategoriesWithFallback();
  const featuredPosts = await getFeaturedPostsWithFallback();

  return (
    <BlogListingClient
      blogPosts={blogPosts}
      categories={categories}
      featuredPosts={featuredPosts}
    />
  );
}
