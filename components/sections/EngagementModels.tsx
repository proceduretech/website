"use client";

import { motion } from "framer-motion";

const engagementModels = [
  {
    title: "Team Augmentation",
    description:
      "Senior engineers integrated directly into your engineering organization, reporting to your leadership and delivering against your roadmap.",
    features: [
      "Full-time dedicated senior engineers",
      "Seamless adoption of your tech stack and workflows",
      "Direct reporting to your engineering leadership",
    ],
    bestFor: "Engineering teams scaling for growth or critical initiatives",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Managed Delivery",
    description:
      "Full ownership of a defined scope—from architecture through deployment. You set the objectives; we deliver production-ready software on schedule.",
    features: [
      "End-to-end technical ownership and accountability",
      "Dedicated delivery lead with direct stakeholder access",
      "Weekly demos and transparent progress reporting",
    ],
    bestFor: "New product launches or strategic feature development",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
  {
    title: "AI Transformation",
    description:
      "A strategic partnership to accelerate enterprise AI adoption—from opportunity assessment through production deployment and organizational enablement.",
    features: [
      "AI readiness and opportunity assessment",
      "Strategic roadmap with clear ROI milestones",
      "Implementation, integration, and team enablement",
    ],
    bestFor: "Organizations pursuing enterprise-wide AI capabilities",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
        />
      </svg>
    ),
  },
];

export function EngagementModels() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-surface">
      {/* Gradient orbs for depth */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-secondary/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3e%3cpath d='M0 16h32M16 0v32' stroke='%23E5E7EB' stroke-width='0.5' fill='none'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-3 sm:mb-4">
            Engagement Models
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight">
            Enterprise partnership models built for scale
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">
            Three proven engagement frameworks designed for different business
            objectives. Scale up, scale down, or pivot—without renegotiating
            contracts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {engagementModels.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group p-8 rounded-xl bg-surface-elevated border border-border hover:border-accent/30 transition-colors h-full flex flex-col"
            >
              {/* Model icon */}
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light mb-5">
                {model.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {model.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {model.description}
              </p>

              {/* Features list */}
              <ul className="space-y-3 mb-6 flex-grow">
                {model.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <svg
                      className="w-4 h-4 text-accent-light shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Best for badge */}
              <div className="pt-5 border-t border-border">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-accent-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div>
                    <p className="text-[10px] text-text-muted uppercase tracking-wider font-medium">
                      Best for
                    </p>
                    <p className="text-sm font-medium text-text-primary">
                      {model.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
