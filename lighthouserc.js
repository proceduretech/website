module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/about",
        "http://localhost:3000/services/enterprise",
        "http://localhost:3000/contact",
        "http://localhost:3000/case-studies",
        "http://localhost:3000/expertise/llm-applications",
        "http://localhost:3000/industries/healthcare",
      ],
      startServerCommand: "npm run start",
      startServerReadyPattern: "Ready",
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
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
