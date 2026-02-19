import { ExpertiseHero } from "@/components/expertise";
import type { ExpertisePageForListing } from "@/lib/content";

const heroCTAMap: Record<string, { text: string; href: string }> = {
  "frontend-development": { text: "Talk to a Frontend Specialist", href: "#book-call" },
  "backend-development": { text: "Talk to a Backend Specialist", href: "#book-call" },
  "dotnet": { text: "Talk to a .NET Expert", href: "#book-call" },
  "nextjs": { text: "Talk to a Next.js Engineer", href: "#book-call" },
  "nodejs": { text: "Talk to a Node.js Engineer", href: "#book-call" },
  "react": { text: "Talk to a React Engineer", href: "#book-call" },
  "python": { text: "Talk to a Python Engineer", href: "#book-call" },
  "angular": { text: "Talk to an Angular Engineer", href: "#book-call" },
  "flutter": { text: "Talk to a Flutter Engineer", href: "#book-call" },
  "react-native": { text: "Talk to a React Native Engineer", href: "#book-call" },
  "prometheus-monitoring": { text: "Talk to a Prometheus Engineer", href: "#book-call" },
  "istio-consulting": { text: "Talk to an Istio Engineer", href: "#book-call" },
  "thanos-long-term-storage": { text: "Talk to a Thanos Engineer", href: "#book-call" },
};

const noSecondaryCTASlugs = [
  "ai-engineering", "ai-agents", "dotnet", "nextjs", "nodejs",
  "react", "python", "angular", "flutter", "react-native",
  "prometheus-monitoring", "istio-consulting", "thanos-long-term-storage",
];

const checkSvg = (
  <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const downArrowSvg = (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const dot = <div className="w-1 h-1 rounded-full bg-border" />;

function HeroTrustBadges({ items }: { items: string[] }) {
  return (
    <div className="flex items-center justify-center gap-3 text-xs text-text-muted -mt-6">
      {items.map((item, i) => (
        <div key={i} className="contents">
          {i > 0 && dot}
          <div className="flex items-center gap-1.5">
            {checkSvg}
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroQuickLinks({ links }: { links: { href: string; text: string }[] }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 text-sm">
      {links.map((link, i) => (
        <a key={i} href={link.href} className="text-accent hover:text-accent-light transition-colors flex items-center gap-1.5">
          {link.text}
          {downArrowSvg}
        </a>
      ))}
    </div>
  );
}

// Slug-specific hero children configurations
type HeroChildrenConfig = {
  badges: string[];
  links?: { href: string; text: string }[];
};

const heroChildrenMap: Record<string, HeroChildrenConfig> = {
  "dotnet": {
    badges: ["No obligation", "30-minute call", "Talk with engineers, not sales"],
  },
  "nextjs": {
    badges: ["No strings attached", "30-minute call", "Talk to engineers, not sales"],
    links: [
      { href: "#services", text: "Need an app built?" },
      { href: "#hire", text: "Need developers on your team?" },
    ],
  },
  "react": {
    badges: ["Free architecture review", "30-minute call", "Talk to engineers, not sales"],
    links: [
      { href: "#services", text: "Need an app built?" },
      { href: "#hire", text: "Need developers on your team?" },
    ],
  },
  "python": {
    badges: ["Free architecture review", "30-minute call", "Talk to engineers, not sales"],
    links: [
      { href: "#services", text: "Need a project built?" },
      { href: "#hire", text: "Need developers on your team?" },
    ],
  },
  "nodejs": {
    badges: ["Zero commitment to start", "30-minute call", "Talk to engineers, not sales"],
    links: [
      { href: "#services", text: "Need a project built?" },
      { href: "#hire", text: "Need developers on your team?" },
    ],
  },
  "angular": {
    badges: ["Free architecture review", "30-minute call", "Talk to engineers, not sales"],
    links: [
      { href: "#services", text: "Need an application built?" },
      { href: "#hire", text: "Need developers on your team?" },
    ],
  },
  "flutter": {
    badges: ["No obligation", "30-minute call", "Talk to engineers, not sales"],
    links: [
      { href: "#services", text: "Need an app built?" },
      { href: "#hire", text: "Need developers on your team?" },
    ],
  },
  "react-native": {
    badges: ["Free architecture review", "30-minute call with an engineer", "Talk to builders, not account managers"],
    links: [
      { href: "#services", text: "See our services" },
      { href: "#hire", text: "Hire React Native developers" },
    ],
  },
  "prometheus-monitoring": {
    badges: ["Free assessment", "30-minute call", "Talk with engineers, not sales"],
    links: [
      { href: "#services", text: "See our services" },
      { href: "#fit", text: "Is Prometheus right for you?" },
    ],
  },
  "istio-consulting": {
    badges: ["Free assessment", "30-minute call", "Talk with engineers, not sales"],
    links: [
      { href: "#services", text: "See our services" },
      { href: "#fit", text: "Do you need a service mesh?" },
    ],
  },
  "thanos-long-term-storage": {
    badges: ["Free assessment", "30-minute call", "Talk with engineers, not sales"],
    links: [
      { href: "#services", text: "See our services" },
      { href: "#fit", text: "Is Thanos right for you?" },
    ],
  },
};

export function ExpertisePageHero({ expertise }: { expertise: ExpertisePageForListing }) {
  const childrenConfig = heroChildrenMap[expertise.slug];

  return (
    <ExpertiseHero
      badge={expertise.hero.badge}
      headline={expertise.hero.headline}
      headlineAccent={expertise.hero.headlineAccent}
      description={expertise.hero.description}
      primaryCTA={heroCTAMap[expertise.slug]}
      secondaryCTA={
        noSecondaryCTASlugs.includes(expertise.slug)
          ? undefined
          : { text: "View Case Studies", href: "/work" }
      }
    >
      {childrenConfig && (
        <>
          <HeroTrustBadges items={childrenConfig.badges} />
          {childrenConfig.links && <HeroQuickLinks links={childrenConfig.links} />}
        </>
      )}
    </ExpertiseHero>
  );
}
