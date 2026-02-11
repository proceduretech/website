import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FooterReveal } from "@/components/FooterReveal";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/seo";
import { siteConfig, getThemeClass } from "@/lib/site-config";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  // Variable font - includes all weights 100-900
  display: "swap", // Prevents FOIT (Flash of Invisible Text)
  preload: true, // Preloads font files for faster rendering
  adjustFontFallback: true, // Automatically adjust font fallback metrics
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // Variable font - includes all weights 100-900
  display: "swap", // Prevents FOIT (Flash of Invisible Text)
  preload: true, // Preloads font files for faster rendering
  adjustFontFallback: true, // Automatically adjust font fallback metrics
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

const BASE_URL = "https://procedure.tech";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.png",
  },
  title: "AI Engineering Services | Enterprise AI Development | Procedure",
  description:
    "Forward-deployed AI engineers embedded with your team. Build production-grade AI systems, LLM apps, and ML models. Builders, not consultants.",
  keywords: [
    "AI engineering services",
    "enterprise AI development",
    "AI consulting",
    "LLM development",
    "custom AI solutions",
    "machine learning consulting",
    "AI integration services",
    "production AI systems",
  ],
  openGraph: {
    title: "AI Engineering Services | Enterprise AI Development | Procedure",
    description:
      "Forward-deployed AI engineers embedded with your team. We build production-grade AI systems, LLM applications, and custom ML models.",
    type: "website",
    url: BASE_URL,
    siteName: "Procedure",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Procedure - AI Engineering Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering Services | Enterprise AI Development | Procedure",
    description:
      "Forward-deployed AI engineers embedded with your team. We build production-grade AI systems, LLM applications, and custom ML models.",
    images: ["/og-image.png"],
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

// Viewport configuration - separate from metadata in Next.js 16+
// Theme color for mobile browser chrome - controlled by site-config.ts
export const viewport: Viewport = {
  themeColor: siteConfig.themeColors[siteConfig.theme],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Theme class is controlled by site-config.ts
  // Change siteConfig.theme to 'light' or 'dark' to switch themes
  const themeClass = getThemeClass();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://procedure.tech/#organization",
    name: "Procedure Technologies",
    alternateName: "Procedure",
    url: "https://procedure.tech",
    logo: "https://procedure.tech/logo.svg",
    image: "https://procedure.tech/og-image.png",
    description:
      "AI-native design & development studio. Senior AI engineers embedded with your team to build production-grade AI systems, LLM applications, and custom ML models.",
    foundingDate: "2017",
    foundingLocation: {
      "@type": "Place",
      name: "Mumbai, India",
    },
    sameAs: [
      "https://www.wikidata.org/wiki/Q137392993",
      "https://www.linkedin.com/company/procedure-tech",
      "https://github.com/aspect-build",
      "https://www.glassdoor.co.in/Reviews/Procedure-Technologies-Reviews-E2578960.htm",
      "https://www.crunchbase.com/organization/procedure",
      "https://in.linkedin.com/company/procedurehq",
      "https://x.com/procedurehq",
      "https://github.com/proceduretech",
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        addressCountry: "US",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@procedure.tech",
      availableLanguage: ["English"],
    },
    founder: [
      {
        "@type": "Person",
        "@id": "https://www.wikidata.org/wiki/Q137392996",
        name: "Brajkishor Baheti",
        jobTitle: "Chief Executive Officer",
        sameAs: "https://www.linkedin.com/in/brajkishor",
      },
      {
        "@type": "Person",
        "@id": "https://www.wikidata.org/wiki/Q137392995",
        name: "Ulhas Mandrawadkar",
        jobTitle: "Chief Technology Officer",
        sameAs: "https://www.linkedin.com/in/ulhasmandrawadkar",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "32",
      bestRating: "5",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "AI Security",
      "LLM Applications",
      "Software Engineering",
      "Cloud Computing",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://procedure.tech/#service",
    serviceType: "AI Engineering Services",
    provider: {
      "@id": "https://procedure.tech/#organization",
    },
    name: "AI Engineering Services",
    description:
      "Forward-deployed AI engineers who build production AI systems. LLM applications, AI agents, RAG systems, and secure AI deployment.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Sprints",
            description:
              "Rapid 2-4 week AI prototypes and validation sprints. From $15K-$50K.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Forward-Deployed Engineering Teams",
            description:
              "Senior AI engineers embedded with your team. Starting at $50K/month.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Product Build",
            description:
              "Complete AI product development from architecture to production deployment. 8-20 weeks depending on scope.",
          },
        },
      ],
    },
  };

  // NOTE: FAQPage schema moved to app/page.tsx (homepage only) to avoid
  // duplicate FAQPage schemas on subpages that have their own FAQ sections.
  // Google expects only one FAQPage schema per page.

  return (
    <html lang="en" className={themeClass}>
      <head>
        {/* Critical inline CSS for instant render - includes hero styles to avoid FOUC */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root{--color-base:#0A1425;--color-surface:#070F1B;--color-surface-elevated:#111F35;--color-border:#1E293B;--color-text-primary:rgba(255,255,255,.9);--color-text-secondary:rgba(255,255,255,.65);--color-text-muted:rgba(255,255,255,.5);--color-accent:#14B8A6;--color-accent-light:#2AAE79;--color-cta:#1D9B69;--color-cta-text:#fcfcfc;--color-highlight:#1D9B69}
              *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}
              html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;scrollbar-gutter:stable;scroll-behavior:smooth}
              body{margin:0;line-height:inherit;background-color:var(--color-base);color:var(--color-text-primary);font-family:var(--font-inter),system-ui,-apple-system,sans-serif}
              img{height:auto;max-width:100%}
              h1,h2,h3{margin:0;font-family:var(--font-outfit),system-ui,-apple-system,sans-serif}
              .text-highlight{color:var(--color-highlight)}
              .text-text-primary{color:var(--color-text-primary)}
              .text-text-secondary{color:var(--color-text-secondary)}
              .bg-base{background-color:var(--color-base)}
              .bg-surface{background-color:var(--color-surface)}
              .bg-cta{background-color:var(--color-cta)}
              .text-cta-text{color:var(--color-cta-text)}
              .min-h-screen{min-height:100vh}
              .relative{position:relative}
              .absolute{position:absolute}
              .inset-0{inset:0}
              .z-10{z-index:10}
              .flex{display:flex}
              .items-center{align-items:center}
              .justify-center{justify-content:center}
              .text-center{text-align:center}
              .overflow-hidden{overflow:hidden}
              .mx-auto{margin-left:auto;margin-right:auto}
              .px-6{padding-left:1.5rem;padding-right:1.5rem}
              .pt-24{padding-top:6rem}
              .pb-16{padding-bottom:4rem}
              .mb-6{margin-bottom:1.5rem}
              .max-w-5xl{max-width:64rem}
              .max-w-2xl{max-width:42rem}
              .leading-tight{line-height:1.1}
              .tracking-tight{letter-spacing:-0.025em}
              .font-semibold{font-weight:600}
              .text-3xl{font-size:1.875rem;line-height:2.25rem}
              .text-base{font-size:1rem;line-height:1.5rem}
              @media(min-width:640px){.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\\:text-lg{font-size:1.125rem;line-height:1.75rem}.sm\\:px-8{padding-left:2rem;padding-right:2rem}}
              @media(min-width:768px){.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}
              @media(min-width:1024px){.lg\\:text-5xl{font-size:3rem;line-height:1}}
            `,
          }}
        />

        {/* Third-party resource hints - prioritized */}
        {/* Note: next/font/google self-hosts fonts, so no preconnect to fonts.googleapis.com needed */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://stats.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        {/* Viewport optimization for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Preload critical assets */}
        <link rel="preload" href="/icon.svg" as="image" type="image/svg+xml" />
        {/* Note: Font preloads removed - next/font/google self-hosts fonts locally */}


        {/* Analytics (GA4, GTM, Clarity) loaded via client component - only on production */}

        <JsonLd data={organizationSchema} />
        <JsonLd data={serviceSchema} />
      </head>
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        {/* Analytics (GA4, GTM, Clarity) - only loads on production domains */}
        <Analytics />

        {/* Main content wrapper - sits above the fixed footer reveal */}
        <div className="relative z-10 bg-base">
          <Navigation />
          {children}
          <Footer />
        </div>
        {/* Footer reveal - fixed at bottom, revealed when scrolling */}
        <FooterReveal />
        <CookieBanner />

        {/* Service Worker Registration for Advanced Caching */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
