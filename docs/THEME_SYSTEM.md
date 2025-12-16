# Procedure Design System - Theme Documentation

This document provides comprehensive documentation for the Procedure website theming system, which supports both dark and light modes with a carefully crafted design language.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Quick Start](#quick-start)
3. [CSS Custom Properties Reference](#css-custom-properties-reference)
4. [TypeScript Theme Configuration](#typescript-theme-configuration)
5. [Using the Theme Provider](#using-the-theme-provider)
6. [Tailwind CSS Classes](#tailwind-css-classes)
7. [Component Theming Patterns](#component-theming-patterns)
8. [SVG and Icon Theming](#svg-and-icon-theming)
9. [Migration Guide](#migration-guide)

---

## Architecture Overview

The theme system is built on three layers:

### 1. CSS Custom Properties (`globals.css`)
- Define all design tokens as CSS variables
- Switch between themes using `.dark` class or `data-theme` attribute
- Automatically picked up by Tailwind via `@theme inline`

### 2. TypeScript Theme Configuration (`lib/theme.ts`)
- Strongly-typed primitive and semantic tokens
- Useful for JavaScript-based styling, animations, and SVG colors
- Contains both dark and light theme objects

### 3. React Theme Provider (`components/theme/`)
- Context-based theme state management
- Persists user preference to localStorage
- Supports system preference detection
- Provides `useTheme` hook for accessing theme state

---

## Quick Start

### 1. Wrap your app with ThemeProvider

```tsx
// app/layout.tsx
import { ThemeProvider, ThemeScript } from "@/components/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <ThemeScript defaultTheme="dark" />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 2. Add a theme toggle button

```tsx
import { ThemeToggle } from "@/components/theme";

function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  );
}
```

### 3. Use theme-aware classes

```tsx
// These classes automatically adapt to the current theme
<div className="bg-base text-text-primary border-border">
  <h1 className="text-highlight">Hello World</h1>
  <button className="bg-cta text-cta-text">Click me</button>
</div>
```

---

## CSS Custom Properties Reference

All CSS custom properties are defined in `globals.css` and automatically switch based on theme.

### Backgrounds

| Variable | Dark Mode | Light Mode | Usage |
|----------|-----------|------------|-------|
| `--color-base` | `#0b1220` | `#ffffff` | Main page background |
| `--color-surface` | `#050a15` | `#f8fafc` | Alternating sections |
| `--color-surface-elevated` | `#0f172a` | `#ffffff` | Cards, modals, dropdowns |
| `--color-overlay` | `rgba(11,18,32,0.6)` | `rgba(15,23,42,0.5)` | Modal backdrops |
| `--color-footer-reveal` | `#050a14` | `#f1f5f9` | Footer reveal background |
| `--color-code-block` | `#22272e` | `#22272e` | Code block background (stays dark) |
| `--color-code-title` | `#131b2e` | `#1e293b` | Code title bar |

### Text Colors

| Variable | Dark Mode | Light Mode | Usage |
|----------|-----------|------------|-------|
| `--color-text-primary` | `rgba(255,255,255,0.9)` | `#0f172a` | Headings, important text |
| `--color-text-secondary` | `rgba(255,255,255,0.65)` | `#475569` | Body copy |
| `--color-text-muted` | `rgba(255,255,255,0.5)` | `#94a3b8` | Placeholders, hints |
| `--color-text-emphasis` | `rgba(255,255,255,0.95)` | `#0b1220` | Extra emphasis |
| `--color-text-inverted` | `#0b1220` | `#ffffff` | Text on inverted backgrounds |

### Accent Colors

| Variable | Dark Mode | Light Mode | Usage |
|----------|-----------|------------|-------|
| `--color-accent-teal` | `#0f766e` | `#0d9488` | Primary accent (dark) |
| `--color-accent-teal-light` | `#14b8a6` | `#14b8a6` | Primary accent (bright) |
| `--color-accent-blue` | `#2563eb` | `#2563eb` | Secondary accent |
| `--color-accent-blue-light` | `#3b82f6` | `#3b82f6` | Secondary accent (bright) |
| `--color-highlight` | `#0db5a5` | `#0d9488` | Key highlight text |

### CTA/Interactive

| Variable | Dark Mode | Light Mode | Usage |
|----------|-----------|------------|-------|
| `--color-cta` | `#0d9488` | `#0d9488` | Button background |
| `--color-cta-text` | `#fcfcfc` | `#ffffff` | Button text |
| `--color-cta-hover` | `#14b8a6` | `#0f766e` | Button hover state |
| `--color-cta-shadow` | `rgba(13,148,136,0.25)` | `rgba(13,148,136,0.2)` | Button glow |

### Borders

| Variable | Dark Mode | Light Mode | Usage |
|----------|-----------|------------|-------|
| `--color-border` | `#1e293b` | `#e2e8f0` | Default borders |
| `--color-border-light` | `#334155` | `#cbd5e1` | Hover borders |
| `--color-border-subtle` | `#1e293b` | `#f1f5f9` | Subtle borders |
| `--color-border-emphasis` | `#475569` | `#94a3b8` | Emphasized borders |
| `--color-border-focus` | `#0f766e` | `#14b8a6` | Focus rings |

### Shadows

| Variable | Dark Mode | Light Mode |
|----------|-----------|------------|
| `--shadow-sm` | Soft shadow | Soft shadow |
| `--shadow-md` | Medium shadow | Medium shadow |
| `--shadow-lg` | Large shadow | Large shadow |
| `--shadow-cta-glow` | Teal glow (25% opacity) | Teal glow (15% opacity) |
| `--shadow-mega-menu` | Deep teal shadow | Lighter teal shadow |
| `--shadow-footer-glow` | Upward teal glow | Downward subtle glow |

### Callout Colors

Each callout type has: `bg`, `border`, `icon`, `icon-bg`

- **Info**: Blue (`--color-callout-info-*`)
- **Warning**: Amber (`--color-callout-warning-*`)
- **Error**: Red (`--color-callout-error-*`)
- **Success**: Green (`--color-callout-success-*`)
- **Tip**: Purple (`--color-callout-tip-*`)
- **Note**: Teal (`--color-callout-note-*`)

---

## TypeScript Theme Configuration

The `lib/theme.ts` file exports strongly-typed theme objects:

```typescript
import { darkTheme, lightTheme, primitives } from "@/lib/theme";

// Access primitive colors
const teal500 = primitives.teal[500]; // #14b8a6

// Access semantic tokens
const darkBackground = darkTheme.backgrounds.base;
const lightBackground = lightTheme.backgrounds.base;

// Use in Framer Motion or other JS styling
const animation = {
  backgroundColor: darkTheme.components.backgroundBoxes[0],
};
```

### Theme Object Structure

```typescript
{
  backgrounds: {
    base, surface, surfaceElevated, overlay, footerReveal, codeBlock, codeTitle
  },
  text: {
    primary, secondary, muted, emphasis, inverted, link, highlight
  },
  borders: {
    default, light, subtle, emphasis, focus, hr
  },
  accents: {
    teal: { base, light, dark },
    blue: { base, light, dark }
  },
  interactive: {
    ctaBackground, ctaText, ctaHover, ctaShadow, outlineHover, ghostHover
  },
  shadows: {
    sm, md, lg, xl, '2xl', ctaGlow, tealGlow, megaMenu, footerGlow, tracingBeam
  },
  gradients: { ... },
  opacity: { ... },
  accentOpacity: { ... },
  callouts: { info, warning, error, success, tip, note },
  code: { ... },
  selection: { background, text },
  svg: { stroke, fill, accent, muted, gridPattern },
  components: { backgroundBoxes, tracingBeam, spotlightFill, ... },
  prose: { body, headings, links, bullets, ... },
  cal: { bg, border, text, brand, ... }
}
```

---

## Using the Theme Provider

### useTheme Hook

```tsx
import { useTheme } from "@/components/theme";

function MyComponent() {
  const {
    theme,         // 'light' | 'dark' | 'system'
    resolvedTheme, // 'light' | 'dark' (actual applied theme)
    setTheme,      // (theme: ThemeMode) => void
    toggleTheme,   // () => void
    mounted        // boolean - true after hydration
  } = useTheme();

  // Avoid hydration mismatch
  if (!mounted) return null;

  return (
    <button onClick={toggleTheme}>
      Current: {resolvedTheme}
    </button>
  );
}
```

### ThemeScript Component

Prevents flash of incorrect theme on page load:

```tsx
// In your root layout's <head>
<ThemeScript
  storageKey="procedure-theme"  // localStorage key
  defaultTheme="dark"           // fallback if no stored preference
  attribute="class"             // 'class' or 'data-theme'
/>
```

### ThemeToggle Component

Ready-to-use toggle button:

```tsx
<ThemeToggle
  size="md"           // 'sm' | 'md' | 'lg'
  showLabel={false}   // Show "Light" / "Dark" text
  className=""        // Additional classes
/>
```

---

## Tailwind CSS Classes

The theme system extends Tailwind with custom color utilities:

### Background Classes
```
bg-base              → Main background
bg-surface           → Section alternate
bg-surface-elevated  → Cards/modals
bg-cta               → CTA buttons
```

### Text Classes
```
text-text-primary    → Primary text
text-text-secondary  → Body text
text-text-muted      → Muted/placeholder
text-highlight       → Highlight color
text-accent-teal     → Dark teal
text-accent-teal-light → Bright teal
```

### Border Classes
```
border-border        → Default border
border-border-light  → Hover border
border-accent-teal   → Accent border
```

### Opacity Modifiers
```
bg-accent-teal/10    → 10% opacity background
bg-accent-teal/20    → 20% opacity background
border-accent-teal/30 → 30% opacity border
```

---

## Component Theming Patterns

### Cards

```tsx
<div className="bg-surface-elevated border border-border rounded-xl p-6
                hover:border-accent-teal/30 transition-colors">
  <h3 className="text-text-primary">Card Title</h3>
  <p className="text-text-secondary">Description</p>
</div>
```

### Buttons

```tsx
// Primary CTA
<button className="bg-cta text-cta-text hover:brightness-110
                   shadow-lg shadow-cta/25 rounded-lg px-6 py-3">
  Primary Action
</button>

// Outline
<button className="bg-transparent text-text-primary border border-border
                   hover:border-accent-teal hover:text-accent-teal-light">
  Secondary
</button>

// Ghost
<button className="bg-transparent text-text-secondary
                   hover:bg-surface-elevated hover:text-text-primary">
  Ghost
</button>
```

### Form Inputs

```tsx
<input className="bg-surface-elevated border border-border rounded-xl
                  text-text-primary placeholder-text-muted
                  focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20" />
```

### Callouts

```tsx
// Using CSS variables directly
<div style={{
  backgroundColor: 'var(--color-callout-info-bg)',
  borderColor: 'var(--color-callout-info-border)'
}}>
  <span style={{ color: 'var(--color-callout-info-icon)' }}>Icon</span>
</div>
```

---

## SVG and Icon Theming

### Using currentColor (Recommended)

```tsx
<svg className="text-accent-teal-light" stroke="currentColor" fill="none">
  <path d="..." />
</svg>
```

### Dynamic Colors from Theme

```tsx
import { useTheme } from "@/components/theme";
import { darkTheme, lightTheme } from "@/lib/theme";

function AnimatedSVG() {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? darkTheme : lightTheme;

  return (
    <svg>
      <linearGradient id="grad">
        <stop offset="0%" stopColor={theme.accents.teal.light} stopOpacity="0.5" />
        <stop offset="100%" stopColor={theme.accents.teal.light} stopOpacity="0.2" />
      </linearGradient>
    </svg>
  );
}
```

### Grid Pattern SVG

```tsx
// The grid pattern color is theme-aware
<div style={{
  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='var(--color-svg-grid)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
  opacity: 'var(--opacity-pattern)'
}} />
```

---

## Migration Guide

### From Hard-coded Colors to Theme Variables

**Before:**
```tsx
<div className="bg-[#0f172a] text-white/90 border-[#1e293b]">
```

**After:**
```tsx
<div className="bg-surface-elevated text-text-primary border-border">
```

### Updating Inline Styles

**Before:**
```tsx
<div style={{ backgroundColor: '#0b1220', color: 'rgba(255,255,255,0.9)' }}>
```

**After:**
```tsx
<div style={{
  backgroundColor: 'var(--color-base)',
  color: 'var(--color-text-primary)'
}}>
```

### Component Hard-coded Colors

Search for these patterns and replace:

| Hard-coded | Replace with |
|------------|--------------|
| `#0b1220` | `var(--color-base)` or `bg-base` |
| `#050a15` | `var(--color-surface)` or `bg-surface` |
| `#0f172a` | `var(--color-surface-elevated)` |
| `#1e293b` | `var(--color-border)` |
| `#14b8a6` | `var(--color-accent-teal-light)` |
| `#0d9488` | `var(--color-cta)` |
| `rgba(255,255,255,0.9)` | `var(--color-text-primary)` |
| `rgba(255,255,255,0.65)` | `var(--color-text-secondary)` |

---

## File Structure

```
lib/
  theme.ts              # TypeScript theme configuration

app/
  globals.css           # CSS custom properties

components/
  theme/
    ThemeProvider.tsx   # Context, hook, toggle, script
    index.ts            # Exports

docs/
  THEME_SYSTEM.md       # This documentation
```

---

## Best Practices

1. **Always use semantic tokens** instead of primitive colors
2. **Use Tailwind classes** when possible over inline CSS variables
3. **Check `mounted` state** before rendering theme-dependent UI to avoid hydration mismatches
4. **Keep code blocks dark** for readability in both themes
5. **Test both themes** when adding new components
6. **Use opacity modifiers** (`/10`, `/20`, etc.) for subtle backgrounds
7. **Transition colors smoothly** with `transition-colors` class

---

## Support

For questions or issues with the theme system, check:
- `lib/theme.ts` - TypeScript definitions
- `app/globals.css` - CSS custom properties
- `components/theme/ThemeProvider.tsx` - React provider
