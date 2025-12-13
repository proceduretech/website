# Content Architecture: MD/MDX-First Approach

> A practical guide to structuring content directly in the repository, with future internationalization support without over-engineering.

## Philosophy

1. **Start Simple** — No unnecessary abstractions until needed
2. **Convention Over Configuration** — Clear patterns reduce decision fatigue
3. **Type-First Organization** — Content organized by type, not locale (easier to work with when single-language)
4. **i18n-Ready** — File naming conventions allow seamless locale expansion later
5. **Colocation** — Related assets (images, code snippets) live near their content

---

## Directory Structure

```
content/
├── blog/                           # Blog posts
│   ├── _authors.yaml               # Shared author definitions
│   ├── _categories.yaml            # Blog categories
│   ├── prompt-injection-detection.mdx
│   ├── building-production-rag.mdx
│   └── assets/                     # Blog-specific images
│       └── prompt-injection/
│           └── diagram.png
│
├── case-studies/                   # Client case studies
│   ├── _schema.ts                  # TypeScript types (for IDE support)
│   ├── fintech-fraud-detection.mdx
│   ├── healthcare-clinical-ai.mdx
│   └── assets/
│       └── fintech-fraud/
│           └── architecture.png
│
├── expertise/                      # Expertise/service deep-dives
│   ├── llm-engineering.mdx
│   ├── ai-agents.mdx
│   ├── mlops.mdx
│   └── ai-security.mdx
│
├── industries/                     # Industry-specific pages
│   ├── financial-services.mdx
│   ├── healthcare.mdx
│   ├── saas.mdx
│   └── ecommerce.mdx
│
├── use-cases/                      # Use case pages
│   ├── document-processing.mdx
│   ├── customer-support-ai.mdx
│   └── predictive-analytics.mdx
│
├── pages/                          # Static page content (optional)
│   ├── about.mdx                   # About page content blocks
│   ├── careers.mdx                 # Careers page content
│   └── approach.mdx                # Our approach page
│
└── shared/                         # Shared content snippets
    ├── cta-blocks.yaml             # Reusable CTA content
    └── testimonials.yaml           # Client testimonials
```

---

## Frontmatter Schemas

### Blog Post

```yaml
---
title: "Building Production-Ready RAG Systems"
slug: "building-production-rag"          # Optional: defaults to filename
excerpt: "A practical guide to..."
publishedAt: "2024-12-13"
updatedAt: "2024-12-14"                  # Optional
draft: false                              # Optional: exclude from production
author: "ulhas"                           # Reference to _authors.yaml
category: "llm-engineering"               # Reference to _categories.yaml
tags:
  - rag
  - production
  - llm
featuredImage: "./assets/rag-system/hero.png"  # Relative path
featured: true
readTime: 12                              # Optional: auto-calculated if omitted
seo:                                      # Optional: override defaults
  title: "Custom SEO Title"
  description: "Custom meta description"
  canonical: "https://..."
---
```

### Case Study

```yaml
---
title: "Real-Time Fraud Detection That Saved $47M in Year One"
slug: "fintech-fraud-detection"
client: "Fortune 500 Bank"                # Can be anonymized
industry: "financial-services"            # Reference to industries
serviceType: "ai-engineering"             # ai-engineering | product-engineering
challenge: |
  A Fortune 500 bank needed to replace their rules-based fraud system...
solution: |
  We deployed a multi-model AI ensemble that analyzes transactions...
results:
  - value: "94%"
    label: "Fraud detection rate"
  - value: "67%"
    label: "Fewer false positives"
  - value: "$47M"
    label: "Prevented losses"
technologies:
  - PyTorch
  - Kafka
  - AWS SageMaker
testimonial:                              # Optional
  quote: "Procedure transformed our fraud detection..."
  author: "VP of Engineering"
  company: "Fortune 500 Bank"
featured: true
publishedAt: "2024-11-15"
featuredImage: "./assets/fintech-fraud/hero.png"
seo:
  title: "Fraud Detection AI Case Study | Procedure"
  description: "How we helped a Fortune 500 bank save $47M..."
---
```

### Expertise Page

