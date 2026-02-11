# Claude Session Documentation

Living document. Updated every session with verified facts, decisions, and known issues.

---

## .NET Modernization Page (`/technologies/dotnet/modernization`)

### Route structure
- Hub page: `/technologies/dotnet` (migrated from `/services/dotnet-development`)
- Subpage: `/technologies/dotnet/modernization`
- Old URL `/services/dotnet-development` redirects via:
  - `vercel.json` 301 redirect (platform-level)
  - `app/services/dotnet-development/page.tsx` client-side redirect (fallback)
  - `app/services/dotnet-development/layout.tsx` sets `robots: { index: false }`, canonical to new URL

### Content system
- `lib/content-types.ts`: `ContentType` union includes `"technologies"`
- `lib/content.ts`: `getTechnology()`, `getTechnologyForListing()`, `getAllTechnologySlugsFromContent()` read from `content/technologies/`
- `content/technologies/dotnet.mdx`: Hub page MDX content
- `lib/dotnet-modernization-data.ts`: All modernization page content as typed constants

### Components (created for this page)
- `components/technologies/ProblemSignals.tsx` - Uses flex wrap + justify-center for centered orphan cards
- `components/technologies/MigrationPathsTable.tsx` - Responsive table, cards on mobile
- `components/technologies/TechnicalCapabilities.tsx` - 2x2 grid, heading spacing `mb-5`
- `components/technologies/RiskMitigation.tsx` - Per-card icons via `Icons` from `lib/expertise-data.tsx`, flex wrap centered
- `components/technologies/RelatedDotnetServices.tsx` - 3-col service cards
- `components/technologies/index.ts` - Barrel export

### Reused components
- `PageHero` (`components/ui/PageHero.tsx`) - `showClientLogos` defaults to `true`
- `ProcessTimeline` (`components/expertise/ProcessTimeline.tsx`)
- `FAQSection` (`components/expertise/FAQSection.tsx`)
- `CalInline` (`components/CalInline.tsx`)

### Schema markup
- `DotnetModernizationPageClient.tsx` renders combined JSON-LD `@graph` with:
  - `Service` schema
  - `FAQPage` schema
  - `BreadcrumbList` schema

### Icons system
- Available icons in `lib/expertise-data.tsx:2` (`Icons` object): database, tune, terminal, layers, shield, chart, brain, cog, code, lock, eye, globe, server, device, check, cloud, cube, palette, squares, users, memory, document, puzzle, bolt, accessibility, workflow, api, notification, store
- There is NO `rocket` icon. Was changed to `bolt` for "Performance ceiling" card.

### ExpertisePageClient changes
- `app/services/[slug]/ExpertisePageClient.tsx`: Added `basePath?: string` prop (defaults to `"/services"`)
- All `slug === "dotnet-development"` checks changed to `"dotnet"`
- Schema URLs, breadcrumbs, bookingSubtext all use `basePath`

---

## Schema / SEO fixes (verified)

### Duplicate FAQPage fix
- **Problem**: Root `app/layout.tsx` injected a global `FAQPage` schema on ALL pages. Individual pages also had their own. Google flagged duplicates on `/services/frontend-development`.
- **Fix**: Removed `faqSchema` from `app/layout.tsx`, moved to `app/page.tsx` (homepage only). Each subpage keeps its own page-specific FAQ schema.
- **Verified**: `app/layout.tsx` no longer contains any FAQPage schema.

### Organization schema `image` field
- **Problem**: Google Rich Results Test showed "Missing field 'image' (optional)" on Organization schema.
- **Fix**: Added `image: "https://procedure.tech/og-image.png"` to Organization schema in `app/layout.tsx`.

---

## Navigation updates
- `lib/navigation-data.ts:144-150`: ".NET Development" link under "Product Engineering" pointing to `/technologies/dotnet`
- `components/footer.tsx`: ".NET Development" added to `productEngineering` array

## Sitemap
- `app/sitemap.ts:108-124`: Technology pages loop + explicit `/technologies/dotnet/modernization` entry

## Redirects
- `vercel.json:2-7`: 301 from `/services/dotnet-development` to `/technologies/dotnet`

---

## Known pre-existing issues (not introduced by us)

