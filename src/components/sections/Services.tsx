const SERVICES = [
  {
    title: "Clinical Therapy",
    subtitle: "One-on-One Sessions",
    description:
      "Evidence-based therapeutic work grounded in the R.A.V.E.S. framework. Moving beyond symptom management toward sustained mental wealth accumulation.",
    features: [
      "Individual therapy sessions",
      "R.A.V.E.S. assessment & planning",
      "Trauma-informed approaches",
      "Strength-based interventions",
    ],
    featured: false,
  },
  {
    title: "Consulting",
    subtitle: "Organizations & Professionals",
    description:
      "Bringing the mental wealth framework to organizations, teams, and fellow practitioners who want to integrate these principles into their own work.",
    features: [
      "Organizational wellness consulting",
      "Practitioner training",
      "Framework licensing",
      "Workshop facilitation",
    ],
    featured: true,
  },
  {
    title: "Digital Tools",
    subtitle: "AI-Powered Solutions",
    description:
      "Technology that extends clinical expertise beyond the therapy room. AI-powered assessments, tracking, and growth tools built on clinical foundations.",
    features: [
      "Vibe Check assessment platform",
      "Mental wealth tracking tools",
      "AI-assisted self-reflection",
      "Digital R.A.V.E.S. resources",
    ],
    featured: false,
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-navy-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
            How We Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-4">
            Services
          </h2>
          <p className="text-cream/50 max-w-2xl mx-auto leading-relaxed">
            Clinical depth meets technological reach. Three pathways to
            building your mental wealth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`glass-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 ${
                service.featured
                  ? "border-gold/30 hover:border-gold/50 lg:-mt-4 lg:mb-4 ring-1 ring-gold/20"
                  : "hover:border-gold/20"
              }`}
            >
              {service.featured && (
                <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs uppercase tracking-wider mb-4">
                  Most Popular
                </div>
              )}
              <p className="text-gold/70 text-xs uppercase tracking-wider mb-2">
                {service.subtitle}
              </p>
              <h3 className="text-cream text-2xl font-heading font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-cream/50 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-cream/40 text-sm flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://calendly.com/matthewsextonlcsw-mentalwealthsolutions/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold/20"
          >
            Book Free Consultation
            <svg
              className="w-4 h-4"
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
        </div>
      </div>
    </section>
  );
}
