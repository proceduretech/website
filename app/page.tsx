import { Hero } from "./components/Hero";
import { PerspectiveSection } from "./components/PerspectiveSection";
import { ServicesSection } from "./components/ServicesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <PerspectiveSection />
      <ServicesSection />
    </main>
  );
}
