/**
 * Procedure Design System - Theme Configuration
 *
 * This file defines all design tokens for the application's theming system.
 * It supports both dark and light modes with semantic naming conventions.
 *
 * Architecture:
 * - Primitive tokens: Raw color values (hex, rgb, hsl)
 * - Semantic tokens: Context-aware mappings that change per theme
 * - Component tokens: Specific component-level customizations
 */

// =============================================================================
// PRIMITIVE COLOR PALETTE
// =============================================================================

/**
 * Core color primitives that remain constant across themes.
 * These are the raw building blocks - use semantic tokens in components.
 */
export const primitives = {
  // Teal family - Primary brand accent
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',  // accent-teal-light (primary accent)
    600: '#0d9488',  // cta background
    700: '#0f766e',  // accent-teal (darker accent)
    800: '#115e59',
    900: '#134e4a',
    950: '#042f2e',
  },

  // Blue family - Secondary accent
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // accent-blue-light
    600: '#2563eb',  // accent-blue
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },

  // Neutral/Slate family - For backgrounds and text
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',  // border-light
    800: '#1e293b',  // border, surface-elevated (light mode)
    900: '#0f172a',  // surface-elevated (dark mode)
    950: '#0b1220',  // base (dark mode)
    980: '#050a15',  // surface (dark mode) - custom
    990: '#050a14',  // footer reveal (dark mode) - custom
  },

  // Semantic colors for callouts/alerts
  red: {
    400: '#f87171',
    500: '#ef4444',
  },
  amber: {
    400: '#fbbf24',
    500: '#f59e0b',
  },
  green: {
    400: '#4ade80',
    500: '#22c55e',
  },
  purple: {
    400: '#c084fc',
    500: '#a855f7',
  },

  // Pure colors
  white: '#ffffff',
  black: '#000000',
} as const;

// =============================================================================
// SEMANTIC TOKENS - DARK THEME (Default)
// =============================================================================

