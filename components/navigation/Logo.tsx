"use client";

import Link from "next/link";
import { ProcedureLogo, ProcedureLogoShort } from "@/components/logos";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center hover:opacity-80 transition-opacity ${className}`}
    >
      {/* Long logo for desktop (lg+) */}
      <ProcedureLogo
        textColor="var(--color-highlight)"
        dotColor="var(--color-highlight)"
        className="hidden lg:block h-8 w-auto"
      />
      {/* Short logo for mobile/tablet (< lg) */}
      <ProcedureLogoShort
        textColor="var(--color-highlight)"
        dotColor="var(--color-highlight)"
        className="block lg:hidden h-7 w-auto"
      />
    </Link>
  );
}
