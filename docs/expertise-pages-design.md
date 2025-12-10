# Expertise Pages Design Specification

## Overview

This document defines the design system for Procedure's 12 Expertise pages, creating a premium, enterprise-grade experience that feels modern, technical, and trustworthy.

**Pages Covered:**
- AI & ML: LLM Applications, AI Agents, AI Security, AI Privacy
- Product Engineering: Frontend, Backend, Mobile, QA
- Cloud & DevOps: Cloud Architecture, Kubernetes
- Design: Product Design, Design Systems

---

## 1. Page Template Structure

### Section Order & Hierarchy

```
1. Hero Section          - pt-32 pb-20 sm:pb-28
2. Key Capabilities      - py-20 sm:py-28 bg-surface
3. Technical Approach    - py-20 sm:py-28 bg-base
4. Technology Stack      - py-16 sm:py-20 bg-surface
5. Social Proof          - py-16 sm:py-20 bg-base
6. Related Expertise     - py-16 sm:py-20 bg-surface
7. CTA Section           - py-20 sm:py-28 bg-base
```

### Container Widths

- **Hero content**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Standard sections**: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Wide sections (capabilities)**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Responsive Behavior

- **Desktop (lg+)**: Full two-column layouts, all visual elements visible
- **Tablet (md)**: Condensed grids (2-col instead of 3), stacked hero
- **Mobile (sm)**: Single column, simplified visuals, touch-optimized spacing

---

## 2. Hero Section Design

### Layout Structure

```
Desktop (lg+):
┌─────────────────────────────────────────────────────────────┐
│  [Eyebrow Badge]                                            │
│                                                             │
│  H1 Headline with                    ┌──────────────────┐   │
│  Gradient Emphasis                   │                  │   │
│                                      │   Visual         │   │
│  Subheadline supporting text         │   Element        │   │
│  across 2-3 lines max                │   (Code/Diagram) │   │
│                                      │                  │   │
│  [Primary CTA]  [Secondary CTA]      └──────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Mobile:
┌─────────────────────┐
│  [Eyebrow Badge]    │
│                     │
│  H1 Headline with   │
│  Gradient Emphasis  │
│                     │
│  Subheadline text   │
│                     │
│  [Primary CTA]      │
│  [Secondary CTA]    │
│                     │
│  ┌───────────────┐  │
│  │ Visual Element│  │
│  └───────────────┘  │
└─────────────────────┘
```

### Typography

```css
/* Eyebrow Badge */
.eyebrow {
  @apply inline-flex items-center gap-2 px-4 py-1.5 rounded-full;
  @apply bg-accent-teal/10 border border-accent-teal/20;
  @apply text-sm font-medium text-accent-teal-light;
}

/* H1 Headline */
.headline {
  @apply text-4xl sm:text-5xl lg:text-6xl font-semibold;
  @apply tracking-tight leading-[1.1];
}

/* Gradient phrase within H1 */
.headline-gradient {
  @apply bg-gradient-to-r from-accent-teal-light to-accent-blue-light;
  @apply bg-clip-text text-transparent;
}

/* Subheadline */
.subheadline {
  @apply text-lg sm:text-xl text-text-secondary;
  @apply leading-relaxed max-w-2xl;
}
```

### Background Treatment

```tsx
// Base gradient layer
<div className="absolute inset-0 bg-gradient-to-b from-base via-base to-surface opacity-50" />

// Accent glow (positioned based on category)
<div className="absolute top-0 right-0 w-[600px] h-[600px]
  bg-gradient-radial from-accent-teal/8 to-transparent
  blur-3xl" />

// Grid pattern overlay
<div className="absolute inset-0 opacity-[0.02]"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg...")`,
    backgroundSize: '32px 32px'
  }} />
```

### Visual Elements by Category

| Category | Visual Element | Description |
|----------|---------------|-------------|
| **AI & ML** | Code Preview | Syntax-highlighted code showing LLM API call or agent config |
| **Product Engineering** | Browser/App Mockup | Glassmorphic frame with abstract UI elements |
| **Cloud & DevOps** | Architecture Diagram | Simplified node-and-connection diagram |
| **Design** | Component Grid | Abstract UI components in a bento layout |

### Hero Animation Sequence

```tsx
const heroAnimation = {
  eyebrow: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0 }
  },
  headline: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.1 }
  },
  subheadline: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 }
  },
  ctas: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.3 }
  },
  visual: {
    initial: { opacity: 0, scale: 0.95, x: 20 },
    animate: { opacity: 1, scale: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
  }
}
```

---

## 3. Capabilities/Features Section

### Layout Options

#### Option A: Feature Grid (Default)

Best for: 4-6 capabilities of equal weight

```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Cap 1   │ │ Cap 2   │ │ Cap 3   │
└─────────┘ └─────────┘ └─────────┘
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Cap 4   │ │ Cap 5   │ │ Cap 6   │
└─────────┘ └─────────┘ └─────────┘
```

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {capabilities.map((cap) => (
    <CapabilityCard key={cap.id} {...cap} />
  ))}
</div>
```

