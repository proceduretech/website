"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Case Studies", href: "/work" },
  { label: "Contact", href: "/contact-us" },
];

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100vh-5rem)] bg-base overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-base to-base" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23E5E7EB'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[300px] bg-accent-secondary/8 rounded-full blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-20">
        {/* Mascot Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full max-w-5xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-secondary/10 blur-3xl rounded-full scale-90" />
          <Image
            src="/mascots/scenes/404-search-party.png"
            alt="The Procedure Pets search party - Chip, Byte, Scout, Pixel, and Atlas looking for the missing page with maps and compasses"
            width={1200}
            height={400}
            className="relative z-10 w-full h-auto"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <div className="mt-12 text-center max-w-2xl">
          {/* 404 Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent-light">
              Error 404
            </span>
          </motion.div>

          {/* Headlines */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight"
          >
            Not all who wander are lost.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 text-xl sm:text-2xl font-medium text-highlight"
          >
            But this page definitely is.
          </motion.p>

          {/* Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed"
          >
            Our team has deployed a search party, but the page you&apos;re
            looking for seems to have gone off-grid. Let us help you find your
            way back.
          </motion.p>

          {/* Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Back to Base Camp
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent hover:bg-accent/10 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
              Contact Our Team
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-2"
          >
            <span className="text-sm text-text-muted">Or explore:</span>
            {quickLinks.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-accent-light transition-colors"
                >
                  {link.label}
                </Link>
                {index < quickLinks.length - 1 && (
                  <span className="mx-2 w-1 h-1 rounded-full bg-border" />
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
