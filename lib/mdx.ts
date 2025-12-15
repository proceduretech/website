import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAuthor, getCategory } from "./content";
import type { Author, BlogCategory } from "./content-types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface MDXFrontmatter {
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: Author;
  category: BlogCategory;
  tags?: string[];
  featuredImage?: string;
  featured?: boolean;
  readTime?: number;
}

// Raw frontmatter before resolution
interface RawMDXFrontmatter {
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string; // Reference key
  category: string; // Reference key
  tags?: string[];
  featuredImage?: string;
  featured?: boolean;
  readTime?: number;
}

export interface MDXPost {
  slug: string;
  frontmatter: MDXFrontmatter;
  content: string;
}

// Default author/category for fallback
const defaultAuthor: Author = {
  name: "Procedure Team",
  role: "Engineering",
  avatar: "/team/default.jpg",
};

const defaultCategory: BlogCategory = {
  name: "Engineering",
  slug: "engineering",
  description: "Engineering insights",
  color: "default",
};

// Resolve author and category references
function resolveFrontmatter(raw: RawMDXFrontmatter): MDXFrontmatter {
  const author = getAuthor(raw.author) || defaultAuthor;
  const category = getCategory(raw.category) || defaultCategory;

  return {
    ...raw,
    author,
    category,
  };
}

// Get all MDX files from the blog directory
export function getAllMDXPosts(): MDXPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"));

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      frontmatter: resolveFrontmatter(data as RawMDXFrontmatter),
      content,
    };
  });

  // Sort by publish date (newest first)
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.publishedAt).getTime() -
      new Date(a.frontmatter.publishedAt).getTime(),
  );
}

// Get a single MDX post by slug
export function getMDXPostBySlug(slug: string): MDXPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: resolveFrontmatter(data as RawMDXFrontmatter),
    content,
  };
}

// Get all MDX post slugs for static generation
export function getAllMDXSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
    .map((file) => file.replace(".mdx", ""));
}

// Calculate read time based on content
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Get featured MDX posts
export function getFeaturedMDXPosts(): MDXPost[] {
  return getAllMDXPosts().filter((post) => post.frontmatter.featured);
}

// Get related posts based on category and tags
export function getRelatedMDXPosts(
  currentPost: MDXPost,
  limit: number = 3,
): MDXPost[] {
  const allPosts = getAllMDXPosts();

  return allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      let score = 0;

      // Same category = 3 points
      if (
        post.frontmatter.category.slug === currentPost.frontmatter.category.slug
      ) {
        score += 3;
      }

      // Matching tags = 1 point each
      const currentTags = currentPost.frontmatter.tags || [];
      const postTags = post.frontmatter.tags || [];
      const matchingTags = postTags.filter((tag) => currentTags.includes(tag));
      score += matchingTags.length;

      return { post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}
