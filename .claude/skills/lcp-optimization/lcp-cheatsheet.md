# LCP Quick Reference Cheatsheet

## 🎯 The Golden Rule
> The LCP element should be: **discoverable in HTML**, **prioritized for loading**, and **visible without JavaScript**.

---

## ⚡ Instant Fixes (Do These First)

### 1. Add `priority` to LCP Image
```tsx
<Image src="/hero.jpg" priority />
```

### 2. Defer Analytics/Embeds
```tsx
<Script src="https://..." strategy="lazyOnload" />
```

### 3. Use `next/font`
```tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], display: 'swap' })
```

### 4. Enable Modern Formats
```js
// next.config.js
images: { formats: ['image/avif', 'image/webp'] }
```

---

## 🔍 Diagnosis Flowchart

```
LCP > 2.5s?
    │
    ├─→ What is LCP element?
    │       │
    │       ├─→ IMAGE
    │       │     ├─ Has priority? → No → Add priority
    │       │     ├─ CSS background? → Yes → Switch to next/image
    │       │     ├─ Large file? → Yes → Compress/resize
    │       │     └─ Hidden by CSS? → Yes → Remove opacity-0/hidden
    │       │
    │       ├─→ TEXT
    │       │     ├─ Custom font? → Yes → Use next/font with swap
    │       │     └─ Font preloaded? → No → Add preload
    │       │
    │       └─→ VIDEO
    │             └─ Poster preloaded? → No → Add preload
    │
    └─→ Check TTFB
            │
            ├─→ > 800ms
            │     ├─ Using SSR? → Consider ISR/SSG
            │     ├─ No CDN? → Enable CDN
            │     └─ Slow API? → Cache responses
            │
            └─→ < 800ms → Check render-blocking resources
                    │
                    ├─ Scripts in head? → Defer/lazy load
                    ├─ Large CSS? → Code split
                    └─ Heavy components? → Dynamic import
```

---

## 📊 LCP Sub-Parts & Fixes

| Sub-Part | Fix |
|----------|-----|
| **TTFB > 800ms** | SSG/ISR, CDN, edge functions, caching |
| **Resource Load Delay** | Preload LCP resource, inline critical CSS |
| **Resource Load Time** | Compress images, use WebP/AVIF, resize |
| **Element Render Delay** | Remove animation delays, reduce JS |

---

## ❌ Common Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| `loading="lazy"` on LCP | Delays load | Remove or use `priority` |
| CSS `opacity-0` on hero | Delays paint | Remove initial hide |
| CSS background-image | Can't preload | Use `<Image fill />` |
| External font link | Blocks render | Use `next/font` |
| Script without strategy | Blocks render | Add `strategy="lazyOnload"` |
| Multiple `priority` images | Dilutes optimization | Only 1-2 priority images |
| `unoptimized: true` | No compression | Remove this setting |

---

## 🧪 Testing Commands

```bash
# Build and run production (dev mode has different perf)
npm run build && npm start

# Run Lighthouse in Chrome DevTools
# DevTools → Lighthouse → Performance

# Analyze bundle size
ANALYZE=true npm run build
```

---

## 📱 Mobile vs Desktop

Different devices may have different LCP elements!

```tsx
// Mobile: Might be text heading
// Desktop: Might be large hero image

// Solution: Both should be optimized
<h1 className="text-4xl">Heading</h1>  {/* Ensure font is preloaded */}
<Image src="/hero.jpg" priority />     {/* Always add priority */}
```

---

## 🎯 Target Metrics

| Metric | Good | Needs Work | Poor |
|--------|------|------------|------|
| LCP | ≤ 2.5s | 2.5-4s | > 4s |
| FCP | ≤ 1.8s | 1.8-3s | > 3s |
| TTFB | ≤ 0.8s | 0.8-1.8s | > 1.8s |
| INP | ≤ 200ms | 200-500ms | > 500ms |
| CLS | ≤ 0.1 | 0.1-0.25 | > 0.25 |

---

## 🔧 Next.js-Specific

### App Router (Recommended)
```tsx
// Server Components reduce client JS
// Use 'use client' only when needed

// Streaming for non-critical content
<Suspense fallback={<Skeleton />}>
  <SlowComponent />
</Suspense>
```

### Static Generation
```tsx
// Best for LCP - HTML ready at edge
export const revalidate = 3600  // ISR every hour
// or
export const dynamic = 'force-static'
```

### Edge Runtime
```tsx
// Lowest TTFB - runs near user
export const runtime = 'edge'
```

---

## 📁 File Checklist

Check these files for LCP issues:

- [ ] `app/layout.tsx` - Font loading
- [ ] `app/page.tsx` - Hero section
- [ ] `next.config.js` - Image settings
- [ ] `components/Hero.tsx` - LCP element
- [ ] Any page with `<Script>` tags
