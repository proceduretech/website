import Image from "next/image";
interface NotionLinkPreviewProps {
  url: string;
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
}

export function NotionLinkPreview({
  url,
  title,
  description,
  image,
  siteName,
}: NotionLinkPreviewProps) {
  // Extract domain from URL for fallback
  let domain = "";
  try {
    domain = new URL(url).hostname.replace("www.", "");
  } catch {
    domain = url;
  }

  // Use URL as fallback title if no title provided
  const displayTitle = title || url;
  const displaySiteName = siteName || domain;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block my-8 rounded-xl border border-border bg-surface-elevated/50 overflow-hidden hover:border-accent/50 transition-colors no-underline"
    >
      {image && (
        <div className="w-full h-48 overflow-hidden bg-surface">
          <Image
            src={image}
            alt={displayTitle}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          {/* Favicon placeholder */}
          <div className="w-5 h-5 rounded bg-surface flex items-center justify-center">
            <svg
              className="w-3 h-3 text-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </div>
          <span className="text-sm text-text-muted">{displaySiteName}</span>
        </div>
        <h4 className="text-base font-semibold group-hover:text-highlight transition-colors mb-2">
          {displayTitle}
        </h4>
        {description && (
          <p className="text-sm text-text-secondary line-clamp-2 mb-3">
            {description}
          </p>
        )}
        <div className="flex items-center gap-1 text-xs text-accent-light">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span>{domain}</span>
        </div>
      </div>
    </a>
  );
}