```yaml
---
title: "LLM Engineering"
slug: "llm-engineering"
tagline: "Build reliable LLM applications at scale"
description: |
  From prompt engineering to fine-tuning, we build LLM systems
  that actually work in production.
heroStats:
  - value: "50+"
    label: "LLM systems deployed"
  - value: "99.9%"
    label: "Uptime SLA"
capabilities:
  - title: "RAG Systems"
    description: "Production-grade retrieval augmented generation..."
    icon: "database"                      # Icon key for component
  - title: "Fine-tuning"
    description: "Custom models trained on your data..."
    icon: "tune"
technologies:
  - OpenAI
  - Anthropic
  - LangChain
  - Vector DBs
relatedExpertise:
  - ai-agents
  - mlops
faqs:
  - question: "How long does it take to deploy an LLM system?"
    answer: "Typically 4-8 weeks for a production MVP..."
cta:
  title: "Ready to build with LLMs?"
  description: "Let's discuss your use case"
  buttonText: "Schedule a Call"
  buttonLink: "/contact"
seo:
  title: "LLM Engineering Services | Procedure"
  description: "Expert LLM engineering for production systems..."
---
```

### Industry Page

```yaml
---
title: "Financial Services"
slug: "financial-services"
tagline: "AI that meets the demands of regulated industries"
description: |
  We understand the unique challenges of financial services:
  compliance, security, and real-time performance requirements.
challenges:
  - title: "Regulatory Compliance"
    description: "Meeting SOC 2, PCI-DSS, and banking regulations..."
  - title: "Real-time Processing"
    description: "Sub-100ms latency for trading and fraud detection..."
useCases:
  - document-processing
  - fraud-detection
  - customer-support-ai
caseStudies:
  - fintech-fraud-detection
relatedIndustries:
  - healthcare
seo:
  title: "AI for Financial Services | Procedure"
  description: "Enterprise AI solutions for banks and fintech..."
---
```

---

## Content Library (`lib/content.ts`)

A unified content access layer:

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

const CONTENT_DIR = path.join(process.cwd(), "content");

// Generic content fetcher with caching
export const getContentBySlug = cache(
  <T>(type: ContentType, slug: string): ContentItem<T> | null => {
    const filePath = path.join(CONTENT_DIR, type, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      frontmatter: data as T,
      content,
    };
  }
);

// Get all content of a type
export const getAllContent = cache(
  <T>(type: ContentType, options?: { includeDrafts?: boolean }): ContentItem<T>[] => {
    const dir = path.join(CONTENT_DIR, type);
    if (!fs.existsSync(dir)) return [];

    const files = fs.readdirSync(dir)
      .filter(f => f.endsWith(".mdx"));

    return files
      .map(file => getContentBySlug<T>(type, file.replace(".mdx", "")))
      .filter((item): item is ContentItem<T> => {
        if (!item) return false;
        if (!options?.includeDrafts && item.frontmatter.draft) return false;
        return true;
      });
  }
);

// Content types
type ContentType =
  | "blog"
  | "case-studies"
  | "expertise"
  | "industries"
  | "use-cases"
  | "pages";

interface ContentItem<T> {
  slug: string;
  frontmatter: T;
  content: string;
}
```

---

## Internationalization Strategy

### Phase 1: Current (Single Language)

```
content/
└── blog/
    └── my-post.mdx
```

### Phase 2: When i18n is Needed

**Option A: Locale suffix (Recommended for gradual adoption)**

```
content/
└── blog/
    ├── my-post.mdx          # Default locale (en)
    ├── my-post.de.mdx       # German
    └── my-post.ja.mdx       # Japanese
```

Update content library:
```typescript
export function getContentBySlug<T>(
  type: ContentType,
  slug: string,
  locale: string = "en"
): ContentItem<T> | null {
  // Try locale-specific file first
  const localePath = path.join(CONTENT_DIR, type, `${slug}.${locale}.mdx`);
  if (locale !== "en" && fs.existsSync(localePath)) {
    return parseContent(localePath, slug);
  }

  // Fallback to default
  const defaultPath = path.join(CONTENT_DIR, type, `${slug}.mdx`);
  return fs.existsSync(defaultPath) ? parseContent(defaultPath, slug) : null;
}
```

**Option B: Locale folders (For extensive i18n)**

```
content/
├── en/
│   └── blog/
│       └── my-post.mdx
├── de/
│   └── blog/
│       └── my-post.mdx
└── ja/
    └── blog/
        └── my-post.mdx
