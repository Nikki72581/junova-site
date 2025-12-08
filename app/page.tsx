import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 space-y-16">
      {/* Hero */}
      <section className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Independent ERP + AI Consulting
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Independent. Uncompromised. Unowned.
        </h1>
        <p className="text-lg text-neutral-300">
          Junova is your rebel CIO-for-hire: senior product and ops minds plus
          an AI co-pilot, focused on making your systems serve the business
          instead of the publishers. No kickbacks. No quotas. Just clear
          language, honest tradeoffs, and outcomes that hold up in real life.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/contact"
            className="rounded-full border border-emerald-400 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-400/10"
          >
            Talk to a rebel CIO
          </Link>
          <Link
            href="/product"
            className="rounded-full border border-neutral-700 px-5 py-2 text-sm font-medium text-neutral-300 transition hover:bg-neutral-900"
          >
            Explore what we build
          </Link>
        </div>
      </section>

      {/* Three pillars: People / Processes / Product */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
            People. Processes. Product.
          </h2>
          <p className="text-neutral-300">
            Technology change fails when it forgets the humans, ignores the
            actual workflow, or treats systems like they&apos;re immovable. We
            work across all three: the people doing the work, the flow of that
            work, and the stack underneath it.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/people"
            className="group flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 transition hover:border-emerald-400/60 hover:bg-neutral-900/60"
          >
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                People
              </p>
              <h3 className="text-sm font-semibold text-white">
                Humans first. Senior minds who can ship.
              </h3>
              <p className="mt-1 text-xs text-neutral-400">
                A small team, an AI co-pilot, and you — working as one team, not
                an outside committee.
              </p>
            </div>
            <span className="mt-3 text-xs font-medium text-emerald-300 group-hover:underline">
              Meet the team
            </span>
          </Link>

          <Link
            href="/processes"
            className="group flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 transition hover:border-emerald-400/60 hover:bg-neutral-900/60"
          >
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Processes
              </p>
              <h3 className="text-sm font-semibold text-white">
                Methods built for momentum, not burnout.
              </h3>
              <p className="mt-1 text-xs text-neutral-400">
                We listen to the people in the blast radius, fix broken flows,
                and make change feel safe.
              </p>
            </div>
            <span className="mt-3 text-xs font-medium text-emerald-300 group-hover:underline">
              See how we fix processes
            </span>
          </Link>

          <Link
            href="/product"
            className="group flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 transition hover:border-emerald-400/60 hover:bg-neutral-900/60"
          >
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Product
              </p>
              <h3 className="text-sm font-semibold text-white">
                Systems that scale without handcuffs.
              </h3>
              <p className="mt-1 text-xs text-neutral-400">
                ERP, integrations, and web experiences tuned to your reality,
                not a publisher&apos;s fantasy roadmap.
              </p>
            </div>
            <span className="mt-3 text-xs font-medium text-emerald-300 group-hover:underline">
              Explore the stack
            </span>
          </Link>
        </div>
      </section>

      {/* Rebel CIO / cutting through the BS */}
      <section className="space-y-6 border-t border-neutral-900 pt-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
            A rebel CIO-for-hire for the SMB reality
          </h2>
          <p className="text-neutral-300">
            Most growing companies can&apos;t justify a full-time CIO, but
            they&apos;ve outgrown &quot;call the VAR when something breaks.&quot;
            Junova fills that gap: strategic enough to see the whole system,
            practical enough to fix what&apos;s in front of you.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 text-sm text-neutral-300">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="font-semibold text-white">Cutting through the B.S.</p>
            <p className="mt-1 text-neutral-400">
              We help you see past vendor theater, inflated SLAs, and buzzword
              decks. You get clear, plain-language views of what works, what
              doesn&apos;t, and what it will actually take to change it.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="font-semibold text-white">
              Strategy that survives contact with reality
            </p>
            <p className="mt-1 text-neutral-400">
              We don&apos;t hand you a glossy roadmap and disappear. We design
              around your constraints: budgets, staff capacity, existing
              contracts, and the fact that business doesn&apos;t pause so you
              can replatform.
            </p>
          </div>
        </div>
      </section>

      {/* Where we help most */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
            Where we help the most
          </h2>
          <p className="text-neutral-300">
            We live at the intersection of ERP, operations, and modern web +
            AI. If it sits in that overlap, we&apos;re likely a good fit.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 text-sm text-neutral-300">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="font-semibold text-white">
              Untangling ERP and integrations
            </p>
            <p className="mt-1 text-neutral-400">
              Sage 100, Acumatica, Dynamics 365 BC and the reporting, scripts,
              and integrations tied to them. We reduce swivel-chair work,
              shrink the number of fragile handoffs, and give you a cleaner base
              to evolve from.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="font-semibold text-white">
              Redesigning processes that punish people
            </p>
            <p className="mt-1 text-neutral-400">
              If your smartest people are exhausted by basic tasks, something is
              wrong with the process or the tools. We listen to the people doing
              the work, map reality, and design flows that are survivable.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="font-semibold text-white">
              Modern experiences on top of legacy
            </p>
            <p className="mt-1 text-neutral-400">
              Focused web experiences that surface the right data from ERP and
              line-of-business systems without dragging users through ten
              confusing screens.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="font-semibold text-white">
              AI that actually fits how you work
            </p>
            <p className="mt-1 text-neutral-400">
              We apply AI after we understand your process: to reduce manual
              entry, highlight exceptions, summarize complexity, and keep
              documentation up to date — not just to sprinkle &quot;AI&quot;
              on the slide.
            </p>
          </div>
        </div>
      </section>

      {/* Independence / anti-VAR stance */}
      <section className="space-y-6 border-t border-neutral-900 pt-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
            Not a VAR. Not for sale.
          </h2>
          <p className="text-neutral-300">
            We don&apos;t sell licenses. We don&apos;t take referral fees. We
            don&apos;t quietly optimize for a publisher&apos;s channel strategy.
            Our loyalty is to your team, your customers, and your future
            optionality.
          </p>
        </div>

        <ul className="space-y-2 text-sm text-neutral-300">
          <li>• No publisher quotas. No reseller margins in the background.</li>
          <li>• Recommendations based on fit, not incentives.</li>
          <li>• Architectures designed so you can change direction later.</li>
          <li>• Transparent about tradeoffs, including “do nothing” when it&apos;s right.</li>
        </ul>
      </section>

      {/* Final CTA */}
      <section className="space-y-4 border-t border-neutral-900 pt-10">
        <h2 className="text-2xl font-semibold text-white">
          If you feel like something&apos;s off, you&apos;re probably right.
        </h2>
        <p className="text-neutral-300">
          Maybe your ERP feels heavier than it should. Maybe every &quot;small
          change&quot; turns into a saga. Maybe your team is holding the system
          together with spreadsheets and screenshots. None of that is a moral
          failing. It&apos;s a design problem.
        </p>
        <p className="text-sm text-neutral-400">
          Bring us the mess. We&apos;ll bring pattern recognition, candor, and a
          path forward.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/contact"
            className="rounded-full border border-emerald-400 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-400/10"
          >
            Start a conversation
          </Link>
          <Link
            href="/people"
            className="rounded-full border border-neutral-700 px-5 py-2 text-sm font-medium text-neutral-300 transition hover:bg-neutral-900"
          >
            Meet the people you&apos;ll work with
          </Link>
        </div>
      </section>
    </main>
  );
}
