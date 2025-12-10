# Industries & Use Cases Pages Design Specification

## Overview

This document defines the design system for Procedure's 4 Industry pages and 3 Use Case pages, creating enterprise-grade experiences tailored to each vertical's decision-makers.

**Industry Pages:**
- Financial Services
- Healthcare
- Education
- SaaS & Technology

**Use Case Pages:**
- AI-Powered Search
- Document Intelligence
- Conversational AI

---

## 1. Industry Page Template Structure

### Section Flow

```
1. Hero Section              - pt-32 pb-20 sm:pb-28
2. Challenges Section        - py-16 sm:py-20 bg-surface
3. Solutions Grid            - py-20 sm:py-28 bg-base
4. Case Study Showcase       - py-16 sm:py-20 bg-surface
5. Compliance & Trust        - py-16 sm:py-20 bg-base
6. CTA Section               - py-20 sm:py-28 bg-surface
```

### Hero Section Layout

```
┌─────────────────────────────────────────────────────────────┐
│  [Industry Badge]                                           │
│                                                             │
│  AI That [Industry-Specific Benefit]                        │
│                                                             │
│  Supporting description that speaks to the industry's       │
│  specific pain points and how Procedure addresses them.     │
│                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │ $47M+       │ │ <50ms       │ │ 100%        │           │
│  │ fraud saved │ │ latency     │ │ compliant   │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
│                                                             │
│  [Book a Call]  [View Case Studies]                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

```tsx
// Hero Stats Row
<div className="grid grid-cols-3 gap-6 mt-12">
  {stats.map((stat) => (
    <div className={cn(
      "p-6 rounded-xl text-center",
      "bg-surface-elevated/50 backdrop-blur-sm",
      "border border-border"
    )}>
      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
        {stat.value}
      </div>
      <div className="text-sm text-text-secondary mt-2">
        {stat.label}
      </div>
    </div>
  ))}
</div>
```

### Challenges Section

```
┌─────────────────────────────────────────────────────────────┐
│  The [Industry] AI Challenge                                │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐          │
│  │ [Icon]              │  │ [Icon]              │          │
│  │ Challenge Title     │  │ Challenge Title     │          │
│  │ Description of the  │  │ Description of the  │          │
│  │ pain point...       │  │ pain point...       │          │
│  └─────────────────────┘  └─────────────────────┘          │
│  ┌─────────────────────┐  ┌─────────────────────┐          │
│  │ [Icon]              │  │ [Icon]              │          │
│  │ Challenge Title     │  │ Challenge Title     │          │
│  │ Description...      │  │ Description...      │          │
│  └─────────────────────┘  └─────────────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

```tsx
// Challenge Card
<div className={cn(
  "p-6 rounded-2xl",
  "bg-surface-elevated/30",
  "border border-border",
  "group"
)}>
  <div className={cn(
    "w-12 h-12 rounded-xl mb-4",
    "bg-red-500/10 border border-red-500/20",
    "flex items-center justify-center"
  )}>
    <AlertIcon className="w-6 h-6 text-red-400" />
  </div>
  <h3 className="text-lg font-semibold text-text-primary mb-2">
    {challenge.title}
  </h3>
  <p className="text-text-secondary">
    {challenge.description}
  </p>
</div>
```

### Solutions Grid

