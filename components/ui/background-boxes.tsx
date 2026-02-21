"use client";

import React, { useMemo } from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

// Use CSS custom properties for theme-aware colors
// These will automatically adjust based on the current theme
const colors = [
  "var(--color-accent)",
  "var(--color-accent-light)",
  "var(--color-accent-secondary)",
  "var(--color-accent-secondary-light)",
  "var(--color-highlight)",
  "#06b6d4", // cyan-500
  "#0891b2", // cyan-600
  "#0e7490", // cyan-700
];

const ROW_COUNT = 150;
const COL_COUNT = 100;

// Generate a deterministic color based on position
function getColorForCell(rowIndex: number, colIndex: number): string {
  // Use a simple hash-like approach to get consistent but varied colors
  const index = (rowIndex * 7 + colIndex * 13) % colors.length;
  return colors[index];
}

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = useMemo(() => new Array(ROW_COUNT).fill(1), []);
  const cols = useMemo(() => new Array(COL_COUNT).fill(1), []);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <m.div
          key={`row` + i}
          className="relative h-8 w-16 border-l border-border/30"
        >
          {cols.map((_, j) => (
            <m.div
              whileHover={{
                backgroundColor: getColorForCell(i, j),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-border/30"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-border/50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </m.div>
          ))}
        </m.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
