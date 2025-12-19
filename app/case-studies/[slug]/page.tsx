import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getNotionCaseStudySlugs,
  getNotionCaseStudyBySlug,
  getRelatedCaseStudies,
} from "@/lib/notion-case-studies";
import { CaseStudyDetailClient } from "./CaseStudyDetailClient";

// Force static generation at build time
export const dynamic = "force-static";
export const revalidate = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static params for all case study pages
 * This tells Next.js which slugs to pre-render at build time
 */
export async function generateStaticParams() {
  const slugs = await getNotionCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Generate metadata for each case study page
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getNotionCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Procedure",
    };
  }

  return {
    title: `${caseStudy.title} | Case Study | Procedure`,
    description: caseStudy.description,
    openGraph: {
      title: `${caseStudy.title} | Case Study`,
      description: caseStudy.description,
      type: "article",
      images: [caseStudy.image],
    },
  };
}

/**
 * Case Study Detail Page
 * This is a Server Component that fetches data at build time
 */
export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = await getNotionCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedCaseStudies = await getRelatedCaseStudies(slug, 3);

  return (
    <CaseStudyDetailClient
      caseStudy={caseStudy}
      relatedCaseStudies={relatedCaseStudies}
    />
  );
}
