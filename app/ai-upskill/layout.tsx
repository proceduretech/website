import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Upskill | AI Engineering Bootcamp | Procedure",
  description:
    "A 12-week intensive AI engineering bootcamp covering RAG, Agents, Fine-tuning, and MLOps. Learn to build production-ready LLM applications. Apply now.",
  keywords: [
    "AI engineering bootcamp",
    "LLM training program",
    "AI upskilling",
    "RAG training",
    "AI agents training",
    "enterprise AI training",
    "MLOps course",
    "Procedure Technologies",
    "AI engineering certification India",
    "LLM development training",
  ],
  alternates: {
    canonical: "/ai-upskill",
  },
  openGraph: {
    title: "AI Upskill | AI Engineering Bootcamp | Procedure",
    description:
      "A 12-week intensive AI engineering bootcamp covering RAG, Agents, Fine-tuning, and MLOps. Transform from developer to AI engineer.",
    type: "website",
    url: "https://procedure.tech/ai-upskill",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Upskill | AI Engineering Bootcamp | Procedure",
    description:
      "A 12-week intensive AI engineering bootcamp covering RAG, Agents, Fine-tuning, and MLOps. Transform from developer to AI engineer.",
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function AIUpskillLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