#### Option B: Bento Grid

Best for: 4-5 capabilities with one featured

```
┌───────────────────┐ ┌─────────┐
│                   │ │ Cap 2   │
│   Featured Cap    │ └─────────┘
│   (with visual)   │ ┌─────────┐
│                   │ │ Cap 3   │
└───────────────────┘ └─────────┘
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Cap 4   │ │ Cap 5   │ │ Cap 6   │
└─────────┘ └─────────┘ └─────────┘
```

#### Option C: Alternating Rows

Best for: 3-4 detailed capabilities with illustrations

```
┌──────────────────────┐ ┌────────────┐
│ Text content         │ │ Visual     │
│ + bullet points      │ │            │
└──────────────────────┘ └────────────┘
┌────────────┐ ┌──────────────────────┐
│ Visual     │ │ Text content         │
│            │ │ + bullet points      │
└────────────┘ └──────────────────────┘
```

### Card Design

```tsx
// Capability Card Component
<div className={cn(
  "group relative p-6 rounded-2xl",
  "bg-surface-elevated/50 backdrop-blur-sm",
  "border border-border hover:border-accent-teal/30",
  "transition-all duration-300",
  "hover:shadow-lg hover:shadow-accent-teal/5",
  "hover:-translate-y-1"
)}>
  {/* Icon container */}
  <div className={cn(
    "w-12 h-12 rounded-xl mb-4",
    "bg-gradient-to-br from-accent-teal/20 to-accent-blue/20",
    "border border-accent-teal/20",
    "flex items-center justify-center",
    "group-hover:border-accent-teal/40 transition-colors"
  )}>
    <Icon className="w-6 h-6 text-accent-teal-light" />
  </div>

  {/* Content */}
  <h3 className="text-lg font-semibold text-text-primary mb-2">
    {title}
  </h3>
  <p className="text-text-secondary leading-relaxed">
    {description}
  </p>

  {/* Optional: Bullet points */}
  {bullets && (
    <ul className="mt-4 space-y-2">
      {bullets.map((bullet) => (
        <li className="flex items-start gap-2 text-sm text-text-muted">
          <CheckIcon className="w-4 h-4 text-accent-teal mt-0.5 shrink-0" />
          {bullet}
        </li>
      ))}
    </ul>
  )}

  {/* Hover glow effect */}
  <div className={cn(
    "absolute inset-0 rounded-2xl opacity-0",
    "bg-gradient-to-br from-accent-teal/5 to-transparent",
    "group-hover:opacity-100 transition-opacity duration-300",
    "pointer-events-none"
  )} />
</div>
```

### Icon Treatment

