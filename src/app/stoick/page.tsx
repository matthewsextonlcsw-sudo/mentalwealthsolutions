import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The S.T.O.I.C.K. Method | Mental Wealth Solutions",
  description:
    "A neuroscience-backed, six-step method for interrupting your brain's survival programming and responding with intention. Stop. Take a Breath. Observe. Imagine. Choose. Kindness.",
  openGraph: {
    title: "The S.T.O.I.C.K. Method | Mental Wealth Solutions",
    description:
      "A neuroscience-backed, six-step method for interrupting your brain's survival programming and responding with intention.",
    url: "https://mentalwealthsolutions.org/stoick",
  },
};

const STEPS = [
  {
    letter: "S",
    title: "Stop",
    description:
      "Not a full stop\u2014just a moment of pause. Reacting is primal. Your survival brain fires before your values have a chance to weigh in. This step creates a gap between stimulus and response, giving your prefrontal cortex time to catch up.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    letter: "T",
    title: "Take a Breath",
    description:
      "Brings you into the present moment. Nobody around you will even notice, but your brain gets the oxygen it needs to regulate. Focused breathing sends oxygen back to the thinking brain and slows the HPA cascade, pulling you out of fight-or-flight.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
  },
  {
    letter: "O",
    title: "Observe",
    description:
      "Notice the thought or emotion. Label it without judgment. Say \u201CI feel anxious\u201D instead of \u201CI am anxious.\u201D This awareness breaks the distortion loop and separates the feeling from your identity\u2014it becomes a temporary state, not who you are.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    letter: "I",
    title: "Imagine the Outcome",
    description:
      "Ask yourself what happens if you react\u2026 and what happens if you respond. This foresight engages your prefrontal cortex\u2014the part of your brain responsible for planning and consequence evaluation\u2014and builds self-control over time through neuroplasticity.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    letter: "C",
    title: "Choose",
    description:
      "Act based on your values, not your impulses. When you react impulsively, your emotional brain takes over. Later, your values return\u2014and with them, guilt or shame. Choosing deliberately becomes your long-term strength and rewires neural pathways through repetition.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    letter: "K",
    title: "Kindness",
    description:
      "Kindness creates sustainable energy. Even if uncomfortable now, it leads to peace later. Reacting feels good short term, but responding with kindness aligns with your values and builds long-term resilience. Treat yourself with the same compassion you offer others.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const RULES = [
  {
    number: 1,
    text: "Nobody knows what they are doing \u2014 including me.",
  },
  {
    number: 2,
    text: "It is never a failure when I learn.",
  },
  {
    number: 3,
    text: "I will treat myself with grace and compassion. When that is a challenge, I will refer to Rule 1 and 2.",
  },
];

export default function StoickPage() {
  return (
    <div>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-gradient" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <p className="text-gold uppercase tracking-[0.25em] text-sm mb-6">
            A Mindful Method
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="gold-text-gradient">S.T.O.I.C.K.</span>
          </h1>
          <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            Understanding your brain&rsquo;s survival programming&mdash;and learning to override it with intention, awareness, and kindness.
          </p>
          <p className="text-cream/40 text-sm max-w-xl mx-auto leading-relaxed">
            A neuroscience-backed, six-step method developed by Matthew Sexton, LCSW for interrupting reactive patterns and responding from your values.
          </p>

          <div className="mt-12 flex justify-center gap-3 flex-wrap">
            {STEPS.map((step) => (
              <div
                key={step.letter}
                className="w-11 h-11 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center"
              >
                <span className="text-gold font-heading text-lg font-bold">
                  {step.letter}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── Why This Exists ──────────────────────────────────────── */}
      <section className="section-padding bg-navy-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              The Problem
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-6">
              Your brain is not broken. It&rsquo;s just ancient.
            </h2>
            <p className="text-cream/50 max-w-2xl mx-auto leading-relaxed">
              Parts of your brain are millions of years old and wired for survival&mdash;not social media, not corporate deadlines, not traffic jams. The mismatch between your ancient wiring and modern life is the source of most emotional suffering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-8">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-cream text-lg font-semibold mb-3">
                Ancient Design
              </h3>
              <p className="text-cream/50 leading-relaxed text-sm">
                Your brain evolved for predators, not emails. Its core mission is to protect you&mdash;filtering everything through the lens of safety, sometimes at the cost of peace.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-cream text-lg font-semibold mb-3">
                75,000 Thoughts a Day
              </h3>
              <p className="text-cream/50 leading-relaxed text-sm">
                Your brain generates 60,000&ndash;75,000 thoughts daily. Idle time leads it to invent problems, increasing stress through persistent, pestering worry loops.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-cream text-lg font-semibold mb-3">
                85% Never Happen
              </h3>
              <p className="text-cream/50 leading-relaxed text-sm">
                Research shows that 85% of our worries never come true. Still, the emotional and physical toll of constant worry is very real&mdash;your body doesn&rsquo;t know the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The HPA Pathway ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              The Neuroscience
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-6">
              The HPA Pathway: Fight, Flight &amp; Hide
            </h2>
            <p className="text-cream/50 max-w-2xl mx-auto leading-relaxed">
              Your hypothalamic-pituitary-adrenal (HPA) axis is millions of years old. It evolved to manage real dangers like predators. Today, it fires in response to perceived threats that rarely require a survival response.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-gold font-heading text-xl font-bold mb-3">Fight</h3>
              <p className="text-cream/50 leading-relaxed text-sm">
                Goal-driven energy. Not always aggressive&mdash;&ldquo;fight&rdquo; means active pursuit. You&rsquo;re charged up and motivated, but the reward fades quickly after success, prompting the next challenge.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-gold font-heading text-xl font-bold mb-3">Flight</h3>
              <p className="text-cream/50 leading-relaxed text-sm">
                Driven by anxiety, this mode pushes you to avoid or escape. Often future-focused, it prepares you to flee even when the danger is only perceived&mdash;not real.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-gold font-heading text-xl font-bold mb-3">Hide</h3>
              <p className="text-cream/50 leading-relaxed text-sm">
                Not the same as clinical depression. It&rsquo;s a shutdown response for conserving energy when action seems futile&mdash;your survival system kicking in without your consent.
              </p>
            </div>
          </div>

          <div className="mt-16 glass-card p-8 md:p-10 text-center">
            <h3 className="text-cream font-heading text-xl font-bold mb-4">
              The Critical Insight
            </h3>
            <p className="text-cream/60 leading-relaxed max-w-2xl mx-auto">
              Your primitive brain prefers familiar situations&mdash;even unsafe ones&mdash;because predictability feels safer than the unknown. When activated, it speeds up thoughts, reduces oxygen to your brain, and prioritizes instinct over logic. Every emotional spike is a message from this ancient system urging you to act. S.T.O.I.C.K. gives you the tools to intercept that message and respond on your terms.
            </p>
          </div>
        </div>
      </section>

      {/* ── Distortions & Your Brain's Wiring ────────────────────── */}
      <section className="section-padding bg-navy-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              Understanding Distortions
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-6">
              Why your brain lies to you
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-cream text-lg font-semibold mb-3">
                The Pessimism Bias
              </h3>
              <p className="text-cream/50 leading-relaxed text-sm">
                Your brain naturally scans for threats and assumes the worst. It creates outcomes with minimal data, which often leads to exaggerated fears. This is not a character flaw&mdash;it&rsquo;s survival programming doing what it was designed to do.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-cream text-lg font-semibold mb-3">
                Distortion Loops
              </h3>
              <p className="text-cream/50 leading-relaxed text-sm">
                Thoughts that are repetitive and intrusive are often distortions. Worry becomes a feedback loop, keeping your HPA pathway active and your body in a state of chronic stress&mdash;even when no real threat exists.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-cream text-lg font-semibold mb-3">
                The Spotlight Effect
              </h3>
              <p className="text-cream/50 leading-relaxed text-sm">
                Our brains make us the star of our own show. We overestimate how much people are watching or judging us, while they&rsquo;re doing the exact same thing about themselves. This misfiring empathy creates self-conscious distortions.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-cream text-lg font-semibold mb-3">
                Language Shapes Emotion
              </h3>
              <p className="text-cream/50 leading-relaxed text-sm">
                Saying &ldquo;I am anxious&rdquo; makes the feeling part of your identity. Saying &ldquo;I feel anxious&rdquo; names it as a temporary state. Using &ldquo;will&rdquo; instead of &ldquo;can&rdquo; signals action and commitment, breaking the brain&rsquo;s problem-solving loops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Neuroplasticity Bridge ─────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-6">
            The good news: your brain can change.
          </h2>
          <p className="text-cream/50 leading-relaxed mb-6">
            Contrary to old beliefs, we now know the brain can grow new nerve cells&mdash;a process called neurogenesis. This means your thoughts and habits aren&rsquo;t fixed. With practice, you can rewire how your brain responds to stress.
          </p>
          <p className="text-cream/50 leading-relaxed">
            Neuroplasticity allows new mental routes to form. Repetition strengthens them, creating more resilient responses over time. Touch and breath are physical anchors that interrupt survival spirals and pull you into the present moment where your brain can&rsquo;t focus on perceived threats.
          </p>
          <p className="text-gold/80 text-lg font-heading mt-8 italic">
            That&rsquo;s exactly what S.T.O.I.C.K. is designed to do.
          </p>
        </div>
      </section>

      {/* ── The 6 Steps ──────────────────────────────────────────── */}
      <section className="section-padding bg-navy-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              The Method
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-4">
              Six steps to override your survival brain
            </h2>
            <p className="text-cream/50 max-w-2xl mx-auto leading-relaxed">
              Each step is grounded in neuroscience. Together, they form a repeatable practice that rewires reactive patterns into intentional responses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div
                key={step.letter}
                className="glass-card p-8 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <span className="text-gold font-heading text-2xl font-bold">
                    {step.letter}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gold">{step.icon}</span>
                  <h3 className="text-cream text-xl font-semibold">
                    {step.title}
                  </h3>
                </div>

                <p className="text-cream/50 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The 3 Rules ──────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              The Foundation
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-4">
              The 3 Rules
            </h2>
            <p className="text-cream/50 max-w-xl mx-auto leading-relaxed">
              A mindset for navigating life. These rules are the bedrock that S.T.O.I.C.K. is built on.
            </p>
          </div>

          <div className="space-y-6">
            {RULES.map((rule) => (
              <div
                key={rule.number}
                className="glass-card p-8 md:p-10 flex items-start gap-6 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-gold/10 border-2 border-gold/40 flex items-center justify-center">
                  <span className="text-gold font-heading text-2xl font-bold">
                    {rule.number}
                  </span>
                </div>
                <p className="text-cream text-lg md:text-xl leading-relaxed font-heading">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Putting It All Together ──────────────────────────────── */}
      <section className="section-padding bg-navy-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
            Emotional Awareness
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-6">
            Acting vs. Reacting
          </h2>
          <p className="text-cream/50 leading-relaxed mb-6">
            Suppressing emotions intensifies them. Your brain flags ignored warnings and keeps escalating until they&rsquo;re acknowledged. Don&rsquo;t fight the feeling&mdash;name it, observe it, and let it pass.
          </p>
          <p className="text-cream/50 leading-relaxed mb-6">
            Kind, thoughtful responses take more effort but align with your long-term well-being. Reactions often serve only short-term survival. When you reframe, you ask: &ldquo;What if the best outcome happened instead?&rdquo;
          </p>
          <p className="text-cream/50 leading-relaxed">
            Worry and appreciation cannot coexist. When you find something to appreciate, your survival brain quiets down. Appreciation energizes and motivates&mdash;it aligns your mindset with what you want, not what you fear.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-4">
            Ready to build mental wealth?
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto leading-relaxed mb-10">
            S.T.O.I.C.K. is one part of the Mental Wealth Solutions framework. Book a free consultation to explore how these tools can work for you.
          </p>
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
    </div>
  );
}
