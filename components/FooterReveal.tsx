"use client";

import Image from "next/image";

export function FooterReveal() {
  return (
    <>
      {/* This is the fixed reveal section that sits behind the main content */}
      <div className="fixed bottom-0 left-0 right-0 h-[300px] md:h-[350px] bg-[#050a14] z-0">
        {/* Large logo reveal */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <Image
            src="/logos/procedure/teal-logo.svg"
            alt="Procedure"
            width={1600}
            height={350}
            className="w-[120%] max-w-none h-auto opacity-25"
          />
        </div>

        {/* Bottom copyright bar */}
        <div className="absolute bottom-0 left-0 right-0 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} Procedure. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Spacer to push content up and allow scrolling to reveal */}
      <div className="h-[300px] md:h-[350px]" />
    </>
  );
}
