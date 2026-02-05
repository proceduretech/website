"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalInline } from "@/components/CalInline";
import { PageHero, CaseStudyCard } from "@/components/ui";
import type { CaseStudy } from "@/lib/case-studies-data";
import { testimonials } from "@/lib/testimonials-data";
import Image from "next/image";

interface CaseStudiesClientProps {
  caseStudies: CaseStudy[];
  serviceFilters: string[];
  industryFilters: string[];
}

export function CaseStudiesClient({
  caseStudies,
  serviceFilters,
  industryFilters,
}: CaseStudiesClientProps) {
  const [activeServiceFilter, setActiveServiceFilter] = useState("All");
  const [activeIndustryFilter, setActiveIndustryFilter] = useState("All");
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);

  // Filter case studies
  const filteredStudies = caseStudies.filter((study) => {
    const matchesService =
      activeServiceFilter === "All" ||
      study.serviceType === activeServiceFilter;
    const matchesIndustry =
      activeIndustryFilter === "All" || study.industry === activeIndustryFilter;
    return matchesService && matchesIndustry;
  });

  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <PageHero
        badge="Proven results across industries"
        headline="AI That Ships."
        headlineAccent="Results That Matter."
        description="From Fortune 500 enterprises to high-growth startups, we help organizations turn AI ambitions into production systems that drive measurable business outcomes."
        stats={[
          { value: "75+", label: "Projects Delivered" },
          { value: "50+", label: "Certified Engineers" },
          { value: "98%", label: "Client Retention" },
        ]}
        primaryCTA={{ text: "Talk to the Team", href: "/contact-us" }}
      />

      {/* ============================================
          FILTERS SECTION
          ============================================ */}
      <section className="relative py-8 bg-surface border-y border-border z-20 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            {/* Expertise Filter */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <span className="text-sm text-text-muted font-medium">
                Expertise:
              </span>
              <div className="flex flex-wrap gap-2">
                {serviceFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveServiceFilter(filter)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeServiceFilter === filter
                        ? "bg-accent/20 text-accent-light border border-accent/30"
                        : "bg-surface-elevated text-text-secondary border border-border hover:border-accent/30 hover:text-text-primary"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Filter - Custom Dropdown */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <span className="text-sm text-text-muted font-medium">
                Industry:
              </span>
              <div className="relative">
                <button
                  onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsIndustryDropdownOpen(false), 150)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-2 ${
                    activeIndustryFilter !== "All"
                      ? "bg-accent/20 text-accent-light border border-accent/30"
                      : "bg-surface-elevated text-text-secondary border border-border hover:border-accent/30"
                  }`}
                >
                  {activeIndustryFilter}
                  <svg
                    className={`w-4 h-4 transition-transform ${isIndustryDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isIndustryDropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 py-1 min-w-[160px] bg-surface-elevated border border-border rounded-lg shadow-xl z-50">
                    {industryFilters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => {
                          setActiveIndustryFilter(filter);
                          setIsIndustryDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-sm text-left transition-colors ${
                          activeIndustryFilter === filter
                            ? "bg-accent/20 text-accent-light"
                            : "text-text-secondary hover:bg-accent/10 hover:text-accent-light"
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CASE STUDIES GRID
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeServiceFilter}-${activeIndustryFilter}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredStudies.map((study, idx) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  index={idx}
                  variant="default"
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-2xl bg-surface-elevated border border-border flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                No matching case studies
              </h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your filters to see more results.
              </p>
              <button
                onClick={() => {
                  setActiveServiceFilter("All");
                  setActiveIndustryFilter("All");
                }}
                className="px-6 py-3 text-sm font-semibold text-accent-light bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent/20 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ============================================
          SOCIAL PROOF SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Trusted by industry leaders
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
              What our clients say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {testimonials.slice(0, 2).map((testimonial, idx) => (
              <motion.blockquote
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                className="relative p-6 sm:p-8 rounded-2xl bg-surface-elevated border border-border"
              >
                <div className="absolute -top-3 left-6 text-5xl text-accent/30 font-serif">
                  &ldquo;
                </div>
                <p className="text-text-secondary leading-relaxed mb-6 pt-4">
                  {testimonial.quote}
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-elevated border border-border">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-text-muted">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION WITH INLINE BOOKING
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to Build Your
              <br />
              <span className="text-highlight">Success Story?</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Every case study started with a conversation. Tell us about your
              AI challenges, and our engineers will give you an honest
              assessment of how we can help—even if that means pointing you in a
              different direction.
            </p>
          </motion.div>

          {/* Inline Cal.com booking widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-border bg-surface-elevated"
          >
            <CalInline className="h-[600px]" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
