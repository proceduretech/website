import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Engineering Services | Enterprise AI Development | Procedure",
  description:
    "Ship production AI systems in days with Procedure's AI engineering services. LLM development, RAG systems, AI agents & MLOps. Book your strategy call today.",
  keywords: [
    "AI engineering services",
    "enterprise AI solutions",
    "AI development company",
    "LLM development",
    "AI consulting",
    "custom AI solutions",
    "RAG systems",
    "AI agents",
    "MLOps",
  ],
  openGraph: {
    title: "AI Engineering Services | Enterprise AI Development | Procedure",
    description:
      "Ship production AI systems in days with Procedure's AI engineering services. LLM development, RAG systems, AI agents & MLOps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering Services | Enterprise AI Development | Procedure",
    description:
      "Ship production AI systems in days with Procedure's AI engineering services. LLM development, RAG systems, AI agents & MLOps.",
  },
};

export default function AIEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
