# CLAUDE.md

## Extended Context

Read these docs on demand, not upfront. Only open what's relevant to the current task.

- Past decisions and PR history: `@docs/PROJECT_HISTORY.md`
- Content standards and brand voice: `@docs/COPYWRITING_GUIDELINES.md`
- Theme tokens and design system: `@docs/THEME_SYSTEM.md`
- Business context (audiences, clients, USPs): `@docs/BUSINESS_CONTEXT.md`
- Interlinking strategy: `@docs/notion-interlinking-strategy.md`
- Performance approach: `@docs/PERFORMANCE_OPTIMIZATION_PLAN.md`

## Architecture

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Inter + Outfit fonts, Framer Motion. Static export (`output: "export"`) - all dynamic routes need `generateStaticParams()`. Full build requires `NOTION_TOKEN` env var; CI/CD handles validation without it.

`@/*` maps to project root. Explore `app/`, `components/`, `lib/`, `content/` to understand the codebase.

## Commands

- `npm run dev` - Dev server (localhost:3000)
- `npm run build` - Production build
- `npm run lint` - ESLint
- `npm run typecheck` - TypeScript check
- `npm run test:e2e` - Playwright E2E tests
- `npm run lighthouse` - Lighthouse CI audits

## Subagent Model Policy

**opus** for complex tasks (copywriting, design, SEO). **sonnet** for lighter tasks (image generation, quick reviews).

## Working Style

- **Parallelize aggressively.** Use parallel tool calls and sub-agents whenever tasks are independent.

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

Before pushing: `npm run build` (must pass) and `npm run lint` (fix errors, warnings OK).

## Pre-PR Checklist

1. `npm run lint` - fix errors
2. `npm run dev` - verify changes work
3. `npm run build` - must pass (if NOTION_TOKEN available)

## Context Management

When compacting, always preserve: the list of modified files, current branch name, the specific task being worked on, and any test/build results.

## Analytics

GA4: `G-2KW21KL401` | GTM: `GTM-KD7CJ8RC` | Key event: `generate_lead` (Cal.com booking) and contact form submissions on `/contact-us/`
