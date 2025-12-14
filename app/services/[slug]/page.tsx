import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getServiceForListing,
  getAllServiceSlugsFromContent,
} from "@/lib/content";
import ServicePageClient from "./ServicePageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugsFromContent();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceForListing(slug);

  if (!service) {
    return {
      title: "Service Not Found | Procedure",
    };
  }

  return {
    title: service.meta.title,
    description: service.meta.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceForListing(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
