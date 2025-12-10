import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | AI Engineering Success Stories | Procedure",
  description:
    "Explore how Procedure helps enterprises ship production AI systems. Real results from financial services, healthcare, e-commerce, and more. $250M+ in client ROI generated.",
  openGraph: {
    title: "Case Studies | AI Engineering Success Stories | Procedure",
    description:
      "Explore how Procedure helps enterprises ship production AI systems. Real results from financial services, healthcare, e-commerce, and more. $250M+ in client ROI generated.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | AI Engineering Success Stories | Procedure",
    description:
      "Explore how Procedure helps enterprises ship production AI systems. Real results from financial services, healthcare, e-commerce, and more. $250M+ in client ROI generated.",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
