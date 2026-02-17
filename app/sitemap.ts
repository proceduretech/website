import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

import {
  getAllIndustrySlugsFromContent,
  getAllUseCaseSlugsFromContent,
  getAllServiceSlugsFromContent,
  getAllSlugs,
} from "@/lib/content";

const BASE_URL = "https://procedure.tech";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

/**
 * Priority and changeFrequency overrides for specific routes.
 * Routes not listed here get defaults from getRouteDefaults().
 */
const ROUTE_OVERRIDES: Record<
  string,
  { priority?: number; changeFrequency?: ChangeFrequency }
> = {
  "/": { priority: 1, changeFrequency: "weekly" },
  "/about-us": { priority: 0.8 },
  "/contact-us": { priority: 0.8 },
  "/careers": { priority: 0.7, changeFrequency: "weekly" },
  "/work": { priority: 0.9, changeFrequency: "weekly" },
  "/blogs": { priority: 0.8, changeFrequency: "weekly" },
  "/events": { priority: 0.7, changeFrequency: "weekly" },
};

/**
 * Prefix-based defaults for routes without explicit overrides.
 */
function getRouteDefaults(routePath: string): {
  priority: number;
  changeFrequency: ChangeFrequency;
} {
  if (routePath.startsWith("/services"))
    return { priority: 0.9, changeFrequency: "weekly" };
  if (routePath.startsWith("/technologies"))
    return { priority: 0.9, changeFrequency: "weekly" };
  if (routePath.startsWith("/industries"))
    return { priority: 0.8, changeFrequency: "weekly" };
  if (routePath.startsWith("/use-cases"))
    return { priority: 0.8, changeFrequency: "weekly" };
  if (routePath.startsWith("/work"))
    return { priority: 0.8, changeFrequency: "weekly" };
  if (routePath.startsWith("/blogs"))
    return { priority: 0.7, changeFrequency: "weekly" };
  if (routePath.startsWith("/policies"))
    return { priority: 0.3, changeFrequency: "yearly" };
  return { priority: 0.5, changeFrequency: "monthly" };
}

/**
 * Resolve priority and changeFrequency for a route.
 * Explicit override > prefix-based default.
 */
function resolveRouteConfig(routePath: string): {
  priority: number;
  changeFrequency: ChangeFrequency;
} {
  const override = ROUTE_OVERRIDES[routePath];
  const defaults = getRouteDefaults(routePath);
  return {
    priority: override?.priority ?? defaults.priority,
    changeFrequency: override?.changeFrequency ?? defaults.changeFrequency,
  };
}

/**
 * Auto-discover all static (non-dynamic) routes from the app/ directory.
 * Skips directories starting with [ (dynamic routes), _ (private), or ( (route groups).
 * Returns paths like "/about-us", "/services", "/technologies/react", etc.
 */
function discoverStaticAppRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  const routes: string[] = [];

  function scanDir(dir: string, prefix: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasPage = entries.some((e) => e.isFile() && e.name === "page.tsx");

    if (hasPage) {
      routes.push(prefix || "/");
    }

    for (const entry of entries) {
      if (
        entry.isDirectory() &&
        !entry.name.startsWith("[") &&
        !entry.name.startsWith("_") &&
        !entry.name.startsWith("(")
      ) {
        scanDir(
          path.join(dir, entry.name),
          `${prefix}/${entry.name}`
        );
      }
    }
  }

  scanDir(appDir, "");
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  function addUrl(urlPath: string) {
    const url = `${BASE_URL}${urlPath}`;
    if (seen.has(url)) return;
    seen.add(url);

    const config = resolveRouteConfig(urlPath);
    entries.push({
      url,
      lastModified: new Date(),
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    });
  }

  // 1. Auto-discover all static app routes (pages without [slug])
  for (const route of discoverStaticAppRoutes()) {
    addUrl(route);
  }

  // 2. Dynamic content routes (from content/ MDX files)
  for (const slug of getAllServiceSlugsFromContent()) {
    addUrl(`/services/${slug}`);
  }

  for (const slug of getAllIndustrySlugsFromContent()) {
    addUrl(`/industries/${slug}`);
  }

  for (const slug of getAllUseCaseSlugsFromContent()) {
    addUrl(`/use-cases/${slug}`);
  }

  // 3. Blog posts (from Notion/content)
  for (const slug of getAllSlugs("blog")) {
    addUrl(`/blogs/${slug}`);
  }

  return entries;
}
