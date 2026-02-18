"use client";

import { usePathname } from "next/navigation";
import {
  SiOpenai,
  SiPerplexity,
  SiGooglegemini,
  SiClaude,
} from "@icons-pack/react-simple-icons";
import {
  LLM_PROVIDERS,
  buildLlmUrl,
  FOOTER_PROMPT,
  trackAskAi,
} from "./llm-config";

const ICON_SIZE = 18;

const llmIcons: Record<string, React.ReactNode> = {
  chatgpt: <SiOpenai size={ICON_SIZE} color="#10A37F" />,
  perplexity: <SiPerplexity size={ICON_SIZE} color="#1FB8CD" />,
  gemini: <SiGooglegemini size={ICON_SIZE} color="#8E75B2" />,
  claude: <SiClaude size={ICON_SIZE} color="#D97757" />,
  grok: (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.2 2.2a.8.8 0 0 1 1.13 0L12 10.87 20.67 2.2a.8.8 0 1 1 1.13 1.13L13.13 12l8.67 8.67a.8.8 0 1 1-1.13 1.13L12 13.13 3.33 21.8A.8.8 0 1 1 2.2 20.67L10.87 12 2.2 3.33a.8.8 0 0 1 0-1.13Z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="3.5" fill="currentColor" />
    </svg>
  ),
};

export function AskAiFooter() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-4 pb-8 mb-8 border-b border-border">
      <span className="text-sm text-text-secondary font-display whitespace-nowrap">
        Ask AI about Procedure
      </span>
      <div className="flex items-center gap-2">
        {LLM_PROVIDERS.map((provider) => (
          <a
            key={provider.id}
            href={buildLlmUrl(provider, FOOTER_PROMPT)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackAskAi("ask_ai_about_procedure", {
                llm_provider: provider.id,
                page_url: pathname,
              })
            }
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-surface-elevated/60 border border-border/50 text-text-secondary hover:border-accent/40 hover:text-text-primary transition-colors"
            aria-label={`Ask ${provider.name} about Procedure`}
          >
            {llmIcons[provider.id]}
          </a>
        ))}
      </div>
    </div>
  );
}
