# Technical SEO Expert - Reference Guide

## Quick Reference: SEO Audit Checklist

### Technical Infrastructure
- [ ] robots.txt exists and configured correctly
- [ ] XML sitemap generated with lastModified dates
- [ ] Canonical tags implemented properly
- [ ] No redirect chains (max 1 redirect)
- [ ] HTTPS enforced across all pages
- [ ] 404 pages have proper status codes
- [ ] No broken internal/external links
- [ ] Proper URL structure (clean, hierarchical)
- [ ] Mobile-friendly responsive design
- [ ] Structured data validates (Google Rich Results Test)

### Core Web Vitals
- [ ] LCP < 2.5s (Largest Contentful Paint)
- [ ] INP < 200ms (Interaction to Next Paint)
- [ ] CLS < 0.1 (Cumulative Layout Shift)
- [ ] Images optimized (WebP/AVIF, lazy loading)
- [ ] Fonts optimized (display: swap, preload)
- [ ] JavaScript code-split and optimized
- [ ] Critical CSS inlined
- [ ] Resource hints (preconnect, prefetch) used

### On-Page SEO
- [ ] Unique title tags (50-60 chars, keyword-optimized)
- [ ] Unique meta descriptions (120-160 chars)
- [ ] H1 tags present and keyword-optimized (one per page)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text on all images
- [ ] Internal linking with descriptive anchors
- [ ] Clean, semantic HTML structure
- [ ] Keywords in URL slugs
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags

### Schema Markup
- [ ] Organization schema (sitewide)
- [ ] WebSite schema (homepage)
- [ ] BreadcrumbList schema (all pages)
- [ ] Service schema (service pages)
- [ ] FAQPage schema (FAQ sections)
- [ ] Article/BlogPosting schema (blog posts)
- [ ] Review/AggregateRating schema (testimonials)
- [ ] LocalBusiness schema (if applicable)

### Content Quality
- [ ] Unique content (no duplication)
- [ ] Target keyword in first paragraph
- [ ] Keyword density 1-2% (natural usage)
- [ ] LSI keywords present
- [ ] Content length appropriate (min 300 words for articles)
- [ ] E-E-A-T signals (expertise, experience, authority, trust)
- [ ] Clear value proposition
- [ ] Updated dates shown for timeliness

---

## Next.js 16 App Router SEO Patterns

### 1. Static Metadata
```typescript
// app/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title - Brand Name',
  description: 'Compelling meta description 120-160 characters',
  keywords: ['keyword1', 'keyword2'], // Optional, less important now
  authors: [{ name: 'Author Name' }],
  creator: 'Company Name',
  publisher: 'Company Name',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'OG Title (can differ from title)',
    description: 'OG Description',
    siteName: 'Site Name',
    images: [{
      url: 'https://yourdomain.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Image description',
    }],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Title',
    description: 'Twitter Description',
    creator: '@twitterhandle',
    images: ['https://yourdomain.com/twitter-image.jpg'],
  },

  // Indexing directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: 'https://yourdomain.com/page',
  },

  // Verification
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    bing: 'bing-verification-code',
  },
}
```

### 2. Dynamic Metadata
```typescript
// app/blog/[slug]/page.tsx
import { Metadata } from 'next'

interface Props {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch data
  const post = await getPost(params.slug)

  return {
    title: `${post.title} - Company Blog`,
    description: post.excerpt,
    keywords: post.tags,

    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [post.coverImage],
    },

    alternates: {
      canonical: `https://yourdomain.com/blog/${params.slug}`,
    },
  }
}
```

### 3. Sitemap Generation
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: 'https://yourdomain.com/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Dynamic pages from database/CMS
  const blogPosts = await getAllBlogPosts()
  const blogPages = blogPosts.map(post => ({
    url: `https://yourdomain.com/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
```

### 4. Robots.txt
```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
          '/*?*sort=', // Filter pages
        ],
      },
      // Aggressive crawlers
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot'],
        disallow: ['/'], // Block AI scrapers if desired
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

### 5. Schema Markup Component
```typescript
// components/Schema.tsx
interface SchemaProps {
  schema: object
}

export function Schema({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  )
}

// Usage in page:
import { Schema } from '@/components/Schema'

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [...]
  }

  return (
    <>
      <Schema schema={schema} />
      {/* Page content */}
    </>
  )
}
```

