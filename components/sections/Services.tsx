"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    name: "AI Engineering",
    description:
      "Build AI-powered products that ship to production. From LLM integrations to AI agents and RAG systems, you get solutions built on proven engineering practices that scale with your business.",
    href: "/expertise/llm-applications",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
    tags: [
      "LLM Applications",
      "AI Agents",
      "RAG Systems",
      "Fine-tuning",
      "MLOps",
    ],
  },
  {
    name: "AI Security",
    description:
      "Protect your AI systems from emerging threats. Your models stay safe from prompt injection, jailbreaks, and data leakage with security measures designed specifically for AI workloads.",
    href: "/expertise/ai-security",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    tags: [
      "Threat Protection",
      "Prompt Defense",
      "Data Privacy",
      "Compliance",
    ],
  },
  {
    name: "Product Engineering",
    description:
      "Ship faster with a full-stack team that builds AI-integrated products. You get clean, maintainable code and modern development workflows that accelerate your time to market.",
    href: "/services/product-build",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    tags: [
      "React & Next.js",
      "Node.js & Python",
      "Mobile Apps",
      "API Development",
    ],
  },
  {
    name: "Experience Design",
    description:
      "Design intuitive AI-powered products that users love. Your customers get seamless experiences that drive engagement, from conversational interfaces to intelligent dashboards.",
    href: "/expertise/product-design",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    tags: ["AI UX Design", "User Research", "Design Systems", "Prototyping"],
  },
  {
    name: "Cloud & DevOps",
    description:
      "Scale your infrastructure for AI workloads. You get cloud architecture optimized for ML models and LLM deployments, with CI/CD pipelines that handle AI-specific requirements.",
    href: "/services/enterprise",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
    tags: [
      "AWS & GCP",
      "Kubernetes",
      "MLOps Infrastructure",
      "GPU Optimization",
    ],
  },
  {
    name: "Web & Mobile Development",
    description:
      "Build AI-enhanced apps across every platform. Your users get fast, intelligent experiences with seamless AI integrations across web, iOS, and Android.",
    href: "/services/product-build",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
    tags: ["React Native", "iOS & Android", "AI-Powered Apps"],
  },
];

export function Services() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-surface">
      {/* Diagonal lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'%3e%3cpath d='M0 40L40 0' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-3 sm:mb-4">
            What You Get
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
            AI engineering and product development services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-surface-elevated rounded-xl p-8 border border-border hover:border-accent-teal/30 transition-colors"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal-light mb-5">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Read More Link */}
              <Link
                href={service.href}
                scroll={true}
                className="inline-flex items-center gap-2 text-accent-teal-light font-medium text-sm hover:text-white transition-colors mb-6"
              >
                Read More
                <span className="w-5 h-px bg-current group-hover:w-7 transition-all" />
              </Link>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium text-text-muted bg-surface rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
