# Blog Implementation Plan

## Overview

This document outlines the implementation plan for Procedure's enterprise-grade Engineering Blog. The blog will serve as a technical resource hub for CTOs, VPs of Engineering, and technical decision-makers.

**Related Documents:**
- [Copy Plan](./blog-copy-plan.md) - SEO-optimized copy and content strategy
- [Design Plan](./blog-design-plan.md) - Visual specifications and component designs

---

## Phase 1: Foundation & Data Layer

### 1.1 Create Blog Data Types
**File:** `lib/blog-types.ts`

```typescript
// Core types for blog posts, authors, and categories
interface BlogPost { ... }
interface Author { ... }
interface BlogCategory { ... }
```

### 1.2 Create Mock Blog Data
**File:** `lib/blog-data.ts`

- Define 6 blog categories with colors
- Create 8-10 sample blog posts (based on copy plan titles)
- Create 3-4 author profiles
- Mark 1-2 posts as featured

### 1.3 Create Blog Utility Functions
**File:** `lib/blog-utils.ts`

- `filterPostsByCategory(posts, category)`
- `sortPostsByDate(posts)`
- `getFeaturedPosts(posts)`
- `getRelatedPosts(post, allPosts)`
- `calculateReadTime(content)`

---

## Phase 2: Blog Listing Page Components

### 2.1 BlogHero Component
**File:** `components/blog/BlogHero.tsx`

- Badge with pulsing indicator
- Main headline with accent text
- Subheadline description
- Trust stats row (3 columns)
- Background gradients and patterns

### 2.2 BlogFilters Component
**File:** `components/blog/BlogFilters.tsx`

- Category filter pills
- Active state with Framer Motion layoutId
- Mobile horizontal scroll with fade edges
- AnimatePresence for content transitions

### 2.3 BlogPostCard Component
**File:** `components/blog/BlogPostCard.tsx`

- Image with category badge overlay
- Title with hover color transition
- Excerpt (2 lines, line-clamp)
- Meta row (author, date, read time)
- Hover glow effect

### 2.4 BlogFeaturedCard Component
**File:** `components/blog/BlogFeaturedCard.tsx`

- Horizontal layout (60/40 split)
- Featured badge
- Larger title and excerpt
- Full author block
- Responsive stacking

### 2.5 BlogNewsletter Component
**File:** `components/blog/BlogNewsletter.tsx`

- Gradient background card
- Icon and headline
- Email input + CTA button
- Privacy note
- Decorative glow orbs

### 2.6 BlogEmpty Component
**File:** `components/blog/BlogEmpty.tsx`

- Empty state icon
- Friendly message
- Reset filters button

### 2.7 BlogGrid Component
**File:** `components/blog/BlogGrid.tsx`

- Responsive grid layout
- Staggered animation on scroll
- Newsletter card insertion
- Load more functionality

### 2.8 Barrel Export
**File:** `components/blog/index.ts`

---

## Phase 3: Blog Listing Page

### 3.1 Blog Page
**File:** `app/blog/page.tsx`

- Import all blog components
- Client-side state for active filter
- Filter logic and animation
- SEO metadata (from copy plan)

### 3.2 Blog Layout
**File:** `app/blog/layout.tsx`

- Shared layout for blog pages
- Optional: breadcrumb navigation

---

## Phase 4: Individual Blog Post Page

### 4.1 BlogPostContent Component
**File:** `components/blog/BlogPostContent.tsx`

- Prose styling for article body
- Code block rendering
- Image handling
- Blockquote styling

### 4.2 BlogTableOfContents Component
**File:** `components/blog/BlogTableOfContents.tsx`

- Extract headings from content
- Sticky sidebar
- Active section highlighting (scroll spy)
- Reading progress bar

### 4.3 BlogAuthorBio Component
**File:** `components/blog/BlogAuthorBio.tsx`

- Author avatar and info
- Bio text
- Social links

### 4.4 BlogRelatedPosts Component
**File:** `components/blog/BlogRelatedPosts.tsx`

- Section title
- 3-column grid of related posts
- Use BlogPostCard (compact variant)

### 4.5 BlogShareButtons Component
**File:** `components/blog/BlogShareButtons.tsx`

- Twitter/X, LinkedIn, Copy link
- Desktop: fixed sidebar
- Mobile: inline after content

### 4.6 Individual Post Page
**File:** `app/blog/[slug]/page.tsx`

