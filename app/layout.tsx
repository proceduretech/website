import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Procedure | Forward-Deployed AI Engineers",
  description:
    "Elite AI engineers embedded with your team to ship production-grade AI systems. Build AI. Build with AI.",
};

const themeScript = `
  (function() {
    // One-time migration to light mode default (remove after deploying)
    if (!localStorage.getItem('theme_v2_migrated')) {
      localStorage.setItem('theme', 'light');
      localStorage.setItem('theme_v2_migrated', 'true');
    }
    var stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