```
┌─────────────────────────────────────────────────────────────┐
│  How We Solve It                                            │
│                                                             │
│  ┌───────────────────────────────────────┐  ┌────────────┐ │
│  │                                       │  │ Solution 2 │ │
│  │  Featured Solution                    │  └────────────┘ │
│  │  with larger visual                   │  ┌────────────┐ │
│  │                                       │  │ Solution 3 │ │
│  └───────────────────────────────────────┘  └────────────┘ │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │ Solution 4 │  │ Solution 5 │  │ Solution 6 │            │
│  └────────────┘  └────────────┘  └────────────┘            │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Use Case Page Template Structure

### Section Flow

```
1. Hero with Visualization   - pt-32 pb-20 sm:pb-28
2. Problem/Solution Section  - py-16 sm:py-20 bg-surface
3. Architecture Diagram      - py-20 sm:py-28 bg-base
4. Feature Breakdown         - py-16 sm:py-20 bg-surface
5. Success Metrics           - py-16 sm:py-20 bg-base
6. Related Use Cases         - py-16 sm:py-20 bg-surface
7. CTA Section               - py-20 sm:py-28 bg-base
```

### Hero with Visualization

```
Desktop:
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Use Case Badge]              ┌────────────────────────┐   │
│                                │                        │   │
│  Headline That Captures        │   Interactive          │   │
│  the Core Value                │   Visualization        │   │
│                                │   (Mockup/Diagram)     │   │
│  Supporting description        │                        │   │
│                                └────────────────────────┘   │
│  [Primary CTA]  [Secondary]                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Problem/Solution Framework

