import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Procedure - Build AI That Ships",
  description:
    "Join Procedure's team of senior AI engineers. Fully remote, competitive pay, and cutting-edge AI work. View open positions in AI Engineering, Product Engineering, and more.",
  openGraph: {
    title: "Careers at Procedure",
    description:
      "Join a team of senior engineers working on production AI systems for the world's most ambitious companies. Remote-first, async-friendly, and obsessed with shipping.",
    type: "website",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
