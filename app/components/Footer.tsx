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
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)]">
      {/* Subtle gradient background */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: `linear-gradient(180deg, transparent 0%, rgba(${config.accentColorRgb}, 0.02) 100%)`,
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <motion.div
              className="mb-4 text-2xl font-bold tracking-tight"
              animate={{ color: config.accentColor }}
              transition={{ duration: 0.3 }}
            >
              Procedure
            </motion.div>
            <p className="mb-6 text-sm leading-relaxed text-[var(--muted)]">
              Engineering teams you can rely on. AI, software, design, and security — from Mumbai and San Francisco.
            </p>
            <a
              href="mailto:hello@procedure.tech"
              className="text-sm font-medium text-[var(--foreground)] underline-offset-4 hover:underline"
            >
              hello@procedure.tech
            </a>
          </div>

          {/* Services column */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--foreground)] transition-colors hover:text-[var(--muted)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--foreground)] transition-colors hover:text-[var(--muted)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--muted)]"
                  >
                    {link.label}
                    <svg
                      className="h-3 w-3 opacity-50"
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
        <div className="my-12 h-px bg-[var(--border)]" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Procedure Technologies. All rights reserved.
          </p>

          {/* Location badges */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: config.accentColor }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: config.accentColor }}
                />
              </span>
              Mumbai
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: config.accentColor }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: config.accentColor }}
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
