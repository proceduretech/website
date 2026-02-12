import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import type {
  ContentType,
  ContentItem,
  BaseFrontmatter,
  BlogFrontmatter,
  CaseStudyFrontmatter,
  ExpertiseFrontmatter,
  IndustryFrontmatter,
  UseCaseFrontmatter,
  ServiceFrontmatter,
  Author,
  BlogCategory,
  ResolvedBlogPost,
} from "./content-types";

// =============================================================================
// Configuration
// =============================================================================

const CONTENT_DIR = path.join(process.cwd(), "content");

// =============================================================================
// YAML Loaders (for shared data)
// =============================================================================

function parseYaml<T>(filePath: string): T | null {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, "utf-8");
  // gray-matter can parse YAML when there's no frontmatter delimiter
  const parsed = matter(`---\n${content}\n---`);
  return parsed.data as T;
}

export const getAuthors = cache((): Record<string, Author> => {
  const filePath = path.join(CONTENT_DIR, "blog", "_authors.yaml");
  return parseYaml<Record<string, Author>>(filePath) || {};
});

export const getCategories = cache((): Record<string, BlogCategory> => {
  const filePath = path.join(CONTENT_DIR, "blog", "_categories.yaml");
  return parseYaml<Record<string, BlogCategory>>(filePath) || {};
});

export function getAuthor(key: string): Author | null {
  const authors = getAuthors();
  return authors[key] || null;
}

export function getCategory(key: string): BlogCategory | null {
  const categories = getCategories();
  return categories[key] || null;
}

// =============================================================================
// Core Content Functions
// =============================================================================

/**
 * Get a single content item by type and slug
 */
export const getContentBySlug = cache(
  <T extends BaseFrontmatter>(
    type: ContentType,
    slug: string,
  ): ContentItem<T> | null => {
    const filePath = path.join(CONTENT_DIR, type, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      frontmatter: data as T,
      content,
    };
  },
);

/**
 * Get all content items of a specific type
 */
export const getAllContent = cache(
  <T extends BaseFrontmatter>(
    type: ContentType,
    options?: { includeDrafts?: boolean },
  ): ContentItem<T>[] => {
    const dir = path.join(CONTENT_DIR, type);

    if (!fs.existsSync(dir)) {
      return [];
    }

    const files = fs
      .readdirSync(dir)
      .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"));

    const items = files
      .map((file) => {
        const slug = file.replace(".mdx", "");
        return getContentBySlug<T>(type, slug);
      })
      .filter((item): item is ContentItem<T> => {
        if (!item) return false;
        if (
          !options?.includeDrafts &&
          (item.frontmatter as BaseFrontmatter).draft
        ) {
          return false;
        }
        return true;
      });

    return items;
  },
);

/**
 * Get all slugs for a content type (for generateStaticParams)
 */
