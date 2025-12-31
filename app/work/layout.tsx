import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | AI Engineering Success Stories | Procedure",
  description:
    "See how Procedure helps enterprises ship production AI systems. Real results from financial services, healthcare, and e-commerce.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Case Studies | AI Engineering Success Stories | Procedure",
    description:
      "See how Procedure helps enterprises ship production AI. Real results from financial services, healthcare, and e-commerce.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | AI Engineering Success Stories | Procedure",
    description:
      "See how Procedure helps enterprises ship production AI. Real results from financial services, healthcare, and e-commerce.",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
