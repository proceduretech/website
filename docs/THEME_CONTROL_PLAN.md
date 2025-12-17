# Simplified Theme Control System - Design Plan

## Executive Summary

This document outlines a comprehensive plan to implement a simplified theme control system for the Procedure website. The goal is to enable developer-controlled theme switching through a single variable in `layout.tsx`, eliminating the need for localStorage, user toggles, or runtime switching.

---

## Table of Contents

1. [Current State Analysis](#1-current-state-analysis)
2. [Proposed Architecture](#2-proposed-architecture)
3. [Implementation Approach](#3-implementation-approach)
4. [Logo and SVG Theming Strategy](#4-logo-and-svg-theming-strategy)
5. [File Migration Checklist](#5-file-migration-checklist)
6. [Code Examples](#6-code-examples)
7. [Step-by-Step Implementation Guide](#7-step-by-step-implementation-guide)
8. [Testing Strategy](#8-testing-strategy)
9. [Rollback Plan](#9-rollback-plan)

---

## 1. Current State Analysis

### 1.1 What Exists

#### CSS Variables (`globals.css`)
- **Dark mode** is the default via `@theme inline { ... }`
- **Light mode** activates via `html:not(.dark)` or `data-theme="light"`
- Comprehensive variables covering: backgrounds, text, borders, accents, shadows, callouts, prose, and more
- Well-structured naming convention: `--color-{category}-{variant}`

#### TypeScript Theme (`lib/theme.ts`)
- Complete `darkTheme` and `lightTheme` objects with all design tokens
- `primitives` object with raw color values
- Typography, spacing, motion, breakpoints, z-index configurations
- **Problem**: Not consistently used in components

#### ThemeProvider (`components/theme/ThemeProvider.tsx`)
- Uses localStorage for persistence
- System preference detection
- Provides `useTheme` hook
- **Problem**: NOT integrated in layout.tsx

### 1.2 Problems Identified

| Issue | Impact | Files Affected |
|-------|--------|----------------|
| Hardcoded hex colors | Colors won't respond to theme changes | 9+ component files |
| Static SVG logos | Logo color fixed regardless of theme | 8 SVG files |
| Inline SVG colors in components | SVG elements won't adapt to theme | Hero.tsx, tracing-beam.tsx |
| CSS variables exist but unused | Inconsistent theming | Many components |
| No single source of truth | Confusing architecture | Entire codebase |
| Cal.com hardcoded dark theme | Third-party integration locked to dark | CalButton.tsx |

### 1.3 Files with Hardcoded Colors

Based on analysis, the following files contain hardcoded color values:

```
components/
  CalButton.tsx              - Cal.com theme hardcoded to dark
  FooterReveal.tsx          - bg-[#050a14] hardcoded
  theme/ThemeProvider.tsx   - Meta theme-color values
  ui/background-boxes.tsx   - Accent color array
  ui/tracing-beam.tsx       - SVG gradient colors (#14B8A6, #0F766E, etc.)
  sections/Hero.tsx         - SVG gradient (#14B8A6, #E5E7EB)
  mdx/Pre.tsx              - bg-[#22272e] code block
  mdx/CodeBlock.tsx        - bg-[#22272e], window button colors
  blog/BlogPostContent.tsx  - Potential hardcoded values
```

---

## 2. Proposed Architecture

### 2.1 Design Philosophy

**Simplicity over flexibility**: Since the user wants developer-controlled theming without runtime switching, we can use a **build-time/config-time approach** that is:
- Simpler to implement
- Zero JavaScript overhead for theme detection
- No hydration mismatches
- SSR-friendly

### 2.2 Architecture Diagram

```
layout.tsx
    |
    v
+-------------------+
| SITE_THEME = 'dark'|  <-- Single source of truth
+-------------------+
    |
    v
<html className={theme}>
    |
    +---> CSS Variables activated
    |     (via .dark class or default)
    |
    +---> Logo component reads theme prop
    |
    +---> All components use CSS vars
```

### 2.3 Key Decisions

| Decision | Rationale |
|----------|-----------|
| Keep CSS custom properties | Already comprehensive, well-organized, and Tailwind-integrated |
| Remove ThemeProvider | Not needed for static theme control |
| Use `.dark` class on `<html>` | Matches existing CSS structure, Tailwind-compatible |
| Create theme-aware Logo component | SVGs need programmatic color handling |
| Use CSS filters for external SVGs | Simpler than maintaining multiple SVG variants |
| Consolidate to single config | Clear, maintainable, single source of truth |

---

## 3. Implementation Approach

### 3.1 Theme Configuration

Create a new configuration file that serves as the single source of truth:

**File: `lib/site-config.ts`**

```typescript
/**
 * Site-wide configuration
 * Change SITE_THEME to switch between 'dark' and 'light' modes
 */
export const siteConfig = {
  /**
   * Theme mode for the entire site
   * Options: 'dark' | 'light'
   *
   * To change the theme:
   * 1. Update this value
   * 2. Rebuild the site
   */
  theme: 'dark' as const,

  /**
   * Theme-specific logo paths
   */
  logos: {
    dark: {
      full: '/logos/procedure/green-logo.svg',
      short: '/logos/procedure/green-short-logo.svg',
      footer: '/logos/procedure/white-logo.svg',
    },
    light: {
      full: '/logos/procedure/teal-logo.svg',      // Or create dark variant
      short: '/logos/procedure/green-short-logo.svg', // Teal works on light
      footer: '/logos/procedure/green-logo.svg',   // Colored logo for light footer
    },
  },
} as const;

export type ThemeMode = typeof siteConfig.theme;
```

### 3.2 Layout Integration

**File: `app/layout.tsx`**

```tsx
import { siteConfig } from "@/lib/site-config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeClass = siteConfig.theme === 'dark' ? 'dark' : '';

  return (
    <html lang="en" className={themeClass}>
      <head>
        <meta
          name="theme-color"
          content={siteConfig.theme === 'dark' ? '#0b1220' : '#ffffff'}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <div className="relative z-10 bg-base">
          <Navigation />
          {children}
          <Footer />
        </div>
        <FooterReveal />
        <CookieBanner />
      </body>
    </html>
  );
}
```

### 3.3 CSS Structure Simplification

Update `globals.css` to make dark mode the default when `.dark` class is present:

```css
/* Dark theme is applied when .dark class is on html */
html.dark {
  /* All dark theme variables are already defined in @theme inline */
}

/* Light theme is applied when no .dark class OR data-theme="light" */
html:not(.dark),
:root[data-theme="light"] {
  /* Light theme overrides */
  --color-base: #ffffff;
  /* ... rest of light theme variables ... */
}
```

---

## 4. Logo and SVG Theming Strategy

### 4.1 Current Logo Structure

The project has multiple logo variants:
- `green-logo.svg` / `green-short-logo.svg` - Teal accent, white text (for dark backgrounds)
- `white-logo.svg` - Outline version in white (for footer reveal)
- `teal-logo.svg` - Full teal version
- `blue-logo.svg` / `red-logo.svg` - Color variants

### 4.2 Recommended Approach: Theme-Aware Logo Component

**Option A: Multiple SVG Files (Recommended)**

Create/ensure logo variants exist for each theme and switch programmatically:

```tsx
// components/navigation/Logo.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

interface LogoProps {
  className?: string;
  variant?: 'full' | 'short';
}

export function Logo({ className = "", variant = 'full' }: LogoProps) {
  const logos = siteConfig.logos[siteConfig.theme];
  const logoSrc = variant === 'full' ? logos.full : logos.short;

  return (
    <Link
      href="/"
      className={`flex items-center hover:opacity-80 transition-opacity ${className}`}
    >
      <Image
        src={logoSrc}
        alt="Procedure"
        width={variant === 'full' ? 157 : 62}
        height={variant === 'full' ? 32 : 28}
        className={variant === 'full' ? "h-8 w-auto" : "h-7 w-auto"}
        priority
      />
    </Link>
  );
}
```

**Option B: CSS Filter Approach (Simpler)**

Use CSS filters to invert/adjust logos for different themes:

```css
/* For light mode, invert the white text in logos */
html:not(.dark) .logo-invert {
  filter: invert(1) hue-rotate(180deg);
}

/* Or use specific filters for brand colors */
html:not(.dark) .logo-themed {
  filter: brightness(0.2); /* Makes white text dark */
}
```

**Option C: Inline SVG with currentColor (Most Flexible)**

Convert logos to inline SVG components that use `currentColor`:

```tsx
// components/navigation/LogoInline.tsx
export function LogoInline({ className = "" }) {
  return (
    <Link href="/" className={className}>
      <svg viewBox="0 0 166.34 34.1" className="h-8 w-auto">
        {/* Text paths - use currentColor for theme responsiveness */}
        <path
          fill="currentColor"
          d="m67.8,26.55c-1.84,0-3.46-.4..."
        />
        {/* Accent dot - use CSS variable */}
        <circle
          fill="var(--color-accent)"
          cx="54.1"
          cy="25.72"
          r="4.89"
        />
      </svg>
    </Link>
  );
}
```

### 4.3 Recommendation

**Use Option A (Multiple SVG Files)** because:
1. Design team can control exact colors for each theme
2. No runtime processing overhead
3. Works with Next.js Image optimization
4. Clear separation of concerns

**Create these additional logo variants if they don't exist:**
- `dark-logo.svg` - Dark text for light backgrounds
- `dark-short-logo.svg` - Dark text short version

---

## 5. File Migration Checklist

### 5.1 Priority 1: Core Infrastructure (Do First)

- [ ] Create `lib/site-config.ts` with theme configuration
- [ ] Update `app/layout.tsx` to use theme config
- [ ] Simplify or remove `components/theme/ThemeProvider.tsx`
- [ ] Update `globals.css` if needed for class-based switching

### 5.2 Priority 2: Components with Hardcoded Colors

| File | Issue | Fix |
|------|-------|-----|
| `components/FooterReveal.tsx` | `bg-[#050a14]` | Change to `bg-footer-reveal` |
| `components/mdx/Pre.tsx` | `bg-[#22272e]` | Change to `bg-code-block` |
| `components/mdx/CodeBlock.tsx` | `bg-[#22272e]`, window colors | Use CSS vars: `bg-code-block`, `bg-code-window-*` |
| `components/ui/background-boxes.tsx` | Hardcoded color array | Import from theme or use CSS vars |
| `components/ui/tracing-beam.tsx` | SVG colors `#14B8A6`, `#0F766E`, etc. | Use CSS vars via inline styles |
| `components/sections/Hero.tsx` | SVG gradient colors | Use CSS vars: `var(--color-accent-light)` |
| `components/CalButton.tsx` | Cal.com theme config | Make theme-aware |

### 5.3 Priority 3: Logo Components

| File | Issue | Fix |
|------|-------|-----|
| `components/navigation/Logo.tsx` | Static SVG path | Use theme-aware paths |
| `components/footer.tsx` | Static logo path | Use `siteConfig.logos` |
| `components/FooterReveal.tsx` | Static white-logo.svg | Use theme-appropriate logo |

### 5.4 Priority 4: Third-Party Integrations

| File | Issue | Fix |
|------|-------|-----|
| `components/CalButton.tsx` | Cal.com always dark | Read from `siteConfig.theme` |

### 5.5 Files to Verify (May Have Issues)

These files were identified as potentially having hardcoded colors but need verification:

- [ ] `components/blog/BlogPostContent.tsx`
- [ ] All files in `components/sections/`
- [ ] All files in `components/ui/`

---

## 6. Code Examples

### 6.1 Site Config (`lib/site-config.ts`)

```typescript
/**
 * Site Configuration
 *
 * This file controls site-wide settings including the theme.
 * To change the theme, update the `theme` value and rebuild.
 */

export type ThemeMode = 'dark' | 'light';

export interface SiteConfig {
  theme: ThemeMode;
  logos: {
    dark: LogoPaths;
    light: LogoPaths;
  };
}

interface LogoPaths {
  full: string;
  short: string;
  footer: string;
}

export const siteConfig: SiteConfig = {
  /**
   * Site theme mode
   *
   * 'dark' - Dark navy background with light text (default)
   * 'light' - White/light background with dark text
   */
  theme: 'dark',

  logos: {
    dark: {
      full: '/logos/procedure/green-logo.svg',
      short: '/logos/procedure/green-short-logo.svg',
      footer: '/logos/procedure/white-logo.svg',
    },
    light: {
      full: '/logos/procedure/teal-logo.svg',
      short: '/logos/procedure/green-short-logo.svg',
      footer: '/logos/procedure/green-logo.svg',
    },
  },
};

// Helper to get current theme's logos
export function getLogos() {
  return siteConfig.logos[siteConfig.theme];
}

// Helper to check if dark mode
export function isDarkMode() {
  return siteConfig.theme === 'dark';
}
```

### 6.2 Updated Layout (`app/layout.tsx`)

```tsx
import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FooterReveal } from "@/components/FooterReveal";
import { CookieBanner } from "@/components/CookieBanner";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Theme-specific metadata
const themeColors = {
  dark: '#0b1220',
  light: '#ffffff',
};

export const metadata: Metadata = {
  // ... existing metadata ...
  themeColor: themeColors[siteConfig.theme],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Apply 'dark' class only for dark theme
  const htmlClass = siteConfig.theme === 'dark' ? 'dark' : '';

  return (
    <html lang="en" className={htmlClass}>
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <div className="relative z-10 bg-base">
          <Navigation />
          {children}
          <Footer />
        </div>
        <FooterReveal />
        <CookieBanner />
      </body>
    </html>
  );
}
```

### 6.3 Theme-Aware Logo Component

```tsx
// components/navigation/Logo.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { getLogos } from "@/lib/site-config";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  const logos = getLogos();

  return (
    <Link
      href="/"
      className={`flex items-center hover:opacity-80 transition-opacity ${className}`}
    >
      {/* Long logo for desktop (lg+) */}
      <Image
        src={logos.full}
        alt="Procedure"
        width={157}
        height={32}
        className="hidden lg:block h-8 w-auto"
        priority
      />
      {/* Short logo for mobile/tablet (< lg) */}
      <Image
        src={logos.short}
        alt="Procedure"
        width={62}
        height={28}
        className="block lg:hidden h-7 w-auto"
        priority
      />
    </Link>
  );
}
```

### 6.4 Fixed FooterReveal

```tsx
// components/FooterReveal.tsx
"use client";

import Image from "next/image";
import { getLogos } from "@/lib/site-config";

export function FooterReveal() {
  const logos = getLogos();

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-[300px] md:h-[350px] bg-footer-reveal z-0">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden mt-12 lg:mt-24">
          <Image
            src={logos.footer}
            alt="Procedure"
            width={1600}
            height={350}
            className="w-[120%] max-w-none h-auto opacity-70"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} Procedure. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[300px] md:h-[350px]" />
    </>
  );
}
```

### 6.5 Fixed Background Boxes

```tsx
// components/ui/background-boxes.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  // Use CSS custom property values - these will update with theme
  const colors = [
    "var(--color-accent)",
    "var(--color-accent-light)",
    "var(--color-accent-secondary)",
    "var(--color-accent-secondary-light)",
    "var(--color-highlight)",
    "#06b6d4", // cyan-500 - could add CSS var
    "#0891b2", // cyan-600
    "#0e7490", // cyan-700
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-8 w-16 border-l border-border/30"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-border/30"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-border/50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
```

### 6.6 Fixed CalButton

```tsx
// components/CalButton.tsx
"use client";

import { useEffect, ReactNode } from "react";
import { getCalApi } from "@calcom/embed-react";
import { siteConfig } from "@/lib/site-config";

interface CalButtonProps {
  calLink?: string;
  children: ReactNode;
  className?: string;
}

// Theme configurations for Cal.com
const calThemeConfigs = {
  dark: {
    "cal-bg": "#0F172A",
    "cal-bg-emphasis": "#1E293B",
    "cal-border": "#334155",
    "cal-border-emphasis": "#475569",
    "cal-border-subtle": "#1E293B",
    "cal-text": "rgba(255, 255, 255, 0.9)",
    "cal-text-emphasis": "rgba(255, 255, 255, 0.95)",
    "cal-text-muted": "rgba(255, 255, 255, 0.65)",
    "cal-text-subtle": "rgba(255, 255, 255, 0.5)",
    "cal-brand": "#14B8A6",
    "cal-brand-emphasis": "#0D9488",
    "cal-brand-text": "#FFFFFF",
  },
  light: {
    "cal-bg": "#ffffff",
    "cal-bg-emphasis": "#f8fafc",
    "cal-border": "#e2e8f0",
    "cal-border-emphasis": "#cbd5e1",
    "cal-border-subtle": "#f1f5f9",
    "cal-text": "#0f172a",
    "cal-text-emphasis": "#0b1220",
    "cal-text-muted": "#475569",
    "cal-text-subtle": "#94a3b8",
    "cal-brand": "#0d9488",
    "cal-brand-emphasis": "#0f766e",
    "cal-brand-text": "#ffffff",
  },
};

export function CalButton({
  calLink = "ulhas/intro",
  children,
  className,
}: CalButtonProps) {
  const currentTheme = siteConfig.theme;
  const calConfig = calThemeConfigs[currentTheme];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: currentTheme,
        cssVarsPerTheme: {
          light: calConfig,
          dark: calConfig,
        },
        hideEventTypeDetails: false,
      });
    })();
  }, [currentTheme, calConfig]);

  return (
    <button
      data-cal-link={calLink}
      data-cal-config={`{"layout":"month_view","theme":"${currentTheme}"}`}
      className={className}
    >
      {children}
    </button>
  );
}
```

### 6.7 Add Missing CSS Variables

Add these to `globals.css` if not present:

```css
@theme inline {
  /* ... existing variables ... */

  /* Code window button colors (macOS style) */
  --color-code-window-close: #ff5f57;
  --color-code-window-minimize: #febc2e;
  --color-code-window-maximize: #28c840;
}
```

---

## 7. Step-by-Step Implementation Guide

### Phase 1: Foundation (Day 1)

1. **Create site configuration**
   ```bash
   # Create the config file
   touch lib/site-config.ts
   ```
   - Add theme configuration
   - Add logo path mappings
   - Add helper functions

2. **Update layout.tsx**
   - Import `siteConfig`
   - Add conditional `dark` class to `<html>`
   - Update meta theme-color

3. **Verify CSS variables work**
   - Test by manually toggling `.dark` class in browser
   - Ensure light/dark modes render correctly

### Phase 2: Component Migration (Day 2-3)

4. **Fix hardcoded colors in components**
   - Work through Priority 2 files
   - Replace `bg-[#hexcode]` with semantic classes
   - Test each component after fixing

5. **Update logo components**
   - Modify `Logo.tsx` to use `getLogos()`
   - Update `footer.tsx` logo usage
   - Update `FooterReveal.tsx` logo usage

6. **Fix SVG inline colors**
   - Update `tracing-beam.tsx`
   - Update `Hero.tsx` SVG gradients

### Phase 3: Integration Testing (Day 4)

7. **Test light mode**
   - Change `siteConfig.theme` to `'light'`
   - Build and test all pages
   - Document any issues

8. **Test dark mode**
   - Change back to `'dark'`
   - Verify all components work

### Phase 4: Cleanup (Day 5)

9. **Remove unused code**
   - Deprecate `ThemeProvider.tsx` (or remove if not used)
   - Remove `useTheme` hook usages
   - Clean up any toggle components

10. **Documentation**
    - Update CLAUDE.md with theme instructions
    - Add comments to `site-config.ts`

---

## 8. Testing Strategy

### 8.1 Visual Testing Checklist

For each theme mode, verify:

- [ ] Navigation header (scrolled/non-scrolled states)
- [ ] Logo appearance (desktop/mobile)
- [ ] Hero section (gradients, glows, SVGs)
- [ ] All section backgrounds alternate correctly
- [ ] Text is readable (primary, secondary, muted)
- [ ] Buttons (CTA, outline, ghost)
- [ ] Form inputs (normal, focus, error states)
- [ ] Footer (main footer, footer reveal)
- [ ] Code blocks (syntax highlighting)
- [ ] Callouts (all types: info, warning, error, success, tip, note)
- [ ] Blog post content
- [ ] Mobile menu
- [ ] Cal.com embed

### 8.2 Automated Tests

Add or update tests:

```typescript
// __tests__/theme.test.ts
import { siteConfig, getLogos, isDarkMode } from '@/lib/site-config';

describe('Theme Configuration', () => {
  it('should have valid theme value', () => {
    expect(['dark', 'light']).toContain(siteConfig.theme);
  });

  it('should return correct logos for dark theme', () => {
    // Test when theme is dark
    const logos = siteConfig.logos.dark;
    expect(logos.full).toBeDefined();
    expect(logos.short).toBeDefined();
    expect(logos.footer).toBeDefined();
  });

  it('should return correct logos for light theme', () => {
    const logos = siteConfig.logos.light;
    expect(logos.full).toBeDefined();
    expect(logos.short).toBeDefined();
    expect(logos.footer).toBeDefined();
  });
});
```

---

## 9. Rollback Plan

If issues arise, rollback is straightforward:

1. **Revert layout.tsx** to remove `className={htmlClass}`
2. **Keep CSS variables** - they don't affect current functionality
3. **Revert individual components** as needed

Since this is a static configuration change (not runtime), rollback is a simple code revert with no database or state implications.

---

## Appendix A: CSS Variable Reference

### Background Variables
| Variable | Dark Value | Light Value |
|----------|------------|-------------|
| `--color-base` | #0b1220 | #ffffff |
| `--color-surface` | #050a15 | #f8fafc |
| `--color-surface-elevated` | #0f172a | #ffffff |
| `--color-footer-reveal` | #050a14 | #f1f5f9 |
| `--color-code-block` | #22272e | #22272e (stays dark) |

### Text Variables
| Variable | Dark Value | Light Value |
|----------|------------|-------------|
| `--color-text-primary` | rgba(255,255,255,0.9) | #0f172a |
| `--color-text-secondary` | rgba(255,255,255,0.65) | #475569 |
| `--color-text-muted` | rgba(255,255,255,0.5) | #94a3b8 |

### Accent Variables
| Variable | Dark Value | Light Value |
|----------|------------|-------------|
| `--color-accent` | #0f766e | #0d9488 |
| `--color-accent-light` | #14b8a6 | #14b8a6 |
| `--color-highlight` | #0db5a5 | #0d9488 |
| `--color-cta` | #0d9488 | #0d9488 |

---

## Appendix B: File Change Summary

| File | Action | Complexity |
|------|--------|------------|
| `lib/site-config.ts` | CREATE | Low |
| `app/layout.tsx` | MODIFY | Low |
| `components/navigation/Logo.tsx` | MODIFY | Low |
| `components/footer.tsx` | MODIFY | Low |
| `components/FooterReveal.tsx` | MODIFY | Low |
| `components/CalButton.tsx` | MODIFY | Medium |
| `components/ui/background-boxes.tsx` | MODIFY | Low |
| `components/ui/tracing-beam.tsx` | MODIFY | Medium |
| `components/sections/Hero.tsx` | MODIFY | Medium |
| `components/mdx/Pre.tsx` | MODIFY | Low |
| `components/mdx/CodeBlock.tsx` | MODIFY | Low |
| `components/theme/ThemeProvider.tsx` | DEPRECATE | N/A |

**Total estimated effort: 1-2 days for full implementation**

---

## Appendix C: Future Considerations

### If User Toggle is Needed Later

The architecture supports adding user toggle functionality:

1. Convert `siteConfig.theme` to a React context
2. Add localStorage persistence
3. Re-enable `ThemeProvider` with simplified logic
4. Use `next-themes` package for SSR-safe implementation

### If More Themes are Needed

The CSS variable approach supports unlimited themes:

```css
:root[data-theme="brand-blue"] {
  --color-accent: #2563eb;
  /* ... */
}
```

This plan provides a clear path from the current over-engineered theme system to a simple, developer-controlled configuration while maintaining all the flexibility of CSS custom properties for potential future needs.
