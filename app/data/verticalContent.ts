import { Vertical } from "../context/ThemeContext";

export interface ClientLogo {
  id: string;
  name: string;
}

export interface PainPointsContent {
  headline: string;
  painPoints: string[];
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

export const painPointsContent: Record<Vertical, PainPointsContent> = {
  "ai-engineering": {
    headline: "Sound familiar?",
    painPoints: [
      "Our AI demo works great, but we can't get it to production",
      "Models keep breaking and we don't know why",
      "Data pipelines are a mess of scripts and cron jobs",
      "We're stuck on prototypes while competitors ship",
    ],
  },
  software: {
    headline: "Sound familiar?",
    painPoints: [
      "Every new feature takes longer than the last",
      "We're afraid to touch legacy code",
      "Deployments are stressful and unpredictable",
      "Our infrastructure can't keep up with growth",
    ],
  },
  design: {
    headline: "Sound familiar?",
    painPoints: [
      "Users abandon our product but we don't know why",
      "Design and engineering are constantly misaligned",
      "We ship features nobody asked for",
      "Our app feels dated compared to competitors",
    ],
  },
  "ai-security": {
    headline: "Sound familiar?",
    painPoints: [
      "We deployed AI but haven't tested for attacks",
      "Our security team doesn't understand AI risks",
      "We're not sure what data our models leak",
      "Compliance is asking questions we can't answer",
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
