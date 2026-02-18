import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Flutter App Development Services | Cross-Platform Apps, One Codebase",
  description:
    "Custom Flutter apps for iOS, Android, web, and desktop from one Dart codebase. Impeller rendering, pixel-perfect UI, and 30-40% lower development cost than native.",
  alternates: {
    canonical: "/technologies/flutter",
  },
  openGraph: {
    title:
      "Flutter App Development Services | Cross-Platform Apps, One Codebase",
    description:
      "Custom Flutter apps for iOS, Android, web, and desktop from one Dart codebase. Impeller rendering, pixel-perfect UI, and 30-40% lower development cost than native.",
    type: "website",
    url: "/technologies/flutter",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Flutter App Development Services | Cross-Platform Apps, One Codebase",
    description:
      "Custom Flutter apps for iOS, Android, web, and desktop from one Dart codebase. Impeller rendering, pixel-perfect UI, and 30-40% lower development cost than native.",
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function FlutterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