---

## Common Schema Templates

### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "description": "Company description",
  "foundingDate": "2020-01-01",
  "founders": [
    {
      "@type": "Person",
      "name": "Founder Name"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-555-0100",
      "contactType": "sales",
      "email": "sales@yourdomain.com",
      "areaServed": "US",
      "availableLanguage": ["English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-555-0200",
      "contactType": "customer service",
      "email": "support@yourdomain.com"
    }
  ],
  "sameAs": [
    "https://twitter.com/company",
    "https://linkedin.com/company/company",
    "https://github.com/company"
  ]
}
```

### Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Engineering Services",
  "provider": {
    "@type": "Organization",
    "name": "Company Name",
    "url": "https://yourdomain.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LLM Application Development",
          "description": "Build production-ready LLM applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Agent Development",
          "description": "Custom AI agents for enterprise"
        }
      }
    ]
  }
}
```

### FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your pricing model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer flexible pricing based on team size and engagement length. Contact us for a custom quote."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our engineers can be embedded with your team within 2-5 days of contract signing."
      }
    }
  ]
}
```

### Article/BlogPosting Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article Title",
  "alternativeHeadline": "Alternative Headline",
  "image": "https://yourdomain.com/article-image.jpg",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://yourdomain.com/authors/author-name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Company Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourdomain.com/logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-02-20",
  "description": "Article description/excerpt",
  "articleBody": "Full article text...",
  "keywords": "keyword1, keyword2, keyword3"
}
```

### Review/AggregateRating Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "John Doe"
      },
      "datePublished": "2024-01-15",
      "reviewBody": "Excellent service, highly recommend!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ]
}
```

### BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://yourdomain.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://yourdomain.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "AI Engineering",
      "item": "https://yourdomain.com/services/ai-engineering"
    }
  ]
}
```

---

## Core Web Vitals Optimization Techniques

### LCP (Largest Contentful Paint) < 2.5s

**Common Issues & Fixes:**

1. **Large images blocking render**
```tsx
// ❌ BAD
<img src="/hero.jpg" alt="Hero" />

// ✅ GOOD
<Image
  src="/hero.jpg"
  alt="Hero"
  priority // Triggers preload
  width={1200}
  height={600}
  sizes="100vw"
  quality={85}
/>
```

2. **Font loading delays**
```typescript
// ❌ BAD
const inter = Inter({ subsets: ['latin'] })

// ✅ GOOD
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevent invisible text
  preload: true,
  variable: '--font-inter',
})
```

3. **Render-blocking resources**
```tsx
// ✅ Preconnect to external domains
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://cdn.example.com" />

// ✅ Preload critical resources
<link
  rel="preload"
  href="/critical.css"
  as="style"
/>
```

### INP (Interaction to Next Paint) < 200ms

**Common Issues & Fixes:**

1. **Heavy JavaScript execution**
```typescript
// ❌ BAD - Synchronous heavy operation
const processData = () => {
  const result = heavyComputation(largeDataset)
  return result
}

// ✅ GOOD - Use Web Workers or defer
const processData = async () => {
  const worker = new Worker('/worker.js')
  return await new Promise(resolve => {
    worker.postMessage(largeDataset)
    worker.onmessage = (e) => resolve(e.data)
  })
}
```

2. **Large component trees**
```tsx
// ✅ Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  // Heavy rendering logic
}, (prevProps, nextProps) => {
  return prevProps.data.id === nextProps.data.id
})

// ✅ Lazy load off-screen components
const HeavySection = dynamic(() => import('./HeavySection'), {
  loading: () => <Skeleton />,
})
```

### CLS (Cumulative Layout Shift) < 0.1

**Common Issues & Fixes:**

1. **Images without dimensions**
```tsx
// ❌ BAD - Causes layout shift
<img src="/image.jpg" alt="Image" />

// ✅ GOOD - Reserved space
<Image
  src="/image.jpg"
  alt="Image"
  width={800}
  height={600}
/>
```

2. **Fonts causing layout shift**
```css
/* ✅ Use size-adjust for font consistency */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2');
  font-display: swap;
  size-adjust: 100%; /* Prevent layout shift */
}
```

3. **Dynamic content injection**
```tsx
// ❌ BAD - Injects content above fold
{data && <Banner>{data.message}</Banner>}

// ✅ GOOD - Reserve space
<div className="min-h-[80px]">
  {data && <Banner>{data.message}</Banner>}
</div>
```

