"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme, Vertical } from "../context/ThemeContext";
import { services, Service } from "../data/verticalContent";

// Simplified service card component with color variety
function ServiceCard({
  service,
  index,
  cardColor,
  cardColorRgb,
  icon,
}: {
  service: Service;
  index: number;
  cardColor: string;
  cardColorRgb: string;
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
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group w-full cursor-pointer rounded-xl border border-[var(--border)] bg-white p-6 text-left shadow-sm transition-all hover:shadow-lg"
    >
      {/* Icon */}
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-105"
        style={{ backgroundColor: `rgba(${cardColorRgb}, 0.1)` }}
      >
        {icon}
      </div>

      {/* Content */}
      <h4
        className="mb-2 text-lg font-semibold"
        style={{ color: cardColor }}
      >
        {service.title}
      </h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        {service.description}
      </p>

      {/* Hover indicator */}
      <div
        className="mt-4 flex items-center gap-1.5 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100"
        style={{ color: cardColor }}
      >
        <span>Learn more</span>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </motion.button>
  );
}

// Color palette for each card position
interface ColorSet {
  color: string;
  colorRgb: string;
}

// Grid-based service cards layout with color variety
function ServiceGrid({ vertical }: { vertical: Vertical }) {
  const { config } = useTheme();
  const serviceList = services[vertical];

  // Create color rotation: primary, secondary, tertiary, primary
  const colorSets: ColorSet[] = [
    { color: config.accentColor, colorRgb: config.accentColorRgb },
    { color: config.secondaryColor, colorRgb: config.secondaryColorRgb },
    { color: config.tertiaryColor, colorRgb: config.tertiaryColorRgb },
    { color: config.accentColor, colorRgb: config.accentColorRgb },
  ];

  // Generate icons dynamically based on card color
  const getIcon = (index: number, color: string) => {
    const iconsByVertical: Record<Vertical, ((c: string) => React.ReactNode)[]> = {
      "ai-engineering": [
        (c) => <svg key="data" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
        (c) => <svg key="model" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
        (c) => <svg key="deploy" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>,
        (c) => <svg key="monitor" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
      ],
      software: [
        (c) => <svg key="frontend" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>,
        (c) => <svg key="backend" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>,
        (c) => <svg key="infra" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M2 20h20M5 20V8l7-4 7 4v12"/><path d="M9 20v-4h6v4"/></svg>,
        (c) => <svg key="devops" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
      ],
      design: [
        (c) => <svg key="research" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
        (c) => <svg key="design" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
        (c) => <svg key="systems" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
        (c) => <svg key="prototype" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
      ],
      "ai-security": [
        (c) => <svg key="assess" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
        (c) => <svg key="protect" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
        (c) => <svg key="monitor" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M2 12h5l2-7 4 14 3-7h6"/></svg>,
        (c) => <svg key="respond" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
      ],
    };
    return iconsByVertical[vertical][index](color);
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
        {serviceList.map((service, index) => {
          const colorSet = colorSets[index % colorSets.length];
          return (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              cardColor={colorSet.color}
              cardColorRgb={colorSet.colorRgb}
              icon={getIcon(index, colorSet.color)}
            />
          );
        })}
      </div>
    </div>
  );
}

// Diagram selector based on vertical - now uses unified grid layout
function VerticalDiagram({ vertical }: { vertical: Vertical }) {
  return <ServiceGrid vertical={vertical} />;
}

export function ServicesSection() {
  const { activeVertical, config } = useTheme();

  return (
    <section id="services" className="relative overflow-hidden py-24 px-6">
      {/* Geometric background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="geo-crosses" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-20 text-center">
          <motion.p
            className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]"
            animate={{ color: config.accentColor }}
            transition={{ duration: 0.3 }}
          >
            What We Do
          </motion.p>

          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
            Our Services
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-[var(--muted)] md:text-xl">
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
            <VerticalDiagram vertical={activeVertical} />
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.a
            href="mailto:hello@procedure.tech"
            className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white transition-all duration-300"
            style={{
              backgroundColor: config.accentColor,
              boxShadow: `0 4px 14px rgba(${config.accentColorRgb}, 0.25), 0 2px 6px rgba(0, 0, 0, 0.08)`,
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Let&apos;s talk about your needs
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
