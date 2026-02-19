"use client";

import { m } from "framer-motion";
import { type ReactNode } from "react";

interface FrameworkData {
  name: string;
  bestFor: string;
  why: string;
  useWhenLabel?: string;
  useWhen: string;
}

interface ComparisonData {
  sectionId: string;
  title: string;
  highlight: string;
  subtitle: string;
  gridCols: string;
  frameworks: FrameworkData[];
  bottomNote: ReactNode;
}

const comparisonDataMap: Record<string, ComparisonData> = {
  react: {
    sectionId: "react-vs-nextjs",
    title: "React vs Next.js:",
    highlight: "When You Need What",
    subtitle: "We build with both. Here's how we decide.",
    gridCols: "md:grid-cols-2",
    frameworks: [
      {
        name: "React (Vite + React Router)",
        bestFor:
          "Internal tools, dashboards, authenticated apps, SPAs",
        why: "Simpler mental model, faster development for apps behind a login. No server-side complexity. Vite builds in seconds, hot module replacement is instant.",
        useWhen:
          "Your app doesn't need SEO, users always log in first, and you want a clean client-side architecture without SSR overhead.",
      },
      {
        name: "Next.js (React + Framework)",
        bestFor:
          "Marketing sites, e-commerce, SEO-critical apps, full-stack",
        why: "Server Components, static generation, API routes, edge functions. SEO is handled. Performance is handled. The framework makes decisions so your team doesn't have to.",
        useWhen:
          "Search traffic matters, you need a public-facing site, or you want one framework handling both frontend and backend.",
      },
    ],
    bottomNote: (
      <>
        Many projects use both. A public marketing site on Next.js, an
        authenticated dashboard on React + Vite, sharing the same component
        library and design system. We architect for this pattern regularly.
      </>
    ),
  },
  python: {
    sectionId: "frameworks",
    title: "Django vs FastAPI vs Flask:",
    highlight: "Which One?",
    subtitle: "We use all three. Here's how we decide.",
    gridCols: "md:grid-cols-3",
    frameworks: [
      {
        name: "Django",
        bestFor: "Full-stack web apps, admin-heavy platforms, SaaS",
        why: "ORM, auth, admin panel, security middleware built in. Batteries-included means faster development for complex apps. 20 years of battle-tested stability.",
        useWhen:
          "Your app needs user management, complex data models, and an admin interface. Most enterprise Python projects start here.",
      },
      {
        name: "FastAPI",
        bestFor: "High-performance APIs, AI/ML serving, microservices",
        why: "Native async, automatic OpenAPI docs, Pydantic validation, 4-5x faster than Django for API workloads. The default choice for AI backends in 2026.",
        useWhen:
          "You're building APIs that serve ML models, need high concurrency, or want auto-generated documentation.",
      },
      {
        name: "Flask",
        bestFor:
          "Lightweight services, serverless functions, prototypes",
        why: "Minimal footprint, fast startup, zero opinions about architecture. Perfect when you need just enough framework to get out of the way.",
        useWhen:
          "The service is small and focused, you're deploying to Lambda/serverless, or you need maximum control over the stack.",
      },
    ],
    bottomNote: (
      <>
        Most projects aren&apos;t purely one framework. We&apos;ve built systems
        where Django handles the main app, FastAPI serves the ML inference
        endpoints, and Flask runs lightweight webhook handlers. The framework
        follows the workload.
      </>
    ),
  },
  flutter: {
    sectionId: "flutter-vs-rn",
    title: "Flutter vs React Native:",
    highlight: "When You Need What",
    subtitle: "We build with both. Here's how we decide.",
    gridCols: "md:grid-cols-2",
    frameworks: [
      {
        name: "Flutter (Dart)",
        bestFor:
          "Custom UI, animation-heavy apps, multi-platform (mobile + web + desktop)",
        why: "Flutter renders every pixel itself via Impeller. Complete design control, 60fps animations, and one codebase targeting six platforms. Ideal when your app needs to look and feel exactly as designed.",
        useWhen:
          "Visual quality and brand consistency matter more than ecosystem breadth. You need web and desktop alongside mobile. Your team is open to learning Dart.",
      },
      {
        name: "React Native (JavaScript)",
        bestFor:
          "Teams with JavaScript expertise, code sharing with React web apps",
        why: "JavaScript developers outnumber Dart developers roughly 20:1. If your team knows React, React Native lets you share business logic, types, and components between web and mobile.",
        useWhen:
          "Hiring speed matters, your web app is already React, or you need the broadest possible talent pool.",
      },
    ],
    bottomNote: (
      <>
        Some projects use both. A Flutter mobile app for the consumer
        experience, a React Native companion for a partner-facing tool sharing
        the same backend. We architect for this when it makes sense.
      </>
    ),
  },
  "react-native": {
    sectionId: "rn-vs-flutter",
    title: "React Native vs Flutter:",
    highlight: "When You Need What",
    subtitle: "We build with both. Here's how we decide.",
    gridCols: "md:grid-cols-2",
    frameworks: [
      {
        name: "React Native (JavaScript/TypeScript)",
        bestFor:
          "Teams with existing JavaScript/React expertise, code sharing with a React web app, brownfield integration into existing native apps",
        why: "React Native uses the same component model, hooks, and state management as React. Your web developers can contribute to mobile without learning a new language. JavaScript developers outnumber Dart developers roughly 20:1, making hiring easier.",
        useWhenLabel: "Key context",
        useWhen:
          "React Native 0.83 ships with the New Architecture by default. The old performance criticisms were about the JavaScript bridge, which no longer exists. With Fabric, TurboModules, and Hermes, React Native now achieves near-native performance at 60fps on most devices.",
      },
      {
        name: "Flutter (Dart)",
        bestFor:
          "Pixel-perfect custom UI that looks identical on both platforms, heavy animation or graphically intensive apps, mobile + web + desktop from one codebase",
        why: "Flutter has surpassed React Native in GitHub stars (170K vs 121K) and shows 46% cross-platform market share vs React Native\u2019s 35%. But market share doesn\u2019t equal \u2018better\u2019 \u2014 it depends on your team and project.",
        useWhenLabel: "Key context",
        useWhen:
          "Teams starting fresh with no existing JavaScript investment, apps targeting mobile + web + desktop from one codebase (Flutter\u2019s widget engine renders everywhere), or when pixel-perfect custom UI is the top priority.",
      },
    ],
    bottomNote: (
      <>
        Many companies use both. React Native for business apps where
        platform-native feel matters, Flutter for consumer apps where custom UI
        is the priority. We build with both — see our{" "}
        <a
          href="/technologies/flutter"
          className="text-accent hover:text-accent-light transition-colors"
        >
          Flutter services
        </a>
        .
      </>
    ),
  },
};

