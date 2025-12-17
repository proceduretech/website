"use client";

interface BlogPostContentProps {
  content: string;
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  // For now, we'll render the content as plain text with basic formatting
  // In the future, this can be replaced with MDX rendering
  return (
    <div className="prose prose-lg prose-invert max-w-none">
      {/* Prose styles */}
      <style jsx global>{`
        .prose {
          --tw-prose-body: var(--color-prose-body);
          --tw-prose-headings: var(--color-prose-headings);
          --tw-prose-lead: var(--color-prose-lead);
          --tw-prose-links: var(--color-prose-links);
          --tw-prose-bold: var(--color-prose-bold);
          --tw-prose-counters: var(--color-prose-counters);
          --tw-prose-bullets: var(--color-prose-bullets);
          --tw-prose-hr: var(--color-hr);
          --tw-prose-quotes: var(--color-prose-quotes);
          --tw-prose-quote-borders: var(--color-prose-quote-borders);
          --tw-prose-captions: var(--color-prose-captions);
          --tw-prose-code: var(--color-prose-code);
          --tw-prose-pre-code: var(--color-prose-pre-code);
          --tw-prose-pre-bg: var(--color-prose-pre-bg);
          --tw-prose-th-borders: var(--color-prose-table-borders);
          --tw-prose-td-borders: var(--color-prose-table-borders);
        }

        .prose h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          scroll-margin-top: 6rem;
          color: var(--tw-prose-headings);
        }

        .prose h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          scroll-margin-top: 6rem;
          color: var(--tw-prose-headings);
        }

        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.75;
          color: var(--tw-prose-body);
        }

        .prose a {
          color: var(--tw-prose-links);
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-color: rgba(13, 181, 165, 0.5);
        }

        .prose a:hover {
          text-decoration-color: rgba(13, 181, 165, 1);
        }

        .prose strong {
          color: var(--tw-prose-bold);
          font-weight: 600;
        }

        .prose ul,
        .prose ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .prose li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
          color: var(--tw-prose-body);
        }

        .prose li::marker {
          color: var(--tw-prose-bullets);
        }

        .prose blockquote {
          border-left: 4px solid var(--tw-prose-quote-borders);
          padding-left: 1.5rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          padding-right: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: var(--tw-prose-quotes);
          background: var(--color-blockquote-bg);
          border-radius: 0 0.75rem 0.75rem 0;
        }

        .prose blockquote p {
          margin-bottom: 0.25rem;
        }

        .prose blockquote p:last-child {
          margin-bottom: 0;
        }

        .prose hr {
          border-color: var(--tw-prose-hr);
          margin: 3rem 0;
        }

        .prose img {
          border-radius: 0.75rem;
          margin: 2rem 0;
        }

        .prose figcaption {
          text-align: center;
          margin-top: 0.75rem;
          font-size: 0.875rem;
          color: var(--tw-prose-captions);
        }

        .prose code:not(pre code) {
          padding: 0.125rem 0.375rem;
          font-size: 0.875rem;
          font-family: ui-monospace, monospace;
          color: var(--tw-prose-code);
          background: var(--color-code-block);
          border: 1px solid var(--color-code-border);
          border-radius: 0.25rem;
        }

        .prose pre {
          background: var(--tw-prose-pre-bg);
          border: 1px solid var(--color-code-border);
          border-radius: 0.75rem;
          padding: 1rem;
          overflow-x: auto;
          margin: 2rem 0;
        }

        .prose pre code {
          font-size: 0.875rem;
          line-height: 1.75;
          color: var(--tw-prose-pre-code);
        }
      `}</style>

      {/* Render content - this is a simple implementation */}
      {/* In production, use MDX or a proper markdown renderer */}
      <div
        dangerouslySetInnerHTML={{
          __html: formatContent(content),
        }}
      />
    </div>
  );
}

// Simple content formatter - in production, use MDX
function formatContent(content: string): string {
  // Basic markdown-like formatting
  let formatted = content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 id="$1">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 id="$1">$1</h2>')
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    // Bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Paragraphs (double newlines)
    .replace(/\n\n/g, "</p><p>")
    // Single newlines within paragraphs
    .replace(/\n/g, "<br>");

  // Wrap in paragraph tags
  formatted = `<p>${formatted}</p>`;

  // Clean up empty paragraphs
  formatted = formatted.replace(/<p>\s*<\/p>/g, "");
  formatted = formatted.replace(/<p>\s*<h/g, "<h");
  formatted = formatted.replace(/<\/h(\d)>\s*<\/p>/g, "</h$1>");

  return formatted;
}
