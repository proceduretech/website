import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Procedure | AI Engineering Consultancy That Ships",
  description:
    "Hire senior AI engineers who ship production systems in days, not months. Forward-deployed teams, production-first code, no slide decks. Book a strategy call.",
  alternates: {
    canonical: "/why-us",
  },
};

export default function WhyUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
