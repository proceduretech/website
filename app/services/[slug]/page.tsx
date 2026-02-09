import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getServiceForListing,
  getExpertiseForListing,
  getAllServiceSlugsFromContent,
  getService,
} from "@/lib/content";
import { JsonLd } from "@/components/seo";
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
  const frontmatter = rawContent.frontmatter as unknown as Record<string, unknown>;

  // Generate schema markup for the page
  const generateSchemas = (pageSlug: string, data: Record<string, unknown>) => {
    const schemas: Array<Record<string, unknown>> = [];

    // ProfessionalService schema
    const serviceSchema: Record<string, unknown> = {
      "@type": "ProfessionalService",
      name: data.title as string,
      description: data.description as string,
      url: `https://procedure.tech/services/${pageSlug}`,
      provider: {
        "@type": "Organization",
        name: "Procedure Technologies",
        url: "https://procedure.tech",
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "India" },
      ],
    };

    // Add service types if available
    if (data.capabilities && Array.isArray(data.capabilities)) {
      serviceSchema.serviceType = (data.capabilities as Array<{ title: string }>).map((c) => c.title);
    }

    schemas.push(serviceSchema);

    // FAQPage schema if FAQs exist
    if (data.faqs && Array.isArray(data.faqs)) {
      const faqSchema = {
        "@type": "FAQPage",
        mainEntity: (data.faqs as Array<{ question: string; answer: string }>).map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };
      schemas.push(faqSchema);
    }

    return schemas;
  };

  // Service-style has 'benefits' and 'process', expertise-style has 'capabilities'
  if (frontmatter.benefits && frontmatter.process) {
    const service = getServiceForListing(slug);
    if (!service) {
      notFound();
    }

    const schemas = generateSchemas(slug, frontmatter);

    return (
      <>
        {schemas.map((schema, index) => (
          <JsonLd key={index} data={schema} />
        ))}
        <ServicePageClient service={service} />
      </>
    );
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

    const schemas = generateSchemas(slug, frontmatter);

    return (
      <>
        {schemas.map((schema, index) => (
          <JsonLd key={index} data={schema} />
        ))}
        <ExpertisePageClient expertise={expertise} relatedPages={relatedPages} />
      </>
    );
  }

  notFound();
}
