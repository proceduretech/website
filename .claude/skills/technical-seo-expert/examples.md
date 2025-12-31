# Technical SEO Expert - Example Use Cases

## Example 1: Pre-Production Launch Audit

**User Request**: "We're about to launch to production. Can you do a final SEO check?"

**Agent Response**:
```
Starting comprehensive pre-launch technical SEO audit...

# Technical SEO Audit Report
Generated: 2025-12-31

## Executive Summary
- **Overall SEO Score**: 78/100
- **Critical Issues**: 2 found
- **High Priority Issues**: 5 found
- **Quick Wins Identified**: 8 opportunities
- **Estimated Implementation Time**: 4-6 hours

## Scoring Breakdown
- Technical Infrastructure: 82/100
- On-Page Optimization: 71/100
- Schema Markup: 65/100
- Performance (Core Web Vitals): 88/100
- Content Structure: 80/100

---

## Critical Issues (Priority 1)

### Missing robots.txt File - CRITICAL
**Issue**: No robots.txt file found at app/robots.ts
**Impact**: Search engines may crawl unwanted pages, waste crawl budget
**Current State**: File doesn't exist
**Recommended Fix**: Create app/robots.ts with proper directives
**Code Example**:
```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```
**Effort**: Quick Win (15 minutes)
**Expected Impact**: Improved crawl efficiency, prevent indexing of technical pages

### Sitemap Missing lastmod Timestamps - CRITICAL
**Issue**: app/sitemap.ts doesn't include lastModified dates
**Impact**: Search engines can't determine freshness, may not recrawl updated pages
**Current State**: Static sitemap without timestamps
**Code Example**:
```typescript
// BEFORE
{
  url: 'https://yourdomain.com/page',
  priority: 0.8,
}

// AFTER
{
  url: 'https://yourdomain.com/page',
  lastModified: new Date().toISOString(),
  changeFrequency: 'weekly',
  priority: 0.8,
}
```

[Continue with High, Medium, Low priority issues...]

Would you like me to implement these fixes? I recommend starting with the 2 critical issues first.
```

---

## Example 2: Core Web Vitals Optimization

**User Request**: "Our LCP is 4.2s, can you help optimize it?"

**Agent Response**:
```
Analyzing Core Web Vitals and performance bottlenecks...

# Core Web Vitals Optimization Report

## Current Performance
- **LCP**: 4.2s ❌ (Target: < 2.5s)
- **INP**: 180ms ✅ (Target: < 200ms)
- **CLS**: 0.08 ✅ (Target: < 0.1)

## LCP Analysis

### Issue 1: Hero Image Not Optimized - CRITICAL
**File**: components/sections/Hero.tsx
**Problem**: Large hero background image (2.4MB PNG) loaded without priority
**Impact**: Blocks LCP, delays page render by ~2.8s

**Fix**:
```typescript
// BEFORE
<div
  style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
  className="hero-section"
/>

// AFTER
import Image from 'next/image'

<div className="hero-section">
  <Image
    src="/images/hero-bg.webp"
    alt=""
    fill
    priority
    quality={85}
    sizes="100vw"
    className="object-cover"
  />
</div>
```

**Additional Actions**:
1. Convert PNG → WebP (2.4MB → 180KB)
2. Add priority prop to trigger preload
3. Use next/image for automatic optimization

**Expected Impact**: LCP reduction to ~1.8s (56% improvement)

### Issue 2: Font Loading Blocking Render
**File**: app/layout.tsx
**Problem**: Custom fonts loading without font-display strategy

**Fix**:
```typescript
// BEFORE
const inter = Inter({ subsets: ['latin'] })

// AFTER
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevents FOIT
  preload: true,
})
```

**Expected Impact**: Additional 200ms LCP improvement

[Continue with other performance issues...]

Implementing these fixes should bring your LCP to ~1.6s. Proceed?
```

---

## Example 3: Schema Markup Audit

**User Request**: "Add schema markup to help with rich snippets"

**Agent Response**:
```
Auditing current schema implementation and identifying opportunities...

# Schema Markup Audit

## Current State: 15/100
- No structured data found on any pages
- Missing critical schema types for enterprise site
- No rich snippet eligibility

## Recommended Schema Implementation

### Priority 1: Organization Schema (Sitewide)
**Location**: app/layout.tsx
**Purpose**: Establishes brand identity, enables knowledge panel

```typescript
// Add to root layout
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company Name",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "description": "Enterprise AI engineering services",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0100",
    "contactType": "sales",
    "email": "contact@yourdomain.com"
  },
  "sameAs": [
    "https://twitter.com/yourcompany",
    "https://linkedin.com/company/yourcompany"
  ]
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

### Priority 2: FAQPage Schema
**Location**: components/sections/FAQ.tsx (line 72)
**Impact**: FAQ rich snippets in search results (10-15% CTR increase)

