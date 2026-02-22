"use client";

import { m } from "framer-motion";
import { type ReactNode } from "react";

interface CardRow {
  label: string;
  description: string;
}

interface TechDecisionData {
  sectionId: string;
  title: string;
  highlight: string;
  subtitle: string;
  cards: CardRow[];
  bottomNote: ReactNode;
  ctaHref?: string;
  ctaText?: string;
  ctaSubtext?: string;
}

const dataMap: Record<string, TechDecisionData> = {
  nodejs: {
    sectionId: "fit",
    title: "Is Node.js Right for Your",
    highlight: "Backend?",
    subtitle: "The right tool for the job, not the trendy one.",
    cards: [
      {
        label: "REST APIs and GraphQL services",
        description:
          "Non-blocking I/O handles thousands of concurrent API calls without choking under load",
      },
      {
        label: "Real-time applications (chat, notifications, live dashboards)",
        description:
          "Event-driven architecture and native WebSocket support built for persistent connections",
      },
      {
        label: "Microservices architecture",
        description:
          "Lightweight runtime with fast cold starts and a small memory footprint per service",
      },
      {
        label: "Full-stack JavaScript teams",
        description:
          "Same language across frontend and backend. Shared types with TypeScript. Fewer context switches, faster cycles.",
      },
    ],
    bottomNote: (
      <p className="text-sm text-text-muted max-w-3xl mx-auto leading-relaxed">
        Not always the right call for CPU-intensive processing like video
        encoding or ML model training, or for teams deeply invested in Python or
        Java with no JavaScript experience. We&apos;ll tell you upfront if
        something else fits better.
      </p>
    ),
    ctaHref: "#book-call",
    ctaText: "Book a free architecture call",
    ctaSubtext:
      "We\u2019ve recommended Python and Go over Node.js when the workload demanded it.",
  },
  react: {
    sectionId: "decision",
    title: "Is React Right for Your",
    highlight: "Project?",
    subtitle: "The most popular frontend library isn\u2019t always the right one.",
    cards: [
      {
        label: "Dynamic, interaction-heavy UIs (dashboards, editors, tools)",
        description:
          "React\u2019s component model and virtual DOM are built for UIs that change constantly. State management is mature, and the ecosystem has a solution for almost any interaction pattern you need.",
      },
      {
        label: "You need web and mobile from one team",
        description:
          "React + React Native lets you share business logic, types, and sometimes entire components across web, iOS, and Android. No other ecosystem offers this level of code sharing.",
      },
      {
        label: "Your team knows JavaScript/TypeScript",
        description:
          "React has the largest talent pool in frontend. 44.7% of developers use it (Stack Overflow 2025). Hiring is easier, onboarding is faster, and the community support is unmatched.",
      },
      {
        label: "SPAs where SEO isn\u2019t the primary concern",
        description:
          "Internal tools, authenticated dashboards, B2B platforms where users log in first. React with Vite gives you fast builds and a simple mental model without SSR complexity.",
      },
    ],
    bottomNote: (
      <p className="text-sm text-text-muted max-w-3xl mx-auto leading-relaxed">
        If SEO and page speed are your top priority,{" "}
        <a
          href="/technologies/nextjs/"
          className="text-accent hover:text-accent-light"
        >
          Next.js
        </a>{" "}
        gives you server-side rendering, static generation, and edge functions
        built on React. For structured enterprise apps with strict conventions,{" "}
        <a
          href="/technologies/angular/"
          className="text-accent hover:text-accent-light"
        >
          Angular
        </a>{" "}
        provides routing, forms, and dependency injection out of the box. Need a
        lightweight backend to pair with React?{" "}
        <a
          href="/technologies/nodejs/"
          className="text-accent hover:text-accent-light"
        >
          Node.js
        </a>{" "}
        or{" "}
        <a
          href="/technologies/python/"
          className="text-accent hover:text-accent-light"
        >
          Python
        </a>{" "}
        depending on your workload. Not sure? That&apos;s what our{" "}
        <a
          href="#book-call"
          className="text-accent hover:text-accent-light"
        >
          architecture consultation
        </a>{" "}
        is for.
      </p>
    ),
  },
  python: {
    sectionId: "decision",
    title: "Is Python Right for Your",
    highlight: "Backend?",
    subtitle: "The right tool for the job. Not the trendy one.",
    cards: [
      {
        label: "AI/ML features are core to your product",
        description:
          "Python owns the AI ecosystem. PyTorch, TensorFlow, scikit-learn, LangChain - the models, libraries, and talent pool all live here. No other language comes close for ML.",
      },
      {
        label: "Data-heavy applications (analytics, ETL, reporting)",
        description:
          "Pandas, NumPy, and Airflow make data manipulation fast. Python handles everything from quick scripts to petabyte-scale processing pipelines.",
      },
      {
        label: "APIs serving high concurrency (with FastAPI)",
        description:
          "FastAPI handles 20,000+ requests/second on Uvicorn. Native async, automatic OpenAPI docs, Pydantic validation. Built for the workloads Django wasn\u2019t designed for.",
      },
      {
        label: "Full-stack web apps with complex business logic",
        description:
          "Django gives you ORM, auth, admin panel, and security middleware out of the box. Instagram, Spotify, and Dropbox run on it. Proven at scale.",
      },
    ],
    bottomNote: (
      <p className="text-sm text-text-muted max-w-3xl mx-auto leading-relaxed">
        Need raw API throughput without the Python ecosystem?{" "}
        <a
          href="/technologies/nodejs/"
          className="text-accent hover:text-accent-light"
        >
          Node.js
        </a>{" "}
        with NestJS or Fastify handles I/O-bound workloads with a lighter
        runtime. Building a frontend-heavy application where the backend is
        thin?{" "}
        <a
          href="/technologies/nextjs/"
          className="text-accent hover:text-accent-light"
        >
          Next.js
        </a>{" "}
        API routes might be all you need. CPU-intensive work like video encoding
        or real-time game servers? Go or Rust will outperform Python. Not sure?
        That&apos;s what our{" "}
        <a
          href="#book-call"
          className="text-accent hover:text-accent-light"
        >
          architecture consultation
        </a>{" "}
        is for.
      </p>
    ),
  },
  angular: {
    sectionId: "decision",
    title: "Is Angular Right for Your",
    highlight: "Project?",
    subtitle: "The right framework for the job. Not the trending one.",
    cards: [
      {
        label: "Complex enterprise apps with large teams (10+ devs)",
        description:
          "Angular\u2019s opinionated architecture, dependency injection, and CLI enforce consistency. Everyone follows the same patterns. Less time debating, more time building.",
      },
      {
        label: "Long-lived applications (5+ year lifespan)",
        description:
          "Google maintains Angular with 18-month LTS cycles and predictable 6-month releases. TypeScript catches errors at compile time. Codebases stay maintainable at scale.",
      },
      {
        label: "Data-heavy dashboards and admin panels",
        description:
          "Built-in forms, validation, HTTP client, and RxJS for real-time data streams. No need to stitch together 8 different libraries.",
      },
      {
        label:
          "Applications requiring strict security and compliance",
        description:
          "Angular\u2019s built-in XSS protection, CSP support, and structured architecture make security audits straightforward. Banks and government agencies choose Angular for a reason.",
      },
    ],
    bottomNote: (
      <p className="text-sm text-text-muted max-w-3xl mx-auto leading-relaxed">
        Building a content-heavy marketing site?{" "}
        <a
          href="/technologies/nextjs"
          className="text-accent hover:text-accent-light transition-colors"
        >
          Next.js
        </a>{" "}
        is likely a better fit. Need a lightweight, flexible UI for a smaller
        team? React with Vite gives you more freedom with less structure.
        Internal tool with simple CRUD? React or even a low-code solution might
        be faster. Not sure? That&apos;s what our{" "}
        <a
          href="#book-call"
          className="text-accent hover:text-accent-light transition-colors"
        >
          architecture consultation
        </a>{" "}
        is for - we&apos;ve recommended against Angular when it wasn&apos;t the
        right call.
      </p>
    ),
  },
  flutter: {
    sectionId: "fit",
    title: "When Flutter",
    highlight: "Makes Sense",
    subtitle: "The right framework for the job, not the trendy one.",
    cards: [
      {
        label: "Cross-platform mobile apps (iOS + Android)",
        description:
          "Flutter\u2019s Impeller rendering engine compiles to native ARM code. No JavaScript bridge, no WebView. Your app renders at 60fps with pixel-perfect consistency across platforms.",
      },
      {
        label: "Multi-platform apps (mobile + web + desktop)",
        description:
          "One codebase targeting six platforms. Flutter renders everything itself rather than delegating to platform UI components, so your app looks identical everywhere.",
      },
      {
        label: "Custom UI and animation-heavy experiences",
        description:
          "Flutter\u2019s own rendering engine (Impeller, built on Vulkan/Metal) means you\u2019re not limited by platform UI components. If you can design it, Flutter can render it at 60fps.",
      },
      {
        label: "MVP validation on both platforms fast",
        description:
          "Hot Reload lets developers see changes instantly without restarting the app. Validate on iOS and Android in 8-12 weeks, not 16-24 with two native teams.",
      },
    ],
    bottomNote: (
      <p className="text-sm text-text-muted max-w-3xl mx-auto leading-relaxed">
        Flutter isn&apos;t the right call for every project. Apps that need deep
        platform-native UI (following iOS HIG or Material Design exactly), or
        teams with existing React/JavaScript expertise where React Native would
        reuse skills better. We&apos;ll tell you upfront if something else fits.
      </p>
    ),
    ctaHref: "#book-call",
    ctaText: "Book a free architecture call",
  },
  "react-native": {
    sectionId: "fit",
    title: "When React Native",
    highlight: "Makes Sense",
    subtitle: "The right framework for the job, not the trending one.",
    cards: [
      {
        label: "Need iOS + Android from one team",
        description:
          "Single codebase, shared logic, consistent UX. Ship both platforms simultaneously instead of maintaining two separate apps and two separate teams.",
      },
      {
        label: "Your team already knows React",
        description:
          "React Native uses the same component model, hooks, and state management. Your web developers can contribute to mobile without learning Swift or Kotlin.",
      },
      {
        label: "Speed to market matters",
        description:
          "Expo\u2019s managed workflow, over-the-air updates, and hot reloading mean faster iteration. MVP in 8-12 weeks, not 6 months.",
      },
      {
        label: "Budget-conscious but quality-focused",
        description:
          "Cross-platform cuts 30-40% vs. native iOS + native Android. You\u2019re not sacrificing quality - Instagram, Shopify, Discord, and Coinbase all run React Native in production.",
      },
    ],
    bottomNote: (
      <p className="text-sm text-text-muted max-w-3xl mx-auto leading-relaxed">
        If your app is primarily 3D/gaming (Unity or native), needs extreme
        low-level hardware access (Bluetooth LE edge cases, heavy AR), or your
        team is already deep in Dart, you may want to explore{" "}
        <a
          href="/technologies/flutter"
          className="text-accent hover:text-accent-light transition-colors"
        >
          Flutter
        </a>{" "}
        or go fully native. For SEO-critical marketing sites,{" "}
        <a
          href="/technologies/nextjs"
          className="text-accent hover:text-accent-light transition-colors"
        >
          Next.js
        </a>{" "}
        is the better call. For complex backend needs alongside your mobile app,
        see our{" "}
        <a
          href="/technologies/nodejs"
          className="text-accent hover:text-accent-light transition-colors"
        >
          Node.js
        </a>{" "}
        and{" "}
        <a
          href="/technologies/python"
          className="text-accent hover:text-accent-light transition-colors"
        >
          Python
        </a>{" "}
        services.
      </p>
    ),
  },
};

export default function TechDecisionTable({ slug }: { slug: string }) {
  const data = dataMap[slug];
  if (!data) return null;

  return (
    <section id={data.sectionId} className="relative py-16 sm:py-24 bg-base">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
            {data.title}{" "}
            <span className="text-highlight">{data.highlight}</span>
          </h2>
          <p className="text-text-secondary">{data.subtitle}</p>
        </m.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {data.cards.map((row, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6"
            >
              <p className="font-semibold text-text-primary mb-2">
                {row.label}
              </p>
              <p className="text-sm text-text-secondary">{row.description}</p>
            </m.div>
          ))}
        </div>

        {/* Bottom note */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          {data.bottomNote}

          {data.ctaHref && data.ctaText && (
            <div className="mt-8">
              <a
                href={data.ctaHref}
                className="inline-flex items-center gap-2 bg-cta text-cta-text px-6 py-3 rounded-lg font-medium hover:brightness-110 transition-all"
              >
                {data.ctaText}
              </a>
              {data.ctaSubtext && (
                <p className="text-sm text-text-muted mt-3">
                  {data.ctaSubtext}
                </p>
              )}
            </div>
          )}
        </m.div>
      </div>
    </section>
  );
}
