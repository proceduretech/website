"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const footerLinks = {
  services: [
    { label: "AI Engineering", href: "#services" },
    { label: "Software Development", href: "#services" },
    { label: "Design", href: "#services" },
    { label: "AI Security", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "How We Work", href: "#how-we-work" },
    { label: "Security", href: "#security" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  connect: [
    { label: "LinkedIn", href: "https://linkedin.com/company/procedure" },
    { label: "Twitter", href: "https://twitter.com/procedure" },
    { label: "GitHub", href: "https://github.com/proceduretech" },
  ],
};

export function Footer() {
  const { config } = useTheme();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)]/50 bg-gradient-to-b from-white to-gray-50/50">
      {/* Subtle gradient background */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: `radial-gradient(ellipse 80% 50% at 50% 100%, rgba(${config.accentColorRgb}, 0.04), transparent)`,
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <motion.div
              className="mb-5 text-2xl font-bold tracking-tight"
              animate={{ color: config.accentColor }}
              transition={{ duration: 0.3 }}
            >
              Procedure
            </motion.div>
            <p className="mb-6 text-[15px] leading-relaxed text-[var(--muted)]">
              Engineering teams you can rely on. AI, software, design, and security — from Mumbai and San Francisco.
            </p>
            <a
              href="mailto:hello@procedure.tech"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--muted)]"
            >
              hello@procedure.tech
              <svg
                className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Services column */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
              Services
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--muted)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
              Company
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--muted)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
              Connect
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[15px] text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--muted)]"
                  >
                    {link.label}
                    <svg
                      className="h-3 w-3 opacity-40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-14" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Procedure Technologies. All rights reserved.
          </p>

          {/* Location badges */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ backgroundColor: config.accentColor }}
                />
                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: config.accentColor,
                    boxShadow: `0 0 8px rgba(${config.accentColorRgb}, 0.4)`,
                  }}
                />
              </span>
              Mumbai
            </div>
            <div className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ backgroundColor: config.accentColor }}
                />
                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: config.accentColor,
                    boxShadow: `0 0 8px rgba(${config.accentColorRgb}, 0.4)`,
                  }}
                />
              </span>
              San Francisco
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
