import { notFound } from "next/navigation";
import {
  getTechnologyForListing,
  getRelatedExpertiseForListing,
} from "@/lib/content";
import ExpertisePageClient from "@/app/services/[slug]/ExpertisePageClient";

export default function AngularPage() {
  const technology = getTechnologyForListing("angular");
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
    />
  );
}
