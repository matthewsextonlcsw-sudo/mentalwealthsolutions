export function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800/30 to-navy" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
          Get Started
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-6">
          Ready to build your
          <br />
          <span className="gold-text-gradient">mental wealth?</span>
        </h2>

        <p className="text-cream/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Book a free 30-minute consultation to explore how clinical expertise
          and the R.A.V.E.S. framework can help you move from surviving to
          thriving.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:matthew@mentalwealthsolutions.org"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-gold font-semibold text-lg rounded-xl hover:bg-gold/10 transition-all"
          >
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send an Email
          </a>
          <a
            href="https://calendly.com/matthewsextonlcsw-mentalwealthsolutions/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-navy font-bold text-lg rounded-xl hover:bg-gold-400 transition-all hover:shadow-xl hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Free Consultation
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        <p className="text-cream/20 text-xs mt-6">
          Free 30-minute consultation &mdash; no obligation
        </p>
      </div>
    </section>
  );
}
