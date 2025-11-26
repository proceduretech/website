"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme, verticals } from "../context/ThemeContext";
import { getFeaturedCaseStudyByVertical } from "../data/blog";
import { Vertical } from "../config/verticals";

const verticalOrder: Vertical[] = ["ai-engineering", "software", "design", "ai-security"];

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function FeaturedCaseStudies() {
  const { config, activeVertical } = useTheme();

  // Get featured case study for active vertical
  const featuredCaseStudy = getFeaturedCaseStudyByVertical(activeVertical);

  // Get case studies for all verticals
  const allCaseStudies = verticalOrder
    .map((v) => ({
      vertical: v,
      caseStudy: getFeaturedCaseStudyByVertical(v),
    }))
    .filter((item) => item.caseStudy);

  if (!featuredCaseStudy) {
    return null;
  }

  return (
    <section id="case-studies" className="relative overflow-hidden py-24 px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="geo-dots opacity-20" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.p
            className="mb-4 text-xs font-medium uppercase tracking-widest"
            animate={{ color: config.accentColor }}
            transition={{ duration: 0.3 }}
          >
            Case Studies
          </motion.p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            Real results from
            <br />
            <span className="text-[var(--muted)]">real projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[var(--muted)]">
            See how we&apos;ve helped companies solve complex technical challenges and deliver measurable business impact.
          </p>
        </div>

        {/* Featured Case Study for Active Vertical */}
        <motion.div
          key={activeVertical}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href={`/blog/${featuredCaseStudy.slug}`}
            className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image
                  src={featuredCaseStudy.coverImage}
                  alt={featuredCaseStudy.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />

                {/* Vertical Badge */}
                <motion.span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium text-white"
                  animate={{ backgroundColor: config.accentColor }}
                  transition={{ duration: 0.3 }}
                >
                  {verticals[activeVertical].label}
                </motion.span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                  Case Study · {formatDate(featuredCaseStudy.date)}
                </span>

                <h3 className="mb-4 text-2xl font-bold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)] md:text-3xl">
                  {featuredCaseStudy.title}
                </h3>

                <p className="mb-6 text-[var(--muted)]">
                  {featuredCaseStudy.excerpt}
                </p>

                {/* Results */}
                {featuredCaseStudy.results && (
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    {featuredCaseStudy.results.slice(0, 4).map((result, index) => {
                      const colors = [
                        config.accentColor,
                        config.secondaryColor,
                        config.tertiaryColor,
                        config.accentColor,
                      ];
                      return (
                        <div key={index}>
                          <motion.div
                            className="text-xl font-bold md:text-2xl"
                            animate={{ color: colors[index % colors.length] }}
                            transition={{ duration: 0.3 }}
                          >
                            {result.value}
                          </motion.div>
                          <div className="text-xs text-[var(--muted)]">
                            {result.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Client & Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={featuredCaseStudy.author.avatar}
                      alt={featuredCaseStudy.author.name}
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-[var(--foreground)]">
                        {featuredCaseStudy.author.name}
                      </p>
                      <p className="text-xs text-[var(--muted)]">
                        {featuredCaseStudy.author.role}
                      </p>
                    </div>
                  </div>

                  <motion.span
                    className="flex items-center gap-1 text-sm font-medium"
                    animate={{ color: config.accentColor }}
                    transition={{ duration: 0.3 }}
                  >
                    Read case study
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Other Vertical Case Studies */}
        <div className="grid gap-6 md:grid-cols-3">
          {allCaseStudies
            .filter((item) => item.vertical !== activeVertical)
            .slice(0, 3)
            .map((item, index) => {
              const caseStudy = item.caseStudy!;
              const verticalConfig = verticals[item.vertical];

              return (
                <motion.article
                  key={caseStudy.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={`/blog/${caseStudy.slug}`}
                    className="group block h-full overflow-hidden rounded-xl border border-[var(--border)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={caseStudy.coverImage}
                        alt={caseStudy.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <span
                        className="absolute left-3 top-3 rounded-full px-2 py-1 text-xs font-medium text-white"
                        style={{ backgroundColor: verticalConfig.accentColor }}
                      >
                        {verticalConfig.shortLabel}
                      </span>
                    </div>
                    <div className="p-5">
                      <h4 className="mb-2 font-semibold leading-snug text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                        {caseStudy.title}
                      </h4>
                      {caseStudy.results && caseStudy.results[0] && (
                        <p className="text-sm text-[var(--muted)]">
                          <span
                            className="font-semibold"
                            style={{ color: verticalConfig.accentColor }}
                          >
                            {caseStudy.results[0].value}
                          </span>{" "}
                          {caseStudy.results[0].label}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.article>
              );
            })}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--foreground)] hover:shadow-md"
          >
            View all case studies & articles
            <svg
              className="h-4 w-4 opacity-60 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
