import type { MetadataRoute } from "next";

export const dynamic = "force-static";

import {
  getAllExpertiseSlugsFromContent,
  getAllIndustrySlugsFromContent,
  getAllUseCaseSlugsFromContent,
  getAllServiceSlugsFromContent,
  getAllTechnologySlugsFromContent,
  getAllSlugs,
} from "@/lib/content";

const BASE_URL = "https://procedure.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact-us", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
    {
      path: "/work",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    { path: "/culture", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/why-us", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/approach", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blogs", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/ai-safety", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/ai-upskill", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/events", priority: 0.7, changeFrequency: "weekly" as const },
    {
      path: "/rubber-duck",
      priority: 0.5,
      changeFrequency: "monthly" as const,
    },
    { path: "/culture", priority: 0.6, changeFrequency: "monthly" as const },
    {
      path: "/policies/privacy-policy",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/policies/terms-conditions",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  for (const page of staticPages) {
    entries.push({
      url: `${BASE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  // Service pages (dynamic)
  const serviceSlugs = getAllServiceSlugsFromContent();
  for (const slug of serviceSlugs) {
    entries.push({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Expertise pages (dynamic) - now using /services/
  const expertiseSlugs = getAllExpertiseSlugsFromContent();
  for (const slug of expertiseSlugs) {
    entries.push({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Industry pages (dynamic)
  const industrySlugs = getAllIndustrySlugsFromContent();
  for (const slug of industrySlugs) {
    entries.push({
      url: `${BASE_URL}/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Use case pages (dynamic)
  const useCaseSlugs = getAllUseCaseSlugsFromContent();
  for (const slug of useCaseSlugs) {
    entries.push({
      url: `${BASE_URL}/use-cases/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Technology pages (dynamic)
  const technologySlugs = getAllTechnologySlugsFromContent();
  for (const slug of technologySlugs) {
    entries.push({
      url: `${BASE_URL}/technologies/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Technology subpages (modernization, etc.)
  entries.push({
    url: `${BASE_URL}/technologies/dotnet/modernization`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  });

  // Blog posts (dynamic)
  // Note: Using current date for now. In future, could fetch from Notion API
  // to get actual lastModified dates for better crawl efficiency
  const blogSlugs = getAllSlugs("blog");
  for (const slug of blogSlugs) {
    entries.push({
      url: `${BASE_URL}/blogs/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return entries;
}
