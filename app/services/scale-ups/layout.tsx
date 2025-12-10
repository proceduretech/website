import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Engineering for Scale-ups | Team Scaling | Procedure",
  description:
    "Scale your engineering team and AI capabilities as you grow. Senior engineers who integrate with your team and accelerate product development.",
};

export default function ScaleUpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
