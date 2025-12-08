import Link from "next/link";

export default function ProcessesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-16">
      {/* Hero */}
      <section className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Processes
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Processes that don&apos;t punish people
        </h1>
        <p className="text-lg text-neutral-300">
          If your team needs to be a superhero just to get through a workday,
          the problem isn&apos;t your people. It&apos;s the process and the
          systems wrapped around it. Junova helps redesign the way work flows so
          that humans can stop fighting their tools and start doing their jobs.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/contact"
            className="rounded-full border border-emerald-400 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-400/10"
          >
            Talk about your processes
          </Link>
        </div>
      </section>

      {/* We start where the work happens */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
            We start where the work actually happens
          </h2>
          <p className="text-neutral-300">
            Good process design doesn&apos;t start in a boardroom. It starts
            with the people clicking through ten screens to complete one task,
            reconciling systems by hand, or inventing their own spreadsheets
            just to survive.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <h3 className="text-sm font-semibold text-white">
              Listen before we prescribe
            </h3>
            <p className="text-sm text-neutral-300">
              We sit with the folks doing the work: AR clerks, warehouse leads,
              project managers, customer service, operations. We listen for the
              friction, the workarounds, and the “don&apos;t tell anyone we do
              it this way” moments.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <h3 className="text-sm font-semibold text-white">
              Blame systems, not individuals
            </h3>
            <p className="text-sm text-neutral-300">
              When smart people are struggling, it&apos;s usually a sign the
              software or process is wrong for the job. We treat errors and
              slowdowns as design problems, not performance reviews.
            </p>
          </div>
        </div>
      </section>

      {/* Our process for your processes */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
            Our process for fixing processes
          </h2>
          <p className="text-neutral-300">
            The goal is simple: make it easier to do the right thing than the
            old thing. We combine interviews, workflow mapping, and smart use of
            AI to redesign how work moves across your systems.
          </p>
        </div>

        <ol className="space-y-4 text-sm text-neutral-300">
          <li className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              1. Listen &amp; observe
            </p>
            <p className="mt-1">
              We run structured sessions with the people who actually touch the
              process. What tools are they avoiding? Where do they copy and
              paste the same thing five times? What does a “bad day” look like?
            </p>
          </li>

          <li className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              2. Map reality, not fantasy SOPs
            </p>
            <p className="mt-1">
              Together, we map how work really flows today: systems, handoffs,
              approvals, delays. We surface the gap between the official
              process and the one your team actually follows to get things done.
            </p>
          </li>

          <li className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              3. Redesign the flow
            </p>
            <p className="mt-1">
              Sometimes the answer is a small change to a screen or step.
              Sometimes it&apos;s adjusting roles or cutting out unnecessary
              approvals. Sometimes it&apos;s admitting the software can&apos;t
              do what you need without help. We&apos;re honest about all three.
            </p>
          </li>

          <li className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              4. Apply AI where it actually helps
            </p>
            <p className="mt-1">
              Only after we understand the process do we bring in AI. That can
              mean reducing manual data entry, summarizing complex cases, flagging
              exceptions, or supporting decision-making so your team isn&apos;t
              doing the same cognitive heavy lifting all day.
            </p>
          </li>

          <li className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              5. Make change feel safe
            </p>
            <p className="mt-1">
              New processes fail when people feel exposed or blamed. We focus on
              clear communication, training, and updates that respect real
              constraints: time, energy, and learning curves.
            </p>
          </li>
        </ol>
      </section>

      {/* Principles */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
            Principles we don&apos;t compromise on
          </h2>
          <p className="text-neutral-300">
            This isn&apos;t about forcing everyone to &quot;be more
            efficient.&quot; It&apos;s about designing processes that treat
            humans like humans and technology like a tool, not the other way
            around.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 text-sm text-neutral-300">
            <p className="font-semibold text-white">If it&apos;s too hard, it&apos;s badly designed.</p>
            <p className="text-neutral-400">
              “They just need more training” is often code for “this system is
              hostile.” We look for ways to remove friction instead of adding
              more manuals.
            </p>
          </div>

          <div className="space-y-1 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 text-sm text-neutral-300">
            <p className="font-semibold text-white">Questions are a feature, not a problem.</p>
            <p className="text-neutral-400">
              It should be safe to say: this step makes no sense, this screen is
              confusing, this approval adds no value. Those conversations are
              where the good ideas live.
            </p>
          </div>

          <div className="space-y-1 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 text-sm text-neutral-300">
            <p className="font-semibold text-white">
              AI is a co-worker, not a replacement plan.
            </p>
            <p className="text-neutral-400">
              We use AI to extend your team&apos;s capacity: less copy-paste,
              fewer repetitive decisions, more time on judgment and relationships.
            </p>
          </div>

          <div className="space-y-1 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 text-sm text-neutral-300">
            <p className="font-semibold text-white">
              Your future optionality matters.
            </p>
            <p className="text-neutral-400">
              Processes shouldn&apos;t lock you into one vendor or one way of
              working. We design with change in mind so you can evolve without
              ripping everything out.
            </p>
          </div>
        </div>
      </section>

      {/* Where AI fits in your processes */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
            Where AI fits into all of this
          </h2>
          <p className="text-neutral-300">
            Once we&apos;ve clarified the process, AI becomes a powerful tool:
            not as a buzzword, but as a way to lighten cognitive load and reduce
            repetitive work.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 text-sm text-neutral-300">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="font-semibold text-white">Pattern spotting</p>
            <p className="mt-1 text-neutral-400">
              Identify where things consistently stall, bounce, or get sent
              back. Use data to highlight what your team already knows anecdotally.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="font-semibold text-white">Guided work</p>
            <p className="mt-1 text-neutral-400">
              Help people through complex steps with context-aware checklists,
              suggestions, and validations instead of relying on tribal memory.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="font-semibold text-white">Documentation that updates</p>
            <p className="mt-1 text-neutral-400">
              Use AI to keep process docs current as you refine flows, so your
              &quot;how we do things&quot; isn&apos;t trapped in someone&apos;s
              head or a stale PDF.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-4 border-t border-neutral-900 pt-10">
        <h2 className="text-2xl font-semibold text-white">
          Bring your mess. We&apos;ll bring structure.
        </h2>
        <p className="text-neutral-300">
          If your processes feel fragile, exhausting, or held together by a few
          heroic people, something is off. It&apos;s fixable. And you don&apos;t
          have to figure it out alone.
        </p>
        <p className="text-sm text-neutral-400">
          We&apos;ll sit down with your team, listen without judgment, and
          design a better way of working — supported by technology and AI that
          actually fits how your business runs.
        </p>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-emerald-400 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-400/10"
          >
            Start a process conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