```typescript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}
```

### Priority 3: Service Schema (All Service Pages)
**Location**: app/services/[slug]/page.tsx
**Impact**: Service listings in local pack, enhanced SERP display

[Continue with all schema recommendations...]

Total schemas to implement: 7
Estimated rich snippet eligibility increase: 65%
Implementation time: 3-4 hours

Shall I proceed with implementation?
```

---

## Example 4: URL Structure Optimization

**User Request**: "Should we change our URL structure before launch?"

**Agent Response**:
```
Analyzing URL structure and SEO implications...

# URL Structure Analysis

## Current Structure: 72/100

### ✅ What's Working Well
1. Clean URLs without parameters
2. Logical hierarchy (expertise/industries/services)
3. Consistent slug formatting (kebab-case)
4. No duplicate content issues
5. Proper trailing slash handling

### ⚠️ Recommendations

#### 1. Service URLs Could Be More Descriptive
**Current**: `/services/product-build`
**Better**: `/services/ai-product-development` or `/ai-product-engineering`

**Rationale**:
- Target keyword "AI product development" (880 searches/mo)
- Current "product build" (90 searches/mo)
- More descriptive for users

**⚠️ IMPORTANT**: Only implement if pre-launch. Post-launch requires:
- 301 redirects
- Search Console URL change notification
- Temporary ranking fluctuation risk

#### 2. Blog URL Structure
**Current**: `/blogs/[slug]`
**Better**: `/blog/[slug]` (singular)

**Rationale**:
- Industry standard is singular
- Shorter, cleaner URLs
- Better semantic meaning

**Implementation**:
```typescript
// Move app/blogs → app/blog
// Update all internal links
// Add redirect:

// next.config.js
redirects: async () => [
  {
    source: '/blogs/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
]
```

#### 3. Expertise Pages Missing Descriptive Segments
**Current**: `/expertise/ai-agents`
**Consider**: `/expertise/ai-agent-development`

**Trade-offs**:
- ✅ More descriptive, better keyword targeting
- ❌ Slightly longer URLs
- ❌ Existing URLs are already good

**Recommendation**: Keep current structure (already optimal)

---

## Recommendation Summary

**Pre-Launch (Safe to Change)**:
1. ✅ Rename `/blogs` → `/blog`
2. ⚠️ Consider service URL improvements (optional)

**Post-Launch (Requires Redirects)**:
- Not recommended unless significant keyword opportunity exists

**Verdict**: Your URL structure is already strong (72/100). Only implement blog → blogs change for minor improvement to 78/100.

Proceed with blog rename? This is a quick win with no SEO risk.
```

---

## Example 5: Meta Description Audit

**User Request**: "Are our meta descriptions optimized?"

**Agent Response**:
```
Auditing meta descriptions across all pages...

# Meta Description Audit Report

## Overall Score: 58/100

Pages analyzed: 47
- ✅ Optimal (120-160 chars, unique, compelling): 18 pages (38%)
- ⚠️ Too short (< 120 chars): 12 pages (26%)
- ⚠️ Too long (> 160 chars): 8 pages (17%)
- ❌ Missing/duplicate: 9 pages (19%)

## Critical Issues

### Missing Meta Descriptions (9 pages)
These pages have no description (Google will generate one):

1. **app/expertise/ai-agents/page.tsx**
   - Current: None
   - Recommended: "Build production-ready AI agents with our senior engineering team. From autonomous systems to LLM orchestration—embedded expertise for enterprise AI."
   - Target: "AI agents development" (1.2K searches/mo)

2. **app/services/enterprise/page.tsx**
   - Current: None
   - Recommended: "Enterprise AI engineering services for Fortune 500 companies. Secure, scalable AI systems with dedicated teams embedded in your workflow within 2-5 days."
   - Target: "enterprise AI services" (890 searches/mo)

[... list remaining 7 pages ...]

### Too Short Descriptions (12 pages)
These lose valuable SERP real estate:

1. **app/about-us/page.tsx** (Line 8)
   - Current (89 chars): "Learn about our AI engineering team and mission."
   - Recommended (158 chars): "Meet the senior AI engineers behind production-grade AI systems. 80+ enterprise clients trust our embedded teams for LLM applications, AI agents, and secure AI infrastructure."
   - Issues: Generic, no keywords, missing value proposition

[... list remaining 11 pages ...]

### Too Long Descriptions (8 pages)
These get truncated in search results:

1. **app/services/staff-augmentation/page.tsx** (Line 12)
   - Current (187 chars): "Augment your engineering team with senior AI specialists who integrate directly with your development workflow and deliver production-ready AI systems using modern frameworks and best practices."
   - Recommended (154 chars): "Senior AI engineers embedded with your team within days. Production-ready LLM apps, AI agents, and secure systems. Same tools, same standups."
   - Saved: 33 chars, improved clarity, added urgency

