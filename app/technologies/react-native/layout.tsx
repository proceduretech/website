import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "React Native Development Services | Cross-Platform iOS & Android Apps",
  description:
    "Ship one codebase to iOS and Android. React Native development services from India-based engineers with US timezone overlap. New Architecture, Expo, TypeScript.",
  alternates: {
    canonical: "/technologies/react-native",
  },
  openGraph: {
    title:
      "React Native Development Services | Cross-Platform iOS & Android Apps",
    description:
      "Ship one codebase to iOS and Android. React Native development services from India-based engineers with US timezone overlap. New Architecture, Expo, TypeScript.",
    type: "website",
    url: "/technologies/react-native",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "React Native Development Services | Cross-Platform iOS & Android Apps",
    description:
      "Ship one codebase to iOS and Android. React Native development services from India-based engineers with US timezone overlap. New Architecture, Expo, TypeScript.",
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

export default function ReactNativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
