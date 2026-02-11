import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    ".NET Modernization Services | Migrate .NET Framework to .NET 8 | Procedure",
  description:
    "Migrate legacy .NET Framework applications to .NET 8 with zero downtime. Expert .NET modernization using Strangler Fig pattern. Free migration assessment included.",
  alternates: {
    canonical: "/technologies/dotnet/modernization",
  },
  openGraph: {
    title:
      ".NET Modernization Services | Migrate .NET Framework to .NET 8 | Procedure",
    description:
      "Migrate legacy .NET Framework applications to .NET 8 with zero downtime. Expert .NET modernization using Strangler Fig pattern. Free migration assessment included.",
    type: "website",
    url: "/technologies/dotnet/modernization",
    images: [
      {
        url: "/assets/technologies/dotnet-migration.png",
        width: 1200,
        height: 630,
        alt: "Procedure - .NET Modernization Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      ".NET Modernization Services | Migrate .NET Framework to .NET 8 | Procedure",
    description:
      "Migrate legacy .NET Framework applications to .NET 8 with zero downtime. Expert .NET modernization using Strangler Fig pattern. Free migration assessment included.",
    images: [
      {
        url: "/assets/technologies/dotnet-migration.png",
        width: 1200,
        height: 630,
        alt: "Procedure - .NET Modernization Services",
      },
    ],
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function ModernizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
