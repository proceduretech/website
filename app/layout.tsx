import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Procedure | Enterprise Software Engineering",
  description:
    "Premium software engineering services for enterprise customers. Build scalable, secure, and innovative solutions with our expert team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
