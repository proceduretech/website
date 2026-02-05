"use client";

import { useEffect, useRef } from "react";

// Production domains where analytics should fire
const PRODUCTION_DOMAINS = ["procedure.tech", "www.procedure.tech"];

// GA4 and GTM IDs
const GA_ID = "G-2KW21KL401";
const GTM_ID = "GTM-KD7CJ8RC";
const CLARITY_ID = "t4e6b4g83o";

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
 * Analytics wrapper that only loads GA4, GTM, and Clarity on production domains.
 * Prevents analytics from firing on deploy previews and localhost.
 */
export function Analytics() {
  const isLoadedRef = useRef(false);

  useEffect(() => {
    const isProd = isProductionDomain();

    if (!isProd) {
      console.log(
        `[Analytics] Skipped on non-production domain: ${window.location.hostname}`
      );
      return;
    }

    // Prevent double-loading
    if (isLoadedRef.current) return;
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

    console.log("[Analytics] Loaded on production domain");
  }, []);

  return null;
}
