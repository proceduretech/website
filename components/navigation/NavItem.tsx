"use client";

interface MenuSection {
  title: string;
  titleColor?: "default" | "blue";
  items: {
    label: string;
    description?: string;
    href: string;
  }[];
  highlight?: boolean;
}

interface NavItemProps {
  label: string;
  href?: string;
  megaMenu?: MenuSection[];
  isOpen?: boolean;
  onHover?: () => void;
}

export function NavItem({ label, href, megaMenu, isOpen, onHover }: NavItemProps) {
  const hasDropdown = !!megaMenu;

  if (!hasDropdown) {
    return (
      <a
        href={href}
        className="px-4 py-2 text-lg font-semibold text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
        onMouseEnter={onHover}
      >
        {label}
      </a>
    );
  }

  return (
    <div className="relative" onMouseEnter={onHover}>
      <button
        className="flex items-center gap-1.5 px-4 py-2 text-lg font-semibold text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className={isOpen ? "text-white" : ""}>{label}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-white/40" />
      )}
    </div>
  );
}
