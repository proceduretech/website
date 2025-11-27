import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blog";
import { verticalIds } from "./config/verticals";
import { locales } from "./i18n/config";

const BASE_URL = "https://procedure.tech";

// Helper to create alternates for a path
function createAlternates(path: string) {
  return {
    languages: Object.fromEntries(
      locales.map((locale) => [
        locale,
        locale === "en" ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`,
      ])
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  const staticPaths = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  for (const locale of locales) {
    for (const page of staticPaths) {
      const url =
        locale === "en"
          ? `${BASE_URL}${page.path || "/"}`
          : `${BASE_URL}/${locale}${page.path}`;

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: createAlternates(page.path || "/"),
      });
    }
  }

  // Vertical pages for each locale
  for (const locale of locales) {
    for (const vertical of verticalIds) {
      const url =
        locale === "en"
          ? `${BASE_URL}/${vertical}`
          : `${BASE_URL}/${locale}/${vertical}`;

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: createAlternates(`/${vertical}`),
      });
    }
  }

  // Blog posts for each locale
  for (const locale of locales) {
    for (const post of blogPosts) {
      const url =
        locale === "en"
          ? `${BASE_URL}/blog/${post.slug}`
          : `${BASE_URL}/${locale}/blog/${post.slug}`;

      entries.push({
        url,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: post.featured ? 0.8 : 0.6,
        alternates: createAlternates(`/blog/${post.slug}`),
      });
    }
  }

  return entries;
}
