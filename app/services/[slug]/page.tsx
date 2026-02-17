import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getServiceForListing,
  getExpertiseForListing,
  getAllServiceSlugsFromContent,
  getService,
  getRelatedExpertiseForListing,
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

// Default OG image configuration for service pages
function getOgImage(title: string) {
  return {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: `Procedure - ${title}`,
  };
}

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
        images: [getOgImage(service.hero.badge)],
      },
      twitter: {
        card: "summary_large_image",
        title: service.meta.title,
        description: service.meta.description,
        images: [getOgImage(service.hero.badge)],
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
        images: [getOgImage(expertise.hero.badge)],
      },
      twitter: {
        card: "summary_large_image",
        title: expertise.meta.title,
        description: expertise.meta.description,
        images: [getOgImage(expertise.hero.badge)],
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

  // Generate schema markup for the page
  // skipFaq: expertise-style pages already have FAQPage in ExpertisePageClient's @graph
  const generateSchemas = (pageSlug: string, data: Record<string, unknown>, { skipFaq = false } = {}) => {
    const schemas: Array<Record<string, unknown>> = [];

    // ProfessionalService schema with enhanced properties
    const serviceSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `https://procedure.tech/services/${pageSlug}#service`,
      name: data.title as string,
      description: data.description as string,
      url: `https://procedure.tech/services/${pageSlug}`,
      mainEntityOfPage: `https://procedure.tech/services/${pageSlug}`,
      provider: {
        "@id": "https://procedure.tech/#organization",
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `https://procedure.tech/services/${pageSlug}`,
        serviceLocation: {
          "@type": "Place",
          address: [
            {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              addressCountry: "IN",
            },
            {
              "@type": "PostalAddress",
              addressLocality: "San Francisco",
              addressRegion: "CA",
              addressCountry: "US",
            },
          ],
        },
      },
      offers: {
        "@type": "Offer",
        url: `https://procedure.tech/services/${pageSlug}`,
        priceCurrency: "USD",
        eligibleRegion: ["US", "IN", "EU", "GB"],
      },
      potentialAction: {
        "@type": "CommunicateAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://cal.com/procedure/discovery",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        name: "Book a Discovery Call",
      },
    };

    // Add service types if available
    if (data.capabilities && Array.isArray(data.capabilities)) {
      serviceSchema.serviceType = (data.capabilities as Array<{ title: string }>).map((c) => c.title);
    }

    schemas.push(serviceSchema);

    // FAQPage schema if FAQs exist (skipped for expertise-style pages
    // which already include FAQPage in ExpertisePageClient's combined @graph)
    if (!skipFaq && data.faqs && Array.isArray(data.faqs)) {
      const faqSchema = {
        "@context": "https://schema.org",
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

    const relatedPages = getRelatedExpertiseForListing(
      expertise.relatedExpertise || [],
    );

    // skipFaq: ExpertisePageClient already renders FAQPage in its @graph
    const schemas = generateSchemas(slug, frontmatter, { skipFaq: true });

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
