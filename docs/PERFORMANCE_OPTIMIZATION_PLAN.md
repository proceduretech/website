# Performance Optimization Plan
## Improving FCP (First Contentful Paint) & LCP (Largest Contentful Paint)

**Current Issues**: Slow FCP and LCP scores on PageSpeed Insights
**Target**: FCP < 1.8s, LCP < 2.5s (Good range)

---

## 🎯 Critical Optimizations (Immediate Impact)

### 1. Font Loading Optimization
**Problem**: Google Fonts loading without `display: swap` causes FOIT (Flash of Invisible Text)

**Fix in `app/layout.tsx`**:
```typescript
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap", // ADD THIS - Prevents invisible text flash
  preload: true,   // ADD THIS - Preloads font files
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // ADD THIS
  preload: true,   // ADD THIS
});
```

**Impact**: Reduces FCP by 200-400ms

---

### 2. Add Resource Hints
**Problem**: No DNS prefetch or preconnect for external resources

**Add to `app/layout.tsx` in `<head>`** (after line 162):
```typescript
<head>
  {/* Resource Hints for Performance */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

  {/* Existing script */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationSchema),
    }}
  />
</head>
```

**Impact**: Reduces DNS lookup time by 100-300ms

---

### 3. Optimize Next.js Config for Performance
**Add to `next.config.mjs`**:
```javascript
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // ADD THESE PERFORMANCE OPTIMIZATIONS
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optimize React
  reactStrictMode: true,

  // Reduce JavaScript bundle size
  swcMinify: true,

  // Optimize images (ALREADY GOOD - keep existing config)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // ... rest of config
  },

  // Add experimental optimizations
  experimental: {
    optimizeCss: true, // Optimize CSS loading
  },
};
```

**Impact**: Reduces JavaScript bundle by 10-15%

---

### 4. Optimize Framer Motion Loading
**Problem**: Framer Motion is loaded on every page, even when not needed immediately

**Create `/components/ui/LazyMotion.tsx`**:
```typescript
"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactNode } from "react";

export function LazyMotionWrapper({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

// Export optimized motion component
export { m as motion };
```

**Update components to use lazy motion**:
Replace `import { motion } from "framer-motion"` with:
```typescript
import { motion } from "@/components/ui/LazyMotion";
```

**Impact**: Reduces initial JavaScript bundle by 30-40KB

---

### 5. Reduce Hero Section Layout Shift
**Problem**: Animations in Hero component cause layout shifts

**Update `components/sections/Hero.tsx`**:
```typescript
// Around line 13, add will-change hints
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base will-change-transform">

// Around line 18-27, simplify initial animations
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }} // Reduced from 1.5s
  className="absolute inset-0"
  style={{ willChange: "opacity" }} // ADD THIS
>
```

**Impact**: Reduces CLS (Cumulative Layout Shift) score

---

## ⚡ Medium Priority Optimizations

### 6. Lazy Load Below-the-Fold Components
**Update `app/page.tsx`**:
```typescript
import dynamic from 'next/dynamic';

// Lazy load components not in viewport
const Stats = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.Stats })));
const AboutTeaser = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.AboutTeaser })));
const FAQ = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.FAQ })));
const CTA = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.CTA })));
```

---

### 7. Optimize ClientLogos Component
**Problem**: SVG logos loaded synchronously

**Update `components/sections/ClientLogos.tsx`**:
- Add `loading="lazy"` to any img tags
- Consider using Next/Image for raster logos
- Defer logos that appear below fold

---

### 8. Add Suspense Boundaries
**Wrap async components in Suspense**:
```typescript
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Suspense fallback={<div className="h-20" />}>
        <ValueProposition />
      </Suspense>
      {/* ... rest */}
    </main>
  );
}
```

---

## 🔬 Advanced Optimizations (Long-term)

### 9. Implement Critical CSS Inlining
Use `@vercel/og` or custom solution to inline critical CSS

### 10. Code Split by Route
Analyze bundle with:
```bash
npm run build -- --profile
```

### 11. Preload LCP Image
If hero has an image, add:
```html
<link rel="preload" as="image" href="/hero-image.avif" fetchpriority="high" />
```

### 12. Reduce Third-Party Scripts
- Defer Cal.com embed until user interaction
- Lazy load CookieBanner component

---

## 📊 Expected Results

| Metric | Current | Target | Improvement |
|--------|---------|--------|-------------|
| FCP | ~2.5s | < 1.8s | -700ms |
| LCP | ~3.2s | < 2.5s | -700ms |
| CLS | 0.15 | < 0.1 | -0.05 |
| TBT | 400ms | < 300ms | -100ms |

---

## 🚀 Implementation Order

1. ✅ Font optimization (Biggest impact, easiest) - **COMPLETED**
2. ✅ Resource hints (Quick win) - **COMPLETED**
3. ✅ Next.js config updates (Build-time) - **COMPLETED**
4. ✅ Hero optimizations (Requires testing) - **COMPLETED**
5. ⏳ Framer Motion lazy loading (Medium effort, good impact)
6. ⏳ Component lazy loading (Gradual rollout)
7. ⏳ Advanced optimizations (Monitor results first)

---

## 🧪 Testing Commands

```bash
# Build for production
npm run build

# Test performance locally
npm run start

# Analyze bundle
npm run build -- --profile

# Run Lighthouse
npx lighthouse https://localhost:3000 --view
```

---

## 📝 Notes

- **Fonts**: `display: swap` prevents FOIT but may cause FOUT (Flash of Unstyled Text) - acceptable tradeoff
- **Framer Motion**: LazyMotion reduces bundle but requires component updates
- **Images**: Already optimized with AVIF/WebP - good!
- **Hydration**: Consider reducing client-side JavaScript on initial load

---

**Created**: December 31, 2025
**Target Completion**: Before production launch
**Owner**: Engineering Team
