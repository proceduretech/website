# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 16 project using the App Router, building a premium enterprise AI engineering services website.

**Stack:** React 19, TypeScript, Tailwind CSS v4, Inter + Outfit fonts, Framer Motion

### Project Structure

```
app/                    # App Router pages and layouts
  layout.tsx            # Root layout with Navigation + Footer
  page.tsx              # Home page
  globals.css           # Global styles and CSS variables
  about/                # About page
  contact/              # Contact page with form

components/
  navigation/           # Navigation system
    Navigation.tsx      # Main nav with scroll-aware header
    NavItem.tsx         # Individual nav items with dropdown support
    MegaMenu.tsx        # Multi-column dropdown menus
    Logo.tsx            # Company logo component
    index.ts            # Barrel export
  sections/             # Homepage sections
    Hero.tsx            # Hero section
    Services.tsx        # Services grid
    Testimonials.tsx    # Testimonial carousel
    Stats.tsx           # Statistics section
    ClientLogos.tsx     # Client logo carousel
    CTA.tsx             # Call-to-action section
    FAQ.tsx             # FAQ accordion
    Careers.tsx         # Careers preview
    ValueProposition.tsx # Value proposition section
  ui/
    Button.tsx          # Reusable button component
    Input.tsx           # Form input with floating labels
    Textarea.tsx        # Form textarea with floating labels
    Select.tsx          # Form select dropdown
    index.ts            # Barrel export
  footer.tsx            # Site footer

lib/
  navigation-data.ts    # Navigation menu content/structure
  image-utils.ts        # Image metadata and blur placeholder utilities

public/
  logos/                # Client logo SVGs
  testimonials/         # Testimonial headshot images
  content/
    blog/               # Blog post images (parallel to content/blog/)
      [slug]/           # Folder per article matching MDX filename
        cover.jpg       # Cover image (required)
        *.png           # Inline images
```

### Blog Images

Images for blog posts use a **parallel folder structure**:
- MDX content: `content/blog/[slug].mdx`
- Images: `public/content/blog/[slug]/`

**Convention:**
- Image folder name must match the MDX filename (slug)
- Cover image: `cover.jpg` (or `.png`, `.webp`) - auto-detected
- Inline images: Any filename, referenced with absolute paths

**Frontmatter:**
```yaml
featuredImage: /content/blog/my-article/cover.jpg
```

**Inline images in MDX:**
```markdown
![Architecture Diagram](/content/blog/my-article/architecture.png)
```

**Features:**
- Automatic blur placeholder generation via `plaiceholder`
- `next/image` optimization with AVIF/WebP conversion
- Responsive sizes and lazy loading for inline images

### Design System

- **Theme:** Dark theme with premium enterprise aesthetic
- **Base color:** #0F172A (dark navy)
- **Surface colors:** #1E293B (elevated), #0F172A (base)
- **Accent color:** Teal (#14B8A6) - single unified accent color throughout
- **Highlight text:** Solid #0DB5A5 (`text-highlight`) - no gradient text
- **CTA buttons:** Solid #0D9488 (`bg-cta`) with #FCFCFC text (`text-cta-text`)
- **Text colors:** White with opacity - 90% (primary), 65% (secondary), 50% (muted) - blends better with backgrounds
- **Typography:** Inter for body copy (better readability), Outfit for headings/buttons/nav (brand display font)
- **Animations:** Framer Motion for scroll-triggered animations and micro-interactions

### Key Components

- **Glassmorphic cards:** `bg-surface/80 backdrop-blur-xl border border-border` with gradient glow effects
- **Floating label inputs:** Animated labels that move on focus/fill
- **Primary CTAs:** `bg-cta text-cta-text hover:brightness-110` with solid color (no gradients)

### Path Aliases

`@/*` maps to the project root.
