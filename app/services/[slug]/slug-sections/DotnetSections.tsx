"use client";

import { m } from "framer-motion";

export function DotnetSpecializedServices() {
  return (
    <section id="specialized-services" className="relative py-16 sm:py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
            Specialized <span className="text-highlight">.NET Services</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Deep-dive services for teams with specific .NET challenges.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: ".NET Modernization & Migration",
              description: "Migrate from .NET Framework 4.x to .NET 8 without production downtime. Incremental strategies, containerization, and strangler fig patterns to reduce risk.",
              href: "/technologies/dotnet/modernization",
              label: "Learn about .NET modernization",
            },
            {
              title: ".NET Staff Augmentation",
              description: "Senior .NET engineers who integrate with your team, your repos, your processes, your standups. Scale capacity without compromising quality.",
              href: "/technologies/dotnet/staff-augmentation",
              label: "Learn about .NET staff augmentation",
            },
          ].map((service, i) => (
            <m.a
              key={i}
              href={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 sm:p-8 hover:border-accent/30 transition-all"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary mb-4">{service.description}</p>
              <span className="inline-flex items-center text-sm text-accent font-medium">
                {service.label}
                <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </m.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DotnetIndustries() {
  return (
    <section id="industries" className="relative py-16 sm:py-24 bg-base">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
            Industries We Build <span className="text-highlight">.NET Systems</span> For
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Domain expertise that accelerates delivery and reduces risk.
          </p>
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Financial Services",
              description: "Payment processing, trading platforms, regulatory reporting, and compliance-heavy systems built on .NET with enterprise-grade security.",
              href: "/industries/financial-services",
            },
            {
              title: "Healthcare",
              description: "HIPAA-compliant patient portals, claims processing, clinical workflows, and diagnostic systems on .NET and Azure.",
              href: "/industries/healthcare",
            },
            {
              title: "SaaS & Technology",
              description: "Multi-tenant platforms, subscription billing, and customer-facing applications that scale with your user base.",
              href: "/industries/saas",
            },
            {
              title: "Education",
              description: "Learning management systems, adaptive education platforms, and content delivery systems built for scale.",
              href: "/industries/education",
            },
          ].map((industry, i) => (
            <m.a
              key={i}
              href={industry.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-surface-elevated/80 backdrop-blur-xl border border-border rounded-xl p-6 hover:border-accent/30 transition-all"
            >
              <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                {industry.title}
              </h3>
              <p className="text-sm text-text-secondary">{industry.description}</p>
            </m.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DotnetSections({ slot }: { slot: "specialized" | "industries" }) {
  if (slot === "specialized") return <DotnetSpecializedServices />;
  if (slot === "industries") return <DotnetIndustries />;
  return null;
}
