import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./app/i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  // Don't add locale prefix for the default locale (English)
  localePrefix: "as-needed",
});

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - _next (Next.js internals)
  // - Static files (images, fonts, etc.)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
