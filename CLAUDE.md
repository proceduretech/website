# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Extended Context

When you need deeper context about past decisions, PR history, architecture evolution, or why something was built a certain way, read `@docs/PROJECT_HISTORY.md`. This file is the project's extended memory with every PR documented. **Do not guess about past decisions - check the history file first.**

For content standards and brand voice: `@docs/COPYWRITING_GUIDELINES.md`
For theme details: `@docs/THEME_SYSTEM.md`
For interlinking strategy: `@docs/notion-interlinking-strategy.md`
For performance approach: `@docs/PERFORMANCE_OPTIMIZATION_PLAN.md`

## Subagent Model Policy

All subagents should use the latest available model. Currently: **opus** for complex tasks (copywriting, design, SEO auditing), **sonnet** for lighter tasks (image generation, quick reviews). Check every ~100 days if newer models are available and ask the user for approval before updating.

## Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run lighthouse` - Run Lighthouse CI audits

## Working Style

- **Parallelize aggressively.** Use parallel tool calls and sub-agents whenever tasks are independent. Don't serialize work that can run concurrently.

## Automatic Skill & Agent Usage

Use the right skill or agent automatically based on the task. Don't wait for the user to invoke them by name.

### When creating or modifying pages

| Trigger | Action |
|---------|--------|
| Creating a new page with copy | Use `enterprise-seo-copywriter` agent for the copy, then verify with `/pre-deploy` |
| Creating a new technology page | Use `/scaffold-technology-page` skill first, then `enterprise-seo-copywriter` for copy |
| Writing or updating any marketing copy | Use `enterprise-seo-copywriter` agent |
| Planning what content to create | Use `demand-generation-strategist` agent |
| Planning a specific page or blog post | Use `/content-brief` skill before writing |
| Optimizing existing page for LLM citations | Use `aeo-content-optimizer` agent |
| Designing a new page layout or section | Use `enterprise-web-designer` agent |
| Creating visual assets (illustrations, icons, hero images) | Use `creative-enterprise-designer` agent |
| Adding or fixing schema markup | Use `/schema-markup` skill |

### When optimizing performance

| Trigger | Action |
|---------|--------|
| LCP > 2.5s or slow page loads | Use `/lcp-optimization` skill |
| PageSpeed/Lighthouse scores need improvement | Use `lighthouse-optimizer` skill |
| General SEO audit needed | Use `technical-seo-expert` skill (comprehensive) or `/seo-audit` (quick Playwright-based) |

### Before shipping

| Trigger | Action |
|---------|--------|
| About to push or create a PR | Run `/pre-deploy` skill automatically |
| Content-heavy changes | Use `aeo-content-optimizer` agent to verify citability |

### Chaining rules

- **New page creation**: `/content-brief` -> `enterprise-web-designer` (layout) -> `enterprise-seo-copywriter` (copy) -> `/schema-markup` -> `/pre-deploy`
- **Content optimization**: `aeo-content-optimizer` -> `enterprise-seo-copywriter` (rewrites) -> `/pre-deploy`
- **Content strategy session**: `demand-generation-strategist` -> `/content-brief` for each approved piece

These should be used proactively. If the user says "create a new services page," don't just write JSX - run the full chain.

## Post-Implementation Workflow

After completing changes, always commit, push, and create a PR without waiting to be asked.

## Pre-Push Checklist

**Before pushing any commits, you MUST:**

1. **Run the build**: `npm run build` - Ensure TypeScript compilation and build pass without errors
2. **Run lint**: `npm run lint` - Fix any linting errors (warnings are acceptable)

## Pre-PR Checklist

**Before creating a Pull Request, you MUST:**

1. **Run lint**: `npm run lint` - Fix any linting errors (warnings are acceptable)
2. **Test locally**: `npm run dev` - Verify your changes work as expected
3. **Run the build** (if environment is configured): `npm run build` - Ensure the build completes without errors

This project uses `output: "export"` for static site generation. All dynamic routes (e.g., `[slug]`) require `generateStaticParams()` to work with static export.

**Note:** The full build requires `NOTION_TOKEN` environment variable to be set (for blog post generation). If you don't have Notion access, CI/CD will handle the full build validation.

## Content Conversion Tasks

When converting HTML/design files to the codebase:

1. **Always have source file accessible** - If conversation context was lost/summarized, request the source file again before proceeding
2. **Copy content verbatim** - Don't paraphrase headings, descriptions, service names, or marketing copy. Business-critical text must match exactly.
3. **Verify before committing** - For content-heavy pages, ask user to confirm content accuracy before finalizing
4. **Save reference files** - For large HTML/design files, consider saving to a reference location for comparison

