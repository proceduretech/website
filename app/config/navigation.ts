export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
