"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

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

export function HowWeWork() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative py-16 sm:py-24 overflow-hidden bg-base">
      {/* Gradient orbs for depth */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-secondary/[0.07] rounded-full blur-[120px] pointer-events-none" />

      {/* Circuit pattern background - enhanced visibility */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64'%3e%3cpath d='M0 32h20M44 32h20M32 0v20M32 44v20' stroke='%2314B8A6' stroke-width='0.5' fill='none'/%3e%3ccircle cx='32' cy='32' r='4' stroke='%2314B8A6' stroke-width='0.5' fill='none'/%3e%3ccircle cx='32' cy='32' r='1.5' fill='%2314B8A6' opacity='0.5'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-3 sm:mb-4">
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
        </m.div>

        {/* Process Timeline - Aceternity UI */}
        <div className="relative">
          <Timeline
            data={processSteps.map((step) => ({
              title: step.step,
              content: (
                <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-accent/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <span className="inline-block px-3 py-1 text-xs font-medium text-accent-light bg-accent/10 border border-accent/20 rounded-full mb-3">
                    {step.duration}
                  </span>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}
