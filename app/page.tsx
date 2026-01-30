import type { Metadata } from "next";
import {
  Hero,
  ValueProposition,
  Services,
  HowWeWork,
  EngagementModels,
  FeaturedCaseStudies,
  Testimonials,
  Stats,
  AboutTeaser,
  FAQ,
  CTA,
} from "@/components/sections";
import { getNotionFeaturedCaseStudies } from "@/lib/notion-case-studies";

// Force static generation at build time
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const featuredCaseStudies = await getNotionFeaturedCaseStudies();

  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Testimonials />
      <Services />
      <HowWeWork />
      <EngagementModels />
      <FeaturedCaseStudies caseStudies={featuredCaseStudies} />
      <Stats />
      <AboutTeaser />
      <FAQ />
      <CTA />
    </main>
  );
}
