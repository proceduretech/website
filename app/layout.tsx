import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import Script from "next/script";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FooterReveal } from "@/components/FooterReveal";
import { CookieBanner } from "@/components/CookieBanner";
import { siteConfig, getThemeClass } from "@/lib/site-config";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE_URL = "https://procedure.tech";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: "/favicon.png",
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
              "Rapid 2-4 week AI prototypes and validation sprints.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Forward-Deployed Teams",
            description:
              "Senior AI engineers embedded with your team for ongoing development.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Product Build",
            description:
              "End-to-end AI product development from architecture to production.",
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
          text: "AI development costs vary by engagement model. AI Sprints range from $15K-$50K for 2-4 week rapid prototypes. Forward-deployed engineering teams start at $50K/month for embedded senior engineers. Enterprise engagements are scoped based on compliance requirements and project complexity.",
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
        name: "How do you handle AI security?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI security is built into every system we deliver. We implement prompt injection defense, data leakage prevention, access controls, and AI-specific security measures from day one. Your AI systems pass enterprise security review.",
        },
      },
      {
        "@type": "Question",
        name: "What makes you different from AI consultancies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional AI consultants deliver slide decks and POCs that never ship. We deliver production AI. Our engineers embed with your team, write code daily, and ship AI systems that work. No handoffs, no knowledge silos—just AI that reaches production.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with enterprise clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We partner with companies ranging from funded startups to public enterprises on AI initiatives. Our client retention rate is 98%, with many partnerships lasting 3+ years. We understand enterprise security, compliance, and procurement requirements.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={themeClass}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        {/*
          TODO: UNCOMMENT DURING PRODUCTION MIGRATION

          Google Tag Manager - GTM-KD7CJ8RC
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KD7CJ8RC');
              `,
            }}
          />

          Google Analytics - G-2KW21KL401
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-2KW21KL401"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-2KW21KL401');
              `,
            }}
          />
        */}

        {/* Main content wrapper - sits above the fixed footer reveal */}
        <div className="relative z-10 bg-base">
          <Navigation />
          {children}
          <Footer />
        </div>
        {/* Footer reveal - fixed at bottom, revealed when scrolling */}
        <FooterReveal />
        <CookieBanner />
      </body>
    </html>
  );
}
