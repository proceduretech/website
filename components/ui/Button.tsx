"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out";

  const variants = {
    primary:
      "bg-cta text-cta-text hover:brightness-110 border border-transparent shadow-lg shadow-cta/25",
    outline:
      "bg-transparent text-text-primary border border-border hover:border-accent hover:text-accent-light",
    ghost:
      "bg-transparent text-text-secondary hover:bg-surface-elevated hover:text-text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-2.5 text-sm rounded-lg",
    lg: "px-8 py-3 text-base rounded-xl",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
