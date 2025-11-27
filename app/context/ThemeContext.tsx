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
  setActiveVerticalVisual: (vertical: Vertical) => void;
  userHasInteracted: boolean;
  setUserHasInteracted: (value: boolean) => void;
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
  const [userHasInteracted, setUserHasInteracted] = useState<boolean>(() => {
    // If user lands on a vertical page directly, they've "interacted"
    const fromPath = verticalFromPath(pathname);
    return fromPath !== null;
  });

  // Sync state with URL on pathname change
  useEffect(() => {
    const fromPath = verticalFromPath(pathname);
    if (fromPath && fromPath !== activeVertical) {
      setActiveVerticalState(fromPath);
    }
  }, [pathname, activeVertical]);

  // Visual-only change (for auto-rotation) - no navigation
  const setActiveVerticalVisual = useCallback((vertical: Vertical) => {
    setActiveVerticalState(vertical);
  }, []);

  // Navigate when vertical changes (user clicks)
  const setActiveVertical = useCallback(
    (vertical: Vertical) => {
      setActiveVerticalState(vertical);
      setUserHasInteracted(true);
      router.push(`/${vertical}`, { scroll: false });
    },
    [router]
  );

  const config = verticals[activeVertical];

  return (
    <ThemeContext.Provider
      value={{
        activeVertical,
        setActiveVertical,
        setActiveVerticalVisual,
        userHasInteracted,
        setUserHasInteracted,
        config,
      }}
    >
      <div
        style={
          {
            "--accent": config.accentColor,
            "--accent-rgb": config.accentColorRgb,
            "--secondary": config.secondaryColor,
            "--secondary-rgb": config.secondaryColorRgb,
            "--tertiary": config.tertiaryColor,
            "--tertiary-rgb": config.tertiaryColorRgb,
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
