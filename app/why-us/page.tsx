"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ClientLogos } from "@/components/sections";
import { PageHero } from "@/components/ui";

const differentiators = [
  {
    id: "ai-engineering",
    number: "01",
    headline: "AI Engineering Excellence",
    title: "Production AI, Not POCs",
    description:
      "Every Procedure engineer ships production AI systems. We do not deliver proof-of-concepts that need to be rebuilt. From LLM applications to AI agents, your systems are enterprise-ready from day one—secure, scalable, and production-grade.",
    stats: { value: "100+", label: "Products shipped to production" },
    accentColor: "teal" as const,
  },
  {
    id: "ship-fast",
    number: "02",
    headline: "AI Deployed Fast",
    title: "Ship AI in Days, Not Months",
    description:
      "Traditional AI consultancies measure timelines in quarters. We measure in days. Our engineers deploy within 2-5 days of kickoff, ready to build your AI systems from day one. No lengthy discovery phases. No endless architecture debates.",
    stats: { value: "2-5", label: "Days to first deployment" },
    accentColor: "blue" as const,
  },
  {
    id: "security",
    number: "03",
    headline: "Security Built In",
    title: "AI Security From Day One",
    description:
      "Your AI systems are protected from the start. Prompt injection defense, data leakage prevention, and AI-specific security measures are built into every system we deliver. No security theater—real protection for production AI.",
    stats: { value: "100%", label: "Security review pass rate" },
    accentColor: "teal" as const,
  },
  {
    id: "builders",
    number: "04",
    headline: "Engineers, Not Consultants",
    title: "We Build AI, Not Slide Decks",
    description:
      "We did not start Procedure to write strategy documents. We started it to build AI systems. Our engineers do not sit in meetings debating architecture for weeks. They build working AI, iterate based on real data, and ship features.",
    stats: { value: "98%", label: "Engagements reach production" },
    accentColor: "blue" as const,
  },
  {
    id: "team-extended",
    number: "05",
    headline: "Your AI Team, Extended",
    title: "Embedded AI Engineering",
    description:
      "Procedure engineers are not external vendors working in isolation. They embed with your team, use your tools, and own AI delivery alongside your developers. When the engagement ends, you keep the code and the knowledge.",
    stats: { value: "3+", label: "Years average partnership" },
    accentColor: "teal" as const,
  },
];

const comparisonData = {
  traditional: {
    title: "Traditional AI Consultancies",
    subtitle: "What you are used to",
    items: [
      "3-6 month discovery phases",
      "Junior developers learning AI on your dime",
      "Strategy decks and POCs that never ship",
      "No AI security considerations",
      "Prototypes that need complete rebuilds",
      "Ongoing dependency on vendor",
    ],
  },
  procedure: {
    title: "Procedure",
    subtitle: "What you get with us",
    items: [
      "AI engineers deployed in 2-5 days",
      "Senior engineers with deep experience",
      "Production AI from week one",
      "AI security built in from day one",
      "Production-grade from first commit",
      "Full knowledge transfer, no lock-in",
    ],
  },
};

const processSteps = [
  {
    step: "01",
    title: "AI Discovery",
    duration: "30 min",
    description: "Understand your AI objectives and requirements",
  },
  {
    step: "02",
    title: "Team Match",
    duration: "1-2 days",
    description: "Curate AI engineers for your stack",
  },
  {
    step: "03",
    title: "Integration",
    duration: "2-5 days",
    description: "Engineers embed and start building",
  },
  {
    step: "04",
    title: "Ship AI",
    duration: "Ongoing",
    description: "Production AI delivered continuously",
  },
];

const socialProofStats = [
  { value: "100+", label: "Products Shipped to Production" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "3+", label: "Years Average Partnership" },
  { value: "5", label: "Days to First Deployment" },
];

const featuredTestimonial = {
  quote:
    "What started with one engineer nearly three years ago has grown into a team of five, each fully owning their deliverables. They have taken on critical core roles across teams. We are extremely pleased with the commitment and engagement they bring.",
  author: "Shrivatsa Swadi",
  role: "Director of Engineering",
  company: "Setu",
  image: "/testimonials/shrivatsa.jpg",
};

