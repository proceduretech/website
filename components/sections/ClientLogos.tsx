"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Aster", logo: "/logos/client/aster.svg", width: 100 },
  { name: "ESPN", logo: "/logos/client/espn.svg", width: 120 },
  { name: "KredX", logo: "/logos/client/kredx.svg", width: 110 },
  { name: "Pine Labs", logo: "/logos/client/pinelabs.svg", width: 140 },
  { name: "Setu", logo: "/logos/client/setu.svg", width: 100 },
  { name: "Tenmeya", logo: "/logos/client/tenmeya.svg", width: 120 },
  { name: "Timely", logo: "/logos/client/timely.svg", width: 120 },
  { name: "Treebo", logo: "/logos/client/treebo.svg", width: 120 },
  { name: "Turtlemint", logo: "/logos/client/turtlemint.svg", width: 140 },
  {
    name: "Workshop Ventures",
    logo: "/logos/client/workshopventure.svg",
    width: 160,
  },
];

export function ClientLogos() {
  return (
    <div className="mt-10 sm:mt-12">
      <p className="text-sm text-text-muted mb-6 text-center">
        Trusted by innovative teams
      </p>
      <div
        className="relative overflow-hidden py-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, white 25%, white 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, white 25%, white 75%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex items-center gap-12 md:gap-16"
          animate={{
            x: [0, -150 * clients.length],
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
              className="flex-shrink-0 h-10 flex items-center justify-center"
              style={{ width: client.width }}
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={client.width}
                height={40}
                className="max-h-8 w-auto object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
