import Link from "next/link";
import Image from "next/image";

export default function PeoplePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 space-y-16">
      {/* Hero */}
      <section className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          People
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          The humans, the AI, and you
        </h1>
        <p className="text-lg text-neutral-300">
          Junova is a small team of senior operators plus an AI co-pilot, built
          for companies that want honest guidance and real outcomes. We don&apos;t
          believe in black-box consultants or hero managers. We build side by
          side with you, not on top of you.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/contact"
            className="rounded-full border border-emerald-400 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-400/10"
          >
            Meet the team (including you)
          </Link>
        </div>
      </section>

      {/* Our team + you */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">Our team + you</h2>
          <p className="text-neutral-300">
            We keep the org chart simple: a strategist, an operator, an AI
            engine, and you. You bring deep knowledge of your business. We bring
            pattern recognition, architecture, and the courage to say when the
            tools are the problem, not the people.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Nikki */}
          <article className="flex gap-4 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <div className="flex-shrink-0">
              {/* Replace /nicole.jpg with your actual file path in /public */}
              <Image
                src="/nicole.jpg"
                alt="Nicole Ronchetti"
                width={96}
                height={96}
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
            <div className="space-y-1 text-sm text-neutral-300">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Chaos Wrangler • Founder
              </p>
              <h3 className="text-base font-semibold text-white">
                Nicole &quot;Nikki&quot; Ronchetti
              </h3>
              <p>
                Vision-led strategist who turns messy ecosystems into coherent
                roadmaps. Two decades in ERP, integrations, and &quot;there has
                to be a better way&quot; conversations with SMBs.
              </p>
              <p className="text-xs text-neutral-400">
                Known for asking uncomfortable questions, defending end users,
                and shipping solutions instead of decks.
              </p>
            </div>
          </article>

          {/* Jess */}
          <article className="flex gap-4 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <div className="flex-shrink-0">
              {/* Replace /jess.jpg with your actual file path in /public */}
              <Image
                src="/jess.jpg"
                alt="Jessica DeAngelo"
                width={96}
                height={96}
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
            <div className="space-y-1 text-sm text-neutral-300">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                System Whisperer • Operations
              </p>
              <h3 className="text-base font-semibold text-white">
                Jessica DeAngelo
              </h3>
              <p>
                Ops-focused problem solver who makes tools behave and people&apos;s
                lives easier. Lives in the details where most projects quietly
                fall apart.
              </p>
              <p className="text-xs text-neutral-400">
                Known for translating big ideas into checklists, timelines, and
                &quot;we actually did the thing&quot; outcomes.
              </p>
            </div>
          </article>

          {/* Glitch */}
          <article className="flex gap-4 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/70 via-purple-500/70 to-sky-500/70 text-3xl font-bold text-white">
              G
            </div>
            <div className="space-y-1 text-sm text-neutral-300">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Pattern Hunter • AI Co-pilot
              </p>
              <h3 className="text-base font-semibold text-white">Glitch (AI)</h3>
              <p>
                AI system tuned for pattern-spotting, synthesis, and exploring
                options at machine speed. Helps us pressure-test designs before
                they land on your team.
              </p>
              <p className="text-xs text-neutral-400">
                Uncanny foresight, zero ego. Works best paired with human
                judgment and clear constraints.
              </p>
            </div>
          </article>

          {/* You */}
          <article className="flex gap-4 rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-4">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full border border-emerald-400/70 bg-neutral-950 text-3xl font-bold text-emerald-300">
              You
            </div>
            <div className="space-y-1 text-sm text-neutral-300">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Resident expert on your own business
              </p>
              <h3 className="text-base font-semibold text-white">
                You (the client)
              </h3>
              <p>
                You bring the context: customers, constraints, scars from past
                projects, and a sense of what &quot;better&quot; would actually
                feel like. We treat that as essential data, not background noise.
              </p>
              <p className="text-xs text-neutral-400">
                Our best work happens when you&apos;re in the loop, asking
                questions, pushing back, and co-designing the future state with
                us.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* How we work with you */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
            How we work with you
          </h2>
          <p className="text-neutral-300">
            We&apos;re not here to tell your team to &quot;work smarter&quot;
            while keeping the same broken systems. We are here to listen,
            surface what&apos;s actually happening, and design something that
            doesn&apos;t require heroics to run.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 text-sm text-neutral-300">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="font-semibold text-white">Listening without blame</p>
            <p className="mt-1 text-neutral-400">
              We sit with the people doing the work and ask where things break,
              stall, or require &quot;ignore that field&quot; instructions. The
              goal is understanding, not finger-pointing.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="font-semibold text-white">Telling the truth about tools</p>
            <p className="mt-1 text-neutral-400">
              If the software is the problem, we say so. If the process is the
              problem, we say that too. Often it&apos;s both. Either way, it&apos;s
              fixable.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="font-semibold text-white">Designing with AI in the loop</p>
            <p className="mt-1 text-neutral-400">
              We bring AI into the process once the real-world flow is clear,
              using it to reduce repetition, surface insights, and give your
              team better options in the moment.
            </p>
          </div>
        </div>
      </section>

      {/* Culture manifesto */}
      <section className="space-y-4 border-t border-neutral-900 pt-10">
        <h2 className="text-2xl font-semibold text-white">Culture manifesto</h2>
        <p className="text-neutral-300">
          The way we work with you matters as much as the systems we design.
          These are the lines we don&apos;t cross.
        </p>

        <ul className="space-y-2 text-sm text-neutral-300">
          <li>• People first. Tools second.</li>
          <li>• No dark incentives. No hidden agendas.</li>
          <li>• Clarity beats complexity. Outcomes beat outputs.</li>
          <li>• Speed with integrity. Autonomy with accountability.</li>
          <li>• Curiosity over defensiveness. Questions over buzzwords.</li>
        </ul>

        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-emerald-400 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-400/10"
          >
            Work with us as part of the team
          </Link>
        </div>
      </section>
    </main>
  );
}
