import Link from "next/link";
import { ComplianceBadge } from "./badges/ComplianceBadge";
import { ProcedureLogoShort } from "./logos";
import { ObfuscatedEmail } from "./ui/ObfuscatedEmail";

const footerLinks = {
  aiServices: [
    { label: "LLM Applications", href: "/services/ai-engineering" },
    { label: "AI Agents", href: "/services/ai-agents" },
    { label: "Threat Protection", href: "/services/ai-security" },
    { label: "Data & Privacy", href: "/services/ai-privacy" },
  ],
  productEngineering: [
    { label: "Frontend Development", href: "/services/frontend-development" },
    { label: "Backend Development", href: "/services/backend-development" },
    { label: "Mobile Development", href: "/services/mobile-development" },
    { label: "QA & Testing", href: "/services/software-testing-and-qa" },
  ],
  cloudDesign: [
    { label: "Cloud Architecture", href: "/services/cloud" },
    { label: "Kubernetes", href: "/services/kubernetes" },
    { label: "Product Design", href: "/services/product-design" },
    { label: "Design Systems", href: "/services/design-systems" },
  ],
  industries: [
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Education", href: "/industries/education" },
    { label: "SaaS & Technology", href: "/industries/saas" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Careers", href: "/careers" },
    { label: "Case Studies", href: "/work" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact", href: "/contact-us" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/procedurehq",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/proceduretech",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com/procedurehq",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer
      className="border-t border-border bg-surface rounded-b-[2.5rem] overflow-hidden"
      style={{
        boxShadow: "var(--shadow-footer-glow)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row: Brand + Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-12">
          {/* Brand & Contact */}
          <div className="col-span-2 md:col-span-4">
            <Link
              href="/"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <ProcedureLogoShort
                textColor="var(--color-accent)"
                dotColor="var(--color-accent)"
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-text-secondary max-w-xs">
              AI engineering and security for production systems. Proven
              delivery excellence—now focused on AI.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <ObfuscatedEmail
                user="hello"
                domain="procedure"
                tld="tech"
                showIcon
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-light transition-colors"
              />
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                San Francisco (US) | Mumbai (IN)
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent-light transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI & ML */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              AI & ML
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.aiServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Engineering */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Engineering
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.productEngineering.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud & Design */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Cloud & Design
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.cloudDesign.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Company combined */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-text-primary mb-4 mt-6">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certification Badges */}
        <div className="pt-12 border-t border-border">
          <p className="text-xs text-text-muted uppercase tracking-widest mb-6 text-center">
            Security & Best Practices
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <ComplianceBadge
              icon="shield"
              title="Secure SDLC"
              subtitle="Implemented"
              iconColor="teal"
            />
            <ComplianceBadge
              icon="star"
              title="Responsible AI"
              subtitle="Practices"
              iconColor="blue"
            />
            {/* Bottom copyright bar */}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} Procedure. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-muted hover:text-accent-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
