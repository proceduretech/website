# Copywriting & Content Standards

The single source of truth for all content on procedure.tech. Every page, blog post, meta tag, and social draft follows these rules. No exceptions.

---

## Company Context

**Company:** Procedure - B2B software engineering consultancy (est. 2017)
**Offices:** Mumbai (engineering HQ), San Francisco (US presence)
**Positioning:** AI-native engineering studio. Senior engineers only. Embedded with your team.
**Website:** procedure.tech (Next.js 16, dark theme, static export)

---

## Target Audiences

### Audience A: Engineers (Potential Hires)

Mostly India-based developers who should see Procedure as a place they'd want to work.

- They discover us through technical blogs, search, and community mentions
- Path: Blog reader > Careers page (`/careers/`) > Applicant
- What they care about: technical depth, engineering culture, learning opportunities
- Trust signals: BPTW certification, Glassdoor 4.9/5, remote-first, low attrition

### Audience B: Decision Makers (Clients)

Engineering and IT leaders, primarily USA and India.

- Titles: VP/Director of Engineering, IT/Engineering Heads, CTOs
- Companies: startups, growth-stage, enterprises
- Regions: India, North America (NAMER), EU
- Deal size: $10K-$80K USD, 30-60 day sales cycle
- Path: SERP/LLM citation > technology or service page > Cal.com booking
- What they care about: speed, senior talent quality, reliability, specific tech expertise

---

## Voice & Tone

### Who We Sound Like

A senior engineer who also understands business. Direct. Specific. Not trying to impress anyone with vocabulary - just saying what's true.

### Core Principles

- **Direct and honest.** Get to the point. No filler paragraphs.
- **Technical credibility.** Use precise terminology. Our audience knows the difference between REST and GraphQL.
- **Anti-consultant.** "We build, not just advise." Never sound like a slide deck.
- **Conversational, not corporate.** Write like a human, not a brochure. If it sounds like ChatGPT wrote it, rewrite it.
- **Outcome-focused.** Lead with what the client gets, not what we do.

### Things to Avoid

- Generic consulting speak ("leverage synergies", "digital transformation journey")
- Vague promises ("we're the best", "world-class", "cutting-edge")
- Feature lists without context or business impact
- Sales-y language that engineers reject on sight
- Overly enthusiastic tone ("Excited to announce!", "We're thrilled!")
- AI-sounding filler ("In today's rapidly evolving landscape...")
- Passive voice when active is clearer

---

## Hard Rules (Non-Negotiable)

These rules apply everywhere on the site. The Claude Code hooks and pre-deploy checks enforce several of these automatically.

### 1. No Em Dashes

**Never use em dashes ( — ) anywhere on the site.** This was cleaned up site-wide in PRs #79 and #82 and must not regress.

- Hyphens ( - ) are fine for compound words: "full-stack", "real-time"
- En dashes ( – ) are fine for ranges: "2-5 days", "2020-2025"
- If you'd reach for an em dash, restructure the sentence or use a comma/period instead

### 2. No "Procedure" in Meta Titles

Meta titles should use every character for value-driven keywords. At DR 19, brand name recognition doesn't earn clicks - specific value propositions do.

**Wrong:** `Next.js Development Services | Procedure`
**Right:** `Next.js Development Services | Production-Grade Web Applications`

Keep meta titles under 60 characters. Front-load the primary keyword.

### 3. Section Subtexts: Max 15 Words

The introductory text under each H2 section heading should be a single impactful line, max 15 words. Detailed content belongs in the section body below.

**Wrong:** "Need backend engineers to join your existing team? We provide senior Node.js developers who integrate with your workflows, codebase, and sprint rhythm."

**Right:** "Senior Node.js engineers who plug into your team and ship from week one."

### 4. H2s Must Include the Primary Keyword

Section headings (H2s) should be keyword-rich. The keyword placement in H2s matters for SEO ranking. Don't water down headings for brevity at the expense of the target keyword.

**Exception:** Generic structural headings like "FAQ" or "Related Services" are fine.

### 5. US English Everywhere

- Color (not colour), optimize (not optimise), center (not centre)
- No regional slang or region-specific references

### 6. Content Must Stay Current

Technology references must reflect the latest stable versions. Update when new major versions ship.

- Example: After .NET 10 releases (November 2025), all .NET pages should reference .NET 10, not .NET 8
- Check framework versions, tool versions, and any dated statistics at least quarterly

---

## SEO Standards

### Meta Titles

