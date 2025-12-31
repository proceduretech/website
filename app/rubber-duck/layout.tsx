import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rubber Duck Bootcamp | Procedure",
  description:
    "A 12-week intensive in-person boot camp for fresh engineering graduates. Get hired, get trained, and launch your software engineering career with Procedure.",
  keywords: [
    "software engineering bootcamp",
    "fresh graduate jobs",
    "engineering training",
    "full stack developer training",
    "paid bootcamp India",
    "Mumbai bootcamp",
    "Procedure Technologies",
    "software development career",
    "frontend developer training",
    "backend developer training",
  ],
  openGraph: {
    title: "Rubber Duck Bootcamp | Procedure",
    description:
      "A 12-week intensive in-person boot camp for fresh engineering graduates. Get hired, get trained, and launch your software engineering career.",
    type: "website",
    url: "https://procedure.tech/rubber-duck",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubber Duck Bootcamp | Procedure",
    description:
      "A 12-week intensive in-person boot camp for fresh engineering graduates. Get hired, get trained, and launch your software engineering career.",
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function RubberDuckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
