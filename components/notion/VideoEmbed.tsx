interface VideoEmbedProps {
  url: string;
  caption?: string;
}

/**
 * Extracts YouTube video ID from various URL formats
 */
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]+)/,
    /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]+)/,
    /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  return null;
}

/**
 * Extracts Vimeo video ID from URL
 */
function getVimeoVideoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
}

/**
 * Video embed component supporting YouTube, Vimeo, and generic video URLs
 * Responsive: Contained within parent on all screen sizes
 */
export function VideoEmbed({ url, caption }: VideoEmbedProps) {
  // Try YouTube
  const youtubeId = getYouTubeVideoId(url);
  if (youtubeId) {
    return (
      <figure className="my-6 sm:my-8 w-full max-w-full overflow-hidden">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title={caption || "YouTube video"}
          />
        </div>
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-text-muted">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // Try Vimeo
  const vimeoId = getVimeoVideoId(url);
  if (vimeoId) {
    return (
      <figure className="my-6 sm:my-8 w-full max-w-full overflow-hidden">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-black">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}`}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            title={caption || "Vimeo video"}
          />
        </div>
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-text-muted">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // Generic video embed (direct video file or other platforms)
  return (
    <figure className="my-6 sm:my-8 w-full max-w-full overflow-hidden">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-black">
        <iframe
          src={url}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          loading="lazy"
          title={caption || "Video content"}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

