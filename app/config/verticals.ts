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
    // Pearl Aqua primary with analogous blue-green palette
    accentColor: "#47b8ab",
    accentColorRgb: "71, 184, 171",
    secondaryColor: "#6a58a7", // Space Indigo - analogous cool tone
    secondaryColorRgb: "106, 88, 167",
    tertiaryColor: "#6cc6bb", // Pearl Aqua 400 - lighter teal
    tertiaryColorRgb: "108, 198, 187",
  },
  software: {
    id: "software",
    label: "Software Engineering",
    shortLabel: "Software",
    tagline: "Software built for the next decade",
    description:
      "We engineer systems designed for change. Clean architecture, pragmatic testing, and infrastructure that accelerates your team instead of slowing it down.",
    // Jasmine (golden yellow) primary with split-complementary palette
    accentColor: "#edb312",
    accentColorRgb: "237, 179, 18",
    secondaryColor: "#47b8ab", // Pearl Aqua - split complement
    secondaryColorRgb: "71, 184, 171",
    tertiaryColor: "#f4d171", // Jasmine 300 - lighter gold
    tertiaryColorRgb: "244, 209, 113",
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
    secondaryColor: "#8879b9", // Space Indigo 400 - lighter purple
    secondaryColorRgb: "136, 121, 185",
    tertiaryColor: "#47b8ab", // Pearl Aqua - complementary accent
    tertiaryColorRgb: "71, 184, 171",
  },
  "ai-security": {
    id: "ai-security",
    label: "AI Security",
    shortLabel: "AI Sec",
    tagline: "Secure your AI before others exploit it",
    description:
      "AI systems have attack surfaces your security team hasn't seen. We find the vulnerabilities—prompt injection, data extraction, adversarial attacks—before bad actors do.",
    // Princeton Orange primary with analogous warm palette
    accentColor: "#ff8000",
    accentColorRgb: "255, 128, 0",
    secondaryColor: "#cc6600", // Princeton Orange 600 - deeper orange
    secondaryColorRgb: "204, 102, 0",
    tertiaryColor: "#edb312", // Jasmine - analogous gold
    tertiaryColorRgb: "237, 179, 18",
  },
};

export const verticalIds = Object.keys(verticals) as Vertical[];