```

### Recommendation

Start with **no locale structure**. When i18n is needed:
- If < 3 locales: Use **Option A** (suffix)
- If 3+ locales: Consider **Option B** (folders)

---

## Asset Management

### Colocated Assets (Recommended)

```
content/
└── blog/
    └── assets/
        └── my-post/
            ├── hero.png
            ├── diagram-1.png
            └── code-screenshot.png
```

Reference in MDX:
```mdx
![Architecture Diagram](./assets/my-post/diagram-1.png)
```

### Build Configuration

Add to `next.config.mjs`:
```javascript
const nextConfig = {
  // Allow images from content directory
  images: {
    remotePatterns: [],
  },
  // Copy content assets to public during build
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
}
```

Or use the public folder for simpler setup:
```
public/
└── content/
    ├── blog/
    │   └── my-post/
    │       └── hero.png
    └── case-studies/
        └── fintech/
            └── hero.png
```

---

## Migration Plan

### Step 1: Create Directory Structure
```bash
mkdir -p content/{blog,case-studies,expertise,industries,use-cases,pages,shared}
```

### Step 2: Create Shared Data Files

`content/blog/_authors.yaml`:
```yaml
ulhas:
  name: "Ulhas Mandrawadkar"
  role: "CEO & Co-Founder"
  avatar: "/team/ulhas.jpg"
  bio: "Building AI systems that ship..."
  twitter: "https://twitter.com/ulhas"
  linkedin: "https://linkedin.com/in/ulhas"

engineering-team:
  name: "Procedure Engineering"
  role: "Engineering Team"
  avatar: "/team/engineering.jpg"
  bio: "Insights from Procedure's team..."
```

### Step 3: Migrate Content Types

1. **Blog** — Already MDX, update frontmatter to use author references
2. **Case Studies** — Convert from `lib/case-studies-data.ts` to individual MDX files
3. **Expertise** — Convert from `lib/expertise-data.tsx` to MDX files
4. **Industries** — Convert from `lib/industries-data.tsx` to MDX files
5. **Use Cases** — Convert from `lib/use-cases-data.tsx` to MDX files

### Step 4: Update Route Handlers

Update each `[slug]/page.tsx` to use the new content library:

```typescript
import { getContentBySlug, getAllContent } from "@/lib/content";
import { CaseStudyFrontmatter } from "@/lib/content-types";

