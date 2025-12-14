"use client";

import { PageHero } from "@/components/ui";

interface UseCaseHeroProps {
  badge: string;
  headline: string;
  highlightedText: string;
  tagline: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function UseCaseHero({
  badge,
  headline,
  highlightedText,
  tagline,
  description,
  primaryCTA = { text: "Book a Call", href: "/contact" },
  secondaryCTA = { text: "See Demo", href: "/contact" },
}: UseCaseHeroProps) {
  return (
    <PageHero
      badge={badge}
      badgeVariant="teal"
      headline={headline}
      headlineAccent={highlightedText}
      tagline={tagline}
      description={description}
      primaryCTA={primaryCTA}
      secondaryCTA={secondaryCTA}
    />
  );
}
