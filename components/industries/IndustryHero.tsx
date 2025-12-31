"use client";

import { PageHero } from "@/components/ui";

interface Stat {
  value: string;
  label: string;
}

interface IndustryHeroProps {
  badge: string;
  headline: string;
  headlineAccent: string;
  tagline: string;
  description: string;
  stats: Stat[];
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function IndustryHero({
  badge,
  headline,
  headlineAccent,
  tagline,
  description,
  stats,
  primaryCTA = { text: "Book a Call", href: "/contact-us" },
  secondaryCTA = { text: "View Case Studies", href: "/work" },
}: IndustryHeroProps) {
  return (
    <PageHero
      badge={badge}
      badgeVariant="teal"
      headline={headline}
      headlineAccent={headlineAccent}
      tagline={tagline}
      description={description}
      stats={stats}
      primaryCTA={primaryCTA}
      secondaryCTA={secondaryCTA}
    />
  );
}