export const getAllSlugs = cache((type: ContentType): string[] => {
  const dir = path.join(CONTENT_DIR, type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
    .map((file) => file.replace(".mdx", ""));
});

// =============================================================================
// Blog-Specific Functions
// =============================================================================

/**
 * Calculate read time from content
 */
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Get a blog post with resolved author and category
 */
export function getBlogPost(slug: string): ResolvedBlogPost | null {
  const post = getContentBySlug<BlogFrontmatter>("blog", slug);
  if (!post) return null;

  const author = getAuthor(post.frontmatter.author);
  const category = getCategory(post.frontmatter.category);

  if (!author || !category) {
    console.warn(
      `Blog post "${slug}" has invalid author or category reference`,
    );
    return null;
  }

  const readTime = post.frontmatter.readTime || calculateReadTime(post.content);

  return {
    slug: post.slug,
    frontmatter: {
      ...post.frontmatter,
      author,
      category,
    },
    content: post.content,
    readTime,
  };
}

/**
 * Get all blog posts with resolved authors and categories
 */
export const getAllBlogPosts = cache(
  (options?: { includeDrafts?: boolean }): ResolvedBlogPost[] => {
    const posts = getAllContent<BlogFrontmatter>("blog", options);

    return posts
      .map((post) => getBlogPost(post.slug))
      .filter((post): post is ResolvedBlogPost => post !== null)
      .sort(
        (a, b) =>
          new Date(b.frontmatter.publishedAt).getTime() -
          new Date(a.frontmatter.publishedAt).getTime(),
      );
  },
);

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(): ResolvedBlogPost[] {
  return getAllBlogPosts().filter((post) => post.frontmatter.featured);
}

/**
 * Get related blog posts based on category and tags
 */
export function getRelatedBlogPosts(
  currentSlug: string,
  limit: number = 3,
): ResolvedBlogPost[] {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllBlogPosts();

  return allPosts
    .filter((post) => post.slug !== currentSlug)
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

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(
  categorySlug: string,
): ResolvedBlogPost[] {
  return getAllBlogPosts().filter(
    (post) => post.frontmatter.category.slug === categorySlug,
  );
}

/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(tag: string): ResolvedBlogPost[] {
  return getAllBlogPosts().filter((post) =>
    post.frontmatter.tags?.includes(tag),
  );
}

// =============================================================================
// Case Study Functions
// =============================================================================

export const getAllCaseStudies = cache(
  (options?: {
    includeDrafts?: boolean;
  }): ContentItem<CaseStudyFrontmatter>[] => {
    return getAllContent<CaseStudyFrontmatter>("case-studies", options).sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime(),
    );
  },
);

export function getCaseStudy(
  slug: string,
): ContentItem<CaseStudyFrontmatter> | null {
  return getContentBySlug<CaseStudyFrontmatter>("case-studies", slug);
}

export function getFeaturedCaseStudies(): ContentItem<CaseStudyFrontmatter>[] {
  return getAllCaseStudies().filter((cs) => cs.frontmatter.featured);
}

export function getCaseStudiesByIndustry(
  industry: string,
): ContentItem<CaseStudyFrontmatter>[] {
  return getAllCaseStudies().filter(
    (cs) => cs.frontmatter.industry === industry,
  );
}

export function getCaseStudiesByServiceType(
  serviceType: "ai-engineering" | "product-engineering",
): ContentItem<CaseStudyFrontmatter>[] {
  return getAllCaseStudies().filter(
    (cs) => cs.frontmatter.serviceType === serviceType,
  );
}

// =============================================================================
// Expertise Functions (now reads from services directory after migration)
// =============================================================================

export const getAllExpertise = cache(
  (): ContentItem<ExpertiseFrontmatter>[] => {
    return getAllContent<ExpertiseFrontmatter>("services");
  },
);

export function getExpertise(
  slug: string,
): ContentItem<ExpertiseFrontmatter> | null {
  return getContentBySlug<ExpertiseFrontmatter>("services", slug);
}

export function getRelatedExpertise(
  slugs: string[],
): ContentItem<ExpertiseFrontmatter>[] {
  return slugs
    .map((slug) => getExpertise(slug))
    .filter((item): item is ContentItem<ExpertiseFrontmatter> => item !== null);
}

// =============================================================================
// Technology Functions
// =============================================================================

export const getAllTechnologies = cache(
  (): ContentItem<ExpertiseFrontmatter>[] => {
    return getAllContent<ExpertiseFrontmatter>("technologies");
  },
);

export function getTechnology(
  slug: string,
): ContentItem<ExpertiseFrontmatter> | null {
  return getContentBySlug<ExpertiseFrontmatter>("technologies", slug);
}

export function getAllTechnologySlugsFromContent(): string[] {
  return getAllSlugs("technologies");
}

/**
 * Auto-discover all technology page routes by scanning app/technologies/ for page.tsx files
 * Returns paths like: ["dotnet", "dotnet/modernization", "dotnet/staff-augmentation"]
 */
export function getAllTechnologyRoutes(): string[] {
  const techDir = path.join(process.cwd(), "app", "technologies");
  if (!fs.existsSync(techDir)) return [];

  const routes: string[] = [];

  function scanDir(dir: string, prefix: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasPage = entries.some((e) => e.isFile() && e.name === "page.tsx");
    if (hasPage && prefix) {
      routes.push(prefix);
    }
    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith("[")) {
        scanDir(path.join(dir, entry.name), prefix ? `${prefix}/${entry.name}` : entry.name);
      }
    }
  }

  scanDir(techDir, "");
  return routes;
}

/**
 * Get a technology page in the ExpertisePageForListing format
 * (same shape as expertise pages for component compatibility)
 */
