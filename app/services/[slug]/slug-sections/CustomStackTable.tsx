"use client";

import { m } from "framer-motion";

interface ThreeColumnRow {
  layer: string;
  tools: string;
  why: string;
}

interface TwoColumnRow {
  layer: string;
  tools: string;
}

interface StripedRow {
  col1: string;
  col2: string;
}

interface ThreeColumnData {
  type: "three-column";
  title: string;
  highlight: string;
  afterHighlight: string;
  subtitle: string;
  whyHeader: string;
  headingExtraClass?: string;
  rows: ThreeColumnRow[];
  bottomNote?: string;
}

interface TwoColumnData {
  type: "two-column";
  title: string;
  highlight: string;
  afterHighlight: string;
  subtitle: string;
  rows: TwoColumnRow[];
  bottomNote?: string;
}

interface StripedData {
  type: "striped";
  title: string;
  highlight: string;
  col1Header: string;
  col2Header: string;
  rows: StripedRow[];
}

type StackData = ThreeColumnData | TwoColumnData | StripedData;

const dataMap: Record<string, StackData> = {
  nodejs: {
    type: "three-column",
    title: "Our",
    highlight: "Node.js",
    afterHighlight: "Stack",
    subtitle:
      "Every tool earns its place. Here\u2019s what we ship with and why.",
    whyHeader: "Why",
    rows: [
      {
        layer: "Runtime",
        tools: "Node.js 22 LTS",
        why: "Long-term support, native ESM, meaningful performance gains over older versions",
      },
      {
        layer: "Framework",
        tools: "NestJS, Fastify, Express",
        why: "NestJS for enterprise patterns, Fastify for raw throughput, Express for ecosystem breadth",
      },
      {
        layer: "Language",
        tools: "TypeScript (strict mode)",
        why: "Type safety across the full stack. Non-negotiable on our projects.",
      },
      {
        layer: "ORM / Query",
        tools: "Prisma, Drizzle ORM",
        why: "Prisma for type-safe queries and migrations. Drizzle when targeting edge or serverless runtimes.",
      },
      {
        layer: "Database",
        tools: "PostgreSQL, MongoDB, Redis",
        why: "Postgres for relational data, MongoDB for document workloads, Redis for caching and job queues",
      },
      {
        layer: "Message Queue",
        tools: "BullMQ, AWS SQS, RabbitMQ",
        why: "BullMQ for straightforward background jobs. SQS or RabbitMQ for service-to-service communication.",
      },
      {
        layer: "API Style",
        tools: "REST, GraphQL (Apollo), gRPC",
        why: "REST for public-facing APIs, GraphQL for frontend flexibility, gRPC for low-latency internal calls",
      },
      {
        layer: "Auth",
        tools: "Passport.js, JWT, OAuth2",
        why: "Strategy-based auth with Passport, stateless tokens via JWT, third-party login with OAuth2",
      },
      {
        layer: "Testing",
        tools: "Jest, Vitest, Supertest",
        why: "Unit and integration tests alongside every feature. Supertest for API endpoint validation.",
      },
      {
        layer: "Hosting",
        tools: "AWS (ECS, Lambda), GCP, Vercel",
        why: "Containers when you need control, serverless when cost efficiency matters",
      },
      {
        layer: "CI/CD",
        tools: "GitHub Actions, Docker",
        why: "Automated test runs, container builds, and zero-downtime deployments on every merge",
      },
      {
        layer: "Monitoring",
        tools: "Datadog, Sentry, Prometheus + Grafana",
        why: "APM for performance bottlenecks, Sentry for error tracking, Grafana for custom dashboards",
      },
    ],
    bottomNote:
      "We pick the framework based on your constraints. NestJS for enterprise structure, Fastify for raw throughput, Express for ecosystem breadth. There is no single right answer.",
  },
  react: {
    type: "three-column",
    title: "Our",
    highlight: "React",
    afterHighlight: "Stack",
    subtitle:
      "Every tool earns its place. Here\u2019s what we ship with and why.",
    whyHeader: "Why",
    rows: [
      {
        layer: "Framework",
        tools: "React 19, Next.js 15 (when SSR needed)",
        why: "React 19 for SPAs and dashboards, Next.js when SEO or server rendering matters",
      },
      {
        layer: "Language",
        tools: "TypeScript (strict mode)",
        why: "Non-negotiable. Type safety across the full stack catches bugs before users do.",
      },
      {
        layer: "Build",
        tools: "Vite, Turbopack",
        why: "Vite for React SPAs (sub-second HMR), Turbopack for Next.js projects",
      },
      {
        layer: "Routing",
        tools: "React Router 7, Next.js App Router",
        why: "React Router for SPAs, App Router for server-rendered apps",
      },
      {
        layer: "State",
        tools: "Zustand, Redux Toolkit, React Query",
        why: "Zustand for simple global state, Redux Toolkit for complex flows, React Query for server state",
      },
      {
        layer: "UI Components",
        tools: "Radix UI, shadcn/ui, Headless UI",
        why: "Accessible primitives, composable, unstyled by default so your brand isn\u2019t fighting a framework",
      },
      {
        layer: "Styling",
        tools: "Tailwind CSS, CSS Modules",
        why: "Tailwind for rapid development, CSS Modules when you need strict scoping",
      },
      {
        layer: "Forms",
        tools: "React Hook Form, Zod",
        why: "Performant forms with schema-based validation. No re-renders on every keystroke.",
      },
      {
        layer: "Testing",
        tools: "Vitest, Playwright, React Testing Library",
        why: "Unit tests with Vitest, E2E with Playwright, component tests with RTL",
      },
      {
        layer: "Hosting",
        tools: "Vercel, AWS (CloudFront + S3, ECS), Cloudflare",
        why: "Vercel for Next.js, CloudFront + S3 for static SPAs, ECS for containerized apps",
      },
      {
        layer: "CI/CD",
        tools: "GitHub Actions, Docker",
        why: "Automated tests, preview deployments on every PR, production deploys on merge",
      },
      {
        layer: "Monitoring",
        tools: "Sentry, Datadog, Vercel Analytics",
        why: "Error tracking, performance monitoring, and Core Web Vitals dashboards",
      },
    ],
    bottomNote:
      "We pick the tooling based on your project. A dashboard doesn\u2019t need Next.js and Vercel - React + Vite + CloudFront is faster to build and cheaper to run. A marketing site doesn\u2019t need Redux - server state with React Query is enough. The stack follows the problem.",
  },
  python: {
    type: "three-column",
    title: "Our",
    highlight: "Python",
    afterHighlight: "Stack",
    subtitle:
      "Every tool earns its place. Here\u2019s what we ship with and why.",
    whyHeader: "Why",
    rows: [
      {
        layer: "Language",
        tools: "Python 3.12+ (strict typing)",
        why: "Performance improvements, pattern matching, type hints as contracts",
      },
      {
        layer: "Web Framework",
        tools: "Django 5.x, FastAPI, Flask",
        why: "Django for apps, FastAPI for APIs, Flask for lightweight services",
      },
      {
        layer: "ORM / Query",
        tools: "Django ORM, SQLAlchemy, Prisma",
        why: "Django ORM for Django apps, SQLAlchemy for FastAPI/Flask, Prisma for type safety",
      },
      {
        layer: "Database",
        tools: "PostgreSQL, MongoDB, Redis",
        why: "Postgres for relational, MongoDB for documents, Redis for cache and queues",
      },
      {
        layer: "AI/ML",
        tools: "PyTorch, scikit-learn, LangChain, Hugging Face",
        why: "PyTorch for custom models, scikit-learn for classical ML, LangChain for LLM apps",
      },
      {
        layer: "Data",
        tools: "Pandas, NumPy, Apache Airflow, Celery",
        why: "Data manipulation, orchestration, and async task processing",
      },
      {
        layer: "API",
        tools: "REST (DRF, FastAPI), GraphQL (Strawberry)",
        why: "DRF for Django REST APIs, FastAPI for async, Strawberry for type-safe GraphQL",
      },
      {
        layer: "Auth",
        tools: "Django auth, OAuth2, JWT",
        why: "Built-in auth for Django, token-based for APIs",
      },
      {
        layer: "Testing",
        tools: "pytest, Hypothesis, Locust",
        why: "pytest for unit/integration, Hypothesis for property-based, Locust for load testing",
      },
      {
        layer: "Hosting",
        tools: "AWS (ECS, Lambda, SageMaker), GCP, Vercel",
        why: "Containers for control, serverless for cost efficiency, SageMaker for ML deployment",
      },
      {
        layer: "CI/CD",
        tools: "GitHub Actions, Docker",
        why: "Automated tests, container builds, and deployments on every merge",
      },
      {
        layer: "Monitoring",
        tools: "Datadog, Sentry, Prometheus + Grafana",
        why: "APM, error tracking, and custom dashboards",
      },
    ],
    bottomNote:
      "We pick the framework based on your constraints. Django if your team needs structure and a built-in admin. FastAPI if throughput and async matter. Flask if simplicity and a small footprint are the priority. There is no single right answer.",
  },
  angular: {
    type: "three-column",
    title: "Our",
    highlight: "Angular",
    afterHighlight: "Stack",
    subtitle:
      "Every tool earns its place. Here\u2019s what we ship with and why.",
    whyHeader: "Why We Chose Them",
    headingExtraClass: "tracking-wide",
    rows: [
      {
        layer: "Framework",
        tools: "Angular 20+ (Standalone Components)",
        why: "Signals, zoneless CD, incremental hydration",
      },
      {
        layer: "Language",
        tools: "TypeScript (strict mode)",
        why: "Type safety across the full stack. Non-negotiable.",
      },
      {
        layer: "State",
        tools: "NgRx (SignalStore), Angular Signals",
        why: "NgRx for complex state, Signals for component-level reactivity",
      },
      {
        layer: "UI Components",
        tools: "Angular Material, PrimeNG, CDK",
        why: "Material for Google-style UI, PrimeNG for data-heavy components, CDK for custom",
      },
      {
        layer: "Styling",
        tools: "Tailwind CSS, SCSS",
        why: "Tailwind for utility-first speed, SCSS for component-scoped styles",
      },
      {
        layer: "Forms",
        tools: "Reactive Forms, Signal Forms",
        why: "Reactive Forms for production, Signal Forms for new projects",
      },
      {
        layer: "HTTP & Data",
        tools: "HttpClient, httpResource, RxJS",
        why: "Built-in HTTP with interceptors, RxJS for complex async flows",
      },
      {
        layer: "Routing",
        tools: "Angular Router (lazy-loaded)",
        why: "Code splitting per route, guards for auth",
      },
      {
        layer: "Testing",
        tools: "Vitest, Playwright, Angular Testing Library",
        why: "Unit with Vitest (Angular 21 default), E2E with Playwright",
      },
      {
        layer: "Build",
        tools: "Angular CLI, esbuild, Vite",
        why: "esbuild for fast builds, Vite for dev server HMR",
      },
      {
        layer: "Monorepo",
        tools: "Nx",
        why: "Shared libraries, affected builds, consistent tooling across teams",
      },
      {
        layer: "CI/CD",
        tools: "GitHub Actions, Vercel/AWS",
        why: "Automated testing and preview deployments on every PR",
      },
    ],
    bottomNote:
      "We use Angular Material where it fits and swap in PrimeNG when the project needs data tables, tree views, or complex form controls that Material doesn\u2019t cover well. No dogma about component libraries - we pick what serves the project.",
  },
  "react-native": {
    type: "two-column",
    title: "Our",
    highlight: "Technology",
    afterHighlight: "Stack",
    subtitle:
      "Every tool earns its place. Here\u2019s what we ship with.",
    rows: [
      { layer: "Framework", tools: "React Native 0.83 (New Architecture)" },
      {
        layer: "Development Platform",
        tools: "Expo SDK 55 (managed or bare workflow)",
      },
      { layer: "Language", tools: "TypeScript (strict mode)" },
      {
        layer: "JS Engine",
        tools: "Hermes (default), Hermes v1 (opt-in for advanced perf)",
      },
      {
        layer: "Navigation",
        tools: "Expo Router (file-based), React Navigation 7",
      },
      {
        layer: "State Management",
        tools: "Zustand, Redux Toolkit, React Query/TanStack Query",
      },
      {
        layer: "UI Components",
        tools: "React Native Paper, Tamagui, NativeWind (Tailwind for RN)",
      },
      {
        layer: "Animations",
        tools: "Reanimated 4 (UI thread), Moti, Lottie",
      },
      { layer: "Forms", tools: "React Hook Form + Zod validation" },
      {
        layer: "Testing",
        tools: "Jest, Detox (E2E), React Native Testing Library",
      },
      { layer: "CI/CD", tools: "EAS Build, EAS Submit, Fastlane" },
      {
        layer: "OTA Updates",
        tools: "EAS Update (Hermes bytecode diffing for smaller updates)",
      },
      { layer: "Monitoring", tools: "Sentry, Expo Insights" },
    ],
  },
  flutter: {
    type: "two-column",
    title: "Our",
    highlight: "Flutter",
    afterHighlight: "Stack",
    subtitle:
      "Every tool earns its place. Here\u2019s what we ship with.",
    rows: [
      { layer: "Framework", tools: "Flutter 3.41" },
      {
        layer: "Language",
        tools: "Dart 3.10 (sound null safety, strict typing)",
      },
      {
        layer: "Rendering Engine",
        tools: "Impeller (Vulkan on Android, Metal on iOS)",
      },
      {
        layer: "State Management",
        tools: "BLoC (enterprise), Riverpod (lean projects)",
      },
      {
        layer: "UI Framework",
        tools: "Material 3, Cupertino, custom widget libraries",
      },
      {
        layer: "Animation",
        tools: "Rive, Flutter implicit/explicit animations, Hero transitions",
      },
      { layer: "Navigation", tools: "GoRouter, Navigator 2.0" },
      {
        layer: "Backend / BaaS",
        tools: "Firebase, Supabase, custom REST/GraphQL APIs",
      },
      { layer: "Local Storage", tools: "Hive, Isar, Drift (SQLite)" },
      {
        layer: "Testing",
        tools: "Widget tests, integration tests, golden tests (visual regression)",
      },
      { layer: "CI/CD", tools: "Codemagic, Fastlane, GitHub Actions" },
      { layer: "Monitoring", tools: "Sentry, Firebase Crashlytics" },
      {
        layer: "Distribution",
        tools: "App Store, Play Store, Firebase App Distribution, TestFlight",
      },
    ],
    bottomNote:
      "We pick state management based on your project complexity. BLoC for enterprise apps with complex business logic and testing requirements. Riverpod for leaner projects where simplicity matters. No dogma, just the right tool.",
  },
  "prometheus-monitoring": {
    type: "striped",
    title: "Technologies We",
    highlight: "Deploy & Support",
    col1Header: "Category",
    col2Header: "Tools",
    rows: [
      { col1: "Core", col2: "Prometheus 3.x (latest stable), Alertmanager" },
      {
        col1: "Operator",
        col2: "Prometheus Operator (kube-prometheus-stack)",
      },
      { col1: "Visualization", col2: "Grafana" },
      {
        col1: "Long-term Storage",
        col2: "Thanos, Cortex, VictoriaMetrics",
      },
      {
        col1: "Exporters",
        col2: "Node Exporter, kube-state-metrics, cAdvisor, Blackbox Exporter, custom exporters",
      },
      {
        col1: "Alerting Integrations",
        col2: "PagerDuty, OpsGenie, Slack, email, custom webhooks",
      },
      {
        col1: "Cloud Managed",
        col2: "Amazon Managed Prometheus, Google Cloud Managed Prometheus, Azure Monitor",
      },
      {
        col1: "Infrastructure",
        col2: "Kubernetes, Docker, Terraform, Helm",
      },
      {
        col1: "Observability Bridge",
        col2: "OpenTelemetry Collector (OTLP ingestion)",
      },
    ],
  },
  "thanos-long-term-storage": {
    type: "striped",
    title: "Thanos Components We",
    highlight: "Deploy & Support",
    col1Header: "Component",
    col2Header: "What It Does",
    rows: [
      {
        col1: "Thanos Sidecar",
        col2: "Ships metrics from Prometheus to object storage, exposes StoreAPI for real-time queries",
      },
      {
        col1: "Thanos Receiver",
        col2: "Alternative to Sidecar - accepts remote write from Prometheus, supports multi-tenancy",
      },
      {
        col1: "Thanos Store Gateway",
        col2: "Serves historical metrics from object storage (S3, GCS, Azure Blob, MinIO)",
      },
      {
        col1: "Thanos Query",
        col2: "Federates queries across Sidecars, Store Gateways, and other Queriers - single PromQL endpoint",
      },
      {
        col1: "Thanos Query Frontend",
        col2: "Caching and query splitting layer in front of Query for faster long-range queries",
      },
      {
        col1: "Thanos Compactor",
        col2: "Downsamples historical data (5m, 1h) and compacts blocks to reduce storage cost",
      },
      {
        col1: "Thanos Ruler",
        col2: "Evaluates recording and alerting rules against Thanos Query for global alerts",
      },
      {
        col1: "Object Storage",
        col2: "S3, GCS, Azure Blob, MinIO - the actual long-term storage backend",
      },
      {
        col1: "Grafana",
        col2: "Unified dashboards pointing at Thanos Query for cross-cluster visualization",
      },
      {
        col1: "Prometheus Operator",
        col2: "kube-prometheus-stack with Thanos Sidecar integration via Helm",
      },
    ],
  },
  "istio-consulting": {
    type: "striped",
    title: "Technologies We",
    highlight: "Deploy & Support",
    col1Header: "Category",
    col2Header: "Tools",
    rows: [
      {
        col1: "Core",
        col2: "Istio 1.29 (latest), 1.28.x (LTS), Envoy Proxy",
      },
      {
        col1: "Data Plane Modes",
        col2: "Ambient mode (ztunnel + waypoint), Sidecar mode",
      },
      {
        col1: "Traffic Management",
        col2: "VirtualService, DestinationRule, Kubernetes Gateway API",
      },
      {
        col1: "Security",
        col2: "mTLS, AuthorizationPolicy, PeerAuthentication, RequestAuthentication",
      },
      {
        col1: "Observability",
        col2: "Kiali, Prometheus, Grafana, Jaeger/Zipkin",
      },
      {
        col1: "Multi-cluster",
        col2: "Multi-network, multi-primary, external control plane",
      },
      {
        col1: "Platform",
        col2: "Kubernetes, EKS, GKE (with Istio add-on), AKS",
      },
      {
        col1: "Gateway",
        col2: "Istio Ingress Gateway, Kubernetes Gateway API, integration with existing API gateways",
      },
      {
        col1: "Extensions",
        col2: "Wasm plugins, EnvoyFilter, Telemetry API",
      },
    ],
  },
};

