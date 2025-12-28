"use client";

import { Tweet } from "react-tweet";
import "react-tweet/theme.css";

/**
 * Extract tweet ID from Twitter/X URL
 */
function getTweetId(url: string): string | null {
  const match = url.match(/(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)/);
  return match ? match[1] : null;
}

interface TwitterEmbedReactTweetProps {
  url: string;
}

/**
 * Twitter embed using react-tweet library
 * More performant, includes media support, and better styling
 */
export function TwitterEmbedReactTweet({ url }: TwitterEmbedReactTweetProps) {
  const tweetId = getTweetId(url);

  if (!tweetId) {
    // Fallback link card if URL is invalid
    return (
      <div className="my-6 sm:my-8 flex justify-center px-4 sm:px-0">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-[550px] p-4 rounded-xl border border-border bg-surface-elevated hover:border-accent/30 transition-colors group"
          aria-label={`View tweet on X: ${url}`}
        >
          <div className="flex items-center gap-3">
            <div
              className="shrink-0 w-10 h-10 rounded-lg bg-black/10 flex items-center justify-center"
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5 text-text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-(--color-prose-headings) truncate group-hover:text-accent-light transition-colors">
                View post on X
              </p>
              <p className="text-xs text-text-muted truncate">{url}</p>
            </div>
            <svg
              className="w-4 h-4 text-text-muted shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </a>
      </div>
    );
  }

  return (
    <div className="my-6 sm:my-8 flex justify-center px-4 sm:px-0">
      <div className="w-full max-w-[550px] [&_.react-tweet]:w-full">
        <Tweet id={tweetId} />
      </div>
    </div>
  );
}
