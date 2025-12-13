/**
 * Technology Icons using Simple Icons
 *
 * This module provides a mapping from technology names to their Simple Icons.
 * Icons are imported individually to ensure tree-shaking works properly.
 *
 * Usage:
 *   import { getTechIcon, TechIcon } from '@/lib/tech-icons';
 *
 *   // Get icon component by name
 *   const Icon = getTechIcon('React');
 *   if (Icon) <Icon size={24} />
 *
 *   // Or use the TechIcon component directly
 *   <TechIcon name="React" size={24} />
 */

import { ComponentType } from "react";

// AI/ML Platforms
import {
  SiOpenai,
  SiAnthropic,
  SiMeta,
  SiHuggingface,
  SiGoogle,
} from "@icons-pack/react-simple-icons";

// AI/ML Frameworks & Tools
import {
  SiLangchain,
  SiPytorch,
  SiTensorflow,
  SiMlflow,
  SiWeightsandbiases,
} from "@icons-pack/react-simple-icons";

// Cloud Platforms (Note: AWS/Azure not available due to trademark)
import { SiGooglecloud } from "@icons-pack/react-simple-icons";

// Infrastructure & DevOps
import {
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiPulumi,
  SiHelm,
  SiIstio,
  SiPrometheus,
  SiGrafana,
  SiDatadog,
  SiPagerduty,
  SiArgo,
} from "@icons-pack/react-simple-icons";

// Programming Languages & Frameworks
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxt,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiRust,
  SiSwift,
  SiKotlin,
  SiIos,
  SiAndroid,
  SiApple,
  SiFlutter,
} from "@icons-pack/react-simple-icons";

// Databases & Data Infrastructure
import {
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiElasticsearch,
  SiGraphql,
} from "@icons-pack/react-simple-icons";

// Design & Collaboration Tools
import {
  SiFigma,
  SiStorybook,
  SiFramer,
  SiRadixui,
  SiShadcnui,
} from "@icons-pack/react-simple-icons";

// Testing & QA (Note: Playwright not available)
import {
  SiJest,
  SiCypress,
  SiPytest,
  SiSelenium,
} from "@icons-pack/react-simple-icons";

// Other Tools & Platforms
import {
  SiVercel,
  SiGithub,
  SiGitlab,
  SiFirebase,
  SiExpo,
  SiTailwindcss,
  SiOpentelemetry,
} from "@icons-pack/react-simple-icons";

// Security
import { SiOwasp } from "@icons-pack/react-simple-icons";

// Icon props type
interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
}

// Map of technology names to their icon components
// Using lowercase keys for case-insensitive matching
const iconMap: Record<string, ComponentType<IconProps>> = {
  // AI/ML Platforms
  openai: SiOpenai,
  anthropic: SiAnthropic,
  claude: SiAnthropic,
  meta: SiMeta,
  llama: SiMeta,
  huggingface: SiHuggingface,
  "hugging face": SiHuggingface,
  google: SiGoogle,
  gemini: SiGoogle,

  // AI/ML Frameworks
  langchain: SiLangchain,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  mlflow: SiMlflow,
  wandb: SiWeightsandbiases,
  "weights & biases": SiWeightsandbiases,
  "weights and biases": SiWeightsandbiases,

  // Cloud Platforms
  gcp: SiGooglecloud,
  "google cloud": SiGooglecloud,
  "google cloud platform": SiGooglecloud,
  "vertex ai": SiGooglecloud,

  // Infrastructure & DevOps
  kubernetes: SiKubernetes,
  k8s: SiKubernetes,
  docker: SiDocker,
  terraform: SiTerraform,
  pulumi: SiPulumi,
  helm: SiHelm,
  istio: SiIstio,
  prometheus: SiPrometheus,
  grafana: SiGrafana,
  datadog: SiDatadog,
  pagerduty: SiPagerduty,
  argocd: SiArgo,
  argo: SiArgo,

  // Languages & Frameworks
  react: SiReact,
  "react native": SiReact,
  "react.js": SiReact,
  reactjs: SiReact,
  next: SiNextdotjs,
  nextjs: SiNextdotjs,
  "next.js": SiNextdotjs,
  vue: SiVuedotjs,
  vuejs: SiVuedotjs,
  "vue.js": SiVuedotjs,
  nuxt: SiNuxt,
  nuxtjs: SiNuxt,
  "nuxt.js": SiNuxt,
  typescript: SiTypescript,
  ts: SiTypescript,
  node: SiNodedotjs,
  nodejs: SiNodedotjs,
  "node.js": SiNodedotjs,
  python: SiPython,
  go: SiGo,
  golang: SiGo,
  rust: SiRust,
  swift: SiSwift,
  kotlin: SiKotlin,
  ios: SiIos,
  android: SiAndroid,
  apple: SiApple,
  flutter: SiFlutter,

  // Databases
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  mongodb: SiMongodb,
  mongo: SiMongodb,
  redis: SiRedis,
  kafka: SiApachekafka,
  "apache kafka": SiApachekafka,
  elasticsearch: SiElasticsearch,
  elastic: SiElasticsearch,
  graphql: SiGraphql,

  // Design Tools
  figma: SiFigma,
  storybook: SiStorybook,
  framer: SiFramer,
  "framer motion": SiFramer,
  radix: SiRadixui,
  "radix ui": SiRadixui,
  shadcn: SiShadcnui,
  "shadcn/ui": SiShadcnui,

  // Testing
  jest: SiJest,
  cypress: SiCypress,
  pytest: SiPytest,
  selenium: SiSelenium,

  // Other
  vercel: SiVercel,
  github: SiGithub,
  gitlab: SiGitlab,
  firebase: SiFirebase,
  expo: SiExpo,
  tailwind: SiTailwindcss,
  "tailwind css": SiTailwindcss,
  tailwindcss: SiTailwindcss,
  opentelemetry: SiOpentelemetry,

  // Security
  owasp: SiOwasp,
  "owasp llm": SiOwasp,
};

