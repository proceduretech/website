import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Angular Development Services | Enterprise Web Applications",
  description:
    "Angular development services for enterprise web apps, SPAs, and complex dashboards. TypeScript-first, signal-based architecture. Talk to engineers, not sales.",
  alternates: {
    canonical: "/technologies/angular",
  },
  openGraph: {
    title:
      "Angular Development Services | Enterprise Web Applications",
    description:
      "Angular development services for enterprise web apps, SPAs, and complex dashboards. TypeScript-first, signal-based architecture.",
    type: "website",
    url: "/technologies/angular",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Angular Development Services | Enterprise Web Applications",
    description:
      "Angular development services for enterprise web apps, SPAs, and complex dashboards. TypeScript-first, signal-based architecture.",
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function AngularLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
