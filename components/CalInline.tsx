"use client";

import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { siteConfig } from "@/lib/site-config";

// Dynamically import Cal component to reduce initial bundle size
const Cal = lazy(() =>
  import("@calcom/embed-react").then((mod) => ({ default: mod.default }))
);

interface CalInlineProps {
  calLink?: string;
  className?: string;
}

// Theme configurations for Cal.com embed
const calThemeConfigs = {
  dark: {
    "cal-bg": "#0A1425",
    "cal-bg-emphasis": "#111F35",
    "cal-border": "#1A2A45",
    "cal-border-emphasis": "#2A3A55",
    "cal-border-subtle": "#111F35",
    "cal-text": "rgba(255, 255, 255, 0.9)",
    "cal-text-emphasis": "rgba(255, 255, 255, 0.95)",
    "cal-text-muted": "rgba(255, 255, 255, 0.65)",
    "cal-text-subtle": "rgba(255, 255, 255, 0.5)",
    "cal-brand": "#1D9B69",
    "cal-brand-emphasis": "#178556",
    "cal-brand-text": "#FFFFFF",
  },
  light: {
    "cal-bg": "#ffffff",
    "cal-bg-emphasis": "#f8fafc",
    "cal-border": "#e2e8f0",
    "cal-border-emphasis": "#cbd5e1",
    "cal-border-subtle": "#f1f5f9",
    "cal-text": "#0f172a",
    "cal-text-emphasis": "#0b1220",
    "cal-text-muted": "#475569",
    "cal-text-subtle": "#94a3b8",
    "cal-brand": "#1D9B69",
    "cal-brand-emphasis": "#178556",
    "cal-brand-text": "#ffffff",
  },
};

export function CalInline({
  calLink = "ulhas/intro",
  className = "",
}: CalInlineProps) {
  const currentTheme = siteConfig.theme;
  const calConfig = calThemeConfigs[currentTheme];
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Lazy load: only render Cal widget when container is in viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Load when element is within 200px of viewport (preload slightly early)
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Initialize Cal API only after widget becomes visible
  useEffect(() => {
    if (!isVisible) return;

    (async function () {
      // Dynamically import getCalApi to keep it in the same chunk as Cal
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi();
      cal("ui", {
        theme: currentTheme,
        cssVarsPerTheme: {
          light: calConfig,
          dark: calConfig,
        },
        hideEventTypeDetails: false,
      });
      setIsLoaded(true);
    })();
  }, [isVisible, currentTheme, calConfig]);

  return (
    <div ref={containerRef} className={`${className} cal-inline-wrapper`}>
      <style jsx global>{`
        /* Hide Cal.com branding footer */
        .cal-inline-wrapper [data-cal-link] + div,
        .cal-inline-wrapper iframe + div,
        .cal-inline-wrapper a[href*="cal.com"]:has(img),
        .cal-inline-wrapper div:has(> a[href*="cal.com"]) {
          display: none !important;
        }
      `}</style>

      {/* Loading placeholder - shown until widget is in view */}
      {!isVisible && (
        <div className="w-full h-full flex items-center justify-center bg-surface-elevated">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-text-muted">Loading calendar...</p>
          </div>
        </div>
      )}

      {/* Cal widget - only rendered after intersection, wrapped in Suspense for lazy loading */}
      {isVisible && (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-surface-elevated">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-3" />
                <p className="text-sm text-text-muted">Loading calendar...</p>
              </div>
            </div>
          }
        >
          <Cal
            calLink={calLink}
            style={{
              width: "100%",
              height: "100%",
              overflow: "scroll",
              opacity: isLoaded ? 1 : 0.5,
              transition: "opacity 0.3s ease-in-out",
            }}
            config={{
              layout: "month_view",
              theme: currentTheme,
            }}
          />
        </Suspense>
      )}
    </div>
  );
}
