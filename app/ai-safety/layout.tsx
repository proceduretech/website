import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Safety & Compliance | Procedure - Responsible AI Engineering",
  description:
    "Learn about Procedure's approach to AI safety, compliance, and responsible AI development. Transparency, fairness, and security by design.",
  alternates: {
    canonical: "/ai-safety",
  },
};

export default function AISafetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
