"use client";

interface YouTubeProps {
  id: string;
  title?: string;
  caption?: string;
  start?: number;
}

export function YouTube({ id, title, caption, start }: YouTubeProps) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${id}${
    start ? `?start=${start}` : ""
  }`;

  return (
    <figure className="my-8">
      <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-surface-elevated">
        <iframe
          src={embedUrl}
          title={title || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
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
