"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio?: string;
  credentials?: string[];
  expertise?: string[];
  specialty?: string;
  notable?: string;
  linkedin?: string;
}

const leadership: TeamMember[] = [
  {
    name: "Arjun Mehta",
    title: "Co-founder & Head of AI Engineering",
    image: "/team/arjun-mehta.jpg",
    bio: "Former Tech Lead at Google DeepMind, where he led the infrastructure team behind Gemini's production deployment. Arjun has shipped ML systems serving billions of requests daily and holds 12 patents in distributed model inference.",
    credentials: ["Ex-Google DeepMind", "12 Patents"],
    expertise: ["LLM Infrastructure", "Model Serving", "Technical Strategy"],
    notable: "Led Google's first production deployment of multimodal LLMs at scale",
    linkedin: "#",
  },
  {
    name: "Sarah Chen",
    title: "Co-founder & Head of Product Engineering",
    image: "/team/sarah-chen.jpg",
    bio: "Previously Principal Engineer at Stripe, where she architected the ML platform powering real-time fraud detection across 50+ countries. Sarah specializes in translating complex AI capabilities into products users love.",
    credentials: ["Ex-Stripe", "Ex-Meta"],
    expertise: ["ML Platforms", "Product Architecture", "Fraud Detection"],
    notable: "Built fraud systems preventing $2B+ in annual losses at Stripe",
    linkedin: "#",
  },
];

const team: TeamMember[] = [
  {
    name: "Marcus Williams",
    title: "Principal AI Engineer",
    image: "/team/marcus-williams.jpg",
    specialty: "LLM Applications",
    notable: "Ex-Meta AI, shipped coding assistant to 50K+ engineers",
    linkedin: "#",
  },
  {
    name: "Elena Kowalski",
    title: "Principal ML Infrastructure",
    image: "/team/elena-kowalski.jpg",
    specialty: "ML Infrastructure",
    notable: "Ex-Anthropic, core contributor to Ray",
    linkedin: "#",
  },
  {
    name: "David Park",
    title: "Senior AI Engineer",
    image: "/team/david-park.jpg",
    specialty: "AI Safety",
    notable: "Ex-OpenAI, GPT-4 safety & deployment",
    linkedin: "#",
  },
  {
    name: "Priya Sharma",
    title: "Senior AI Engineer",
    image: "/team/priya-sharma.jpg",
    specialty: "MLOps",
    notable: "Ex-Amazon Alexa AI, reduced latency 40%",
    linkedin: "#",
  },
];

const values = [
  {
    title: "Ship First",
    description: "Production over theory",
    icon: (
      <svg
        className="w-6 h-6"
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
    title: "Deep Work",
    description: "Focus over meetings",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "Own It",
    description: "Outcomes over tasks",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Grow Together",
    description: "Share knowledge daily",
    icon: (
      <svg
        className="w-6 h-6"
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
];

export function Team() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-base">
      {/* Dot matrix pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3e%3ccircle cx='12' cy='12' r='1.5' fill='%23E5E7EB'/%3e%3c/svg%3e")`,
        }}
      />

      {/* Accent glow orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-3 sm:mb-4">
            Our Team
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Senior Engineers. Production Veterans. Your AI Team.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Every engagement is staffed by senior engineers who have built and
            scaled AI systems at the world&apos;s most demanding companies. No
            junior handoffs. No learning on your dime.
          </p>
        </motion.div>

        {/* Featured Leadership */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {leadership.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-surface-elevated rounded-2xl overflow-hidden border border-border hover:border-accent-teal/50 transition-all duration-300"
            >
              {/* Gradient top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-teal to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6 sm:p-8">
                {/* Top row: Photo + Basic Info */}
                <div className="flex gap-5 sm:gap-6 mb-5">
                  {/* Photo container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden ring-2 ring-border group-hover:ring-accent-teal/30 transition-all duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    {/* LinkedIn badge */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-surface border border-border rounded-lg flex items-center justify-center text-text-muted hover:text-accent-teal-light hover:border-accent-teal/50 transition-all duration-200"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Name, Title, Credentials */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-text-primary group-hover:text-accent-teal-light transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-accent-teal-light font-medium text-sm mb-2">
                      {member.title}
                    </p>
                    {/* Credential badges */}
                    <div className="flex flex-wrap gap-2">
                      {member.credentials?.map((credential) => (
                        <span
                          key={credential}
                          className="px-2 py-0.5 text-xs font-medium text-text-muted bg-surface border border-border rounded"
                        >
                          {credential}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Notable achievement */}
                {member.notable && (
                  <p className="text-xs text-accent-teal-light italic mb-5">
                    {member.notable}
                  </p>
                )}

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
                  {member.expertise?.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium text-accent-teal-light bg-accent-teal/10 border border-accent-teal/20 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative bg-surface-elevated rounded-xl p-5 sm:p-6 border border-border hover:border-accent-teal/50 transition-all duration-300 text-center"
            >
              {/* Photo */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-xl overflow-hidden ring-2 ring-border group-hover:ring-accent-teal/30 transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Name */}
              <h4 className="text-base font-semibold text-text-primary group-hover:text-accent-teal-light transition-colors mb-1">
                {member.name}
              </h4>

              {/* Title */}
              <p className="text-text-secondary text-sm mb-2">{member.title}</p>

              {/* Specialty tag */}
              <span className="inline-block px-3 py-1 text-xs font-medium text-text-muted bg-surface border border-border rounded-full mb-2">
                {member.specialty}
              </span>

              {/* Notable - compact */}
              {member.notable && (
                <p className="text-xs text-text-muted mt-2 line-clamp-2">
                  {member.notable}
                </p>
              )}

              {/* LinkedIn - subtle corner icon */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-text-muted hover:text-accent-teal-light transition-colors opacity-0 group-hover:opacity-100"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Team Values Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center text-accent-teal-light">
                  {value.icon}
                </div>
                <h4 className="text-sm font-semibold text-text-primary mb-1">
                  {value.title}
                </h4>
                <p className="text-xs text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
