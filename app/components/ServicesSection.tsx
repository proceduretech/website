"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme, Vertical } from "../context/ThemeContext";
import { services, Service } from "../data/verticalContent";

// Shared service card component - larger with prominent design element
function ServiceCard({
  service,
  index,
  accentColor,
  accentColorRgb,
  icon,
}: {
  service: Service;
  index: number;
  accentColor: string;
  accentColorRgb: string;
  icon?: React.ReactNode;
}) {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "mailto:hello@procedure.tech";
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group w-full cursor-pointer rounded-2xl border bg-white p-6 text-left transition-all hover:shadow-lg"
      style={{
        borderColor: `rgba(${accentColorRgb}, 0.15)`,
      }}
    >
      {/* Icon with decorative background */}
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
        style={{ backgroundColor: `rgba(${accentColorRgb}, 0.1)` }}
      >
        {icon}
      </div>

      {/* Content */}
      <h4
        className="mb-2 text-lg font-semibold"
        style={{ color: accentColor }}
      >
        {service.title}
      </h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        {service.description}
      </p>

      {/* Hover indicator */}
      <div
        className="mt-4 flex items-center gap-1.5 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100"
        style={{ color: accentColor }}
      >
        <span>Learn more</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </motion.button>
  );
}

// Grid-based service cards layout
function ServiceGrid({ accentColor, accentColorRgb, vertical }: { accentColor: string; accentColorRgb: string; vertical: Vertical }) {
  const serviceList = services[vertical];

  const iconSets: Record<Vertical, React.ReactNode[]> = {
    "ai-engineering": [
      <svg key="data" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
      <svg key="model" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
      <svg key="deploy" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>,
      <svg key="monitor" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    ],
    software: [
      <svg key="frontend" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>,
      <svg key="backend" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>,
      <svg key="infra" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><path d="M2 20h20M5 20V8l7-4 7 4v12"/><path d="M9 20v-4h6v4"/></svg>,
      <svg key="devops" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
    ],
    design: [
      <svg key="research" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
      <svg key="design" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
      <svg key="systems" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
      <svg key="prototype" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    ],
    "ai-security": [
      <svg key="assess" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
      <svg key="protect" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
      <svg key="monitor" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><path d="M2 12h5l2-7 4 14 3-7h6"/></svg>,
      <svg key="respond" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    ],
  };

  const icons = iconSets[vertical];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {serviceList.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            accentColor={accentColor}
            accentColorRgb={accentColorRgb}
            icon={icons[index]}
          />
        ))}
      </div>
    </div>
  );
}

// Diagram selector based on vertical - now uses unified grid layout
function VerticalDiagram({ vertical, accentColor, accentColorRgb }: { vertical: Vertical; accentColor: string; accentColorRgb: string }) {
  return <ServiceGrid vertical={vertical} accentColor={accentColor} accentColorRgb={accentColorRgb} />;
}

export function ServicesSection() {
  const { activeVertical, config } = useTheme();

  return (
    <section id="services" className="relative overflow-hidden py-24 px-6">
      {/* Geometric background - crosses pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="geo-crosses" />

        {/* Accent circle */}
        <motion.div
          className="absolute -left-20 bottom-1/3 h-[300px] w-[300px] rounded-full border"
          style={{ borderColor: `rgba(${config.accentColorRgb}, 0.1)` }}
          animate={{ borderColor: `rgba(${config.accentColorRgb}, 0.1)` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Subtle gradient overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: `linear-gradient(0deg, transparent 0%, rgba(${config.accentColorRgb}, 0.02) 50%, transparent 100%)`,
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.p
            className="mb-4 text-xs font-medium uppercase tracking-widest"
            animate={{ color: config.accentColor }}
            transition={{ duration: 0.3 }}
          >
            What We Do
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.h2
              key={`services-title-${activeVertical}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="mb-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl"
            >
              Our Services
            </motion.h2>
          </AnimatePresence>

          <p className="mx-auto max-w-2xl text-lg text-[var(--muted)]">
            From strategy to execution, we partner with you at every stage.
          </p>
        </div>

        {/* Animated diagram container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVertical}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <VerticalDiagram
              vertical={activeVertical}
              accentColor={config.accentColor}
              accentColorRgb={config.accentColorRgb}
            />
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="mailto:hello@procedure.tech"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white"
            style={{ backgroundColor: config.accentColor }}
            whileHover={{ scale: 1.02, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
          >
            Let&apos;s talk about your needs
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
