"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

interface ExpertiseCTAWithTestimonialProps {
  headline: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  supportingNote?: string;
  testimonial: Testimonial;
}

export function ExpertiseCTAWithTestimonial({
  headline,
  description,
  buttonText = "Schedule a Call",
  buttonLink = "/contact-us",
  supportingNote,
  testimonial,
}: ExpertiseCTAWithTestimonialProps) {
  return (
    <section className="relative py-16 sm:py-24 bg-base">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
              {headline}
            </h2>

            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              {description}
            </p>

            <Link href={buttonLink}>
              <Button variant="primary" size="lg">
                {buttonText}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            </Link>

            {supportingNote && (
              <p className="mt-4 text-sm text-text-muted">
                {supportingNote}
              </p>
            )}
          </motion.div>

          {/* Right side - Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "relative p-6 sm:p-8 rounded-2xl",
              "bg-surface-elevated/80 backdrop-blur-sm",
              "border border-border"
            )}
          >
            {/* Quote mark */}
            <div className="absolute -top-3 left-6">
              <div
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center",
                  "bg-accent/20 border border-accent/30"
                )}
              >
                <svg
                  className="w-4 h-4 text-accent-light"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            <blockquote className="mt-4">
              <p className="text-text-primary leading-relaxed mb-6 text-base sm:text-lg">
                "{testimonial.quote}"
              </p>

              <footer className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    "bg-accent/10 border border-accent/20"
                  )}
                >
                  <span className="text-sm font-semibold text-accent-light">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <div>
                  <cite className="not-italic">
                    <span className="block text-sm font-semibold text-text-primary">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-text-muted">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </cite>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
