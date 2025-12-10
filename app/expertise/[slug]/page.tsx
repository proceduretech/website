import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllExpertiseSlugs,
  getExpertisePage,
  getRelatedExpertisePages,
  Icons,
} from '@/lib/expertise-data';
import {
  ExpertiseHero,
  CapabilitiesGrid,
  WhyProcedure,
  TechStack,
  FAQSection,
  ExpertiseCTA,
  RelatedExpertise,
} from '@/components/expertise';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllExpertiseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getExpertisePage(slug);

  if (!page) {
    return {
      title: 'Expertise | Procedure',
    };
  }

  return {
    title: page.meta.title,
    description: page.meta.description,
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      type: 'website',
    },
  };
}

export default async function ExpertisePage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getExpertisePage(slug);

  if (!pageData) {
    notFound();
  }

  // Map capabilities with their icons
  const capabilities = pageData.capabilities.map((cap) => ({
    ...cap,
    icon: Icons[cap.icon],
  }));

  // Get related expertise pages
  const relatedPages = getRelatedExpertisePages(pageData.relatedExpertise);

  // Map technologies to objects
  const technologies = pageData.technologies.map((name) => ({ name }));

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: pageData.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <ExpertiseHero
        badge={pageData.hero.badge}
        headline={pageData.hero.headline}
        headlineAccent={pageData.hero.headlineAccent}
        tagline={pageData.hero.tagline}
        description={pageData.hero.description}
      />

      <CapabilitiesGrid
        title="Key Capabilities"
        subtitle="Everything you need to build production-grade solutions"
        capabilities={capabilities}
      />

      <WhyProcedure
        title={`Why Procedure for ${pageData.hero.badge}?`}
        points={pageData.whyProcedure}
      />

      <TechStack
        title="Technologies We Use"
        subtitle="Production-tested tools and frameworks"
        technologies={technologies}
      />

      <FAQSection faqs={pageData.faqs} />

      {relatedPages.length > 0 && <RelatedExpertise pages={relatedPages} />}

      <ExpertiseCTA
        headline={pageData.cta.headline}
        description={pageData.cta.description}
      />
    </main>
  );
}
