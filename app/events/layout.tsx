import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Events & Tech Meetups | Procedure",
  description:
    "Join Procedure's free tech events and meetups. Connect with engineers, designers, and founders. No gatekeeping, just community. See upcoming events.",
  keywords: [
    "tech community events",
    "developer meetups",
    "free tech events",
    "AI meetups",
    "knowledge sharing community",
    "tech workshops",
    "Mumbai AI meetup",
    "engineering community",
  ],
  openGraph: {
    title: "Community Events & Tech Meetups | Procedure",
    description:
      "Join Procedure's free tech events and meetups. Connect with engineers, designers, and founders. No gatekeeping, just community.",
    url: "https://procedure.tech/events",
    siteName: "Procedure",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Events & Tech Meetups | Procedure",
    description:
      "Join Procedure's free tech events and meetups. Connect with engineers, designers, and founders. No gatekeeping, just community.",
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