export function getTechnologyForListing(
  slug: string,
): ExpertisePageForListing | null {
  const tech = getTechnology(slug);
  if (!tech) return null;

  const { frontmatter, content } = tech;

  if (!frontmatter.capabilities || !frontmatter.technologies) {
    return null;
  }

  const whyProcedure = parseWhyProcedureFromContent(content);

  const headlineParts = frontmatter.headline
    ? {
        headline: frontmatter.headline,
        headlineAccent: frontmatter.headlineAccent || "",
      }
    : parseExpertiseHeadline(frontmatter.title);

  return {
    slug,
    meta: {
      title: frontmatter.seo?.title || `${frontmatter.title} | Procedure`,
      description: frontmatter.seo?.description || frontmatter.description,
    },
    hero: {
      badge: frontmatter.title,
      headline: headlineParts.headline,
      headlineAccent: headlineParts.headlineAccent,
      tagline: frontmatter.tagline,
      description: frontmatter.description,
    },
    capabilities: frontmatter.capabilities.map((cap) => ({
      icon: cap.icon,
      title: cap.title,
      description: cap.description,
    })),
    technologies: frontmatter.technologies,
    whyProcedure,
    cta: {
      headline:
        frontmatter.cta?.title ||
        `Ready to Get Started with ${frontmatter.title}?`,
      description:
        frontmatter.cta?.description ||
        "Talk to our engineers about your project.",
      buttonText: frontmatter.cta?.buttonText,
      buttonLink: frontmatter.cta?.buttonLink,
      supportingNote: frontmatter.cta?.supportingNote,
    },
    faqs: frontmatter.faqs || [],
    testimonials: frontmatter.testimonials || [],
    whoWeWorkWith: frontmatter.whoWeWorkWith,
    process: frontmatter.process,
    useCasesSubtitle: frontmatter.useCasesSubtitle,
    useCases: frontmatter.useCases,
    whyChoose: frontmatter.whyChoose,
    qualityMatters: frontmatter.qualityMatters,
    architecture: frontmatter.architecture,
    engagementModels: frontmatter.engagementModels,
    riskReversal: frontmatter.riskReversal,
    ctaTestimonial: frontmatter.ctaTestimonial,
    relatedExpertise: frontmatter.relatedExpertise || [],
  };
}

// =============================================================================
// Industry Functions
// =============================================================================

export const getAllIndustries = cache(
  (): ContentItem<IndustryFrontmatter>[] => {
    return getAllContent<IndustryFrontmatter>("industries");
  },
);

export function getIndustry(
  slug: string,
): ContentItem<IndustryFrontmatter> | null {
  return getContentBySlug<IndustryFrontmatter>("industries", slug);
}

// =============================================================================
// Use Case Functions
// =============================================================================

export const getAllUseCases = cache((): ContentItem<UseCaseFrontmatter>[] => {
  return getAllContent<UseCaseFrontmatter>("use-cases");
});

export function getUseCase(
  slug: string,
): ContentItem<UseCaseFrontmatter> | null {
  return getContentBySlug<UseCaseFrontmatter>("use-cases", slug);
}

// =============================================================================
// Metadata Helpers
// =============================================================================

import type { Metadata } from "next";
import type {
  BlogPost,
  BlogCategory as LegacyBlogCategory,
} from "./blog-types";
import type {
  CaseStudy as LegacyCaseStudy,
  CaseStudyMetric,
} from "./case-studies-data";

// =============================================================================
// Blog List Helpers (for legacy component compatibility)
// =============================================================================

/**
 * Convert MDX blog posts to legacy BlogPost format for components
 */
export function getBlogPostsForListing(): BlogPost[] {
  const posts = getAllBlogPosts();

  return posts.map((post) => ({
    id: post.slug,
    slug: post.slug,
    title: post.frontmatter.title,
    excerpt: post.frontmatter.excerpt,
    content: post.content,
    featuredImage: post.frontmatter.featuredImage || "/blog/default.jpg",
    category: {
      id: post.frontmatter.category.slug,
      name: post.frontmatter.category.name,
      slug: post.frontmatter.category.slug,
      description: post.frontmatter.category.description,
      color: post.frontmatter.category.color,
    },
    postType: "article" as const,
    author: {
      id: post.frontmatter.author.name.toLowerCase().replace(/\s+/g, "-"),
      name: post.frontmatter.author.name,
      avatar: post.frontmatter.author.avatar || "/team/default.jpg",
      role: post.frontmatter.author.role,
      bio: post.frontmatter.author.bio || "",
      twitter: post.frontmatter.author.twitter,
      linkedin: post.frontmatter.author.linkedin,
    },
    publishedAt: post.frontmatter.publishedAt,
    updatedAt: post.frontmatter.updatedAt,
    readTime: post.readTime,
    tags: post.frontmatter.tags,
    featured: post.frontmatter.featured,
  }));
}

