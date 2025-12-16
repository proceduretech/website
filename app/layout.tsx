import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FooterReveal } from "@/components/FooterReveal";
import { CookieBanner } from "@/components/CookieBanner";
import { siteConfig, getThemeClass, getThemeColor } from "@/lib/site-config";
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
    "Forward-deployed AI engineers embedded with your team. We build production-grade AI systems, LLM applications, and custom ML models. Get builders, not consultants.",
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

  return (
    <html lang="en" className={themeClass}>
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
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
