"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CalButton } from "@/components/CalButton";

// Capabilities data
const capabilities = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: "LLM & Foundation Model Development",
    description: "Build intelligent applications powered by the latest large language models. Your team gets custom LLM integrations, fine-tuned models optimized for your domain, and production infrastructure that handles millions of requests without breaking a sweat.",
    tags: ["GPT-4", "Claude", "Llama", "Fine-tuning", "Prompt Engineering"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "AI Agent Systems",
    description: "Deploy autonomous AI agents that reason, plan, and execute complex workflows. We architect multi-agent systems with proper guardrails, tool integrations, and human-in-the-loop controls that enterprises require for mission-critical operations.",
    tags: ["Autonomous Agents", "Tool Use", "Workflow Automation", "Multi-Agent"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "RAG Systems & Knowledge Bases",
    description: "Transform your proprietary data into a competitive advantage. Our engineers build retrieval-augmented generation systems that deliver accurate, contextual responses grounded in your organization's knowledge—not hallucinated guesses.",
    tags: ["Vector Databases", "Semantic Search", "Document Processing", "Knowledge Graphs"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "MLOps & Model Deployment",
    description: "Ship AI models with confidence using enterprise-grade MLOps infrastructure. You get automated training pipelines, model versioning, A/B testing frameworks, and monitoring systems that catch drift before it impacts your users.",
    tags: ["CI/CD for ML", "Model Monitoring", "Feature Stores", "Auto-scaling"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "AI Security & Governance",
    description: "Protect your AI investments from emerging threats. We implement comprehensive security measures including prompt injection defense, output filtering, access controls, and audit logging that satisfy compliance requirements.",
    tags: ["Prompt Injection Defense", "Data Privacy", "Compliance", "Red Teaming"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Custom AI Solutions",
    description: "Tackle unique challenges with purpose-built AI systems. Whether you need computer vision pipelines, speech recognition systems, or predictive analytics platforms, our engineers architect solutions tailored to your specific requirements.",
    tags: ["Computer Vision", "NLP", "Predictive Analytics", "Custom Models"],
  },
];

// Process steps data
const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    duration: "30 minutes",
    description: "A focused conversation with our principal engineers to understand your AI objectives, technical constraints, and success criteria. You receive an honest assessment of what's achievable—not a sales pitch.",
  },
  {
    step: 2,
    title: "Technical Architecture",
    duration: "2-5 days",
    description: "Our team analyzes your infrastructure, data assets, and requirements to design an AI architecture that integrates seamlessly with your existing systems.",
  },
  {
    step: 3,
    title: "Engineer Matching",
    duration: "1-2 days",
    description: "We curate a team of senior AI engineers matched to your specific technology stack and domain. You interview and approve every engineer before they join.",
  },
  {
    step: 4,
    title: "Embedded Development",
    duration: "Ongoing",
    description: "Your dedicated AI engineers integrate with your team—attending standups, using your tools, and shipping code daily. No handoffs or knowledge silos.",
  },
  {
    step: 5,
    title: "Deploy & Iterate",
    duration: "Continuous",
    description: "Launch production AI systems with comprehensive documentation and monitoring. Scale capacity up or down as your requirements evolve.",
  },
];

// Industries data
const industries = [
  {
    name: "Financial Services",
    description: "Deploy AI systems that meet the stringent compliance and security requirements of financial institutions. From fraud detection to automated underwriting.",
    outcomes: ["60% reduction in manual review time", "99.9% uptime for trading algorithms"],
  },
  {
    name: "Healthcare & Life Sciences",
    description: "Accelerate drug discovery, clinical operations, and patient care with HIPAA-compliant AI solutions that integrate with existing healthcare infrastructure.",
    outcomes: ["3x faster clinical document processing", "Improved diagnostic accuracy"],
  },
  {
    name: "E-Commerce & Retail",
    description: "Transform customer experiences with personalized recommendations, intelligent search, and automated customer service that drives measurable improvements.",
    outcomes: ["25% increase in average order value", "40% reduction in support tickets"],
  },
  {
    name: "Technology & SaaS",
    description: "Embed AI capabilities directly into your product to differentiate from competitors. Ship AI features faster while maintaining reliability.",
    outcomes: ["Faster time-to-market for AI features", "Reduced engineering overhead"],
  },
];

// FAQ data
const faqs = [
  {
    question: "What makes Procedure different from other AI development companies?",
    answer: "We build, not advise. Traditional AI consulting firms deliver recommendations and prototypes that rarely make it to production. Our forward-deployed engineers embed directly with your team, writing production code daily and owning outcomes alongside your developers. You get builders who ship, not consultants who present.",
  },
  {
    question: "How quickly can you start an AI engineering engagement?",
    answer: "Most engagements begin within 2-5 days. We maintain a bench of senior AI engineers ready to deploy, matched based on your specific technology stack, domain requirements, and project complexity. Enterprise velocity is our competitive advantage.",
  },
  {
    question: "What technologies and AI frameworks do you work with?",
    answer: "Our engineers are proficient across the modern AI stack: OpenAI, Anthropic, and open-source LLMs; PyTorch and TensorFlow for custom model development; LangChain, LlamaIndex, and custom frameworks for AI applications; major cloud platforms (AWS, GCP, Azure) for deployment; and vector databases like Pinecone, Weaviate, and Milvus for RAG systems.",
  },
  {
    question: "How do you ensure security and compliance for enterprise AI systems?",
    answer: "Security is built into every engagement. We implement defense-in-depth strategies including prompt injection protection, output filtering, data encryption, access controls, and comprehensive audit logging. Our team has experience with SOC 2, HIPAA, GDPR, and industry-specific compliance requirements.",
  },
  {
    question: "What does the pricing model look like for AI engineering services?",
    answer: "We offer flexible engagement models: team augmentation with dedicated engineers, managed delivery for defined scopes, and strategic AI transformation partnerships. Pricing is transparent and based on team composition and engagement duration. No surprise invoices or hidden fees.",
  },
  {
    question: "Can you help with AI projects that are already underway or struggling?",
    answer: "Absolutely. Many clients come to us to rescue stalled AI initiatives. Our engineers can diagnose technical issues, refactor problematic architectures, and get projects back on track. We provide an honest assessment of what's salvageable and what needs rethinking.",
  },
];

// Testimonial data
const testimonial = {
  quote: "Procedure's AI engineers integrated seamlessly with our team and helped us ship a production RAG system in just 3 weeks. Their expertise in LLM applications and enterprise security was exactly what we needed.",
  author: "Michael Chen",
  role: "VP of Engineering",
  company: "Fortune 500 Financial Services",
  image: "/testimonials/michael-chen.jpg",
};

export default function AIEngineeringPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface via-base to-base" />
          <div className="absolute top-20 right-1/4 w-[600px] h-[400px] bg-accent-teal/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-1/4 w-[500px] h-[300px] bg-accent-blue/6 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23E5E7EB'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-accent-teal-light transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-accent-teal-light transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-text-secondary">AI Engineering</li>
            </ol>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Service Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6"
              >
                <svg className="w-4 h-4 text-accent-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                <span className="text-sm font-semibold text-accent-teal-light uppercase tracking-wider">
                  Enterprise AI Engineering
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
              >
                Ship Production AI
                <br />
                <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                  In Days, Not Months
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl"
              >
                Your enterprise deserves AI that works beyond the demo. Our forward-deployed AI engineers embed with your team to design, build, and scale production-grade AI systems that deliver measurable business outcomes.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <CalButton className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent-teal to-accent-blue rounded-xl hover:from-accent-teal-light hover:to-accent-blue-light transition-all duration-200 shadow-lg shadow-accent-teal/20 cursor-pointer">
                  Book an AI Strategy Call
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </CalButton>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent-teal/50 hover:bg-accent-teal/5 transition-all duration-200"
                >
                  View Our AI Work
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-6 pt-8 border-t border-border"
              >
                {[
                  { icon: "50+", label: "AI Systems Shipped" },
                  { icon: "2-5", label: "Days to Deploy" },
                  { icon: "98%", label: "Client Retention" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="text-lg font-bold bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                      {item.icon}
                    </span>
                    <span className="text-sm text-text-secondary">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Floating elements representing AI concepts */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-teal/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl" />

                <div className="bg-surface border border-border rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-teal/10 to-transparent rounded-bl-full" />

                  <h3 className="text-lg font-semibold text-text-primary mb-6">What We Build</h3>

                  <div className="space-y-4">
                    {[
                      { label: "LLM Applications", sublabel: "RAG, agents, chatbots", color: "teal" },
                      { label: "ML Infrastructure", sublabel: "Pipelines, training, deployment", color: "blue" },
                      { label: "AI Security", sublabel: "Guardrails, compliance, monitoring", color: "teal" },
                    ].map((item, idx) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 p-4 bg-surface-elevated rounded-xl border border-border"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-accent-${item.color}/10 flex items-center justify-center flex-shrink-0`}>
                          <div className={`w-3 h-3 rounded-full bg-accent-${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-text-primary">{item.label}</p>
                          <p className="text-xs text-text-muted">{item.sublabel}</p>
                        </div>
                        <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                      <span className="text-xs text-text-muted">Production-ready systems</span>
                    </div>
                    <span className="text-xs text-text-muted">Since 2017</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICE OVERVIEW SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-surface">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3e%3ccircle cx='2' cy='2' r='1' fill='%23E5E7EB'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              The Procedure Difference
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight max-w-4xl">
              AI engineering services that transform ambitious strategies into{" "}
              <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                production-ready systems
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="text-lg text-text-secondary leading-relaxed">
                Procedure delivers enterprise AI engineering services that transform ambitious AI strategies into production-ready systems. Unlike traditional AI consulting firms that leave you with prototypes and slide decks, our senior engineers work alongside your team to build, deploy, and scale AI solutions that handle real-world complexity.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                From LLM-powered applications and autonomous AI agents to sophisticated RAG systems and robust MLOps pipelines, you get battle-tested AI infrastructure designed for enterprise scale.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent-teal-light font-medium hover:text-accent-teal transition-colors"
              >
                Start your AI transformation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Right Column - Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-4"
            >
              {[
                { value: "40-60%", label: "Faster AI deployment" },
                { value: "100+", label: "Senior AI engineers" },
                { value: "3+", label: "Year average partnership" },
              ].map((metric, idx) => (
                <div
                  key={metric.label}
                  className="relative p-6 rounded-2xl bg-surface-elevated border border-border overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-teal to-accent-blue rounded-full" />
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-text-secondary">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CAPABILITIES SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-base">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3e%3cpath d='M16 8v16M8 16h16' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              What We Build
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Full-Stack AI Engineering Capabilities
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From foundation models to production deployment, we cover the complete AI engineering lifecycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-surface-elevated border border-border hover:border-accent-teal/40 hover:shadow-lg hover:shadow-accent-teal/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-teal/20 to-accent-blue/10 border border-accent-teal/20 flex items-center justify-center text-accent-teal-light mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {capability.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {capability.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                  {capability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-text-muted bg-surface border border-border rounded-full hover:border-accent-teal/30 hover:text-accent-teal-light transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROCESS SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3e%3cpath d='M18 4L32 18L18 32L4 18Z' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
                Our Process
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
                From Strategy to Production in Weeks
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-text-secondary max-w-md"
            >
              A proven methodology that gets AI systems into production faster without compromising on quality or security.
            </motion.p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Timeline line - visible on desktop */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-teal via-accent-blue to-accent-teal/30" />

            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Step number circle */}
                  <div className="w-20 h-20 rounded-full bg-surface-elevated border-2 border-accent-teal flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg shadow-accent-teal/20">
                    <span className="text-2xl font-bold text-accent-teal-light">
                      {step.step.toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className="p-6 rounded-xl bg-surface-elevated border border-border">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">
                      {step.description}
                    </p>
                    <span className="inline-flex px-3 py-1 text-xs font-medium text-accent-teal-light bg-accent-teal/10 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          INDUSTRIES SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-base">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'%3e%3cpath d='M0 40L40 0' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              Where We Deliver Impact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
              AI Solutions Across Industries
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Deep expertise in the verticals that matter most to enterprise clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl bg-surface-elevated border border-border hover:border-accent-teal/40 transition-all duration-300"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2 text-sm text-accent-teal-light">
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIAL SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-surface">
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 sm:p-16 rounded-3xl bg-surface-elevated border border-border overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl" />

            {/* Quote icon */}
            <svg
              className="w-16 h-16 text-accent-teal/20 mb-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            {/* Quote text */}
            <blockquote className="relative text-2xl sm:text-3xl md:text-4xl font-medium text-text-primary leading-relaxed tracking-tight mb-10">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-teal to-accent-blue flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-base">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3e%3ccircle cx='10' cy='10' r='1.5' fill='%23E5E7EB'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-teal-light uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Common Questions About AI Engineering
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-elevated rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-surface border border-border text-text-secondary">
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openFAQ === idx ? "rotate-180" : ""
                      }`}
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
                  </span>
                </button>
                <AnimatePresence>
                  {openFAQ === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="relative py-24 sm:py-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/10 via-transparent to-accent-blue/10" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3e%3cpath d='M18 4L32 18L18 32L4 18Z' stroke='%23E5E7EB' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Accent orbs */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-teal/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-accent-blue/10 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to Turn Your AI Strategy
              <br />
              <span className="bg-gradient-to-r from-accent-teal-light to-accent-blue-light bg-clip-text text-transparent">
                Into Production Reality?
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Whether you&apos;re building your first LLM application, scaling existing AI systems, or rescuing a stalled initiative, our engineers can be embedded with your team within days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CalButton className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent-teal to-accent-blue rounded-xl hover:from-accent-teal-light hover:to-accent-blue-light transition-all duration-200 shadow-lg shadow-accent-teal/20 cursor-pointer">
                Schedule Your AI Strategy Call
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </CalButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent-teal/50 hover:bg-accent-teal/5 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { icon: "shield", label: "SOC 2 Type II" },
                { icon: "globe", label: "GDPR Compliant" },
                { icon: "lock", label: "NDA Available" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-text-muted">
                  <svg className="w-4 h-4 text-accent-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
