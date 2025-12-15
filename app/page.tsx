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
import { getFeaturedCaseStudiesForListing } from "@/lib/content";

export default function Home() {
  const featuredCaseStudies = getFeaturedCaseStudiesForListing();

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
