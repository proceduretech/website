# Project History & Changelog

> This file is the project's extended memory. When you need context about past decisions, architecture evolution, or why something was built a certain way, read this file via `@docs/PROJECT_HISTORY.md`. Do NOT load this into every session - only when you need historical context.

Last updated: Feb 2026

## Project Timeline

### Phase 1: Foundation (Pre-PR #20)
- Built initial Next.js site with dark theme, App Router
- Added Notion CMS integration for blog posts and case studies (replaced MDX)
- Implemented theme system (light/dark), later consolidated to dark-only
- Added footer reveal animation, client logo carousel, mega menu navigation
- Unified accent color to teal (#1D9B69) across entire site

### Phase 2: Content & SEO Foundation (PR #20-40)
- **PR #21** - First PageSpeed optimization pass (FCP and LCP improvements)
- **PR #22** - Added enterprise SEO copywriting guidelines (`docs/COPYWRITING_GUIDELINES.md`)
- **PR #23-26** - Frontend/backend expertise pages, content refinements, SEO audit fixes
- **PR #30** - Added 6 service pages: QA, AI Security, Mobile, AI Engineering, Product Design, Kubernetes
- **PR #31** - Open-sourced the repo, added GitHub Actions for deployment
- **PR #34** - Fixed broken case study and job application links
- **PR #36-37** - Multiple rounds of PageSpeed optimization (render blocking, LCP fixes)

### Phase 3: Polish & Performance (PR #40-60)
- **PR #42-44** - Comprehensive PageSpeed fixes, LazyMotion conversion (60KB bundle reduction)
- **PR #50** - Added Microsoft Clarity analytics
- **PR #51-53** - H1 standardization across all pages, mega menu hover fix
- **PR #54** - PageSpeed SEO fixes
- **PR #55** - Added website strategy and business context to CLAUDE.md (major addition)
- **PR #57** - Case study page cleanup (removed breadcrumbs, fixed parent/child bugs)
- **PR #58** - Design system refresh (new brand colors, removed pill above H1)
- **PR #59** - LCP optimization (lazy-loaded Cal.com widget, reduced animation delays)
- **PR #60** - JS bundle optimization (dynamic imports, Lighthouse CI config)

### Phase 4: SEO & Technology Pages (PR #61-80)
- **PR #61** - Blog UX improvements with Notion field mapping
- **PR #62** - Added Best Place to Work badge to footer
- **PR #63** - Internal Cal.com widget test page
- **PR #67** - Added 6 Claude Code skills from skills.sh
- **PR #68** - .NET Development Services page (first technology-specific page)
- **PR #69** - AI Security page redesign
- **PR #70** - JsonLd component and Organization schema
- **PR #71** - FAQPage and ProfessionalService schema on service pages
- **PR #72** - Hiring process timeline on careers page
- **PR #73** - Canonical URLs fix for LinkedIn OG image sharing
- **PR #74** - .NET Modernization page + Technologies route structure (`/technologies/dotnet/`)
- **PR #75** - Case study nested blocks + video/embed support
- **PR #76** - Google Search Console verification
- **PR #77** - Notion pagination fix + blog URL paths
- **PR #78** - Homepage heading spacing, title case, footer layout
- **PR #79** - Removed em dashes site-wide (content standard: use en dashes or hyphens)
- **PR #80** - MCLabs logo fix, service worker nav errors, TracingBeam hydration bug

### Phase 5: Technology Hub Expansion (PR #81-100)
- **PR #81** - Keka API-driven job listings (replaced embed) - later reverted in #83
- **PR #82** - Removed remaining HTML em dash entities
- **PR #84** - Removed AI Security vertical, Fellou case study refs, Docker blog refs
- **PR #85** - Next.js technology page (`/technologies/nextjs/`)
- **PR #86** - RSS feed for blog posts
- **PR #87** - Node.js technology page + Next.js Demand Curve updates
- **PR #88** - Angular technology page
- **PR #90** - Python technology page with framework comparison section
- **PR #91** - React technology page
- **PR #92** - Flutter technology page
- **PR #93** - Fixed duplicate FAQPage schema on expertise-style pages
- **PR #94** - "Ask AI about Procedure" + blog summarize buttons
- **PR #95** - Fixed duplicate sitemap entries
- **PR #96** - Expanded og:description to 100+ chars on 3 pages
- **PR #97** - React Native technology page
- **PR #98** - Blog schema improvements (AggregateRating, datePublished, author URL)
- **PR #99** - Added @id reference to publisher/worksFor Organization in blog schema
- **PR #100** - Updated llms.txt with comprehensive site information

### Phase 6: Performance & New Tech Pages (PR #101-110)
- **PR #101** - .NET parent page SEO improvements
- **PR #102** - LCP fix on service/technology pages
- **PR #103** - Cookie consent gating for analytics + contact form tracking
- **PR #104** - Prometheus Consulting & Support Services page
- **PR #106** - Removed Framer Motion from critical path on expertise pages
- **PR #107** - Inline CSS, remove polyfills, split chunks, lighten FM imports
- **PR #108** - Thanos Consulting & Support Services page
- **PR #109** - Fix LCP delay, remove hardcoded polyfill bundle
- **PR #110** - Code-split slug-specific sections from ExpertisePageClient

## Key Architecture Decisions

1. **Static export** (`output: "export"`) - All routes must have `generateStaticParams()`. Blog/case studies fetched from Notion at build time.
2. **No em dashes** - Content standard since PR #79. Use en dashes (-) or hyphens (-).
3. **No "Procedure" in meta titles** - Maximize keyword space for SEO.
4. **Technology pages follow hub-and-spoke** - Parent at `/technologies/[tech]/`, children for specific services like `/technologies/dotnet/modernization/`.
5. **Schema markup on every page** - Organization (sitewide), FAQPage (service pages), ProfessionalService (service pages), TechArticle (blogs), BreadcrumbList (nested pages).
6. **Framer Motion carefully managed** - Removed from critical render path (PR #106), lazy-loaded everywhere, no FM on above-fold content.
7. **Analytics stack** - GA4 (G-2KW21KL401) via GTM (GTM-KD7CJ8RC), gated behind cookie consent (PR #103). Cal.com booking = `generate_lead` event.
8. **llms.txt** - Comprehensive file at `/llms.txt` for LLM discoverability and AEO.

## Technology Pages Launched (in order)
1. .NET Development (`/technologies/dotnet/`) - PR #68
2. .NET Modernization (`/technologies/dotnet/modernization/`) - PR #74
3. Next.js (`/technologies/nextjs/`) - PR #85
4. Node.js (`/technologies/nodejs/`) - PR #87
5. Angular (`/technologies/angular/`) - PR #88
6. Python (`/technologies/python/`) - PR #90
7. React (`/technologies/react/`) - PR #91
8. Flutter (`/technologies/flutter/`) - PR #92
9. React Native (`/technologies/react-native/`) - PR #97
10. Prometheus (`/technologies/prometheus/`) - PR #104 (first CNCF project page)
11. Thanos (`/technologies/thanos/`) - PR #108

## Pending / In Progress
- Istio consulting page (content drafted in Notion)
- .NET Staff Augmentation subpage
- Technologies parent page with categorized logo grid
- CNCF ecosystem PR submissions (Prometheus, Istio commercial directories)
- Additional CNCF pages: FluxCD, Vitess, KubeEdge, Falco
- Vue.js explicitly excluded (declining priority)

## Ahrefs Metrics (Jan 2026)
- DR: 19
- Referring domains: 51-52
- Organic traffic: 66
- Organic keywords: 7
- Health score: 100%
- Site is new, growing