- Under 60 characters
- Primary keyword first
- Value proposition after the pipe ( | )
- No company name (see Hard Rule #2)

### Meta Descriptions

- 100-160 characters (never under 100)
- Include primary keyword naturally
- End with a soft CTA or value statement
- Specific and descriptive, not generic

### Header Hierarchy

- One H1 per page with the primary keyword
- H2s for main sections (keyword-rich)
- H3s for subsections within H2 blocks
- Never skip levels (no H1 > H3)

### Internal Linking

- Every page should link to at least 2-3 related pages
- Use descriptive anchor text (not "click here" or "learn more")
- Technology pages link to related service pages and vice versa
- Blog posts link to relevant technology and service pages
- See `@docs/notion-interlinking-strategy.md` for the full strategy

### Schema Markup

Every page type requires specific JSON-LD structured data:

- **All pages:** Organization schema in root layout
- **Service/technology pages:** ProfessionalService + FAQPage + BreadcrumbList
- **Blog posts:** TechArticle with author, date, category
- **Pages with FAQ sections:** FAQPage schema (single block, not duplicated)

FAQ schema must use a single block covering all Q&A pairs. Do not create separate FAQPage schemas per question.

---

## AEO (Answer Engine Optimization)

Content should be structured so LLMs (ChatGPT, Claude, Perplexity, Google AI Overviews) can cite us accurately.

### Writing for LLM Citations

- **Definitive statements early.** Don't bury the answer. Put the core claim in the first 1-2 sentences of a section.
- **Specific numbers and outcomes.** "12 weeks to launch" is citable. "Fast delivery" is not.
- **Self-contained FAQ answers.** Each answer should make sense on its own without needing to read the question. Include the key entity/topic name in the answer.
- **Factual, quotable claims.** LLMs prefer statements they can attribute with confidence: "Procedure embeds senior engineers within 2-5 business days" vs. "We get started quickly."
- **Structured, parseable content.** Clear H1 > H2 > H3 hierarchy. Short paragraphs. No wall-of-text sections.

### What Makes Content Citable

- Company name + specific claim + proof point in one sentence
- Statistics with context (not just numbers)
- Process descriptions with timelines
- Comparison statements ("unlike body shops that...")
- Technology-specific expertise claims backed by client work

### llms.txt

The site maintains a `llms.txt` file at the root that LLM crawlers use for site discovery. When adding new pages, update llms.txt. See the current file for format and structure.

---

## Technology Page Standards

Technology pages (`/technologies/*`) follow the hub-and-spoke model established with the .NET page. Each page should include:

### Required Sections

1. **Hero** with primary keyword in H1, proof-point subhead (client names), and dual CTA
2. **"When to use [Technology]"** section - positions the tech honestly, not as a silver bullet
3. **Services section** with 7+ service cards showing specific capabilities
4. **Tech stack** section showing the tools and frameworks we use with this technology
5. **Delivery process** with clear steps and timelines
6. **Hiring section** for staff-augmentation intent (if applicable)
7. **FAQ section** with natural-language questions and self-contained answers
8. **Related services/technologies** for internal linking

### Content Approach

- Don't oversell. Be honest about when a technology is and isn't the right choice.
- Include specific client work or proof points where possible
- Dual-path routing: "Need an app built?" vs "Need developers on your team?"
- CTAs should use low-commitment language: "no obligation," "30-minute call," "talk with engineers, not sales"

---

## Blog Content

### Who Writes

Engineers write the blogs. The tone should reflect genuine technical experience, not marketing repackaging of docs.

### Format

Problem > Solution > Implementation. Every post should answer a question someone actually asks on Google, Stack Overflow, Reddit, or in LLM queries.

### Standards

- Technical depth is non-negotiable. Don't dumb things down.
- Include code examples where relevant
- Link to related technology/service pages (interlinking strategy)
- Frontmatter must include: title, description, author, date, featured image, tags
- Featured images go in `public/content/blog/[slug]/cover.jpg`

---

## Social Media Content

### LinkedIn

- Audience: decision makers + engineers
- Tone: conversational, insight-led, not corporate
- 2-3 variations per post (engineer-focused, decision-maker-focused, thought leadership)
- No: "Excited to announce", hashtag spam (max 3-4 per post), AI buzzwords
- Yes: specific insight or takeaway, hook in first line, clear but soft CTA

### Twitter/X

- Under 280 characters
- Direct, punchy, opinionated
- Link to the full content
- 2-3 variations per post

---

## Trust Indicators & CTAs

### Approved Trust Signals

Use these specific claims (they're verified and backed by data):

- "Glassdoor 4.9/5 rating"
- "Certified Great Place to Work (Dec 2025 - Dec 2026)"
- "100+ products shipped to production"
- "98% client retention rate"
- "Senior engineers only - not a pyramid of juniors"
- "2-5 days to start"
- "3+ years average client partnership"
- Specific client names: Setu, ESPN, Pine Labs, KredX, Treebo, Timely, Last9

### CTA Language

Low-commitment, specific, and honest:

- "Book a 30-minute call" (not "Request a demo")
- "No obligation, no sales pitch"
- "Talk with engineers, not salespeople"
- "See if we're a fit"
- "Explore [technology] services"

Avoid: "Get started today!", "Unlock your potential!", "Transform your business!"

---

## Content Checklist

Before publishing any page or content update, verify:

- [ ] No em dashes anywhere on the page
- [ ] Meta title under 60 chars, no "Procedure", primary keyword first
- [ ] Meta description 100-160 chars with keyword and CTA
- [ ] One H1 with primary keyword
- [ ] H2s include relevant keywords
- [ ] Section subtexts are single lines, max 15 words
- [ ] og:description is 100+ characters
- [ ] Schema markup present (ProfessionalService, FAQPage, BreadcrumbList as applicable)
- [ ] FAQ answers are self-contained (citable without the question)
- [ ] At least 2-3 internal links to related pages
- [ ] Specific proof points and numbers (not vague claims)
- [ ] US English spelling throughout
- [ ] All technology version references are current
- [ ] Content sounds human (read it aloud - does it sound like a person talking?)
- [ ] CTAs use low-commitment language
- [ ] Images have alt text with relevant keywords
- [ ] Page is listed in sitemap.xml and llms.txt

---

## Messaging Pillars

When writing about Procedure, lean on these differentiators:

1. **Embedded, not outsourced.** "Same Slack channels, same standups, same codebase."
2. **Senior engineers only.** "Not a pyramid of juniors managed by one senior."
3. **Speed.** "2-5 days to start. 12-week launches."
4. **Low attrition.** "Your team stays together. 3+ year client partnerships."
5. **AI-native.** "AI engineering, security, and agents - not just web development."
6. **Battle-tested.** "100+ products in production. Setu, ESPN, Pine Labs."

---

## Buyer Psychology Principles

These principles inform how we structure content, not just what we write. Every agent and skill references this section.

### For Decision Makers (Enterprise Buyers)

**Anchoring:** The first number or proof point sets the frame. Lead sections with the strongest metric. "100+ products shipped" before listing services. "3-year partnership with Setu" before explaining the engagement model.

**Social proof before the ask:** Client logos, testimonials, and specific outcomes must appear BEFORE the CTA on every high-intent page. The sequence is always: proof -> value statement -> CTA. Never CTA-first.

**Authority through specificity:** Replace every vague claim with a specific one. "Fast onboarding" becomes "2-5 business days to start." "Experienced team" becomes "Senior engineers only - not a pyramid of juniors." Specificity IS the trust signal.

**Pre-suasion framing:** The content immediately before a CTA should make the reader feel the cost of inaction. Frame around their pain ("Every week without dedicated engineers is another sprint of tech debt"), then offer the resolution ("Book a 30-minute call").

**Teach, don't pitch (Challenger approach):** High-intent pages should reframe the buyer's problem. "Most companies treat AI projects like software projects - and they fail because AI requires different iteration cycles and evaluation frameworks." Then position Procedure as the team that understands this difference. Don't just describe services - teach something the buyer didn't know.

### For Engineers (Technical Audience)

**Education over promotion.** Developers reject marketing on sight. Every piece of technical content must teach something genuinely useful before it mentions Procedure. The brand builds through demonstrated competence, not claims.

**No gating, no friction.** Technical content is never gated behind forms. No forced demos, no "download the whitepaper" gates. Engineers will leave and never return.

**Show, then tell.** Code examples, architecture diagrams, and specific technical decisions first. Company positioning second, if at all.

**Respect their time.** Be concise. No filler paragraphs. No "in today's rapidly evolving landscape." Engineers will close the tab.

**Honesty about tradeoffs.** When discussing technologies, be honest about limitations. "Here's when .NET is the right choice, and here's when it isn't." This builds more trust than unconditional advocacy.

### For Shareable Content (Blog, Thought Leadership)

**Social Currency:** Will sharing this make the reader look smart or well-informed? Content that provides a framework, names a pattern, or offers a contrarian-but-backed-by-evidence take gets shared.

**Practical Value:** Can the reader use this right now? Tutorials, checklists, decision frameworks, and specific recommendations have high share rates.

**Stories over abstractions:** Wrap insights in narratives. "When we built the payment system for Setu, we discovered..." beats "Payment systems require careful consideration of..."

---

## Metrics That Matter

### Primary Goals

1. Organic traffic growth (SERP rankings for target keywords)
2. LLM citation presence (AEO)
3. Cal.com bookings from organic visitors (generate_lead events)
4. Qualified lead quality (Director/VP/CTO-level inquiries)

### Secondary Signals

- Time on page for high-intent pages
- Internal navigation depth (service page > technology page > contact)
- Social engagement from engineering communities
- Backlinks from technical blogs and industry sites
- Reddit/HN discussion references

---

**Last Updated:** February 22, 2026
**Used By:** enterprise-seo-copywriter agent, aeo-content-optimizer agent, demand-generation-strategist agent, /content-brief command, /social-draft command, /tech-page command
