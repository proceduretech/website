import Link from "next/link";
import { ReactNode } from "react";

/**
 * Parses markdown-style links [text](url) in a string and returns
 * React nodes with Next.js Link components for internal links.
 */
export function renderLinkedText(text: string): ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const linkText = match[1];
    const href = match[2];
    const isInternal = href.startsWith("/");

    parts.push(
      isInternal ? (
        <Link
          key={match.index}
          href={href}
          className="text-accent-light hover:text-accent underline underline-offset-2 transition-colors"
        >
          {linkText}
        </Link>
      ) : (
        <a
          key={match.index}
          href={href}
          className="text-accent-light hover:text-accent underline underline-offset-2 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      )
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // If no links were found, return the original string
  if (parts.length === 0) return text;

  return <>{parts}</>;
}
