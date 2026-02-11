import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ".NET Development Services | Procedure",
  alternates: {
    canonical: "/technologies/dotnet",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DotnetRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
