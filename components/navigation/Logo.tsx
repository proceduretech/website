"use client";

import Link from "next/link";
import Image from "next/image";
import { getLogos } from "@/lib/site-config";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  // Get theme-appropriate logo paths from site config
  const logos = getLogos();

  return (
    <Link
      href="/"
      className={`flex items-center hover:opacity-80 transition-opacity ${className}`}
    >
      {/* Long logo for desktop (lg+) */}
      <Image
        src={logos.full}
        alt="Procedure"
        width={157}
        height={32}
        className="hidden lg:block h-8 w-auto"
        priority
      />
      {/* Short logo for mobile/tablet (< lg) */}
      <Image
        src={logos.short}
        alt="Procedure"
        width={62}
        height={28}
        className="block lg:hidden h-7 w-auto"
        priority
      />
    </Link>
  );
}
