import {
  Hero,
  ValueProposition,
  Services,
  HowWeWork,
  Testimonials,
  Stats,
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
      <Stats />
      <Careers />
      <FAQ />
      <CTA />
    </main>
  );
}
