import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transplant Check — ESRD Patient Navigation | Mental Wealth Solutions",
  description:
    "Waze for transplant patients. Transplant center intelligence, daily journaling, AI emotional support, and Vibe Guides — so ESRD patients stop waiting and start navigating.",
};

export default function TransplantCheckPage() {
  return (
    <main className="bg-navy-gradient min-h-screen">

      {/* Hero */}
      <section className="relative section-padding text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.4) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
            By Matthew Sexton, LCSW
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
            Transplant Check
          </h1>
          <p className="text-gold text-xl md:text-2xl font-light mb-6">
            Know your options. Navigate your journey.
          </p>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Waze for transplant patients. Transplant center intelligence, daily
            journaling, AI emotional support, and Vibe Guides — so ESRD patients
            stop waiting and start navigating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://transplantcheck.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              Visit Transplant Check
            </a>
            <Link
              href="/#contact"
              className="px-8 py-3.5 border border-gold/40 text-gold rounded-lg hover:bg-gold/10 transition-all"
            >
              Ask Matthew a Question
            </Link>
          </div>
          <p className="text-cream/40 text-sm mt-6">
            $10/month after trial &mdash; cancel anytime
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-6">
              Something Has to Change
            </h2>
            <div className="space-y-5 text-cream/60 text-lg leading-relaxed">
              <p>
                You&apos;re on dialysis. Maybe you&apos;re on a waitlist. Maybe
                you don&apos;t even know what a waitlist looks like. The system
                doesn&apos;t explain itself. Your care team is overwhelmed. And
                you&apos;re drowning in a process that nobody walks you through.
              </p>
              <p>
                Transplant Check was built for you. Not by a tech company that
                googled ESRD — but by someone who sat with these patients for
                years, watched them go home without answers, and decided that
                had to stop.
              </p>
              <p className="text-gold/80 italic">
                &ldquo;You deserve to know your options. Here they are.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm text-center mb-4">
            The Process
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream text-center mb-14">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Check In Daily",
                body: "8 quick questions about how you're feeling about the transplant process. Not medical data — emotional navigation. Your compass for the journey.",
              },
              {
                num: "02",
                title: "Find Your Center",
                body: "Search every transplant center in the US. See wait times, volumes, and outcomes in plain English. Filter by location and insurance.",
              },
              {
                num: "03",
                title: "Get S.T.O.I.C.K. Support",
                body: "When your scores drop, our AI-powered framework walks you through: Stop, breathe, Observe, Imagine, Choose, and find Kindness.",
              },
            ].map((step) => (
              <div key={step.num} className="glass-card p-8">
                <div className="text-gold/30 font-heading font-bold text-5xl mb-4">
                  {step.num}
                </div>
                <h3 className="font-heading text-xl font-semibold text-cream mb-3">
                  {step.title}
                </h3>
                <p className="text-cream/60 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm text-center mb-4">
            Features
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream text-center mb-14">
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Transplant Center Intelligence",
                body: "SRTR data for every transplant center in the US. Wait times, transplant volume, 1-year outcomes. Filter by location and insurance. See where you actually stand.",
                accent: "border-gold/30",
              },
              {
                title: "Daily Check-In Journal",
                body: "8 experiential domains. Track how you feel about the transplant process — not vitals or medical data. Your emotional compass, updated daily.",
                accent: "border-gold/30",
              },
              {
                title: "S.T.O.I.C.K. AI Support",
                body: "When your journal scores drop, Matthew's proprietary framework activates with AI-powered emotional support and one small, concrete action step to take today.",
                accent: "border-gold/60",
              },
              {
                title: "Vibe Guides: ESRD Edition",
                body: "Transplant articles written in plain English. How the waitlist works, multi-listing, living donors, self-advocacy, and everything the system forgot to tell you.",
                accent: "border-gold/60",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className={`glass-card p-8 border-l-2 ${pillar.accent}`}
              >
                <h3 className="font-heading text-xl font-semibold text-cream mb-3">
                  {pillar.title}
                </h3>
                <p className="text-cream/60 leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-10 md:p-14">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-6">
              Who Built This
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-6">
              Matthew Sexton, LCSW
            </h2>
            <div className="space-y-4 text-cream/60 leading-relaxed mb-8">
              <p>
                Matthew worked in dialysis for years. He sat with patients who
                felt lost, overwhelmed, and invisible in a system that
                didn&apos;t explain itself. He watched people go home from
                appointments with more questions than answers.
              </p>
              <p>
                Transplant Check is the tool he wishes those patients had. It
                combines clinical insight, SRTR data, and the S.T.O.I.C.K.
                framework he developed — because navigating ESRD deserves more
                than a pamphlet.
              </p>
            </div>
            <p className="text-gold italic text-lg">
              &ldquo;You deserve to know your options. Here they are.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Contact */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
                  Enterprise &amp; Partnerships
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-6">
                  Bring Transplant Check to Your Patients
                </h2>
                <div className="space-y-4 text-cream/60 leading-relaxed">
                  <p>
                    Dialysis centers, transplant programs, health systems, and
                    ESRD networks — if your patients are navigating the
                    transplant process, they deserve better tools than a
                    pamphlet and a phone number.
                  </p>
                  <p>
                    Transplant Check integrates into your existing patient
                    touchpoints. White-label options, bulk licensing, and
                    custom clinical workflows available.
                  </p>
                  <p>
                    Matthew works directly with enterprise partners — no sales
                    team, no runaround.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  {[
                    "Dialysis centers &amp; ESRD networks",
                    "Transplant programs &amp; nephrology practices",
                    "Health systems &amp; managed care organizations",
                    "Patient advocacy groups",
                    "Value-based care &amp; quality improvement teams",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-gold mt-0.5 shrink-0">&#x2014;</span>
                      <span
                        className="text-cream/70"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </div>
                  ))}
                </div>
                <Link
                  href="/#contact"
                  className="inline-block w-full text-center px-8 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold/20"
                >
                  Contact Matthew
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="px-6 pb-10 text-center">
        <p className="text-cream/30 text-xs max-w-2xl mx-auto leading-relaxed">
          Transplant Check is a patient navigation tool. It is not a substitute for
          medical advice, therapy, or your care team. Always talk to your doctor
          about your specific situation.
        </p>
      </div>

    </main>
  );
}
