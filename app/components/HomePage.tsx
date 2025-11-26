import { Hero } from "./Hero";
import { PainPointsSection } from "./PainPointsSection";
import { ServicesSection } from "./ServicesSection";
import { HowWeWorkSection } from "./HowWeWorkSection";
import { AboutSection } from "./AboutSection";
import { SecuritySection } from "./SecuritySection";
import { FeaturedCaseStudies } from "./FeaturedCaseStudies";
import { CTASection } from "./CTASection";

export function HomePage() {
  return (
    <main>
      <Hero />
      <PainPointsSection />
      <ServicesSection />
      <HowWeWorkSection />
      <FeaturedCaseStudies />
      <AboutSection />
      <SecuritySection />
      <CTASection />
    </main>
  );
}
