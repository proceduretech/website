import { getPlaiceholder } from "plaiceholder";
import fs from "fs";
import path from "path";

export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
}

/**
 * Generate blur placeholder for an image
 * Called at build time (in Server Components)
 */
export async function getImageMetadata(
  imagePath: string
): Promise<ImageMetadata | null> {
  // Handle paths starting with / (public folder paths)
  const relativePath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  const fullPath = path.join(process.cwd(), "public", relativePath);

  if (!fs.existsSync(fullPath)) {
    console.warn(`Image not found: ${fullPath}`);
    return null;
  }

  try {
    const buffer = fs.readFileSync(fullPath);
    const { base64, metadata } = await getPlaiceholder(buffer);

    return {
      src: imagePath.startsWith("/") ? imagePath : `/${imagePath}`,
      width: metadata.width,
      height: metadata.height,
      blurDataURL: base64,
    };
  } catch (error) {
    console.error(`Error generating placeholder for ${imagePath}:`, error);
    return null;
  }
}

/**
 * Get cover image path for a blog post
 */
export function getBlogCoverPath(slug: string): string {
  return `/content/blog/${slug}/cover.jpg`;
}

/**
 * Check if cover image exists, return path or null
 * Checks common extensions: jpg, jpeg, png, webp
 */
export function getBlogCoverIfExists(slug: string): string | null {
  const basePath = `/content/blog/${slug}/cover`;
  const extensions = [".jpg", ".jpeg", ".png", ".webp"];

  for (const ext of extensions) {
    const imagePath = `${basePath}${ext}`;
    const fullPath = path.join(process.cwd(), "public", imagePath.slice(1));
    if (fs.existsSync(fullPath)) {
      return imagePath;
    }
  }

  return null;
}

/**
 * Get image metadata for a blog post cover image
 * Auto-detects the cover image file extension
 */
export async function getBlogCoverMetadata(
  slug: string
): Promise<ImageMetadata | null> {
  const coverPath = getBlogCoverIfExists(slug);
  if (!coverPath) {
    return null;
  }
  return getImageMetadata(coverPath);
}
