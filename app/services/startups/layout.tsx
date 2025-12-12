import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Engineering for Startups | MVP Development | Procedure",
  description:
    "Build your MVP or launch-ready AI product with velocity. Senior AI engineers who understand startup speed and constraints. Ship in weeks, not months.",
  alternates: {
    canonical: "/services/startups",
  },
  openGraph: {
    title: "AI Engineering for Startups | MVP Development | Procedure",
    description:
      "Build your MVP or launch-ready AI product with velocity. Senior AI engineers who understand startup speed and constraints. Ship in weeks, not months.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function StartupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
