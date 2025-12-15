import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Procedure",
  description:
    "Read the terms and conditions for using Procedure's website and services.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
