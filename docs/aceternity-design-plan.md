# Aceternity UI Integration Design Plan

> Strategic integration of Aceternity UI components for Procedure's enterprise AI engineering services website.

**Document Version:** 1.0
**Last Updated:** December 2024
**Design Philosophy:** Selective enhancement, not wholesale replacement. Every component must earn its place.

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current State Analysis](#current-state-analysis)
3. [Recommended Components](#recommended-components)
4. [Implementation Phases](#implementation-phases)
5. [Component-by-Component Specifications](#component-by-component-specifications)
6. [Components NOT to Use](#components-not-to-use)
7. [Performance Considerations](#performance-considerations)
8. [Testing & QA Requirements](#testing--qa-requirements)

---

## Executive Summary

### The Objective

Elevate the visual sophistication of Procedure's website through strategic Aceternity UI integrations that reinforce our enterprise credibility while adding subtle delight. The goal is Apple/Stripe-level polish, not startup landing page flash.

### Guiding Principles

1. **Restraint over excess** - One memorable effect > five forgettable ones
2. **Performance is a feature** - No heavy canvas animations on mobile
3. **Brand consistency** - All effects use our Teal (#14B8A6) to Blue (#3B82F6) palette
4. **Progressive enhancement** - Site must work beautifully without these effects
5. **Enterprise trust signals** - Effects should feel sophisticated, not gimmicky

### Component Budget

To prevent overuse, we limit ourselves to:
- **3 background effects** (site-wide)
- **2 card interaction patterns** (reusable)
- **1 text effect** (hero only)
- **1 scroll-based effect** (content pages)

---

## Current State Analysis

### Existing Animation Inventory

The site already uses Framer Motion extensively:

| Component | Current Animation |
|-----------|------------------|
| Hero | Gradient glows, floating orbs, SVG connecting lines, staggered content reveal |
| Services | Scroll-triggered card reveals with stagger |
| Testimonials | AnimatePresence carousel with slide transitions |
| HowWeWork | Timeline with animated progress line, card hover effects |
| Stats | Counter animation on scroll-into-view |
| FAQ | Accordion expand/collapse |

### Existing Background Patterns

| Section | Pattern |
|---------|---------|
| Hero | Subtle grid pattern (0.015 opacity) |
| Services | Diagonal lines pattern |
| Testimonials | Circle pattern |
| HowWeWork | Circuit pattern |
| Stats | Plus/cross pattern |
| FAQ | Dot pattern |
| CTA | Diamond/rhombus pattern |

### Design System Constraints

- **Base color:** `#0F172A` (dark navy)
- **Surface:** `#131B2E` (elevated), `#0B1220` (surface)
- **Accent gradient:** `#14B8A6` (teal) to `#3B82F6` (blue)
- **Highlight:** `#00CCB8` (solid, no gradient text)
- **CTA:** `#007DE5` (solid blue)
- **Border:** `#1E293B`

---

## Recommended Components

### Tier 1: High Impact, Strategic Placement

| Component | Target Location | Rationale |
|-----------|----------------|-----------|
| **Spotlight Effect** | Service cards, CTA sections | Draws attention without motion-sickness; professional hover effect |
| **Infinite Moving Cards** | Testimonials section | Perfect for social proof; continuous flow suggests abundance |
| **Text Generate Effect** | Hero headline only | Creates memorable first impression; used sparingly = memorable |

### Tier 2: Content Enhancement

| Component | Target Location | Rationale |
|-----------|----------------|-----------|
| **Card Hover Effect** | Services grid, Blog cards | Background-slide effect is professional and satisfying |
| **Timeline** | HowWeWork process, About page | Scroll-following beam adds polish to existing timeline |

### Tier 3: Page-Specific Polish (Optional)

| Component | Target Location | Rationale |
|-----------|----------------|-----------|
| **Tracing Beam** | Case study detail pages | Long-form content benefits from scroll progress indication |
| **Focus Cards** | Team page (if exists) | Blur-surround effect for team member cards |

---

## Implementation Phases

### Phase 1: High Impact, Low Risk (Week 1)

**Priority:** Get maximum visual improvement with minimal structural changes.

1. **Spotlight Effect on CTA Section**
   - Effort: Low (wrapper component)
   - Impact: High (CTA is conversion-critical)
   - Risk: Very low (non-breaking enhancement)

2. **Infinite Moving Cards for Testimonials**
   - Effort: Medium (replace carousel logic)
   - Impact: High (testimonials are trust-critical)
   - Risk: Low (maintains content, changes presentation)

3. **Card Hover Effect on Services Grid**
   - Effort: Low (CSS + container wrapper)
   - Impact: Medium (improves interactivity)
   - Risk: Very low (hover enhancement only)

**Phase 1 Success Metrics:**
- [ ] CTA click-through rate maintained or improved
- [ ] Mobile performance score stays above 90
- [ ] No increase in bounce rate

### Phase 2: Hero Enhancement (Week 2)

**Priority:** Create memorable first impression without compromising load time.

1. **Text Generate Effect on Hero Headline**
   - Effort: Medium (headline component refactor)
   - Impact: High (first thing visitors see)
   - Risk: Medium (must not delay LCP)

2. **Subtle Spotlight on Hero CTA Buttons**
   - Effort: Low (button wrapper)
   - Impact: Medium (guides eye to action)
   - Risk: Very low

**Phase 2 Success Metrics:**
- [ ] LCP stays under 2.5s
- [ ] No layout shift from text animation
- [ ] Hero engagement time increases

### Phase 3: Content Page Polish (Week 3-4)

**Priority:** Enhance long-form content experience.

1. **Timeline Component for HowWeWork**
   - Effort: High (significant refactor)
   - Impact: Medium (process clarity)
   - Risk: Medium (complex integration)

2. **Tracing Beam for Case Study Pages**
   - Effort: Medium (wrapper component)
   - Impact: Low-Medium (reading experience)
   - Risk: Low

3. **Card Hover Effect on Blog Cards**
   - Effort: Low (reuse from Phase 1)
   - Impact: Low-Medium (blog engagement)
   - Risk: Very low

**Phase 3 Success Metrics:**
- [ ] Time on page for case studies increases
- [ ] Blog click-through rate maintained
- [ ] No mobile performance degradation

---

## Component-by-Component Specifications

### 1. Spotlight Effect

**Purpose:** Draw attention to interactive elements on hover/focus without heavy animation.

**Target Locations:**
- CTA section buttons and card
- Service cards (subtle version)
- Contact form area

**Customization Requirements:**

```typescript
// Spotlight configuration
const spotlightConfig = {
  // Use our accent teal as the spotlight color
  fill: "rgba(20, 184, 166, 0.15)", // accent-teal at 15% opacity

  // Spotlight should be large but subtle
  size: 400, // px

  // Smooth, not jarring
  blur: 100, // px

  // Only show on actual hover (not on touch)
  showOnTouch: false,
}
```

**Implementation Notes:**
- Wrap target elements in `<Spotlight>` component
- Disable on mobile via media query or `showOnTouch: false`
- Use CSS `will-change: opacity` for performance
- Spotlight should not interfere with existing hover states

**Responsive Behavior:**
- **Desktop:** Full spotlight effect
- **Tablet:** Reduced size (300px), lighter opacity (10%)
- **Mobile:** Disabled entirely

---

### 2. Infinite Moving Cards (Testimonials)

**Purpose:** Replace current carousel with continuously scrolling testimonials that suggest abundance of social proof.

**Current Testimonials Component Analysis:**
- Uses `useState` for index tracking
- `AnimatePresence` for transitions
- Auto-advance every 6 seconds
- Pause on hover
- Navigation dots and arrows

**Proposed Replacement:**

```typescript
// InfiniteMovingCards configuration
const testimonialCarouselConfig = {
  // Gentle speed - enterprise feel, not frantic
  speed: "slow", // or custom duration: 40000ms

  // Rightward motion feels natural for LTR readers
  direction: "right",

  // Pause on hover maintains current behavior
  pauseOnHover: true,

  // Fade edges for premium look
  showGradient: true,
  gradientColor: "#0F172A", // Match bg-base
}
```

**Card Design Specifications:**

```
[Testimonial Card]
├── Quote mark icon (accent-teal/30, 32px)
├── Highlight badge (existing design)
├── Quote text (text-secondary, 16-18px)
├── Divider line (border-border)
└── Author section
    ├── Avatar (48px, current gradient style)
    ├── Name (text-primary, font-semibold)
    ├── Role + Company (text-muted, 14px)
    └── Company logo (if space permits)
```

**Card Dimensions:**
- Width: 400px (desktop), 320px (tablet), 280px (mobile)
- Height: Auto (content-based, ~240px typical)
- Gap: 24px between cards
- Border-radius: 16px (rounded-2xl)

**Responsive Behavior:**
- **Desktop:** 3+ visible cards, continuous scroll
- **Tablet:** 2 visible cards
- **Mobile:** 1.5 visible cards (shows next card edge)

**Accessibility:**
- Add `aria-label="Customer testimonials carousel"`
- Ensure cards are focusable for keyboard navigation
- Respect `prefers-reduced-motion` - show static grid instead

---

### 3. Text Generate Effect (Hero Headline)

**Purpose:** Create memorable first impression by animating headline words into view.

**Current Hero Headline:**
```jsx
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight">
  AI Engineering
  <br />
  <span className="text-highlight">That Ships to Production</span>
</h1>
```

**Proposed Implementation:**

```typescript
// TextGenerateEffect configuration
const heroTextConfig = {
  // Split by words for readable animation
  splitBy: "words",

  // Quick but not jarring
  duration: 0.4, // seconds per word

  // Small stagger for flow
  stagger: 0.05, // seconds between words

  // Start with blur, fade in to sharp
  effect: "blur-to-sharp",

  // Initial delay to let page settle
  initialDelay: 0.3, // seconds

  // Don't replay on scroll
  triggerOnce: true,
}
```

**Animation Sequence:**
1. Page loads, headline invisible
2. 300ms delay
3. "AI" fades in (blur to sharp)
4. "Engineering" fades in
5. Line break
6. "That" fades in (with highlight color)
7. "Ships" fades in
8. "to" fades in
9. "Production" fades in
10. Total duration: ~1.2 seconds

**Critical Performance Requirements:**
- Animation must not block LCP (Largest Contentful Paint)
- Use `will-change: opacity, filter` sparingly
- Pre-render first frame to avoid layout shift
- Consider using CSS animations over JS for initial render

**Fallback Behavior:**
- `prefers-reduced-motion`: Show static headline immediately
- JS disabled: Static headline with CSS

---

### 4. Card Hover Effect (Services & Blog)

**Purpose:** When hovering one card in a grid, a subtle background slides to indicate the active card.

**Target Locations:**
- Services grid (6 cards)
- Blog post grid
- Case study cards (optional)

**Current Services Grid:**
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {services.map((service, idx) => (
    <motion.div className="group bg-surface-elevated rounded-2xl p-6 sm:p-8 border border-border hover:border-accent-teal/50 ...">
      {/* Card content */}
    </motion.div>
  ))}
</div>
```

**Implementation Approach:**

```typescript
// Wrap grid in HoverEffect container
<HoverEffect
  items={services}
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
  cardClassName="bg-surface-elevated rounded-2xl p-6 sm:p-8 border border-border"
  hoverClassName="bg-accent-teal/10 border-accent-teal/30"
/>
```

**Customization:**
- Background color: `rgba(20, 184, 166, 0.1)` (accent-teal/10)
- Border color on hover: `rgba(20, 184, 166, 0.3)`
- Transition: 200ms ease-out
- Border-radius: Match existing cards (16px)

**Responsive Behavior:**
- **Desktop:** Full hover effect
- **Tablet:** Full hover effect (touch triggers)
- **Mobile (single column):** Disable background slide, keep individual hover

---

### 5. Timeline Component (HowWeWork)

**Purpose:** Enhance the 5-step process timeline with a scroll-following gradient beam.

**Current Timeline:**
- Horizontal layout on desktop (5 columns)
- Cards with step numbers in circles
- Animated progress line on scroll

**Proposed Enhancement:**

Convert to Aceternity Timeline with:
- Vertical layout (better for scroll-following)
- Gradient beam that follows scroll position
- Cards alternate left/right for visual interest
- Step content remains the same

**Timeline Configuration:**

```typescript
const timelineConfig = {
  // Beam style
  beamGradient: {
    from: "#14B8A6", // accent-teal
    to: "#3B82F6",   // accent-blue
  },
  beamWidth: 2, // px

  // Dot style (step indicators)
  dotSize: 16, // px
  dotActiveColor: "#007DE5", // cta
  dotInactiveColor: "#1E293B", // border

  // Content alignment
  alternating: true, // cards alternate sides

  // Animation
  scrollTrigger: true,
  triggerOffset: 0.5, // beam reaches dot at 50% viewport
}
```

**Layout Specifications:**

```
[Desktop - Alternating Layout]
                    ●  [Card 1: Discovery]
[Card 2: Assessment]●
                    ●  [Card 3: Talent Matching]
[Card 4: Integration]●
                    ●  [Card 5: Deliver]

[Mobile - Single Column]
●  [Card 1]
●  [Card 2]
●  [Card 3]
●  [Card 4]
●  [Card 5]
```

**Implementation Notes:**
- This is a significant refactor of HowWeWork.tsx
- Consider keeping existing horizontal layout as fallback
- Test thoroughly on all breakpoints
- Beam animation must respect `prefers-reduced-motion`

---

### 6. Tracing Beam (Case Study Pages)

**Purpose:** Add scroll progress indication to long-form case study content.

**Target:** Individual case study detail pages (e.g., `/case-studies/[slug]`)

**Implementation:**

```typescript
// Wrap case study content
<TracingBeam
  // Match our brand colors
  gradient={{
    from: "#14B8A6",
    via: "#0F766E",
    to: "#3B82F6",
  }}

  // Positioning
  position: "left", // or "right"
  offset: 48, // px from content edge

  // Visibility
  showOnMobile: false, // hidden on small screens
/>
```

**Beam Specifications:**
- Width: 2px
- Color: Teal-to-blue gradient
- Follows scroll position
- Fades out at bottom of content

**Responsive Behavior:**
- **Desktop:** Full tracing beam, left side
- **Tablet:** Thinner beam (1px)
- **Mobile:** Hidden (not enough horizontal space)

---

## Components NOT to Use

### Explicitly Rejected

| Component | Reason |
|-----------|--------|
| **Background Beams** | Too flashy; would compete with existing hero animations; feels more startup than enterprise |
| **Wavy Background** | Too playful for enterprise positioning; canvas-based = performance concern |
| **3D Card Effect** | Perspective rotation feels gimmicky; enterprise CTOs expect stability, not tricks |
| **Flip Words** | Too attention-grabbing for body content; would distract from message |
| **Typewriter Effect** | Overused in AI/tech; would feel derivative rather than premium |
| **Animated Testimonials** (word-level) | Existing carousel works well; word animations would slow comprehension |
| **Grid and Dot Backgrounds** | Already have custom background patterns; would be redundant |
| **Meteor Effect** | Too decorative; doesn't align with enterprise aesthetic |
| **Aurora Background** | Beautiful but too ethereal for B2B services company |
| **Sparkles** | Too playful; appropriate for consumer products, not enterprise services |

### Conditional Rejections

| Component | Condition | Alternative |
|-----------|-----------|-------------|
| **Focus Cards** | Only if we build a team page | Standard hover effects |
| **Floating Dock** | Only if navigation redesign happens | Current nav is effective |
| **Bento Grid** | Only if we need asymmetric content layout | Standard grids |

---

## Performance Considerations

### Bundle Size Budget

Current estimated JS bundle: ~150KB (gzipped)

Aceternity component additions:
- Spotlight: ~3KB
- InfiniteMovingCards: ~5KB
- TextGenerateEffect: ~4KB
- CardHoverEffect: ~3KB
- Timeline: ~6KB
- TracingBeam: ~4KB

**Total addition: ~25KB** (acceptable, within 20% increase)

### Runtime Performance

| Component | CPU Impact | Memory Impact | Notes |
|-----------|------------|---------------|-------|
| Spotlight | Low | Low | GPU-accelerated opacity |
| InfiniteMovingCards | Medium | Low | CSS animation, minimal JS |
| TextGenerateEffect | Low (one-time) | Very Low | Runs once on load |
| CardHoverEffect | Low | Very Low | Event-driven, no continuous animation |
| Timeline | Medium | Low | Scroll listener, throttle at 16ms |
| TracingBeam | Medium | Low | Scroll listener, throttle at 16ms |

### Mobile Optimizations

1. **Disable heavy effects on mobile:**
   ```typescript
   const isMobile = window.matchMedia("(max-width: 768px)").matches;
   const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

   if (isMobile || prefersReducedMotion) {
     // Render simplified version
   }
   ```

2. **Lazy load non-critical effects:**
   - Timeline beam: Load on scroll into view
   - TracingBeam: Load when case study page mounts

3. **CSS containment:**
   ```css
   .aceternity-effect {
     contain: layout style paint;
   }
   ```

### Core Web Vitals Targets

| Metric | Current | Target | Risk Areas |
|--------|---------|--------|------------|
| LCP | 2.1s | <2.5s | TextGenerateEffect in hero |
| FID | 50ms | <100ms | Low risk |
| CLS | 0.02 | <0.1 | TextGenerateEffect layout shift |
| INP | 120ms | <200ms | CardHoverEffect event handlers |

---

## Testing & QA Requirements

### Before Each Phase Launch

1. **Lighthouse Audit**
   - Performance score: >90
   - Accessibility score: >95
   - Best Practices: >95

2. **Cross-Browser Testing**
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)

3. **Device Testing**
   - Desktop: 1920x1080, 1440x900
   - Tablet: iPad Pro (1024x1366)
   - Mobile: iPhone 14 Pro (390x844), Pixel 7 (412x915)

4. **Accessibility Testing**
   - Screen reader pass (NVDA, VoiceOver)
   - Keyboard navigation complete
   - `prefers-reduced-motion` respected
   - Color contrast maintained

### User Testing Checkpoints

After Phase 1:
- [ ] Testimonial section engagement (scroll depth)
- [ ] CTA hover rate and click-through
- [ ] Service card interaction patterns

After Phase 2:
- [ ] Hero section attention (heatmaps)
- [ ] Time to first scroll
- [ ] Bounce rate comparison

After Phase 3:
- [ ] Case study read completion rate
- [ ] Blog article engagement
- [ ] Process section comprehension

---

## Appendix: Color Reference

Quick reference for customizing Aceternity components:

```css
/* Primary palette */
--base: #0F172A;
--surface: #0B1220;
--surface-elevated: #131B2E;

/* Accent colors */
--accent-teal: #14B8A6;
--accent-teal-dark: #0F766E;
--accent-blue: #3B82F6;
--accent-blue-dark: #2563EB;

/* Highlight & CTA */
--highlight: #00CCB8;
--cta: #007DE5;

/* Opacity variants for effects */
--accent-teal-10: rgba(20, 184, 166, 0.1);
--accent-teal-15: rgba(20, 184, 166, 0.15);
--accent-teal-20: rgba(20, 184, 166, 0.2);
--accent-teal-30: rgba(20, 184, 166, 0.3);

/* Gradient for beams/lines */
--beam-gradient: linear-gradient(to bottom, #14B8A6, #3B82F6);
```

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2024 | Initial plan |

---

*This document should be reviewed after each implementation phase and updated based on learnings.*
