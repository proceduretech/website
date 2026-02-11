"use client";

import { LazyMotion, m } from "@/components/ui/LazyMotion";

const defaultStats = [
  { value: "100+", label: "Products Shipped to Production" },
  { value: "5", label: "Days to First Deployment" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "3+", label: "Years Average Partnership" },
];

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  title?: string;
  stats?: Stat[];
}

export function Stats({
  title = "Proven results from embedded engineering",
  stats = defaultStats,
}: StatsProps) {
  return (
    <LazyMotion>
      <section className="relative py-16 sm:py-24 overflow-hidden bg-surface">
        {/* Plus/cross pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3e%3cpath d='M16 8v16M8 16h16' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
              {title}
            </h2>
          </m.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <m.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative text-center p-5 sm:p-6 rounded-2xl bg-surface-elevated/80 border border-border hover:border-accent/20 transition-all duration-300 group"
              >
                {/* Subtle accent glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-2xl sm:text-3xl font-bold text-highlight mb-1.5 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs sm:text-sm leading-snug">
                    {stat.label}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
