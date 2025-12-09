import {
  Hero,
  ValueProposition,
  Services,
  Testimonials,
  Stats,
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
      <CTA />
    </main>
  );
}
