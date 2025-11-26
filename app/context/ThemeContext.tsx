"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { Vertical, VerticalConfig, verticals } from "../config/verticals";

// Re-export for convenience
export type { Vertical, VerticalConfig };
export { verticals };

const verticalFromPath = (pathname: string): Vertical | null => {
  const path = pathname.replace(/^\//, "");
  if (path in verticals) {
    return path as Vertical;
  }
  return null;
};

interface ThemeContextType {
  activeVertical: Vertical;
  setActiveVertical: (vertical: Vertical) => void;
  config: VerticalConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeVertical, setActiveVerticalState] = useState<Vertical>(() => {
    const fromPath = verticalFromPath(pathname);
    return fromPath || "ai-engineering";
  });

  // Sync state with URL on pathname change
  useEffect(() => {
    const fromPath = verticalFromPath(pathname);
    if (fromPath && fromPath !== activeVertical) {
      setActiveVerticalState(fromPath);
    }
  }, [pathname, activeVertical]);

  // Navigate when vertical changes
  const setActiveVertical = useCallback(
    (vertical: Vertical) => {
      setActiveVerticalState(vertical);
      router.push(`/${vertical}`, { scroll: false });
    },
    [router]
  );

  const config = verticals[activeVertical];

  return (
    <ThemeContext.Provider value={{ activeVertical, setActiveVertical, config }}>
      <div
        style={
          {
            "--accent": config.accentColor,
            "--accent-rgb": config.accentColorRgb,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
