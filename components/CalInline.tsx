"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { siteConfig } from "@/lib/site-config";

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

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: currentTheme,
        cssVarsPerTheme: {
          light: calConfig,
          dark: calConfig,
        },
        hideEventTypeDetails: false,
      });
    })();
  }, [currentTheme, calConfig]);

  return (
    <div className={`${className} cal-inline-wrapper`}>
      <style jsx global>{`
        /* Hide Cal.com branding footer */
        .cal-inline-wrapper [data-cal-link] + div,
        .cal-inline-wrapper iframe + div,
        .cal-inline-wrapper a[href*="cal.com"]:has(img),
        .cal-inline-wrapper div:has(> a[href*="cal.com"]) {
          display: none !important;
        }
      `}</style>
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{
          layout: "month_view",
          theme: currentTheme,
        }}
      />
    </div>
  );
}
