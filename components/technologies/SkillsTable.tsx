"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface Skill {
  technology: string;
  experienceLevel: string;
  typicalUseCases: string;
}

interface SkillsTableProps {
  title?: string;
  skills: Skill[];
  specializedSkills?: string[];
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

function getExperienceWidth(level: string): string {
  const years = parseInt(level);
  if (years >= 7) return "w-[87%]";
  if (years >= 5) return "w-[62%]";
  if (years >= 4) return "w-[50%]";
  if (years >= 2) return "w-[25%]";
  return "w-[15%]";
}

export function SkillsTable({
  title = "Technology Skills",
  skills,
  specializedSkills,
}: SkillsTableProps) {
  return (
    <section className="py-16 sm:py-24 bg-base">
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
                  <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-widest">
                    Technology
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-widest">
                    Experience
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-widest">
                    Typical Use Cases
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {skills.map((skill, index) => (
                  <tr
                    key={index}
                    className={cn(
                      "group transition-all duration-200",
                      index % 2 === 0
                        ? "bg-surface-elevated/40"
                        : "bg-surface-elevated/20",
                      "hover:bg-surface-elevated/60"
                    )}
                  >
                    <td className="px-6 py-4">
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 px-3 py-1 rounded-lg",
                          "bg-accent/8 border border-accent/15",
                          "text-sm font-medium text-text-primary",
                          "group-hover:border-accent/30 group-hover:bg-accent/12 transition-all duration-200"
                        )}
                      >
                        {skill.technology}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-20 h-1.5 rounded-full bg-surface-elevated">
                          <div
                            className={cn(
                              "h-full rounded-full bg-accent/60",
                              getExperienceWidth(skill.experienceLevel)
                            )}
                          />
                        </div>
                        <span className="text-sm text-text-secondary">
                          {skill.experienceLevel}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {skill.typicalUseCases}
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
          {skills.map((skill, index) => (
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
                  <span
                    className={cn(
                      "inline-flex items-center px-3 py-1 rounded-lg",
                      "bg-accent/8 border border-accent/15",
                      "text-sm font-medium text-text-primary"
                    )}
                  >
                    {skill.technology}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 rounded-full bg-surface-elevated">
                      <div
                        className={cn(
                          "h-full rounded-full bg-accent/60",
                          getExperienceWidth(skill.experienceLevel)
                        )}
                      />
                    </div>
                    <span className="text-xs text-text-muted">
                      {skill.experienceLevel}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div>
                  <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">
                    Typical Use Cases
                  </span>
                  <p className="text-sm text-text-secondary">
                    {skill.typicalUseCases}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>

        {/* Specialized skills */}
        {specializedSkills && specializedSkills.length > 0 && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <div
              className={cn(
                "relative p-6 rounded-2xl overflow-hidden",
                "bg-surface-elevated/80 backdrop-blur-sm",
                "border border-accent/20"
              )}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-xl",
                      "bg-accent/10 border border-accent/20"
                    )}
                  >
                    <svg
                      className="w-5 h-5 text-accent-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    Specialized Skills
                  </h3>
                </div>

                {/* Skills as pills */}
                <div className="flex flex-wrap gap-3">
                  {specializedSkills.map((skill, index) => (
                    <span
                      key={index}
                      className={cn(
                        "inline-flex items-center gap-2",
                        "px-4 py-2 rounded-xl",
                        "bg-accent/5 border border-accent/15",
                        "text-sm text-text-secondary",
                        "hover:border-accent/30 hover:bg-accent/8 transition-all duration-200"
                      )}
                    >
                      <svg
                        className="w-3.5 h-3.5 text-accent-light flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </m.div>
        )}
      </div>
    </section>
  );
}
