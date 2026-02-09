import type { RichTextSegment } from "@/lib/notion-blog";

export function RichText({ segments }: { segments?: RichTextSegment[] }) {
  if (!segments || segments.length === 0) return null;

  return (
    <>
      {segments.map((segment, idx) => {
        let content: React.ReactNode = segment.text;

        // Apply formatting
        if (segment.code) {
          content = (
            <code className="px-1.5 py-0.5 rounded bg-surface-elevated text-sm font-mono text-accent">
              {content}
            </code>
          );
        }
        if (segment.bold) {
          content = (
            <strong className="font-semibold text-text-primary">
              {content}
            </strong>
          );
        }
        if (segment.italic) {
          content = <em>{content}</em>;
        }
        if (segment.underline) {
          content = <u>{content}</u>;
        }
        if (segment.strikethrough) {
          content = <del className="text-text-muted">{content}</del>;
        }

        // Wrap in link if href exists
        if (segment.href) {
          content = (
            <a
              href={segment.href}
              target={segment.href.startsWith("http") ? "_blank" : undefined}
              rel={
                segment.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-accent underline decoration-accent/50 underline-offset-4 hover:decoration-accent transition-colors"
            >
              {content}
            </a>
          );
        }

        return <span key={idx}>{content}</span>;
      })}
    </>
  );
}

