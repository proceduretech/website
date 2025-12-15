"use client";

import { useState, useRef, useEffect, ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
  filename?: string;
  language?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  caption?: string;
}

export function CodeBlock({
  children,
  filename,
  language,
  showLineNumbers = false,
  caption,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = async () => {
    const code = codeRef.current?.textContent || "";
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
    <figure className="my-8 group">
      {/* Header with filename and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#22272e] border border-border border-b-0 rounded-t-xl">
        <div className="flex items-center gap-3">
          {/* Window controls */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          {/* Filename */}
          {filename && (
            <span className="text-sm text-text-muted font-mono">
              {filename}
            </span>
          )}
          {/* Language badge */}
          {language && !filename && (
            <span className="text-xs text-text-muted uppercase tracking-wider">
              {language}
            </span>
          )}
        </div>
        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-text-muted hover:text-text-primary bg-surface-elevated/50 hover:bg-surface-elevated rounded transition-all"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg
                className="w-4 h-4 text-green-400"
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
      </div>
      {/* Code content */}
      <div
        ref={codeRef}
        className={`relative overflow-x-auto bg-[#22272e] border border-border border-t-0 rounded-b-xl ${
          showLineNumbers ? "[&_pre]:pl-0 [&_code]:grid" : ""
        }`}
      >
        {children}
      </div>
      {/* Caption */}
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
