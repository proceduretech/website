# Blog Resource Page Design Specification

## Procedure AI Engineering Blog

---

## 1. HERO SECTION

### Layout Description

The hero section uses the existing `PageHero` component pattern but with a content-focused approach suitable for a resource/blog landing page.

**Structure (top to bottom, centered):**
```
[Badge with pulsing indicator]
       |
[Main Headline with accent]
       |
[Subheadline/description]
       |
[Trust Stats Row - 3 columns]
       |
[Search Bar - optional]
```

### Visual Specifications

**Badge:**
```tsx
// Teal variant (matches existing pattern)
className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
           bg-accent-teal/10 border border-accent-teal/20"
```
- Pulsing dot: `w-1.5 h-1.5 rounded-full animate-pulse bg-accent-teal-light`
- Text: `text-sm font-medium text-accent-teal-light`
- Content example: "Engineering Insights"

**Headline:**
```tsx
className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight
           leading-[1.1] text-text-primary"
```
- Main text: "Engineering AI Systems"
- Accent text (text-highlight #00CCB8): "That Actually Ship"

**Description:**
```tsx
className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
```

**Trust Stats (3-column grid):**
```tsx
className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto"
```

Each stat card:
```tsx
className="p-4 sm:p-6 rounded-xl text-center bg-surface/80
           backdrop-blur-sm border border-border"
```
- Value: `text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight`
- Label: `text-xs sm:text-sm text-text-secondary mt-1 sm:mt-2`

Suggested stats:
- "50+" / "Technical Deep-Dives"
- "15K+" / "Monthly Readers"
- "100%" / "Practitioner-Written"

**Background Treatment:**
- Same ambient glow pattern as PageHero: `bg-accent-teal/8` and `bg-accent-blue/6` with 100-120px blur
- Subtle grid pattern at `opacity-[0.015]`

### Animation Specifications

Using Framer Motion (existing patterns):
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: [staggered 0.1 increments] }}
```

---

## 2. FEATURED POSTS SECTION

### Layout: Hero Feature Card (Recommended for 1 featured post)

A full-width horizontal card that spans the container with a large image on the left (60%) and content on the right (40%).

```
[Large Image 60%] | [Content Stack 40%]
                  |   - Category Badge
                  |   - Title (larger)
                  |   - Excerpt (2-3 lines)
                  |   - Author + Date + Read time
                  |   - CTA Button
```

### Visual Specifications

**Featured Card Container:**
```tsx
className="relative rounded-2xl overflow-hidden bg-surface-elevated
           border border-border group"
```

**Glow Effect on Hover:**
```tsx
// Outer glow wrapper
className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal/20
           to-accent-blue/20 rounded-2xl blur opacity-0
           group-hover:opacity-50 transition-opacity duration-500"
```

**Image Treatment:**
```tsx
// Container
className="relative w-full lg:w-[60%] aspect-[16/10] overflow-hidden"

// Image
className="object-cover group-hover:scale-105
           transition-transform duration-700"

// Gradient overlay
className="absolute inset-0 bg-gradient-to-r from-transparent
           via-transparent to-surface-elevated/90 lg:block hidden"
```

**Content Area:**
```tsx
className="p-8 lg:p-10 flex flex-col justify-center"
```

**Featured Badge:**
```tsx
className="inline-flex items-center gap-2 px-3 py-1 rounded-full
           bg-accent-blue/20 border border-accent-blue/30
           text-accent-blue-light text-xs font-semibold mb-4"
```
- Icon: Star or sparkle icon (w-3 h-3)
- Text: "Featured"

**Title (Featured):**
```tsx
className="text-2xl lg:text-3xl font-bold text-text-primary
           leading-tight mb-4 group-hover:text-accent-teal-light
           transition-colors"
