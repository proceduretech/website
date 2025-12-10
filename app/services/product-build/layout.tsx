import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Product Build | End-to-End Development | Procedure",
  description:
    "End-to-end product development from concept to production launch. Ship complete AI-powered products with senior engineers in weeks, not months.",
};

export default function ProductBuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
