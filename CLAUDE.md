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

**Ownership Mindset:** Approach this website with active ownership - balancing technical excellence, UX, and demand generation to create a brand that attracts talent and converts decision-makers into booked meetings via Calendly.

### Target Audiences

**Audience A - Engineers (Potential Hires)**
- Software engineers who could be future Procedure employees
- Currently reading our technical blogs for guidance and problem-solving
- Path: Blog reader → Careers page (`/careers/`) → Applicant
- Content focus: Technical tutorials (current), thought leadership (future)

**Audience B - Decision Makers (Clients)**
- Titles: VP/Director of Engineering, IT/Engineering Heads, CTOs
- Companies: Startups, growing companies, enterprises
- Regions: India, North America (NAMER), EU
- Average Deal size: $10K - $80K USD
- Sales cycle: 30-60 days from initial conversation

### Conversion Flow
1. Decision makers engage with content first (blogs, case studies)
2. Visit high-intent pages (services, industries)
3. Some come directly from SERP to high-intent pages
4. Goal: Frictionless path to Calendly booking
5. Also discoverable via SERPs and LLM citations

### Client Portfolio

| Client | Industry | Notable |
|--------|----------|---------|
| **Setu** | Fintech/API Banking | India's leading open banking infra |
| **Pine Labs** | Payments/POS | Major payment processor |
| **KredX** | Fintech/Invoice Financing | Supply chain finance |
| **ESPN** | Media/Sports | Global brand recognition |
| **Treebo** | Hospitality/Travel | Budget hotel chain |
| **Turtlemint** | Insurtech | Insurance marketplace |
| **Timely** | SaaS/Productivity | Time tracking |
| **Tenmeya** | Middle East startup | 1000+ paying users in 6 months |
| **Last9** | Observability/DevOps | SRE tooling |
| **Workshop Ventures** | VC/Investor | Portfolio-wide endorsement |

**Industries with traction:** Fintech, Payments, SaaS, Media, Observability

### Testimonial Proof Points
- **Long-term retention:** 3 years with Setu, team scaled 1→5
- **Speed:** 12 weeks to launch (Tenmeya)
- **Business outcomes:** 1000+ paying users in 6 months
- **VC endorsement:** Workshop Ventures recommends across their portfolio
- **Key titles:** Director of Engineering, CTO, CEO, Managing Partner

### Competitive Landscape

**Competitors:**
- Radixweb, Simform, OpenXcell, ValueCoders, Netguru
- Iflexion, ScienceSoft, ELEKS, Hidden Brains, MindInventory

**Competitor characteristics:**
- Larger body shops (500-2000+ engineers)
- Generalist (web, mobile, QA, DevOps - everything)
- Price-competitive but lower senior density
- Heavy SEO investment on broad terms

### Procedure's USPs (Differentiation)
1. **Embedded model** - Extension of client's team, not a vendor
2. **Senior density** - Not a pyramid of juniors
3. **Low attrition** - Continuity for complex projects
4. **Speed** - 12-week launches, fast starts
5. **AI/Modern tech focus** - Specialized, not generalist

### Strategic Priorities
1. **SEO:** High-intent pages must rank well on SERP (analyze competitor rankings)
2. **Trust signals:** Leverage ESPN logo, VC endorsement more prominently
3. **Conversion optimization:** Strong CTAs, embedded Calendly on service pages
4. **LLM visibility:** Clear, authoritative content for AI engine citations
5. **Content:** Technical blogs for engineers, thought leadership for decision makers