- **Style**: Outlined icons with 1.5-2px stroke
- **Size**: 24x24px within 48x48px container
- **Color**: `text-accent-teal-light` (#14b8a6)
- **Container**: Gradient background with matching border

---

## 4. Social Proof Section

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│  "Trusted by engineering teams at"                          │
│                                                             │
│  [Logo] [Logo] [Logo] [Logo] [Logo] [Logo]                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────────────────────┐  ┌─────────────┐  │
│  │  Featured Case Study                 │  │  Metric     │  │
│  │  Client • Industry                   │  │  +150%      │  │
│  │                                      │  │  improvement│  │
│  │  Brief description of results        │  └─────────────┘  │
│  │                                      │  ┌─────────────┐  │
│  │  [Read Case Study →]                 │  │  Metric     │  │
│  └──────────────────────────────────────┘  │  50% faster │  │
│                                            └─────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Client Logos

```tsx
// Filter logos relevant to this expertise
<div className="flex flex-wrap justify-center gap-8 items-center">
  {relevantLogos.map((logo) => (
    <img
      src={logo.src}
      alt={logo.alt}
      className={cn(
        "h-8 opacity-40 grayscale",
        "hover:opacity-100 hover:grayscale-0",
        "transition-all duration-300"
      )}
    />
  ))}
</div>
```

### Metric Callouts

```tsx
<div className={cn(
  "p-6 rounded-xl",
  "bg-gradient-to-br from-accent-teal/10 to-accent-blue/10",
  "border border-accent-teal/20"
)}>
  <div className="text-3xl font-bold bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
    +150%
  </div>
  <div className="text-sm text-text-secondary mt-1">
    improvement in API response time
  </div>
</div>
```

---

## 5. Technical Details Section

### Tech Stack Display

```
┌─────────────────────────────────────────────────────────────┐
│  Technologies We Use                                         │
│                                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐           │
│  │ [Logo]  │ │ [Logo]  │ │ [Logo]  │ │ [Logo]  │           │
│  │ OpenAI  │ │ Claude  │ │ LangCh  │ │ Pinecone│           │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘           │
│                                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐           │
│  │ [Logo]  │ │ [Logo]  │ │ [Logo]  │ │ [Logo]  │           │
│  │ Weaviate│ │ Chroma  │ │ HuggingF│ │ Weights │           │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘           │
└─────────────────────────────────────────────────────────────┘
```

```tsx
<div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-6">
  {techStack.map((tech) => (
    <div className={cn(
      "flex flex-col items-center gap-2 p-4 rounded-xl",
      "bg-surface-elevated/30",
      "border border-border hover:border-accent-teal/30",
      "group transition-all duration-300"
    )}>
      <img
        src={tech.logo}
        alt={tech.name}
        className="h-10 w-10 grayscale group-hover:grayscale-0 transition-all"
      />
      <span className="text-xs text-text-muted text-center">
        {tech.name}
      </span>
    </div>
  ))}
</div>
```

### Code Snippet Styling (for technical pages)

```tsx
<div className={cn(
  "rounded-xl overflow-hidden",
  "bg-[#0d1117] border border-border"
)}>
  {/* Header bar */}
  <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated/50 border-b border-border">
    <div className="flex gap-1.5">
      <div className="w-3 h-3 rounded-full bg-red-500/60" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
      <div className="w-3 h-3 rounded-full bg-green-500/60" />
    </div>
    <span className="text-xs text-text-muted ml-2">{filename}</span>
  </div>

  {/* Code content */}
  <pre className="p-4 overflow-x-auto">
    <code className="text-sm font-mono">{code}</code>
  </pre>
</div>
```

---

## 6. CTA Section Design

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│          Ready to build [expertise] that ships?             │
│                                                             │
│     Talk to our team about your project. We'll show you     │
│     how we can help you ship to production in days.         │
│                                                             │
│        [Book a Call]  [View Case Studies]                   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  "Quote from a client about this expertise area"    │   │
│  │                                                     │   │
│  │  — Client Name, Title at Company                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Styling

```tsx
<section className="relative py-20 sm:py-28">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-surface via-base to-base" />

  {/* Accent glow */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-accent-teal/10 to-transparent blur-3xl" />

  <div className="relative max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
      Ready to build{' '}
      <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
        {expertise}
      </span>
      {' '}that ships?
    </h2>

    <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
      Talk to our team about your project. We'll show you how we can help you ship to production in days.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="primary" size="lg">Book a Call</Button>
      <Button variant="outline" size="lg">View Case Studies</Button>
    </div>
  </div>
</section>
```

---

## 7. Visual Differentiation Strategy

### Color System by Category

| Category | Primary Accent | Secondary Accent | Glow Color |
|----------|---------------|------------------|------------|
| **AI & Machine Learning** | `accent-teal` | `accent-blue` | `accent-teal/10` |
| **Product Engineering** | `accent-blue` | `accent-teal` | `accent-blue/10` |
| **Cloud & DevOps** | `accent-teal` | `accent-blue` | `accent-teal/8` |
| **Design** | `accent-blue` | `accent-teal` | `accent-blue/8` |

### Category-Specific Visual Elements

#### AI & Machine Learning Pages
- **Icon theme**: Neural networks, nodes, connections, AI chips
- **Visual element**: Code snippets showing API calls, JSON responses
- **Background accent**: Subtle neural network pattern overlay

#### Product Engineering Pages
- **Icon theme**: Code brackets, components, screens, layers
- **Visual element**: Browser mockups, code editors, component trees
- **Background accent**: Grid/pixel pattern

#### Cloud & DevOps Pages
- **Icon theme**: Clouds, servers, containers, pipelines
- **Visual element**: Architecture diagrams, deployment flows
- **Background accent**: Topology/connection lines

#### Design Pages
- **Icon theme**: Frames, grids, color swatches, typography
- **Visual element**: Component grids, design system previews
- **Background accent**: Abstract geometric shapes

---

## 8. Animation & Micro-interactions

### Scroll-Triggered Animations

```tsx
// Section reveal
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

// Card stagger
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}
```

### Hover Effects

```css
/* Card lift + glow */
.card-hover {
  @apply transition-all duration-300;
  @apply hover:-translate-y-1;
  @apply hover:shadow-lg hover:shadow-accent-teal/10;
  @apply hover:border-accent-teal/40;
}

/* Icon container pulse */
.icon-container:hover {
  @apply scale-105;
  box-shadow: 0 0 20px rgba(20, 184, 166, 0.3);
}

/* Tech logo reveal */
.tech-logo {
  @apply grayscale opacity-50;
  @apply hover:grayscale-0 hover:opacity-100;
  @apply transition-all duration-300;
}
```

### Loading States

```tsx
// Skeleton for cards
<div className="animate-pulse">
  <div className="h-12 w-12 rounded-xl bg-surface-elevated mb-4" />
  <div className="h-6 w-3/4 rounded bg-surface-elevated mb-2" />
  <div className="h-4 w-full rounded bg-surface-elevated" />
  <div className="h-4 w-2/3 rounded bg-surface-elevated mt-2" />
</div>
```

---

## 9. File Structure

```
app/expertise/
├── layout.tsx                    # Shared layout for expertise pages
├── llm-applications/page.tsx
├── ai-agents/page.tsx
├── ai-security/page.tsx
├── ai-privacy/page.tsx
├── frontend/page.tsx
├── backend/page.tsx
├── mobile/page.tsx
├── qa/page.tsx
├── cloud/page.tsx
├── kubernetes/page.tsx
├── product-design/page.tsx
└── design-systems/page.tsx

components/expertise/
├── ExpertiseHero.tsx             # Reusable hero component
├── CapabilitiesGrid.tsx          # Feature grid component
├── TechnicalApproach.tsx         # Technical details section
├── TechStack.tsx                 # Technology logos grid
├── ExpertiseSocialProof.tsx      # Client logos + case study
├── RelatedExpertise.tsx          # Related pages section
├── ExpertiseCTA.tsx              # CTA section
└── index.ts                      # Barrel exports

lib/
└── expertise-data.ts             # All expertise page content
```

---

## 10. Page-Specific Headlines

### AI & Machine Learning

| Page | H1 Headline |
|------|-------------|
| LLM Applications | Production LLM Applications That **Actually Work** at Enterprise Scale |
| AI Agents | Autonomous AI Agents That **Execute**, Not Just Recommend |
| AI Security | Secure AI Systems From **Architecture to Production** |
| AI Privacy | Privacy-First AI Development That **Doesn't Compromise** Results |

### Product Engineering

| Page | H1 Headline |
|------|-------------|
| Frontend | Modern Frontend Experiences That **Users Love** |
| Backend | Scalable Backend Systems **Built for Growth** |
| Mobile | Native Mobile Experiences **Across Every Platform** |
| QA | Quality Engineering That **Ships Confidence** |

### Cloud & DevOps

| Page | H1 Headline |
|------|-------------|
| Cloud Architecture | Cloud Infrastructure That **Scales With You** |
| Kubernetes | Container Orchestration, **Production-Grade** |

### Design

| Page | H1 Headline |
|------|-------------|
| Product Design | Human-Centered Design For **AI-Powered Products** |
| Design Systems | Scalable Design Systems That **Accelerate Teams** |

---

## 11. Responsive Breakpoints

```css
/* Mobile first approach */
sm: 640px   /* Stack to 2-col grids */
md: 768px   /* 2-col grids, tablet nav */
lg: 1024px  /* Full layouts, desktop nav */
xl: 1280px  /* Max container widths */
2xl: 1536px /* Optional: wider containers */
```

### Critical Responsive Adjustments

- **Hero**: Stack layout below lg, reduce heading size
- **Capability Grid**: 1-col mobile, 2-col md, 3-col lg
- **Tech Stack**: 4-col mobile, 6-col md, 8-col lg
- **CTA Buttons**: Stack below sm
