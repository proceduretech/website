"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Pine Labs", logo: "/logos/pinelabs.svg", width: 140 },
  { name: "Timely", logo: "/logos/timely.svg", width: 120 },
  { name: "Setu", logo: "/logos/setu.svg", width: 100 },
  { name: "KredX", logo: "/logos/kredx.svg", width: 110 },
  { name: "Treebo", logo: "/logos/treebo.svg", width: 120 },
  { name: "Aster", logo: "/logos/aster.svg", width: 100 },
  { name: "Disney ESPN", logo: "/logos/disney-espn.svg", width: 160 },
  { name: "Last9", logo: "/logos/last9.svg", width: 100 },
  { name: "Turtlemint", logo: "/logos/turtlemint.svg", width: 140 },
  { name: "Monaire", logo: "/logos/monaire.svg", width: 120 },
  { name: "Bitespeed", logo: "/logos/bitespeed.svg", width: 130 },
  { name: "MC Labs", logo: "/logos/mclabs.svg", width: 120 },
  { name: "Workshop Ventures", logo: "/logos/workshop.svg", width: 180 },
  { name: "Medley", logo: "/logos/medley.svg", width: 110 },
  { name: "Workhero", logo: "/logos/workhero.svg", width: 130 },
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
      <div className="relative overflow-hidden py-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-base to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-base to-transparent z-10" />

        <motion.div
          className="flex items-center gap-12 md:gap-16"
          animate={{
            x: [0, -140 * clients.length],
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* Double the logos for seamless loop */}
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex-shrink-0 h-10 flex items-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ width: client.width }}
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={client.width}
                height={40}
                className="h-8 w-auto object-contain filter brightness-0 invert opacity-70"
              />
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
