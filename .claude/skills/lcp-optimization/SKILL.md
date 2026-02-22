---
name: nextjs-lcp-optimization
description: Diagnose and fix Largest Contentful Paint (LCP) issues in Next.js applications. Use when PageSpeed Insights shows LCP > 2.5s, when users report slow page loads, or when Core Web Vitals are failing. Covers image optimization, font loading, render-blocking resources, server response times, and Next.js-specific optimizations.
---

# Next.js LCP Optimization Skill

A systematic approach to diagnosing and fixing Largest Contentful Paint (LCP) issues in Next.js applications.

## Quick Reference: LCP Targets

| Rating | Mobile | Desktop |
|--------|--------|---------|
| Good | ≤ 2.5s | ≤ 2.5s |
| Needs Improvement | 2.5s - 4.0s | 2.5s - 4.0s |
| Poor | > 4.0s | > 4.0s |

---

## Phase 1: Diagnosis

Before fixing anything, identify WHAT is the LCP element and WHY it's slow.

### Step 1.1: Identify the LCP Element

Run this in browser DevTools console on the target page:

```javascript
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP element:', entry.element);
    console.log('LCP time:', entry.startTime);
    console.log('LCP size:', entry.size);
  }
}).observe({type: 'largest-contentful-paint', buffered: true});
```

**Common LCP elements:**
- Hero images (most common)
- Background images via CSS
- Large text blocks (H1 headings)
- Video poster images
- SVG graphics
- Inline `<svg>` elements

### Step 1.2: Understand LCP Sub-Parts

LCP is composed of 4 sub-parts. Each needs different fixes:

| Sub-Part | Description | Target | Common Causes |
|----------|-------------|--------|---------------|
| **TTFB** | Time to First Byte | < 800ms | Slow server, no CDN, no caching |
| **Resource Load Delay** | Time from TTFB to resource request | Minimal | Late discovery, render-blocking CSS/JS |
| **Resource Load Time** | Time to download the resource | Depends on size | Large images, slow CDN |
| **Element Render Delay** | Time from download to render | Minimal | Main thread blocking, hydration |

### Step 1.3: Analyze with PageSpeed Insights

Check the "Diagnostics" section for:
- **Eliminate render-blocking resources** - CSS/JS blocking paint
- **Reduce unused CSS/JavaScript** - Dead code increasing bundle
- **Properly size images** - Images larger than needed
- **Serve images in next-gen formats** - Using JPEG/PNG instead of WebP/AVIF
- **Preload Largest Contentful Paint image** - LCP image not prioritized
- **Reduce initial server response time** - High TTFB

---

## Phase 2: Fix by LCP Element Type

### 2.1: If LCP is an IMAGE

This is the most common case. Apply these fixes in order:

#### Fix 2.1.1: Add `priority` prop to LCP image

```tsx
// ❌ WRONG - No priority on above-the-fold hero image
<Image 
  src="/hero.jpg" 
  alt="Hero" 
  width={1200} 
  height={600} 
/>

// ✅ CORRECT - Priority triggers preload
<Image 
  src="/hero.jpg" 
  alt="Hero" 
  width={1200} 
  height={600} 
  priority  // This is critical!
/>
```

**What `priority` does:**
- Adds `<link rel="preload">` to `<head>`
- Sets `fetchpriority="high"` on the image
- Disables lazy loading for this image
- Tells browser to download ASAP

#### Fix 2.1.2: Ensure correct image sizing

```tsx
// ❌ WRONG - Oversized image (serving 3000px for 1200px display)
<Image 
  src="/hero-3000px.jpg"  // 3000x1500 original
  width={1200}
  height={600}
  priority
/>

// ✅ CORRECT - Use srcSet or properly sized source
<Image 
  src="/hero.jpg"
  width={1200}
  height={600} 
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  priority
/>
```

#### Fix 2.1.3: Use modern image formats

In `next.config.js`:

```javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],  // Serve AVIF first, WebP fallback
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

#### Fix 2.1.4: Check image is not blocked by CSS/JS

```tsx
// ❌ WRONG - Image hidden by CSS until JS runs
<div className="hero opacity-0 animate-fadeIn">
  <Image src="/hero.jpg" priority />
</div>

// ✅ CORRECT - Image visible immediately
<div className="hero">
  <Image src="/hero.jpg" priority />
</div>
```

#### Fix 2.1.5: For background images (CSS)

```tsx
// ❌ WRONG - Background image via CSS (not preloaded)
<div className="bg-[url('/hero.jpg')] bg-cover" />

// ✅ CORRECT - Use next/image with fill
<div className="relative h-[600px]">
  <Image 
    src="/hero.jpg"
    fill
    className="object-cover"
    priority
    alt="Hero background"
  />
  <div className="relative z-10">Content overlay</div>
</div>

// ✅ ALTERNATIVE - Manual preload for CSS backgrounds
// In _document.tsx or layout.tsx head
<link
  rel="preload"
  href="/hero.jpg"
  as="image"
  fetchPriority="high"