/**
 * Get the icon component for a technology name
 * @param name - Technology name (case-insensitive)
 * @returns Icon component or undefined if not found
 */
export function getTechIcon(
  name: string
): ComponentType<IconProps> | undefined {
  return iconMap[name.toLowerCase()];
}

/**
 * Check if an icon exists for a technology
 * @param name - Technology name (case-insensitive)
 */
export function hasTechIcon(name: string): boolean {
  return name.toLowerCase() in iconMap;
}

/**
 * Get all available technology names
 */
export function getAvailableTechNames(): string[] {
  return Object.keys(iconMap);
}

/**
 * TechIcon component - renders an icon for a technology name
 */
interface TechIconProps extends IconProps {
  name: string;
  fallback?: React.ReactNode;
}

export function TechIcon({
  name,
  size = 20,
  color = "currentColor",
  className,
  fallback,
}: TechIconProps) {
  const Icon = getTechIcon(name);

  if (!Icon) {
    // Return fallback or first letter
    if (fallback) return <>{fallback}</>;
    return (
      <span
        className={className}
        style={{
          width: size,
          height: size,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: typeof size === "number" ? size * 0.6 : "0.6em",
          fontWeight: 600,
          textTransform: "uppercase",
        }}
      >
        {name.charAt(0)}
      </span>
    );
  }

  return <Icon size={size} color={color} className={className} />;
}

// Export individual icons for direct use
export {
  // AI/ML
  SiOpenai,
  SiAnthropic,
  SiMeta,
  SiHuggingface,
  SiLangchain,
  SiPytorch,
  SiTensorflow,
  SiMlflow,
  SiWeightsandbiases,
  // Cloud
  SiGooglecloud,
  // DevOps
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiPulumi,
  SiHelm,
  SiIstio,
  SiPrometheus,
  SiGrafana,
  SiDatadog,
  SiPagerduty,
  SiArgo,
  // Languages
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxt,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiRust,
  SiSwift,
  SiKotlin,
  SiIos,
  SiAndroid,
  SiApple,
  SiFlutter,
  // Databases
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiElasticsearch,
  SiGraphql,
  // Design
  SiFigma,
  SiStorybook,
  SiFramer,
  SiRadixui,
  SiShadcnui,
  // Testing
  SiJest,
  SiCypress,
  SiPytest,
  SiSelenium,
  // Other
  SiVercel,
  SiGithub,
  SiGitlab,
  SiFirebase,
  SiExpo,
  SiTailwindcss,
  SiOpentelemetry,
  SiOwasp,
};
