"use client";

import { useMemo } from "react";
import Image from "next/image";

interface MarkdownRendererProps {
  content: string;
}

// Simple markdown to HTML converter
function parseMarkdown(markdown: string): string {
  let html = markdown;

  // Escape HTML except for our custom tags
  html = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Restore custom tags
  html = html
    .replace(/&lt;tweet id="([^"]+)" \/&gt;/g, '<tweet id="$1"></tweet>')
    .replace(/&lt;youtube id="([^"]+)" \/&gt;/g, '<youtube id="$1"></youtube>');

  // Code blocks (must be before inline code)
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    const language = lang || "";
    return `<pre><code class="language-${language}">${code.trim()}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Images
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" loading="lazy" />'
  );

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Headers
  html = html.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Blockquotes (handle multi-line)
  html = html.replace(/^&gt; (.+)$/gm, "<blockquote><p>$1</p></blockquote>");
  // Merge consecutive blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/g, "\n");

  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

  // Italic
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  // Horizontal rules
  html = html.replace(/^---$/gm, "<hr />");

  // Tables
  html = html.replace(
    /^\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/gm,
    (_, header, body) => {
      const headerCells = header
        .split("|")
        .filter(Boolean)
        .map((cell: string) => `<th>${cell.trim()}</th>`)
        .join("");

      const bodyRows = body
        .trim()
        .split("\n")
        .map((row: string) => {
          const cells = row
            .split("|")
            .filter(Boolean)
            .map((cell: string) => `<td>${cell.trim()}</td>`)
            .join("");
          return `<tr>${cells}</tr>`;
        })
        .join("");

      return `<table><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
    }
  );

  // Unordered lists
  html = html.replace(/^- \[ \] (.+)$/gm, '<li class="task-list-item"><input type="checkbox" disabled /> $1</li>');
  html = html.replace(/^- \[x\] (.+)$/gm, '<li class="task-list-item"><input type="checkbox" checked disabled /> $1</li>');
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");

  // Wrap consecutive list items in ul
  html = html.replace(/((?:<li>[\s\S]*?<\/li>\n?)+)/g, "<ul>$1</ul>");

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, "<li>$1</li>");

  // Paragraphs (lines not starting with HTML tags)
  const lines = html.split("\n");
  const processed: string[] = [];
  let inParagraph = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "") {
      if (inParagraph) {
        processed.push("</p>");
        inParagraph = false;
      }
      continue;
    }

    const isBlock =
      trimmed.startsWith("<h") ||
      trimmed.startsWith("<pre") ||
      trimmed.startsWith("<ul") ||
      trimmed.startsWith("<ol") ||
      trimmed.startsWith("<table") ||
      trimmed.startsWith("<blockquote") ||
      trimmed.startsWith("<hr") ||
      trimmed.startsWith("<tweet") ||
      trimmed.startsWith("<youtube") ||
      trimmed.startsWith("</");

    if (isBlock) {
      if (inParagraph) {
        processed.push("</p>");
        inParagraph = false;
      }
      processed.push(line);
    } else {
      if (!inParagraph) {
        processed.push("<p>");
        inParagraph = true;
      }
      processed.push(line);
    }
  }

  if (inParagraph) {
    processed.push("</p>");
  }

  return processed.join("\n");
}

// Component to render custom elements
function CustomElement({
  type,
  id,
}: {
  type: "tweet" | "youtube";
  id: string;
}) {
  if (type === "youtube") {
    return (
      <div className="youtube-embed">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (type === "tweet") {
    return (
      <div className="twitter-embed">
        <div className="rounded-xl border border-[var(--border)] bg-gray-50 p-6 text-center">
          <p className="text-sm text-[var(--muted)]">
            Tweet embed placeholder
            <br />
            <a
              href={`https://twitter.com/i/status/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)]"
            >
              View on Twitter →
            </a>
          </p>
        </div>
      </div>
    );
  }

  return null;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const { html, customElements } = useMemo(() => {
    let processedHtml = parseMarkdown(content);

    // Extract custom elements
    const elements: { type: "tweet" | "youtube"; id: string; placeholder: string }[] = [];

    // Extract tweets
    processedHtml = processedHtml.replace(
      /<tweet id="([^"]+)"><\/tweet>/g,
      (match, id) => {
        const placeholder = `__TWEET_${elements.length}__`;
        elements.push({ type: "tweet", id, placeholder });
        return placeholder;
      }
    );

    // Extract YouTube
    processedHtml = processedHtml.replace(
      /<youtube id="([^"]+)"><\/youtube>/g,
      (match, id) => {
        const placeholder = `__YOUTUBE_${elements.length}__`;
        elements.push({ type: "youtube", id, placeholder });
        return placeholder;
      }
    );

    return { html: processedHtml, customElements: elements };
  }, [content]);

  // Split HTML by placeholders and render
  const parts = useMemo(() => {
    let remaining = html;
    const result: (string | { type: "tweet" | "youtube"; id: string })[] = [];

    for (const element of customElements) {
      const [before, after] = remaining.split(element.placeholder);
      if (before) result.push(before);
      result.push({ type: element.type, id: element.id });
      remaining = after || "";
    }

    if (remaining) result.push(remaining);
    return result;
  }, [html, customElements]);

  return (
    <div className="prose mx-auto">
      {parts.map((part, index) => {
        if (typeof part === "string") {
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: part }}
            />
          );
        }
        return <CustomElement key={index} type={part.type} id={part.id} />;
      })}
    </div>
  );
}
