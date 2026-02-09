import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getServiceForListing,
  getExpertiseForListing,
  getAllServiceSlugsFromContent,
  getService,
  getRelatedExpertiseForListing,
} from "@/lib/content";
import ServicePageClient from "./ServicePageClient";
import ExpertisePageClient from "./ExpertisePageClient";
import AISecurityPageClient from "./AISecurityPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugsFromContent();
  return slugs.map((slug) => ({ slug }));
}

// Default OG image configuration for service pages
const defaultOgImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Procedure - AI Engineering Services",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Try service first, then expertise
  const service = getServiceForListing(slug);
  if (service) {
    return {
      title: service.meta.title,
      description: service.meta.description,
      alternates: {
        canonical: `/services/${slug}`,
      },
      openGraph: {
        title: service.meta.title,
        description: service.meta.description,
        type: "website",
        url: `/services/${slug}`,
        images: [defaultOgImage],
      },
      twitter: {
        card: "summary_large_image",
        title: service.meta.title,
        description: service.meta.description,
        images: [defaultOgImage],
        site: "@procedurehq",
        creator: "@procedurehq",
      },
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
        url: `/services/${slug}`,
        images: [defaultOgImage],
      },
      twitter: {
        card: "summary_large_image",
        title: expertise.meta.title,
        description: expertise.meta.description,
        images: [defaultOgImage],
        site: "@procedurehq",
        creator: "@procedurehq",
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
  const frontmatter = rawContent.frontmatter as unknown as Record<
    string,
    unknown
  >;

  // Special handling for AI Security page with custom layout
  if (slug === "ai-security" && frontmatter.aiSecurityData) {
    const aiSecurityData = frontmatter.aiSecurityData as {
      hero: {
        badge: string;
        headline: string;
        headlineAccent: string;
        description: string;
      };
      risks: Array<{ title: string; description: string; icon: string }>;
      services: Array<{
        title: string;
        description: string;
        features: string[];
        output: string;
        icon: string;
      }>;
      process: Array<{ number: number; title: string; description: string }>;
      goodFit: Array<{ text: string }>;
      notFit: Array<{ text: string }>;
      faqs: Array<{ question: string; answer: string }>;
      compliance: string[];
    };

    const relatedExpertise = (frontmatter.relatedExpertise as string[]) || [];
    const relatedPages = getRelatedExpertiseForListing(relatedExpertise);

    return (
      <AISecurityPageClient data={aiSecurityData} relatedPages={relatedPages} />
    );
  }

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

    const relatedPages = getRelatedExpertiseForListing(
      expertise.relatedExpertise || [],
    );

    return (
      <ExpertisePageClient expertise={expertise} relatedPages={relatedPages} />
    );
  }

  notFound();
}
