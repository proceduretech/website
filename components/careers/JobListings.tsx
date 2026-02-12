"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { JobListing as JobListingType } from "@/lib/keka-jobs";
import { JobCard } from "./JobCard";
import { JobFilters } from "./JobFilters";

interface JobListingsProps {
  jobs: JobListingType[];
  departments: string[];
}

export function JobListings({ jobs, departments }: JobListingsProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    if (activeFilter === "All") return jobs;
    return jobs.filter((job) => job.department === activeFilter);
  }, [jobs, activeFilter]);

  const jobCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const job of jobs) {
      counts[job.department] = (counts[job.department] || 0) + 1;
    }
    return counts;
  }, [jobs]);

  const handleToggle = (jobId: string) => {
    setExpandedJobId((prev) => (prev === jobId ? null : jobId));
  };

  const handleFilterChange = (dept: string) => {
    setActiveFilter(dept);
    setExpandedJobId(null);
  };

  // Empty state: no jobs at all
  if (jobs.length === 0) {
    return (
      <div className="text-center py-16">
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
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2 font-outfit">
          No open positions right now
        </h3>
        <p className="text-text-secondary mb-6 max-w-md mx-auto">
          We don&apos;t have any open roles at the moment, but we&apos;re
          always looking for talented people.
        </p>
        <a
          href="https://procedure.keka.com/careers/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all"
        >
          Visit Careers Portal
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Filters */}
      {departments.length > 2 && (
        <JobFilters
          departments={departments}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          jobCounts={jobCounts}
        />
      )}

      {/* Job count */}
      <p className="text-text-muted text-sm">
        {filteredJobs.length === jobs.length
          ? `${jobs.length} open position${jobs.length !== 1 ? "s" : ""}`
          : `Showing ${filteredJobs.length} of ${jobs.length} positions`}
      </p>

      {/* Job Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {filteredJobs.map((job, idx) => (
            <JobCard
              key={job.id}
              job={job}
              isExpanded={expandedJobId === job.id}
              onToggle={() => handleToggle(job.id)}
              index={idx}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty state: filter yields no results */}
      {filteredJobs.length === 0 && (
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
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2 font-outfit">
            No positions in this department
          </h3>
          <p className="text-text-secondary mb-6">
            Try viewing all departments or check back later.
          </p>
          <button
            onClick={() => handleFilterChange("All")}
            className="px-6 py-3 text-sm font-semibold text-accent-light bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent/20 transition-colors"
          >
            View all positions
          </button>
        </motion.div>
      )}
    </div>
  );
}
