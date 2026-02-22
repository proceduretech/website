"use client";

import { useEffect, useRef, useCallback } from "react";

// Production domains where analytics should fire
const PRODUCTION_DOMAINS = ["procedure.tech", "www.procedure.tech"];

// GA4 and GTM IDs
const GA_ID = "G-2KW21KL401";
const GTM_ID = "GTM-KD7CJ8RC";
const CLARITY_ID = "t4e6b4g83o";

// Delay (ms) before loading analytics scripts.
// Pushes heavy 3rd-party JS (GTM ~865ms, Clarity ~236ms main-thread time)
// past the Core Web Vitals measurement window so they don't impact LCP/TBT.
const ANALYTICS_DELAY_MS = 3500;

/**
 * Check if current hostname is a production domain.
 * Returns false for:
 * - Deploy previews (*.pages.dev, *.vercel.app, *.netlify.app)
 * - Localhost development
 * - Any non-production domain
 */
function isProductionDomain(): boolean {
  if (typeof window === "undefined") return false;
  return PRODUCTION_DOMAINS.includes(window.location.hostname);
}

/**
 * Check if the user has consented to analytics cookies.
 * Default behavior is opt-in (track all cookies).
 * Returns false only if user explicitly disabled analytics.
 */
function hasAnalyticsConsent(): boolean {
  try {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) return true; // No choice made yet = default opt-in
    const prefs = JSON.parse(consent);
    return prefs.analytics !== false;
  } catch {
    return true;
  }
}

/**
 * Schedule a callback when the browser is idle, with a timeout fallback.
 * Uses requestIdleCallback where available, falls back to setTimeout.
 */
function whenIdle(fn: () => void, timeoutMs: number): number {
  if (typeof requestIdleCallback === "function") {
    return requestIdleCallback(fn, { timeout: timeoutMs }) as unknown as number;
  }
  return window.setTimeout(fn, timeoutMs);
}

function cancelIdle(id: number): void {
  if (typeof cancelIdleCallback === "function") {
    cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}

/**
 * Analytics wrapper that only loads GA4, GTM, and Clarity on production domains
 * AND when the user has consented to analytics cookies.
 *
 * Scripts are deferred until the browser is idle (via requestIdleCallback)
 * with a minimum delay of ANALYTICS_DELAY_MS to avoid impacting CWV.
 *
 * Listens for the "cookie-consent-updated" custom event dispatched by
 * CookieBanner so scripts load after consent is granted
 * without requiring a page reload.
 */
export function Analytics() {
  const isLoadedRef = useRef(false);

  const loadScripts = useCallback(() => {
    if (!isProductionDomain()) return;
    if (isLoadedRef.current) return;
    if (!hasAnalyticsConsent()) return;

    isLoadedRef.current = true;

    // Load GTM
    const gtmScript = document.createElement("script");
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `;
    document.head.appendChild(gtmScript);

    // Load GA4
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(gaScript);

    const gaConfigScript = document.createElement("script");
    gaConfigScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(gaConfigScript);

    // Load Microsoft Clarity
    const clarityScript = document.createElement("script");
    clarityScript.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${CLARITY_ID}");
    `;
    document.head.appendChild(clarityScript);
  }, []);

  useEffect(() => {
    if (!isProductionDomain()) return;

    // Defer analytics loading until the browser is idle AND past the CWV window.
    // This prevents GTM/GA4/Clarity from competing with LCP/FCP paint
    // and reduces Total Blocking Time by ~865ms+ (GTM alone).
    let idleId: number;
    const timerId = window.setTimeout(() => {
      idleId = whenIdle(loadScripts, 1000);
    }, ANALYTICS_DELAY_MS);

    // Listen for consent changes from CookieBanner
    const handleConsentUpdate = () => {
      // On consent update, also defer to avoid blocking interaction
      whenIdle(loadScripts, 1000);
    };
    window.addEventListener("cookie-consent-updated", handleConsentUpdate);

    return () => {
      clearTimeout(timerId);
      if (idleId !== undefined) cancelIdle(idleId);
      window.removeEventListener("cookie-consent-updated", handleConsentUpdate);
    };
  }, [loadScripts]);

  return null;
}
