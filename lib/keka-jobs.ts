import { cache } from "react";
import sanitizeHtml from "sanitize-html";
import { isKekaConfigured, fetchKekaJobs, type KekaJobRaw } from "./keka";

// =============================================================================
// Types
// =============================================================================

export interface JobListing {
  id: string;
  title: string;
  description: string; // sanitized HTML
  department: string;
  jobType: string;
  locations: string[];
  experience: string;
  openings: number;
  applyUrl: string;
  publishedDate: string;
}

// =============================================================================
// Sanitization Config
// =============================================================================

const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "ul", "ol", "li",
    "strong", "em", "b", "i", "br",
    "a", "span", "div",
    "table", "thead", "tbody", "tr", "th", "td",
  ],
  allowedAttributes: {
    a: ["href", "target", "rel"],
  },
  transformTags: {
    a: sanitizeHtml.simpleTransform("a", {
      target: "_blank",
      rel: "noopener noreferrer",
    }),
  },
};

// =============================================================================
// Transform
// =============================================================================

function normalizeJobType(type: string): string {
  const map: Record<string, string> = {
    fulltime: "Full-time",
    full_time: "Full-time",
    parttime: "Part-time",
    part_time: "Part-time",
    contract: "Contract",
    internship: "Internship",
    temporary: "Temporary",
    freelance: "Freelance",
  };
  return map[type?.toLowerCase()] || type || "Full-time";
}

function formatLocation(loc: { name?: string; city?: string; state?: string; country?: string }): string {
  if (loc.name) return loc.name;
  return [loc.city, loc.country].filter(Boolean).join(", ");
}

function transformJob(raw: KekaJobRaw): JobListing {
  const locations = raw.jobLocations?.length
    ? raw.jobLocations.map(formatLocation).filter(Boolean)
    : ["Remote"];

  return {
    id: raw.id,
    title: raw.title,
    description: sanitizeHtml(raw.description || "", SANITIZE_OPTIONS),
    department: raw.departmentName || "General",
    jobType: normalizeJobType(raw.jobType),
    locations: [...new Set(locations)], // deduplicate
    experience: raw.experience || "",
    openings: raw.noOfOpenings || 1,
    applyUrl: raw.careerPortalUrl || `https://procedure.keka.com/careers/`,
    publishedDate: raw.publishedOn || raw.createdOn,
  };
}

// =============================================================================
// Public API
// =============================================================================

export const getJobListings = cache(async (): Promise<JobListing[]> => {
  if (!isKekaConfigured()) {
    console.warn("Keka credentials not configured, returning empty job listings");
    return [];
  }

  try {
    const rawJobs = await fetchKekaJobs();
    return rawJobs
      .map(transformJob)
      .sort(
        (a, b) =>
          new Date(b.publishedDate).getTime() -
          new Date(a.publishedDate).getTime(),
      );
  } catch (error) {
    console.error("Error processing Keka job listings:", error);
    return [];
  }
});

export async function getJobDepartments(): Promise<string[]> {
  const jobs = await getJobListings();
  const departments = [...new Set(jobs.map((j) => j.department))].sort();
  return ["All", ...departments];
}