- Dynamic route for blog posts
- Full post layout with TOC
- Author bio
- Related posts
- SEO metadata per post

---

## Phase 5: CTA Section

### 5.1 BlogCTA Component
**File:** `components/blog/BlogCTA.tsx`

- Reuse existing CTA pattern
- Custom headline for blog context
- Primary: "Schedule a Technical Consultation"
- Secondary: "Subscribe for Updates"

---

## Phase 6: Polish & Integration

### 6.1 Update Navigation Data
**File:** `lib/navigation-data.ts`

- Verify blog link is correct
- Add any new resource links

### 6.2 Add Blog Link to Footer

### 6.3 SEO Optimization
- Add JSON-LD schema for Blog and BlogPosting
- Verify meta tags
- Add sitemap entries

### 6.4 Performance Optimization
- Image optimization with Next.js Image
- Lazy loading for below-fold content
- Virtual scrolling for long lists (if needed)

---

## Component File Structure

```
components/
  blog/
    BlogHero.tsx
    BlogFilters.tsx
    BlogPostCard.tsx
    BlogFeaturedCard.tsx
    BlogNewsletter.tsx
    BlogEmpty.tsx
    BlogGrid.tsx
    BlogPostContent.tsx
    BlogTableOfContents.tsx
    BlogAuthorBio.tsx
    BlogRelatedPosts.tsx
    BlogShareButtons.tsx
    BlogCTA.tsx
    index.ts

lib/
  blog-types.ts
  blog-data.ts
  blog-utils.ts

app/
  blog/
    page.tsx           // Blog listing
    layout.tsx         // Blog layout
    [slug]/
      page.tsx         // Individual post
```

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Create `lib/blog-types.ts`
- [ ] Create `lib/blog-data.ts` with mock data
- [ ] Create `lib/blog-utils.ts`

### Phase 2: Listing Components
- [ ] Create `BlogHero.tsx`
- [ ] Create `BlogFilters.tsx`
- [ ] Create `BlogPostCard.tsx`
- [ ] Create `BlogFeaturedCard.tsx`
- [ ] Create `BlogNewsletter.tsx`
- [ ] Create `BlogEmpty.tsx`
- [ ] Create `BlogGrid.tsx`
- [ ] Create barrel export `index.ts`

### Phase 3: Listing Page
- [ ] Create `app/blog/page.tsx`
- [ ] Create `app/blog/layout.tsx`
- [ ] Verify build passes
- [ ] Test responsive behavior

### Phase 4: Post Page Components
- [ ] Create `BlogPostContent.tsx`
- [ ] Create `BlogTableOfContents.tsx`
- [ ] Create `BlogAuthorBio.tsx`
- [ ] Create `BlogRelatedPosts.tsx`
- [ ] Create `BlogShareButtons.tsx`

### Phase 5: Post Page
- [ ] Create `app/blog/[slug]/page.tsx`
- [ ] Test dynamic routing
- [ ] Verify SEO metadata

### Phase 6: Polish
- [ ] Create `BlogCTA.tsx`
- [ ] Update navigation if needed
- [ ] Add JSON-LD schema
- [ ] Performance testing
- [ ] Final QA

---

## Future Considerations: CMS Integration

When connecting to a CMS (e.g., Sanity, Contentful, Strapi):

1. **Replace mock data** with CMS fetch calls
2. **Add ISR (Incremental Static Regeneration)** for blog pages
3. **Implement preview mode** for draft posts
4. **Add webhook handlers** for cache invalidation
5. **Set up image CDN** integration
6. **Add search functionality** (Algolia, Typesense, or built-in)

### Recommended CMS Structure

```
Blog Post
├── title (string)
├── slug (slug)
├── excerpt (text)
├── content (rich text / MDX)
├── featuredImage (image)
├── category (reference → Category)
├── author (reference → Author)
├── tags (array of strings)
├── publishedAt (datetime)
├── featured (boolean)
└── seo (object)
    ├── metaTitle
    └── metaDescription

Author
├── name (string)
├── avatar (image)
├── role (string)
├── bio (text)
├── twitter (url)
└── linkedin (url)

Category
├── name (string)
├── slug (slug)
├── description (text)
└── color (string enum)
```

---

## Notes

- All components should follow existing design patterns from case-studies and about pages
- Use Framer Motion for all animations (consistent with codebase)
- Ensure accessibility: keyboard navigation, ARIA labels, focus states
- Mobile-first responsive design
- Dark theme only (matches existing site)
