import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach | Procedure - AI Engineering That Ships",
  description:
    "Discover how Procedure works with enterprise clients. Our proven methodology takes you from discovery to production AI in days, not months.",
  openGraph: {
    title: "Our Approach | Procedure",
    description:
      "Discover how Procedure works with enterprise clients. Our proven methodology takes you from discovery to production AI in days, not months.",
  },
};

export default function ApproachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
