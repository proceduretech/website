"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/app/i18n/navigation";
import { locales, type Locale } from "../i18n/config";
import { motion } from "framer-motion";

export function TopBanner() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] bg-[#1a1a1a]">
      <div className="mx-auto flex h-8 max-w-6xl items-center justify-end px-4 sm:px-6">
        {/* Language Switcher */}
        <div className="flex items-center gap-0.5">
          {locales.map((loc, index) => {
            const isActive = locale === loc;
            return (
              <span key={loc} className="flex items-center">
                <motion.button
                  onClick={() => switchLocale(loc)}
                  className="relative px-2 py-1 text-xs font-medium tracking-wide transition-all duration-200"
                  style={{
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                  }}
                  whileHover={{ color: "#ffffff" }}
                >
                  {loc.toUpperCase()}
                  {isActive && (
                    <motion.span
                      layoutId="active-locale"
                      className="absolute bottom-0.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-white"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
                {index < locales.length - 1 && (
                  <span className="text-xs text-white/20">|</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
