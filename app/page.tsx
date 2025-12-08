export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section placeholder - ensures nav is visible */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Accent glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-6">
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-6">
            Enterprise Software Engineering
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight tracking-tight">
            Build the future with
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}precision engineering
            </span>
          </h1>
          <p className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Partner with elite engineers to deliver scalable, secure, and innovative
            software solutions that drive enterprise transformation.
          </p>
        </div>
      </section>
    </main>
  );
}
