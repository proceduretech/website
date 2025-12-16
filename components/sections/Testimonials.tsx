"use client";

import { useState } from "react";
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
  },
  {
    quote:
      "We've worked with Procedure across our portfolio, and the experience has been exceptional. They consistently deliver on every promise and adapt quickly to shifting project needs. We wholeheartedly recommend them for anyone seeking a reliable development partner.",
    author: "Chad Laurans",
    role: "Managing Partner",
    company: "Workshop Ventures",
    logo: "/logos/client/workshopventure.svg",
    image: "/testimonials/chad.jpg",
  },
  {
    quote:
      "Procedure has been our partner from inception through rapid growth. Their engineers are exceptionally talented and have proven essential to building out our engineering capacity. The leadership have been thought partners on key engineering decisions. Couldn't recommend them more highly!",
    author: "Faisal Anwar",
    role: "CTO",
    company: "Timely",
    logo: "/logos/client/timely.svg",
    image: "/testimonials/faisal.jpg",
  },
  {
    quote:
      "Their clear communication and expertise made them feel like part of our team. They built and launched our app in just 12 weeks, helping us reach 1000+ paying users in the first 6 months. We're excited to keep building with them!",
    author: "Eid AlMujaibel",
    role: "CEO",
    company: "Tenmeya",
    logo: "/logos/client/tenmeya.svg",
    image: "/testimonials/eid.jpg",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="relative py-16 sm:py-24 bg-base overflow-hidden"
      aria-label="Customer testimonials"
    >
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.div
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
        </motion.div>

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
            <motion.div
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-accent-light w-8"
                  : "bg-border hover:bg-slate-600"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
