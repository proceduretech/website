"use client";

import { ProcedureLogo } from "./logos";

export function FooterReveal() {
  return (
    <>
      {/* This is the fixed reveal section that sits behind the main content */}
      <div className="fixed bottom-0 left-0 right-0 h-[300px] md:h-[350px] bg-footer-reveal z-0">
        {/* Large logo reveal */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden mt-12 lg:mt-24">
          <ProcedureLogo
            textColor="var(--color-text-muted)"
            dotColor="var(--color-text-muted)"
            variant="outlined"
            className="w-full max-w-none h-auto opacity-70"
          />
        </div>
      </div>

      {/* Spacer to push content up and allow scrolling to reveal */}
      <div className="h-[300px] md:h-[350px]" />
    </>
  );
}
