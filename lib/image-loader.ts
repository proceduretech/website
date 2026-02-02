/**
 * Custom image loader for static export
 * Enables proper srcset generation for responsive images
 * even when using output: "export"
 */

export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // For external URLs, pass through as-is
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  // For local images, return the path with width in query string
  // This allows browser to select appropriate size from srcset
  const params = new URLSearchParams();
  params.set("w", width.toString());
  if (quality) {
    params.set("q", quality.toString());
  }

  return `${src}?${params.toString()}`;
}
