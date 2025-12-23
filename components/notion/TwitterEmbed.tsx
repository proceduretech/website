"use client";

import { useEffect, useRef, useState } from "react";

interface TwitterEmbedProps {
  url: string;
}

// Twitter widget types - using module augmentation to avoid conflicts
interface TwitterWidgets {
  widgets: {
    load: (element?: HTMLElement) => void;
    createTweet: (
      tweetId: string,
      element: HTMLElement,
      options?: Record<string, unknown>
    ) => Promise<HTMLElement>;
  };
}

// Access twttr from window without global declaration
const getTwitterWidget = (): TwitterWidgets | undefined => {
  return (window as unknown as { twttr?: TwitterWidgets }).twttr;
};

// Extract tweet ID from URL
function getTweetId(tweetUrl: string): string | null {
  const match = tweetUrl.match(/(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)/);
  return match ? match[1] : null;
}

export function TwitterEmbed({ url }: TwitterEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const tweetId = getTweetId(url);

  useEffect(() => {
    // Skip effect if no valid tweet ID
    if (!tweetId) return;

    let mounted = true;

    const loadTweet = async () => {
      // Load Twitter widget script if not already loaded
      if (!getTwitterWidget()) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;

        try {
          await new Promise<void>((resolve, reject) => {
            script.onload = () => resolve();
            script.onerror = () => reject();
            document.body.appendChild(script);
          });
        } catch {
          if (mounted) {
            setError(true);
            setLoading(false);
          }
          return;
        }
      }

      // Wait for twttr to be ready
      const twttr = getTwitterWidget();
      if (twttr && containerRef.current && mounted) {
        try {
          // Clear container
          containerRef.current.innerHTML = "";

          // Create the tweet
          await twttr.widgets.createTweet(tweetId, containerRef.current, {
            theme: "dark",
            dnt: true,
            align: "center",
          });
          if (mounted) setLoading(false);
        } catch (err) {
          console.error("Failed to load tweet:", err);
          if (mounted) {
            setError(true);
            setLoading(false);
          }
        }
      }
    };

    loadTweet();

    return () => {
      mounted = false;
    };
  }, [tweetId]);

  // Fallback link card if tweet can't be loaded
  if (error || !tweetId) {
    return (
      <div className="my-6 sm:my-8 flex justify-center px-4 sm:px-0">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-[550px] p-4 rounded-xl border border-border bg-surface-elevated hover:border-accent/30 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-black/10 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
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
    <div className="my-6 sm:my-8 overflow-hidden">
      <div className="w-full max-w-full overflow-hidden flex justify-center">
        <div className="w-full max-w-[550px] px-4 sm:px-0">
          {loading && (
            <div className="flex items-center justify-center p-6 sm:p-8 rounded-xl border border-border bg-surface-elevated">
              <div className="animate-pulse flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-text-muted"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-text-muted text-sm sm:text-base">
                  Loading post...
                </span>
              </div>
            </div>
          )}
          <div
            ref={containerRef}
            className="[&_twitter-widget]:max-w-full! [&_iframe]:max-w-full! overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}