/>
```

### 2.2: If LCP is TEXT (H1, paragraph, etc.)

Text LCP issues are usually caused by font loading delays.

#### Fix 2.2.1: Use `next/font` with swap

```tsx
// ❌ WRONG - External font without optimization
<link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />

// ✅ CORRECT - next/font with display swap
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',  // Critical: shows fallback font immediately
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

#### Fix 2.2.2: Preload critical fonts

```tsx
// In layout.tsx or _document.tsx
<head>
  <link
    rel="preload"
    href="/fonts/inter-var.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</head>
```

#### Fix 2.2.3: Subset fonts

Only load the characters you need:

```tsx
const inter = Inter({ 
  subsets: ['latin'],  // Don't load cyrillic, greek, etc. if not needed
  display: 'swap',
})
```

### 2.3: If LCP is a VIDEO poster

```tsx
// ❌ WRONG - Video poster not preloaded
<video poster="/poster.jpg" controls>
  <source src="/video.mp4" type="video/mp4" />
</video>

// ✅ CORRECT - Preload the poster image
<>
  <link rel="preload" href="/poster.jpg" as="image" fetchPriority="high" />
  <video poster="/poster.jpg" controls>
    <source src="/video.mp4" type="video/mp4" />
  </video>
</>
```

---

## Phase 3: Fix Render-Blocking Resources

### 3.1: Identify render-blocking resources

In PageSpeed Insights, check "Eliminate render-blocking resources" for:
- External CSS files
- Synchronous JavaScript in `<head>`
- Third-party scripts loading before LCP

### 3.2: Defer non-critical CSS

```tsx
// ❌ WRONG - All CSS blocks rendering
import '@/styles/globals.css'
import '@/styles/animations.css'
import '@/styles/components.css'

// ✅ CORRECT - Critical CSS inline, rest loaded async
// In layout.tsx
<head>
  <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
</head>

// Or use Next.js CSS optimization (automatic with App Router)
```

### 3.3: Defer third-party scripts

```tsx
// ❌ WRONG - Analytics blocking render
<Script src="https://analytics.example.com/script.js" />

// ✅ CORRECT - Load after page is interactive
<Script 
  src="https://analytics.example.com/script.js" 
  strategy="lazyOnload"  // or "afterInteractive"
/>

// ✅ FOR EMBEDS (Cal.com, widgets, etc.) - Load on interaction
<Script 
  src="https://app.cal.com/embed/embed.js"
  strategy="lazyOnload"
/>
```

### 3.4: Dynamic imports for heavy components

```tsx
// ❌ WRONG - Heavy component in initial bundle
import HeavyChart from '@/components/HeavyChart'

// ✅ CORRECT - Load only when needed
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />,
  ssr: false  // Skip server rendering if not needed
})
```

---

## Phase 4: Optimize Server Response (TTFB)

### 4.1: Check current TTFB

Target: < 800ms for mobile, < 200ms for desktop

In PageSpeed Insights, look at:
- "Initial server response time was X ms"
- TTFB in the metrics section

### 4.2: Enable static generation where possible

```tsx
// ❌ WRONG - Server-side rendering for static content
export default async function Page() {
  const data = await fetchData()  // Runs on every request
  return <div>{data}</div>
}

// ✅ CORRECT - Static generation with revalidation
export const revalidate = 3600  // Regenerate every hour

export default async function Page() {
  const data = await fetchData()
  return <div>{data}</div>
}

// ✅ ALTERNATIVE - Full static generation
export const dynamic = 'force-static'
```

### 4.3: Use ISR (Incremental Static Regeneration)

```tsx
// For pages that need fresh data but can tolerate slight staleness
export const revalidate = 60  // Revalidate every 60 seconds

// Or use on-demand revalidation
// In API route:
import { revalidatePath } from 'next/cache'
revalidatePath('/blog/[slug]')
```

### 4.4: Edge functions for dynamic pages

```tsx
// In route segment
export const runtime = 'edge'  // Run at edge, closer to users

export default function Page() {
  // This runs at the edge location nearest to the user
}
```

### 4.5: CDN and caching headers

```tsx
// In next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

---

## Phase 5: Next.js-Specific Optimizations

### 5.1: App Router optimizations

```tsx
// Use React Server Components (default in App Router)
// Heavy data fetching stays on server, smaller client bundle

// For client components, mark explicitly
'use client'

export function InteractiveWidget() {
  // Only this component ships to client
}
```

### 5.2: Streaming with Suspense

```tsx
import { Suspense } from 'react'

export default function Page() {
  return (
    <div>
      {/* LCP content renders immediately */}
      <h1>Welcome</h1>
      <Image src="/hero.jpg" priority />
      
      {/* Non-critical content streams in */}
      <Suspense fallback={<Skeleton />}>
        <SlowComponent />
      </Suspense>
    </div>
  )
}
```

### 5.3: Optimize bundle size

```bash
# Analyze bundle
npm install @next/bundle-analyzer

# In next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

