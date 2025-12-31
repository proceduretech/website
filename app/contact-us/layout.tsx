import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Procedure | Start Your AI Project Today",
  description:
    "Get senior AI engineers embedded with your team in 2-5 days. Schedule a strategy call with our AI engineering leads. Enterprise-ready, NDA available.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Procedure | Start Your AI Project Today",
    description:
      "Get senior AI engineers embedded with your team in 2-5 days. Schedule a strategy call with our AI engineering leads. Enterprise-ready, NDA available.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Procedure | Start Your AI Project Today",
    description:
      "Get senior AI engineers embedded with your team in 2-5 days. Schedule a strategy call with our AI engineering leads. Enterprise-ready, NDA available.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
