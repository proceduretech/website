"use client";

import { m } from "framer-motion";

interface DecisionData {
  id: string;
  title: string;
  highlight: string;
  goodFitTitle: string;
  goodFitItems: string[];
  altTitle: string;
  altItems: string[];
  bottomTitle: string;
  bottomText: string;
  goodFitAccent?: boolean;
}

const decisionDataMap: Record<string, DecisionData> = {
  "prometheus-monitoring": {
    id: "fit",
    title: "Should You Use Prometheus?",
    highlight: "An Honest Assessment",
    goodFitTitle: "Prometheus is a good fit when",
    goodFitItems: [
      "You're running Kubernetes (it's the native standard)",
      "You have 50+ services generating metrics",
      "Your monitoring bill is growing faster than your infrastructure",
      "You need metric retention beyond what commercial tools offer affordably",
      "Your team values data ownership and vendor independence",
      "You're already using or planning CNCF tools (Envoy, Istio, Flagger)",
    ],
    altTitle: "You might want to stick with your current tool when",
    altItems: [
      "Your team is under 10 engineers and nobody has monitoring experience",
      "You need APM (distributed tracing, code-level profiling) - Prometheus handles metrics, not traces",
      "You want a fully managed experience with zero operational overhead",
      "Your monitoring spend is modest enough that migration effort won't pay back quickly",
      "You need logs in the same tool (consider adding Grafana Loki alongside Prometheus, or stay with your current stack)",
    ],
    bottomTitle: "The hybrid approach (what most teams actually do)",
    bottomText: "Use Prometheus for infrastructure and Kubernetes metrics where volume is highest. Keep a commercial tool for APM/tracing if needed. Use Grafana as the unified dashboard layer across both.",
  },
  "istio-consulting": {
    id: "fit",
    title: "Do You Actually Need a",
    highlight: "Service Mesh?",
    goodFitTitle: "Istio is a good fit when:",
    goodFitAccent: true,
    goodFitItems: [
      "You're running 30+ microservices on Kubernetes",
      "You need mTLS and zero-trust networking for compliance (SOC2, HIPAA, PCI)",
      "Traffic management is getting complex - canary releases, traffic splitting, retries",
      "You want observability (latency, error rates, traffic flow) without instrumenting every service",
      "You're running multi-cluster or multi-cloud Kubernetes",
      "Your API gateway is hitting its limits for east-west traffic",
    ],
    altTitle: "You probably don\u2019t need Istio when:",
    altItems: [
      "You have fewer than 10 services and a small team",
      "Your services communicate over a message queue, not HTTP/gRPC",
      "You only need ingress traffic management (a simple gateway or ingress controller is enough)",
      "Your team has no Kubernetes experience yet - get Kubernetes stable first, then add the mesh",
      "You need a service mesh but want the simplest option - consider Linkerd for lighter-weight mesh",
    ],
    bottomTitle: "The incremental approach (what most teams should do)",
    bottomText: "Start with ambient mode for L4 mTLS and identity. No sidecars, minimal overhead. Add L7 waypoint proxies only for namespaces that need traffic management or rich authorization. You don\u2019t have to mesh everything on day one.",
  },
  "thanos-long-term-storage": {
    id: "fit",
    title: "Should You Use Thanos?",
    highlight: "An Honest Assessment",
    goodFitTitle: "Thanos is a good fit when",
    goodFitItems: [
      "You're running multiple Prometheus instances and need a unified query layer",
      "You need metric retention beyond 15-30 days (compliance, capacity planning, trend analysis)",
      "Your Prometheus storage costs are climbing and you want to offload to object storage",
      "You need high availability for monitoring - single Prometheus is a SPOF",
      "You're already on Kubernetes and using the Prometheus Operator",
      "You want to keep the Prometheus query language (PromQL) across everything",
    ],
    altTitle: "You might not need Thanos when",
    altItems: [
      "You have a single small Prometheus instance with modest retention needs",
      "Your team is happy with 15-30 days of local retention and doesn't query historical data",
      "You're already using Grafana Mimir or Cortex for long-term storage",
      "You want a fully managed solution with zero operational overhead - consider Amazon Managed Prometheus or Grafana Cloud",
      "Your monitoring stack isn't Prometheus-based (Thanos only works with Prometheus)",
    ],
    bottomTitle: "The common architecture (what production teams actually run)",
    bottomText: "Prometheus with Thanos Sidecar in each cluster, metrics shipped to S3/GCS via Thanos Store Gateway, Compactor handling downsampling and retention, and Thanos Query sitting in front of everything for a unified PromQL endpoint. Grafana dashboards point at Thanos Query instead of individual Prometheus instances.",
  },
};

export default function DecisionFramework({ slug }: { slug: string }) {
  const data = decisionDataMap[slug];
  if (!data) return null;

  return (
    <section id={data.id} className="relative py-16 sm:py-24 bg-base">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
            {data.title} <span className="text-highlight">{data.highlight}</span>
          </h2>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Good fit */}
          <m.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-xl bg-surface-elevated border border-accent/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold ${data.goodFitAccent ? "text-accent" : "text-text-primary"}`}>{data.goodFitTitle}</h3>
            </div>
            <ul className="space-y-3">
              {data.goodFitItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </m.div>

          {/* Consider alternatives */}
          <m.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-xl bg-surface-elevated border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent-secondary/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-secondary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{data.altTitle}</h3>
            </div>
            <ul className="space-y-3">
              {data.altItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-text-muted flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </m.div>
        </div>

        {/* Bottom note */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-xl bg-surface-elevated/60 border border-border text-center"
        >
          <h3 className="text-base font-semibold text-text-primary mb-2">{data.bottomTitle}</h3>
          <p className="text-sm text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {data.bottomText}
          </p>
        </m.div>
      </div>
    </section>
  );
}
