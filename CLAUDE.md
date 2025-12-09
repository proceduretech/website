# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 16 project using the App Router, building a premium enterprise software services website.

**Stack:** React 19, TypeScript, Tailwind CSS v4, Outfit font

### Project Structure

```
app/                    # App Router pages and layouts
  layout.tsx            # Root layout with Navigation
  page.tsx              # Home page
  globals.css           # Global styles and CSS variables

components/
  navigation/           # Navigation system
    Navigation.tsx      # Main nav with scroll-aware header
    NavItem.tsx         # Individual nav items with dropdown support
    MegaMenu.tsx        # Multi-column dropdown menus
    Logo.tsx            # Company logo component
    index.ts            # Barrel export
  ui/
    Button.tsx          # Reusable button component

lib/
  navigation-data.ts    # Navigation menu content/structure
```

### Design System

- **Theme:** Light theme only
- **Accent colors:** Blue (#3b82f6) to Sky (#0ea5e9) gradients
- **Typography:** Outfit for body, tight tracking for headings

### Path Aliases

`@/*` maps to the project root.