```

**Meta Row:**
```tsx
className="flex items-center gap-4 text-sm text-text-muted"
```
- Author avatar: `w-8 h-8 rounded-full bg-gradient-to-br from-accent-teal to-accent-blue`
- Author name: `font-medium text-text-secondary`
- Separator: `w-1 h-1 rounded-full bg-border`
- Date: `text-text-muted`
- Read time: `text-text-muted`

### Responsive Behavior

- **Desktop (lg+):** Horizontal layout, image 60%, content 40%
- **Tablet (md):** Stack vertically, image on top (aspect-video)
- **Mobile:** Stack vertically, image on top (aspect-[4/3])

---

## 3. BLOG POST CARD DESIGN

### Card Structure

```
[Image Container - aspect-[16/10]]
  - Category Badge (top-left)
  - Post Type Badge (top-right, optional)
[Content Container]
  - Title (h3)
  - Excerpt (2 lines max)
  - Meta Row (author, date, read time)
```

### Visual Specifications

**Card Container:**
```tsx
className="group relative h-full flex flex-col bg-surface-elevated
           border border-border rounded-2xl overflow-hidden
           hover:border-accent-teal/30 transition-all duration-300"
```

**Hover Glow Effect:**
```tsx
className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal/20
           to-accent-blue/20 rounded-2xl blur opacity-0
           group-hover:opacity-50 transition-opacity duration-500"
```

**Image Container:**
```tsx
className="relative overflow-hidden aspect-[16/10]"
```

**Image:**
```tsx
className="object-cover w-full h-full group-hover:scale-105
           transition-transform duration-500"
```

**Category Badge (on image):**
```tsx
className="absolute top-4 left-4 px-2.5 py-1 text-xs font-medium
           rounded-full backdrop-blur bg-accent-teal/60
           border border-accent-teal/50 text-white"
```

Category color variants:
- LLM Engineering: `bg-accent-teal/60 border-accent-teal/50`
- AI Security: `bg-accent-blue/60 border-accent-blue/50`
- Production Systems: `bg-surface-elevated/80 border-border`
- AI Agents: `bg-highlight/20 border-highlight/30 text-highlight`

**Content Container:**
```tsx
className="flex-1 flex flex-col p-6"
```

**Title:**
```tsx
className="text-lg font-semibold text-text-primary leading-snug
           mb-3 group-hover:text-accent-teal-light
           transition-colors line-clamp-2"
```

**Excerpt:**
```tsx
className="text-sm text-text-secondary leading-relaxed
           flex-1 mb-4 line-clamp-2"
```

**Meta Row:**
```tsx
className="flex items-center gap-3 text-xs text-text-muted"
```

---

## 4. CATEGORY FILTER SYSTEM

### Desktop Layout

Horizontal row of pill buttons with active state indicator:

```
[All] [LLM Engineering] [AI Security] [Production Systems] [AI Agents] [MLOps]
```

### Visual Specifications

**Filter Container:**
```tsx
className="relative py-8 bg-surface border-y border-border"
```

**Filter Pill (Inactive):**
```tsx
className="px-5 py-2.5 text-sm font-medium rounded-full
           bg-surface-elevated text-text-secondary border border-border
           hover:border-accent-teal/30 hover:text-text-primary
           transition-all duration-200"
```

**Filter Pill (Active):**
```tsx
className="px-5 py-2.5 text-sm font-medium rounded-full
           bg-accent-teal/20 text-accent-teal-light
           border border-accent-teal/30"
```

**Active Indicator Animation:**

Using Framer Motion layoutId for smooth indicator transition:
```tsx
<motion.div
  layoutId="activeFilter"
  className="absolute inset-0 bg-accent-teal/20 border border-accent-teal/30
             rounded-full"
  transition={{ type: "spring", stiffness: 500, damping: 30 }}
/>
```

### Mobile Layout

Horizontal scrollable row with fade edges:

**Container:**
```tsx
className="relative overflow-x-auto scrollbar-hide -mx-4 px-4"
```

**Fade Edges:**
```tsx
// Left fade
className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r
           from-surface to-transparent pointer-events-none z-10"

// Right fade
className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l
           from-surface to-transparent pointer-events-none z-10"
```

---

## 5. GRID LAYOUT

### Specifications

**Container:**
```tsx
className="max-w-7xl mx-auto px-4 sm:px-6"
```

**Grid:**
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
```

### Responsive Breakpoints

