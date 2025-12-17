"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Input, Textarea, Select } from "@/components/ui";
import { CalButton } from "@/components/CalButton";

const budgetOptions = [
  { value: "under-50k", label: "Under $50K - Ideal for AI sprints" },
  { value: "50k-150k", label: "$50K - $150K - Team augmentation" },
  { value: "150k-500k", label: "$150K - $500K - Dedicated team" },
  { value: "500k-plus", label: "$500K+ - Enterprise engagement" },
  { value: "not-sure", label: "Not sure yet - Let's discuss" },
];

const timelineOptions = [
  { value: "immediate", label: "Immediate - Within days" },
  { value: "1-2-months", label: "1-2 months - Planning complete" },
  { value: "3-6-months", label: "3-6 months - Exploratory" },
  { value: "ongoing", label: "Ongoing / Retainer" },
  { value: "flexible", label: "Flexible timeline" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient mesh background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-surface via-base to-base" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-[500px] h-[500px] bg-accent-secondary/8 rounded-full blur-[100px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23E5E7EB'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left Column - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-accent-light">
                  Typically respond within 24 hours
                </span>
              </motion.div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6">
                Start Building with
                <br />
                <span className="text-highlight">Elite AI Engineers</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-lg">
                Whether you need forward-deployed engineers, a rapid AI sprint,
                or a full product build—tell us what you&apos;re working on and
                we&apos;ll match you with senior AI talent within 2-5 days.
              </p>

              {/* Alternative Contact Methods */}
              <div className="space-y-6 mb-10">
                <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                  Prefer a Different Path?
                </h2>

                {/* Email */}
                <motion.a
                  href="mailto:hello@procedure.tech"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-accent-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Email us directly</p>
                    <p className="text-text-primary font-medium group-hover:text-accent-light transition-colors">
                      hello@procedure.tech
                    </p>
                  </div>
                </motion.a>

                {/* Schedule a Call */}
                <CalButton className="flex items-center gap-4 group text-left cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-accent-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">
                      Ready to talk now?
                    </p>
                    <p className="text-text-primary font-medium group-hover:text-accent-light transition-colors">
                      Book a 30-minute strategy session
                    </p>
                  </div>
                </CalButton>
              </div>

              {/* Trust Signals */}
              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Confidential
                      </p>
                      <p className="text-xs text-text-muted">
                        Your data is encrypted and secure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Fast Response
                      </p>
                      <p className="text-xs text-text-muted">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Expert Team
                      </p>
                      <p className="text-xs text-text-muted">
                        Speak directly with engineers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Global
                      </p>
                      <p className="text-xs text-text-muted">
                        Teams across time zones
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Form Card */}
              <div className="relative">
                {/* Card glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent-secondary/20 rounded-3xl blur-xl opacity-50" />

                <div className="relative bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-8 sm:p-10 shadow-2xl shadow-black/20">
                  {isSubmitted ? (
                    /* Success State */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-accent-light"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary mb-3">
                        Message sent successfully
                      </h3>
                      <p className="text-text-secondary mb-8 max-w-sm mx-auto">
                        Thank you for reaching out. We&apos;ll review your
                        message and get back to you within 24 hours.
                      </p>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-accent-light font-medium hover:text-accent transition-colors"
                      >
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
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                          />
                        </svg>
                        Back to home
                      </Link>
                    </motion.div>
                  ) : (
                    /* Form */
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Form Header */}
                      <div className="mb-8">
                        <h2 className="text-xl font-semibold text-text-primary mb-2">
                          Tell Us About Your Project
                        </h2>
                        <p className="text-sm text-text-secondary">
                          Share a few details and we&apos;ll schedule a strategy
                          call with an AI engineering lead who understands your
                          domain.
                        </p>
                      </div>

                      {/* Name & Email Row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          label="Full Name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                        />
                        <Input
                          label="Work Email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                        />
                      </div>

                      {/* Company */}
                      <Input
                        label="Company"
                        name="company"
                        type="text"
                        required
                        autoComplete="organization"
                      />

                      {/* Budget & Timeline Row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Select
                          label="Budget Range"
                          name="budget"
                          options={budgetOptions}
                          placeholder="Select budget"
                        />
                        <Select
                          label="Timeline"
                          name="timeline"
                          options={timelineOptions}
                          placeholder="Select timeline"
                        />
                      </div>

                      {/* Message */}
                      <Textarea
                        label="Project Details"
                        name="message"
                        required
                        rows={5}
                        hint="Tell us about your AI initiative—what you're building, the problem you're solving, and where you need help."
                      />

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                        className={`
                          w-full relative overflow-hidden
                          px-8 py-4 rounded-xl
                          text-base font-semibold
                          transition-all duration-300
                          ${
                            isSubmitting
                              ? "bg-surface-elevated text-text-muted cursor-not-allowed"
                              : "bg-cta text-cta-text shadow-lg shadow-cta/25 hover:shadow-xl hover:shadow-cta/30 hover:brightness-110"
                          }
                        `}
                      >
                        <span
                          className={`flex items-center justify-center gap-2 ${isSubmitting ? "opacity-0" : ""}`}
                        >
                          Request Strategy Call
                          <svg
                            className="w-5 h-5"
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
                        </span>

                        {/* Loading Spinner */}
                        {isSubmitting && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                              className="w-5 h-5 animate-spin text-text-primary"
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
                          </div>
                        )}
                      </motion.button>

                      {/* Privacy Note */}
                      <p className="text-xs text-text-muted text-center">
                        By submitting this form, you agree to our{" "}
                        <Link
                          href="/privacy"
                          className="text-accent-light hover:underline"
                        >
                          Privacy Policy
                        </Link>
                        . We&apos;ll never share your information.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Bottom Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex items-center justify-center gap-6"
              >
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
                  SOC 2 Type II
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
                  GDPR Compliant
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
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  256-bit SSL
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Global Presence Section */}
      <section className="relative z-10 py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Global presence, local expertise
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our distributed teams work across time zones to deliver continuous
              progress on your projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                city: "San Francisco",
                country: "United States",
                timezone: "PST (UTC-8)",
                flag: "us",
              },
              {
                city: "London",
                country: "United Kingdom",
                timezone: "GMT (UTC+0)",
                flag: "gb",
              },
              {
                city: "Singapore",
                country: "Singapore",
                timezone: "SGT (UTC+8)",
                flag: "sg",
              },
              {
                city: "Sydney",
                country: "Australia",
                timezone: "AEDT (UTC+11)",
                flag: "au",
              },
            ].map((location, idx) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="group p-6 bg-surface-elevated rounded-2xl border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-lg">
                    {location.flag === "us" && (
                      <span role="img" aria-label="United States">
                        US
                      </span>
                    )}
                    {location.flag === "gb" && (
                      <span role="img" aria-label="United Kingdom">
                        UK
                      </span>
                    )}
                    {location.flag === "sg" && (
                      <span role="img" aria-label="Singapore">
                        SG
                      </span>
                    )}
                    {location.flag === "au" && (
                      <span role="img" aria-label="Australia">
                        AU
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      {location.city}
                    </p>
                    <p className="text-xs text-text-muted">
                      {location.country}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary">
                  {location.timezone}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Frequently asked questions
            </h2>
            <p className="text-text-secondary">
              Quick answers to common questions about working with us.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What happens on the strategy call?",
                a: "The strategy call is a focused 30-minute conversation with a senior AI engineer—not a sales rep. We'll discuss your technical requirements, existing infrastructure, and goals. You'll leave with a clear understanding of potential approaches, realistic timelines, and whether Procedure is the right fit for your project.",
              },
              {
                q: "How do you determine pricing?",
                a: "Pricing depends on engagement model, team composition, and project scope. AI Sprints typically range from $15K-$50K for 3-5 day engagements. Forward-deployed teams and full product builds are scoped based on duration and complexity. We provide transparent proposals with no hidden fees.",
              },
              {
                q: "Can you work under NDA before the first call?",
                a: "Absolutely. We understand enterprise confidentiality requirements. Request an NDA in your message and we'll have one in your inbox within 24 hours. Many of our clients in financial services, healthcare, and defense require NDAs before any technical discussions.",
              },
              {
                q: "What if we're not sure what we need?",
                a: "That's precisely what the strategy call is for. Many clients come to us with a business problem rather than a technical specification. Our engineers help translate business objectives into concrete AI implementation plans. If you're exploring whether AI is right for a particular use case, we can advise on feasibility before any commitment.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="p-6 bg-surface-elevated rounded-2xl border border-border"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {faq.q}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
