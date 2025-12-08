"use client";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <a href="/" className={`flex items-center gap-3 ${className}`}>
      {/* Geometric logo mark */}
      <div className="relative w-10 h-10">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M20 4L4 12V28L20 36L36 28V12L20 4Z"
            stroke="url(#logo-gradient)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M20 4L20 36M4 12L36 28M36 12L4 28"
            stroke="url(#logo-gradient)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <defs>
            <linearGradient
              id="logo-gradient"
              x1="4"
              y1="4"
              x2="36"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Company name */}
      <span className="text-xl font-bold tracking-wide text-zinc-900 dark:text-white">
        PROCEDURE
      </span>
    </a>
  );
}
