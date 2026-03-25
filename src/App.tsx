function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <nav className="sticky top-0 z-50 border-b border-amber-700/20 bg-neutral-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-400 text-sm font-bold text-black">
              GA
            </span>
            <span>
              <span className="block text-xl font-semibold tracking-tight">
                Go<span className="text-amber-400">Automatic</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                by NAIM Agency
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a href="#problem" className="transition hover:text-white">
              The Problem
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#nextstep" className="transition hover:text-white">
              NextStep
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
          </div>

          <a
            href="https://wa.me/254751772123?text=Hi%20NAIM%20Agency%2C%20I%20want%20to%20automate%20my%20business."
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500"
          >
            WhatsApp Me
          </a>
        </div>
      </nav>

      <main id="top">
        <section className="border-b border-white/10 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-amber-400">
              AI Automation for Every Business — NAIM Agency
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              From Inquiry
              <br />
              To Automatic
              <br />
              Growth.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300">
              We turn the repetitive daily tasks draining your business into fully automated
              systems — so you stop doing the same work every day and start growing on autopilot.
            </p>

            <ul className="mt-8 space-y-2 text-sm text-neutral-200 md:text-base">
              <li>• Every customer question answered instantly — 24/7, no staff needed</li>
              <li>
                • Daily content created and posted automatically — Instagram, TikTok, Facebook
              </li>
              <li>
                • Every new lead guided, followed up, and converted — without you chasing anyone
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/254751772123?text=Hi%20NAIM%20Agency%2C%20I%20want%20to%20automate%20my%20business."
                className="rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
              >
                💬 WhatsApp for a Free 15-Min Call
              </a>
              <a
                href="#problem"
                className="rounded-md border border-amber-700/30 px-5 py-3 text-sm text-amber-300 transition hover:bg-amber-500/10"
              >
                See What We Build →
              </a>
            </div>
            <p className="mt-3 text-xs text-neutral-400">
              In 15 minutes, we review your current workflow and outline your fastest automation wins.
            </p>

            <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 text-center text-sm sm:grid-cols-2 md:grid-cols-4">
              <div>
                <p className="text-3xl font-semibold text-amber-400">24/7</p>
                <p className="mt-1 text-neutral-400">Automated First-Response Coverage</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-amber-400">2–5h</p>
                <p className="mt-1 text-neutral-400">Weekly Admin Time Saved*</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-amber-400">&lt;5m</p>
                <p className="mt-1 text-neutral-400">Typical First Response Time*</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-amber-400">+1</p>
                <p className="mt-1 text-neutral-400">Reliable Follow-Up System</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              *Estimates vary by business type, lead volume, and current process setup.
            </p>
          </div>
        </section>

        <section id="services" className="border-b border-white/10 bg-neutral-900 py-4">
          <div className="mx-auto max-w-6xl overflow-x-auto px-6">
            <div className="flex min-w-max items-center gap-6 text-xs uppercase tracking-widest text-neutral-400">
              <span>Dental Clinics</span>
              <span>•</span>
              <span>Eye & Optical</span>
              <span>•</span>
              <span>SACCOs & Microfinance</span>
              <span>•</span>
              <span>Real Estate</span>
              <span>•</span>
              <span>Gyms & Fitness</span>
              <span>•</span>
              <span>Restaurants</span>
            </div>
          </div>
        </section>

        <section id="problem" className="bg-neutral-950 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-400">From Manual to Automatic</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                Same Business. Less Stress.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
                This is what changes when GoAutomatic goes live inside your business.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-start">
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                <h3 className="mb-4 text-xs uppercase tracking-[0.16em] text-red-300">Before GoAutomatic</h3>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li>💬 Staff repeat the same answers across WhatsApp every day.</li>
                  <li>⏳ New leads wait too long before the first useful response.</li>
                  <li>📱 Follow-up and posting happen inconsistently when things get busy.</li>
                </ul>
              </div>

              <div className="hidden place-items-center md:grid">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-xl font-bold text-black">
                  →
                </div>
              </div>

              <div className="rounded-xl border border-amber-600/30 bg-amber-500/10 p-6">
                <h3 className="mb-4 text-xs uppercase tracking-[0.16em] text-amber-300">After GoAutomatic</h3>
                <ul className="space-y-3 text-sm text-neutral-100">
                  <li>🤖 Common questions get fast, consistent replies automatically.</li>
                  <li>⚡ Leads are acknowledged quickly and routed to the right next step.</li>
                  <li>📲 Core follow-up and content tasks run on a dependable schedule.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="nextstep" className="border-t border-white/10 bg-neutral-900/40 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-400">
                NextStep — Inside GoAutomatic
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
                From Inquiry to
                <br />
                Confirmed Next Step.
              </h2>
              <p className="mt-5 text-neutral-300">
                Most businesses lose clients not because their service is bad — but because the path
                from &quot;I&apos;m interested&quot; to &quot;I&apos;m booked&quot; is confusing and broken.
                NextStep fixes that gap automatically.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-xl border border-white/10 bg-neutral-950 p-6">
                <p className="text-3xl font-semibold text-amber-400">1</p>
                <h3 className="mt-3 text-lg font-semibold text-white">Someone Shows Interest</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  A patient, client, or customer clicks your WhatsApp link, sends a DM, or fills a
                  form. Instead of confusion — they enter one clean guided path.
                </p>
              </article>

              <article className="rounded-xl border border-white/10 bg-neutral-950 p-6">
                <p className="text-3xl font-semibold text-amber-400">2</p>
                <h3 className="mt-3 text-lg font-semibold text-white">Smart Questions Asked</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  NextStep asks 3–6 smart questions. Which branch? What service? Urgent or not?
                  Documents ready? It collects exactly what the business needs — nothing more.
                </p>
              </article>

              <article className="rounded-xl border border-white/10 bg-neutral-950 p-6">
                <p className="text-3xl font-semibold text-amber-400">3</p>
                <h3 className="mt-3 text-lg font-semibold text-white">Routed to the Right Person</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  The inquiry is sent to the right desk, branch, or department — with clean
                  information ready. Staff never start from zero again.
                </p>
              </article>

              <article className="rounded-xl border border-white/10 bg-neutral-950 p-6">
                <p className="text-3xl font-semibold text-amber-400">4</p>
                <h3 className="mt-3 text-lg font-semibold text-white">Followed Up Automatically</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  If the person stops halfway, NextStep sends a reminder. No lead falls through. No
                  client gets lost. Every inquiry reaches its next step — automatically.
                </p>
              </article>
            </div>

            <div className="mt-14">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                NextStep Works in Every Niche
              </h3>
              <p className="mt-3 max-w-3xl text-neutral-300">
                The same engine. Different pain. Different niche. One solution that scales across
                every industry.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <article className="rounded-xl border border-amber-700/20 bg-amber-500/5 p-5">
                  <p className="text-2xl">🦷</p>
                  <h4 className="mt-3 text-base font-semibold text-white">Dental Clinic</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Patient inquiry → which branch? → what treatment? → preferred date → confirmed
                    appointment booked automatically
                  </p>
                </article>

                <article className="rounded-xl border border-amber-700/20 bg-amber-500/5 p-5">
                  <p className="text-2xl">💳</p>
                  <h4 className="mt-3 text-base font-semibold text-white">SACCO / Microfinance</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Loan enquiry → BOSA or FOSA? → loan type? → amount? → documents ready? → sent to
                    right desk with clean file
                  </p>
                </article>

                <article className="rounded-xl border border-amber-700/20 bg-amber-500/5 p-5">
                  <p className="text-2xl">🏠</p>
                  <h4 className="mt-3 text-base font-semibold text-white">Real Estate</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Property interest → budget? → location? → buy or rent? → timeline? → qualified
                    lead sent to agent instantly
                  </p>
                </article>

                <article className="rounded-xl border border-amber-700/20 bg-amber-500/5 p-5">
                  <p className="text-2xl">🏨</p>
                  <h4 className="mt-3 text-base font-semibold text-white">Hotel / Hospitality</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Guest inquiry → dates? → room type? → guests? → special needs? → confirmed
                    booking or staff callback scheduled
                  </p>
                </article>

                <article className="rounded-xl border border-amber-700/20 bg-amber-500/5 p-5">
                  <p className="text-2xl">🎓</p>
                  <h4 className="mt-3 text-base font-semibold text-white">School / Training</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Parent inquiry → which program? → age? → start date? → application automatically
                    sent and followed up
                  </p>
                </article>

                <article className="rounded-xl border border-amber-700/20 bg-amber-500/5 p-5">
                  <p className="text-2xl">💪</p>
                  <h4 className="mt-3 text-base font-semibold text-white">Gym / Fitness</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Membership inquiry → which location? → goal? → schedule? → class type? →
                    enrollment confirmed in one flow
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="h-0 overflow-hidden" aria-hidden="true" />
      </main>

      <footer className="border-t border-white/10 bg-neutral-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xl font-semibold text-white">
              Go<span className="text-amber-400">Automatic</span>
            </p>
            <p className="mt-2 max-w-md text-sm text-neutral-400">
              Practical automation for small businesses that want faster response times and steadier follow-up.
            </p>
          </div>
          <p className="text-xs text-neutral-500">© 2025 GoAutomatic by NAIM Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
