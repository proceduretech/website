import { notFound } from "next/navigation";
import {
  getTechnologyForListing,
  getRelatedExpertiseForListing,
} from "@/lib/content";
import ExpertisePageClient from "@/app/services/[slug]/ExpertisePageClient";
import { ExpertisePageHero } from "@/app/services/[slug]/ExpertisePageHero";

export default function DotnetPage() {
  const technology = getTechnologyForListing("dotnet");
  if (!technology) {
    notFound();
  }

  const relatedPages = [
    {
      slug: "dotnet-modernization",
      title: ".NET Modernization & Migration",
      description: "Migrate from .NET Framework 4.x to .NET 8 without production downtime.",
      badge: ".NET Modernization",
      href: "/technologies/dotnet/modernization",
    },
    {
      slug: "dotnet-staff-augmentation",
      title: ".NET Staff Augmentation",
      description: "Senior .NET engineers who integrate with your team and hit the ground running.",
      badge: ".NET Staff Augmentation",
      href: "/technologies/dotnet/staff-augmentation",
    },
    ...getRelatedExpertiseForListing(technology.relatedExpertise || []),
  ];

  return (
    <ExpertisePageClient
      expertise={technology}
      relatedPages={relatedPages}
      basePath="/technologies"
      heroSlot={<ExpertisePageHero expertise={technology} />}
    />
  );
}
