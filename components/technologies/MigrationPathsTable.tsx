"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface MigrationPath {
  from: string;
  to: string;
  complexity: string;
  timeline: string;
  bestFor: string;
}

interface MigrationPathsTableProps {
  title?: string;
  intro?: string;
  paths: MigrationPath[];
  note?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function ComplexityBadge({ complexity }: { complexity: string }) {
  const normalized = complexity.toLowerCase();

  const colorClasses = cn(
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
    normalized === "low" && "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    normalized === "medium" && "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
    normalized === "high" && "bg-red-500/10 text-red-400 border border-red-500/20",
    !["low", "medium", "high"].includes(normalized) &&
      "bg-accent/10 text-accent-light border border-accent/20"
  );

  return <span className={colorClasses}>{complexity}</span>;
}

export function MigrationPathsTable({
  title = "Migration Paths",
  intro,
  paths,
  note,
}: MigrationPathsTableProps) {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-5">
            {title}
          </h2>
          {intro && (
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {intro}
            </p>
          )}
        </m.div>

        {/* Desktop table */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-surface-elevated">
                  <th className="px-6 py-4 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                    From
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                    To
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                    Complexity
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                    Timeline
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {paths.map((path, index) => (
                  <tr
                    key={index}
                    className="bg-surface-elevated/40 hover:bg-surface-elevated/70 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-text-primary font-medium">
                      {path.from}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-primary font-medium">
                      {path.to}
                    </td>
                    <td className="px-6 py-4">
                      <ComplexityBadge complexity={path.complexity} />
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {path.timeline}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {path.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </m.div>

        {/* Mobile cards */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="md:hidden space-y-4"
        >
          {paths.map((path, index) => (
            <m.div
              key={index}
              variants={itemVariants}
              className={cn(
                "p-5 rounded-xl",
                "bg-surface-elevated/80 backdrop-blur-sm",
                "border border-border"
              )}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider">
                      From
                    </span>
                    <p className="text-sm font-medium text-text-primary">
                      {path.from}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-accent-light flex-shrink-0 mx-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider">
                      To
                    </span>
                    <p className="text-sm font-medium text-text-primary">
                      {path.to}
                    </p>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">
                      Complexity
                    </span>
                    <ComplexityBadge complexity={path.complexity} />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">
                      Timeline
                    </span>
                    <p className="text-sm text-text-secondary">
                      {path.timeline}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">
                      Best For
                    </span>
                    <p className="text-sm text-text-secondary">
                      {path.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>

        {/* Note */}
        {note && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-text-muted text-sm italic max-w-2xl mx-auto">
              {note}
            </p>
          </m.div>
        )}
      </div>
    </section>
  );
}
