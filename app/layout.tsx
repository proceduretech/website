import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FooterReveal } from "@/components/FooterReveal";
import { CookieBanner } from "@/components/CookieBanner";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        {/* Main content wrapper - sits above the fixed footer reveal */}
        <div
          className="relative z-10 bg-base rounded-b-[2.5rem] overflow-hidden"
          style={{
            boxShadow: '0 20px 80px 20px rgba(13, 181, 165, 0.12), 0 8px 30px 5px rgba(13, 181, 165, 0.08)'
          }}
        >
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
