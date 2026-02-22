---
paths: app/**/page.tsx, app/**/layout.tsx
---

# SEO & Technical Requirements

## Page Types by Intent

| Intent Level | Page Type | Examples |
|--------------|-----------|----------|
| **High Intent** | Service pages, Technology pages, Industry pages | `/services/ai-engineering`, `/industries/healthcare` |
| **Mid Intent** | Comparison pages, Guides | `/resources/staff-augmentation-vs-managed-delivery` |
| **Low Intent** | Blogs, Tutorials | `/blogs/[slug]` |

## Schema Markup Requirements

Implement JSON-LD structured data:

| Schema Type | Where | Purpose |
|-------------|-------|---------|
| Organization | Root layout | Site-wide trust signal, locations (Mumbai, SF), aggregate rating |
| FAQPage | Service pages with FAQ sections | Rich snippets in SERP |
| ProfessionalService | Service pages | Service-specific rich results |
| TechArticle | Blog posts | Author, date, category in SERP |
| BreadcrumbList | All nested pages | Navigation breadcrumbs in SERP |

## LLM Citation Optimization (AEO)

When building pages, structure content for AI discoverability:
- Clear H1 with primary keyword
- Definitive statements early in content (not buried)
- Consistent H2/H3 hierarchy
- FAQ sections with natural question-answer format
- Specific numbers and outcomes (not vague claims)

Read `@docs/COPYWRITING_GUIDELINES.md` for full content standards including meta title rules, section subtext limits, and AEO writing principles.
