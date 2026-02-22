import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    ".NET Staff Augmentation | Hire Senior .NET Developers | Procedure.tech",
  description:
    "Extend your team with senior .NET developers in 5 days. Pre-vetted ASP.NET Core, C#, and Azure experts who integrate with your workflows. No recruitment overhead.",
  alternates: {
    canonical: "/technologies/dotnet/staff-augmentation",
  },
  openGraph: {
    title:
      ".NET Staff Augmentation | Hire Senior .NET Developers | Procedure.tech",
    description:
      "Extend your team with senior .NET developers in 5 days. Pre-vetted ASP.NET Core, C#, and Azure experts who integrate with your workflows. No recruitment overhead.",
    type: "website",
    url: "/technologies/dotnet/staff-augmentation",
    images: [
      {
        url: "/assets/technologies/dotnet-staff-augmentation.png",
        width: 1200,
        height: 630,
        alt: "Procedure - .NET Staff Augmentation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      ".NET Staff Augmentation | Hire Senior .NET Developers | Procedure.tech",
    description:
      "Extend your team with senior .NET developers in 5 days. Pre-vetted ASP.NET Core, C#, and Azure experts who integrate with your workflows. No recruitment overhead.",
    images: [
      {
        url: "/assets/technologies/dotnet-staff-augmentation.png",
        width: 1200,
        height: 630,
        alt: "Procedure - .NET Staff Augmentation Services",
      },
    ],
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function StaffAugmentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
