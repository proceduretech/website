"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useTranslations } from "next-intl";
import { useTheme } from "../context/ThemeContext";

export function CalButton() {
  const { config } = useTheme();
  const t = useTranslations("cta");

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
      className="group inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-4 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
      style={{
        backgroundColor: config.accentColor,
        boxShadow: `0 4px 14px rgba(${config.accentColorRgb}, 0.25), 0 2px 6px rgba(0, 0, 0, 0.08)`,
      }}
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
      {t("bookCall")}
      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  );
}
