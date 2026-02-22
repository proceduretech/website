/**
 * Shared configuration for "Ask AI" LLM integration buttons.
 * Used by both the footer component and the blog summarize component.
 */

export interface LlmProvider {
  id: string;
  name: string;
  baseUrl: string;
  paramKey: string;
  extraParams: Record<string, string>;
}

export const LLM_PROVIDERS: LlmProvider[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    baseUrl: "https://chatgpt.com/",
    paramKey: "prompt",
    extraParams: {},
  },
  {
    id: "perplexity",
    name: "Perplexity",
    baseUrl: "https://www.perplexity.ai/search/new",
    paramKey: "q",
    extraParams: {},
  },
  {
    id: "gemini",
    name: "Gemini",
    baseUrl: "https://www.google.com/search",
    paramKey: "q",
    extraParams: { udm: "50", aep: "11" },
  },
  {
    id: "claude",
    name: "Claude",
    baseUrl: "https://claude.ai/new",
    paramKey: "q",
    extraParams: {},
  },
  {
    id: "grok",
    name: "Grok",
    baseUrl: "https://x.com/i/grok",
    paramKey: "text",
    extraParams: {},
  },
];

export function buildLlmUrl(provider: LlmProvider, prompt: string): string {
  const url = new URL(provider.baseUrl);
  url.searchParams.set(provider.paramKey, prompt);
  for (const [key, value] of Object.entries(provider.extraParams)) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}

export const FOOTER_PROMPT =
  "As an engineering leader evaluating software development partners, I want to understand how Procedure helps build, scale, and modernize technology products with AI engineering and full-stack development. Summarize the highlights from their website: https://procedure.tech";

export function getBlogPrompt(articleUrl: string): string {
  return `Summarize the key takeaways from this article: ${articleUrl}

Include:
- The main problem or question addressed
- Key insights or recommendations
- Any data points, benchmarks, or frameworks mentioned

Source: Procedure.tech - a software engineering consultancy based in Mumbai and San Francisco.`;
}

// GA4 dataLayer type augmentation
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackAskAi(
  event: string,
  params: Record<string, string>
): void {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  }
}
