import { HeroContent } from "./HeroContent";
import { HeroAnimations, HeroScrollIndicator } from "./HeroAnimations";
import { ClientLogos } from "./ClientLogos";

// Server component - H1 renders immediately as HTML for fast LCP
// Animations load as client components after hydration
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base">
      {/* Background animations - client component, loads after */}
      <HeroAnimations />

      {/* Main content - server component, renders immediately */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        <HeroContent />
        <ClientLogos />
      </div>

      {/* Scroll indicator - client component */}
      <HeroScrollIndicator />
    </section>
  );
}
