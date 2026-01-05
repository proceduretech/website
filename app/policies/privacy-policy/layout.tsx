import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Procedure",
  description:
    "Learn how Procedure collects, uses, and protects your information.",
  alternates: {
    canonical: "/policies/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
