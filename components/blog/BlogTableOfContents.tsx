"use client";

import { useState, useEffect } from "react";

export interface TOCHeading {
  id: string;
  title: string;
  type: "heading_1" | "heading_2" | "heading_3";
}

interface BlogTableOfContentsProps {
  headings: TOCHeading[];
}

export function BlogTableOfContents({ headings }: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [readProgress, setReadProgress] = useState(0);

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
    <aside>
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
                heading.type === "heading_1"
                  ? "pl-2"
                  : heading.type === "heading_2"
                  ? "pl-4"
                  : "pl-6"
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
    </aside>
  );
}
