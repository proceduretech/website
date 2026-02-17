"use client";

import {
  SiOpenai,
  SiPerplexity,
  SiGooglegemini,
  SiClaude,
} from "@icons-pack/react-simple-icons";
import {
  LLM_PROVIDERS,
  buildLlmUrl,
  getBlogPrompt,
  trackAskAi,
} from "./llm-config";

const ICON_SIZE = 16;

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

// Background colors for the blog pill buttons (subtle, brand-tinted)
const llmBgColors: Record<string, string> = {
  chatgpt: "bg-[#10A37F]/10 hover:bg-[#10A37F]/20 border-[#10A37F]/20",
  perplexity: "bg-[#1FB8CD]/10 hover:bg-[#1FB8CD]/20 border-[#1FB8CD]/20",
  gemini: "bg-[#8E75B2]/10 hover:bg-[#8E75B2]/20 border-[#8E75B2]/20",
  claude: "bg-[#D97757]/10 hover:bg-[#D97757]/20 border-[#D97757]/20",
  grok: "bg-white/5 hover:bg-white/10 border-white/10",
};

interface SummarizeWithAiProps {
  slug: string;
  title: string;
}

export function SummarizeWithAi({ slug, title }: SummarizeWithAiProps) {
  const articleUrl = `https://procedure.tech/blogs/${slug}`;
  const prompt = getBlogPrompt(articleUrl);

  return (
    <div className="mb-8">
      <p className="text-sm text-text-muted font-display mb-3">
        Read summarized version with
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {LLM_PROVIDERS.map((provider) => (
          <a
            key={provider.id}
            href={buildLlmUrl(provider, prompt)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackAskAi("summarize_with_ai_click", {
                llm_provider: provider.id,
                article_url: articleUrl,
                article_title: title,
              })
            }
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-text-secondary border transition-colors ${llmBgColors[provider.id]}`}
          >
            {llmIcons[provider.id]}
            {provider.name}
          </a>
        ))}
      </div>
    </div>
  );
}
