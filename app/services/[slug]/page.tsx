import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getServiceForListing,
  getExpertiseForListing,
  getAllServiceSlugsFromContent,
  getService,
} from "@/lib/content";
import ServicePageClient from "./ServicePageClient";
import ExpertisePageClient from "./ExpertisePageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugsFromContent();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Try service first, then expertise
  const service = getServiceForListing(slug);
  if (service) {
    return {
      title: service.meta.title,
      description: service.meta.description,
    };
  }

  const expertise = getExpertiseForListing(slug);
  if (expertise) {
    return {
      title: expertise.meta.title,
      description: expertise.meta.description,
      alternates: {
        canonical: `/services/${slug}`,
      },
      openGraph: {
        title: expertise.meta.title,
        description: expertise.meta.description,
        type: "website",
      },
    };
  }

  return {
    title: "Service Not Found | Procedure",
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  // Check raw MDX to determine type
  const rawContent = getService(slug);
  if (!rawContent) {
    notFound();
  }

  // Check if it's a service-style or expertise-style MDX based on frontmatter
  const frontmatter = rawContent.frontmatter as any;

  // Service-style has 'benefits' and 'process', expertise-style has 'capabilities'
  if (frontmatter.benefits && frontmatter.process) {
    const service = getServiceForListing(slug);
    if (!service) {
      notFound();
    }
    return <ServicePageClient service={service} />;
  } else if (frontmatter.capabilities) {
    const expertise = getExpertiseForListing(slug);
    if (!expertise) {
      notFound();
    }

    // Get related expertise pages (server-side)
    const { getRelatedExpertiseForListing } = await import("@/lib/content");
    const relatedPages = getRelatedExpertiseForListing(
      expertise.relatedExpertise,
    );

    return (
      <ExpertisePageClient expertise={expertise} relatedPages={relatedPages} />
    );
  }

  notFound();
}
