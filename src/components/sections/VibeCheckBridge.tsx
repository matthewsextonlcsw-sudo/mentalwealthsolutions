export function VibeCheckBridge() {
  return (
    <section
      id="vibecheck"
      className="section-padding relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-700 to-navy" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-gold animate-gold-pulse" />
          <span className="text-gold text-xs uppercase tracking-wider">
            AI-Powered Assessment
          </span>
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-6">
          Ready to check
          <br />
          <span className="gold-text-gradient">your vibe?</span>
        </h2>

        <p className="text-cream/50 text-lg max-w-xl mx-auto mb-4 leading-relaxed">
          The Vibe Check is an AI-powered mental wealth assessment that meets
          you where you are. No judgment. No clinical gatekeeping. Just an
          honest signal on where you stand and where you could go.
        </p>

        <p className="text-cream/30 text-sm mb-10">
          Built on the R.A.V.E.S. framework. Powered by clinical insight and
          artificial intelligence.
        </p>

        {/* Primary CTA */}
        <a
          href="https://vibecheck.luxury"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-navy font-bold text-lg rounded-xl hover:bg-gold-400 transition-all hover:shadow-xl hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]"
        >
          Take the Vibe Check
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>

        <p className="text-cream/20 text-xs mt-6">
          vibecheck.luxury &mdash; a Mental Wealth Solutions experience
        </p>
      </div>
    </section>
  );
}
