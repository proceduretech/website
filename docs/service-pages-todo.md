# Service Pages Implementation Checklist

## Overview

This checklist tracks the implementation of service landing pages for Procedure's website. Reference `service-pages-plan.md` for architecture details and `service-pages-copy.md` for approved copy.

---

## Phase 1: Foundation

### Component Setup
- [ ] Create `components/services/` directory structure
- [ ] Create `ServiceHero.tsx` - Reusable hero section with label, H1, subheadline, CTAs
- [ ] Create `PainPoints.tsx` - Problem/pain points section with H2 and items
- [ ] Create `SolutionOverview.tsx` - Solution intro with differentiators
- [ ] Create `ServiceOfferings.tsx` - Capabilities grid with icons and descriptions
- [ ] Create `ProcessTimeline.tsx` - How we work timeline/steps
- [ ] Create `ServiceFAQ.tsx` - Accordion FAQ section
- [ ] Create `RelatedServices.tsx` - Cross-linking to other services
- [ ] Create `ServiceCTA.tsx` - Final CTA section
- [ ] Create `components/services/index.ts` - Barrel export

### Data Structure
- [ ] Create `lib/services-data.ts` with all service content
- [ ] Define TypeScript types for service data
- [ ] Add meta tags data for each service
- [ ] Add FAQ data for each service
- [ ] Add process steps for each service

### Route Setup
- [ ] Create `app/services/page.tsx` - Services index page
- [ ] Create `app/services/[slug]/page.tsx` - Dynamic service page template
- [ ] Implement `generateStaticParams` for all service routes
- [ ] Implement `generateMetadata` for dynamic meta tags

---

## Phase 2: Priority 1 Services

### AI Engineering (`/services/ai-engineering`)
- [ ] Add AI Engineering data to services-data.ts
- [ ] Create page with all sections
- [ ] Add meta tags (title, description, OG)
- [ ] Test responsive layout
- [ ] Verify all CTAs link correctly

### Product Engineering (`/services/product-engineering`)
- [ ] Add Product Engineering data to services-data.ts
- [ ] Create page with all sections
- [ ] Add meta tags
- [ ] Test responsive layout
- [ ] Verify all CTAs link correctly

### Cloud & DevOps (`/services/cloud-devops`)
- [ ] Add Cloud & DevOps data to services-data.ts
- [ ] Create page with all sections
- [ ] Add meta tags
- [ ] Test responsive layout
- [ ] Verify all CTAs link correctly

---

## Phase 3: Priority 2 Services

### AI Security (`/services/ai-security`)
- [ ] Add AI Security data to services-data.ts
- [ ] Create page with all sections
- [ ] Add meta tags
- [ ] Test responsive layout
- [ ] Verify all CTAs link correctly

### Web & Mobile (`/services/web-mobile`)
- [ ] Add Web & Mobile data to services-data.ts
- [ ] Create page with all sections
- [ ] Add meta tags
- [ ] Test responsive layout
- [ ] Verify all CTAs link correctly

### Experience Design (`/services/design`)
- [ ] Add Experience Design data to services-data.ts
- [ ] Create page with all sections
- [ ] Add meta tags
- [ ] Test responsive layout
- [ ] Verify all CTAs link correctly

---

## Phase 4: Services Index Page

### Services Overview Page (`/services`)
- [ ] Create hero section for services overview
- [ ] Add services grid with cards linking to each service
- [ ] Add engagement models section
- [ ] Add testimonial or social proof element
- [ ] Add final CTA
- [ ] Add meta tags

---

## Phase 5: SEO & Technical

### Structured Data
- [ ] Add Organization schema to layout
- [ ] Add Service schema to each service page
- [ ] Add FAQ schema to FAQ sections
- [ ] Add BreadcrumbList schema
- [ ] Test with Google Rich Results Test

### Internal Linking
- [ ] Add "Related Services" links to each page
- [ ] Update home page Services section with new URLs
- [ ] Update navigation mega menu links
- [ ] Add breadcrumb navigation component

### Performance
- [ ] Verify all pages statically generated
- [ ] Check Core Web Vitals scores
- [ ] Optimize images (if any added)
- [ ] Verify mobile responsiveness
- [ ] Test page load times

---

## Phase 6: QA & Launch

### Content Review
- [ ] Proofread all service page copy
- [ ] Verify all statistics are accurate
- [ ] Check for consistent terminology
- [ ] Ensure CTAs have correct href values

### Cross-Browser Testing
- [ ] Chrome desktop & mobile
- [ ] Safari desktop & mobile
- [ ] Firefox desktop
- [ ] Edge desktop

### Accessibility
- [ ] Run Lighthouse accessibility audit
- [ ] Verify proper heading hierarchy
- [ ] Check color contrast ratios
- [ ] Test keyboard navigation
- [ ] Verify skip navigation works

### Final Checks
- [ ] Run `npm run build` successfully
- [ ] Test all pages in production build
- [ ] Verify sitemap includes new pages
- [ ] Submit new pages to Google Search Console
- [ ] Monitor analytics after launch

---

## Component Props Reference

### ServiceHero
```typescript
interface ServiceHeroProps {
  label: string;           // e.g., "AI ENGINEERING SERVICES"
  headline: string;        // H1 headline
  subheadline: string;     // Supporting text
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}
```

### PainPoints
```typescript
interface PainPointsProps {
  headline: string;        // H2 headline
  points: {
    title: string;
    description: string;
  }[];
}
```

### ServiceOfferings
```typescript
interface ServiceOfferingsProps {
  headline: string;
  capabilities: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
}
```

### ProcessTimeline
```typescript
interface ProcessTimelineProps {
  headline: string;
  steps: {
    title: string;
    description: string;
    timing?: string;       // e.g., "Week 1"
  }[];
}
```

### ServiceFAQ
```typescript
interface ServiceFAQProps {
  headline: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}
```

---

## File Locations Reference

```
app/
  services/
    page.tsx                    # Services index
    [slug]/
      page.tsx                  # Dynamic service page

components/
  services/
    ServiceHero.tsx
    PainPoints.tsx
    SolutionOverview.tsx
    ServiceOfferings.tsx
    ProcessTimeline.tsx
    ServiceFAQ.tsx
    RelatedServices.tsx
    ServiceCTA.tsx
    index.ts

lib/
  services-data.ts              # All service content

docs/
  service-pages-plan.md         # Implementation plan
  service-pages-copy.md         # Approved copy
  service-pages-todo.md         # This checklist
```

---

## Notes

- Start with AI Engineering page as the template
- Reuse components across all service pages
- Keep animations consistent with home page sections
- Use same color scheme (blue/sky gradients)
- Maintain "you" voice from existing copy
