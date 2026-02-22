module.exports = {
  ci: {
    collect: {
      // Test critical user paths only for faster CI
      url: [
        "http://localhost:3000/", // Homepage - most important
        "http://localhost:3000/contact-us", // High-intent conversion page
        "http://localhost:3000/services/ai-engineering", // Key service page
      ],
      startServerCommand: "npm run start",
      startServerReadyPattern: "Accepting connections",
      startServerReadyTimeout: 30000,
      // Single run is sufficient for CI checks - saves ~66% time
      // Use numberOfRuns: 3 locally for accurate measurements
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        // CI runners score ~0.64 on homepage due to shared CPU + simulated throttling.
        // Real-world Cloudflare Pages performance is significantly better.
        // Use "warn" so perf regressions are visible but don't block PRs.
        "categories:performance": ["warn", { minScore: 0.6 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["error", { minScore: 0.75 }],
        "categories:seo": ["error", { minScore: 0.9 }],
        "meta-description": "error",
        "document-title": "error",
        "html-has-lang": "error",
        "meta-viewport": "error",
        "image-alt": "error",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
