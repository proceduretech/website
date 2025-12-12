import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Procedure | Enterprise AI Engineering Services",
  description:
    "Procedure is an AI engineering company that builds production-ready systems for enterprises. Forward-deployed engineers. Real code. Actual results.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Procedure | Enterprise AI Engineering Services",
    description:
      "Procedure is an AI engineering company that builds production-ready systems for enterprises. Forward-deployed engineers. Real code. Actual results.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Procedure | Enterprise AI Engineering Services",
    description:
      "Procedure is an AI engineering company that builds production-ready systems for enterprises. Forward-deployed engineers. Real code. Actual results.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
