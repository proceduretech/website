"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
  image: string;
  highlight: string;
}

interface MobileTestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function MobileTestimonialCarousel({
  testimonials,
}: MobileTestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // Update active index based on scroll position
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || isScrollingRef.current) return;

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);

    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < testimonials.length) {
      setActiveIndex(newIndex);
    }
  }, [activeIndex, testimonials.length]);

  // Scroll to specific index when dot is clicked
  const scrollToIndex = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;

    isScrollingRef.current = true;
    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth;

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);

    // Reset scrolling flag after animation
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 300);
  }, []);

  // Add scroll listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative">
      {/* Scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 px-4 -mx-4 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center w-[calc(100vw-32px)] max-w-[358px]"
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div
        className="flex justify-center items-center gap-2 mt-6"
        role="tablist"
        aria-label="Testimonial navigation"
      >
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
              // Larger tap target
              "relative before:absolute before:inset-0 before:-m-2 before:content-['']",
              index === activeIndex
                ? "bg-accent-teal-light scale-125"
                : "bg-border hover:bg-border/80"
            )}
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-6 rounded-2xl bg-surface-elevated border border-border h-full flex flex-col min-h-[320px]">
      {/* Quote icon and highlight badge */}
      <div className="flex items-start gap-3 mb-4">
        <svg
          className="w-7 h-7 text-accent-teal/30 flex-shrink-0 mt-0.5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-teal/10 text-accent-teal-light border border-accent-teal/20">
          {testimonial.highlight}
        </span>
      </div>

      {/* Quote */}
      <blockquote className="text-[15px] text-text-secondary leading-relaxed mb-6 flex-grow line-clamp-6">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-gradient-to-br from-accent-teal to-accent-blue flex items-center justify-center flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              width={44}
              height={44}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-sm text-text-primary">
              {testimonial.author}
            </div>
            <div className="text-[13px] text-text-secondary">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
        <Image
          src={testimonial.logo}
          alt={testimonial.company}
          width={60}
          height={20}
          className="h-4 w-auto object-contain filter brightness-0 invert opacity-40"
        />
      </div>
    </div>
  );
}
