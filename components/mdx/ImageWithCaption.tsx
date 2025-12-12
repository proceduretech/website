import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  rounded?: boolean;
  border?: boolean;
  shadow?: boolean;
}

export function ImageWithCaption({
  src,
  alt,
  caption,
  width = 1200,
  height = 630,
  priority = false,
  rounded = true,
  border = true,
  shadow = false,
}: ImageWithCaptionProps) {
  const isExternal = src.startsWith("http");

  return (
    <figure className="my-8">
      <div
        className={`relative overflow-hidden ${rounded ? "rounded-xl" : ""} ${
          border ? "border border-border" : ""
        } ${shadow ? "shadow-2xl" : ""}`}
      >
        {isExternal ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="w-full h-auto"
            loading={priority ? "eager" : "lazy"}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="w-full h-auto"
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
