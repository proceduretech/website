import { Hero } from "@/components/sections";
import dynamic from "next/dynamic";
import { getNotionFeaturedCaseStudies } from "@/lib/notion-case-studies";

// Dynamically import below-fold sections for better initial bundle size
const ValueProposition = dynamic(() => import("@/components/sections").then(mod => ({ default: mod.ValueProposition })));
const Services = dynamic(() => import("@/components/sections").then(mod => ({ default: mod.Services })));
const HowWeWork = dynamic(() => import("@/components/sections").then(mod => ({ default: mod.HowWeWork })));
const EngagementModels = dynamic(() => import("@/components/sections").then(mod => ({ default: mod.EngagementModels })));
const FeaturedCaseStudies = dynamic(() => import("@/components/sections").then(mod => ({ default: mod.FeaturedCaseStudies })));
const Testimonials = dynamic(() => import("@/components/sections").then(mod => ({ default: mod.Testimonials })));
const Stats = dynamic(() => import("@/components/sections").then(mod => ({ default: mod.Stats })));
const AboutTeaser = dynamic(() => import("@/components/sections").then(mod => ({ default: mod.AboutTeaser })));
const FAQ = dynamic(() => import("@/components/sections").then(mod => ({ default: mod.FAQ })));
const CTA = dynamic(() => import("@/components/sections").then(mod => ({ default: mod.CTA })));

// Force static generation at build time
export const dynamic = "force-static";
export const revalidate = false;

export default async function Home() {
  const featuredCaseStudies = await getNotionFeaturedCaseStudies();

  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Testimonials />
      <Services />
      <HowWeWork />
      <EngagementModels />
      <FeaturedCaseStudies caseStudies={featuredCaseStudies} />
      <Stats />
      <AboutTeaser />
      <FAQ />
      <CTA />
    </main>
  );
}
