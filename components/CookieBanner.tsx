"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX - let the page load first
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const rejectAll = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl">
            <div className="bg-surface-elevated/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl shadow-black/20">
              {!showCustomize ? (
                // Main banner view
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-text-primary mb-1">
                      We value your privacy
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      We use cookies to enhance your browsing experience,
                      analyze site traffic, and personalize content. By clicking
                      &quot;Accept All&quot;, you consent to our use of cookies.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button
                      onClick={() => setShowCustomize(true)}
                      className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                    >
                      Customize
                    </button>
                    <button
                      onClick={rejectAll}
                      className="px-4 py-2.5 text-sm font-medium bg-transparent text-text-primary border border-border hover:border-text-muted rounded-lg transition-all"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-6 py-2.5 text-sm font-semibold bg-cta text-cta-text hover:brightness-110 rounded-lg transition-all shadow-lg shadow-cta/25"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              ) : (
                // Customize view
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-semibold text-text-primary">
                      Cookie Preferences
                    </h3>
                    <button
                      onClick={() => setShowCustomize(false)}
                      className="text-text-muted hover:text-text-primary transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Necessary cookies - always on */}
                    <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-surface/50">
                      <div>
                        <p className="font-medium text-text-primary text-sm">
                          Necessary Cookies
                        </p>
                        <p className="text-xs text-text-muted mt-0.5">
                          Essential for the website to function. Cannot be
                          disabled.
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={true}
                          disabled
                          className="sr-only"
                        />
                        <div className="w-10 h-6 bg-cta/50 rounded-full cursor-not-allowed">
                          <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Analytics cookies */}
                    <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-surface/50">
                      <div>
                        <p className="font-medium text-text-primary text-sm">
                          Analytics Cookies
                        </p>
                        <p className="text-xs text-text-muted mt-0.5">
                          Help us understand how visitors interact with our
                          website.
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setPreferences((p) => ({
                            ...p,
                            analytics: !p.analytics,
                          }))
                        }
                        className="relative"
                      >
                        <div
                          className={`w-10 h-6 rounded-full transition-colors ${
                            preferences.analytics ? "bg-cta" : "bg-border"
                          }`}
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                              preferences.analytics ? "right-1" : "left-1"
                            }`}
                          />
                        </div>
                      </button>
                    </div>

                    {/* Marketing cookies */}
                    <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-surface/50">
                      <div>
                        <p className="font-medium text-text-primary text-sm">
                          Marketing Cookies
                        </p>
                        <p className="text-xs text-text-muted mt-0.5">
                          Used to deliver personalized ads and track campaigns.
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setPreferences((p) => ({
                            ...p,
                            marketing: !p.marketing,
                          }))
                        }
                        className="relative"
                      >
                        <div
                          className={`w-10 h-6 rounded-full transition-colors ${
                            preferences.marketing ? "bg-cta" : "bg-border"
                          }`}
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                              preferences.marketing ? "right-1" : "left-1"
                            }`}
                          />
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={rejectAll}
                      className="px-4 py-2.5 text-sm font-medium bg-transparent text-text-primary border border-border hover:border-text-muted rounded-lg transition-all"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={savePreferences}
                      className="px-6 py-2.5 text-sm font-semibold bg-cta text-cta-text hover:brightness-110 rounded-lg transition-all shadow-lg shadow-cta/25"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
