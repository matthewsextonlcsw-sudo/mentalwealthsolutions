export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-navy-gradient" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Gold accent line */}
        <div className="w-16 h-0.5 bg-gold mx-auto mb-8 animate-fade-in" />

        {/* Headline */}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="text-cream">Mental health is </span>
          <span className="text-cream/60">maintenance.</span>
          <br />
          <span className="gold-text-gradient">Mental wealth is </span>
          <span className="gold-text-gradient">accumulation.</span>
        </h1>

        {/* Subtext */}
        <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Surviving is not thriving. Traditional therapy helps you cope with
          what breaks you down. Mental wealth building gives you the tools,
          frameworks, and vision to compound psychological resilience,
          emotional intelligence, and purpose into something that grows.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/matthewsextonlcsw-mentalwealthsolutions/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold/20"
          >
            Book Free Consultation
          </a>
          <a
            href="https://vibecheck.luxury"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-gold/40 text-gold rounded-lg hover:bg-gold/10 transition-all"
          >
            Take the Vibe Check
          </a>
        </div>
      </div>

    </section>
  );
}
