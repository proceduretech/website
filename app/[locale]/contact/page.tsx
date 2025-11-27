"use client";

export const runtime = "edge";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const projectTypes = [
  "AI/ML Development",
  "Web Application",
  "Mobile Application",
  "Design & UX",
  "Security Audit",
  "Consulting",
  "Other",
];

const budgetRanges = [
  "Under $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000+",
  "Not sure yet",
];

const timelines = [
  "Less than 1 month",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "Ongoing engagement",
  "Flexible",
];

export default function ContactPage() {
  const { config } = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectTypes: [] as string[],
    budget: "",
    timeline: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (type: string) => {
    setFormState((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputClasses =
    "w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)]/60 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2";

  const labelClasses = "mb-2 block text-sm font-medium text-[var(--foreground)]";

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-32 pb-16">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="geo-dots opacity-30" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(${config.accentColorRgb}, 0.06), transparent)`,
            }}
            transition={{ duration: 0.7 }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-medium uppercase tracking-widest"
            style={{ color: config.accentColor }}
          >
            Contact Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl"
          >
            Let&apos;s discuss
            <br />
            <motion.span
              animate={{ color: config.accentColor }}
              transition={{ duration: 0.3 }}
            >
              your project
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-[var(--muted)] md:text-xl"
          >
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative px-6 pb-24">
        <div className="relative mx-auto max-w-2xl">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-12 text-center shadow-lg"
            >
              <div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: `rgba(${config.accentColorRgb}, 0.1)` }}
              >
                <svg
                  className="h-8 w-8"
                  style={{ color: config.accentColor }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                Thanks for reaching out!
              </h2>
              <p className="mb-8 text-[var(--muted)]">
                We&apos;ve received your message and will get back to you within 24 hours.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: config.accentColor }}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to home
              </a>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-lg md:p-10"
            >
              {/* Contact Info */}
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClasses}
                    style={
                      {
                        "--tw-ring-color": config.accentColor,
                      } as React.CSSProperties
                    }
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={inputClasses}
                    style={
                      {
                        "--tw-ring-color": config.accentColor,
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="company" className={labelClasses}>
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  placeholder="Acme Inc."
                  className={inputClasses}
                  style={
                    {
                      "--tw-ring-color": config.accentColor,
                    } as React.CSSProperties
                  }
                />
              </div>

              {/* Project Type - Checkboxes */}
              <div className="mb-8">
                <p className={labelClasses}>
                  Project Type <span className="text-red-500">*</span>
                  <span className="ml-2 text-xs font-normal text-[var(--muted)]">
                    (select all that apply)
                  </span>
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {projectTypes.map((type) => {
                    const isChecked = formState.projectTypes.includes(type);
                    return (
                      <label
                        key={type}
                        className={`group flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-all duration-200 ${
                          isChecked
                            ? "border-transparent shadow-md"
                            : "border-[var(--border)] hover:border-gray-300"
                        }`}
                        style={
                          isChecked
                            ? {
                                backgroundColor: `rgba(${config.accentColorRgb}, 0.08)`,
                                boxShadow: `0 0 0 2px ${config.accentColor}`,
                              }
                            : undefined
                        }
                      >
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all duration-200 ${
                            isChecked ? "border-transparent" : "border-gray-300"
                          }`}
                          style={
                            isChecked
                              ? { backgroundColor: config.accentColor }
                              : undefined
                          }
                        >
                          {isChecked && (
                            <svg
                              className="h-3 w-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(type)}
                        />
                        <span
                          className={`text-sm font-medium ${
                            isChecked ? "text-[var(--foreground)]" : "text-[var(--muted)]"
                          }`}
                        >
                          {type}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Budget Range - Radio Buttons */}
              <div className="mb-8">
                <p className={labelClasses}>
                  Budget Range <span className="text-red-500">*</span>
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {budgetRanges.map((range) => {
                    const isSelected = formState.budget === range;
                    return (
                      <label
                        key={range}
                        className={`group flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-all duration-200 ${
                          isSelected
                            ? "border-transparent shadow-md"
                            : "border-[var(--border)] hover:border-gray-300"
                        }`}
                        style={
                          isSelected
                            ? {
                                backgroundColor: `rgba(${config.accentColorRgb}, 0.08)`,
                                boxShadow: `0 0 0 2px ${config.accentColor}`,
                              }
                            : undefined
                        }
                      >
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                            isSelected ? "border-transparent" : "border-gray-300"
                          }`}
                          style={
                            isSelected
                              ? { backgroundColor: config.accentColor }
                              : undefined
                          }
                        >
                          {isSelected && (
                            <div className="h-2 w-2 rounded-full bg-white" />
                          )}
                        </div>
                        <input
                          type="radio"
                          name="budget"
                          value={range}
                          className="sr-only"
                          checked={isSelected}
                          onChange={handleChange}
                          required
                        />
                        <span
                          className={`text-sm font-medium ${
                            isSelected ? "text-[var(--foreground)]" : "text-[var(--muted)]"
                          }`}
                        >
                          {range}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Timeline - Radio Buttons */}
              <div className="mb-8">
                <p className={labelClasses}>
                  Timeline <span className="text-red-500">*</span>
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {timelines.map((timeline) => {
                    const isSelected = formState.timeline === timeline;
                    return (
                      <label
                        key={timeline}
                        className={`group flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-all duration-200 ${
                          isSelected
                            ? "border-transparent shadow-md"
                            : "border-[var(--border)] hover:border-gray-300"
                        }`}
                        style={
                          isSelected
                            ? {
                                backgroundColor: `rgba(${config.accentColorRgb}, 0.08)`,
                                boxShadow: `0 0 0 2px ${config.accentColor}`,
                              }
                            : undefined
                        }
                      >
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                            isSelected ? "border-transparent" : "border-gray-300"
                          }`}
                          style={
                            isSelected
                              ? { backgroundColor: config.accentColor }
                              : undefined
                          }
                        >
                          {isSelected && (
                            <div className="h-2 w-2 rounded-full bg-white" />
                          )}
                        </div>
                        <input
                          type="radio"
                          name="timeline"
                          value={timeline}
                          className="sr-only"
                          checked={isSelected}
                          onChange={handleChange}
                          required
                        />
                        <span
                          className={`text-sm font-medium ${
                            isSelected ? "text-[var(--foreground)]" : "text-[var(--muted)]"
                          }`}
                        >
                          {timeline}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <label htmlFor="description" className={labelClasses}>
                  Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  value={formState.description}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  className={`${inputClasses} resize-none`}
                  style={
                    {
                      "--tw-ring-color": config.accentColor,
                    } as React.CSSProperties
                  }
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || formState.projectTypes.length === 0}
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                style={{
                  backgroundColor: config.accentColor,
                  boxShadow: `0 4px 14px rgba(${config.accentColorRgb}, 0.25), 0 2px 6px rgba(0, 0, 0, 0.08)`,
                }}
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </>
                )}
              </motion.button>
            </motion.form>
          )}

          {/* Alternative Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="mb-4 text-[var(--muted)]">
              Prefer to talk? Book a call directly.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: config.accentColor }}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Schedule a call
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
