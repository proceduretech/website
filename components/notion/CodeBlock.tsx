"use client";

import { useState, useEffect } from "react";
import { codeToHtml } from "shiki";

interface NotionCodeBlockProps {
  code: string;
  language?: string;
}

// Map Notion language names to Shiki language names
function mapLanguage(lang?: string): string {
  if (!lang) return "plaintext";
  const langMap: Record<string, string> = {
    "plain text": "plaintext",
    javascript: "javascript",
    typescript: "typescript",
    python: "python",
    bash: "bash",
    shell: "shell",
    json: "json",
    html: "html",
    css: "css",
    sql: "sql",
    yaml: "yaml",
    markdown: "markdown",
    java: "java",
    c: "c",
    "c++": "cpp",
    go: "go",
    rust: "rust",
  };
  return langMap[lang.toLowerCase()] || lang.toLowerCase();
}

/**
 * Code block component with Gruvbox theme and copy functionality
 */
export function NotionCodeBlock({ code, language }: NotionCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null);

  const displayLanguage = language || "plaintext";
  const mappedLang = mapLanguage(language);

  // Highlight code on mount
  useEffect(() => {
    async function highlight() {
      try {
        const html = await codeToHtml(code, {
          lang: mappedLang,
          themes: {
            dark: "gruvbox-dark-soft",
            light: "gruvbox-light-soft",
          },
          defaultColor: false,
        });
        setHighlightedHtml(html);
      } catch {
        // Fallback to plaintext if language not supported
        const html = await codeToHtml(code, {
          lang: "plaintext",
          themes: {
            dark: "gruvbox-dark-soft",
            light: "gruvbox-light-soft",
          },
          defaultColor: false,
        });
        setHighlightedHtml(html);
      }
    }
    highlight();
  }, [code, mappedLang]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <figure className="my-8 relative group">
      {/* Language label */}
      <div
        className="inline-block px-3 py-1.5 text-xs font-mono text-text-muted rounded-t-lg border border-b-0"
        style={{
          backgroundColor: "var(--color-code-title)",
          borderColor: "var(--color-code-border)",
        }}
      >
        {displayLanguage}
      </div>

      {/* Code content */}
      <div
        className="relative overflow-x-auto rounded-lg rounded-tl-none border"
        style={{
          backgroundColor: "var(--color-code-title)",
          borderColor: "var(--color-code-border)",
        }}
      >
        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-muted hover:text-text-primary border border-border rounded-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
          style={{ backgroundColor: "var(--color-code-title)" }}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg
                className="w-4 h-4 text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>

        {/* Syntax highlighted code */}
        {highlightedHtml ? (
          <div
            className="notion-code-block [&_pre]:m-0! [&_pre]:p-4 [&_pre]:bg-transparent! [&_code]:text-sm [&_code]:leading-[1.75] [&_code]:bg-transparent!"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        ) : (
          // Loading/fallback state
          <pre className="p-4 m-0 bg-transparent">
            <code className="text-sm leading-[1.75] font-mono text-(--color-prose-pre-code)">
              {code}
            </code>
          </pre>
        )}
      </div>
    </figure>
  );
}
