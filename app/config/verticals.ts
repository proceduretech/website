export type Vertical = "ai-engineering" | "software" | "design" | "ai-security";

export interface VerticalConfig {
  id: Vertical;
  label: string;
  shortLabel: string;
  tagline: string;
  description: string;
  accentColor: string;
  accentColorRgb: string;
}

export const verticals: Record<Vertical, VerticalConfig> = {
  "ai-engineering": {
    id: "ai-engineering",
    label: "AI Engineering",
    shortLabel: "AI Eng",
    tagline: "We make AI work in production",
    description:
      "Most AI projects die between demo and deployment. We build the infrastructure, pipelines, and integrations that make AI systems reliable at scale.",
    accentColor: "#14b8a6",
    accentColorRgb: "20, 184, 166",
  },
  software: {
    id: "software",
    label: "Software Engineering",
    shortLabel: "Software",
    tagline: "Software built for the next decade",
    description:
      "We engineer systems designed for change. Clean architecture, pragmatic testing, and infrastructure that accelerates your team instead of slowing it down.",
    accentColor: "#22c55e",
    accentColorRgb: "34, 197, 94",
  },
  design: {
    id: "design",
    label: "Design",
    shortLabel: "Design",
    tagline: "Design that drives business outcomes",
    description:
      "We don't design for awards. We design interfaces that reduce friction, increase adoption, and move the metrics your business cares about.",
    accentColor: "#a855f7",
    accentColorRgb: "168, 85, 247",
  },
  "ai-security": {
    id: "ai-security",
    label: "AI Security",
    shortLabel: "AI Sec",
    tagline: "Secure your AI before others exploit it",
    description:
      "AI systems have attack surfaces your security team hasn't seen. We find the vulnerabilities—prompt injection, data extraction, adversarial attacks—before bad actors do.",
    accentColor: "#f97316",
    accentColorRgb: "249, 115, 22",
  },
};

export const verticalIds = Object.keys(verticals) as Vertical[];
