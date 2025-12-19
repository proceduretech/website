import { createHash } from "crypto";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

// Cache directory paths
const CACHE_BASE_DIR = "public/content/cache";
const CASE_STUDIES_CACHE_DIR = `${CACHE_BASE_DIR}/case-studies`;
const BLOG_CACHE_DIR = `${CACHE_BASE_DIR}/blog`;

// Ensure cache directories exist
function ensureCacheDir(dir: string): void {
  const fullPath = join(process.cwd(), dir);
  if (!existsSync(fullPath)) {
    mkdirSync(fullPath, { recursive: true });
  }
}

// Generate a unique filename from URL
function generateFilename(url: string, slug: string, type: "cover" | "content", index?: number): string {
  // Create a short hash from the URL to ensure uniqueness
  const hash = createHash("md5").update(url).digest("hex").substring(0, 8);

  // Extract file extension from URL or default to jpg
  const urlPath = new URL(url).pathname;
  const ext = urlPath.match(/\.(jpg|jpeg|png|gif|webp|avif)$/i)?.[1] || "jpg";

  if (type === "cover") {
    return `${slug}-cover-${hash}.${ext}`;
  }
  return `${slug}-${index ?? 0}-${hash}.${ext}`;
}

// Check if URL is a Notion temporary URL
function isNotionUrl(url: string): boolean {
  return (
    url.includes("prod-files-secure.s3") ||
    url.includes("amazonaws.com") ||
    url.includes("notion.so")
  );
}

// Download and cache a single image
async function downloadImage(url: string, localPath: string): Promise<boolean> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Failed to download image: ${url} (${response.status})`);
      return false;
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    writeFileSync(localPath, buffer);
    return true;
  } catch (error) {
    console.warn(`Error downloading image ${url}:`, error);
    return false;
  }
}

// Check if image already exists in cache
function imageExists(localPath: string): boolean {
  return existsSync(localPath);
}

// =============================================================================
// Public API
// =============================================================================

export interface CachedImage {
  originalUrl: string;
  localPath: string;
  publicPath: string;
}

/**
 * Cache a case study cover image
 * Returns the public path to use in components
 */
export async function cacheCaseStudyCover(
  url: string | null,
  slug: string
): Promise<string | null> {
  if (!url) return null;

  // Skip if not a Notion URL (already a local path)
  if (!isNotionUrl(url)) {
    return url;
  }

  ensureCacheDir(CASE_STUDIES_CACHE_DIR);

  const filename = generateFilename(url, slug, "cover");
  const localPath = join(process.cwd(), CASE_STUDIES_CACHE_DIR, filename);
  const publicPath = `/content/cache/case-studies/${filename}`;

  // Check if already cached
  if (imageExists(localPath)) {
    return publicPath;
  }

  // Download and cache
  const success = await downloadImage(url, localPath);
  return success ? publicPath : url; // Fallback to original URL if download fails
}

/**
 * Cache a case study content image
 * Returns the public path to use in components
 */
export async function cacheCaseStudyContentImage(
  url: string,
  slug: string,
  index: number
): Promise<string> {
  // Skip if not a Notion URL
  if (!isNotionUrl(url)) {
    return url;
  }

  ensureCacheDir(CASE_STUDIES_CACHE_DIR);

  const filename = generateFilename(url, slug, "content", index);
  const localPath = join(process.cwd(), CASE_STUDIES_CACHE_DIR, filename);
  const publicPath = `/content/cache/case-studies/${filename}`;

  // Check if already cached
  if (imageExists(localPath)) {
    return publicPath;
  }

  // Download and cache
  const success = await downloadImage(url, localPath);
  return success ? publicPath : url;
}

/**
 * Cache a blog cover image
 * Returns the public path to use in components
 */
export async function cacheBlogCover(
  url: string | null,
  slug: string
): Promise<string | null> {
  if (!url) return null;

  // Skip if not a Notion URL
  if (!isNotionUrl(url)) {
    return url;
  }

  ensureCacheDir(BLOG_CACHE_DIR);

  const filename = generateFilename(url, slug, "cover");
  const localPath = join(process.cwd(), BLOG_CACHE_DIR, filename);
  const publicPath = `/content/cache/blog/${filename}`;

  // Check if already cached
  if (imageExists(localPath)) {
    return publicPath;
  }

  // Download and cache
  const success = await downloadImage(url, localPath);
  return success ? publicPath : url;
}

/**
 * Cache a blog content image
 * Returns the public path to use in components
 */
export async function cacheBlogContentImage(
  url: string,
  slug: string,
  index: number
): Promise<string> {
  // Skip if not a Notion URL
  if (!isNotionUrl(url)) {
    return url;
  }

  ensureCacheDir(BLOG_CACHE_DIR);

  const filename = generateFilename(url, slug, "content", index);
  const localPath = join(process.cwd(), BLOG_CACHE_DIR, filename);
  const publicPath = `/content/cache/blog/${filename}`;

  // Check if already cached
  if (imageExists(localPath)) {
    return publicPath;
  }

  // Download and cache
  const success = await downloadImage(url, localPath);
  return success ? publicPath : url;
}

/**
 * Process all images in content blocks and cache them
 * Mutates the content array in place for efficiency
 */
export async function cacheContentImages<T extends { type: string; url?: string }>(
  content: T[],
  slug: string,
  cacheType: "case-study" | "blog"
): Promise<void> {
  let imageIndex = 0;

  for (const block of content) {
    if (block.type === "image" && block.url) {
      const cacheFn = cacheType === "case-study"
        ? cacheCaseStudyContentImage
        : cacheBlogContentImage;

      block.url = await cacheFn(block.url, slug, imageIndex);
      imageIndex++;
    }
  }
}
