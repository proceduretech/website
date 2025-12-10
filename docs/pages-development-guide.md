# Pages Development Guide

## Overview

This guide explains how to use the copy and design documentation files to implement the Expertise, Industries, and Use Case pages for the Procedure website.

**Documentation Files:**
- `expertise-pages-copy.md` - Copy for 12 expertise pages
- `expertise-pages-design.md` - Design specs for expertise pages
- `industries-pages-copy.md` - Copy for 4 industry + 3 use case pages
- `industries-pages-design.md` - Design specs for industry/use case pages

---

## File Structure to Create

```
app/
├── expertise/
│   ├── layout.tsx                    # Shared layout
│   ├── llm-applications/page.tsx
│   ├── ai-agents/page.tsx
│   ├── ai-security/page.tsx
│   ├── ai-privacy/page.tsx
│   ├── frontend/page.tsx
│   ├── backend/page.tsx
│   ├── mobile/page.tsx
│   ├── qa/page.tsx
│   ├── cloud/page.tsx
│   ├── kubernetes/page.tsx
│   ├── product-design/page.tsx
│   └── design-systems/page.tsx
├── industries/
│   ├── layout.tsx
│   ├── financial-services/page.tsx
│   ├── healthcare/page.tsx
│   ├── education/page.tsx
│   └── saas/page.tsx
├── use-cases/
│   ├── layout.tsx
│   ├── ai-search/page.tsx
│   ├── document-ai/page.tsx
│   └── conversational-ai/page.tsx

components/
├── expertise/
│   ├── ExpertiseHero.tsx
│   ├── CapabilitiesGrid.tsx
│   ├── TechStack.tsx
│   ├── ExpertiseCTA.tsx
│   └── index.ts
├── industries/
│   ├── IndustryHero.tsx
│   ├── ChallengesSection.tsx
│   ├── SolutionsGrid.tsx
│   ├── ComplianceBadges.tsx
│   └── index.ts
├── use-cases/
│   ├── UseCaseHero.tsx
│   ├── ProblemSolutionSection.tsx
│   ├── ArchitectureDiagram.tsx
│   ├── MetricsDisplay.tsx
│   └── index.ts

lib/
├── expertise-data.ts                 # All expertise page content
├── industries-data.ts                # All industry page content
└── use-cases-data.ts                 # All use case page content
```

---

## Implementation Order

### Phase 1: Shared Components (Week 1)

Build reusable components that all pages will use:

1. **ExpertiseHero.tsx** - Hero section with badge, headline, description
2. **CapabilitiesGrid.tsx** - Feature cards grid (3-col layout)
3. **IndustryHero.tsx** - Hero with stats row
4. **ChallengesSection.tsx** - 2x2 grid of challenge cards
5. **SolutionsGrid.tsx** - Featured + grid layout for solutions
6. **ProblemSolutionSection.tsx** - Before/after comparison
7. **ArchitectureDiagram.tsx** - Step-by-step flow visualization
8. **MetricsDisplay.tsx** - Large metric cards with benchmarks

### Phase 2: Data Files (Week 1)

Create TypeScript data files with all page content:

```typescript
// lib/expertise-data.ts
export interface ExpertisePageData {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    tagline: string;
    description: string;
  };
  capabilities: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  whyProcedure: string[];
  cta: {
    headline: string;
    description: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedExpertise: string[];
}

export const expertisePages: Record<string, ExpertisePageData> = {
  'llm-applications': {
    // Copy from expertise-pages-copy.md
  },
  // ... all 12 pages
};
```

### Phase 3: Expertise Pages (Week 2)

1. Create `app/expertise/layout.tsx` with shared structure
2. Implement first page: `/expertise/llm-applications`
3. Test and refine component patterns
4. Implement remaining 11 expertise pages

### Phase 4: Industry Pages (Week 3)

1. Create `app/industries/layout.tsx`
2. Implement first page: `/industries/financial-services`
3. Implement remaining 3 industry pages

### Phase 5: Use Case Pages (Week 3-4)

1. Create `app/use-cases/layout.tsx`
2. Implement `/use-cases/ai-search`
3. Implement `/use-cases/document-ai`
4. Implement `/use-cases/conversational-ai`

---

## Component Patterns

### Hero Section Pattern

```tsx
// components/expertise/ExpertiseHero.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui';

interface ExpertiseHeroProps {
  badge: string;
  headline: string;
  headlineAccent: string;
  tagline: string;
  description: string;
}

export function ExpertiseHero({
  badge,
  headline,
  headlineAccent,
  tagline,
  description,
}: ExpertiseHeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base to-surface" />

      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent-teal/8 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6"
        >
          <span className="text-sm font-medium text-accent-teal-light">
            {badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6"
        >
          {headline}{' '}
          <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
            {headlineAccent}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-text-secondary mb-4"
        >
          {tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-lg text-text-secondary max-w-3xl mb-8 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="primary" size="lg">
            Book a Call
          </Button>
          <Button variant="outline" size="lg">
            View Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
```

