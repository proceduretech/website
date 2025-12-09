"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "The Procedure was the first consultancy we truly connected with, sharing our outlook on quality, process, and ownership. Over the years, they have not only augmented our internal team but also taken on critical core roles across teams. What started with one engineer nearly three years ago has grown into a team of five, each fully owning their deliverables and contributing meaningfully to our team's capacity. Ulhas maintains a keen awareness of the landscape, guiding his team through shifting challenges behind the scenes. We're extremely pleased with the commitment and engagement they bring.",
    author: "Shrivatsa Swadi",
    role: "Director of Engineering",
    company: "Setu",
    image: "/testimonials/shrivatsa.jpg",
  },
  {
    quote:
      "We have worked with Procedure to support our software development initiatives across our portfolio, and the experience has been exceptional from start to finish. They consistently deliver on every promise, and are very responsible to shifting project needs. They are great people to work with and we wholeheartedly recommend Procedure for anyone seeking a reliable, trustworthy development partner.",
    author: "Chad Laurans",
    role: "Managing Partner",
    company: "Workshop Ventures",
    image: "/testimonials/chad.jpg",
  },
  {
    quote:
      "Procedure has been a partner for Timely from our inception and through our rapid growth. Our team members from Procedure are exceptionally talented and dedicated to their craft and have proven essential to building out our engineering capacity in a fast-paced environment. On top of that, the leadership at Procedure have been thought partners for us on key engineering decisions and in growing each team member to expand their impact with Timely. Couldn't recommend Procedure more highly!",
    author: "Faisal Anwar",
    role: "CTO",
    company: "Timely",
    image: "/testimonials/faisal.jpg",
  },
  {
    quote:
      "Working with Procedure has been amazing! Their clear communication, smooth project management, and expertise made them feel like part of our team. They built and launched our app in just 12 weeks, helping us reach 1000+ paying users in the first 6 months. We're excited to keep building with them!",
    author: "Eid AlMujaibel",
    role: "CEO",
    company: "Tenmeya",
    image: "/testimonials/eid.jpg",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="relative py-16 sm:py-24 bg-zinc-50 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Circle pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48' height='48'%3e%3ccircle cx='24' cy='24' r='8' stroke='%23cbd5e1' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
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
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3 sm:mb-4">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900">
            What our clients say
          </h2>
        </motion.div>

        <div className="relative px-0 sm:px-12 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="p-6 sm:p-8 md:p-12 rounded-2xl bg-white border border-zinc-200 shadow-sm"
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500/20 mb-4 sm:mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-base sm:text-lg md:text-xl text-zinc-700 leading-relaxed mb-6 sm:mb-8">
                {testimonials[currentIndex].quote}
              </blockquote>
              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-zinc-100">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center text-white font-semibold text-lg sm:text-xl flex-shrink-0">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-base sm:text-lg text-zinc-900">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm sm:text-base text-zinc-500">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows - hidden on mobile, shown on sm+ */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-16 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-zinc-200 shadow-lg items-center justify-center text-zinc-600 hover:bg-zinc-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-16 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-zinc-200 shadow-lg items-center justify-center text-zinc-600 hover:bg-zinc-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
                  ? "w-8 bg-blue-500"
                  : "bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
