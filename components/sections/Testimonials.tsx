"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "What started with one engineer nearly three years ago has grown into a team of five, each fully owning their deliverables. They've taken on critical core roles across teams. We're extremely pleased with the commitment and engagement they bring.",
    author: "Shrivatsa Swadi",
    role: "Director of Engineering",
    company: "Setu",
    logo: "/logos/client/setu.svg",
    image: "/testimonials/shrivatsa.jpg",
    highlight: "5 engineers embedded, 3-year partnership",
  },
  {
    quote:
      "We've worked with Procedure across our portfolio, and the experience has been exceptional. They consistently deliver on every promise and adapt quickly to shifting project needs. We wholeheartedly recommend them for anyone seeking a reliable development partner.",
    author: "Chad Laurans",
    role: "Managing Partner",
    company: "Workshop Ventures",
    logo: "/logos/client/workshopventure.svg",
    image: "/testimonials/chad.jpg",
    highlight: "Portfolio-wide development partner",
  },
  {
    quote:
      "Procedure has been our partner from inception through rapid growth. Their engineers are exceptionally talented and have proven essential to building out our engineering capacity. The leadership have been thought partners on key engineering decisions. Couldn't recommend them more highly!",
    author: "Faisal Anwar",
    role: "CTO",
    company: "Timely",
    logo: "/logos/client/timely.svg",
    image: "/testimonials/faisal.jpg",
    highlight: "Partner from inception through rapid growth",
  },
  {
    quote:
      "Their clear communication and expertise made them feel like part of our team. They built and launched our app in just 12 weeks, helping us reach 1000+ paying users in the first 6 months. We're excited to keep building with them!",
    author: "Eid AlMujaibel",
    role: "CEO",
    company: "Tenmeya",
    logo: "/logos/client/tenmeya.svg",
    image: "/testimonials/eid.jpg",
    highlight: "App launched in 12 weeks, 1000+ users in 6 months",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="relative py-16 sm:py-24 bg-surface overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Circle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48' height='48'%3e%3ccircle cx='24' cy='24' r='8' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-3 sm:mb-4">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4">
            Trusted by engineering leaders at scaling companies
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Join companies who&apos;ve accelerated their product development with
            embedded Procedure engineers
          </p>
        </motion.div>

        <div className="relative px-0 sm:px-12 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="p-6 sm:p-8 md:p-12 rounded-2xl bg-surface-elevated border border-border"
            >
              {/* Highlight badge */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-accent-teal/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-accent-teal/10 text-accent-teal-light border border-accent-teal/20">
                  {testimonials[currentIndex].highlight}
                </span>
              </div>
              <blockquote className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-6 sm:mb-8">
                {testimonials[currentIndex].quote}
              </blockquote>
              <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-border">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gradient-to-br from-accent-teal to-accent-blue flex items-center justify-center flex-shrink-0">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg text-text-primary">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <Image
                    src={testimonials[currentIndex].logo}
                    alt={testimonials[currentIndex].company}
                    width={100}
                    height={32}
                    className="h-6 md:h-8 w-auto object-contain filter brightness-0 invert opacity-70"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows - hidden on mobile, shown on sm+ */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-16 w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-elevated border border-border shadow-lg items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent-teal/50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-16 w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-elevated border border-border shadow-lg items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent-teal/50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-accent-teal"
                  : "bg-border hover:bg-text-muted"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