### Capabilities Grid Pattern

```tsx
// components/expertise/CapabilitiesGrid.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CapabilitiesGridProps {
  title?: string;
  subtitle?: string;
  capabilities: Capability[];
}

export function CapabilitiesGrid({
  title = 'Key Capabilities',
  subtitle,
  capabilities,
}: CapabilitiesGridProps) {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Capabilities grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className={cn(
                'group relative p-6 rounded-2xl',
                'bg-surface-elevated/50 backdrop-blur-sm',
                'border border-border hover:border-accent-teal/30',
                'transition-all duration-300',
                'hover:shadow-lg hover:shadow-accent-teal/5',
                'hover:-translate-y-1'
              )}
            >
              {/* Icon */}
              <div className={cn(
                'w-12 h-12 rounded-xl mb-4',
                'bg-gradient-to-br from-accent-teal/20 to-accent-blue/20',
                'border border-accent-teal/20',
                'flex items-center justify-center',
                'group-hover:border-accent-teal/40 transition-colors'
              )}>
                {capability.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {capability.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {capability.description}
              </p>

              {/* Hover glow */}
              <div className={cn(
                'absolute inset-0 rounded-2xl opacity-0',
                'bg-gradient-to-br from-accent-teal/5 to-transparent',
                'group-hover:opacity-100 transition-opacity duration-300',
                'pointer-events-none'
              )} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

### FAQ Section Pattern

```tsx
// components/shared/FAQSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

