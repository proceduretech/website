import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Next.js Development Services | Fast, SEO-Ready Web Applications",
  description:
    "Expert Next.js development services for enterprise web apps. SSR, SSG, and full-stack solutions. Talk to engineers, not sales. Free architecture consultation.",
  alternates: {
    canonical: "/technologies/nextjs",
  },
  openGraph: {
    title:
      "Next.js Development Services | Fast, SEO-Ready Web Applications",
    description:
      "Expert Next.js development services for enterprise web apps. SSR, SSG, and full-stack solutions. Talk to engineers, not sales. Free architecture consultation.",
    type: "website",
    url: "/technologies/nextjs",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Next.js Development Services | Fast, SEO-Ready Web Applications",
    description:
      "Expert Next.js development services for enterprise web apps. SSR, SSG, and full-stack solutions. Talk to engineers, not sales. Free architecture consultation.",
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function NextjsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
