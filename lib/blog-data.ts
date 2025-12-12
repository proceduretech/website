import { Author, BlogCategory, BlogPost } from "./blog-types";

export const authors: Author[] = [
  {
    id: "ulhas",
    name: "Ulhas Mandrawadkar",
    avatar: "/team/ulhas.jpg",
    role: "CEO & Co-Founder",
    bio: "Building AI systems that ship. Leading Procedure's mission to close the gap between AI's promise and production reality.",
    twitter: "https://twitter.com/ulhas",
    linkedin: "https://linkedin.com/in/ulhas",
  },
  {
    id: "engineering-team",
    name: "Procedure Engineering",
    avatar: "/team/engineering.jpg",
    role: "Engineering Team",
    bio: "Insights from Procedure's team of AI and product engineers building production systems for enterprise clients.",
    linkedin: "https://linkedin.com/company/procedure",
  },
  {
    id: "ai-security-team",
    name: "AI Security Team",
    avatar: "/team/security.jpg",
    role: "Security Engineering",
    bio: "Procedure's dedicated AI security specialists focused on protecting production AI systems from emerging threats.",
    linkedin: "https://linkedin.com/company/procedure",
  },
];

export const categories: BlogCategory[] = [
  {
    id: "llm-engineering",
    name: "LLM Engineering",
    slug: "llm-engineering",
    description:
      "Building reliable LLM applications at scale—prompting strategies, fine-tuning approaches, and inference optimization for production workloads.",
    color: "teal",
  },
  {
    id: "ai-security",
    name: "AI Security",
    slug: "ai-security",
    description:
      "Securing AI systems against adversarial attacks, prompt injection, model theft, and emerging threat vectors in production environments.",
    color: "blue",
  },
  {
    id: "production-systems",
    name: "Production Systems",
    slug: "production-systems",
    description:
      "Architecture patterns, reliability engineering, and operational excellence for AI systems serving millions of requests.",
    color: "default",
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    slug: "ai-agents",
    description:
      "Designing, building, and deploying autonomous AI agents—from architecture decisions to production guardrails and observability.",
    color: "highlight",
  },
  {
    id: "mlops",
    name: "MLOps & Infrastructure",
    slug: "mlops",
    description:
      "CI/CD for ML, model deployment pipelines, feature stores, and the infrastructure that makes AI systems maintainable.",
    color: "teal",
  },
  {
    id: "engineering-leadership",
    name: "Engineering Leadership",
    slug: "engineering-leadership",
    description:
      "Building AI teams, technical decision-making frameworks, and organizational patterns for successful AI adoption.",
    color: "blue",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "prompt-injection-detection-production",
    title:
      "How to Implement Prompt Injection Detection in Production LLM Applications",
    excerpt:
      "A comprehensive guide to detecting and preventing prompt injection attacks in production systems. We cover input validation, output filtering, and real-time monitoring strategies that have protected our enterprise clients.",
    content: `
# How to Implement Prompt Injection Detection in Production LLM Applications

Prompt injection remains one of the most critical security vulnerabilities in LLM applications. In this guide, we'll walk through the battle-tested strategies we use to protect enterprise AI systems.

## Understanding the Threat Landscape

Prompt injection attacks attempt to override your system prompts or extract sensitive information by crafting malicious user inputs...

## Defense in Depth Strategy

### Layer 1: Input Validation
Before any user input reaches your LLM, implement strict validation...

### Layer 2: Output Filtering
Even with input validation, you need to monitor outputs for signs of successful injection...

### Layer 3: Real-time Monitoring
Set up alerting for anomalous patterns that might indicate attack attempts...

## Production Implementation

Here's how we implement these defenses in production systems serving millions of requests...

## Conclusion

Security is not a one-time implementation but an ongoing process. Regular red-teaming and staying updated on new attack vectors is essential.
    `,
    featuredImage: "/blog/prompt-injection-detection.jpg",
    category: categories.find((c) => c.id === "ai-security")!,
    postType: "guide",
    author: authors.find((a) => a.id === "ai-security-team")!,
    publishedAt: "2024-12-10",
    readTime: 12,
    tags: ["security", "prompt-injection", "llm", "production"],
    featured: true,
  },
  {
    id: "2",
    slug: "production-ready-rag-pipeline",
    title:
      "Building a Production-Ready RAG Pipeline: Architecture Decisions That Scale",
    excerpt:
      "RAG pipelines that work in demos often fail in production. Learn the architecture decisions that separate toy implementations from systems that handle enterprise-scale document retrieval.",
    content: `
# Building a Production-Ready RAG Pipeline

The gap between a working RAG demo and a production system is enormous. Here's what we've learned building RAG pipelines that serve enterprise clients...
    `,
    featuredImage: "/blog/rag-pipeline.jpg",
    category: categories.find((c) => c.id === "llm-engineering")!,
    postType: "article",
    author: authors.find((a) => a.id === "engineering-team")!,
    publishedAt: "2024-12-05",
    readTime: 15,
    tags: ["rag", "architecture", "llm", "production"],
    featured: true,
  },
  {
    id: "3",
    slug: "llm-latency-optimization",
    title: "Why Your LLM Latency Is 10x Worse Than It Should Be",
    excerpt:
      "Most teams accept LLM latency as a given. We've found that simple optimizations can often reduce response times by 10x without sacrificing quality. Here's our systematic approach.",
    content: `
# Why Your LLM Latency Is 10x Worse Than It Should Be

After optimizing LLM systems for dozens of enterprise clients, we've identified the most common latency killers and how to fix them...
    `,
    featuredImage: "/blog/llm-latency.jpg",
    category: categories.find((c) => c.id === "production-systems")!,
    postType: "article",
    author: authors.find((a) => a.id === "engineering-team")!,
    publishedAt: "2024-11-28",
    readTime: 10,
    tags: ["performance", "latency", "optimization", "llm"],
  },
  {
    id: "4",
    slug: "ai-agent-architectures-hidden-costs",
    title: "The Hidden Costs of AI Agent Architectures: A Production Analysis",
    excerpt:
      "AI agents promise autonomous task completion, but the operational costs often surprise teams. We analyze the real costs of running agent systems in production.",
    content: `
# The Hidden Costs of AI Agent Architectures

AI agents are powerful, but they come with costs that aren't obvious until you're running them at scale...
    `,
    featuredImage: "/blog/agent-costs.jpg",
    category: categories.find((c) => c.id === "ai-agents")!,
    postType: "article",
    author: authors.find((a) => a.id === "ulhas")!,
    publishedAt: "2024-11-20",
    readTime: 8,
    tags: ["agents", "costs", "production", "architecture"],
  },
  {
    id: "5",
    slug: "fine-tuning-vs-rag-decision-framework",
    title:
      "Fine-Tuning vs. RAG vs. Prompt Engineering: A Decision Framework for Enterprise",
    excerpt:
      "Should you fine-tune, implement RAG, or optimize prompts? We provide a clear decision framework based on your use case, data, and constraints.",
    content: `
# Fine-Tuning vs. RAG vs. Prompt Engineering

One of the most common questions we get from enterprise clients is which approach to use for their LLM applications...
    `,
    featuredImage: "/blog/decision-framework.jpg",
    category: categories.find((c) => c.id === "llm-engineering")!,
    postType: "guide",
    author: authors.find((a) => a.id === "ulhas")!,
    publishedAt: "2024-11-15",
    readTime: 14,
    tags: ["fine-tuning", "rag", "prompt-engineering", "strategy"],
  },
  {
    id: "6",
    slug: "llm-observability-metrics",
    title: "Observability for LLM Applications: Metrics That Actually Matter",
    excerpt:
      "Traditional APM tools miss critical LLM-specific metrics. Here's how to build observability that catches issues before they impact users.",
    content: `
# Observability for LLM Applications

Monitoring LLM applications requires a different approach than traditional software...
    `,
    featuredImage: "/blog/observability.jpg",
    category: categories.find((c) => c.id === "mlops")!,
    postType: "guide",
    author: authors.find((a) => a.id === "engineering-team")!,
    publishedAt: "2024-11-08",
    readTime: 11,
    tags: ["observability", "monitoring", "mlops", "production"],
  },
  {
    id: "7",
    slug: "deploying-llms-50-million-users",
    title: "What We Learned Deploying LLMs to 50 Million Users",
    excerpt:
      "Lessons from scaling LLM infrastructure to handle massive user bases. The challenges that emerge at scale are different from what you expect.",
    content: `
# What We Learned Deploying LLMs to 50 Million Users

Scaling LLM applications reveals challenges that simply don't exist at smaller scales...
    `,
    featuredImage: "/blog/scale-lessons.jpg",
    category: categories.find((c) => c.id === "production-systems")!,
    postType: "case-study",
    author: authors.find((a) => a.id === "engineering-team")!,
    publishedAt: "2024-10-30",
    readTime: 16,
    tags: ["scale", "infrastructure", "case-study", "production"],
  },
  {
    id: "8",
    slug: "ai-agent-went-rogue-post-mortem",
    title: "Post-Mortem: When Our AI Agent Went Rogue (And How We Fixed It)",
    excerpt:
      "A transparent look at an incident where an AI agent behaved unexpectedly in production, the root cause analysis, and the guardrails we implemented to prevent recurrence.",
    content: `
# Post-Mortem: When Our AI Agent Went Rogue

Transparency about failures is how the industry learns. Here's our detailed analysis of an agent incident...
    `,
    featuredImage: "/blog/agent-postmortem.jpg",
    category: categories.find((c) => c.id === "ai-agents")!,
    postType: "case-study",
    author: authors.find((a) => a.id === "ai-security-team")!,
    publishedAt: "2024-10-22",
    readTime: 13,
    tags: ["agents", "post-mortem", "safety", "guardrails"],
  },
  {
    id: "9",
    slug: "ai-red-teaming-guide",
    title: "The Enterprise Guide to AI Red Teaming Your LLM Applications",
    excerpt:
      "How to systematically test your LLM applications for vulnerabilities before attackers find them. A practical guide to AI red teaming.",
    content: `
# The Enterprise Guide to AI Red Teaming

Red teaming is essential for securing AI systems. Here's how to do it effectively...
    `,
    featuredImage: "/blog/red-teaming.jpg",
    category: categories.find((c) => c.id === "ai-security")!,
    postType: "guide",
    author: authors.find((a) => a.id === "ai-security-team")!,
    publishedAt: "2024-10-15",
    readTime: 18,
    tags: ["security", "red-teaming", "testing", "enterprise"],
  },
  {
    id: "10",
    slug: "mlops-for-llms",
    title: "MLOps for LLMs: Why Your Existing Pipeline Won't Work",
    excerpt:
      "Traditional MLOps practices don't translate directly to LLM workflows. Here's what needs to change and how to adapt your infrastructure.",
    content: `
# MLOps for LLMs: Why Your Existing Pipeline Won't Work

If you're trying to apply traditional MLOps to LLM projects, you're likely hitting walls...
    `,
    featuredImage: "/blog/mlops-llms.jpg",
    category: categories.find((c) => c.id === "mlops")!,
    postType: "article",
    author: authors.find((a) => a.id === "engineering-team")!,
    publishedAt: "2024-10-08",
    readTime: 12,
    tags: ["mlops", "llm", "infrastructure", "ci-cd"],
  },
];

export const featuredPosts = blogPosts.filter((post) => post.featured);