**Why this matters:** Paraphrased content can misrepresent services, change SEO keywords, and create inconsistencies with other marketing materials.

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
- **Base color:** #0A1425 (deep navy)
- **Surface colors:** #111F35 (elevated), #070F1B (surface), #0A1425 (base)
- **Accent color:** Green (#1D9B69) - single unified accent color throughout
- **Accent light:** #2AAE79 (for hover states and lighter accents)
- **Highlight text:** Solid #1D9B69 (`text-highlight`) - no gradient text
- **CTA buttons:** Solid #1D9B69 (`bg-cta`) with #FCFCFC text (`text-cta-text`)
- **Border color:** #1A2A45
- **Text colors:** White with opacity - 90% (primary), 65% (secondary), 50% (muted) - blends better with backgrounds
- **Typography:** Inter for body copy (better readability), Outfit for headings/buttons/nav (brand display font)
- **Animations:** Framer Motion for scroll-triggered animations and micro-interactions

### Key Components

- **Glassmorphic cards:** `bg-surface/80 backdrop-blur-xl border border-border` with gradient glow effects
- **Floating label inputs:** Animated labels that move on focus/fill
- **Primary CTAs:** `bg-cta text-cta-text hover:brightness-110` with solid color (no gradients)

### Path Aliases

`@/*` maps to the project root.

---

## Website Strategy & Business Context

**Ownership Mindset:** Approach this website with active ownership - balancing technical excellence, UX, and demand generation to create a brand that attracts talent and converts decision-makers into booked meetings via Cal.com.

### Target Audiences

**Audience A - Engineers (Potential Hires)**
- Software engineers who could be future Procedure employees
- Currently reading our technical blogs for guidance and problem-solving
- Path: Blog reader → Careers page (`/careers/`) → Applicant
- Trust signals: BPTW certification, Glassdoor 4.9/5 rating, remote-first culture

**Audience B - Decision Makers (Clients)**
- Titles: VP/Director of Engineering, IT/Engineering Heads, CTOs
- Companies: Startups, growing companies, enterprises
- Regions: India, North America (NAMER), EU
- Average Deal size: $10K - $80K USD
- Sales cycle: 30-60 days from initial conversation

### Conversion Flow
1. Decision makers engage with content first (blogs, case studies)
2. Visit high-intent pages (services, industries, technology pages)
3. Some come directly from SERP to high-intent pages
4. Goal: Frictionless path to Cal.com booking
5. Also discoverable via SERPs and LLM citations (AEO)

### Client Portfolio

Key clients: Setu (fintech/API banking, 3-year partnership), Pine Labs (payments), ESPN (media), KredX (fintech), Treebo (hospitality), Timely (EdTech), Last9 (observability), MCLabs (telecom). Full details with industries and proof points in `@docs/PROJECT_HISTORY.md`.

**Industries with traction:** Fintech, Payments, SaaS, Healthcare, EdTech, Observability

### Testimonial Proof Points
- **Long-term retention:** 3 years with Setu, team scaled 1→5
- **Speed:** 12 weeks to launch (Tenmeya), 6 months faster (MCLabs)
- **Business outcomes:** 1000+ paying users in 6 months
- **VC endorsement:** Workshop Ventures recommends across their portfolio
- **Key titles:** Director of Engineering, CTO, CEO, Managing Partner

### Competitive Landscape

Competitors: Radixweb, Simform, OpenXcell, ValueCoders, Netguru, Toptal, and similar IT services companies. They're mostly larger body shops (500-2000+ engineers) with generalist positioning. Procedure differentiates on senior density, embedded model, and specialization. See `@docs/COPYWRITING_GUIDELINES.md` for positioning details.

### Procedure's USPs (Differentiation)
1. **Embedded model** - Extension of client's team, not a vendor
2. **Senior density** - Not a pyramid of juniors
3. **Low attrition** - Continuity for complex projects
4. **Speed** - 2-5 days to start, 12-week launches
5. **AI/Modern tech focus** - Specialized in AI engineering, not generalist
6. **Security-first AI** - Prompt injection defense, AI security expertise

---

## SEO & Technical Requirements

### Page Types by Intent

| Intent Level | Page Type | Examples |
|--------------|-----------|----------|
| **High Intent** | Service pages, Technology pages, Industry pages | `/services/ai-engineering`, `/industries/healthcare` |
| **Mid Intent** | Comparison pages, Guides | `/resources/staff-augmentation-vs-managed-delivery` |
| **Low Intent** | Blogs, Tutorials | `/blogs/[slug]` |

### Schema Markup Requirements

Implement JSON-LD structured data:

| Schema Type | Where | Purpose |
|-------------|-------|---------|
| Organization | Root layout | Site-wide trust signal, locations (Mumbai, SF), aggregate rating |
| FAQPage | Service pages with FAQ sections | Rich snippets in SERP |
| ProfessionalService | Service pages | Service-specific rich results |
| TechArticle | Blog posts | Author, date, category in SERP |
| BreadcrumbList | All nested pages | Navigation breadcrumbs in SERP |

### LLM Citation Optimization (AEO)

When building pages, structure content for AI discoverability:
- Clear H1 with primary keyword
- Definitive statements early in content (not buried)
- Consistent H2/H3 hierarchy
- FAQ sections with natural question-answer format
- Specific numbers and outcomes (not vague claims)

---

## Analytics

**GA4 Measurement ID:** G-2KW21KL401
**GTM Container ID:** GTM-KD7CJ8RC

**Key conversion event:** `generate_lead` (Cal.com booking) and contact form submissions on /contact-us/ page