export const darkTheme = {
  // -------------------------------------------------------------------------
  // BACKGROUNDS
  // -------------------------------------------------------------------------
  backgrounds: {
    /** Main page background - deepest/darkest */
    base: primitives.slate[950],           // #0b1220
    /** Alternating section background - slightly lighter for rhythm */
    surface: primitives.slate[980],         // #050a15
    /** Elevated surfaces (cards, modals, dropdowns) */
    surfaceElevated: primitives.slate[900], // #0f172a
    /** Overlay/backdrop for modals */
    overlay: 'rgba(11, 18, 32, 0.6)',       // base with 60% opacity
    /** Footer reveal background */
    footerReveal: primitives.slate[990],    // #050a14
    /** Code block background */
    codeBlock: '#22272e',
    /** Code title background */
    codeTitle: '#131b2e',
  },

  // -------------------------------------------------------------------------
  // TEXT COLORS
  // -------------------------------------------------------------------------
  text: {
    /** Primary text - headings, important content */
    primary: 'rgba(255, 255, 255, 0.9)',
    /** Secondary text - body copy, descriptions */
    secondary: 'rgba(255, 255, 255, 0.65)',
    /** Muted text - placeholders, less important info */
    muted: 'rgba(255, 255, 255, 0.5)',
    /** Emphasis text - slightly brighter than primary */
    emphasis: 'rgba(255, 255, 255, 0.95)',
    /** Inverted text (for light backgrounds) */
    inverted: primitives.slate[950],
    /** Link text color */
    link: primitives.teal[500],             // #14b8a6
    /** Highlight text (solid, not gradient) */
    highlight: '#0db5a5',
  },

  // -------------------------------------------------------------------------
  // BORDERS
  // -------------------------------------------------------------------------
  borders: {
    /** Default border color */
    default: primitives.slate[800],         // #1e293b
    /** Lighter border for hover states */
    light: primitives.slate[700],           // #334155
    /** Subtle border */
    subtle: primitives.slate[800],          // #1e293b
    /** Emphasis border */
    emphasis: primitives.slate[600],        // #475569
    /** Focus ring color */
    focus: primitives.teal[700],            // #0f766e
    /** Horizontal rule color */
    hr: primitives.slate[800],              // #1e293b
  },

  // -------------------------------------------------------------------------
  // ACCENT COLORS
  // -------------------------------------------------------------------------
  accents: {
    // Primary accent (teal)
    teal: {
      base: primitives.teal[700],           // #0f766e - darker variant
      light: primitives.teal[500],          // #14b8a6 - bright/primary
      dark: primitives.teal[800],           // #115e59
    },
    // Secondary accent (blue)
    blue: {
      base: primitives.blue[600],           // #2563eb
      light: primitives.blue[500],          // #3b82f6
      dark: primitives.blue[700],           // #1d4ed8
    },
  },

  // -------------------------------------------------------------------------
  // INTERACTIVE ELEMENTS (CTA, Buttons)
  // -------------------------------------------------------------------------
  interactive: {
    /** Primary CTA background */
    ctaBackground: primitives.teal[600],    // #0d9488
    /** Primary CTA text */
    ctaText: '#fcfcfc',
    /** Primary CTA hover */
    ctaHover: primitives.teal[500],
    /** Primary CTA shadow */
    ctaShadow: 'rgba(13, 148, 136, 0.25)',
    /** Outline button border on hover */
    outlineHover: primitives.teal[500],
    /** Ghost button hover background */
    ghostHover: primitives.slate[900],
  },

  // -------------------------------------------------------------------------
  // SHADOWS
  // -------------------------------------------------------------------------
  shadows: {
    /** Small shadow */
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    /** Medium shadow */
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    /** Large shadow */
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    /** Extra large shadow */
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    /** 2XL shadow */
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    /** CTA button glow */
    ctaGlow: '0 10px 15px -3px rgba(13, 148, 136, 0.25)',
    /** Accent teal glow */
    tealGlow: '0 10px 15px -3px rgba(20, 184, 166, 0.25)',
    /** Navigation mega menu shadow */
    megaMenu: '0 20px 70px -15px rgba(15, 118, 110, 0.3)',
    /** Footer glow */
    footerGlow: '0 20px 80px 20px rgba(13, 181, 165, 0.12), 0 8px 30px 5px rgba(13, 181, 165, 0.08)',
    /** Tracing beam shadow */
    tracingBeam: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },

  // -------------------------------------------------------------------------
  // GRADIENTS
  // -------------------------------------------------------------------------
  gradients: {
    /** Base to surface (vertical) */
    baseToSurface: 'linear-gradient(to bottom, #050a15, #0b1220)',
    /** Surface to base */
    surfaceToBase: 'linear-gradient(to bottom, #0b1220, #050a15)',
    /** Teal accent gradient (for glow effects) */
    tealGlow: 'linear-gradient(to bottom right, rgba(20, 184, 166, 0.1), rgba(37, 99, 235, 0.05))',
    /** Transparent teal fade (horizontal) */
    tealFadeHorizontal: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.3), transparent)',
    /** SVG line gradient stops */
    svgLine: {
      start: { color: '#14B8A6', opacity: 0.5 },
      end: { color: '#14B8A6', opacity: 0.2 },
    },
    /** Tracing beam gradient */
    tracingBeam: {
      stops: [
        { color: '#14B8A6', opacity: 0, offset: 0 },
        { color: '#14B8A6', opacity: 1, offset: 0.1 },
        { color: '#007DE5', opacity: 1, offset: 0.325 },
        { color: '#3B82F6', opacity: 0, offset: 1 },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // OPACITY SCALES
  // -------------------------------------------------------------------------
  opacity: {
    /** Text primary */
    textPrimary: 0.9,
    /** Text secondary */
    textSecondary: 0.65,
    /** Text muted */
    textMuted: 0.5,
    /** Background overlay */
    overlay: 0.6,
    /** Subtle patterns */
    pattern: 0.015,
    /** Disabled elements */
    disabled: 0.5,
    /** Icon/badge hover */
    iconHover: 1,
    /** Icon/badge default */
    iconDefault: 0.8,
  },

  // -------------------------------------------------------------------------
  // ACCENT OPACITY SCALES (for backgrounds with accent colors)
  // -------------------------------------------------------------------------
  accentOpacity: {
    /** Subtle background (pills, tags) */
    subtle: 0.05,
    /** Light background */
    light: 0.1,
    /** Medium background */
    medium: 0.2,
    /** Strong background */
    strong: 0.3,
    /** Border subtle */
    borderSubtle: 0.2,
    /** Border medium */
    borderMedium: 0.3,
    /** Border strong */
    borderStrong: 0.5,
  },

  // -------------------------------------------------------------------------
  // CALLOUT/ALERT COLORS
  // -------------------------------------------------------------------------
  callouts: {
    info: {
      bg: 'rgba(59, 130, 246, 0.05)',       // blue-500/5
      border: 'rgba(59, 130, 246, 0.2)',    // blue-500/20
      icon: primitives.blue[400],           // #60a5fa
      iconBg: 'rgba(59, 130, 246, 0.1)',    // blue-500/10
    },
    warning: {
      bg: 'rgba(245, 158, 11, 0.05)',       // amber-500/5
      border: 'rgba(245, 158, 11, 0.2)',    // amber-500/20
      icon: primitives.amber[400],          // #fbbf24
      iconBg: 'rgba(245, 158, 11, 0.1)',    // amber-500/10
    },
    error: {
      bg: 'rgba(239, 68, 68, 0.05)',        // red-500/5
      border: 'rgba(239, 68, 68, 0.2)',     // red-500/20
      icon: primitives.red[400],            // #f87171
      iconBg: 'rgba(239, 68, 68, 0.1)',     // red-500/10
    },
    success: {
      bg: 'rgba(34, 197, 94, 0.05)',        // green-500/5
      border: 'rgba(34, 197, 94, 0.2)',     // green-500/20
      icon: primitives.green[400],          // #4ade80
      iconBg: 'rgba(34, 197, 94, 0.1)',     // green-500/10
    },
    tip: {
      bg: 'rgba(168, 85, 247, 0.05)',       // purple-500/5
      border: 'rgba(168, 85, 247, 0.2)',    // purple-500/20
      icon: primitives.purple[400],         // #c084fc
      iconBg: 'rgba(168, 85, 247, 0.1)',    // purple-500/10
    },
    note: {
      bg: 'rgba(15, 118, 110, 0.05)',       // accent-teal/5
      border: 'rgba(15, 118, 110, 0.2)',    // accent-teal/20
      icon: primitives.teal[500],           // #14b8a6
      iconBg: 'rgba(15, 118, 110, 0.1)',    // accent-teal/10
    },
  },

  // -------------------------------------------------------------------------
  // CODE SYNTAX HIGHLIGHTING (matching current dark theme)
  // -------------------------------------------------------------------------
  code: {
    background: '#22272e',
    titleBackground: '#131b2e',
    border: primitives.slate[800],          // #1e293b
    text: 'rgba(255, 255, 255, 0.9)',
    lineNumbers: 'rgba(255, 255, 255, 0.5)',
    highlightLine: {
      bg: 'rgba(20, 184, 166, 0.1)',
      border: primitives.teal[500],         // #14b8a6
    },
    highlightWord: 'rgba(20, 184, 166, 0.2)',
    // macOS window buttons
    windowButtons: {
      close: '#ff5f57',
      minimize: '#febc2e',
      maximize: '#28c840',
    },
  },

  // -------------------------------------------------------------------------
  // SELECTION COLORS
  // -------------------------------------------------------------------------
  selection: {
    background: 'rgba(15, 118, 110, 0.3)',  // accent-teal/30
    text: primitives.teal[500],             // #14b8a6
  },

  // -------------------------------------------------------------------------
  // SVG/ICON COLORS
  // -------------------------------------------------------------------------
  svg: {
    /** Default stroke color for outlined icons */
    stroke: 'currentColor',
    /** Primary fill color for solid icons */
    fill: 'currentColor',
    /** Accent colored icons */
    accent: primitives.teal[500],           // #14b8a6
    /** Muted icons */
    muted: 'rgba(255, 255, 255, 0.5)',
    /** Grid pattern stroke */
    gridPattern: '#E5E7EB',
  },

  // -------------------------------------------------------------------------
  // SPECIAL COMPONENT COLORS
  // -------------------------------------------------------------------------
  components: {
    /** Background boxes hover colors (interactive grid) */
    backgroundBoxes: [
      primitives.teal[700],   // #0f766e
      primitives.teal[500],   // #14b8a6
      primitives.blue[600],   // #2563eb
      primitives.blue[500],   // #3b82f6
      '#0db5a5',              // highlight
      '#06b6d4',              // cyan-500
      '#0891b2',              // cyan-600
      '#0e7490',              // cyan-700
    ],
    /** Tracing beam colors */
    tracingBeam: {
      dotActive: primitives.white,
      dotInactive: primitives.teal[500],
      dotBorderActive: primitives.white,
      dotBorderInactive: primitives.teal[700],
      lineInactive: '#9091A0',
    },
    /** Spotlight fill */
    spotlightFill: 'rgba(20, 184, 166, 0.4)',
    /** Navigation overlay */
    navOverlay: 'rgba(11, 18, 32, 0.6)',    // base/60
    /** Scroll indicator */
    scrollIndicator: {
      border: primitives.slate[800],        // border
      dot: 'rgba(255, 255, 255, 0.5)',      // text-muted
    },
  },

  // -------------------------------------------------------------------------
  // PROSE/TYPOGRAPHY (MDX Content)
  // -------------------------------------------------------------------------
  prose: {
    body: 'rgba(255, 255, 255, 0.65)',
    headings: 'rgba(255, 255, 255, 0.9)',
    lead: 'rgba(255, 255, 255, 0.65)',
    links: '#0db5a5',
    bold: 'rgba(255, 255, 255, 0.9)',
    counters: 'rgba(255, 255, 255, 0.5)',
    bullets: primitives.teal[500],          // #14b8a6
    hr: primitives.slate[800],              // #1e293b
    quotes: 'rgba(255, 255, 255, 0.65)',
    quoteBorders: primitives.teal[500],     // #14b8a6
    captions: 'rgba(255, 255, 255, 0.5)',
    code: '#0db5a5',
    preCode: 'rgba(255, 255, 255, 0.9)',
    preBg: '#131b2e',
    thBorders: primitives.slate[800],       // #1e293b
    tdBorders: primitives.slate[800],       // #1e293b
    linkUnderline: 'rgba(13, 181, 165, 0.5)',
    linkUnderlineHover: 'rgba(13, 181, 165, 1)',
  },

  // -------------------------------------------------------------------------
  // CAL.COM INTEGRATION COLORS
  // -------------------------------------------------------------------------
  cal: {
    bg: primitives.slate[900],              // #0F172A
    bgEmphasis: primitives.slate[800],      // #1E293B
    border: primitives.slate[700],          // #334155
    borderEmphasis: primitives.slate[600],  // #475569
    borderSubtle: primitives.slate[800],    // #1E293B
    text: 'rgba(255, 255, 255, 0.9)',
    textEmphasis: 'rgba(255, 255, 255, 0.95)',
    textMuted: 'rgba(255, 255, 255, 0.65)',
    textSubtle: 'rgba(255, 255, 255, 0.5)',
    brand: primitives.teal[500],            // #14B8A6
    brandEmphasis: primitives.teal[600],    // #0D9488
    brandText: primitives.white,
  },
} as const;

// =============================================================================
// SEMANTIC TOKENS - LIGHT THEME
// =============================================================================

export const lightTheme = {
  // -------------------------------------------------------------------------
  // BACKGROUNDS
  // -------------------------------------------------------------------------
  backgrounds: {
    /** Main page background - lightest */
    base: primitives.white,
    /** Alternating section background */
    surface: primitives.slate[50],          // #f8fafc
    /** Elevated surfaces (cards, modals, dropdowns) */
    surfaceElevated: primitives.white,
    /** Overlay/backdrop for modals */
    overlay: 'rgba(15, 23, 42, 0.5)',       // slate-900 with 50% opacity
    /** Footer reveal background */
    footerReveal: primitives.slate[100],    // #f1f5f9
    /** Code block background */
    codeBlock: primitives.slate[900],       // Keep dark for readability
    /** Code title background */
    codeTitle: primitives.slate[800],
  },

  // -------------------------------------------------------------------------
  // TEXT COLORS
  // -------------------------------------------------------------------------
  text: {
    /** Primary text - headings, important content */
    primary: primitives.slate[900],         // #0f172a
    /** Secondary text - body copy, descriptions */
    secondary: primitives.slate[600],       // #475569
    /** Muted text - placeholders, less important info */
    muted: primitives.slate[400],           // #94a3b8
    /** Emphasis text */
    emphasis: primitives.slate[950],        // #0b1220
    /** Inverted text (for dark backgrounds) */
    inverted: primitives.white,
    /** Link text color */
    link: primitives.teal[600],             // #0d9488
    /** Highlight text */
    highlight: primitives.teal[600],        // #0d9488
  },

  // -------------------------------------------------------------------------
  // BORDERS
  // -------------------------------------------------------------------------
  borders: {
    /** Default border color */
    default: primitives.slate[200],         // #e2e8f0
    /** Lighter border for hover states */
    light: primitives.slate[300],           // #cbd5e1
    /** Subtle border */
    subtle: primitives.slate[100],          // #f1f5f9
    /** Emphasis border */
    emphasis: primitives.slate[400],        // #94a3b8
    /** Focus ring color */
    focus: primitives.teal[500],            // #14b8a6
    /** Horizontal rule color */
    hr: primitives.slate[200],              // #e2e8f0
  },

  // -------------------------------------------------------------------------
  // ACCENT COLORS (remain similar for brand consistency)
  // -------------------------------------------------------------------------
  accents: {
    teal: {
      base: primitives.teal[600],           // #0d9488 - slightly darker for contrast
      light: primitives.teal[500],          // #14b8a6
      dark: primitives.teal[700],           // #0f766e
    },
    blue: {
      base: primitives.blue[600],           // #2563eb
      light: primitives.blue[500],          // #3b82f6
      dark: primitives.blue[700],           // #1d4ed8
    },
  },

  // -------------------------------------------------------------------------
  // INTERACTIVE ELEMENTS
  // -------------------------------------------------------------------------
  interactive: {
    ctaBackground: primitives.teal[600],    // #0d9488
    ctaText: primitives.white,
    ctaHover: primitives.teal[700],         // Darker on hover in light mode
    ctaShadow: 'rgba(13, 148, 136, 0.2)',
    outlineHover: primitives.teal[600],
    ghostHover: primitives.slate[100],
  },

  // -------------------------------------------------------------------------
  // SHADOWS (more visible in light mode)
  // -------------------------------------------------------------------------
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    ctaGlow: '0 10px 15px -3px rgba(13, 148, 136, 0.15)',
    tealGlow: '0 10px 15px -3px rgba(20, 184, 166, 0.15)',
    megaMenu: '0 20px 70px -15px rgba(15, 118, 110, 0.15)',
    footerGlow: '0 -20px 80px 20px rgba(13, 181, 165, 0.06), 0 -8px 30px 5px rgba(13, 181, 165, 0.04)',
    tracingBeam: 'rgba(0, 0, 0, 0.1) 0px 3px 8px',
  },

  // -------------------------------------------------------------------------
  // GRADIENTS
  // -------------------------------------------------------------------------
  gradients: {
    baseToSurface: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
    surfaceToBase: 'linear-gradient(to bottom, #ffffff, #f8fafc)',
    tealGlow: 'linear-gradient(to bottom right, rgba(20, 184, 166, 0.08), rgba(37, 99, 235, 0.04))',
    tealFadeHorizontal: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.2), transparent)',
    svgLine: {
      start: { color: '#0d9488', opacity: 0.4 },
      end: { color: '#0d9488', opacity: 0.15 },
    },
    tracingBeam: {
      stops: [
        { color: '#0d9488', opacity: 0, offset: 0 },
        { color: '#0d9488', opacity: 1, offset: 0.1 },
        { color: '#2563eb', opacity: 1, offset: 0.325 },
        { color: '#3b82f6', opacity: 0, offset: 1 },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // OPACITY SCALES
  // -------------------------------------------------------------------------
  opacity: {
    textPrimary: 1,
    textSecondary: 1,
    textMuted: 1,
    overlay: 0.5,
    pattern: 0.04,
    disabled: 0.5,
    iconHover: 1,
    iconDefault: 0.7,
  },

  // -------------------------------------------------------------------------
  // ACCENT OPACITY SCALES
  // -------------------------------------------------------------------------
  accentOpacity: {
    subtle: 0.05,
    light: 0.1,
    medium: 0.15,
    strong: 0.2,
    borderSubtle: 0.2,
    borderMedium: 0.3,
    borderStrong: 0.4,
  },

  // -------------------------------------------------------------------------
  // CALLOUT/ALERT COLORS
  // -------------------------------------------------------------------------
  callouts: {
    info: {
      bg: 'rgba(59, 130, 246, 0.08)',
      border: 'rgba(59, 130, 246, 0.25)',
      icon: primitives.blue[600],
      iconBg: 'rgba(59, 130, 246, 0.15)',
    },
    warning: {
      bg: 'rgba(245, 158, 11, 0.08)',
      border: 'rgba(245, 158, 11, 0.25)',
      icon: primitives.amber[500],
      iconBg: 'rgba(245, 158, 11, 0.15)',
    },
    error: {
      bg: 'rgba(239, 68, 68, 0.08)',
      border: 'rgba(239, 68, 68, 0.25)',
      icon: primitives.red[500],
      iconBg: 'rgba(239, 68, 68, 0.15)',
    },
    success: {
      bg: 'rgba(34, 197, 94, 0.08)',
      border: 'rgba(34, 197, 94, 0.25)',
      icon: primitives.green[500],
      iconBg: 'rgba(34, 197, 94, 0.15)',
    },
    tip: {
      bg: 'rgba(168, 85, 247, 0.08)',
      border: 'rgba(168, 85, 247, 0.25)',
      icon: primitives.purple[500],
      iconBg: 'rgba(168, 85, 247, 0.15)',
    },
    note: {
      bg: 'rgba(13, 148, 136, 0.08)',
      border: 'rgba(13, 148, 136, 0.25)',
      icon: primitives.teal[600],
      iconBg: 'rgba(13, 148, 136, 0.15)',
    },
  },

  // -------------------------------------------------------------------------
  // CODE SYNTAX HIGHLIGHTING (keep dark for readability)
  // -------------------------------------------------------------------------
  code: {
    background: primitives.slate[900],
    titleBackground: primitives.slate[800],
    border: primitives.slate[700],
    text: 'rgba(255, 255, 255, 0.9)',
    lineNumbers: 'rgba(255, 255, 255, 0.5)',
    highlightLine: {
      bg: 'rgba(20, 184, 166, 0.15)',
      border: primitives.teal[500],
    },
    highlightWord: 'rgba(20, 184, 166, 0.25)',
    windowButtons: {
      close: '#ff5f57',
      minimize: '#febc2e',
      maximize: '#28c840',
    },
  },

  // -------------------------------------------------------------------------
  // SELECTION COLORS
  // -------------------------------------------------------------------------
  selection: {
    background: 'rgba(13, 148, 136, 0.2)',
    text: primitives.teal[700],
  },

  // -------------------------------------------------------------------------
  // SVG/ICON COLORS
  // -------------------------------------------------------------------------
  svg: {
    stroke: 'currentColor',
    fill: 'currentColor',
    accent: primitives.teal[600],
    muted: primitives.slate[400],
    gridPattern: primitives.slate[300],
  },

  // -------------------------------------------------------------------------
  // SPECIAL COMPONENT COLORS
  // -------------------------------------------------------------------------
  components: {
    backgroundBoxes: [
      primitives.teal[600],
      primitives.teal[500],
      primitives.blue[600],
      primitives.blue[500],
      primitives.teal[500],
      '#0891b2',
      '#06b6d4',
      '#0e7490',
    ],
    tracingBeam: {
      dotActive: primitives.teal[600],
      dotInactive: primitives.teal[500],
      dotBorderActive: primitives.teal[700],
      dotBorderInactive: primitives.teal[600],
      lineInactive: primitives.slate[300],
    },
    spotlightFill: 'rgba(13, 148, 136, 0.25)',
    navOverlay: 'rgba(15, 23, 42, 0.4)',
    scrollIndicator: {
      border: primitives.slate[300],
      dot: primitives.slate[400],
    },
  },

  // -------------------------------------------------------------------------
  // PROSE/TYPOGRAPHY
  // -------------------------------------------------------------------------
  prose: {
    body: primitives.slate[600],
    headings: primitives.slate[900],
    lead: primitives.slate[600],
    links: primitives.teal[600],
    bold: primitives.slate[900],
    counters: primitives.slate[500],
    bullets: primitives.teal[600],
    hr: primitives.slate[200],
    quotes: primitives.slate[600],
    quoteBorders: primitives.teal[500],
    captions: primitives.slate[500],
    code: primitives.teal[700],
    preCode: 'rgba(255, 255, 255, 0.9)',
    preBg: primitives.slate[900],
    thBorders: primitives.slate[200],
    tdBorders: primitives.slate[200],
    linkUnderline: 'rgba(13, 148, 136, 0.4)',
    linkUnderlineHover: primitives.teal[600],
  },

  // -------------------------------------------------------------------------
  // CAL.COM INTEGRATION
  // -------------------------------------------------------------------------
  cal: {
    bg: primitives.white,
    bgEmphasis: primitives.slate[50],
    border: primitives.slate[200],
    borderEmphasis: primitives.slate[300],
    borderSubtle: primitives.slate[100],
    text: primitives.slate[900],
    textEmphasis: primitives.slate[950],
    textMuted: primitives.slate[600],
    textSubtle: primitives.slate[400],
    brand: primitives.teal[600],
    brandEmphasis: primitives.teal[700],
    brandText: primitives.white,
  },
} as const;

// =============================================================================
// TYPOGRAPHY CONFIGURATION
// =============================================================================

export const typography = {
  fonts: {
    /** Display font - headings, navigation, buttons */
    display: 'var(--font-outfit), system-ui, -apple-system, sans-serif',
    /** Body font - paragraphs, descriptions */
    body: 'var(--font-inter), system-ui, -apple-system, sans-serif',
    /** Monospace font - code blocks */
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
  },

  // Font sizes (in rem)
  sizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },

  // Font weights
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Line heights
  lineHeights: {
    none: '1',
    tight: '1.1',     // Headings
    snug: '1.25',
    normal: '1.5',
    relaxed: '1.625',
    loose: '1.7',     // Body text
    prose: '1.75',    // MDX content
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    heading: '-0.02em',  // All headings
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',     // Uppercase labels
  },
} as const;

