'use client';

import { PageHero } from '@/components/ui';

interface ExpertiseHeroProps {
  badge: string;
  headline: string;
  headlineAccent: string;
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

export function ExpertiseHero({
  badge,
  headline,
  headlineAccent,
  tagline,
  description,
  primaryCTA = { text: 'Book a Call', href: '/contact' },
  secondaryCTA = { text: 'View Case Studies', href: '/case-studies' },
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
    />
  );
}
