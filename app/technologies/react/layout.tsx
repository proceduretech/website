import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "React Development Services | Web Apps, SPAs & UI Engineering",
  description:
    "React development services for web applications, SPAs, dashboards, and component libraries. React 19, TypeScript, production-tested. Talk to engineers, not sales.",
  alternates: {
    canonical: "/technologies/react",
  },
  openGraph: {
    title:
      "React Development Services | Web Apps, SPAs & UI Engineering",
    description:
      "React development services for web applications, SPAs, and dashboards. React 19, TypeScript, production-tested. Talk to engineers, not sales.",
    type: "website",
    url: "/technologies/react",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "React Development Services | Web Apps, SPAs & UI Engineering",
    description:
      "React development services for web applications, SPAs, and dashboards. React 19, TypeScript, production-tested. Talk to engineers, not sales.",
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function ReactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
