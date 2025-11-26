"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  external?: boolean;
  className?: string;
}

export function NavLink({
  href,
  children,
  onClick,
  external,
  className = "",
}: NavLinkProps) {
  const baseStyles =
    "text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]";

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${className}`}
        onClick={onClick}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={`${baseStyles} ${className}`}>
      {children}
    </Link>
  );
}