function ThreeColumnTable({ data }: { data: ThreeColumnData }) {
  const thClass = data.headingExtraClass
    ? `text-left py-3 px-4 text-sm font-semibold ${data.headingExtraClass} text-text-primary`
    : "text-left py-3 px-4 text-sm font-semibold text-text-primary";

  return (
    <section id="stack" className="relative py-16 sm:py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-4">
            {data.title}{" "}
            <span className="text-highlight">{data.highlight}</span>{" "}
            {data.afterHighlight}
          </h2>
          <p className="text-text-secondary">{data.subtitle}</p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto -mx-4 sm:mx-0"
        >
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className={`${thClass} w-[20%]`}>Layer</th>
                <th className={`${thClass} w-[30%]`}>Tools</th>
                <th className={`${thClass} w-[50%]`}>{data.whyHeader}</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border/50 hover:bg-surface-elevated/30 transition-colors"
                >
                  <td className="py-3 px-4 text-sm font-medium text-accent">
                    {row.layer}
                  </td>
                  <td className="py-3 px-4 text-sm text-text-primary">
                    {row.tools}
                  </td>
                  <td className="py-3 px-4 text-sm text-text-secondary">
                    {row.why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </m.div>

        {data.bottomNote && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 max-w-3xl mx-auto"
          >
            <p className="text-sm text-text-secondary">{data.bottomNote}</p>
          </m.div>
        )}
      </div>
    </section>
  );
}

