import Link from "next/link";

// Server component - renders immediately as HTML for fast LCP
export function HeroContent() {
  return (
    <div className="text-center">
      {/* Main headline - renders immediately for fast LCP */}
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-text-primary leading-[1.1] tracking-tight mb-6">
        AI Engineering Services
        <br />
        <span className="text-highlight">That Ship to Production</span>
      </h1>

      {/* Subheadline - uses CSS animation instead of framer-motion */}
      <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed hero-fade-in">
        Senior AI engineers embedded with your team within 2-5 days. We build
        LLM applications, AI agents, and secure AI systems that ship to
        production.
      </p>

      {/* CTA buttons - uses CSS animation instead of framer-motion */}
      <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center hero-fade-in hero-fade-in-delay">
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-lg hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25"
        >
          Schedule AI Strategy Call
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-lg hover:border-accent/30 transition-all duration-200"
        >
          View Our Work
        </Link>
      </div>
    </div>
  );
}
