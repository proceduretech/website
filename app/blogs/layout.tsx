import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Engineering Blog | Procedure - Production AI Insights",
  description:
    "Technical deep-dives on LLM engineering, AI security, and production systems. Real engineering insights from practitioners building enterprise AI infrastructure.",
  keywords: [
    "AI engineering blog",
    "LLM production systems",
    "AI security best practices",
    "enterprise AI development",
    "MLOps engineering",
    "AI agents production",
    "machine learning infrastructure",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "AI Engineering Blog | Procedure",
    description:
      "Battle-tested insights on LLMs, AI security, and production systems from engineers building enterprise AI infrastructure.",
    type: "website",
    url: "/blogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering Blog | Procedure",
    description:
      "Battle-tested insights on LLMs, AI security, and production systems from engineers building enterprise AI infrastructure.",
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
