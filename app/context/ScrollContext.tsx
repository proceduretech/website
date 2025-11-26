"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ScrollContextType {
  isHeroVisible: boolean;
  setIsHeroVisible: (visible: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  return (
    <ScrollContext.Provider value={{ isHeroVisible, setIsHeroVisible }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}
