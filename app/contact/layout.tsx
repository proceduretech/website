import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Enterprise AI Engineering Services | Procedure",
  description:
    "Connect with Procedure's AI engineering team. Senior engineers, enterprise-ready. Schedule a strategy call and start building production AI systems.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Enterprise AI Engineering Services | Procedure",
    description:
      "Connect with Procedure's AI engineering team. Senior engineers, enterprise-ready. Schedule a strategy call and start building production AI systems.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Enterprise AI Engineering Services | Procedure",
    description:
      "Connect with Procedure's AI engineering team. Senior engineers, enterprise-ready. Schedule a strategy call and start building production AI systems.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
