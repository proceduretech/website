"use client";

import { CalInline } from "@/components/CalInline";

/**
 * Internal test page for Cal.com widget integration
 * Used for testing GA4/GTM event tracking
 * NOT linked from anywhere in the site
 */
export default function CalTestPage() {
  return (
    <main className="min-h-screen bg-base">
      {/* Header */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-xs font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full mb-4">
            Internal Testing Only
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
            Cal.com Widget Test
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            This page is for internal testing of Cal.com widget integration and
            GA4/GTM event tracking. Not indexed by search engines.
          </p>
        </div>

        {/* Cal.com Inline Embed Container */}
        <div className="bg-surface-elevated rounded-2xl border border-border p-4 sm:p-6">
          <CalInline
            calLink="chetand/15min"
            className="min-h-[600px]"
          />
        </div>

        {/* Debug Info */}
        <div className="mt-8 p-4 bg-surface rounded-lg border border-border">
          <h2 className="text-sm font-medium text-text-primary mb-2">
            Debug Info
          </h2>
          <ul className="text-xs text-text-muted space-y-1">
            <li>
              <span className="text-text-secondary">Cal Link:</span>{" "}
              chetand/15min
            </li>
            <li>
              <span className="text-text-secondary">Embed Type:</span> Inline
            </li>
            <li>
              <span className="text-text-secondary">Theme:</span> Dark
            </li>
            <li>
              <span className="text-text-secondary">Brand Color:</span> #1D9B69
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