---

## SEO Scoring Rubric

### Technical Infrastructure (25 points)
- Robots.txt configured: 3 pts
- XML sitemap with timestamps: 4 pts
- No redirect chains: 3 pts
- HTTPS enforced: 2 pts
- Canonical tags: 3 pts
- Clean URL structure: 3 pts
- No 404 errors: 3 pts
- Mobile responsive: 4 pts

### On-Page Optimization (25 points)
- Unique titles: 4 pts
- Optimized meta descriptions: 4 pts
- H1 tags with keywords: 3 pts
- Proper heading hierarchy: 3 pts
- Image alt text: 3 pts
- Internal linking: 4 pts
- Keyword optimization: 4 pts

### Schema Markup (20 points)
- Organization schema: 4 pts
- Page-specific schemas: 8 pts
- Valid structured data: 4 pts
- Rich snippet eligibility: 4 pts

### Performance (20 points)
- LCP < 2.5s: 7 pts
- INP < 200ms: 7 pts
- CLS < 0.1: 6 pts

### Content Quality (10 points)
- Unique content: 3 pts
- E-E-A-T signals: 3 pts
- Content depth: 2 pts
- Keyword targeting: 2 pts

**Total: 100 points**

---

## Common SEO Issues & Solutions

### Issue: Duplicate Content
**Symptoms**: Same content on multiple URLs
**Solutions**:
```typescript
// Use canonical tags
export const metadata = {
  alternates: {
    canonical: 'https://yourdomain.com/preferred-url',
  },
}

// Or implement 301 redirects
// next.config.js
redirects: async () => [{
  source: '/old-url',
  destination: '/new-url',
  permanent: true,
}]
```

### Issue: Slow Page Speed
**Symptoms**: LCP > 4s, poor Core Web Vitals
**Solutions**:
1. Image optimization (WebP, lazy loading, sizing)
2. Code splitting (`dynamic` imports)
3. Font optimization (`font-display: swap`)
4. CSS optimization (critical CSS inline)
5. JavaScript optimization (remove unused code)

### Issue: Poor Mobile Experience
**Symptoms**: Mobile usability issues in Search Console
**Solutions**:
```tsx
// Responsive images
<Image
  src="/image.jpg"
  alt="Responsive"
  sizes="(max-width: 768px) 100vw, 50vw"
  width={1200}
  height={800}
/>

// Mobile-friendly tap targets (min 48x48px)
<button className="min-h-[48px] min-w-[48px]">
  Click
</button>
```

### Issue: Missing Schema
**Symptoms**: No rich snippets in search results
**Solutions**: Implement relevant schema types (see templates above)

### Issue: Keyword Cannibalization
**Symptoms**: Multiple pages targeting same keyword
**Solutions**:
1. Consolidate pages (301 redirect)
2. Differentiate keyword targeting
3. Update internal linking to prioritize primary page
4. Use canonical tags if consolidation not possible

---

## Tools & Validation

### Required Tools
- **Google Search Console**: Monitor indexing, errors, performance
- **PageSpeed Insights**: Core Web Vitals analysis
- **Google Rich Results Test**: Validate schema markup
- **Screaming Frog**: Crawl analysis (for large sites)
- **Schema Markup Validator**: https://validator.schema.org

### Chrome DevTools
```javascript
// Lighthouse audit
// Run: DevTools > Lighthouse > Generate Report

// Core Web Vitals
// Run: DevTools > Performance > Record page load

// Coverage analysis (unused CSS/JS)
// Run: DevTools > Coverage tab
```

### Next.js Build Analysis
```bash
# Analyze bundle size
ANALYZE=true npm run build

# Check for optimization opportunities
npm run build -- --profile
```

---

## Monthly SEO Maintenance Checklist

- [ ] Review Google Search Console for errors
- [ ] Check Core Web Vitals performance
- [ ] Audit new content for SEO optimization
- [ ] Update sitemap with new pages
- [ ] Check for broken internal/external links
- [ ] Review and update meta descriptions
- [ ] Monitor keyword rankings
- [ ] Validate schema markup on new pages
- [ ] Check mobile usability
- [ ] Review server logs for crawl errors
- [ ] Update content with fresh information
- [ ] Analyze competitor SEO strategies
