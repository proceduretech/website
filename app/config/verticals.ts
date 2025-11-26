export type Vertical = "ai-engineering" | "software" | "design" | "ai-security";

export interface VerticalConfig {
  id: Vertical;
  label: string;
  shortLabel: string;
  tagline: string;
  description: string;
  // Primary accent color
  accentColor: string;
  accentColorRgb: string;
  // Secondary color (complementary or analogous)
  secondaryColor: string;
  secondaryColorRgb: string;
  // Tertiary color (for additional accents)
  tertiaryColor: string;
  tertiaryColorRgb: string;
}

export const verticals: Record<Vertical, VerticalConfig> = {
  "ai-engineering": {
    id: "ai-engineering",
    label: "AI Engineering",
    shortLabel: "AI Eng",
    tagline: "We make AI work in production",
    description:
      "Most AI projects die between demo and deployment. We build the infrastructure, pipelines, and integrations that make AI systems reliable at scale.",
    // Teal primary with analogous blue-cyan palette
    accentColor: "#14b8a6",
    accentColorRgb: "20, 184, 166",
    secondaryColor: "#0ea5e9", // Sky blue
    secondaryColorRgb: "14, 165, 233",
    tertiaryColor: "#06b6d4", // Cyan
    tertiaryColorRgb: "6, 182, 212",
  },
  software: {
    id: "software",
    label: "Software Engineering",
    shortLabel: "Software",
    tagline: "Software built for the next decade",
    description:
      "We engineer systems designed for change. Clean architecture, pragmatic testing, and infrastructure that accelerates your team instead of slowing it down.",
    // Green primary with blue-emerald analogous palette
    accentColor: "#22c55e",
    accentColorRgb: "34, 197, 94",
    secondaryColor: "#3b82f6", // Blue
    secondaryColorRgb: "59, 130, 246",
    tertiaryColor: "#10b981", // Emerald
    tertiaryColorRgb: "16, 185, 129",
  },
  design: {
    id: "design",
    label: "Design",
    shortLabel: "Design",
    tagline: "Design that drives business outcomes",
    description:
      "We don't design for awards. We design interfaces that reduce friction, increase adoption, and move the metrics your business cares about.",
    // Purple primary with pink-violet analogous palette
    accentColor: "#a855f7",
    accentColorRgb: "168, 85, 247",
    secondaryColor: "#ec4899", // Pink
    secondaryColorRgb: "236, 72, 153",
    tertiaryColor: "#8b5cf6", // Violet
    tertiaryColorRgb: "139, 92, 246",
  },
  "ai-security": {
    id: "ai-security",
    label: "AI Security",
    shortLabel: "AI Sec",
    tagline: "Secure your AI before others exploit it",
    description:
      "AI systems have attack surfaces your security team hasn't seen. We find the vulnerabilities—prompt injection, data extraction, adversarial attacks—before bad actors do.",
    // Orange primary with amber-red warm palette
    accentColor: "#f97316",
    accentColorRgb: "249, 115, 22",
    secondaryColor: "#ef4444", // Red
    secondaryColorRgb: "239, 68, 68",
    tertiaryColor: "#f59e0b", // Amber
    tertiaryColorRgb: "245, 158, 11",
  },
};

export const verticalIds = Object.keys(verticals) as Vertical[];
