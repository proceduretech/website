import { Metadata } from "next";
import {
  getNotionCaseStudies,
  getNotionServiceFilters,
  getNotionIndustryFilters,
} from "@/lib/notion-case-studies";
import { CaseStudiesClient } from "./CaseStudiesClient";

// Force static generation at build time
// This ensures the page is pre-rendered during `next build`
// and the Notion API is only called at build time, not on every request
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Case Studies | Production AI Success Stories | Procedure",
  description:
    "Explore how we've helped Fortune 500 enterprises and high-growth startups build production AI systems that deliver measurable business outcomes.",
  openGraph: {
    title: "Case Studies | Production AI Success Stories | Procedure",
    description:
      "Explore how we've helped Fortune 500 enterprises and high-growth startups build production AI systems.",
    type: "website",
  },
};

export default async function CaseStudiesPage() {
  // These functions are called at build time (during `next build`)
  // The data is fetched from Notion once and baked into the static HTML
  const caseStudies = await getNotionCaseStudies();
  const serviceFilters = getNotionServiceFilters();
  const industryFilters = await getNotionIndustryFilters();

  return (
    <CaseStudiesClient
      caseStudies={caseStudies}
      serviceFilters={serviceFilters}
      industryFilters={industryFilters}
    />
  );
}
