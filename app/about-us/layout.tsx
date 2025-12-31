import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Procedure | AI Engineering Company Since 2017",
  description:
    "Senior AI engineers who ship production systems. 75+ clients, 150+ projects, 98% retention. See why enterprises choose Procedure for AI development.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Procedure | AI Engineering Company Since 2017",
    description:
      "Senior AI engineers who ship production systems. 75+ clients, 150+ projects, 98% retention. See why enterprises choose Procedure for AI development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Procedure | AI Engineering Company Since 2017",
    description:
      "Senior AI engineers who ship production systems. 75+ clients, 150+ projects, 98% retention. See why enterprises choose Procedure for AI development.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
