"use client";

interface MenuSection {
  title?: string;
  titleColor?: "default" | "blue";
  items?: {
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
      <div className="border-b border-solid border-zinc-200 lg:border-0 flex items-center justify-between lg:justify-start flex-col lg:flex-row">
        <a
          href={href}
          className="w-full lg:w-fit font-normal text-lg text-zinc-700 flex items-center justify-between lg:justify-start px-4 py-5 lg:p-2 lg:hover:bg-zinc-100 rounded-lg transition-colors"
          onMouseEnter={onHover}
        >
          {label}
        </a>
      </div>
    );
  }

  return (
    <div
      className="border-b border-solid border-zinc-200 lg:border-0 flex items-center justify-between lg:justify-start flex-col lg:flex-row"
      onMouseEnter={onHover}
    >
      <button
        className={`w-full lg:w-fit font-normal text-lg text-zinc-700 flex items-center justify-between lg:justify-start px-4 py-5 lg:p-2 lg:focus:bg-zinc-100 lg:hover:bg-zinc-100 rounded-lg transition-colors ${
          isOpen ? "lg:bg-zinc-100" : ""
        }`}
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <svg
          className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-200 ${
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
    </div>
  );
}