- `npm run build` fails on `/blogs/[slug]` without `NOTION_TOKEN` env var. CI handles this.
- 2 lint warnings (pre-existing): unused `cn` in `PhilosophySection.tsx:4`, unused `badge` in `PageHero.tsx:39`.

---

## .NET Staff Augmentation Page (`/technologies/dotnet/staff-augmentation`)

### Route structure
- Page: `/technologies/dotnet/staff-augmentation`
- `app/technologies/dotnet/staff-augmentation/page.tsx` - Server component
- `app/technologies/dotnet/staff-augmentation/DotnetStaffAugPageClient.tsx` - Client component with JSON-LD schema
- `app/technologies/dotnet/staff-augmentation/layout.tsx` - Metadata, canonical, OG

### Content data
- `lib/dotnet-staff-augmentation-data.ts` - All page content as typed constants
- Exports: heroData, problemSignals, problemTitle, problemIntro, serviceFeatures, serviceFeaturesTitle, approachSteps, skillsTitle, skillsTable, specializedSkills, useCasesTitle, useCases, whyProcedureTitle, whyProcedure, engagementModelsTitle, engagementModels, faqs, ctaData, relatedServices

### Components (created/updated for this page)
- `components/technologies/ServiceFeatures.tsx` - **Two variants**: `editorial` (left accent bars, numbered badges, 2-col item grids) and `compact` (2x2 grid with icons, hover gradient overlays). Used twice on page.
- `components/technologies/SkillsTable.tsx` - Desktop table with tech chip badges, experience level bars. Mobile cards. Specialized skills as flex-wrap pills with accent border and decorative blur.
- `components/technologies/UseCaseStories.tsx` - Category badges (Fintech/Enterprise/SaaS), quoted titles, icon containers, outcome highlight bar at bottom with checkmark.
- `components/technologies/EngagementModels.tsx` - Progressive top bars (1/3, 2/3, full width), large team size numbers, best-for labels, narrower max-w-5xl container.
- Barrel export updated in `components/technologies/index.ts`

### Schema markup
- Combined JSON-LD `@graph`: Service (with hasOfferCatalog for 3 engagement models), FAQPage, BreadcrumbList

### Design decisions
- H1 split: `headline="Hire Senior .NET Developers"` + `headlineAccent="Without the Recruitment Overhead"` (uses PageHero highlight)
- Section bg alternation: base/surface/own/base/surface/base/surface/surface(CTA)/own/own
- ServiceFeatures `editorial` variant used for "What You Get", `compact` variant for "Why Procedure" - prevents visual monotony when same component is used twice
- `problemIntro` shortened to single sentence (was 2 paragraphs)

### Cross-links
- `lib/dotnet-modernization-data.ts`: Staff aug related service href updated to `/technologies/dotnet/staff-augmentation`
- `app/sitemap.ts`: Staff augmentation URL added with priority 0.9

---

## Case Studies (Notion integration)

### Image caching system
- `lib/notion-image-cache.ts` - Downloads Notion-hosted images to `public/content/cache/`
- Cover images: `cacheCaseStudyCover()` -> `{slug}-cover-{hash}.{ext}`
- Inline images: `cacheCaseStudyContentImage()` -> `{slug}-{index}-{hash}.{ext}`
- Runs at build time when NOTION_TOKEN is available
- `lib/notion-case-studies.ts:647` calls `cacheContentImages()` for inline images
- Block fetcher (`fetchPageContent`) reads top-level blocks only (page_size: 100, no child block recursion)

### Published case studies (as of Feb 2026)
1. **Securing Agentic AI Browsers** - 2 inline images (Phase 1 + Phase 3 screenshots), Phase 2 has no image
2. **School Scheduling Transformation** - No inline images (text only)
3. **MCLabs Mission-Critical** - No inline images (text only)

### Known issue
- Phase 2 of the AI security case study may have an image in Notion that isn't rendering. Possible cause: image is inside a nested/toggle block that `fetchPageContent()` doesn't traverse (only top-level blocks fetched). Needs NOTION_TOKEN to investigate.
- OG image validation in `app/work/[slug]/page.tsx:35-40` rejects AWS/Notion URLs, falls back to default.

---

## Branch: `dotnet-modernization-page`
- PR: #74
- Latest commit: `51f03e1`
