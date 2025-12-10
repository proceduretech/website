import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions | Security & Compliance | Procedure",
  description:
    "Enterprise-grade AI solutions with security and compliance built in. SOC 2, HIPAA, GDPR compliant teams delivering production AI at enterprise scale.",
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
