"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { PageHero } from "@/components/ui";
import { CalInline } from "@/components/CalInline";
import type { ServicePageForListing } from "@/lib/content";

interface Props {
  service: ServicePageForListing;
}

// Customized booking section copy per service
const bookingSubtext: Record<string, string> = {
  "ai-sprints":
    "Discuss your AI concept and how we can deliver a working prototype in 2-4 weeks.",
  "cloud":
    "Talk to our architects about your AWS, GCP, or Azure infrastructure and cost optimization opportunities.",
  "design-systems":
    "Explore how we can build a component library and design token architecture your team will actually adopt.",
  "enterprise":
    "Schedule a consultation to discuss your compliance requirements, security standards, and procurement process.",
  "forward-deployed":
    "Tell us about your team and tech stack. We can have engineers embedded and shipping code within 5 days.",
  "product-build":
    "Walk us through your product vision. Most builds go from kickoff to production in 6-12 weeks.",
  "scale-ups":
    "Share your roadmap and capacity challenges. We match senior engineers to your growth priorities within days.",
  "staff-augmentation":
    "Describe your technical requirements and we'll present qualified senior engineers within 48 hours.",
  "startups":
    "Talk to engineers who understand runway pressure. We scope MVPs for 4-8 week delivery with investor-ready architecture.",
};

export default function ServicePageClient({ service }: Props) {
  const {
    hero,
    benefits,
    benefitsTitle,
    process,
    processTitle,
    idealFor,
    idealForTitle,
    cta,
  } = service;

  // Determine which additional items to show (services, productTypes, roles, sprintExamples)
  const additionalItems =
    service.services ||
    service.productTypes ||
    service.roles ||
    service.sprintExamples;
  const additionalItemsTitle = service.services
    ? "Services"
    : service.productTypes
      ? "What We Build"
      : service.roles
        ? "Roles We Staff"
        : service.sprintExamples
          ? "Sprint Examples"
          : null;

  // Determine accent color variant based on badge variant
  const isBlueVariant = hero.badgeVariant === "blue";
  const accentColorClasses = {
    stat: isBlueVariant ? "text-accent-secondary-light" : "text-accent-light",
    statBg: isBlueVariant
      ? "bg-accent-secondary/10 border-accent-secondary/20"
      : "bg-accent/10 border-accent/20",
    stepBg: isBlueVariant ? "bg-accent-secondary/10" : "bg-accent/10",
    stepText: isBlueVariant
      ? "text-accent-secondary-light"
      : "text-accent-light",
    durationBg: isBlueVariant
      ? "bg-accent-secondary/10 border-accent-secondary/20 text-accent-secondary-light"
      : "bg-accent/10 border-accent/20 text-accent-light",
    checkBg: isBlueVariant ? "bg-accent-secondary/20" : "bg-accent/20",
    checkText: isBlueVariant
      ? "text-accent-secondary-light"
      : "text-accent-light",
  };

  return (
    <LazyMotion features={domAnimation}>
    <main className="min-h-screen">
      <PageHero
        badge={hero.badge}
        badgeVariant={hero.badgeVariant}
        headline={hero.headline}
        headlineAccent={hero.headlineAccent}
        description={hero.description}
        primaryCTA={hero.primaryCTA ? { ...hero.primaryCTA, href: "#book-call" } : { text: "Talk to the Team", href: "#book-call" }}
        secondaryCTA={hero.secondaryCTA}
      />

      {/* Benefits */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
              {benefitsTitle}
            </h2>
          </m.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <m.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-surface-elevated border border-border hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`px-3 py-1.5 rounded-lg border ${accentColorClasses.statBg}`}
                  >
                    <span
                      className={`text-xl font-bold ${accentColorClasses.stat}`}
                    >
                      {benefit.stat}
                    </span>
                  </div>
                  <span className="text-xs text-text-muted uppercase tracking-wider mt-2">
                    {benefit.statLabel}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-base">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
              {processTitle}
            </h2>
          </m.div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, idx) => (
              <m.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div
                  className={`w-14 h-14 mx-auto rounded-full ${accentColorClasses.stepBg} border border-border flex items-center justify-center mb-4`}
                >
                  <span
                    className={`text-lg font-bold ${accentColorClasses.stepText}`}
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary mb-2">
                  {step.description}
                </p>
                <span
                  className={`inline-flex px-2 py-1 text-xs font-medium ${accentColorClasses.durationBg} rounded-full`}
                >
                  {step.duration}
                </span>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Items (Services, Product Types, Roles, Sprint Examples) */}
      {additionalItems && additionalItemsTitle && (
        <section className="py-16 sm:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                {additionalItemsTitle}
              </h2>
            </m.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {additionalItems.map((item, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-4 rounded-xl bg-surface-elevated border border-border text-center"
                >
                  <span className="text-sm text-text-primary">{item}</span>
                </m.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compliance (for Enterprise) */}
      {service.compliance && service.compliance.length > 0 && (
        <section className="py-16 sm:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                Compliance & Security
              </h2>
            </m.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {service.compliance.map((item, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-4 rounded-xl bg-surface-elevated border border-border text-center"
                >
                  <span className="text-sm text-text-primary">{item}</span>
                </m.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ideal For */}
      <section className="py-16 sm:py-24 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
              {idealForTitle}
            </h2>
          </m.div>

          <div className="space-y-4">
            {idealFor.map((item, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-surface-elevated border border-border"
              >
                <div
                  className={`w-6 h-6 rounded-full ${accentColorClasses.checkBg} flex items-center justify-center shrink-0 mt-0.5`}
                >
                  <svg
                    className={`w-4 h-4 ${accentColorClasses.checkText}`}
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
                <span className="text-text-primary">{item}</span>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="relative py-16 sm:py-24 bg-surface scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {bookingSubtext[service.slug] ||
                "Schedule a call with our team. We'll discuss your requirements and how we can help you achieve your goals."}
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-border bg-surface-elevated"
          >
            <CalInline className="h-[600px]" />
          </m.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              {cta.headline}{" "}
              {cta.headlineAccent && (
                <span className="text-highlight">{cta.headlineAccent}</span>
              )}
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              {cta.description}
            </p>
            <Link
              href={cta.buttonLink}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-cta/25"
            >
              {cta.buttonText}
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
          </m.div>
        </div>
      </section>
    </main>
    </LazyMotion>
  );
}
