"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, verticals, Vertical } from "../context/ThemeContext";
import { useScroll } from "../context/ScrollContext";
import { navItems } from "../config/navigation";
import { MobileLogo } from "./navigation/MobileLogo";
import { VerticalDropdown } from "./navigation/VerticalDropdown";
import { MobileMenu, HamburgerButton } from "./navigation/MobileMenu";
import { NavLink } from "./navigation/NavLink";

const verticalOrder: Vertical[] = ["ai-engineering", "software", "design", "ai-security"];

export function Header() {
  const { activeVertical, setActiveVertical, config } = useTheme();
  const { isHeroVisible } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
        {/* Desktop Layout */}
        <div className="mx-auto hidden h-16 max-w-6xl items-center justify-between px-6 lg:flex">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold tracking-tight">
            procedure
            <motion.span
              animate={{ color: config.accentColor }}
              transition={{ duration: 0.3 }}
            >
              .
            </motion.span>
          </Link>

          {/* Vertical toggle - animated visibility based on scroll */}
          <AnimatePresence>
            {!isHeroVisible && (
              <motion.nav
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--background)] p-1"
              >
                {verticalOrder.map((id) => {
                  const vertical = verticals[id];
                  const isActive = activeVertical === id;

                  return (
                    <button
                      key={id}
                      onClick={() => setActiveVertical(id)}
                      className="relative cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300"
                      style={{
                        color: isActive ? vertical.accentColor : "var(--muted)",
                        backgroundColor: isActive
                          ? `rgba(${vertical.accentColorRgb}, 0.1)`
                          : "transparent",
                      }}
                    >
                      {vertical.shortLabel}
                      {isActive && (
                        <motion.span
                          layoutId="header-active-indicator"
                          className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full"
                          style={{ backgroundColor: vertical.accentColor }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      )}
                    </button>
                  );
                })}
              </motion.nav>
            )}
          </AnimatePresence>

          {/* Right section: Nav links + CTA */}
          <div className="flex items-center gap-6">
            {/* Secondary nav links */}
            <nav className="flex items-center gap-5">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} external={item.external}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA button */}
            <motion.a
              href="mailto:hello@procedure.tech"
              className="rounded-full px-5 py-2 text-sm font-medium text-white"
              animate={{ backgroundColor: config.accentColor }}
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Get in touch
            </motion.a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mx-auto flex h-16 items-center justify-between px-4 lg:hidden">
          {/* Mobile Logo */}
          <MobileLogo />

          {/* Vertical Dropdown */}
          <VerticalDropdown />

          {/* Hamburger Menu Button */}
          <HamburgerButton onClick={() => setIsMobileMenuOpen(true)} />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
