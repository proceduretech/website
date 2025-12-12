"use client";

import { useState, useRef, ReactNode } from "react";

interface PreProps {
  children: ReactNode;
  "data-language"?: string;
  "data-theme"?: string;
}

export function Pre({ children, "data-language": language, ...props }: PreProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = async () => {
    const code = preRef.current?.textContent || "";
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      {/* Language badge */}
      {language && (
        <div className="absolute top-0 left-4 px-2 py-1 text-xs font-mono text-text-muted bg-surface-elevated border border-border border-b-0 rounded-t-md -translate-y-full">
          {language}
        </div>
      )}

      {/* Copy button */}
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-text-muted bg-surface-elevated/80 hover:bg-surface-elevated border border-border rounded-md opacity-0 group-hover:opacity-100 transition-all z-10"
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <svg
              className="w-3.5 h-3.5 text-green-400"
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
            <span className="text-green-400">Copied!</span>
          </>
        ) : (
          <>
            <svg
              className="w-3.5 h-3.5"
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

      {/* Code block */}
      <pre
        ref={preRef}
        className="overflow-x-auto rounded-xl bg-[#22272e] p-4 text-sm border-none"
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
