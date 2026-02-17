import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Python Development Services | Backend, APIs & AI Engineering",
  description:
    "Python development services for backend systems, APIs, and AI/ML engineering. Django, FastAPI, Flask. Experienced engineers, honest architecture guidance. Talk to the team.",
  alternates: {
    canonical: "/technologies/python",
  },
  openGraph: {
    title:
      "Python Development Services | Backend, APIs & AI Engineering",
    description:
      "Python development services for backend systems, APIs, and AI/ML engineering. Django, FastAPI, Flask. Talk to engineers, not sales.",
    type: "website",
    url: "/technologies/python",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Python Development Services | Backend, APIs & AI Engineering",
    description:
      "Python development services for backend systems, APIs, and AI/ML engineering. Django, FastAPI, Flask. Talk to engineers, not sales.",
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function PythonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