export default function FrameworkComparison({ slug }: { slug: string }) {
  const data = comparisonDataMap[slug];
  if (!data) return null;

  const { sectionId, title, highlight, subtitle, gridCols, frameworks, bottomNote } = data;

  return (
    <section id={sectionId} className="relative py-16 sm:py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 font-heading">
            {title}{" "}
            <span className="text-highlight">{highlight}</span>
          </h2>
          <p className="text-text-secondary">{subtitle}</p>
        </m.div>

        <div className={`grid grid-cols-1 ${gridCols} gap-6 mb-10`}>
          {frameworks.map((fw, i) => (
            <m.div
              key={fw.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {fw.name}
              </h3>
              <div className="mb-3">
                <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
                  Best for
                </p>
                <p className="text-sm text-text-secondary">{fw.bestFor}</p>
              </div>
              <div className="mb-3">
                <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
                  Why
                </p>
                <p className="text-sm text-text-secondary">{fw.why}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
                  {fw.useWhenLabel || "We use it when"}
                </p>
                <p className="text-sm text-text-secondary">{fw.useWhen}</p>
              </div>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 max-w-3xl mx-auto"
        >
          <p className="text-sm text-text-secondary italic">{bottomNote}</p>
        </m.div>
      </div>
    </section>
  );
}
