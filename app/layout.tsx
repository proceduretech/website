import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={`${poppins.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
