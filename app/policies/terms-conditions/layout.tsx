import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Procedure",
  description: "Terms and conditions for using Procedure's services.",
  alternates: {
    canonical: "/policies/terms-conditions",
  },
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
