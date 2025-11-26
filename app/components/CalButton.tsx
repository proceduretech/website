"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useTheme } from "../context/ThemeContext";

export function CalButton() {
  const { config } = useTheme();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: config.accentColor },
        },
      });
    })();
  }, [config.accentColor]);

  return (
    <button
      data-cal-link="ulhas/intro"
      data-cal-config='{"layout":"month_view"}'
      className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-all hover:scale-[1.02] hover:shadow-lg"
      style={{ backgroundColor: config.accentColor }}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      Book a call with Ulhas
    </button>
  );
}
