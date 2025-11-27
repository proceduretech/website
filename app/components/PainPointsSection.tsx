"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTheme } from "../context/ThemeContext";

import { CSSProperties } from "react";

interface IconProps {
  className?: string;
  style?: CSSProperties;
}

// Icons for the "what if" section
function CheckSquareIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function BarChartIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20V10M18 20V4M6 20v-4" />
    </svg>
  );
}

function UsersIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// Icons for the "we come in" section
function TargetIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function TrendingUpIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
      <polyline points="17,6 23,6 23,12" />
    </svg>
  );
}

function ShieldCheckIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function PainPointsSection() {
  const { activeVertical, config } = useTheme();
  const t = useTranslations("painPoints");

  const whatIfIcons = [CheckSquareIcon, BarChartIcon, UsersIcon];
  const weComeInIcons = [TargetIcon, TrendingUpIcon, ShieldCheckIcon];

  return (
    <section id="pain-points" className="relative overflow-hidden">
      {/* Part 1: The Challenge */}
      <div className="relative py-24 px-6 lg:py-32">
        {/* Background pattern */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="geo-dots opacity-30" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`problem-${activeVertical}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.p
                  className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]"
                  animate={{ color: config.accentColor }}
                  transition={{ duration: 0.3 }}
                >
                  {t("problem.label")}
                </motion.p>
                <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
                  {t("problem.title")}{" "}
                  <span style={{ color: config.accentColor }}>{t("problem.titleHighlight")}</span>
                </h2>
                <p className="text-lg leading-relaxed text-[var(--muted)] md:text-xl">
                  {t(`problem.${activeVertical}`)}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Illustration - abstract system diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="relative aspect-square rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
                <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
                  {/* Background grid lines */}
                  <g stroke="var(--border)" strokeWidth="1" opacity="0.5">
                    <line x1="50" y1="100" x2="350" y2="100" />
                    <line x1="50" y1="200" x2="350" y2="200" />
                    <line x1="50" y1="300" x2="350" y2="300" />
                    <line x1="100" y1="50" x2="100" y2="350" />
                    <line x1="200" y1="50" x2="200" y2="350" />
                    <line x1="300" y1="50" x2="300" y2="350" />
                  </g>

                  {/* Connection lines */}
                  <g stroke="var(--muted)" strokeWidth="2" opacity="0.3">
                    <path d="M120 140 L200 140 L200 180" />
                    <path d="M200 220 L200 260 L280 260" />
                    <path d="M120 260 L160 260 L160 300" />
                    <path d="M240 140 L280 140 L280 180" />
                    <path d="M320 220 L320 300 L280 300" />
                  </g>

                  {/* Main component boxes */}
                  <g>
                    {/* Box 1 - with X */}
                    <rect x="80" y="110" width="80" height="100" rx="8" fill="white" stroke="var(--border)" strokeWidth="2" />
                    <line x1="105" y1="135" x2="135" y2="165" stroke={config.accentColor} strokeWidth="3" />
                    <line x1="135" y1="135" x2="105" y2="165" stroke={config.accentColor} strokeWidth="3" />
                    <rect x="95" y="180" width="50" height="6" rx="2" fill="var(--border)" />
                    <rect x="95" y="192" width="35" height="6" rx="2" fill="var(--border)" />

                    {/* Box 2 - highlighted */}
                    <rect x="170" y="140" width="100" height="120" rx="8" fill={config.accentColor} stroke={config.accentColor} strokeWidth="2" />
                    <line x1="195" y1="165" x2="245" y2="215" stroke="white" strokeWidth="3" />
                    <line x1="245" y1="165" x2="195" y2="215" stroke="white" strokeWidth="3" />
                    <g fill="white" opacity="0.6">
                      <rect x="190" y="225" width="60" height="6" rx="2" />
                      <rect x="190" y="237" width="40" height="6" rx="2" />
                    </g>

                    {/* Box 3 */}
                    <rect x="240" y="110" width="80" height="80" rx="8" fill="white" stroke="var(--border)" strokeWidth="2" />
                    <g fill="var(--border)">
                      <rect x="255" y="125" width="25" height="25" rx="4" />
                      <rect x="285" y="125" width="25" height="25" rx="4" />
                      <rect x="255" y="155" width="25" height="25" rx="4" />
                      <rect x="285" y="155" width="25" height="25" rx="4" />
                    </g>

                    {/* Box 4 */}
                    <rect x="290" y="200" width="70" height="80" rx="8" fill="white" stroke="var(--border)" strokeWidth="2" />
                    <rect x="305" y="215" width="40" height="6" rx="2" fill="var(--border)" />
                    <rect x="305" y="227" width="30" height="6" rx="2" fill="var(--border)" />
                    <rect x="305" y="239" width="35" height="6" rx="2" fill="var(--border)" />

                    {/* Box 5 */}
                    <rect x="80" y="230" width="70" height="80" rx="8" fill="white" stroke="var(--border)" strokeWidth="2" />
                    <polygon points="115,250 130,275 100,275" fill={config.accentColor} />
                    <rect x="95" y="285" width="40" height="6" rx="2" fill="var(--border)" />

                    {/* Box 6 */}
                    <rect x="160" y="280" width="90" height="50" rx="8" fill="white" stroke="var(--border)" strokeWidth="2" />
                    <circle cx="185" cy="305" r="8" fill={config.accentColor} />
                    <circle cx="205" cy="305" r="4" fill="var(--border)" />
                    <circle cx="220" cy="305" r="4" fill="var(--border)" />
                    <circle cx="235" cy="305" r="4" fill="var(--border)" />
                  </g>

                  {/* Toggle switch at top */}
                  <g>
                    <rect x="160" y="60" width="80" height="30" rx="15" fill="white" stroke="var(--border)" strokeWidth="2" />
                    <circle cx="220" cy="75" r="10" fill={config.accentColor} />
                    <line x1="175" y1="75" x2="185" y2="75" stroke="var(--muted)" strokeWidth="2" />
                    <path d="M232 70 L238 75 L232 80" stroke="white" strokeWidth="2" fill="none" />
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Part 2: A Better Way */}
      <div className="relative py-24 px-6 lg:py-32 bg-[var(--background-alt)]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="geo-grid opacity-20" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-md lg:max-w-none order-2 lg:order-1"
            >
              <div className="relative aspect-square rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
                <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
                  {/* Person at laptop */}
                  <g transform="translate(100, 80)">
                    {/* Desk/laptop */}
                    <rect x="20" y="180" width="160" height="10" rx="2" fill="var(--border)" />
                    <rect x="40" y="140" width="120" height="80" rx="4" fill="white" stroke="var(--border)" strokeWidth="2" />
                    <rect x="50" y="150" width="100" height="60" rx="2" fill="var(--background-alt)" />
                    {/* Code lines on screen */}
                    <rect x="58" y="160" width="40" height="4" rx="1" fill={config.accentColor} opacity="0.6" />
                    <rect x="58" y="170" width="60" height="4" rx="1" fill="var(--border)" />
                    <rect x="58" y="180" width="35" height="4" rx="1" fill="var(--border)" />
                    <rect x="58" y="190" width="50" height="4" rx="1" fill="var(--border)" />

                    {/* Person */}
                    <circle cx="100" cy="80" r="35" fill="white" stroke={config.accentColor} strokeWidth="2" />
                    <circle cx="90" cy="75" r="4" fill={config.accentColor} />
                    <circle cx="110" cy="75" r="4" fill={config.accentColor} />
                    <path d="M90 95 Q100 90 110 95" stroke={config.accentColor} strokeWidth="2" fill="none" />

                    {/* Body/shoulders */}
                    <path d="M60 130 Q100 110 140 130" stroke={config.accentColor} strokeWidth="3" fill="none" />
                    <rect x="65" y="125" width="70" height="60" rx="8" fill="white" stroke={config.accentColor} strokeWidth="2" />

                    {/* Arms on keyboard */}
                    <path d="M70 160 L50 175" stroke={config.accentColor} strokeWidth="3" />
                    <path d="M130 160 L150 175" stroke={config.accentColor} strokeWidth="3" />
                  </g>

                  {/* Floating success icons */}
                  <g>
                    <g transform="translate(60, 130)">
                      <rect width="35" height="30" rx="6" fill="white" stroke="var(--border)" strokeWidth="2" />
                      <path d="M10 15 L15 20 L25 10" stroke={config.accentColor} strokeWidth="2.5" fill="none" />
                    </g>
                    <g transform="translate(40, 190)">
                      <rect width="30" height="25" rx="5" fill="white" stroke="var(--border)" strokeWidth="2" />
                      <path d="M8 12 L12 16 L22 8" stroke={config.accentColor} strokeWidth="2" fill="none" />
                    </g>
                    <g transform="translate(310, 100)">
                      <rect width="60" height="50" rx="8" fill="white" stroke="var(--border)" strokeWidth="2" />
                      <rect x="10" y="12" width="40" height="5" rx="2" fill="var(--border)" />
                      <rect x="10" y="22" width="30" height="5" rx="2" fill="var(--border)" />
                      <rect x="10" y="32" width="35" height="5" rx="2" fill={config.accentColor} opacity="0.5" />
                    </g>
                    <g transform="translate(320, 170)">
                      <rect width="45" height="65" rx="8" fill="white" stroke="var(--border)" strokeWidth="2" />
                      <rect x="8" y="10" width="30" height="4" rx="1" fill="var(--border)" />
                      <rect x="8" y="18" width="22" height="4" rx="1" fill="var(--border)" />
                      <circle cx="22.5" cy="50" r="8" fill={config.accentColor} opacity="0.3" />
                      <path d="M18 50 L21 53 L27 47" stroke={config.accentColor} strokeWidth="2" fill="none" />
                    </g>
                  </g>

                  {/* Coffee cup */}
                  <g transform="translate(280, 290)">
                    <rect x="5" y="5" width="30" height="35" rx="4" fill="white" stroke="var(--border)" strokeWidth="2" />
                    <path d="M35 12 Q50 12 50 25 Q50 35 35 35" stroke="var(--border)" strokeWidth="2" fill="none" />
                  </g>
                </svg>
              </div>
            </motion.div>

            {/* Text content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`solution-${activeVertical}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="order-1 lg:order-2"
              >
                <motion.p
                  className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]"
                  animate={{ color: config.accentColor }}
                  transition={{ duration: 0.3 }}
                >
                  {t("solution.label")}
                </motion.p>
                <h2 className="mb-10 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
                  {t("solution.title")}{" "}
                  <span style={{ color: config.accentColor }}>{t("solution.titleHighlight")}</span>
                  {t("solution.titleEnd")}
                </h2>

                <div className="space-y-5">
                  {[0, 1, 2].map((index) => {
                    const Icon = whatIfIcons[index];
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm"
                      >
                        <div
                          className="mt-0.5 flex-shrink-0 rounded-lg p-2"
                          style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.1)` }}
                        >
                          <Icon className="h-5 w-5" style={{ color: config.accentColor }} />
                        </div>
                        <p className="text-base leading-relaxed text-[var(--muted)]">
                          {t(`solution.${activeVertical}.${index}`)}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Part 3: Our Expertise */}
      <div className="relative py-24 px-6 lg:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="geo-crosses opacity-20" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`value-${activeVertical}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.p
                  className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]"
                  animate={{ color: config.accentColor }}
                  transition={{ duration: 0.3 }}
                >
                  {t("value.label")}
                </motion.p>
                <h2 className="mb-10 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
                  {t("value.title")}{" "}
                  <span style={{ color: config.accentColor }}>{t("value.titleHighlight")}</span>
                  {t("value.titleEnd")}
                </h2>

                <div className="space-y-5">
                  {[0, 1, 2].map((index) => {
                    const Icon = weComeInIcons[index];
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm"
                      >
                        <div
                          className="mt-0.5 flex-shrink-0 rounded-lg p-2"
                          style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.1)` }}
                        >
                          <Icon className="h-5 w-5" style={{ color: config.accentColor }} />
                        </div>
                        <p className="text-base leading-relaxed text-[var(--muted)]">
                          {t(`value.${activeVertical}.${index}`)}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Illustration - team collaboration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="relative aspect-square rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
                <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
                  {/* Connection waves */}
                  <g opacity="0.2">
                    <circle cx="200" cy="200" r="180" stroke="var(--border)" strokeWidth="1" strokeDasharray="8 4" />
                    <circle cx="200" cy="200" r="140" stroke="var(--border)" strokeWidth="1" strokeDasharray="8 4" />
                    <circle cx="200" cy="200" r="100" stroke="var(--border)" strokeWidth="1" strokeDasharray="8 4" />
                  </g>

                  {/* Platform base */}
                  <g transform="translate(100, 280)">
                    <path d="M0 40 L100 80 L200 40 L100 0 Z" fill="white" stroke={config.accentColor} strokeWidth="2" />
                    <path d="M0 40 L0 60 L100 100 L100 80 Z" fill="var(--background-alt)" stroke={config.accentColor} strokeWidth="1" />
                    <path d="M200 40 L200 60 L100 100 L100 80 Z" fill="var(--background-alt)" stroke={config.accentColor} strokeWidth="1" />
                    <line x1="50" y1="20" x2="50" y2="60" stroke={config.accentColor} strokeWidth="1" opacity="0.3" />
                    <line x1="100" y1="40" x2="100" y2="80" stroke={config.accentColor} strokeWidth="1" opacity="0.3" />
                    <line x1="150" y1="20" x2="150" y2="60" stroke={config.accentColor} strokeWidth="1" opacity="0.3" />
                  </g>

                  {/* Central figure - main presenter */}
                  <g transform="translate(170, 160)">
                    <circle cx="30" cy="30" r="25" fill="white" stroke={config.accentColor} strokeWidth="2" />
                    <circle cx="23" cy="26" r="3" fill={config.accentColor} />
                    <circle cx="37" cy="26" r="3" fill={config.accentColor} />
                    <path d="M23 38 Q30 44 37 38" stroke={config.accentColor} strokeWidth="2" fill="none" />

                    <rect x="5" y="55" width="50" height="65" rx="8" fill={config.accentColor} />

                    <path d="M55 60 Q70 40 75 20" stroke={config.accentColor} strokeWidth="3" strokeLinecap="round" />
                    <circle cx="75" cy="15" r="8" fill={config.accentColor} />
                  </g>

                  {/* Left figure */}
                  <g transform="translate(60, 200)">
                    <circle cx="25" cy="25" r="20" fill="white" stroke={config.accentColor} strokeWidth="2" />
                    <circle cx="20" cy="22" r="2.5" fill={config.accentColor} />
                    <circle cx="30" cy="22" r="2.5" fill={config.accentColor} />
                    <path d="M20 32 Q25 36 30 32" stroke={config.accentColor} strokeWidth="1.5" fill="none" />

                    <rect x="5" y="48" width="40" height="50" rx="6" fill="white" stroke={config.accentColor} strokeWidth="2" />

                    <g transform="translate(-15, 10)">
                      <path d="M0 15 Q-8 15 -8 25" stroke={config.accentColor} strokeWidth="1.5" fill="none" opacity="0.4" />
                      <path d="M0 15 Q-15 15 -15 30" stroke={config.accentColor} strokeWidth="1.5" fill="none" opacity="0.3" />
                    </g>
                  </g>

                  {/* Right figure */}
                  <g transform="translate(280, 200)">
                    <circle cx="25" cy="25" r="20" fill="white" stroke={config.accentColor} strokeWidth="2" />
                    <circle cx="20" cy="22" r="2.5" fill={config.accentColor} />
                    <circle cx="30" cy="22" r="2.5" fill={config.accentColor} />
                    <path d="M20 32 Q25 36 30 32" stroke={config.accentColor} strokeWidth="1.5" fill="none" />

                    <rect x="5" y="48" width="40" height="50" rx="6" fill="white" stroke={config.accentColor} strokeWidth="2" />

                    <g transform="translate(50, 10)">
                      <path d="M0 15 Q8 15 8 25" stroke={config.accentColor} strokeWidth="1.5" fill="none" opacity="0.4" />
                      <path d="M0 15 Q15 15 15 30" stroke={config.accentColor} strokeWidth="1.5" fill="none" opacity="0.3" />
                    </g>
                  </g>

                  {/* Floating data points */}
                  <g opacity="0.5">
                    <circle cx="120" cy="100" r="4" fill={config.accentColor} />
                    <circle cx="280" cy="120" r="3" fill={config.accentColor} />
                    <circle cx="320" cy="160" r="5" fill={config.accentColor} />
                    <circle cx="80" cy="160" r="4" fill={config.accentColor} />
                    <circle cx="200" cy="80" r="6" fill={config.accentColor} />
                  </g>

                  {/* Connection lines between figures */}
                  <g stroke={config.accentColor} strokeWidth="1" strokeDasharray="4 4" opacity="0.3">
                    <line x1="110" y1="230" x2="170" y2="200" />
                    <line x1="290" y1="230" x2="230" y2="200" />
                    <line x1="200" y1="110" x2="200" y2="160" />
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
