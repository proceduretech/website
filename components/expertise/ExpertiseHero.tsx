"use client";

import { PageHero } from "@/components/ui";
import { ReactNode } from "react";

interface ExpertiseHeroProps {
  badge: string;
  headline: string;
  headlineAccent?: string;
  tagline?: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  children?: ReactNode;
}

export function ExpertiseHero({
  badge,
  headline,
  headlineAccent,
  tagline,
  description,
  primaryCTA = { text: "Talk to the Team", href: "#book-call" },
  secondaryCTA,
  children,
}: ExpertiseHeroProps) {
  return (
    <PageHero
      badge={badge}
      badgeVariant="teal"
      headline={headline}
      headlineAccent={headlineAccent}
      tagline={tagline}
      description={description}
      primaryCTA={primaryCTA}
      secondaryCTA={secondaryCTA}
    >
      {children}
    </PageHero>
  );
}
