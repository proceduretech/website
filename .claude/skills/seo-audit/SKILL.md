Run a comprehensive SEO audit on: $ARGUMENTS

If no URL is specified, audit the full site starting with homepage, then technology pages, then service pages.

## Workflow

1. **Use Playwright MCP** to crawl the target page(s) on procedure.tech
2. **Check each page for:**
   - Meta title (under 60 chars, no "Procedure" in title, primary keyword present)
   - Meta description (under 160 chars, includes CTA, 100+ chars)
   - H1 tag (single H1, includes primary keyword)
   - H2/H3 hierarchy (logical, keyword-rich)
   - Schema markup (validate JSON-LD: Organization, FAQPage, ProfessionalService, BreadcrumbList, TechArticle as appropriate)
   - Open Graph tags (og:title, og:description 100+ chars, og:image present)
   - Canonical URL (present, correct)
   - Internal links (check for orphan pages, broken links)
   - Image alt text (all images have descriptive alts)
   - Core Web Vitals indicators (LCP element, CLS-prone elements)
   - No em dashes (content standard)
3. **Cross-reference with sitemap.xml** - ensure all pages are listed, no duplicates
4. **Check robots.txt** - verify AI crawlers are allowed
5. **Validate llms.txt** - ensure it lists all current pages

## Output Format

Generate a markdown report with:
- Overall score (0-100)
- Critical issues (blocks ranking)
- High priority (significant impact)
- Quick wins (easy fixes, good ROI)
- Per-page breakdown table

Save the report to `docs/seo-audit-[date].md`
