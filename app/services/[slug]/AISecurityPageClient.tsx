"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui";
import { CalInline } from "@/components/CalInline";
import { RelatedExpertise } from "@/components/expertise";

interface RelatedPage {
  slug: string;
  title: string;
  description: string;
  badge: string;
}

interface RiskItem {
  title: string;
  description: string;
  icon: string;
}

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  output: string;
  icon: string;
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface FitItem {
  text: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface AISecurityPageData {
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    description: string;
  };
  risks: RiskItem[];
  services: ServiceItem[];
  process: ProcessStep[];
  goodFit: FitItem[];
  notFit: FitItem[];
  faqs: FAQItem[];
  compliance: string[];
}

interface Props {
  data: AISecurityPageData;
  relatedPages: RelatedPage[];
}

// Icon components
const RiskIcons: Record<string, React.FC<{ className?: string }>> = {
  warning: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  lock: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
  ),
  eye: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  ban: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
  ),
  shield: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  currency: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const ServiceIcons: Record<string, React.FC<{ className?: string }>> = {
  monitor: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  building: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  map: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  database: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  checkCircle: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  users: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

export default function AISecurityPageClient({ data, relatedPages }: Props) {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <PageHero
        badge={data.hero.badge}
        headline={data.hero.headline}
        headlineAccent={data.hero.headlineAccent}
        description={data.hero.description}
        primaryCTA={{ text: "Book Security Assessment", href: "#book-call" }}
        secondaryCTA={{ text: "See How We Work", href: "#services" }}
      />

      {/* Risks Section */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-medium text-accent-light uppercase tracking-wider mb-4">
              The Risks
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
              What Can Go Wrong With Unsecured AI?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.risks.map((risk, idx) => {
              const IconComponent = RiskIcons[risk.icon] || RiskIcons.warning;
              return (
                <motion.div
                  key={risk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl bg-surface-elevated border border-border flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">{risk.title}</h3>
                    <p className="text-sm text-text-secondary">{risk.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-base scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-medium text-accent-light uppercase tracking-wider mb-4">
              What We Do
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
              AI Security Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service, idx) => {
              const IconComponent = ServiceIcons[service.icon] || ServiceIcons.monitor;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6 text-accent-light" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{service.title}</h3>
                  <p className="text-sm text-text-secondary mb-5">{service.description}</p>
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="w-2 h-2 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border text-sm">
                    <span className="text-accent-light font-medium">Output:</span>{" "}
                    <span className="text-text-secondary">{service.output}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-medium text-accent-light uppercase tracking-wider mb-4">
              How We Work
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
              From Assessment to Remediation
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-cta text-cta-text flex items-center justify-center font-bold text-lg mb-5">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit Section */}
      <section className="py-16 sm:py-24 bg-base">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-medium text-accent-light uppercase tracking-wider mb-4">
              Is This For You?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
              Who We Work With
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Good Fit */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-accent/5 border border-accent/20"
            >
              <h3 className="text-xl font-semibold text-accent-light mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Good Fit
              </h3>
              <ul className="space-y-4">
                {data.goodFit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-accent-light font-semibold mt-0.5">✓</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not a Fit */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20"
            >
              <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Not a Fit
              </h3>
              <ul className="space-y-4">
                {data.notFit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-red-400 font-semibold mt-0.5">✕</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-accent-light uppercase tracking-wider mb-4">
              Questions
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-0 divide-y divide-border">
            {data.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="py-6"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-3">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Expertise */}
      {relatedPages.length > 0 && (
        <RelatedExpertise title="Related Expertise" pages={relatedPages} />
      )}

      {/* Book a Call Section */}
      <section id="book-call" className="py-16 sm:py-24 bg-base scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Let&apos;s Find the Gaps{" "}
              <span className="text-highlight">Before Attackers Do</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Book a 30-minute call to scope your AI security assessment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-border bg-surface-elevated"
          >
            <CalInline className="h-[600px]" />
          </motion.div>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {data.compliance.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-text-muted text-sm">
                <svg className="w-6 h-6 opacity-60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