function TwoColumnTable({ data }: { data: TwoColumnData }) {
  return (
    <section id="stack" className="relative py-16 sm:py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-4">
            {data.title}{" "}
            <span className="text-highlight">{data.highlight}</span>{" "}
            {data.afterHighlight}
          </h2>
          <p className="text-text-secondary">{data.subtitle}</p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto -mx-4 sm:mx-0"
        >
          <table className="w-full min-w-[480px] border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary w-[30%]">
                  Layer
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary">
                  What We Use
                </th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border/50 hover:bg-surface-elevated/30 transition-colors"
                >
                  <td className="py-3 px-4 text-sm font-medium text-accent">
                    {row.layer}
                  </td>
                  <td className="py-3 px-4 text-sm text-text-primary">
                    {row.tools}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </m.div>

        {data.bottomNote && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 max-w-3xl mx-auto"
          >
            <p className="text-sm text-text-secondary">{data.bottomNote}</p>
          </m.div>
        )}
      </div>
    </section>
  );
}

function StripedTable({ data }: { data: StripedData }) {
  return (
    <section id="stack" className="relative py-16 sm:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-xl border border-border"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-elevated border-b border-border">
                <th className="text-left px-5 py-3 text-text-muted font-medium w-[35%]">
                  {data.col1Header}
                </th>
                <th className="text-left px-5 py-3 text-text-muted font-medium">
                  {data.col2Header}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-border last:border-0 ${idx % 2 === 0 ? "bg-base" : "bg-surface-elevated/30"}`}
                >
                  <td className="px-5 py-3 font-medium text-text-primary">
                    {row.col1}
                  </td>
                  <td className="px-5 py-3 text-text-secondary">{row.col2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </m.div>
      </div>
    </section>
  );
}

export default function CustomStackTable({ slug }: { slug: string }) {
  const data = dataMap[slug];
  if (!data) return null;

  switch (data.type) {
    case "three-column":
      return <ThreeColumnTable data={data} />;
    case "two-column":
      return <TwoColumnTable data={data} />;
    case "striped":
      return <StripedTable data={data} />;
  }
}
