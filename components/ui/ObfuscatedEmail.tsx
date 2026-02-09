"use client";

import { useMemo } from "react";

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  tld: string;
  className?: string;
  showIcon?: boolean;
}

/**
 * Renders an email address that is assembled at runtime via JavaScript.
 * This prevents simple bot scrapers from harvesting the email from static HTML.
 *
 * Usage: <ObfuscatedEmail user="hello" domain="procedure" tld="tech" />
 * Renders: hello@procedure.tech with a working mailto: link
 */
export function ObfuscatedEmail({
  user,
  domain,
  tld,
  className = "",
  showIcon = false,
}: ObfuscatedEmailProps) {
  // Assemble email at runtime - bots parsing static HTML won't see this
  const email = useMemo(() => {
    return `${user}@${domain}.${tld}`;
  }, [user, domain, tld]);

  const mailtoHref = useMemo(() => {
    return `mailto:${email}`;
  }, [email]);

  return (
    <a
      href={mailtoHref}
      className={className}
    >
      {showIcon && (
        <svg
          className="w-4 h-4 inline-block mr-2"
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
      )}
      {email}
    </a>
  );
}

/**
 * A variant that displays user-friendly text with a separate label
 * Used in contact sections where we want "Email us directly" above the email
 */
export function ObfuscatedEmailBlock({
  user,
  domain,
  tld,
  label,
  iconClassName = "w-5 h-5 text-accent-light",
}: {
  user: string;
  domain: string;
  tld: string;
  label?: string;
  iconClassName?: string;
}) {
  const email = useMemo(() => `${user}@${domain}.${tld}`, [user, domain, tld]);
  const mailtoHref = useMemo(() => `mailto:${email}`, [email]);

  return (
    <a href={mailtoHref} className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-300">
        <svg
          className={iconClassName}
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
      <div>
        {label && <p className="text-sm text-text-muted">{label}</p>}
        <p className="text-text-primary font-medium group-hover:text-accent-light transition-colors">
          {email}
        </p>
      </div>
    </a>
  );
}
