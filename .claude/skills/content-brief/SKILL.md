---
description: Generate a comprehensive content brief for a target topic or page. Use when planning new pages, blog posts, or content pieces before writing.
user_invocable: true
argument: Topic or page name to create the brief for
---

Generate a comprehensive content brief for: $ARGUMENTS

## Research Phase

1. **Keyword research**: Identify primary keyword, secondary keywords, and long-tail variations that decision-makers (CTOs, VPs of Engineering, IT Heads) would search for. Consider both SERP and LLM query patterns.
2. **Search intent**: Determine if the intent is informational, navigational, or transactional. This affects page structure.
3. **Competitor scan**: Check what ranks for the primary keyword. Note gaps we can fill.
4. **Internal linking opportunities**: Identify existing pages on procedure.tech that should link to/from this content.

## Brief Structure

### Page Metadata
- **Target URL**: `/[path]/`
- **Primary keyword**: [keyword] (estimated volume if known)
- **Secondary keywords**: [list]
- **Search intent**: [informational/transactional/mixed]
- **Meta title**: [under 60 chars, no "Procedure", keyword-rich]
- **Meta description**: [under 160 chars, includes CTA]

### Content Outline
- **H1**: [includes primary keyword]
- **H2s**: [each with primary or secondary keyword, max 15-word subtext]
- **Estimated word count**: [range]
- **Content type**: [service page / blog / comparison / guide]

### AEO Optimization Notes
- Definitive statements to include early (for LLM citation)
- FAQ questions (natural language, what real people ask)
- Quotable facts with specific numbers

### Schema Markup Required
- [List applicable schema types]

### Internal Linking Plan
- Pages that should link TO this page: [list with anchor text suggestions]
- Pages this page should link TO: [list]

### Differentiation Points
- What makes Procedure's take unique vs competitor content
- Specific proof points (client names, metrics, timelines)

## Output
Save the brief to `docs/briefs/[slug]-brief.md`
