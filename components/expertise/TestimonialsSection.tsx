"use client";

import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent-light uppercase tracking-wider mb-4">
            Client Success Stories
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            Hear Directly From Our Clients
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-surface/80 backdrop-blur-xl border border-border hover:border-accent/30 transition-colors"
            >
              {/* Quote mark */}
              <svg
                className="absolute top-6 left-6 w-10 h-10 text-accent/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote text */}
              <blockquote className="text-lg text-text-secondary leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-text-primary text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-accent-light font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