function DifferentiatorCard({
  data,
  index,
}: {
  data: (typeof differentiators)[0];
  index: number;
}) {
  const isBlue = data.accentColor === "blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${isBlue ? "from-accent-secondary/20 to-accent/20" : "from-accent/20 to-accent-secondary/20"} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700`}
      />

      <div className="relative p-8 rounded-2xl bg-surface-elevated/90 backdrop-blur-sm border border-border group-hover:border-accent/40 transition-all duration-500 h-full flex flex-col group-hover:shadow-xl group-hover:shadow-black/20 group-hover:-translate-y-1">
        {/* Number Badge */}
        <div
          className={`w-12 h-12 rounded-xl ${isBlue ? "bg-accent-secondary/10 border-accent-secondary/20" : "bg-accent/10 border-accent/20"} border flex items-center justify-center mb-6`}
        >
          <span
            className={`text-lg font-bold ${isBlue ? "text-accent-secondary-light" : "text-accent-light"}`}
          >
            {data.number}
          </span>
        </div>

        {/* Headline (punchy statement) */}
        <p
          className={`text-sm font-semibold ${isBlue ? "text-accent-secondary-light" : "text-accent-light"} mb-2`}
        >
          {data.headline}
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-light transition-colors duration-300">
          {data.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
          {data.description}
        </p>

        {/* Stats Badge */}
        <div
          className={`inline-flex items-center gap-3 px-4 py-3 rounded-xl ${isBlue ? "bg-accent-secondary/5 border-accent-secondary/10" : "bg-accent/5 border-accent/10"} border`}
        >
          <span
            className={`text-2xl font-bold ${isBlue ? "text-accent-secondary-light" : "text-accent-light"}`}
          >
            {data.stats.value}
          </span>
          <span className="text-xs text-text-muted uppercase tracking-wider">
            {data.stats.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyUsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        badge="The Procedure Difference"
        headline="AI That Ships."
        headlineAccent="Not Slide Decks."
        description="Most AI consultancies deliver strategy documents and proof-of-concepts that never reach production. Procedure delivers senior engineers who embed with your team to ship production AI—LLM applications, AI agents, and secure AI systems—in days, not months."
        primaryCTA={{ text: "Start Your AI Project", href: "/contact" }}
        secondaryCTA={{ text: "See AI Case Studies", href: "/case-studies" }}
      />

      {/* Five Differentiators Section */}
      <section className="relative py-16 sm:py-24 bg-surface overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3e%3ccircle cx='2' cy='2' r='1' fill='%23E5E7EB'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Why Choose Procedure
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
              Five reasons teams choose{" "}
              <span className="text-highlight">Procedure for AI</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
              We built Procedure to solve the AI delivery problems we
              experienced as engineering leaders. Here is what makes us
              different.
            </p>
          </motion.div>

          {/* Differentiators Grid - First Row (3 cards) */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {differentiators.slice(0, 3).map((diff, idx) => (
              <DifferentiatorCard key={diff.id} data={diff} index={idx} />
            ))}
          </div>

          {/* Differentiators Grid - Second Row (2 cards centered) */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.slice(3, 5).map((diff, idx) => (
              <DifferentiatorCard key={diff.id} data={diff} index={idx + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'%3e%3cpath d='M0 40L40 0' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              The Comparison
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
              This is not your typical consultancy
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We have experienced the frustrations of working with traditional
              consultancies. We built Procedure to be different.
            </p>
          </motion.div>

          {/* Comparison Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Traditional Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-surface-elevated/50 border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-text-muted/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-text-muted"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider">
                      {comparisonData.traditional.subtitle}
                    </p>
                    <h3 className="text-lg font-semibold text-text-secondary">
                      {comparisonData.traditional.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-4">
                  {comparisonData.traditional.items.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 + 0.3, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-error/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-error"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <span className="text-text-muted text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Procedure Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/30 to-accent-secondary/30 rounded-2xl blur-lg" />

              <div className="relative p-8 rounded-2xl bg-surface-elevated border border-accent/30 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
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
                  </div>
                  <div>
                    <p className="text-xs text-accent-light uppercase tracking-wider">
                      {comparisonData.procedure.subtitle}
                    </p>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {comparisonData.procedure.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-4">
                  {comparisonData.procedure.items.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 + 0.3, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-text-primary text-sm font-medium">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-accent/20">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-medium text-accent-light">
                      Trusted by enterprise and startup clients
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="relative py-16 sm:py-24 bg-surface overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64'%3e%3cpath d='M0 32h20M44 32h20M32 0v20M32 44v20' stroke='%2314B8A6' stroke-width='0.5' fill='none'/%3e%3ccircle cx='32' cy='32' r='4' stroke='%2314B8A6' stroke-width='0.5' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Our Process
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
              From first call to{" "}
              <span className="text-highlight">production AI</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              A proven process designed to ship AI fast.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-[32px] left-[12%] right-[12%] h-[2px]">
              <div className="absolute inset-0 bg-border/50" />
              <motion.div
                className="absolute inset-0 bg-cta"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative text-center lg:text-left"
                >
                  <div className="w-16 h-16 mx-auto lg:mx-0 rounded-full bg-cta flex items-center justify-center mb-4 shadow-lg shadow-cta/25">
                    <span className="text-xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-2">
                    {step.duration}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative py-16 sm:py-24 bg-base overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3e%3cpath d='M16 8v16M8 16h16' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {socialProofStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-highlight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <p className="text-center text-xs text-text-muted uppercase tracking-widest mb-8">
              Trusted by leading companies
            </p>
            <ClientLogos />
          </motion.div>

          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 sm:p-12 rounded-2xl bg-surface-elevated border border-border">
              <svg
                className="absolute top-8 left-8 w-12 h-12 text-accent/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="relative text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 pl-0 sm:pl-8">
                &quot;{featuredTestimonial.quote}&quot;
              </blockquote>

              <div className="flex items-center gap-4 pl-0 sm:pl-8">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={featuredTestimonial.image}
                    alt={featuredTestimonial.author}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">
                    {featuredTestimonial.author}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {featuredTestimonial.role}, {featuredTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-accent-light font-medium hover:text-accent transition-colors"
            >
              Read more client stories
              <svg
                className="w-4 h-4"
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
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-accent-secondary/10 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3e%3cpath d='M18 4L32 18L18 32L4 18Z' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to Ship AI
              <br />
              <span className="text-highlight">That Actually Works?</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Get senior AI engineers embedded with your team within 5 days. No
              endless discovery phases. No PowerPoint consultants. Just
              production code shipped fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-cta/25"
              >
                Schedule Your Strategy Call
                <svg
                  className="w-5 h-5 ml-2"
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
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-text-primary bg-transparent border border-border rounded-xl hover:border-accent hover:text-accent-light transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <svg
                  className="w-4 h-4 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure SDLC
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <svg
                  className="w-4 h-4 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                NDA Available
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <svg
                  className="w-4 h-4 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                30 min call
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
