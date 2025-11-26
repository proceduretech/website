"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export function MobileLogo() {
  const { config } = useTheme();

  return (
    <Link href="/" className="flex items-center justify-center">
      <motion.div
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)] text-lg font-bold text-[var(--foreground)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        P
        <motion.span
          className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full"
          animate={{ backgroundColor: config.accentColor }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
}
