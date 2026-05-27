const features = [
  {
    title: 'Complementary Skills Matching',
    description:
      'CoFounderMatch maps your strengths, blind spots, startup stage, and operating style, then surfaces partners whose skills close your highest-risk gaps.',
    icon: '◆',
  },
  {
    title: 'Verified & Trusted Profiles',
    description:
      'Every founder profile can include identity verification, work-history signals, references, and background checks before serious intros start.',
    icon: '◉',
  },
  {
    title: 'Equity Split Guidance',
    description:
      'Use fair equity templates, vesting structures, and legal-framework prompts built for early teams before awkward money talks derail momentum.',
    icon: '▰',
  },
];

const steps = [
  {
    number: '01',
    title: 'Create Profile',
    description:
      'Share your founder story, domain interests, skill depth, personality traits, work cadence, and non-negotiables.',
  },
  {
    number: '02',
    title: 'Get Matched',
    description:
      'AI ranks vetted co-founders by complementary skills, compatibility signals, shared vision, and execution readiness.',
  },
  {
    number: '03',
    title: 'Start Building',
    description:
      'Use guided intro questions, equity split templates, and collaboration checklists to move from first call to first sprint.',
  },
];

const stats = [
  'Trusted by 2,500+ aspiring founders',
  '87% match satisfaction rate',
  '1,200+ successful co-founder pairs',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white font-body text-cofounder-ink">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-cofounder-blue/10 bg-white/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-2xl font-black tracking-tight text-cofounder-blue">
            CoFounderMatch
          </a>
          <div className="hidden items-center gap-8 text-sm font-bold uppercase tracking-[0.18em] text-cofounder-blue/75 md:flex">
            <a className="transition hover:text-cofounder-green" href="#features">
              Features
            </a>
            <a className="transition hover:text-cofounder-green" href="#how-it-works">
              How It Works
            </a>
            <a className="rounded-full bg-cofounder-blue px-5 py-3 text-white shadow-card transition hover:bg-cofounder-green hover:text-cofounder-blue" href="#waitlist">
              Join Waitlist
            </a>
          </div>
          <a className="rounded-full bg-cofounder-green px-4 py-2 text-sm font-extrabold text-cofounder-blue shadow-glow md:hidden" href="#waitlist">
            Join
          </a>
        </div>
      </nav>

      <section id="top" className="relative isolate px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(0,200,83,0.20),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(26,35,126,0.16),transparent_32%),linear-gradient(135deg,#ffffff_0%,#ffffff_55%,#F5F5F5_100%)]" />
        <div className="absolute left-1/2 top-28 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-cofounder-blue/10 opacity-70" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cofounder-blue/15 bg-white px-4 py-2 text-sm font-extrabold text-cofounder-blue shadow-card">
              <span className="h-2.5 w-2.5 rounded-full bg-cofounder-green shadow-glow" />
              AI compatibility for serious founders
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.94] tracking-[-0.06em] text-cofounder-blue md:text-7xl lg:text-8xl">
              Find Your Perfect Co-Founder, Powered by AI.
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-cofounder-blue/76 md:text-xl">
              Our AI matches you with vetted co-founders based on complementary skills, personality compatibility, and shared vision. Stop searching. Start building.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#waitlist" className="group inline-flex items-center justify-center rounded-full bg-cofounder-green px-8 py-4 text-base font-black text-cofounder-blue shadow-glow transition hover:-translate-y-1 hover:shadow-card">
                Join the Waitlist
                <span className="ml-3 transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border-2 border-cofounder-blue px-8 py-4 text-base font-black text-cofounder-blue transition hover:bg-cofounder-blue hover:text-white">
                See matching logic
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-[2rem] bg-cofounder-green/25 blur-xl" />
            <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-cofounder-blue/15 blur-2xl" />
            <div className="relative rounded-[2.4rem] border border-cofounder-blue/12 bg-white p-5 shadow-card">
              <div className="rounded-[1.8rem] bg-cofounder-blue p-6 text-white">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-cofounder-green">Match score</p>
                    <p className="mt-1 font-display text-5xl font-black">94%</p>
                  </div>
                  <div className="rounded-full bg-white px-4 py-2 text-sm font-black text-cofounder-blue">Vetted</div>
                </div>
                <div className="mt-6 grid gap-4">
                  {['Product + AI strategy', 'Enterprise sales motion', 'High-conviction climate thesis'].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-cofounder-green font-black text-cofounder-blue">✓</span>
                      <span className="font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-cofounder-mist p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cofounder-blue/55">Skill gap</p>
                  <p className="mt-2 font-display text-3xl font-black text-cofounder-blue">Closed</p>
                </div>
                <div className="rounded-3xl bg-cofounder-green p-5 text-cofounder-blue">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cofounder-blue/65">Vision sync</p>
                  <p className="mt-2 font-display text-3xl font-black">High</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-cofounder-mist px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cofounder-green">Why founders switch</p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-cofounder-blue md:text-6xl">
              Founder search, rebuilt around trust, fit, and speed.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <article key={feature.title} className="group rounded-[2rem] border border-cofounder-blue/10 bg-white p-8 shadow-card transition hover:-translate-y-2">
                <div className="flex items-start justify-between">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-cofounder-blue font-display text-3xl text-cofounder-green transition group-hover:rotate-6 group-hover:bg-cofounder-green group-hover:text-cofounder-blue">
                    {feature.icon}
                  </span>
                  <span className="font-display text-5xl font-black text-cofounder-blue/10">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-3xl font-black leading-tight text-cofounder-blue">{feature.title}</h3>
                <p className="mt-5 text-base font-medium leading-8 text-cofounder-blue/70">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cofounder-green">How it works</p>
              <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-cofounder-blue md:text-6xl">
                Three moves from lonely founder to aligned founding team.
              </h2>
            </div>
            <div className="grid gap-5">
              {steps.map((step) => (
                <article key={step.number} className="grid gap-5 rounded-[2rem] border border-cofounder-blue/10 bg-cofounder-mist p-6 md:grid-cols-[120px_1fr] md:p-8">
                  <div className="font-display text-5xl font-black text-cofounder-green">{step.number}</div>
                  <div>
                    <h3 className="font-display text-3xl font-black text-cofounder-blue">{step.title}</h3>
                    <p className="mt-3 text-base font-medium leading-8 text-cofounder-blue/70">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cofounder-blue px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat} className="rounded-[2rem] border border-white/15 bg-white/8 p-8 backdrop-blur">
              <p className="font-display text-4xl font-black leading-tight text-white">{stat}</p>
              <div className="mt-6 h-1.5 w-24 rounded-full bg-cofounder-green" />
            </div>
          ))}
        </div>
      </section>

      <section id="waitlist" className="relative bg-cofounder-mist px-5 py-24 md:px-8">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-white p-7 shadow-card md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cofounder-green">Join waitlist</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-cofounder-blue md:text-6xl">
            Meet your highest-fit co-founder before your next sprint starts.
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-cofounder-blue/70">
            Get early access to AI-ranked founder matches, verified profiles, compatibility insights, and equity guidance for serious startup builders.
          </p>
          <form className="mt-9 grid gap-4 md:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" required placeholder="founder@startup.com" className="min-h-14 rounded-full border-2 border-cofounder-blue/15 bg-white px-6 text-base font-bold text-cofounder-blue outline-none transition placeholder:text-cofounder-blue/35 focus:border-cofounder-green focus:ring-4 focus:ring-cofounder-green/20" />
            <button type="submit" className="min-h-14 rounded-full bg-cofounder-green px-8 text-base font-black text-cofounder-blue shadow-glow transition hover:-translate-y-1 hover:bg-cofounder-blue hover:text-white">
              Join the Waitlist
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-white px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-cofounder-blue/10 pt-8 text-sm font-bold text-cofounder-blue/65 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-xl font-black text-cofounder-blue">CoFounderMatch</p>
          <p>© {new Date().getFullYear()} CoFounderMatch. Built for founders who build together.</p>
        </div>
      </footer>
    </main>
  );
}