/**
 * Get categories in legacy format for components
 */
export function getCategoriesForListing(): LegacyBlogCategory[] {
  const categories = getCategories();
  return Object.entries(categories).map(([id, cat]) => ({
    id,
    name: cat.name,
    slug: cat.slug,
    description: cat.description,
    color: cat.color,
  }));
}

/**
 * Get featured blog posts in legacy format
 */
export function getFeaturedBlogPostsForListing(): BlogPost[] {
  return getBlogPostsForListing().filter((post) => post.featured);
}

// =============================================================================
// Case Study List Helpers (for legacy component compatibility)
// =============================================================================

/**
 * Map service type from MDX format to display format
 */
function mapServiceType(
  serviceType: "ai-engineering" | "product-engineering",
): "AI Engineering" | "Product Engineering" {
  return serviceType === "ai-engineering"
    ? "AI Engineering"
    : "Product Engineering";
}

/**
 * Map industry slug to display name
 */
function mapIndustryName(industrySlug: string): string {
  const industryMap: Record<string, string> = {
    "financial-services": "Financial Services",
    healthcare: "Healthcare",
    "e-commerce": "E-Commerce",
    saas: "SaaS",
    manufacturing: "Manufacturing",
    technology: "Technology",
    education: "Education",
  };
  return industryMap[industrySlug] || industrySlug;
}

/**
 * Convert MDX case studies to legacy CaseStudy format for components
 */
export function getCaseStudiesForListing(): LegacyCaseStudy[] {
  const caseStudies = getAllCaseStudies();

  return caseStudies.map((cs) => ({
    id: cs.slug,
    industry: mapIndustryName(cs.frontmatter.industry),
    serviceType: mapServiceType(cs.frontmatter.serviceType),
    title: cs.frontmatter.title,
    description: cs.frontmatter.challenge,
    metrics: cs.frontmatter.results as CaseStudyMetric[],
    tags: cs.frontmatter.technologies,
    image: cs.frontmatter.featuredImage || "/case-studies/default.jpg",
    featured: cs.frontmatter.featured,
  }));
}

/**
 * Get featured case studies in legacy format
 */
export function getFeaturedCaseStudiesForListing(): LegacyCaseStudy[] {
  return getCaseStudiesForListing().filter((cs) => cs.featured);
}

/**
 * Get unique service types for filtering
 */
export function getServiceFilters(): string[] {
  return ["All", "AI Engineering", "Product Engineering"];
}

/**
 * Get unique industries for filtering
 */
export function getIndustryFilters(): string[] {
  const caseStudies = getCaseStudiesForListing();
  const industries = new Set(caseStudies.map((cs) => cs.industry));
  return ["All", ...Array.from(industries).sort()];
}

// =============================================================================
// Expertise List Helpers (for legacy component compatibility)
// =============================================================================

export interface ExpertisePageForListing {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    tagline: string;
    description: string;
  };
  capabilities: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  technologies: string[];
  whyProcedure: string[];
  cta: {
    headline: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
    supportingNote?: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  testimonials?: Array<{
    name: string;
    role: string;
    company: string;
    quote: string;
  }>;
  whoWeWorkWith?: {
    title?: string;
    audiences: Array<{
      icon: string;
      title: string;
      subtitle?: string;
      description?: string;
      bullets?: string[];
    }>;
    closingStatement?: string;
    commonApplications?: {
      title: string;
      items: (string | { title: string; description: string })[];
    };
  };
  process?: Array<{
    number: number;
    title: string;
    description: string;
    icon?: string;
  }>;
  useCasesSubtitle?: string;
  useCases?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  whyChoose?: {
    title?: string;
    subtitle?: string;
    reasonsTitle?: string;
    reasons: string[];
    outcomesTitle?: string;
    outcomes: Array<{
      value: string;
      label: string;
    }>;
  };
  philosophy?: {
    title: string;
    subtitle?: string;
    blocks: Array<{
      title: string;
      description: string;
    }>;
  };
  qualityMatters?: {
    costs: Array<{
      title: string;
      description: string;
    }>;
    benefits: Array<{
      title: string;
    }>;
  };
  architecture?: {
    title: string;
    subtitle?: string;
    diagramSrc?: string;
    layers: Array<{
      name: string;
      description: string;
    }>;
  };
  engagementModels?: {
    title?: string;
    subtitle?: string;
    models: Array<{
      title: string;
      description: string;
      bestFor: string;
    }>;
  };
  riskReversal?: {
    title?: string;
    subtitle?: string;
    items?: Array<{
      title: string;
      description: string;
    }>;
    closingNote?: string;
    variant?: "grid" | "split";
    leftTriggers?: string[];
    rightBlocks?: Array<{
      title: string;
      description: string;
    }>;
  };
  ctaTestimonial?: {
    name: string;
    role: string;
    company: string;
    quote: string;
  };
  relatedExpertise: string[];
}