- **Mobile (< 768px):** 1 column, gap-6 (24px)
- **Tablet (768px - 1024px):** 2 columns, gap-6 (24px)
- **Desktop (> 1024px):** 3 columns, gap-8 (32px)

### Background Pattern

```tsx
className="absolute inset-0 opacity-[0.02]"
style={{
  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3e%3cpath d='M16 8v16M8 16h16' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
}}
```

### Load More Button

```tsx
className="inline-flex items-center gap-2 px-8 py-4 text-base
           font-semibold text-text-primary bg-surface-elevated
           border border-border rounded-xl
           hover:border-accent-teal hover:bg-accent-teal/10
           transition-all duration-200"
```

### Staggered Load Animation

```tsx
{posts.map((post, idx) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
  >
    <BlogPostCard post={post} />
  </motion.div>
))}
```

---

## 6. NEWSLETTER SIGNUP COMPONENT

### Design: Inline Card

Takes one card position in the grid, visually distinct:

**Card Container:**
```tsx
className="relative rounded-2xl overflow-hidden p-8
           bg-gradient-to-br from-accent-teal/10 to-accent-blue/10
           border border-accent-teal/20"
```

**Decorative Background Elements:**
```tsx
// Glow orb
className="absolute -top-20 -right-20 w-40 h-40
           bg-accent-teal/20 rounded-full blur-[60px]"

// Secondary orb
className="absolute -bottom-10 -left-10 w-32 h-32
           bg-accent-blue/15 rounded-full blur-[50px]"
```

**Icon Container:**
```tsx
className="w-12 h-12 rounded-xl bg-accent-teal/20
           border border-accent-teal/30 flex items-center
           justify-center mb-5"
```

**Form Row:**
```tsx
className="flex gap-3"
```

**Email Input:**
```tsx
className="flex-1 px-4 py-3 bg-surface border border-border
           rounded-xl text-text-primary placeholder-text-muted
           focus:outline-none focus:border-accent-teal
           focus:ring-2 focus:ring-accent-teal/20"
```

**Submit Button:**
```tsx
className="px-6 py-3 bg-cta text-cta-text font-semibold rounded-xl
           hover:brightness-110 transition-all shadow-lg shadow-cta/25
           flex-shrink-0"
```

---

## 7. INDIVIDUAL BLOG POST PAGE LAYOUT

### Hero/Header Section

**Layout:**
```
[Breadcrumb Navigation]
[Category Badge]
[Title - Large]
[Meta Row: Author + Date + Read Time]
[Featured Image - Full Width]
```

**Article Title:**
```tsx
className="text-3xl sm:text-4xl lg:text-5xl font-bold
           text-text-primary leading-tight mb-6"
```

**Featured Image:**
```tsx
className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12"
```

### Main Content Layout

**Two-Column Layout (Desktop):**
```
[Table of Contents - Sticky] | [Article Content]
         25% width           |      75% width
```

**Grid:**
```tsx
className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16"
```

### Table of Contents Sidebar

**Sticky Wrapper:**
```tsx
className="sticky top-32"
```

**TOC Card:**
```tsx
className="bg-surface-elevated rounded-xl border border-border p-6"
```

**TOC Link (Active):**
```tsx
className="block text-sm text-accent-teal-light py-1.5 pl-4
           border-l-2 border-accent-teal"
```

### Body Content Typography

**Custom Prose Styles:**

```css
/* Headings */
.prose h2 {
  @apply text-2xl font-bold text-text-primary mt-12 mb-6 scroll-mt-24;
}

/* Links */
.prose a {
  @apply text-accent-teal-light hover:underline
         underline-offset-4 decoration-accent-teal/50;
}

/* Blockquotes */
.prose blockquote {
  @apply border-l-4 border-accent-teal pl-6 italic
         text-text-secondary bg-surface/50 py-4 pr-6
         rounded-r-xl my-8;
}
```

### Code Block Styling

**Inline Code:**
```tsx
className="px-1.5 py-0.5 text-sm font-mono text-accent-teal-light
           bg-surface-elevated rounded border border-border"
```

**Code Block Container:**
```tsx
className="relative rounded-xl overflow-hidden my-8 bg-surface border border-border"
```

### Author Bio Card

