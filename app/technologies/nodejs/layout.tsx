import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Node.js Development Services | Scalable APIs & Backend Systems",
  description:
    "Node.js development services for scalable APIs, microservices, and backend systems. Senior engineers, honest architecture guidance. Talk to the team.",
  alternates: {
    canonical: "/technologies/nodejs",
  },
  openGraph: {
    title:
      "Node.js Development Services | Scalable APIs & Backend Systems",
    description:
      "Node.js development services for scalable APIs, microservices, and backend systems. Senior engineers, honest architecture guidance.",
    type: "website",
    url: "/technologies/nodejs",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Node.js Development Services | Scalable APIs & Backend Systems",
    description:
      "Node.js development services for scalable APIs, microservices, and backend systems. Senior engineers, honest architecture guidance.",
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function NodejsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