// =============================================================================
// SPACING & LAYOUT
// =============================================================================

export const spacing = {
  // Border radius
  radii: {
    none: '0',
    sm: '0.375rem',    // 6px
    md: '0.5rem',      // 8px
    lg: '0.75rem',     // 12px
    xl: '1rem',        // 16px
    '2xl': '1.5rem',   // 24px
    '3xl': '2.5rem',   // 40px (footer corners)
    full: '9999px',
  },

  // Container max-widths
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px',
    content: '65ch',   // Prose content
  },
} as const;

// =============================================================================
// ANIMATION & TRANSITIONS
// =============================================================================

export const motion = {
  // Transition durations
  durations: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '1000ms',
  },

  // Easing functions
  easings: {
    default: 'ease-out',
    in: 'ease-in',
    out: 'ease-out',
    inOut: 'ease-in-out',
    // Custom cubic-bezier curves
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  // Animation durations (for keyframes)
  animations: {
    scroll: '40s',
    spotlight: '2s',
    pulse: '2s',
    bounce: '1s',
    float: '6s',
  },
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// =============================================================================
// Z-INDEX SCALE
// =============================================================================

export const zIndex = {
  behind: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  overlay: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const;

// =============================================================================
// THEME TYPE DEFINITIONS
// =============================================================================

export type ThemeMode = 'dark' | 'light';
export type Theme = typeof darkTheme | typeof lightTheme;

export const themes = {
  dark: darkTheme,
  light: lightTheme,
} as const;

// Default export for convenience
export default {
  primitives,
  themes,
  typography,
  spacing,
  motion,
  breakpoints,
  zIndex,
};
