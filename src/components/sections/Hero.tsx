import { CinematicSky } from "@/components/ui/CinematicSky";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fallback background (canvas renders over this) */}
      <div className="absolute inset-0 bg-navy-gradient" />

      {/* Cinematic sky — city horizon + stars + shooting star */}
      <CinematicSky />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Credential badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs uppercase tracking-[0.2em] mb-8">
          <span>Matthew Sexton, LCSW</span>
          <span className="w-px h-3 bg-gold/40" />
          <span className="text-gold/70">Licensed Clinical Social Worker</span>
        </div>

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
