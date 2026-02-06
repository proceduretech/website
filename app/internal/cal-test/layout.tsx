import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cal Widget Test | Internal",
  description: "Internal testing page for Cal.com widget integration",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function CalTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
