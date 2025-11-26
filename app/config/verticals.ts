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
    // Pearl Aqua primary with analogous cool palette
    accentColor: "#47b8ab",
    accentColorRgb: "71, 184, 171",
    secondaryColor: "#0ea5e9", // Sky blue - analogous
    secondaryColorRgb: "14, 165, 233",
    tertiaryColor: "#2dd4bf", // Teal 400 - cyan accent
    tertiaryColorRgb: "45, 212, 191",
  },
  software: {
    id: "software",
    label: "Software Engineering",
    shortLabel: "Software",
    tagline: "Software built for the next decade",
    description:
      "We engineer systems designed for change. Clean architecture, pragmatic testing, and infrastructure that accelerates your team instead of slowing it down.",
    // Jasmine (golden yellow) primary with warm analogous palette
    accentColor: "#edb312",
    accentColorRgb: "237, 179, 18",
    secondaryColor: "#d97706", // Amber 600 - deeper warm
    secondaryColorRgb: "217, 119, 6",
    tertiaryColor: "#fbbf24", // Amber 400 - bright gold
    tertiaryColorRgb: "251, 191, 36",
  },
  design: {
    id: "design",
    label: "Design",
    shortLabel: "Design",
    tagline: "Design that drives business outcomes",
    description:
      "We don't design for awards. We design interfaces that reduce friction, increase adoption, and move the metrics your business cares about.",
    // Space Indigo primary with analogous purple-pink palette
    accentColor: "#6a58a7",
    accentColorRgb: "106, 88, 167",
    secondaryColor: "#ec4899", // Pink 500 - vibrant accent
    secondaryColorRgb: "236, 72, 153",
    tertiaryColor: "#a78bfa", // Violet 400 - lighter purple
    tertiaryColorRgb: "167, 139, 250",
  },
  "ai-security": {
    id: "ai-security",
    label: "AI Security",
    shortLabel: "AI Sec",
    tagline: "Secure your AI before others exploit it",
    description:
      "AI systems have attack surfaces your security team hasn't seen. We find the vulnerabilities—prompt injection, data extraction, adversarial attacks—before bad actors do.",
    // Princeton Orange primary with warm alert palette
    accentColor: "#ff8000",
    accentColorRgb: "255, 128, 0",
    secondaryColor: "#ef4444", // Red 500 - alert/danger
    secondaryColorRgb: "239, 68, 68",
    tertiaryColor: "#fcd34d", // Amber 300 - warning yellow
    tertiaryColorRgb: "252, 211, 77",
  },
};

export const verticalIds = Object.keys(verticals) as Vertical[];
