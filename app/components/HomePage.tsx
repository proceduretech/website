import { Hero } from "./Hero";
import { PainPointsSection } from "./PainPointsSection";
import { ServicesSection } from "./ServicesSection";
import { HowWeWorkSection } from "./HowWeWorkSection";
import { AboutSection } from "./AboutSection";
import { SecuritySection } from "./SecuritySection";
import { CTASection } from "./CTASection";

export function HomePage() {
  return (
    <main>
      <Hero />
      <PainPointsSection />
      <ServicesSection />
      <HowWeWorkSection />
      <AboutSection />
      <SecuritySection />
      <CTASection />
    </main>
  );
}
