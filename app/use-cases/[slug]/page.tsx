import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllUseCaseSlugs,
  getUseCasePage,
} from '@/lib/use-cases-data';
import {
  UseCaseHero,
  ProblemSolutionSection,
  ArchitectureDiagram,
  FeaturesBreakdown,
  UseCaseCTA,
} from '@/components/use-cases';
import { SuccessMetrics } from '@/components/industries';
import { WhyProcedure, FAQSection } from '@/components/expertise';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllUseCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getUseCasePage(slug);

  if (!page) {
    return {
      title: 'Use Case | Procedure',
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

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getUseCasePage(slug);

  if (!pageData) {
    notFound();
  }

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

      <UseCaseHero
        badge={pageData.hero.badge}
        headline={pageData.hero.headline}
        highlightedText={pageData.hero.highlightedText}
        tagline={pageData.hero.tagline}
        description={pageData.hero.description}
      />

      <ProblemSolutionSection
        before={pageData.problemSolution.before}
        after={pageData.problemSolution.after}
      />

      <ArchitectureDiagram
        title={pageData.architecture.title}
        subtitle={pageData.architecture.subtitle}
        steps={pageData.architecture.steps}
      />

      <FeaturesBreakdown
        title={pageData.features.title}
        subtitle={pageData.features.subtitle}
        features={pageData.features.items}
      />

      <SuccessMetrics
        title="Proven Results"
        subtitle="Real outcomes from our implementations"
        metrics={pageData.metrics}
      />

      <WhyProcedure
        title={pageData.whyProcedure.title}
        points={pageData.whyProcedure.points}
      />

      <FAQSection faqs={pageData.faqs} />

      <UseCaseCTA
        headline={pageData.cta.headline}
        description={pageData.cta.description}
        primaryCTA={pageData.cta.primaryCTA}
        secondaryCTA={pageData.cta.secondaryCTA}
      />
    </main>
  );
}
