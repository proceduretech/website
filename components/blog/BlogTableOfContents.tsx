"use client";

import { useState, useEffect, useMemo } from "react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface BlogTableOfContentsProps {
  content: string;
}

export function BlogTableOfContents({ content }: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [readProgress, setReadProgress] = useState(0);

  // Extract headings from content - memoized to prevent recalculation
  const headings = useMemo(() => {
    const items: TOCItem[] = [];
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      items.push({
        id: match[2].toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title: match[2],
        level: match[1].length,
      });
    }

    return items;
  }, [content]);

  // Scroll spy and progress tracking
  useEffect(() => {
    const handleScroll = () => {
      // Update reading progress
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadProgress(Math.min(100, Math.max(0, progress)));

      // Update active heading
      const headingElements = headings
        .map((h) => document.getElementById(h.id))
        .filter(Boolean) as HTMLElement[];

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        const rect = element.getBoundingClientRect();

        if (rect.top <= 150) {
          setActiveId(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-32">
      <div className="bg-surface-elevated rounded-xl border border-border p-6">
        {/* Progress bar */}
        <div className="h-1 bg-surface rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-150"
            style={{ width: `${readProgress}%` }}
          />
        </div>

        {/* Title */}
        <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
          On This Page
        </h4>

        {/* TOC Items */}
        <div className="space-y-1">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => handleClick(heading.id)}
              className={`block w-full text-left text-sm py-1.5 border-l-2 transition-colors ${
                heading.level === 3 ? "pl-6" : "pl-4"
              } ${
                activeId === heading.id
                  ? "text-accent-light border-accent"
                  : "text-text-muted hover:text-text-primary border-border"
              }`}
            >
              {heading.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
