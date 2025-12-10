import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Sprints | Rapid AI Prototyping in 2-4 Weeks | Procedure",
  description:
    "Validate AI opportunities with rapid prototyping sprints. Go from concept to working prototype in 2-4 weeks. Production-ready, not throwaway demos.",
};

export default function AISprintsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
