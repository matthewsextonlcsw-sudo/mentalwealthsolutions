const RAVES_ITEMS = [
  {
    letter: "R",
    title: "Resilience",
    description:
      "Building psychological durability that compounds over time. Not just bouncing back\u2014bouncing forward with greater capacity than before.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    letter: "A",
    title: "Awareness",
    description:
      "Deep self-knowledge as the foundation of all growth. Understanding your patterns, triggers, values, and blind spots with radical clarity.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    letter: "V",
    title: "Vision",
    description:
      "Crafting a deliberate future instead of defaulting into one. Aligning daily choices with long-term psychological and emotional wealth.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    letter: "E",
    title: "Empowerment",
    description:
      "Moving from passive survival to active authorship of your life. Owning your agency, decisions, and the narrative you live inside.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    letter: "S",
    title: "Strategy",
    description:
      "Systematic approaches that turn insight into action. Evidence-based frameworks that make mental wealth building repeatable and measurable.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export function RavesFramework() {
  return (
    <section id="raves" className="section-padding bg-navy-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
            The Methodology
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-4">
            The R.A.V.E.S. Framework
          </h2>
          <p className="text-cream/50 max-w-2xl mx-auto leading-relaxed">
            A proprietary methodology for building compounding psychological
            wealth&mdash;not just managing symptoms, but engineering growth.
          </p>
        </div>

        {/* Framework cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RAVES_ITEMS.map((item, index) => (
            <div
              key={item.letter}
              className={`glass-card p-8 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 group ${
                index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              {/* Gold letter badge */}
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <span className="text-gold font-heading text-xl font-bold">
                  {item.letter}
                </span>
              </div>

              <h3 className="text-cream text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-cream/50 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
