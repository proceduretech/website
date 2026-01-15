"use client";

import { useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials-data";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  return (
    <LazyMotion features={domAnimation} strict>
      <section
        className="relative py-16 sm:py-24 bg-base overflow-hidden"
      aria-label="Customer testimonials"
    >
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent-light uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            Trusted by engineering leaders
          </h2>
        </m.div>

        {/* Large quote */}
        <div className="relative">
          {/* Quote mark */}
          <svg
            className="absolute -top-4 -left-2 sm:-left-8 w-16 h-16 text-accent/10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <AnimatePresence mode="wait">
            <m.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Quote text */}
              <blockquote className="text-xl sm:text-2xl md:text-3xl text-text-primary font-medium leading-relaxed mb-10">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-elevated">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-text-primary text-lg">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-text-secondary">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label={`Go to testimonial ${idx + 1}`}
            >
              <span
                className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-accent-light w-8"
                    : "bg-border hover:bg-slate-600"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
    </LazyMotion>
  );
}
