import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Engineering Services | Ship Software Faster | Procedure",
  description:
    "Enterprise product engineering services with AI-augmented development. Senior full-stack engineers deliver production-ready software in days, not weeks.",
  keywords: [
    "product engineering services",
    "software development company",
    "full-stack development",
    "enterprise software solutions",
    "custom software development",
    "AI-augmented development",
    "React development",
    "Next.js development",
  ],
  openGraph: {
    title: "Product Engineering Services | Ship Software Faster | Procedure",
    description:
      "Enterprise product engineering services with AI-augmented development. Senior full-stack engineers deliver production-ready software in days, not weeks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Engineering Services | Ship Software Faster | Procedure",
    description:
      "Enterprise product engineering services with AI-augmented development. Senior full-stack engineers deliver production-ready software in days, not weeks.",
  },
};

export default function ProductEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