export async function generateStaticParams() {
  const caseStudies = getAllContent<CaseStudyFrontmatter>("case-studies");
  return caseStudies.map(cs => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const caseStudy = getContentBySlug<CaseStudyFrontmatter>("case-studies", slug);

  if (!caseStudy) notFound();

  return <CaseStudyTemplate {...caseStudy} />;
}
```

---

## Type Safety

Create `lib/content-types.ts`:

```typescript
// Base frontmatter all content types share
interface BaseFrontmatter {
  title: string;
  slug?: string;
  draft?: boolean;
  seo?: SEOFrontmatter;
}

interface SEOFrontmatter {
  title?: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
}

// Blog
export interface BlogFrontmatter extends BaseFrontmatter {
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;  // Reference to _authors.yaml
  category: string;
  tags?: string[];
  featuredImage?: string;
  featured?: boolean;
  readTime?: number;
}

// Case Study
export interface CaseStudyFrontmatter extends BaseFrontmatter {
  client?: string;
  industry: string;
  serviceType: "ai-engineering" | "product-engineering";
  challenge: string;
  solution: string;
  results: Array<{ value: string; label: string }>;
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
  featured?: boolean;
  publishedAt: string;
  featuredImage?: string;
}

// Expertise
export interface ExpertiseFrontmatter extends BaseFrontmatter {
  tagline: string;
  description: string;
  heroStats?: Array<{ value: string; label: string }>;
  capabilities: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  technologies: string[];
  relatedExpertise?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

// Industry
export interface IndustryFrontmatter extends BaseFrontmatter {
  tagline: string;
  description: string;
  challenges?: Array<{ title: string; description: string }>;
  useCases?: string[];
  caseStudies?: string[];
  relatedIndustries?: string[];
}

// Use Case
export interface UseCaseFrontmatter extends BaseFrontmatter {
  tagline: string;
  description: string;
  benefits?: Array<{ title: string; description: string }>;
  industries?: string[];
  relatedUseCases?: string[];
}
```

---

## MDX Component Integration

The current MDX components work unchanged. Reference in content:

```mdx
---
title: "Building Production RAG"
---

<Callout type="info">
This guide assumes familiarity with embeddings.
</Callout>

<Steps>
  <Step title="Set up vector store">
    First, configure your vector database...
  </Step>
  <Step title="Build retrieval pipeline">
    Next, implement the retrieval logic...
  </Step>
</Steps>

<Comparison
  left={{ title: "Naive RAG", type: "bad" }}
  right={{ title: "Production RAG", type: "good" }}
>
  <ComparisonSide side="left">
    Simple chunk + retrieve
  </ComparisonSide>
  <ComparisonSide side="right">
    Hybrid search + reranking
  </ComparisonSide>
</Comparison>
```

---

## SEO Considerations

### Automatic Metadata Generation

```typescript
// lib/content.ts
export function generateMetadata(
  content: ContentItem<BaseFrontmatter>,
  type: ContentType
): Metadata {
  const { frontmatter, slug } = content;
  const seo = frontmatter.seo || {};

  return {
    title: seo.title || frontmatter.title,
    description: seo.description || (frontmatter as any).excerpt,
    alternates: {
      canonical: seo.canonical || `/${type}/${slug}`,
    },
    openGraph: {
      title: seo.title || frontmatter.title,
      type: type === "blog" ? "article" : "website",
    },
    robots: seo.noIndex ? { index: false } : undefined,
  };
}
```

### JSON-LD Structured Data

Add to page templates:
```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: frontmatter.title,
  datePublished: frontmatter.publishedAt,
  author: {
    "@type": "Person",
    name: author.name,
  },
};

return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    {/* page content */}
  </>
);
```

---

## Summary

| Aspect | Decision |
|--------|----------|
| **Organization** | By content type (`content/blog/`, `content/case-studies/`) |
| **File format** | MDX for all content |
| **Metadata** | YAML frontmatter |
| **Assets** | Colocated in `assets/` subdirectories |
| **i18n** | Start without locales; use `.{locale}.mdx` suffix when needed |
| **Type safety** | Shared TypeScript interfaces in `lib/content-types.ts` |
| **Data access** | Unified `lib/content.ts` with React cache |
| **Shared data** | YAML files (`_authors.yaml`, `_categories.yaml`) |

### Key Benefits

1. **Single source of truth** — All content lives in the repo
2. **Git-based workflow** — Version control, PRs for content changes
3. **Type safety** — TypeScript interfaces catch errors
4. **Great DX** — IDE autocompletion for frontmatter
5. **Build-time safety** — Invalid content fails the build
6. **Future-proof** — Easy to add i18n without restructuring

---

## Migration Status

### Completed

1. [x] Create directory structure
2. [x] Define shared YAML files (`_authors.yaml`, `_categories.yaml`)
3. [x] Create `lib/content.ts` and `lib/content-types.ts`
4. [x] Migrate blog posts (update frontmatter to use author refs)
5. [x] Migrate case studies from TypeScript data file
6. [x] Migrate expertise pages
7. [x] Migrate industries pages
8. [x] Update blog route handler to use new content library

### Remaining Work

The following routes still use the old TypeScript data files. They can be updated incrementally:

| Route | Old Data File | Status |
|-------|--------------|--------|
| `app/blog/page.tsx` | `lib/blog-data.ts` | Listing page needs update |
| `app/case-studies/page.tsx` | `lib/case-studies-data.ts` | Listing page + components |
| `app/expertise/[slug]/page.tsx` | `lib/expertise-data.tsx` | Route needs update |
| `app/industries/[slug]/page.tsx` | `lib/industries-data.tsx` | Route needs update |
| `app/use-cases/[slug]/page.tsx` | `lib/use-cases-data.ts` | Not yet migrated |

**Note:** Content now exists in both MDX files and old TypeScript data files. Once routes are updated, the old data files can be removed.

### Optional Enhancements

- [ ] Add content validation script
- [ ] Update expertise/industries routes to use new content library
- [ ] Create use-cases MDX content
- [ ] Add sitemap generation from content
