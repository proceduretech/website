"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { JobListing } from "@/lib/keka-jobs";

interface JobCardProps {
  job: JobListing;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export function JobCard({ job, isExpanded, onToggle, index }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      {/* Hover glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

      <div className="relative rounded-2xl bg-surface-elevated border border-border overflow-hidden transition-colors duration-200 group-hover:border-accent/20">
        {/* Collapsed Row */}
        <button
          onClick={onToggle}
          className="w-full text-left p-5 sm:p-6 cursor-pointer"
          aria-expanded={isExpanded}
        >
          <div className="flex items-start justify-between gap-4">
            {/* Left: Title + Meta */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-text-primary font-outfit mb-3">
                {job.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* Department badge */}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-accent/10 text-accent-light text-xs font-medium border border-accent/20">
                  {job.department}
                </span>

                {/* Location */}
                <span className="inline-flex items-center gap-1 text-text-secondary text-sm">
                  <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {job.locations.join(", ")}
                </span>

                {/* Job Type */}
                <span className="inline-flex items-center gap-1 text-text-secondary text-sm">
                  <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.jobType}
                </span>

                {/* Experience */}
                {job.experience && (
                  <span className="inline-flex items-center gap-1 text-text-secondary text-sm">
                    <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    {job.experience}
                  </span>
                )}

                {/* Openings count */}
                {job.openings > 1 && (
                  <span className="inline-flex items-center gap-1 text-accent-light text-xs font-medium">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    {job.openings} openings
                  </span>
                )}
              </div>
            </div>

            {/* Right: Apply ghost + Chevron */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-accent-light bg-accent/10 border border-accent/20 rounded-lg hover:bg-accent/20 transition-colors"
              >
                Apply
              </a>
              <div
                className={`w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-6">
                <div className="border-t border-border pt-5">
                  {/* Description */}
                  {job.description && (
                    <div
                      className="prose-job-description mb-6"
                      dangerouslySetInnerHTML={{ __html: job.description }}
                    />
                  )}

                  {/* Apply CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all shadow-lg shadow-cta/25"
                    >
                      Apply Now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                    <span className="text-text-muted text-sm">
                      Opens in Keka careers portal
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