**Container:**
```tsx
className="mt-16 p-6 sm:p-8 rounded-2xl bg-surface-elevated
           border border-border"
```

### Related Posts Section

**Container:**
```tsx
className="mt-20 pt-16 border-t border-border"
```

**Grid:**
```tsx
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
```

---

## 8. VISUAL DETAILS AND EFFECTS

### Gradient Glow Effects

**Ambient Background Glows:**
```tsx
// Teal glow (primary)
className="absolute w-[600px] h-[400px] bg-accent-teal/8
           rounded-full blur-[120px]"

// Blue glow (secondary)
className="absolute w-[500px] h-[350px] bg-accent-blue/6
           rounded-full blur-[100px]"
```

**Card Hover Glow:**
```tsx
className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal/20
           to-accent-blue/20 rounded-2xl blur opacity-0
           group-hover:opacity-50 transition-opacity duration-500"
```

### Animation Specifications

**Scroll-Triggered Reveals:**
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-50px" }}
transition={{ duration: 0.5 }}
```

**Hover Effects:**
```tsx
// Image zoom
group-hover:scale-105
transition-transform duration-500

// Border color
hover:border-accent-teal/30
transition-all duration-300

// Text color
group-hover:text-accent-teal-light
transition-colors
```

### Empty State Design

**Container:**
```tsx
className="text-center py-16"
```

**Icon Container:**
```tsx
className="w-16 h-16 rounded-2xl bg-surface-elevated border border-border
           flex items-center justify-center mx-auto mb-4"
```

**Reset Button:**
```tsx
className="px-6 py-3 text-sm font-semibold text-accent-teal-light
           bg-accent-teal/10 border border-accent-teal/30 rounded-lg
           hover:bg-accent-teal/20 transition-colors"
```

---

## 9. MOBILE CONSIDERATIONS

### Touch-Friendly Elements

- Filter pills: min-height 44px
- Cards: Full card is clickable
- Buttons: min-height 48px on mobile

### Sticky Elements

**Filter Bar (Mobile):**
```tsx
className="sticky top-[64px] z-40 bg-surface border-b border-border backdrop-blur-md"
```

---

## COLOR REFERENCE

| Element | Color | Tailwind Class |
|---------|-------|----------------|
| Background (base) | #0F172A | `bg-base` |
| Surface (elevated) | #131B2E | `bg-surface-elevated` |
| Border | #1E293B | `border-border` |
| Text (primary) | #E5E7EB | `text-text-primary` |
| Text (secondary) | #9CA3AF | `text-text-secondary` |
| Text (muted) | #7C8594 | `text-text-muted` |
| Highlight/Accent text | #00CCB8 | `text-highlight` |
| Accent (teal) | #14B8A6 | `text-accent-teal-light` |
| Accent (blue) | #3B82F6 | `text-accent-blue-light` |
| CTA button | #007DE5 | `bg-cta` |
| CTA text | #FCFCFC | `text-cta-text` |

---

## COMPONENT STRUCTURE

```
components/
  blog/
    BlogHero.tsx              // Hero section with stats
    BlogFilters.tsx           // Category filter pills
    BlogPostCard.tsx          // Standard post card
    BlogFeaturedCard.tsx      // Hero featured post card
    BlogGrid.tsx              // Grid container with animations
    BlogNewsletter.tsx        // Newsletter signup component
    BlogEmpty.tsx             // Empty state
    BlogPostContent.tsx       // Article body renderer
    BlogTableOfContents.tsx   // Sticky TOC sidebar
    BlogAuthorBio.tsx         // Author card
    BlogRelatedPosts.tsx      // Related posts section
    index.ts                  // Barrel export
```

---

## DATA TYPES (TypeScript)

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;  // MDX or HTML
  featuredImage: string;
  category: BlogCategory;
  postType: 'article' | 'guide' | 'case-study' | 'news';
  author: Author;
  publishedAt: Date;
  updatedAt?: Date;
  readTime: number;  // minutes
  tags?: string[];
  featured?: boolean;
}

interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
}

interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  color: 'teal' | 'blue' | 'default' | 'highlight';
}
```
