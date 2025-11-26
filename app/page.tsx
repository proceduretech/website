import { Hero } from "./components/Hero";
import { PainPointsSection } from "./components/PainPointsSection";
import { ServicesSection } from "./components/ServicesSection";
import { HowWeWorkSection } from "./components/HowWeWorkSection";
import { AboutSection } from "./components/AboutSection";
import { SecuritySection } from "./components/SecuritySection";
import { CTASection } from "./components/CTASection";

export default function Home() {
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