/**
 * Parse "Why Procedure" bullet points from MDX content
 */
function parseWhyProcedureFromContent(content: string): string[] {
  // Look for "## Why" section and extract bullet points
  const whyMatch = content.match(/## Why[^\n]*\n+((?:- [^\n]+\n?)+)/);
  if (whyMatch) {
    const bulletList = whyMatch[1];
    return bulletList
      .split("\n")
      .filter((line) => line.startsWith("- "))
      .map((line) => line.replace(/^- \*\*([^*]+)\*\*:?\s*/, "$1: ").trim());
  }
  return [];
}

/**
 * Parse headline and accent from title
 */
function parseExpertiseHeadline(title: string): {
  headline: string;
  headlineAccent: string;
} {
  // Default split at common patterns
  const patterns = [/^(.+) That (.+)$/, /^(.+),\s*(.+)$/, /^(.+) For (.+)$/];

  for (const pattern of patterns) {
    const match = title.match(pattern);
    if (match) {
      return { headline: match[1], headlineAccent: match[2] };
    }
  }

  // Fallback: use title as headline, empty accent
  return { headline: title, headlineAccent: "" };
}

/**
 * Convert MDX expertise to legacy format for components
 */
export function getExpertiseForListing(
  slug: string,
): ExpertisePageForListing | null {
  const expertise = getExpertise(slug);
  if (!expertise) return null;

  const { frontmatter, content } = expertise;

  // Return null if required fields for expertise pages are missing
  // (e.g., ai-security uses custom layout without capabilities/technologies)
  if (!frontmatter.capabilities || !frontmatter.technologies) {
    return null;
  }

  const whyProcedure = parseWhyProcedureFromContent(content);

  // Use explicit headline/headlineAccent if provided, otherwise parse from title
  const headlineParts = frontmatter.headline
    ? {
        headline: frontmatter.headline,
        headlineAccent: frontmatter.headlineAccent || "",
      }
    : parseExpertiseHeadline(frontmatter.title);

  return {
    slug,
    meta: {
      title: frontmatter.seo?.title || `${frontmatter.title} | Procedure`,
      description: frontmatter.seo?.description || frontmatter.description,
    },
    hero: {
      badge: frontmatter.title,
      headline: headlineParts.headline,
      headlineAccent: headlineParts.headlineAccent,
      tagline: frontmatter.tagline,
      description: frontmatter.description,
    },
    capabilities: frontmatter.capabilities.map((cap) => ({
      icon: cap.icon,
      title: cap.title,
      description: cap.description,
    })),
    technologies: frontmatter.technologies,
    whyProcedure,
    cta: {
      headline:
        frontmatter.cta?.title ||
        `Ready to Get Started with ${frontmatter.title}?`,
      description:
        frontmatter.cta?.description ||
        "Talk to our engineers about your project.",
      buttonText: frontmatter.cta?.buttonText,
      buttonLink: frontmatter.cta?.buttonLink,
      supportingNote: frontmatter.cta?.supportingNote,
    },
    faqs: frontmatter.faqs || [],
    testimonials: frontmatter.testimonials || [],
    whoWeWorkWith: frontmatter.whoWeWorkWith,
    process: frontmatter.process,
    useCasesSubtitle: frontmatter.useCasesSubtitle,
    useCases: frontmatter.useCases,
    whyChoose: frontmatter.whyChoose,
    qualityMatters: frontmatter.qualityMatters,
    architecture: frontmatter.architecture,
    engagementModels: frontmatter.engagementModels,
    riskReversal: frontmatter.riskReversal,
    ctaTestimonial: frontmatter.ctaTestimonial,
    relatedExpertise: frontmatter.relatedExpertise || [],
  };
}

/**
 * Get all expertise slugs for static generation (reads from services after migration)
 */
export function getAllExpertiseSlugsFromContent(): string[] {
  return getAllSlugs("services");
}

/**
 * Get related expertise pages data
 */
export function getRelatedExpertiseForListing(slugs: string[]): Array<{
  slug: string;
  title: string;
  description: string;
  badge: string;
}> {
  return slugs
    .map((slug) => {
      const page = getExpertiseForListing(slug);
      if (!page) return null;
      return {
        slug: page.slug,
        title: `${page.hero.headline} ${page.hero.headlineAccent}`.trim(),
        description: page.hero.tagline,
        badge: page.hero.badge,
      };
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);
}

// =============================================================================
// Industry List Helpers (for legacy component compatibility)
// =============================================================================

export interface IndustryPageForListing {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    tagline: string;
    description: string;
    stats: Array<{ value: string; label: string }>;
  };
  challenges: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  solutions: Array<{
    icon: string;
    title: string;
    description: string;
    featured?: boolean;
  }>;
  metrics: Array<{
    value: string;
    label: string;
    context?: string;
  }>;
  compliance: Array<{
    name: string;
    description?: string;
  }>;
  whyProcedure: string[];
  cta: {
    headline: string;
    description: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Parse headline and accent from industry title
 */
function parseIndustryHeadline(title: string): {
  headline: string;
  headlineAccent: string;
} {
  // Industry names don't split well, generate default patterns
  const patterns: Record<string, { headline: string; headlineAccent: string }> =
    {
      "Financial Services": {
        headline: "AI That Moves at the",
        headlineAccent: "Speed of Markets",
      },
      Healthcare: {
        headline: "AI That",
        headlineAccent: "Puts Patients First",
      },
      Education: {
        headline: "AI That",
        headlineAccent: "Transforms How We Learn",
      },
      SaaS: {
        headline: "Ship AI Features Your",
        headlineAccent: "Customers Actually Want",
      },
    };
  return (
    patterns[title] || {
      headline: `AI for ${title}`,
      headlineAccent: "That Delivers Results",
    }
  );
}

/**
 * Parse metrics from MDX content (## Results section)
 */
function parseMetricsFromContent(
  content: string,
): Array<{ value: string; label: string; context?: string }> {
  // Look for "## Results" section and extract bullet points with values
  const resultsMatch = content.match(/## Results[^\n]*\n+((?:- [^\n]+\n?)+)/);
  if (resultsMatch) {
    const bulletList = resultsMatch[1];
    return bulletList
      .split("\n")
      .filter((line) => line.startsWith("- "))
      .map((line) => {
        // Parse patterns like "- **60-80% false positive reduction** in fraud detection systems"
        const match = line.match(/^- \*\*([^*]+)\*\*\s*(.*)$/);
        if (match) {
          const [, boldPart, context] = match;
          // Try to split bold part into value and label
          // Matches: optional $, digits/symbols, optional letter suffix (e.g. "ms", "M", "x"), optional trailing +/%
          const valueLabelMatch = boldPart.match(
            /^(\$?[\d.\-<>%+]+[A-Za-z]*[+%]?)\s+(.+)$/,
          );
          if (valueLabelMatch) {
            return {
              value: valueLabelMatch[1].trim(),
              label: valueLabelMatch[2].trim(),
              context: context?.trim() || undefined,
            };
          }
          return {
            value: boldPart.trim(),
            label: "",
            context: context?.trim() || undefined,
          };
        }
        return null;
      })
      .filter((m): m is NonNullable<typeof m> => m !== null);
  }
  return [];
}

/**
 * Parse "Why Choose Procedure" bullet points from MDX content
 */
function parseWhyProcedureForIndustry(content: string): string[] {
  // Look for "## Why" section and extract bullet points
  const whyMatch = content.match(/## Why[^\n]*\n+((?:- [^\n]+\n?)+)/);
  if (whyMatch) {
    const bulletList = whyMatch[1];
    return bulletList
      .split("\n")
      .filter((line) => line.startsWith("- "))
      .map((line) => line.replace(/^- \*\*([^*]+)\*\*:?\s*/, "$1: ").trim());
  }
  return [];
}

/**
 * Convert MDX industry to legacy format for components
 */
export function getIndustryForListing(
  slug: string,
): IndustryPageForListing | null {
  const industry = getIndustry(slug);
  if (!industry) return null;

  const { frontmatter, content } = industry;
  const headlineParts = parseIndustryHeadline(frontmatter.title);
  const whyProcedure = parseWhyProcedureForIndustry(content);
  const metrics = parseMetricsFromContent(content);

  return {
    slug,
    meta: {
      title:
        frontmatter.seo?.title || `AI for ${frontmatter.title} | Procedure`,
      description: frontmatter.seo?.description || frontmatter.description,
    },
    hero: {
      badge: frontmatter.title,
      headline: headlineParts.headline,
      headlineAccent: headlineParts.headlineAccent,
      tagline: frontmatter.tagline,
      description: frontmatter.description,
      stats: frontmatter.heroStats || [],
    },
    challenges: (frontmatter.challenges || []).map((c) => ({
      icon: c.icon || "alert",
      title: c.title,
      description: c.description,
    })),
    solutions: (frontmatter.solutions || []).map((s) => ({
      icon: s.icon || "sparkles",
      title: s.title,
      description: s.description,
      featured: s.featured,
    })),
    metrics,
    compliance: frontmatter.compliance || [],
    whyProcedure,
    cta: {
      headline: frontmatter.cta?.title || `Build AI for ${frontmatter.title}`,
      description:
        frontmatter.cta?.description ||
        "Talk to our engineers about your project.",
    },
    faqs: frontmatter.faqs || [],
  };
}

/**
 * Get all industry slugs for static generation
 */
export function getAllIndustrySlugsFromContent(): string[] {
  return getAllSlugs("industries");
}

// =============================================================================
// Use Case Helpers (for legacy component compatibility)
// =============================================================================

export interface UseCasePageForListing {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    headline: string;
    highlightedText: string;
    tagline: string;
    description: string;
  };
  problemSolution: {
    before: string[];
    after: string[];
  };
  architecture: {
    title: string;
    subtitle: string;
    steps: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  metrics: Array<{
    value: string;
    label: string;
    context?: string;
  }>;
  whyProcedure: {
    title: string;
    points: string[];
  };
  cta: {
    headline: string;
    description: string;
    primaryCTA: { text: string; href: string };
    secondaryCTA: { text: string; href: string };
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedIndustries: string[];
}

/**
 * Convert MDX use case to legacy format for components
 */
export function getUseCaseForListing(
  slug: string,
): UseCasePageForListing | null {
  const useCase = getUseCase(slug);
  if (!useCase) return null;

  const { frontmatter } = useCase;

  return {
    slug,
    meta: {
      title:
        frontmatter.seo?.title ||
        `${frontmatter.title} ${frontmatter.heroHighlight || ""} | Procedure`,
      description: frontmatter.seo?.description || frontmatter.description,
    },
    hero: {
      badge: "Use Case",
      headline: frontmatter.title,
      highlightedText: frontmatter.heroHighlight || "",
      tagline: frontmatter.tagline,
      description: frontmatter.description,
    },
    problemSolution: frontmatter.problemSolution || { before: [], after: [] },
    architecture: frontmatter.architecture
      ? {
          title: frontmatter.architecture.title,
          subtitle: frontmatter.architecture.subtitle,
          steps: frontmatter.architecture.steps.map((s) => ({
            icon: s.icon || "sparkles",
            title: s.title,
            description: s.description,
          })),
        }
      : { title: "", subtitle: "", steps: [] },
    features: frontmatter.features
      ? {
          title: frontmatter.features.title,
          subtitle: frontmatter.features.subtitle,
          items: frontmatter.features.items.map((i) => ({
            icon: i.icon || "sparkles",
            title: i.title,
            description: i.description,
          })),
        }
      : { title: "", subtitle: "", items: [] },
    metrics: frontmatter.metrics || [],
    whyProcedure: frontmatter.whyProcedure || { title: "", points: [] },
    cta: {
      headline: frontmatter.cta?.title || "Get Started",
      description:
        frontmatter.cta?.description ||
        "Talk to our engineers about your project.",
      primaryCTA: frontmatter.cta?.primaryCTA || {
        text: "Book a Call",
        href: "/contact-us",
      },
      secondaryCTA: frontmatter.cta?.secondaryCTA || {
        text: "Learn More",
        href: "/contact-us",
      },
    },
    faqs: frontmatter.faqs || [],
    relatedIndustries: frontmatter.industries || [],
  };
}

/**
 * Get all use case slugs for static generation
 */
export function getAllUseCaseSlugsFromContent(): string[] {
  return getAllSlugs("use-cases");
}

// =============================================================================
// Service Page Helpers (for legacy component compatibility)
// =============================================================================

export interface ServicePageForListing {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    badgeVariant?: "teal" | "blue";
    headline: string;
    headlineAccent: string;
    description: string;
    primaryCTA: { text: string; href: string };
    secondaryCTA?: { text: string; href: string };
  };
  benefits: Array<{
    title: string;
    description: string;
    stat: string;
    statLabel: string;
  }>;
  benefitsTitle: string;
  process: Array<{
    step: string;
    title: string;
    duration: string;
    description: string;
  }>;
  processTitle: string;
  services?: string[];
  productTypes?: string[];
  roles?: string[];
  sprintExamples?: string[];
  compliance?: string[];
  idealFor: string[];
  idealForTitle: string;
  cta: {
    headline: string;
    headlineAccent?: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

/**
 * Get all service pages
 */
export const getAllServices = cache((): ContentItem<ServiceFrontmatter>[] => {
  return getAllContent<ServiceFrontmatter>("services");
});

/**
 * Get a single service page
 */
export function getService(
  slug: string,
): ContentItem<ServiceFrontmatter> | null {
  return getContentBySlug<ServiceFrontmatter>("services", slug);
}

/**
 * Convert MDX service to format for components
 */
export function getServiceForListing(
  slug: string,
): ServicePageForListing | null {
  const service = getService(slug);
  if (!service) return null;

  const { frontmatter } = service;

  return {
    slug,
    meta: {
      title: frontmatter.seo?.title || `${frontmatter.title} | Procedure`,
      description: frontmatter.seo?.description || frontmatter.description,
    },
    hero: {
      badge: frontmatter.badge || frontmatter.title,
      badgeVariant: frontmatter.badgeVariant,
      headline: frontmatter.headline,
      headlineAccent: frontmatter.headlineAccent || "",
      description: frontmatter.description,
      primaryCTA: frontmatter.primaryCTA,
      secondaryCTA: frontmatter.secondaryCTA,
    },
    benefits: frontmatter.benefits,
    benefitsTitle: frontmatter.benefitsTitle || `Why ${frontmatter.title}`,
    process: frontmatter.process,
    processTitle: frontmatter.processTitle || `How ${frontmatter.title} Works`,
    services: frontmatter.services,
    productTypes: frontmatter.productTypes,
    roles: frontmatter.roles,
    sprintExamples: frontmatter.sprintExamples,
    compliance: frontmatter.compliance,
    idealFor: frontmatter.idealFor,
    idealForTitle:
      frontmatter.idealForTitle || `Who ${frontmatter.title} Is For`,
    cta: frontmatter.cta,
  };
}

/**
 * Get all service slugs for static generation
 */
export function getAllServiceSlugsFromContent(): string[] {
  return getAllSlugs("services");
}

export function generateContentMetadata<T extends BaseFrontmatter>(
  content: ContentItem<T>,
  type: ContentType,
  additionalMeta?: Partial<Metadata>,
): Metadata {
  const { frontmatter, slug } = content;
  const seo = frontmatter.seo || {};

  const title = seo.title || frontmatter.title;
  const description =
    seo.description ||
    (frontmatter as Record<string, unknown>).excerpt ||
    (frontmatter as Record<string, unknown>).tagline;

  return {
    title,
    description: description as string | undefined,
    alternates: {
      canonical: seo.canonical || `/${type}/${slug}`,
    },
    openGraph: {
      title,
      description: description as string | undefined,
      type: type === "blog" ? "article" : "website",
    },
    robots: seo.noIndex ? { index: false } : undefined,
    ...additionalMeta,
  };
}
