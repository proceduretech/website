import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ".NET Development Services | Custom ASP.NET Core & Cloud-Native Solutions",
  description:
    "Expert .NET development services including ASP.NET Core, C#, Azure, and .NET modernization. Senior engineers, embedded teams, production-ready delivery.",
  alternates: {
    canonical: "/technologies/dotnet",
  },
  openGraph: {
    title: ".NET Development Services | Custom ASP.NET Core & Cloud-Native Solutions",
    description:
      "Expert .NET development services including ASP.NET Core, C#, Azure, and .NET modernization. Senior engineers, embedded teams, production-ready delivery.",
    type: "website",
    url: "/technologies/dotnet",
    images: [
      {
        url: "/assets/technologies/dotnet-development.png",
        width: 1200,
        height: 630,
        alt: "Procedure - .NET Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ".NET Development Services | Custom ASP.NET Core & Cloud-Native Solutions",
    description:
      "Expert .NET development services including ASP.NET Core, C#, Azure, and .NET modernization. Senior engineers, embedded teams, production-ready delivery.",
    images: [
      {
        url: "/assets/technologies/dotnet-development.png",
        width: 1200,
        height: 630,
        alt: "Procedure - .NET Development Services",
      },
    ],
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function DotnetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
