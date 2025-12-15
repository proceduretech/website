import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Procedure",
  description:
    "Learn how Procedure collects, uses, and protects your information.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
