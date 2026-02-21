Scaffold a new technology page for: $ARGUMENTS

## Context

Read `@docs/PROJECT_HISTORY.md` for the list of existing technology pages and the patterns used. Follow the same architecture as existing pages under `/technologies/`.

## What to Create

1. **Route**: `app/technologies/[slug]/page.tsx` (or nested if it's a subpage like dotnet/modernization)
2. **Page component** following the expertise page pattern:
   - Hero section with H1 containing primary keyword
   - Service cards section (7+ cards covering consulting, development, migration, support, etc.)
   - "Why Procedure for [tech]" section with differentiators
   - FAQ section (6-8 questions in natural language, AEO-optimized)
   - CTA section linking to Cal.com booking
3. **Metadata** with `generateMetadata()`:
   - Title: keyword-rich, under 60 chars, NO "Procedure" in title
   - Description: under 160 chars, includes benefit + CTA
   - OpenGraph with 100+ char description
   - Canonical URL
4. **Schema markup**:
   - ProfessionalService schema
   - FAQPage schema (single block, not duplicate)
   - BreadcrumbList
5. **Static params**: Add to `generateStaticParams()`
6. **Update sitemap**: Ensure the new page appears
7. **Update llms.txt**: Add the new page URL with description
8. **Update navigation**: Add to mega menu if appropriate
9. **Internal linking**: Add links from related existing pages

## Content Standards (read @docs/COPYWRITING_GUIDELINES.md)

- Section subtexts: one impactful line, max 15 words
- No em dashes. Use en dashes or hyphens.
- Lead with business outcomes, not features
- Include specific numbers (timelines, team sizes, results)
- AEO: definitive statements early, quotable facts, clear H2/H3 hierarchy
- US English spelling

## Before Committing

- Run `npm run build` to verify static export works
- Run `npm run lint` to fix any issues
- Verify schema with a mental check against Schema.org specs
- Create PR with descriptive title: `feat: [Technology] technology page (/technologies/[slug]/)`
