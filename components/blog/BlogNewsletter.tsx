"use client";

import { useState } from "react";
import { m } from "framer-motion";

interface BlogNewsletterProps {
  variant?: "card" | "fullwidth";
}

export function BlogNewsletter({ variant = "card" }: BlogNewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call - replace with actual newsletter signup
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  if (variant === "fullwidth") {
    return (
      <section className="relative py-16 sm:py-20 bg-surface overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5" />
        <div className="absolute -top-20 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 left-1/4 w-[300px] h-[300px] bg-accent-secondary/10 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-6 h-6 text-accent-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Engineering insights. No spam. No fluff.
            </h2>
            <p className="text-text-secondary mb-8">
              Get weekly insights from our engineering team. Deep technical
              analysis on emerging AI patterns, production incidents, and
              lessons learned.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-surface border border-border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                disabled={status === "loading" || status === "success"}
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-6 py-3 bg-cta text-cta-text font-semibold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-cta/25 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? "Subscribing..."
                  : status === "success"
                    ? "Subscribed!"
                    : "Subscribe"}
              </button>
            </form>

            <p className="text-xs text-text-muted mt-4">
              We respect your inbox. Unsubscribe anytime. No third-party
              sharing.
            </p>
          </m.div>
        </div>
      </section>
    );
  }

  // Card variant (for inline in grid)
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-accent/10 to-accent-secondary/10 border border-accent/20 h-full flex flex-col justify-center"
    >
      {/* Decorative orbs */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-[60px]" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-secondary/15 rounded-full blur-[50px]" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-5">
          <svg
            className="w-6 h-6 text-accent-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-text-primary mb-2">
          Stay ahead of AI trends
        </h3>
        <p className="text-sm text-text-secondary mb-6">
          Get weekly insights from our engineering team. No spam, unsubscribe
          anytime.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-surface border border-border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-sm"
            disabled={status === "loading" || status === "success"}
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-4 py-3 bg-cta text-cta-text font-semibold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-cta/25 flex-shrink-0 disabled:opacity-50 text-sm"
          >
            {status === "loading"
              ? "..."
              : status === "success"
                ? "Done!"
                : "Subscribe"}
          </button>
        </form>

        <p className="text-xs text-text-muted mt-4">We respect your privacy.</p>
      </div>
    </m.div>
  );
}
