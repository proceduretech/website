"use client";

import { motion } from "framer-motion";
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

export function SkillsTable({
  title = "Technology Skills",
  skills,
  specializedSkills,
}: SkillsTableProps) {
  return (
    <section className="py-16 sm:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-5">
            {title}
          </h2>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-accent/10">
                  <th className="px-6 py-4 text-left text-xs font-medium text-accent-light uppercase tracking-wider">
                    Technology
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-accent-light uppercase tracking-wider">
                    Experience
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-accent-light uppercase tracking-wider">
                    Typical Use Cases
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {skills.map((skill, index) => (
                  <tr
                    key={index}
                    className={cn(
                      "transition-colors",
                      index % 2 === 0
                        ? "bg-surface-elevated/40"
                        : "bg-surface-elevated/20",
                      "hover:bg-surface-elevated/70"
                    )}
                  >
                    <td className="px-6 py-4 text-sm text-text-primary font-medium">
                      {skill.technology}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {skill.experienceLevel}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {skill.typicalUseCases}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="md:hidden space-y-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "p-5 rounded-xl",
                "bg-surface-elevated/80 backdrop-blur-sm",
                "border border-border"
              )}
            >
              <div className="space-y-3">
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-wider">
                    Technology
                  </span>
                  <p className="text-sm font-medium text-text-primary">
                    {skill.technology}
                  </p>
                </div>

                <div className="h-px bg-border" />

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">
                      Experience
                    </span>
                    <p className="text-sm text-text-secondary">
                      {skill.experienceLevel}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">
                      Typical Use Cases
                    </span>
                    <p className="text-sm text-text-secondary">
                      {skill.typicalUseCases}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Specialized skills */}
        {specializedSkills && specializedSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <div
              className={cn(
                "p-6 rounded-xl",
                "bg-surface-elevated/80 backdrop-blur-sm",
                "border border-border"
              )}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Specialized Skills
              </h3>
              <ul className="space-y-2.5">
                {specializedSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                  >
                    <svg
                      className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5"
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
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
