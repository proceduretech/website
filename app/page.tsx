import {
  Hero,
  ValueProposition,
  Services,
  Testimonials,
  Stats,
  Careers,
  CTA,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Testimonials />
      <Services />
      <Stats />
      <Careers />
      <CTA />
    </main>
  );
}
