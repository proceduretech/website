"use client";

import Image from "next/image";
import { useState } from "react";

interface MDXImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export function MDXImage({
  src,
  alt,
  width,
  height,
  blurDataURL,
}: MDXImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Handle external images with standard img tag
  const isExternal = src.startsWith("http");
  if (isExternal) {
    return (
      <figure className="my-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || ""}
          className="rounded-xl border border-border w-full"
          loading="lazy"
        />
        {alt && (
          <figcaption className="mt-3 text-center text-sm text-text-muted">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  }

  // Fallback for error state
  if (hasError) {
    return (
      <figure className="my-8">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-elevated border border-border flex items-center justify-center">
          <div className="text-center text-text-muted">
            <svg
              className="w-12 h-12 mx-auto mb-2 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <p className="text-sm">Image not found</p>
          </div>
        </div>
        {alt && (
          <figcaption className="mt-3 text-center text-sm text-text-muted">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  }

  // For images without pre-calculated dimensions, use fill mode with aspect ratio container
  if (!width || !height) {
    return (
      <figure className="my-8">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-elevated border border-border">
          <Image
            src={src}
            alt={alt || ""}
            fill
            className={`object-contain transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setIsLoading(false)}
            onError={() => setHasError(true)}
            sizes="(max-width: 768px) 100vw, 800px"
          />
          {isLoading && (
            <div className="absolute inset-0 animate-pulse bg-surface-elevated" />
          )}
        </div>
        {alt && (
          <figcaption className="mt-3 text-center text-sm text-text-muted">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  }

  // For images with known dimensions
  return (
    <figure className="my-8">
      <div className="rounded-xl overflow-hidden border border-border">
        <Image
          src={src}
          alt={alt || ""}
          width={width}
          height={height}
          className={`w-full h-auto transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
        />
      </div>
      {alt && (
        <figcaption className="mt-3 text-center text-sm text-text-muted">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}