```
┌─────────────────────────────────────────────────────────────┐
│  Before Procedure              After Procedure              │
│                                                             │
│  ┌─────────────────────┐      ┌─────────────────────┐      │
│  │ ❌ Pain Point 1     │  →   │ ✓ Solution 1        │      │
│  │ ❌ Pain Point 2     │  →   │ ✓ Solution 2        │      │
│  │ ❌ Pain Point 3     │  →   │ ✓ Solution 3        │      │
│  └─────────────────────┘      └─────────────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

```tsx
// Before/After Cards
<div className="grid md:grid-cols-2 gap-8">
  {/* Before Card */}
  <div className={cn(
    "p-8 rounded-2xl",
    "bg-red-500/5 border border-red-500/20"
  )}>
    <div className="text-sm font-medium text-red-400 mb-6">
      Before Procedure
    </div>
    <ul className="space-y-4">
      {beforeItems.map((item) => (
        <li className="flex items-start gap-3">
          <XIcon className="w-5 h-5 text-red-400 mt-0.5" />
          <span className="text-text-secondary">{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* After Card */}
  <div className={cn(
    "p-8 rounded-2xl",
    "bg-accent-teal/5 border border-accent-teal/20"
  )}>
    <div className="text-sm font-medium text-accent-teal-light mb-6">
      After Procedure
    </div>
    <ul className="space-y-4">
      {afterItems.map((item) => (
        <li className="flex items-start gap-3">
          <CheckIcon className="w-5 h-5 text-accent-teal mt-0.5" />
          <span className="text-text-primary">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
```

### Architecture Diagram Section

```tsx
// Step-by-step architecture flow
<div className="relative">
  {/* Connecting line */}
  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-teal/20 via-accent-teal/40 to-accent-blue/20 -translate-y-1/2 hidden lg:block" />

  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    {steps.map((step, index) => (
      <motion.div
        key={step.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={cn(
          "relative p-6 rounded-2xl",
          "bg-surface-elevated border border-border",
          "text-center"
        )}
      >
        {/* Step number */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent-teal text-base text-xs font-bold flex items-center justify-center">
          {index + 1}
        </div>

        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent-teal/10 flex items-center justify-center">
          <step.icon className="w-6 h-6 text-accent-teal-light" />
        </div>

        <h4 className="font-semibold text-text-primary mb-2">
          {step.title}
        </h4>
        <p className="text-sm text-text-secondary">
          {step.description}
        </p>
      </motion.div>
    ))}
  </div>
</div>
```

---

## 3. Visual Differentiation by Industry

### Financial Services

| Element | Specification |
|---------|---------------|
| **Primary Color** | Teal with blue accents |
| **Icon Theme** | Charts, shields, speed, locks |
| **Visual Elements** | Trading dashboard mockup, real-time data flows |
| **Compliance Badges** | SOC 2, PCI-DSS, FINRA/SEC |
| **Background Accent** | Subtle grid pattern with data points |

```tsx
// Financial Services color accents
const financialTheme = {
  badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  glow: "from-teal-500/10 to-blue-500/10",
  iconBg: "from-teal-500/20 to-blue-500/20"
}
```

### Healthcare

| Element | Specification |
|---------|---------------|
| **Primary Color** | Teal with softer blue |
| **Icon Theme** | Medical cross, heart, clipboard, shield |
| **Visual Elements** | EHR interface mockup, clinical workflow diagram |
| **Compliance Badges** | HIPAA, HITRUST, HL7 FHIR, FDA |
| **Background Accent** | Clean, clinical aesthetic with subtle curves |

```tsx
// Healthcare trust signals
<div className="flex items-center gap-4 mt-8">
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
    <ShieldCheckIcon className="w-4 h-4 text-green-400" />
    <span className="text-sm text-green-400">HIPAA Compliant</span>
  </div>
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
    <ShieldCheckIcon className="w-4 h-4 text-blue-400" />
    <span className="text-sm text-blue-400">HITRUST Certified</span>
  </div>
</div>
```

### Education

| Element | Specification |
|---------|---------------|
| **Primary Color** | Blue with warm accents |
| **Icon Theme** | Books, graduation cap, lightbulb, users |
| **Visual Elements** | Learning platform mockup, adaptive path diagram |
| **Compliance Badges** | FERPA, COPPA, WCAG 2.1 AA |
| **Background Accent** | Friendly, approachable with subtle patterns |

### SaaS & Technology

| Element | Specification |
|---------|---------------|
| **Primary Color** | Blue to teal gradient |
| **Icon Theme** | Code brackets, API, plug, rocket |
| **Visual Elements** | API documentation mockup, integration diagram |
| **Compliance Badges** | SOC 2, GDPR, API Security |
| **Background Accent** | Technical grid with code-like elements |

---

## 4. Use Case Visual Elements

### AI-Powered Search

```
┌─────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────┐   │
│  │  🔍  What are the compliance requirements for...     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Understanding: "compliance requirements" + context         │
│                           ↓                                 │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ ● ● ● ● ● ●    Vector Space Visualization    ● ● ● ● │ │
│  │     ●   ●           (relevant docs cluster)      ●   │ │
│  │  ●    ●  ●                                    ●  ●   │ │
│  └───────────────────────────────────────────────────────┘ │
│                           ↓                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Result 1     │  │ Result 2     │  │ Result 3     │      │
│  │ 98% match    │  │ 94% match    │  │ 91% match    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Document Intelligence

```
┌─────────────────────────────────────────────────────────────┐
│  ┌─────────────┐                                            │
│  │ ═══════════ │    ──────────→    ┌──────────────────┐    │
│  │ ═══════════ │    Document       │ Extracted Data   │    │
│  │ ═══════════ │    Processing     │                  │    │
│  │ ═══════════ │                   │ Name: John Doe   │    │
│  │ [signature] │                   │ Date: 2024-01-15 │    │
│  └─────────────┘                   │ Amount: $50,000  │    │
│                                    │ Status: Approved │    │
│                                    └──────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Conversational AI

```
┌─────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  👤 "I need to update my shipping address"          │   │
│  │                                                     │   │
│  │      🤖 "I can help with that. I see you have      │   │
│  │         order #12345 in transit. Would you like    │   │
│  │         to update the address for this order?"     │   │
│  │                                                     │   │
│  │  👤 "Yes, please change it to 123 Main St"          │   │
│  │                                                     │   │
│  │      🤖 "Done! I've updated the shipping address   │   │
│  │         and notified the carrier. Is there         │   │
│  │         anything else I can help with?"            │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ Context Panel:                                        │ │
│  │ • Customer: Premium tier                              │ │
│  │ • Recent orders: 3                                    │ │
│  │ • System access: Shipping, CRM                        │ │
│  └───────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Success Metrics Display

```tsx
// Large metric cards with benchmarks
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {metrics.map((metric) => (
    <div className={cn(
      "p-8 rounded-2xl text-center",
      "bg-gradient-to-br from-accent-teal/10 to-accent-blue/10",
      "border border-accent-teal/20"
    )}>
      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
        {metric.value}
      </div>
      <div className="text-text-primary font-medium mt-3">
        {metric.label}
      </div>
      <div className="text-sm text-text-muted mt-1">
        {metric.benchmark}
      </div>
    </div>
  ))}
</div>
```

Example metrics for AI Search:
- **34%** higher conversion / vs. keyword search
- **2.3x** search-to-purchase / industry benchmark: 1.2x
- **<100ms** query latency / p99 performance
- **89%** user satisfaction / from search experience

---

## 6. Compliance & Trust Section

```tsx
// Industry-specific compliance badges
<div className="flex flex-wrap justify-center gap-6">
  {complianceBadges.map((badge) => (
    <div className={cn(
      "flex items-center gap-3 px-6 py-4 rounded-xl",
      "bg-surface-elevated border border-border"
    )}>
      <img
        src={badge.logo}
        alt={badge.name}
        className="h-8 w-auto"
      />
      <div>
        <div className="font-medium text-text-primary text-sm">
          {badge.name}
        </div>
        <div className="text-xs text-text-muted">
          {badge.description}
        </div>
      </div>
    </div>
  ))}
</div>
```

---

## 7. Interactive Elements

### Industry Selector Navigation

```tsx
// Tab navigation between industry pages
<div className="flex flex-wrap justify-center gap-2 mb-12">
  {industries.map((industry) => (
    <Link
      href={industry.href}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all",
        isActive
          ? "bg-accent-teal text-base"
          : "bg-surface-elevated text-text-secondary hover:text-text-primary"
      )}
    >
      {industry.label}
    </Link>
  ))}
</div>
```

### ROI Calculator Placeholder

```tsx
// Interactive estimation tool
<div className={cn(
  "p-8 rounded-2xl",
  "bg-surface-elevated border border-border"
)}>
  <h3 className="text-xl font-semibold text-text-primary mb-6">
    Estimate Your ROI
  </h3>

  <div className="space-y-6">
    {/* Slider input */}
    <div>
      <label className="text-sm text-text-secondary mb-2 block">
        Monthly document volume
      </label>
      <input
        type="range"
        min="1000"
        max="100000"
        className="w-full accent-accent-teal"
      />
      <div className="flex justify-between text-xs text-text-muted mt-1">
        <span>1K</span>
        <span>100K</span>
      </div>
    </div>

    {/* Result display */}
    <div className="p-4 rounded-xl bg-accent-teal/10 border border-accent-teal/20">
      <div className="text-sm text-text-secondary">Estimated annual savings</div>
      <div className="text-3xl font-bold text-accent-teal-light">
        $240,000
      </div>
    </div>
  </div>
</div>
```

---

## 8. Mobile Considerations

### Complex Diagrams

```tsx
// Mobile-friendly diagram adaptation
<div className="hidden lg:block">
  {/* Full horizontal architecture diagram */}
  <ArchitectureDiagram steps={steps} />
</div>

<div className="lg:hidden">
  {/* Vertical step list for mobile */}
  <div className="space-y-4">
    {steps.map((step, index) => (
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-accent-teal flex items-center justify-center shrink-0">
          {index + 1}
        </div>
        <div>
          <h4 className="font-medium text-text-primary">{step.title}</h4>
          <p className="text-sm text-text-secondary">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
```

### Touch-Friendly Interactions

- **Minimum touch target**: 44x44px
- **Swipeable carousels** for related content
- **Tap-to-expand** for complex cards
- **Bottom sheet modals** instead of dropdowns

---

## 9. Animation Strategy

### Diagram Build-Up Animations

```tsx
// Progressive path drawing for architecture diagrams
const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.3 }
    }
  }
}

// Sequential node reveals
const nodeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (index: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2 + index * 0.15,
      type: "spring",
      stiffness: 200
    }
  })
}
```

### Data Flow Visualizations

```tsx
// Animated data particles (for AI Search visualization)
<motion.div
  className="absolute w-2 h-2 rounded-full bg-accent-teal"
  animate={{
    x: [0, 100, 200],
    y: [0, -20, 0],
    opacity: [0, 1, 0]
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatDelay: 0.5
  }}
/>
```

### Scroll-Triggered Reveals

```tsx
// Staggered section reveals
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {children}
</motion.section>
```

---

## 10. File Structure

```
app/
├── industries/
│   ├── layout.tsx                    # Shared industry layout
│   ├── financial-services/page.tsx
│   ├── healthcare/page.tsx
│   ├── education/page.tsx
│   └── saas/page.tsx
├── use-cases/
│   ├── layout.tsx                    # Shared use-case layout
│   ├── ai-search/page.tsx
│   ├── document-ai/page.tsx
│   └── conversational-ai/page.tsx

components/
├── industries/
│   ├── IndustryHero.tsx
│   ├── ChallengesSection.tsx
│   ├── SolutionsGrid.tsx
│   ├── ComplianceBadges.tsx
│   ├── IndustrySelector.tsx
│   └── index.ts
├── use-cases/
│   ├── UseCaseHero.tsx
│   ├── ProblemSolutionSection.tsx
│   ├── ArchitectureDiagram.tsx
│   ├── FeatureBreakdown.tsx
│   ├── MetricsDisplay.tsx
│   ├── RelatedUseCases.tsx
│   └── index.ts

lib/
├── industries-data.ts               # All industry page content
└── use-cases-data.ts                # All use case page content
```

---

## 11. TypeScript Interfaces

```typescript
// Industry Page Data
interface IndustryData {
  slug: string;
  badge: string;
  headline: string;
  headlineAccent: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  challenges: Array<{
    icon: ComponentType;
    title: string;
    description: string;
  }>;
  solutions: Array<{
    icon: ComponentType;
    title: string;
    description: string;
    featured?: boolean;
  }>;
  compliance: Array<{
    logo: string;
    name: string;
    description: string;
  }>;
  caseStudy?: {
    client: string;
    industry: string;
    description: string;
    metrics: string[];
    href: string;
  };
}

// Use Case Page Data
interface UseCaseData {
  slug: string;
  badge: string;
  headline: string;
  headlineAccent: string;
  description: string;
  visualization: ComponentType;
  before: string[];
  after: string[];
  architecture: Array<{
    icon: ComponentType;
    title: string;
    description: string;
  }>;
  features: Array<{
    icon: ComponentType;
    title: string;
    description: string;
    size?: 'normal' | 'large';
  }>;
  metrics: Array<{
    value: string;
    label: string;
    benchmark?: string;
  }>;
  relatedUseCases: string[];
}
```

---

## 12. Industry-Specific Headlines

### Industries

| Page | H1 Headline |
|------|-------------|
| Financial Services | AI That Moves at the **Speed of Markets** |
| Healthcare | AI That **Puts Patients First** |
| Education | AI That **Transforms How We Learn** |
| SaaS & Technology | Ship AI Features Your **Customers Actually Want** |

### Use Cases

| Page | H1 Headline |
|------|-------------|
| AI-Powered Search | Search That **Understands What Users Mean** |
| Document Intelligence | Turn Documents Into **Actionable Data** |
| Conversational AI | Conversations That **Actually Solve Problems** |

---

## 13. Reference Inspiration

### By Industry

| Industry | Reference Sites |
|----------|-----------------|
| **Financial Services** | Stripe, Plaid, Brex, Modern Treasury |
| **Healthcare** | Flatiron Health, Oscar Health, Tempus, Veeva |
| **Education** | Coursera, Duolingo, Khan Academy, Quizlet |
| **SaaS & Technology** | Vercel, Linear, Notion, Figma |

### Key Patterns to Adopt

- **Stripe**: Clean data visualizations, subtle animations, premium feel
- **Plaid**: Technical credibility with approachable design
- **Vercel**: Dark theme elegance, developer-focused aesthetics
- **Linear**: Smooth animations, attention to micro-interactions
