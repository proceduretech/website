"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/app/i18n/navigation";
import { locales, type Locale } from "../i18n/config";
import { useTheme } from "../context/ThemeContext";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const { config } = useTheme();

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-white p-1">
      {locales.map((loc) => {
        const isActive = locale === loc;
        return (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            className="rounded-full px-3 py-1 text-xs font-medium transition-all duration-200"
            style={{
              backgroundColor: isActive
                ? `rgba(${config.accentColorRgb}, 0.1)`
                : "transparent",
              color: isActive ? config.accentColor : "var(--muted)",
            }}
          >
            {loc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
