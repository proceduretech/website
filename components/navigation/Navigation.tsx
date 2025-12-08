"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { Button } from "../ui/Button";
import { navigationData } from "@/lib/navigation-data";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-white/5 shadow-sm"
          : "bg-transparent"
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Navigation Items */}
          <nav className="hidden lg:flex lg:space-x-1">
            <NavItem
              label="Services"
              megaMenu={navigationData.services}
              isOpen={activeMenu === "services"}
              onHover={() => setActiveMenu("services")}
            />
            <NavItem
              label="Expertise"
              megaMenu={navigationData.expertise}
              isOpen={activeMenu === "expertise"}
              onHover={() => setActiveMenu("expertise")}
            />
            <NavItem
              label="Industries"
              megaMenu={navigationData.industries}
              isOpen={activeMenu === "industries"}
              onHover={() => setActiveMenu("industries")}
            />
            <NavItem
              label="Success Stories"
              href="/success-stories"
              onHover={() => setActiveMenu(null)}
            />
            <NavItem
              label="About"
              megaMenu={navigationData.about}
              isOpen={activeMenu === "about"}
              onHover={() => setActiveMenu("about")}
            />
            <NavItem
              label="Resources"
              megaMenu={navigationData.resources}
              isOpen={activeMenu === "resources"}
              onHover={() => setActiveMenu("resources")}
            />
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" href="/contact">
              Contact us
              <span className="ml-3 w-6 h-px bg-zinc-400 dark:bg-white/40" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-zinc-900 dark:text-white" aria-label="Open menu">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mega Menu Container */}
      {activeMenu && (
        <div className="relative lg:absolute left-0 w-full lg:px-16 lg:top-full lg:z-50">
          <div className="max-w-5xl mx-auto w-full lg:flex lg:justify-center">
            <MegaMenuContent
              sections={
                navigationData[activeMenu as keyof typeof navigationData] as MenuSection[]
              }
            />
          </div>
        </div>
      )}
    </header>
  );
}

interface MenuItem {
  label: string;
  description?: string;
  href: string;
}

interface SubSection {
  title?: string;
  items: MenuItem[];
}

interface FeaturedCard {
  badge: string;
  title: string;
  description: string;
  link: { label: string; href: string };
}

interface MenuSection {
  title?: string;
  items?: MenuItem[];
  sections?: SubSection[];
  highlight?: boolean;
  featured?: FeaturedCard;
  bullet?: boolean;
}

function MegaMenuContent({ sections }: { sections: MenuSection[] }) {
  const colsClass = sections.length === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/20 border border-zinc-200 dark:border-zinc-800 overflow-hidden mt-4 ring-1 ring-blue-500/0 [box-shadow:0_20px_70px_-15px_rgba(59,130,246,0.3)] dark:[box-shadow:0_20px_70px_-15px_rgba(59,130,246,0.25)]">
      <div className={`grid ${colsClass}`}>
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`p-8 ${
              section.highlight
                ? "bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/30"
                : "bg-white dark:bg-zinc-900"
            } ${idx !== 0 ? "border-l border-zinc-100 dark:border-zinc-800" : ""}`}
          >
            {/* Main section title */}
            {section.title && (
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-5">
                {section.title}
              </h3>
            )}

            {/* Regular items */}
            {section.items && (
              <ul className={section.bullet ? "space-y-2" : "space-y-4"}>
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className={section.bullet ? "flex items-start gap-2" : ""}>
                    {section.bullet ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-zinc-700 dark:text-zinc-300">
                          {item.label}
                        </span>
                      </>
                    ) : (
                      <a href={item.href} className="group block cursor-pointer">
                        <span className="text-base text-zinc-900 dark:text-zinc-100 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {item.label}
                        </span>
                        {item.description && (
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* Sub-sections (for columns with multiple headings) */}
            {section.sections && (
              <div>
                {section.sections.map((subSection, subIdx) => (
                  <div key={subIdx}>
                    {subSection.title && (
                      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-5 mt-8">
                        {subSection.title}
                      </h4>
                    )}
                    <ul className="space-y-2">
                      {subSection.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a
                            href={item.href}
                            className="group block cursor-pointer"
                          >
                            <span className="text-base text-zinc-900 dark:text-zinc-100 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                              {item.label}
                            </span>
                            {item.description && (
                              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Featured card */}
            {section.featured && (
              <div className="mt-6 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {section.featured.badge}
                </span>
                <h4 className="text-zinc-900 dark:text-white font-medium mt-2">
                  {section.featured.title}
                </h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal mt-1">
                  {section.featured.description}
                </p>
                <a
                  href={section.featured.link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 mt-3 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer"
                >
                  {section.featured.link.label}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
