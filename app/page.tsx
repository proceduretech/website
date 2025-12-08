import Link from "next/link";

const services = [
  {
    name: "AI Engineering",
    description: "Production-grade AI systems, from LLMs to custom models",
    href: "/services/ai-engineering",
  },
  {
    name: "Product Engineering",
    description: "Full-stack development with AI-augmented velocity",
    href: "/services/product-engineering",
  },
  {
    name: "AI Security",
    description: "Secure your AI systems and protect against emerging threats",
    href: "/services/ai-security",
  },
  {
    name: "Design",
    description: "Human-centered design for AI-powered experiences",
    href: "/services/design",
  },
  {
    name: "Cloud & DevOps",
    description: "Infrastructure built for AI workloads at scale",
    href: "/services/cloud-devops",
  },
];

const stats = [
  { value: "50+", label: "AI Systems Deployed" },
  { value: "10x", label: "Faster Time to Production" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Forward-Deployed Support" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23000'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Accent glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[300px] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-6">
            Forward-Deployed AI Engineers
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight">
            Build AI. Build with AI.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-400 bg-clip-text text-transparent">
              We do both.
            </span>
          </h1>
          <p className="mt-8 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Elite AI engineers embedded with your team to ship production-grade
            AI systems—from strategy to deployment. We don&apos;t just consult.
            We build.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-600 rounded-lg hover:from-blue-500 hover:to-sky-500 transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Start Building
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-300 dark:border-zinc-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-zinc-400 dark:bg-zinc-500 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              AI engineering, not AI consulting
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              We embed senior engineers directly into your team. No slide decks.
              No endless discovery phases. Just production code shipped fast.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-500/30 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Build AI Products</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                From LLM applications to custom ML models, we architect and build
                AI systems that solve real business problems.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-800 hover:border-sky-300 dark:hover:border-sky-500/30 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Build with AI</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                We leverage AI to ship faster. Copilot-augmented development,
                AI-powered testing, and automated code reviews built into our process.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-500/30 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Forward-Deployed</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Our engineers work as an extension of your team—same tools, same
                standups, same commitment to shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
              Full-spectrum AI and engineering services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group p-6 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-sky-500/5" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Ready to ship AI?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            Let&apos;s talk about your AI initiatives. Our forward-deployed engineers
            can be embedded with your team within weeks, not months.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-600 rounded-lg hover:from-blue-500 hover:to-sky-500 transition-all duration-200 shadow-lg shadow-blue-500/25"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
