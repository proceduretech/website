import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions | Security & Compliance | Procedure",
  description:
    "Enterprise-grade AI solutions with security and compliance built in. SOC 2, HIPAA, GDPR compliant teams delivering production AI at enterprise scale.",
  alternates: {
    canonical: "/services/enterprise",
  },
  openGraph: {
    title: "Enterprise AI Solutions | Security & Compliance | Procedure",
    description:
      "Enterprise-grade AI solutions with security and compliance built in. SOC 2, HIPAA, GDPR compliant teams delivering production AI at enterprise scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
