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

// Default OG image configuration
const defaultOgImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Procedure - AI Engineering Services",
};

// Helper to check if an image URL is valid (not a temporary Notion URL)
function isValidOgImage(url: string | null | undefined): boolean {
  if (!url) return false;
  if (url.includes("amazonaws.com") || url.includes("notion.so")) return false;
  return true;
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

  // Use case study image if valid, otherwise fall back to default
  const ogImage = isValidOgImage(caseStudy.image)
    ? {
        url: caseStudy.image,
        width: 1200,
        height: 630,
        alt: caseStudy.title,
      }
    : defaultOgImage;

  return {
    title: `${caseStudy.title} | Case Study | Procedure`,
    description: caseStudy.description,
    openGraph: {
      title: `${caseStudy.title} | Case Study`,
      description: caseStudy.description,
      type: "article",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | Case Study`,
      description: caseStudy.description,
      images: [ogImage],
      site: "@procedurehq",
      creator: "@procedurehq",
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
