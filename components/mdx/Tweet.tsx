"use client";

import { useEffect, useRef, useState } from "react";

interface TweetProps {
  id: string;
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTweet: (
          id: string,
          container: HTMLElement,
          options?: Record<string, unknown>,
        ) => Promise<HTMLElement>;
      };
    };
  }
}

export function Tweet({ id }: TweetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadTwitterWidget = async () => {
      // Load Twitter widget script if not already loaded
      if (!window.twttr) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);

        await new Promise<void>((resolve, reject) => {
          script.onload = () => resolve();
          script.onerror = () =>
            reject(new Error("Failed to load Twitter widget"));
        });
      }

      // Create the tweet
      if (containerRef.current && window.twttr) {
        try {
          containerRef.current.innerHTML = "";
          await window.twttr.widgets.createTweet(id, containerRef.current, {
            theme: "dark",
            dnt: true,
            align: "center",
          });
          setIsLoading(false);
        } catch {
          setError(true);
          setIsLoading(false);
        }
      }
    };

    loadTwitterWidget();
  }, [id]);

  if (error) {
    return (
      <div className="my-8 p-6 rounded-xl border border-border bg-surface-elevated text-center">
        <p className="text-text-muted">Failed to load tweet</p>
        <a
          href={`https://twitter.com/i/status/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-highlight hover:underline mt-2 inline-block"
        >
          View on Twitter
        </a>
      </div>
    );
  }

  return (
    <div className="my-8 flex justify-center">
      {isLoading && (
        <div className="p-6 rounded-xl border border-border bg-surface-elevated animate-pulse">
          <div className="w-[550px] max-w-full h-[200px] flex items-center justify-center">
            <svg
              className="w-8 h-8 text-text-muted animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        className={`[&_.twitter-tweet]:!mx-0 ${isLoading ? "hidden" : ""}`}
      />
    </div>
  );
}
