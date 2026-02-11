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

## Branch: `dotnet-modernization-page`
- PR: #74
- Latest commit: `f7b7e19`
