"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface KekaJobsEmbedProps {
  className?: string;
}

// Extend Window interface for Keka config
declare global {
  interface Window {
    khConfig?: {
      identifier: string;
      domain: string;
      targetContainer: string;
    };
  }
}

export function KekaJobsEmbed({ className = "" }: KekaJobsEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up the Keka config
    window.khConfig = {
      identifier: "8f3224db-5bee-4b3f-825a-4138f9138f14",
      domain: "https://procedure.keka.com/careers/",
      targetContainer: "#khembedjobs",
    };

    // Set a timeout to hide loading state even if script doesn't trigger a callback
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      // Clean up config on unmount
      delete window.khConfig;
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Inject scoped styles for Keka embed - forces light theme */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Light mode island for Keka embed */
            .keka-light-wrapper {
              background-color: #ffffff !important;
              color: #1a1a1a !important;
              color-scheme: light !important;
              border-radius: 1rem;
              padding: 1.5rem;
              padding-bottom: 1rem;
              isolation: isolate;
              overflow: hidden;
            }

            /* Hide Keka footer branding to fix alignment */
            .keka-light-wrapper footer,
            .keka-light-wrapper [class*="footer"],
            .keka-light-wrapper [class*="Footer"],
            .keka-light-wrapper [class*="powered"],
            .keka-light-wrapper [class*="Powered"] {
              display: none !important;
            }

            /* Force all text to be dark */
            .keka-light-wrapper,
            .keka-light-wrapper *,
            .keka-light-wrapper *::before,
            .keka-light-wrapper *::after {
              color: #1a1a1a !important;
              border-color: #e5e5e5 !important;
            }

            /* Fix placeholder text */
            .keka-light-wrapper input::placeholder,
            .keka-light-wrapper textarea::placeholder {
              color: #888888 !important;
            }

            /* Fix inputs and selects */
            .keka-light-wrapper input,
            .keka-light-wrapper select,
            .keka-light-wrapper textarea {
              background-color: #f5f5f5 !important;
              color: #1a1a1a !important;
              border: 1px solid #e0e0e0 !important;
            }

            /* Fix buttons */
            .keka-light-wrapper button {
              background-color: #f0f0f0 !important;
              color: #1a1a1a !important;
            }

            /* Fix links */
            .keka-light-wrapper a {
              color: #0a7a84 !important;
            }

            .keka-light-wrapper a:hover {
              color: #086872 !important;
            }

            /* Fix SVG icons */
            .keka-light-wrapper svg {
              color: #666666 !important;
            }

            /* Job cards background */
            .keka-light-wrapper > div,
            .keka-light-wrapper [class*="job"],
            .keka-light-wrapper [class*="card"],
            .keka-light-wrapper [class*="item"],
            .keka-light-wrapper [class*="list"] {
              background-color: #ffffff !important;
            }

            /* Secondary/muted text */
            .keka-light-wrapper [class*="secondary"],
            .keka-light-wrapper [class*="muted"],
            .keka-light-wrapper [class*="gray"],
            .keka-light-wrapper [class*="grey"],
            .keka-light-wrapper small,
            .keka-light-wrapper .text-sm {
              color: #666666 !important;
            }

            /* Headings */
            .keka-light-wrapper h1,
            .keka-light-wrapper h2,
            .keka-light-wrapper h3,
            .keka-light-wrapper h4,
            .keka-light-wrapper h5,
            .keka-light-wrapper h6 {
              color: #1a1a1a !important;
            }

            /* Badge/pill styles */
            .keka-light-wrapper [class*="badge"],
            .keka-light-wrapper [class*="pill"],
            .keka-light-wrapper [class*="tag"],
            .keka-light-wrapper [class*="chip"] {
              background-color: #e8f5f5 !important;
              color: #0a7a84 !important;
            }
          `,
        }}
      />

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-16">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
            <p className="text-text-secondary text-sm">
              Loading open positions...
            </p>
          </div>
        </div>
      )}

      {/* Light mode wrapper for Keka embed */}
      <div
        className="keka-light-wrapper"
        style={{
          backgroundColor: "#ffffff",
          color: "#1a1a1a",
          colorScheme: "light",
          borderRadius: "1rem",
          padding: "1.5rem",
          overflow: "hidden",
        }}
      >
        {/* Keka Embed Target Container */}
        <div
          id="khembedjobs"
          className={isLoading ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}
          style={{ colorScheme: "light" }}
        />
      </div>

      {/* Keka Embed Script */}
      <Script
        src="https://procedure.keka.com/careers/api/embedjobs/js/8f3224db-5bee-4b3f-825a-4138f9138f14"
        strategy="lazyOnload"
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />

      {/* Fallback link */}
      <div className="mt-6 text-center">
        <a
          href="https://procedure.keka.com/careers/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-light transition-colors"
        >
          View on Keka Careers Portal
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
