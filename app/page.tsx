import {
  Hero,
  ValueProposition,
  Services,
  HowWeWork,
  FeaturedCaseStudies,
  Testimonials,
  Stats,
  AboutTeaser,
  FAQ,
  CTA,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Testimonials />
      <Services />
      <HowWeWork />
      <FeaturedCaseStudies />
      <Stats />
      <AboutTeaser />
      <FAQ />
      <CTA />
    </main>
  );
}
