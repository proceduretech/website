import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Culture | Procedure - Remote-First AI Engineering Team",
  description:
    "Discover Procedure's culture: remote-first, async-friendly, and obsessed with shipping. Learn about our work beliefs and values.",
  alternates: {
    canonical: "/culture",
  },
};

export default function CultureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
