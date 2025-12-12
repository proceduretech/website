import type { MetadataRoute } from 'next';
import { getAllExpertiseSlugs } from '@/lib/expertise-data';
import { getAllIndustrySlugs } from '@/lib/industries-data';
import { getAllUseCaseSlugs } from '@/lib/use-cases-data';

const BASE_URL = 'https://procedure.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  const staticPages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/careers', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/case-studies', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/culture', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/why-us', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  for (const page of staticPages) {
    entries.push({
      url: `${BASE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  // Service pages
  const servicePages = [
    'enterprise',
    'startups',
    'scale-ups',
    'forward-deployed',
    'staff-augmentation',
    'ai-sprints',
    'product-build',
  ];

  for (const service of servicePages) {
    entries.push({
      url: `${BASE_URL}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  }

  // Expertise pages (dynamic)
  const expertiseSlugs = getAllExpertiseSlugs();
  for (const slug of expertiseSlugs) {
    entries.push({
      url: `${BASE_URL}/expertise/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  // Industry pages (dynamic)
  const industrySlugs = getAllIndustrySlugs();
  for (const slug of industrySlugs) {
    entries.push({
      url: `${BASE_URL}/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  // Use case pages (dynamic)
  const useCaseSlugs = getAllUseCaseSlugs();
  for (const slug of useCaseSlugs) {
    entries.push({
      url: `${BASE_URL}/use-cases/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  return entries;
}
