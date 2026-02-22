import { notFound } from "next/navigation";
import {
  getTechnologyForListing,
  getRelatedExpertiseForListing,
} from "@/lib/content";
import ExpertisePageClient from "@/app/services/[slug]/ExpertisePageClient";
import { ExpertisePageHero } from "@/app/services/[slug]/ExpertisePageHero";

export default function NextjsPage() {
  const technology = getTechnologyForListing("nextjs");
  if (!technology) {
    notFound();
  }

  const relatedPages = getRelatedExpertiseForListing(
    technology.relatedExpertise || [],
  );

  return (
    <ExpertisePageClient
      expertise={technology}
      relatedPages={relatedPages}
      basePath="/technologies"
      heroSlot={<ExpertisePageHero expertise={technology} />}
    />
  );
}
