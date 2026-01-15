"use client";

/**
 * Lazy-loaded Framer Motion wrapper
 * Reduces initial bundle size by loading motion features on-demand
 * Use this for below-the-fold animations
 */

import { LazyMotion as FramerLazyMotion, domAnimation, m } from "framer-motion";
import { ReactNode } from "react";

interface LazyMotionProps {
  children: ReactNode;
}

/**
 * Wrapper that lazy-loads Framer Motion features
 * Only loads when component enters viewport
 */
export function LazyMotion({ children }: LazyMotionProps) {
  return (
    <FramerLazyMotion features={domAnimation} strict>
      {children}
    </FramerLazyMotion>
  );
}

/**
 * Lightweight motion component (use 'm' instead of 'motion')
 * Only includes DOM animations, not layout/animation features
 */
export { m };
