---
paths: components/**/*.tsx, app/**/*.tsx
---

# Design System Quick Reference

Full documentation: `@docs/THEME_SYSTEM.md`. Check `app/globals.css` for actual CSS custom property values.

## Key Tokens
- **Base:** #0A1425 | **Surface:** #070F1B | **Elevated:** #111F35
- **Accent:** #1D9B69 (green) | **Accent light:** #2AAE79
- **CTA:** #178556 bg, #ffffff text | **Border:** #1A2A45
- **Text:** White at 90% / 65% / 50% opacity
- **Fonts:** Inter (body), Outfit (headings/nav/buttons)

## Component Patterns
- **Glassmorphic cards:** `bg-surface-elevated/80 backdrop-blur-xl border border-border`
- **Primary CTA:** `bg-cta text-cta-text hover:brightness-110` (solid color, no gradients)
- **Outline button:** `bg-transparent text-text-primary border border-border hover:border-accent hover:text-accent-light`
- **Floating label inputs:** Animated labels that move on focus/fill
- **Highlight text:** `text-highlight` (solid green #1D9B69, no gradient)
