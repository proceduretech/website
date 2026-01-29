import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FooterReveal } from "@/components/FooterReveal";
import { CookieBanner } from "@/components/CookieBanner";
import { siteConfig, getThemeClass } from "@/lib/site-config";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap", // Prevents FOIT (Flash of Invisible Text)
  preload: true, // Preloads font files for faster rendering
  adjustFontFallback: true, // Automatically adjust font fallback metrics
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
  alternates: {
    canonical: "/",
  },
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
    name: "Procedure",
    legalName: "Procedure Technologies",
    url: "https://procedure.tech",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Procedure-logo.png",
    foundingDate: "2017",
    description:
      "AI engineering that ships to production. Senior engineers embedded with your team to build AI-powered products and secure AI systems. Battle-tested delivery, now focused on AI.",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "406, Shrishti Square, LBS Marg, Bhandup West",
        addressLocality: "Mumbai",
        postalCode: "400078",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        addressCountry: "US",
      },
    ],
    areaServed: "Worldwide",
    sameAs: [
      "https://www.wikidata.org/wiki/Q137392993",
      "https://www.crunchbase.com/organization/procedure",
      "https://in.linkedin.com/company/procedurehq",
      "https://x.com/procedurehq",
      "https://github.com/proceduretech",
    ],
    founder: [
      {
        "@type": "Person",
        name: "Brajkishor Baheti",
        jobTitle: "Chief Executive Officer",
      },
      {
        "@type": "Person",
        name: "Ulhas Mandrawadkar",
        jobTitle: "Chief Technology Officer",
      },
    ],
    employee: [
      {
        "@type": "Person",
        name: "Brajkishor Baheti",
        jobTitle: "Chief Executive Officer",
      },
      {
        "@type": "Person",
        name: "Ulhas Mandrawadkar",
        jobTitle: "Chief Technology Officer",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "AI Security",
      "Product Engineering",
      "Cloud Computing",
      "DevOps",
      "Product Design",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What AI systems do you build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build production AI systems including LLM applications, AI agents, RAG systems, and AI-enhanced products. From conversational AI to document processing to intelligent automation—we handle the complete development lifecycle from architecture to secure production deployment.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can you start our AI project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most AI engagements begin within 2-5 days. We match senior engineers based on your AI requirements and tech stack, then integrate them into your development workflow immediately. No months of discovery—we start building fast.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AI development cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI development costs vary by engagement model. AI Sprints range from $15K-$50K for 2-4 week rapid prototypes. Forward-deployed engineering teams start at $50K/month for embedded senior engineers. Enterprise engagements are scoped based on compliance requirements and project complexity. Contact us for a detailed estimate based on your specific needs.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build an AI product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timeline depends on scope and approach. AI Sprints deliver working prototypes in 2-4 weeks. Full product builds with embedded teams typically reach MVP in 8-12 weeks. Enterprise AI systems requiring compliance and security review take 17-20 weeks from architecture to production deployment.",
        },
      },
      {
        "@type": "Question",
        name: "Do you only work with large enterprises?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We work with high-growth startups, scale-ups, and enterprises. What matters is the complexity of the AI challenge and your commitment to shipping production systems. If you need serious AI engineering—not consulting theater—we can help.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Procedure different from AI consultancies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We're engineers who write production code, not consultants who deliver slide decks. Our team embeds with yours, ships working systems, and leaves your team stronger. No months of discovery, no handoff nightmares, no POCs that never reach production.",
        },
      },
      {
        "@type": "Question",
        name: "How do you handle AI security and compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Security is built into every AI system we develop—not bolted on later. We implement secure LLM architectures, prevent prompt injection, ensure data privacy, and meet compliance requirements (SOC 2, HIPAA, GDPR). Our AI security expertise comes from building production systems that enterprises trust.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={themeClass}>
      <head>
        {/* Critical inline CSS for instant render */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root{--color-base:#0b1220;--color-surface:#050a15;--color-surface-elevated:#0f172a;--color-text-primary:rgba(255,255,255,.9);--color-text-secondary:rgba(255,255,255,.65);--color-accent-light:#14b8a6;--color-cta:#0d9488;--color-cta-text:#fcfcfc;--color-highlight:#0db5a5}
              *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}
              html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:system-ui,-apple-system,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}
              body{margin:0;line-height:inherit;background-color:var(--color-base);color:var(--color-text-primary)}
              html{scrollbar-gutter:stable;scroll-behavior:smooth}
              img{height:auto;max-width:100%}
              h1{margin:0;font-size:inherit;font-weight:inherit}
              .text-highlight{color:var(--color-highlight)}
              @font-face{font-family:'Outfit';font-display:swap}
              @font-face{font-family:'Inter';font-display:swap}
            `,
          }}
        />

        {/* Critical Resource Hints for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Third-party resource hints - prioritized */}
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

        {/* Preload fonts to prevent layout shifts - with fetchpriority */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1O4a0Ew.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />

        {/* Preload critical Next.js chunks */}
        <link rel="modulepreload" href="/_next/static/chunks/react.js" />
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />

        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "t4e6b4g83o");
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        {/* GTM - Load early but non-blocking */}
        <GoogleTagManager gtmId="GTM-KD7CJ8RC" />

        {/* Main content wrapper - sits above the fixed footer reveal */}
        <div className="relative z-10 bg-base">
          <Navigation />
          {children}
          <Footer />
        </div>
        {/* Footer reveal - fixed at bottom, revealed when scrolling */}
        <FooterReveal />
        <CookieBanner />

        {/* Load GA after main content - non-blocking */}
        <GoogleAnalytics gaId="G-2KW21KL401" />

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
