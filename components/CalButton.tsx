"use client";

import { useEffect, ReactNode } from "react";
import { getCalApi } from "@calcom/embed-react";

interface CalButtonProps {
  calLink?: string;
  children: ReactNode;
  className?: string;
}

export function CalButton({
  calLink = "ulhas/intro",
  children,
  className,
}: CalButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: {
            "cal-bg": "#0F172A",
            "cal-bg-emphasis": "#1E293B",
            "cal-border": "#334155",
            "cal-border-emphasis": "#475569",
            "cal-border-subtle": "#1E293B",
            "cal-text": "#E5E7EB",
            "cal-text-emphasis": "#F9FAFB",
            "cal-text-muted": "#9CA3AF",
            "cal-text-subtle": "#6B7280",
            "cal-brand": "#14B8A6",
            "cal-brand-emphasis": "#0D9488",
            "cal-brand-text": "#FFFFFF",
          },
          dark: {
            "cal-bg": "#0F172A",
            "cal-bg-emphasis": "#1E293B",
            "cal-border": "#334155",
            "cal-border-emphasis": "#475569",
            "cal-border-subtle": "#1E293B",
            "cal-text": "#E5E7EB",
            "cal-text-emphasis": "#F9FAFB",
            "cal-text-muted": "#9CA3AF",
            "cal-text-subtle": "#6B7280",
            "cal-brand": "#14B8A6",
            "cal-brand-emphasis": "#0D9488",
            "cal-brand-text": "#FFFFFF",
          },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <button
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      className={className}
    >
      {children}
    </button>
  );
}