[... list remaining 7 pages ...]

## Quick Win Opportunities

**Homepage** (app/page.tsx, line 5):
```typescript
// BEFORE (142 chars)
description: "Enterprise AI engineering services. Build production-ready AI systems with embedded senior engineers. LLM applications, AI agents, secure AI."

// AFTER (158 chars) - Optimized
description: "Enterprise AI engineering that ships to production. Senior engineers embedded with your team build LLM apps, AI agents & secure systems in 2-5 days."

// Changes:
// ✅ Added "ships to production" (key differentiator)
// ✅ Added "2-5 days" (urgency/specificity)
// ✅ Stronger call to value
```

---

## Implementation Plan

**Phase 1 - Critical (9 pages)**: Add missing descriptions
**Phase 2 - Quick Wins (12 pages)**: Expand short descriptions
**Phase 3 - Optimization (8 pages)**: Trim long descriptions

**Estimated Impact**:
- 15-20% CTR improvement from SERP
- Better keyword targeting
- Reduced bounce rate (better expectation matching)

**Time Required**: 2-3 hours

Shall I implement these optimizations?
```

---

## Example 6: Internal Linking Audit

**User Request**: "How's our internal linking structure?"

**Agent Response**:
```
Analyzing internal linking architecture...

# Internal Linking Audit

## Overall Structure: 75/100

- ✅ No orphan pages detected
- ✅ Logical hierarchy maintained
- ⚠️ Some deep pages require 5+ clicks from homepage
- ⚠️ Inconsistent anchor text optimization
- ❌ Missing contextual links between related content

## Link Equity Distribution

### High Authority Pages (Should Link Out More)
1. **Homepage** (app/page.tsx)
   - Current outbound links: 12
   - Recommendation: Add 4-6 contextual links to key service pages
   - Example: In hero section, link "LLM applications" → /expertise/llm-applications

2. **About Us page** (app/about-us/page.tsx)
   - Current outbound links: 6
   - Recommendation: Link team expertise mentions to specific expertise pages

### Orphaned Deep Content (Needs More Internal Links)
1. **app/use-cases/document-ai/page.tsx**
   - Current inbound links: 2 (only from navigation)
   - Recommendation: Add contextual links from:
     - Blog posts about AI
     - Expertise pages (AI agents, LLM applications)
     - Related use cases pages

## Anchor Text Optimization

### Generic Anchors to Improve
Found 23 instances of generic anchor text:

**Example 1** - components/sections/Services.tsx (line 214)
```typescript
// BEFORE
<Link href="/expertise/ai-agents">
  Learn more →
</Link>

// AFTER
<Link href="/expertise/ai-agents">
  Explore AI Agent Development →
</Link>
```

**Example 2** - app/about-us/page.tsx (line 156)
```typescript
// BEFORE
<Link href="/contact-us">
  Contact us
</Link>

// AFTER
<Link href="/contact-us">
  Start Your AI Project
</Link>
```

## Contextual Linking Opportunities

### Blog → Service Pages
Add contextual links in blog posts:

**app/blogs/ai-security-best-practices/page.tsx**:
```markdown
When implementing [AI security measures](/expertise/ai-security),
consider these best practices...

Our team specializes in [secure AI development](/services/enterprise)
for enterprise organizations...
```

### Service Page Cross-Linking
**app/services/product-build/page.tsx**:
```tsx
<p>
  We integrate advanced <Link href="/expertise/llm-applications">LLM
  applications</Link> and <Link href="/expertise/ai-agents">AI agents</Link>
  into your product architecture.
</p>
```

---

## Implementation Checklist

- [ ] Add 8 contextual homepage links
- [ ] Update 23 generic anchors to descriptive text
- [ ] Add 15 cross-links between related service/expertise pages
- [ ] Add 12 blog → service contextual links
- [ ] Create breadcrumb component (BreadcrumbList schema)

**Expected Impact**:
- Improved crawlability and indexing
- Better distribution of link equity
- 5-10% increase in internal page discovery
- Enhanced topical authority signals

**Time**: 3-4 hours

Proceed with implementation?
```

---

## Common Patterns

### Pattern 1: Pre-Launch Checklist
User asks for final SEO review before production → Comprehensive multi-area audit

### Pattern 2: Performance Issue
User reports slow Core Web Vitals → Focused technical performance audit

### Pattern 3: Rich Snippets
User wants better SERP appearance → Schema markup audit and implementation

### Pattern 4: Content Optimization
User asks about rankings → On-page content, meta, and keyword optimization

### Pattern 5: Architecture Review
User considers URL changes → URL structure analysis with migration implications

### Pattern 6: Link Building Prep
User asks about site structure → Internal linking audit and optimization
