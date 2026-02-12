"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Past events data
const pastEvents = [
  {
    edition: 3,
    date: "December 6, 2025",
    title: "Mumbai Meets AI",
    subtitle: "Going Technical",
    location: "Procedure Technologies, Bhandup (W)",
    attendees: 85,
    format: "Technical",
    highlights: ["Live Demos", "Lightning Talks", "Pizza Networking"],
    description:
      "Live demos, lightning talks, and pizza-fueled networking brought together 85 engineers, founders, and AI practitioners for our most hands-on session yet.",
    lumaUrl: "https://luma.com/5ki28vc8",
  },
  {
    edition: 2,
    date: "September 20, 2025",
    title: "Mumbai Meets AI",
    subtitle: "Community Growth",
    location: "Procedure Technologies, Bhandup (W)",
    attendees: 97,
    format: "Beginner-friendly",
    highlights: ["Hands-on Tools", "Case Studies", "Networking"],
    description:
      "Our largest event to date. 97 attendees packed Procedure's office for deep-dive discussions on practical AI implementation and real-world use cases.",
    lumaUrl: "https://luma.com/te6uhoub",
  },
  {
    edition: 1,
    date: "May 24, 2025",
    title: "Mumbai Meets AI",
    subtitle: "The Beginning",
    location: "The Playce, Mulund West",
    attendees: 71,
    format: "Beginner-friendly",
    highlights: ["AI 101", "Real-world Applications", "Networking"],
    description:
      "Where it all began. 71 attendees gathered at The Playce for AI fundamentals, tool demonstrations, and the start of Mumbai's newest AI community.",
    lumaUrl: "https://luma.com/fus31inh",
  },
];

// Stats data
const stats = [
  { value: "253+", label: "Total Attendees" },
  { value: "3", label: "Events Hosted" },
  { value: "84", label: "Average Attendance" },
  { value: "36%", label: "Growth Per Event" },
];

// Get involved options
const involvementOptions = [
  {
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
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
    title: "Share Your Story",
    description:
      "Have a project you're proud of? Lessons learned the hard way? A tool that changed how you work? We'd love to hear it. Our stage is open to first-time speakers and seasoned presenters alike.",
    cta: "Pitch a talk",
    ctaIcon: (
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
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    ),
  },
  {
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
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: "Support the Community",
    description:
      "Help us keep events free and accessible. Whether it's food, swag, or venue support—your sponsorship directly fuels the community we're building together.",
    cta: "Become a sponsor",
    ctaIcon: (
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
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    ),
  },
  {
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
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    title: "Open Your Doors",
    description:
      "Have a space that can fit curious minds? We're always looking for venue partners—in Mumbai and beyond. Let's bring the community to your neighborhood.",
    cta: "Offer your space",
    ctaIcon: (
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
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    ),
  },
];