# Run analysis
ANALYZE=true npm run build
```

### 5.4: Production-only third-party scripts

```tsx
// Only load analytics/tracking in production
{process.env.NODE_ENV === 'production' && (
  <Script 
    src="https://analytics.example.com/script.js" 
    strategy="lazyOnload" 
  />
)}
```

---

## Phase 6: Debugging Checklist

When LCP is still slow after fixes, check:

### 6.1: Is the LCP image actually preloading?

Open DevTools > Network tab, filter by "preload":
- [ ] LCP image should appear with "Priority: High"
- [ ] Should start loading before other resources

### 6.2: Is there a long task blocking render?

Open DevTools > Performance tab, record page load:
- [ ] Look for long yellow/red blocks on main thread
- [ ] Identify which script is causing the block

### 6.3: Is hydration delaying render?

Check if content is visible before React hydrates:
- [ ] View page source (Ctrl+U) - is LCP content in HTML?
- [ ] If not, content is being rendered client-side only

### 6.4: Are animations delaying visibility?

Check CSS for:
- [ ] `opacity: 0` on LCP element before animation
- [ ] `visibility: hidden` initially
- [ ] `display: none` until JS runs
- [ ] `animation-delay` on critical content

### 6.5: Is the image actually above the fold?

The LCP element must be in the initial viewport:
- [ ] Test on mobile viewport (375px width)
- [ ] Test on desktop viewport
- [ ] Different elements may be LCP on different viewports

---

## Common Mistakes & Fixes

### Mistake 1: Priority on too many images

```tsx
// ❌ WRONG - Multiple priority images compete
<Image src="/hero.jpg" priority />
<Image src="/logo.png" priority />
<Image src="/banner.jpg" priority />

// ✅ CORRECT - Priority only on actual LCP image
<Image src="/hero.jpg" priority />
<Image src="/logo.png" />  // Logo is smaller, not LCP
<Image src="/banner.jpg" loading="lazy" />  // Below fold
```

### Mistake 2: Lazy loading LCP image

```tsx
// ❌ WRONG - Lazy loading delays LCP
<Image 
  src="/hero.jpg" 
  loading="lazy"  // Never do this for LCP!
/>

// ✅ CORRECT
<Image 
  src="/hero.jpg" 
  priority  // Implies loading="eager"
/>
```

### Mistake 3: Using CSS background for LCP

```tsx
// ❌ WRONG - CSS backgrounds can't be preloaded easily
<div style={{ backgroundImage: 'url(/hero.jpg)' }} />

// ✅ CORRECT - Use next/image for LCP images
<Image src="/hero.jpg" fill priority />
```

### Mistake 4: Large unoptimized images

```tsx
// ❌ WRONG - 5MB PNG hero image
<Image src="/hero-unoptimized.png" priority />

// ✅ CORRECT - Optimized, modern format
// 1. Convert to WebP/AVIF (90% smaller)
// 2. Resize to max display size (1920px width usually enough)
// 3. Use next/image automatic optimization
<Image 
  src="/hero.jpg"
  width={1920}
  height={1080}
  quality={85}  // Default is 75
  priority
/>
```

### Mistake 5: Third-party script blocking paint

```tsx
// ❌ WRONG - Cal.com embed loading synchronously
<Script src="https://app.cal.com/embed/embed.js" />

// ✅ CORRECT - Defer until after LCP
<Script 
  src="https://app.cal.com/embed/embed.js"
  strategy="lazyOnload"
/>

// ✅ EVEN BETTER - Load on user interaction
const [showCalendar, setShowCalendar] = useState(false)

<button onClick={() => setShowCalendar(true)}>
  Book a Call
</button>

{showCalendar && (
  <Script src="https://app.cal.com/embed/embed.js" />
)}
```

---

## Testing & Validation

### Local Testing

```bash
# Build production version (dev mode has different performance)
npm run build
npm run start

# Test with Lighthouse
# Chrome DevTools > Lighthouse > Performance
```

### Real User Monitoring

```tsx
// In layout.tsx - track real LCP
import { useReportWebVitals } from 'next/web-vitals'

export function reportWebVitals(metric) {
  if (metric.name === 'LCP') {
    console.log('LCP:', metric.value)
    // Send to analytics
  }
}
```

### Field Data vs Lab Data

- **Lab Data** (Lighthouse, PageSpeed lab): Simulated, consistent
- **Field Data** (CrUX, PageSpeed field): Real users, variable

Field data is what Google uses for ranking. Optimize until field data shows green.

---

## Quick Wins Checklist

Apply these in order for fastest improvement:

- [ ] Add `priority` to LCP image
- [ ] Use `next/font` with `display: swap`
- [ ] Defer analytics scripts with `strategy="lazyOnload"`
- [ ] Enable AVIF/WebP in next.config.js
- [ ] Remove animation delays on LCP content
- [ ] Use `dynamic()` for below-fold components
- [ ] Set `revalidate` for static generation
- [ ] Check for render-blocking CSS

---

## Resources

- [web.dev LCP Guide](https://web.dev/articles/optimize-lcp)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Vercel Core Web Vitals Guide](https://vercel.com/kb/guide/optimizing-core-web-vitals-in-2024)
