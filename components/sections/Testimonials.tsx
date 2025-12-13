"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { MobileTestimonialCarousel } from "./MobileTestimonialCarousel";

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

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="p-6 rounded-2xl bg-surface-elevated border border-border h-full flex flex-col">
      {/* Highlight badge */}
      <div className="flex items-center gap-3 mb-4">
        <svg
          className="w-8 h-8 text-accent-teal/30 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-teal/10 text-accent-teal-light border border-accent-teal/20">
          {testimonial.highlight}
        </span>
      </div>

      {/* Quote */}
      <blockquote className="text-base text-text-secondary leading-relaxed mb-6 flex-grow">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-accent-teal to-accent-blue flex items-center justify-center flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-sm text-text-primary">
              {testimonial.author}
            </div>
            <div className="text-xs text-text-secondary">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
        <Image
          src={testimonial.logo}
          alt={testimonial.company}
          width={80}
          height={24}
          className="h-5 w-auto object-contain filter brightness-0 invert opacity-50 hidden sm:block"
        />
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      className="relative py-16 sm:py-24 bg-surface overflow-hidden"
      aria-label="Customer testimonials"
    >
      {/* Circle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48' height='48'%3e%3ccircle cx='24' cy='24' r='8' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 px-4 sm:px-6"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-3 sm:mb-4">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4">
            Trusted by engineering leaders at scaling companies
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Join companies who&apos;ve accelerated their product development
            with embedded Procedure engineers
          </p>
        </motion.div>

        {/* Desktop: Infinite scrolling carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden sm:block"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            renderItem={(testimonial) => (
              <TestimonialCard testimonial={testimonial} />
            )}
          />
        </motion.div>

        {/* Mobile: Swipeable carousel with pagination dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="sm:hidden"
        >
          <MobileTestimonialCarousel testimonials={testimonials} />
        </motion.div>
      </div>
    </section>
  );
}
