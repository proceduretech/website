import Link from "next/link";
import { Fragment } from "react";

/**
 * Parses markdown-style links [text](url) in a string and renders them
 * as Next.js Link components. Non-link text is rendered as plain text.
 *
 * Usage: <LinkedText text="Build [backend systems](/services/backend-development) at scale" />
 */
export function LinkedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const parts = parseLinkedText(text);

  if (parts.length === 1 && parts[0].type === "text") {
    return <>{text}</>;
  }

  return (
    <>
      {parts.map((part, i) =>
        part.type === "link" ? (
          <Link
            key={i}
            href={part.href}
            className={
              className ??
              "text-accent-light hover:text-accent underline underline-offset-2 decoration-accent/30 hover:decoration-accent/60 transition-colors"
            }
          >
            {part.text}
          </Link>
        ) : (
          <Fragment key={i}>{part.text}</Fragment>
        ),
      )}
    </>
  );
}

type TextPart =
  | { type: "text"; text: string }
  | { type: "link"; text: string; href: string };

function parseLinkedText(input: string): TextPart[] {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: TextPart[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", text: input.slice(lastIndex, match.index) });
    }
    parts.push({ type: "link", text: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < input.length) {
    parts.push({ type: "text", text: input.slice(lastIndex) });
  }

  return parts;
}
