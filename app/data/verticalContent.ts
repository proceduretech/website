import { Vertical } from "../context/ThemeContext";

export interface ClientLogo {
  id: string;
  name: string;
}

export interface PerspectiveContent {
  headline: string;
  subheadline: string;
  points: {
    problem: string;
    insight: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export const clientLogos: Record<Vertical, ClientLogo[]> = {
  "ai-engineering": [
    { id: "ae-1", name: "TechCorp" },
    { id: "ae-2", name: "DataFlow" },
    { id: "ae-3", name: "MLOps Inc" },
    { id: "ae-4", name: "Neural Systems" },
    { id: "ae-5", name: "AI Dynamics" },
    { id: "ae-6", name: "Inference Labs" },
    { id: "ae-7", name: "Pipeline Co" },
    { id: "ae-8", name: "ModelServe" },
  ],
  software: [
    { id: "sw-1", name: "ScaleUp" },
    { id: "sw-2", name: "CloudNative" },
    { id: "sw-3", name: "DevOps Pro" },
    { id: "sw-4", name: "API Masters" },
    { id: "sw-5", name: "Platform.io" },
    { id: "sw-6", name: "BuildFast" },
    { id: "sw-7", name: "CodeCraft" },
    { id: "sw-8", name: "StackWorks" },
  ],
  design: [
    { id: "ds-1", name: "PixelPerfect" },
    { id: "ds-2", name: "UX Studio" },
    { id: "ds-3", name: "Interface Co" },
    { id: "ds-4", name: "Design Systems" },
    { id: "ds-5", name: "Prototype Lab" },
    { id: "ds-6", name: "Motion Design" },
    { id: "ds-7", name: "Visual Logic" },
    { id: "ds-8", name: "Brand Works" },
  ],
  "ai-security": [
    { id: "as-1", name: "SecureAI" },
    { id: "as-2", name: "RedTeam Labs" },
    { id: "as-3", name: "ThreatModel" },
    { id: "as-4", name: "GuardML" },
    { id: "as-5", name: "SafePrompt" },
    { id: "as-6", name: "AIFirewall" },
    { id: "as-7", name: "ModelGuard" },
    { id: "as-8", name: "CyberAI" },
  ],
};

export const perspectiveContent: Record<Vertical, PerspectiveContent> = {
  "ai-engineering": {
    headline: "The AI Demo-to-Production Gap",
    subheadline: "Why 87% of AI projects never make it to production",
    points: [
      {
        problem: "Teams build impressive demos but lack production infrastructure",
        insight: "We've deployed 50+ AI systems. The demo is 5% of the work.",
      },
      {
        problem: "Model performance degrades silently without proper monitoring",
        insight: "Every AI system needs observability from day one, not as an afterthought.",
      },
      {
        problem: "Integration with existing systems is always underestimated",
        insight: "The hardest part isn't the AI. It's making it work with everything else.",
      },
    ],
  },
  software: {
    headline: "Technical Debt is a Choice",
    subheadline: "Most codebases become liabilities within 18 months",
    points: [
      {
        problem: "Teams optimize for shipping fast, then spend years paying it back",
        insight: "Speed and quality aren't tradeoffs. Bad architecture is slow.",
      },
      {
        problem: "Testing is treated as overhead instead of investment",
        insight: "Every hour spent on tests saves 10 hours of debugging in production.",
      },
      {
        problem: "Infrastructure becomes the bottleneck for feature delivery",
        insight: "Your platform should accelerate your team, not constrain it.",
      },
    ],
  },
  design: {
    headline: "Design Theater vs. Design Impact",
    subheadline: "Pretty pixels don't move business metrics",
    points: [
      {
        problem: "Design teams optimize for aesthetics over user outcomes",
        insight: "Great design is invisible. Users complete tasks without thinking.",
      },
      {
        problem: "User research happens once, then gets ignored",
        insight: "Research isn't a phase. It's a continuous feedback loop.",
      },
      {
        problem: "Design systems become graveyards of unused components",
        insight: "A design system is only valuable if developers actually use it.",
      },
    ],
  },
  "ai-security": {
    headline: "Your AI Has Vulnerabilities You Haven't Considered",
    subheadline: "Traditional security tools don't protect AI systems",
    points: [
      {
        problem: "Prompt injection can bypass all your safety measures",
        insight: "If you haven't tested for prompt injection, assume you're vulnerable.",
      },
      {
        problem: "Training data leaks through model outputs",
        insight: "Your model remembers more than you think. We find out what.",
      },
      {
        problem: "Adversarial attacks can manipulate model decisions invisibly",
        insight: "Attackers don't need to hack your servers. They hack your model's perception.",
      },
    ],
  },
};

export const services: Record<Vertical, Service[]> = {
  "ai-engineering": [
    {
      id: "data",
      title: "Data Engineering",
      description: "Build robust data pipelines that feed your AI systems",
    },
    {
      id: "model",
      title: "Model Development",
      description: "Custom models trained on your data, optimized for your use case",
    },
    {
      id: "deploy",
      title: "Production Deployment",
      description: "Get AI from notebook to production with proper MLOps",
    },
    {
      id: "monitor",
      title: "Monitoring & Observability",
      description: "Track model performance, detect drift, ensure reliability",
    },
  ],
  software: [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "React, Next.js, mobile — interfaces that perform",
    },
    {
      id: "backend",
      title: "Backend & APIs",
      description: "Scalable services, clean architecture, battle-tested",
    },
    {
      id: "infra",
      title: "Infrastructure",
      description: "Cloud-native, containerized, auto-scaling infrastructure",
    },
    {
      id: "devops",
      title: "DevOps & Platform",
      description: "CI/CD, observability, developer experience",
    },
  ],
  design: [
    {
      id: "research",
      title: "User Research",
      description: "Understand your users before designing for them",
    },
    {
      id: "product",
      title: "Product Design",
      description: "Interfaces grounded in research, optimized for outcomes",
    },
    {
      id: "systems",
      title: "Design Systems",
      description: "Scalable component libraries that developers actually use",
    },
    {
      id: "prototype",
      title: "Prototyping & Testing",
      description: "Validate before you build",
    },
  ],
  "ai-security": [
    {
      id: "assess",
      title: "Security Assessment",
      description: "Find vulnerabilities in your AI systems before attackers do",
    },
    {
      id: "protect",
      title: "Protection Implementation",
      description: "Harden prompts, APIs, and model access",
    },
    {
      id: "monitor",
      title: "Continuous Monitoring",
      description: "Detect anomalies and attacks in real-time",
    },
    {
      id: "respond",
      title: "Incident Response",
      description: "Rapid response when things go wrong",
    },
  ],
};
