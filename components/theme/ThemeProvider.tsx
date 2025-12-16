"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

// =============================================================================
// TYPES
// =============================================================================

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  /** Current theme setting (may be 'system') */
  theme: ThemeMode;
  /** The actual resolved theme ('light' or 'dark') */
  resolvedTheme: ResolvedTheme;
  /** Set the theme mode */
  setTheme: (theme: ThemeMode) => void;
  /** Toggle between light and dark (ignores system) */
  toggleTheme: () => void;
  /** Whether the theme has been loaded from storage */
  mounted: boolean;
}

interface ThemeProviderProps {
  children: ReactNode;
  /** Default theme if none is stored */
  defaultTheme?: ThemeMode;
  /** Storage key for persisting theme preference */
  storageKey?: string;
  /** Whether to enable system theme detection */
  enableSystem?: boolean;
  /** Attribute to apply to the document element */
  attribute?: "class" | "data-theme";
  /** Disable transitions on theme change */
  disableTransitionOnChange?: boolean;
}

// =============================================================================
// CONTEXT
// =============================================================================

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get the system preference for color scheme
 */
function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Resolve the theme mode to an actual theme
 */
function resolveTheme(theme: ThemeMode): ResolvedTheme {
  if (theme === "system") {
    return getSystemTheme();
  }
  return theme;
}

/**
 * Apply theme to the document
 */
function applyTheme(
  theme: ResolvedTheme,
  attribute: "class" | "data-theme",
  disableTransition: boolean
) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  // Optionally disable transitions during theme change
  if (disableTransition) {
    root.style.setProperty("transition", "none");
    // Force a reflow
    void root.offsetHeight;
  }

  if (attribute === "class") {
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  } else {
    root.setAttribute("data-theme", theme);
  }

  // Update meta theme-color for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      "content",
      theme === "dark" ? "#0b1220" : "#ffffff"
    );
  }

  // Re-enable transitions
  if (disableTransition) {
    // Wait for next frame to re-enable
    requestAnimationFrame(() => {
      root.style.removeProperty("transition");
    });
  }
}

// =============================================================================
// PROVIDER COMPONENT
// =============================================================================

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "procedure-theme",
  enableSystem = true,
  attribute = "class",
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeMode>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(defaultTheme)
  );
  const [mounted, setMounted] = useState(false);

  // Initialize theme from storage on mount
  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as ThemeMode | null;
    if (stored && ["light", "dark", "system"].includes(stored)) {
      setThemeState(stored);
      const resolved = resolveTheme(stored);
      setResolvedTheme(resolved);
      applyTheme(resolved, attribute, false);
    } else {
      // Apply default theme
      const resolved = resolveTheme(defaultTheme);
      setResolvedTheme(resolved);
      applyTheme(resolved, attribute, false);
    }
    setMounted(true);
  }, [defaultTheme, storageKey, attribute]);

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystem) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        const resolved = getSystemTheme();
        setResolvedTheme(resolved);
        applyTheme(resolved, attribute, disableTransitionOnChange);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, enableSystem, attribute, disableTransitionOnChange]);

  // Set theme handler
  const setTheme = useCallback(
    (newTheme: ThemeMode) => {
      setThemeState(newTheme);
      localStorage.setItem(storageKey, newTheme);

      const resolved = resolveTheme(newTheme);
      setResolvedTheme(resolved);
      applyTheme(resolved, attribute, disableTransitionOnChange);
    },
    [storageKey, attribute, disableTransitionOnChange]
  );

  // Toggle theme handler
  const toggleTheme = useCallback(() => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }, [resolvedTheme, setTheme]);

  // Prevent flash of incorrect theme on first render
  // by not rendering children until mounted
  const value: ThemeContextValue = {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
    mounted,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// =============================================================================
// HOOK
// =============================================================================

/**
 * Hook to access theme context
 * @returns Theme context value
 * @throws Error if used outside ThemeProvider
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// =============================================================================
// INLINE SCRIPT FOR PREVENTING FLASH
// =============================================================================

/**
 * Script to be injected into the document head to prevent flash of incorrect theme.
 * This runs before React hydration to set the initial theme.
 */
export const ThemeScript = ({
  storageKey = "procedure-theme",
  defaultTheme = "dark",
  attribute = "class",
}: {
  storageKey?: string;
  defaultTheme?: ThemeMode;
  attribute?: "class" | "data-theme";
}) => {
  const script = `
    (function() {
      try {
        var stored = localStorage.getItem('${storageKey}');
        var theme = stored || '${defaultTheme}';

        if (theme === 'system') {
          theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        var root = document.documentElement;
        ${
          attribute === "class"
            ? `root.classList.remove('light', 'dark'); root.classList.add(theme);`
            : `root.setAttribute('data-theme', theme);`
        }
      } catch (e) {}
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
};

// =============================================================================
// THEME TOGGLE BUTTON COMPONENT
// =============================================================================

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

/**
 * A ready-to-use theme toggle button component
 */
export function ThemeToggle({
  className = "",
  size = "md",
  showLabel = false,
}: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme, mounted } = useTheme();

  // Size classes
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className={`${sizeClasses[size]} bg-surface-elevated rounded-lg animate-pulse ${className}`}
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        ${sizeClasses[size]}
        flex items-center justify-center gap-2
        rounded-lg
        bg-surface-elevated
        border border-border
        text-text-primary
        hover:border-accent/30
        hover:text-accent-light
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-accent/20
        ${className}
      `}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        // Sun icon for dark mode (will switch to light)
        <svg
          className={iconSizeClasses[size]}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      ) : (
        // Moon icon for light mode (will switch to dark)
        <svg
          className={iconSizeClasses[size]}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      )}
      {showLabel && (
        <span className="text-sm font-medium">
          {resolvedTheme === "dark" ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
}
