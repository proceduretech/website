import {
  Hero,
  ValueProposition,
  Services,
  HowWeWork,
  FeaturedCaseStudies,
  Testimonials,
  Stats,
  Team,
  Careers,
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
      <Team />
      <Careers />
      <FAQ />
      <CTA />
    </main>
  );
}
