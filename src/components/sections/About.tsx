export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Narrative */}
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              The Practitioner
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-6">
              Matthew Sexton, LCSW
            </h2>

            <div className="space-y-5 text-cream/60 leading-relaxed">
              <p>
                Most therapists help you survive. Matthew builds systems that
                help you compound. As a Licensed Clinical Social Worker, he
                brings the clinical rigor and evidence base that mental health
                demands. As a technologist who builds AI tools, he brings the
                engineering mindset that transforms insight into scalable
                solutions.
              </p>
              <p>
                This is not about choosing between clinical expertise and
                technological innovation. It&apos;s about recognizing that the
                future of mental health lives at their intersection&mdash;where
                therapeutic frameworks meet intelligent systems, and where
                individual breakthroughs become repeatable methodologies.
              </p>
              <p>
                The R.A.V.E.S. framework was born from this dual lens:
                thousands of clinical hours distilled into a structured
                approach that can be enhanced, measured, and amplified through
                technology. The Vibe Check platform is the first product of
                that vision&mdash;AI-powered assessment built on clinical
                foundations.
              </p>
            </div>
          </div>

          {/* Right: Credentials + Bridge */}
          <div className="space-y-6">
            {/* Credential card */}
            <div className="glass-card p-6">
              <h3 className="text-gold text-sm uppercase tracking-wider mb-4">
                Credentials
              </h3>
              <ul className="space-y-3 text-cream/70">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">&#x2014;</span>
                  <span>Licensed Clinical Social Worker (LCSW)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">&#x2014;</span>
                  <span>AI Tool Developer &amp; Systems Builder</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">&#x2014;</span>
                  <span>R.A.V.E.S. Framework Creator</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">&#x2014;</span>
                  <span>Vibe Check Platform Architect</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">&#x2014;</span>
                  <span>ESRD &amp; Transplant Patient Navigation (Kidney Check)</span>
                </li>
              </ul>
            </div>

            {/* Dual identity card */}
            <div className="glass-card p-6">
              <h3 className="text-gold text-sm uppercase tracking-wider mb-4">
                The Bridge
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-5 bg-navy-900/50 rounded-xl border border-white/5">
                  <div className="text-gold mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                    </svg>
                  </div>
                  <p className="text-gold text-lg font-heading font-bold">
                    Clinical
                  </p>
                  <p className="text-cream/40 text-xs mt-1">
                    Evidence-based therapeutic practice
                  </p>
                </div>
                <div className="text-center p-5 bg-navy-900/50 rounded-xl border border-white/5">
                  <div className="text-gold mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <p className="text-gold text-lg font-heading font-bold">
                    Tech
                  </p>
                  <p className="text-cream/40 text-xs mt-1">
                    AI-powered tools &amp; systems
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="glass-card p-6 border-l-2 border-l-gold/40">
              <p className="text-cream/50 italic text-sm leading-relaxed">
                &ldquo;The best technology doesn&apos;t replace the human
                element&mdash;it amplifies it. Every tool I build starts with
                a clinical question and ends with a human outcome.&rdquo;
              </p>
              <p className="text-gold/60 text-xs mt-3">
                &mdash; Matthew Sexton, LCSW
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
