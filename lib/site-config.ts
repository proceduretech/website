/**
 * Site Configuration
 *
 * This file controls site-wide settings including the theme.
 * To change the theme, update the `theme` value and rebuild.
 *
 * @example
 * // To switch to light mode:
 * theme: 'light',
 *
 * // To switch to dark mode:
 * theme: 'dark',
 */

export type ThemeMode = "dark" | "light";

export interface LogoPaths {
  /** Full logo for desktop navigation */
  full: string;
  /** Short logo for mobile navigation */
  short: string;
  /** Logo for footer reveal section */
  footer: string;
}

export interface SiteConfig {
  /** Site theme mode - 'dark' or 'light' */
  theme: ThemeMode;
  /** Theme-specific logo paths */
  logos: {
    dark: LogoPaths;
    light: LogoPaths;
  };
  /** Meta theme color for mobile browsers */
  themeColors: {
    dark: string;
    light: string;
  };
}

export const siteConfig: SiteConfig = {
  /**
   * Site theme mode
   *
   * 'dark' - Dark navy background with light text (default)
   * 'light' - White/light background with dark text
   */
  theme: "light",

  /**
   * Logo paths for each theme
   * The Logo component will automatically use the correct variant
   */
  logos: {
    dark: {
      full: "/logos/procedure/green-logo.svg",
      short: "/logos/procedure/green-short-logo.svg",
      footer: "/logos/procedure/white-logo.svg",
    },
    light: {
      full: "/logos/procedure/teal-logo.svg",
      short: "/logos/procedure/green-short-logo.svg",
      footer: "/logos/procedure/green-logo.svg",
    },
  },

  /**
   * Meta theme-color for mobile browser chrome
   */
  themeColors: {
    dark: "#0b1220",
    light: "#f8f7f9",
  },
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get the current theme's logo paths
 * @returns LogoPaths for the current theme
 */
export function getLogos(): LogoPaths {
  return siteConfig.logos[siteConfig.theme];
}

/**
 * Check if the site is in dark mode
 * @returns true if dark mode, false if light mode
 */
export function isDarkMode(): boolean {
  return siteConfig.theme === "dark";
}

/**
 * Get the current theme's meta color
 * @returns hex color string for meta theme-color
 */
export function getThemeColor(): string {
  return siteConfig.themeColors[siteConfig.theme];
}

/**
 * Get the HTML class for the current theme
 * @returns 'dark' for dark mode, empty string for light mode
 */
export function getThemeClass(): string {
  return siteConfig.theme === "dark" ? "dark" : "";
}
