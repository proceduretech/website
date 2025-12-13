"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface RelatedPage {
  slug: string;
  title: string;
  description: string;
  badge: string;
}

interface RelatedExpertiseProps {
  title?: string;
  pages: RelatedPage[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function RelatedExpertise({
  title = "Related Expertise",
  pages,
}: RelatedExpertiseProps) {
  return (
    <section className="py-24 sm:py-36 bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {pages.map((page) => (
            <motion.div key={page.slug} variants={cardVariants}>
              <Link
                href={`/expertise/${page.slug}`}
                className="block p-6 rounded-xl h-full bg-surface-elevated border border-border hover:border-slate-600 group transition-colors"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-4">
                  <span className="text-xs font-medium text-accent-teal-light">
                    {page.badge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-teal-light transition-colors">
                  {page.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {page.description}
                </p>

                <div className="flex items-center text-sm text-accent-teal-light font-medium">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
