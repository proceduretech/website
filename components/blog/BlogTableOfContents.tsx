"use client";

import { useState, useEffect, useRef } from "react";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);
  const isUserScrollingRef = useRef(false);

  // Auto-scroll active item into view
  useEffect(() => {
    if (!activeId || !activeButtonRef.current || !scrollContainerRef.current) {
      return;
    }

    // Don't auto-scroll if user is manually scrolling
    if (isUserScrollingRef.current) {
      return;
    }

    const button = activeButtonRef.current;
    const container = scrollContainerRef.current;

    // Check if button is visible in container
    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const isAboveViewport = buttonRect.top < containerRect.top;
    const isBelowViewport = buttonRect.bottom > containerRect.bottom;

    if (isAboveViewport || isBelowViewport) {
      // Scroll the button into view with some padding
      button.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeId]);

  // Handle user scrolling in TOC container
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleTOCScroll = () => {
      isUserScrollingRef.current = true;
      // Reset flag after scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isUserScrollingRef.current = false;
      }, 500);
    };

    container.addEventListener("scroll", handleTOCScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleTOCScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

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
    // Prevent auto-scroll when user clicks
    isUserScrollingRef.current = true;
    setTimeout(() => {
      isUserScrollingRef.current = false;
    }, 1000);

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
      <div className="bg-surface-elevated rounded-xl border border-border p-6 max-h-[calc(100vh-8rem)] flex flex-col">
        {/* Progress bar */}
        <div className="h-1 bg-surface rounded-full mb-6 overflow-hidden shrink-0">
          <div
            className="h-full bg-accent rounded-full transition-all duration-150"
            style={{ width: `${readProgress}%` }}
          />
        </div>

        {/* Title */}
        <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4 shrink-0">
          On This Page
        </h4>

        {/* TOC Items - Scrollable */}
        <div
          ref={scrollContainerRef}
          className="space-y-1 overflow-y-auto flex-1 min-h-0 pr-2 -mr-2"
        >
          {headings.map((heading) => (
            <button
              key={heading.id}
              ref={activeId === heading.id ? activeButtonRef : null}
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
