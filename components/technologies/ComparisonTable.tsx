"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  factor: string;
  fullTimeHire: string;
  staffAug: string;
}

interface ComparisonTableProps {
  title?: string;
  rows: ComparisonRow[];
}

export function ComparisonTable({
  title = "Staff Augmentation vs Full-Time Hiring",
  rows,
}: ComparisonTableProps) {
  return (
    <section className="py-16 sm:py-24 bg-base">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
            {title}
          </h2>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-x-auto rounded-2xl border border-border"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-elevated/80">
                <th className="px-6 py-4 text-sm font-semibold text-text-primary border-b border-border">
                  Factor
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-text-primary border-b border-border">
                  Full-Time .NET Hire
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-accent-light border-b border-border">
                  Staff Aug with Procedure
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={cn(
                    "transition-colors",
                    index % 2 === 0 ? "bg-surface/50" : "bg-surface-elevated/30",
                    index < rows.length - 1 && "border-b border-border/50"
                  )}
                >
                  <td className="px-6 py-4 text-sm font-medium text-text-primary">
                    {row.factor}
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    {row.fullTimeHire}
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary font-medium">
                    {row.staffAug}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </m.div>
      </div>
    </section>
  );
}
