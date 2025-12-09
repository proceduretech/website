"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Pine Labs", logo: "/logos/pinelabs.svg" },
  { name: "Timely", logo: "/logos/timely.svg" },
  { name: "Setu", logo: "/logos/setu.svg" },
  { name: "KredX", logo: "/logos/kredx.svg" },
  { name: "Treebo", logo: "/logos/treebo.svg" },
  { name: "Aster", logo: "/logos/aster.svg" },
  { name: "Disney ESPN", logo: "/logos/disney-espn.svg" },
  { name: "Last9", logo: "/logos/last9.svg" },
  { name: "Turtlemint", logo: "/logos/turtlemint.svg" },
  { name: "Monaire", logo: "/logos/monaire.svg" },
  { name: "Bitespeed", logo: "/logos/bitespeed.svg" },
  { name: "MC Labs", logo: "/logos/mclabs.svg" },
  { name: "Workshop Ventures", logo: "/logos/workshop.svg" },
  { name: "Medley", logo: "/logos/medley.svg" },
  { name: "Workhero", logo: "/logos/workhero.svg" },
];

const industries = [
  "Fintech",
  "Healthcare",
  "SaaS",
  "E-commerce",
  "Media & Entertainment",
  "InsurTech",
];

export function ClientLogos() {
  return (
    <div className="mt-16">
      <p className="text-sm text-text-muted mb-6 text-center">
        Trusted by innovative teams
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-base to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-base to-transparent z-10" />

        <motion.div
          className="flex gap-12 md:gap-16"
          animate={{
            x: [0, -120 * clients.length],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* Double the logos for seamless loop */}
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="text-text-muted font-semibold text-lg whitespace-nowrap flex-shrink-0"
            >
              {client.name}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Industry verticals */}
      <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
        {industries.map((industry) => (
          <span
            key={industry}
            className="px-3 py-1.5 text-xs font-medium text-text-muted bg-surface-elevated border border-border rounded-full"
          >
            {industry}
          </span>
        ))}
      </div>
    </div>
  );
}
