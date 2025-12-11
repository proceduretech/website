"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Alignment",
    description:
      "A focused conversation with our technical leadership to understand your objectives, architecture constraints, and success criteria. You receive an honest assessment—not a sales pitch.",
    duration: "30 min",
  },
  {
    step: "02",
    title: "Technical Assessment",
    description:
      "Our principal engineers analyze your architecture, codebase, and technical requirements. You receive a detailed engagement proposal with talent recommendations and a clear execution roadmap.",
    duration: "1-2 days",
  },
  {
    step: "03",
    title: "Talent Matching",
    description:
      "We curate a team of senior engineers matched to your technology stack and domain requirements. You interview and approve every team member before engagement begins.",
    duration: "2-3 days",
  },
  {
    step: "04",
    title: "Seamless Integration",
    description:
      "Your dedicated engineers integrate directly with your team—participating in standups, adopting your tools, and aligning with your workflows. They operate as true extensions of your engineering organization.",
    duration: "Ongoing",
  },
  {
    step: "05",
    title: "Deliver & Evolve",
    description:
      "Your team ships production-ready code with comprehensive documentation and knowledge transfer. As your requirements evolve, we scale capacity up or down—no long-term lock-ins.",
    duration: "Continuous",
  },
];

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

export function HowWeWork() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-surface">
      {/* Gradient orbs for depth */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-teal/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-blue/[0.07] rounded-full blur-[120px] pointer-events-none" />

      {/* Circuit pattern background - enhanced visibility */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64'%3e%3cpath d='M0 32h20M44 32h20M32 0v20M32 44v20' stroke='%2314B8A6' stroke-width='0.5' fill='none'/%3e%3ccircle cx='32' cy='32' r='4' stroke='%2314B8A6' stroke-width='0.5' fill='none'/%3e%3ccircle cx='32' cy='32' r='1.5' fill='%2314B8A6' opacity='0.5'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-3 sm:mb-4">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6 tracking-tight">
            From first call to{" "}
            <span className="text-highlight">production-ready code</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A proven engagement process built for enterprise velocity. Your team
            gains senior engineering capacity within days—not weeks.
          </p>
        </motion.div>

        {/* Process Timeline - Enhanced */}
        <div className="relative mb-24 sm:mb-32">
          {/* Animated connection line - desktop */}
          <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-[2px]">
            {/* Base line */}
            <div className="absolute inset-0 bg-border/50" />
            {/* Animated solid line */}
            <motion.div
              className="absolute inset-0 bg-cta"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative group"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-px bg-gradient-to-b from-accent-teal/0 to-accent-blue/0 group-hover:from-accent-teal/20 group-hover:to-accent-blue/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <div className="relative p-6 rounded-2xl bg-surface-elevated/80 backdrop-blur-sm border border-border group-hover:border-accent-teal/40 transition-all duration-500 h-full group-hover:shadow-xl group-hover:shadow-accent-teal/[0.08] group-hover:-translate-y-1">
                  {/* Step number - solid blue background */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto lg:mx-0 rounded-full bg-cta flex items-center justify-center shadow-lg shadow-cta/25">
                      <span className="text-xl font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-accent-teal-light transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-2">
                    {step.duration}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Divider */}
        <div className="relative mb-16 sm:mb-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <div className="px-6 bg-surface">
              <div className="w-2 h-2 rounded-full bg-accent-teal/50" />
            </div>
          </div>
        </div>

        {/* Engagement Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-3 sm:mb-4">
            Engagement Models
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight">
            Enterprise partnership models built for scale
          </h3>
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
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              {/* Multi-layer glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700" />

              <div className="relative p-8 rounded-2xl bg-surface-elevated/90 backdrop-blur-sm border border-border group-hover:border-accent-teal/40 transition-all duration-500 h-full flex flex-col group-hover:shadow-xl group-hover:shadow-black/20 group-hover:-translate-y-1">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Model icon */}
                <div className="w-12 h-12 rounded-xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center text-accent-teal-light mb-5 group-hover:border-accent-teal/40 group-hover:bg-accent-teal/15 transition-all duration-300">
                  {model.icon}
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-teal-light transition-colors duration-300">
                  {model.title}
                </h4>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {model.description}
                </p>

                {/* Features list - enhanced checkmarks */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {model.features.map((feature, featureIdx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.1 + featureIdx * 0.05 + 0.3,
                        duration: 0.4,
                      }}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-accent-teal/20 to-accent-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-accent-teal-light"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Best for badge - elevated treatment */}
                <div className="pt-5 border-t border-border group-hover:border-accent-teal/20 transition-colors duration-300">
                  <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-teal/5 to-accent-blue/5 border border-accent-teal/10 group-hover:border-accent-teal/20 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-teal/20 to-accent-blue/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-accent-teal-light"
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
                    </div>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
