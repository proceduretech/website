import { Metadata } from "next";
import {
  getCaseStudiesForListing,
  getServiceFilters,
  getIndustryFilters,
} from "@/lib/content";
import { CaseStudiesClient } from "./CaseStudiesClient";

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

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudiesForListing();
  const serviceFilters = getServiceFilters();
  const industryFilters = getIndustryFilters();

  return (
    <CaseStudiesClient
      caseStudies={caseStudies}
      serviceFilters={serviceFilters}
      industryFilters={industryFilters}
    />
  );
}
