"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/case-studies-data";

interface CaseStudyCardProps {
  study: CaseStudy;
  index?: number;
  variant?: "default" | "compact";
  showReadMore?: boolean;
}

export function CaseStudyCard({
  study,
  index = 0,
  variant = "default",
  showReadMore = false,
}: CaseStudyCardProps) {
  const isCompact = variant === "compact";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full flex flex-col bg-surface-elevated border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-colors">
        {/* Case study image */}
        <div
          className={`relative overflow-hidden ${isCompact ? "h-40" : "h-48"}`}
        >
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Industry badge */}
          <span className="absolute top-4 left-4 px-2.5 py-1 text-xs font-medium text-white bg-black/50 backdrop-blur rounded-full border border-white/20">
            {study.industry}
          </span>

          {/* Service type badge */}
          <span
            className={`absolute top-4 right-4 px-2.5 py-1 text-xs font-medium rounded-full border backdrop-blur ${
              study.serviceType === "AI Engineering"
                ? "text-white bg-accent/60 border-accent/50"
                : "text-white bg-accent-secondary/60 border-accent-secondary/50"
            }`}
          >
            {study.serviceType}
          </span>
        </div>

        {/* Content */}
        <div
          className={`flex-1 flex flex-col ${isCompact ? "p-5 sm:p-6" : "p-6"}`}
        >
          <h3
            className={`font-semibold text-text-primary leading-snug group-hover:text-accent-light transition-colors ${
              isCompact
                ? "text-base sm:text-lg mb-2 line-clamp-2"
                : "text-lg mb-3"
            }`}
          >
            {study.title}
          </h3>
          <p
            className={`text-sm text-text-secondary leading-relaxed flex-1 ${
              isCompact ? "mb-4 line-clamp-2" : "mb-6"
            }`}
          >
            {study.description}
          </p>

          {/* Metrics */}
          <div
            className={`grid grid-cols-3 ${isCompact ? "gap-2 mb-4" : "gap-3 mb-6"}`}
          >
            {study.metrics.map((metric) => (
              <div
                key={metric.label}
                className={`text-center rounded-lg bg-surface border border-border ${
                  isCompact ? "p-2" : "p-3"
                }`}
              >
                <div
                  className={`font-bold text-highlight ${isCompact ? "text-base" : "text-lg"}`}
                >
                  {metric.value}
                </div>
                <div
                  className={`text-text-muted mt-0.5 leading-tight ${
                    isCompact ? "text-[10px]" : "text-xs"
                  }`}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className={`flex flex-wrap ${isCompact ? "gap-1.5" : "gap-2"}`}>
            {study.tags.map((tag) => (
              <span
                key={tag}
                className={`font-medium text-text-muted bg-surface border border-border rounded-md ${
                  isCompact ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read more link (optional) */}
          {showReadMore && (
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-accent-light font-medium text-sm mt-4 group-hover:gap-3 transition-all"
            >
              Read case study
              <span className="w-5 h-px bg-accent-light group-hover:w-7 transition-all" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