export function FAQSection({ title = 'Frequently Asked Questions', faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12">
          {title}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                'rounded-xl border border-border',
                'bg-surface-elevated/30',
                openIndex === index && 'border-accent-teal/30'
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium text-text-primary">
                  {faq.question}
                </span>
                <svg
                  className={cn(
                    'w-5 h-5 text-text-muted transition-transform',
                    openIndex === index && 'rotate-180'
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Page Template Example

```tsx
// app/expertise/llm-applications/page.tsx
import { Metadata } from 'next';
import { expertisePages } from '@/lib/expertise-data';
import { ExpertiseHero } from '@/components/expertise/ExpertiseHero';
import { CapabilitiesGrid } from '@/components/expertise/CapabilitiesGrid';
import { WhyProcedure } from '@/components/shared/WhyProcedure';
import { FAQSection } from '@/components/shared/FAQSection';
import { ExpertiseCTA } from '@/components/expertise/ExpertiseCTA';

const pageData = expertisePages['llm-applications'];

export const metadata: Metadata = {
  title: pageData.meta.title,
  description: pageData.meta.description,
};

export default function LLMApplicationsPage() {
  return (
    <>
      <ExpertiseHero
        badge={pageData.hero.badge}
        headline={pageData.hero.headline}
        headlineAccent={pageData.hero.headlineAccent}
        tagline={pageData.hero.tagline}
        description={pageData.hero.description}
      />

      <CapabilitiesGrid
        title="Key Capabilities"
        capabilities={pageData.capabilities}
      />

      <WhyProcedure
        title={`Why Procedure for ${pageData.hero.badge}?`}
        points={pageData.whyProcedure}
      />

      <FAQSection faqs={pageData.faqs} />

      <ExpertiseCTA
        headline={pageData.cta.headline}
        description={pageData.cta.description}
      />
    </>
  );
}
```

---

## Data File Example

```typescript
// lib/expertise-data.ts
import {
  BrainIcon,
  CodeIcon,
  ShieldIcon,
  // ... other icons
} from '@/components/icons';

export const expertisePages = {
  'llm-applications': {
    slug: 'llm-applications',
    meta: {
      title: 'LLM Applications Development | Production AI | Procedure',
      description: 'Build production LLM applications with RAG, fine-tuning, and prompt engineering. Ship ChatGPT and Claude integrations in days. Talk to our AI engineers.',
    },
    hero: {
      badge: 'LLM Applications',
      headline: 'Production LLM Applications That',
      headlineAccent: 'Actually Work',
      tagline: 'From prototype to production in days, not months.',
      description: 'Most LLM demos fail in production. Hallucinations, latency issues, and security gaps derail enterprise deployments. We build LLM applications engineered for real-world reliability—with RAG architectures, guardrails, and observability baked in from day one.',
    },
    capabilities: [
      {
        icon: 'database',
        title: 'RAG Architecture & Implementation',
        description: 'Build retrieval-augmented generation systems that ground LLM responses in your data. We design vector databases, embedding pipelines, and retrieval strategies optimized for accuracy and speed.',
      },
      {
        icon: 'tune',
        title: 'Fine-Tuning & Model Optimization',
        description: 'When off-the-shelf models aren\'t enough, we fine-tune models on your domain data. Achieve better performance at lower cost with models tailored to your specific use case.',
      },
      {
        icon: 'terminal',
        title: 'Prompt Engineering at Scale',
        description: 'Production prompts aren\'t the same as playground prompts. We build prompt pipelines with version control, A/B testing, and systematic optimization for consistent, reliable outputs.',
      },
      {
        icon: 'layers',
        title: 'Multi-Model Orchestration',
        description: 'Route queries to the right model based on complexity, cost, and latency requirements. Build resilient systems that leverage multiple LLM providers without vendor lock-in.',
      },
      {
        icon: 'shield',
        title: 'Guardrails & Safety Systems',
        description: 'Implement content filtering, output validation, and hallucination detection. Build LLM applications your compliance team will approve.',
      },
      {
        icon: 'chart',
        title: 'Observability & Monitoring',
        description: 'Track token usage, latency, and quality metrics in production. Debug issues fast with comprehensive logging and tracing across your LLM stack.',
      },
    ],
    whyProcedure: [
      'Production experience: We\'ve shipped LLM apps handling millions of queries, not just demos',
      'Speed to value: First working prototype in 5 days, not 5 months of exploration',
      'Full-stack capability: From infrastructure to UI, we build the complete solution',
      'Model-agnostic: OpenAI, Anthropic, open-source—we use what works best for your use case',
    ],
    cta: {
      headline: 'Ready to Ship Your LLM Application?',
      description: 'Talk to our AI engineers about your LLM project. We\'ll show you how to get to production in days, with the reliability your enterprise demands.',
    },
    faqs: [
      {
        question: 'How long does it take to build a production LLM application?',
        answer: 'Most projects reach initial production deployment within 2-4 weeks. We start with a 5-day sprint to validate the approach and build a working prototype, then iterate toward production-grade quality.',
      },
      {
        question: 'Should we use RAG or fine-tuning for our use case?',
        answer: 'It depends on your requirements. RAG is better for dynamic data and citations, while fine-tuning excels at consistent style and domain expertise. Often, the best solution combines both approaches.',
      },
      {
        question: 'How do you handle LLM hallucinations in production?',
        answer: 'We implement multiple layers: retrieval-grounding to constrain responses, output validation to catch inconsistencies, confidence scoring to flag uncertain responses, and human-in-the-loop workflows for high-stakes decisions.',
      },
      {
        question: 'Can you work with our existing infrastructure?',
        answer: 'Yes. We\'ve integrated LLM applications with legacy systems, on-premise deployments, and every major cloud provider. Our engineers embed with your team and work in your codebase.',
      },
    ],
    relatedExpertise: ['ai-agents', 'ai-security', 'ai-privacy'],
  },
  // ... remaining pages
};
```

---

## SEO Implementation

### Metadata Pattern

```tsx
// app/expertise/[slug]/page.tsx
import { Metadata } from 'next';
import { expertisePages } from '@/lib/expertise-data';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = expertisePages[params.slug];

  return {
    title: page.meta.title,
    description: page.meta.description,
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return Object.keys(expertisePages).map((slug) => ({ slug }));
}
```

### Structured Data

Add JSON-LD for FAQ sections:

```tsx
// Add to page component
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: pageData.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }),
  }}
/>
```

---

## Testing Checklist

Before shipping each page:

- [ ] Meta title under 60 characters
- [ ] Meta description under 160 characters
- [ ] H1 contains primary keyword
- [ ] All images have alt text
- [ ] Page loads under 3 seconds
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] All links work
- [ ] CTAs link to /contact or Cal.com
- [ ] FAQ schema markup validates
- [ ] Accessibility: keyboard navigation, screen reader compatible
- [ ] Animations respect `prefers-reduced-motion`

---

## Design System Tokens

Reference these from `globals.css`:

```css
/* Colors */
--color-base: #0f172a;
--color-surface: #0b1220;
--color-surface-elevated: #131b2e;
--color-border: #1e293b;
--color-text-primary: #e5e7eb;
--color-text-secondary: #9ca3af;
--color-text-muted: #7c8594;
--color-accent-teal: #0f766e;
--color-accent-teal-light: #14b8a6;
--color-accent-blue: #2563eb;
--color-accent-blue-light: #3b82f6;

/* Spacing */
Section padding: py-20 sm:py-28
Container: max-w-6xl or max-w-7xl
Card padding: p-6
Gap between cards: gap-6

/* Typography */
H1: text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight
H2: text-3xl sm:text-4xl font-semibold tracking-tight
H3: text-xl font-semibold
Body: text-base text-text-secondary leading-relaxed

/* Border radius */
Cards: rounded-2xl
Buttons: rounded-xl
Badges: rounded-full
```

---

## Questions?

If you need clarification on any section:
1. Check the source copy/design doc
2. Reference existing pages (like /services/forward-deployed)
3. Follow patterns from similar components