export default function EventsPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative pt-32 pb-24 sm:pb-32 bg-base">
        {/* Background gradient orb */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
{/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
            >
              Building Community,
              <br />
              <span className="text-highlight">One Meetup at a Time</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              At Procedure, we believe the best ideas emerge when curious people
              come together. That&apos;s why we host free events, workshops, and
              meetups—creating spaces where engineers, designers, and founders
              can learn from each other, share what they&apos;re building, and
              form genuine connections.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10"
            >
              {[
                { value: "253+", label: "Community Members" },
                { value: "3", label: "Events Hosted" },
                { value: "Free", label: "Always Free" },
                { value: "1+", label: "Cities (Growing)" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  className="p-4 sm:p-5 rounded-xl bg-surface-elevated border border-border text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-highlight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#upcoming"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25"
              >
                View Upcoming Events
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <a
                href="#notify"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
              >
                Get Notified
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
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          UPCOMING EVENTS SECTION
          ============================================ */}
      <section id="upcoming" className="relative py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Flagship Meetup
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Mumbai Meets AI - Edition 4
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Mumbai Meets AI is our flagship community initiative—a free,
              monthly meetup that brings together AI practitioners, engineers,
              and builders. No sales pitches, no corporate speak. Just real
              conversations about what&apos;s working, what&apos;s not, and
              what&apos;s next.
            </p>
          </motion.div>

          {/* Upcoming Event Card - February 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-accent/15 rounded-3xl blur-xl" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-3xl bg-surface-elevated border border-accent/30 p-8 sm:p-12">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left column - Event details */}
                <div>
  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                    Mumbai Meets AI
                    <span className="block text-highlight mt-1">Edition 4</span>
                  </h3>

                  {/* Date and time */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-20 h-20 rounded-xl bg-cta flex flex-col items-center justify-center text-cta-text flex-shrink-0">
                      <span className="text-xs font-bold uppercase tracking-wide">FEB</span>
                      <span className="text-2xl font-bold leading-none mt-1">
                        2026
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-text-primary">
                        February 2026
                      </p>
                      <p className="text-text-secondary">
                        Exact date to be announced
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3 mb-6">
                    <svg
                      className="w-5 h-5 mt-0.5 text-accent-light flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-text-primary font-medium">
                        Mumbai, Maharashtra
                      </p>
                      <p className="text-sm text-text-secondary">
                        Venue details coming soon
                      </p>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-6">
                    Get ready for a morning where Mumbai&apos;s AI community
                    comes together to build, demo, and exchange ideas worth
                    experimenting with. Engineers, founders, and designers
                    sharing what&apos;s actually working.
                  </p>

                  {/* Format tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      { icon: "bolt", label: "Lightning Talks" },
                      { icon: "play", label: "Live Demos" },
                      { icon: "users", label: "Networking" },
                      { icon: "pizza", label: "Free Food" },
                    ].map((tag) => (
                      <span
                        key={tag.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-border text-sm text-text-secondary"
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#notify"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25"
                  >
                    Get Notified When Registration Opens
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
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </a>
                </div>

                {/* Right column - Visual/Stats */}
                <div className="hidden md:flex flex-col items-center justify-center">
                  <div className="relative">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-accent/15 rounded-full blur-3xl" />

                    {/* Stats circle */}
                    <div className="relative w-64 h-64 rounded-full bg-surface-elevated border border-border flex flex-col items-center justify-center">
                      <span className="text-6xl font-bold text-highlight mb-2">
                        #4
                      </span>
                      <span className="text-text-secondary text-sm uppercase tracking-wider">
                        Edition
                      </span>
                      <div className="mt-4 pt-4 border-t border-border w-32 text-center">
                        <span className="text-2xl font-bold text-text-primary">
                          253+
                        </span>
                        <span className="block text-xs text-text-muted">
                          Community Members
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expected attendance */}
                  <div className="mt-6 flex items-center gap-2 text-sm text-text-secondary">
                    <svg
                      className="w-4 h-4 text-accent-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                    Expected: 100+ attendees
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          PAST EVENTS SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Event Archive
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Where We&apos;ve Been
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Every event teaches us something new about building community.
              Here&apos;s a look back at the gatherings that brought us
              together—and the conversations that continue to shape what we do
              next.
            </p>
          </motion.div>

          {/* Past Events Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pastEvents.map((event, idx) => (
              <motion.div
                key={event.edition}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-surface-elevated border border-border hover:border-accent/30 transition-all duration-300 h-full">
                  {/* Top visual section */}
                  <div className="relative h-48 bg-accent/10 overflow-hidden">
                    {/* Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <pattern
                            id={`dots-${event.edition}`}
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                          >
                            <circle cx="10" cy="10" r="1" fill="currentColor" />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          fill={`url(#dots-${event.edition})`}
                        />
                      </svg>
                    </div>

                    {/* Edition badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold bg-surface-elevated/80 backdrop-blur-sm rounded-full text-text-primary border border-border">
                      #{event.edition}
                    </div>

                    {/* Completed badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-accent/20 backdrop-blur-sm rounded-full text-accent-light">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Completed
                    </div>

                    {/* Center decorative element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-4xl font-bold text-accent-light">
                          {event.attendees}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="p-6">
                    <p className="text-sm text-accent-light font-medium mb-2">
                      {event.date}
                    </p>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-3">
                      {event.subtitle}
                    </p>

                    {/* Location */}
                    <div className="flex items-start gap-2 text-sm text-text-secondary mb-4">
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0 text-text-muted"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      {event.location}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border my-4" />

                    {/* Stats and format */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <svg
                          className="w-4 h-4 text-text-muted"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                          />
                        </svg>
                        {event.attendees} attended
                      </div>
                      <span className="px-2 py-1 text-xs font-medium bg-surface border border-border rounded-full text-text-muted">
                        {event.format}
                      </span>
                    </div>

                    {/* View on Luma link */}
                    <a
                      href={event.lumaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent-light hover:underline"
                    >
                      View on Luma
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Growth indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-4 sm:gap-8"
          >
            {pastEvents
              .slice()
              .reverse()
              .map((event, idx) => (
                <div
                  key={event.edition}
                  className="flex items-center gap-4 sm:gap-8"
                >
                  <div className="text-center">
                    <div className="text-xs text-text-muted uppercase tracking-wider mb-1">
                      Edition {event.edition}
                    </div>
                    <div
                      className={`text-2xl font-bold ${
                        idx === pastEvents.length - 1
                          ? "text-highlight"
                          : "text-text-secondary"
                      }`}
                    >
                      {event.attendees}
                    </div>
                  </div>
                  {idx < pastEvents.length - 1 && (
                    <svg
                      className="w-6 h-6 text-accent-light"
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
                  )}
                </div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          COMMUNITY STATS BANNER
          ============================================ */}
      <section className="relative py-16 sm:py-20 bg-surface-elevated">
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="plus-pattern"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M15 10v10M10 15h10"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#plus-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
              Community Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-highlight mb-1">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-xs sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          WHY WE DO THIS SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Our Philosophy
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Why We Show Up
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Procedure was built by people who learned from generous mentors,
              open-source contributors, and strangers at meetups who took the
              time to explain things. Hosting events is how we pay that forward.
            </p>
          </motion.div>

          {/* Philosophy Cards */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Everyone Has Something to Teach",
                description:
                  "Whether you've shipped ten products or you're just getting started, your perspective matters. Our events create space for all voices—not just the loudest ones in the room.",
              },
              {
                title: "Learning is Better Together",
                description:
                  "The best insights often come from unexpected conversations. We design events to spark connections between people who might never cross paths otherwise.",
              },
              {
                title: "Free Means Accessible",
                description:
                  "We keep our events free because knowledge shouldn't have a price tag. No paywalls, no gatekeeping—just show up with curiosity.",
              },
              {
                title: "Community Over Competition",
                description:
                  "We're not here to collect leads or push services. We're here because strong communities make everyone better at what they do.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-elevated border border-border h-full">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          NEWSLETTER SIGNUP SECTION
          ============================================ */}
      <section id="notify" className="relative py-16 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-accent/10 rounded-3xl blur-2xl" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-surface-elevated backdrop-blur-xl border border-border">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="signup-grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#signup-grid)" />
                </svg>
              </div>

              <div className="relative text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                  Stay in the Loop
                </h2>
                <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                  Be the first to know about upcoming events, speaker
                  announcements, and new community initiatives. No spam, just
                  the good stuff.
                </p>

                {isSubmitted ? (
                  <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20 max-w-lg mx-auto">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-accent-light font-medium">
                      You&apos;re in! We&apos;ll keep you posted on everything
                      happening in the Procedure community.
                    </span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-grow px-5 py-4 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isSubmitting ? "Joining..." : "Join the List"}
                    </button>
                  </form>
                )}

                <p className="text-xs text-text-muted mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          GET INVOLVED SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
              Join Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              There&apos;s a Place for You Here
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our community grows stronger with every new voice. Whether you
              want to share your expertise, support what we&apos;re building, or
              simply show up and be part of the conversation—you&apos;re welcome
              here.
            </p>
          </motion.div>

          {/* Involvement Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {involvementOptions.map((option, idx) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="p-8 rounded-2xl bg-surface-elevated border border-border hover:border-accent/30 transition-colors h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light mb-5">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {option.title}
                  </h3>
                  <p className="text-text-secondary mb-6 flex-grow">
                    {option.description}
                  </p>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 text-accent-light font-medium hover:underline"
                  >
                    {option.cta}
                    {option.ctaIcon}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA SECTION
          ============================================ */}
      <section className="relative py-16 sm:py-24 bg-surface-elevated overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to Be Part of
              <br />
              <span className="text-highlight">Something Bigger?</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              We&apos;re just getting started. New cities, new formats, new ways
              to bring builders together. Whether you join us at the next meetup
              or connect with us online—we&apos;d love to meet you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#notify"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25"
              >
                Get Notified for Next Event
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
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
              >
                Contact Us
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </Link>
            </div>

            {/* Social links */}
            <div className="mt-12 flex items-center justify-center gap-6">
              <span className="text-sm text-text-muted">Follow us:</span>
              <a
                href="https://in.linkedin.com/company/procedurehq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-light transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/ProcedureHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-light transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
