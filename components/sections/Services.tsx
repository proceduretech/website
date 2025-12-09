"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    name: "AI Engineering",
    description: "Production-grade AI systems, from LLMs to custom models",
    href: "/services/ai-engineering",
  },
  {
    name: "Product Engineering",
    description: "Full-stack development with AI-augmented velocity",
    href: "/services/product-engineering",
  },
  {
    name: "AI Security",
    description: "Secure your AI systems and protect against emerging threats",
    href: "/services/ai-security",
  },
  {
    name: "Design",
    description: "Human-centered design for AI-powered experiences",
    href: "/services/design",
  },
  {
    name: "Cloud & DevOps",
    description: "Infrastructure built for AI workloads at scale",
    href: "/services/cloud-devops",
  },
];

export function Services() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3 sm:mb-4">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900">
            Full-spectrum AI and engineering services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block p-6 rounded-xl bg-white border border-zinc-200 hover:border-blue-300 hover:bg-zinc-50 transition-all duration-200 shadow-sm h-full"
              >
                <h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-zinc-600 text-sm">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
