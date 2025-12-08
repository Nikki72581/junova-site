// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        {/* Glow background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative h-[480px] w-[480px] opacity-80">
            <Image
              src="/junova-robot-glow.png"
              alt=""
              fill
              className="object-contain blur-[1px]"
            />
          </div>
        </div>

        {/* Radial overlay for depth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(46,213,167,0.2),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(81,69,255,0.2),_transparent_60%)]" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center md:py-28">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300/80">
            INDEPENDENT ERP + AI CONSULTING
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Independent.
            <br />
            Uncompromised.
            <br />
          
              Unowned.
            
          </h1>

          <p className="mt-5 max-w-2xl text-sm text-slate-300 md:text-base">
            We don&apos;t sell software. We build freedom. Senior product and ops
            minds plus an AI co-pilot, working only for you &mdash; not the
            publishers.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6E3AFF] via-[#4E6FEF] to-[#21D07A] px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:brightness-110"
            >
              Get Started
            </a>
            <a
              href="#who-we-are"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-950/60 px-7 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-400"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE ARE / 3 PILLARS PREVIEW */}
      <section
        id="who-we-are"
        className="mx-auto max-w-5xl px-4 py-14 md:py-20"
      >
        <p className="text-xs font-semibold tracking-[0.24em] text-emerald-300/90">
          WHO WE ARE
        </p>

        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]">
          {" "}
          <span className="mt-4 text-3xl font-semibold md:text-4xl">
            People.Processes.Product.
          </span>
        </h2>

        <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]" />

        <p className="mt-5 max-w-2xl text-sm text-slate-300 md:text-base">
          Technology change fails when it forgets the humans, ignores the
          actual workflow, or treats systems like they’re immovable. We work
          across all three: the people doing the work, the flow of that work,
          and the stack underneath it.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <p className="text-xs font-semibold tracking-wide text-emerald-300/80">
              PEOPLE
            </p>
            <h3 className="mt-2 text-lg font-semibold">Humans first.</h3>
            <p className="mt-2 text-sm text-slate-300">
              Senior minds who can ship. One team: you, us, and a slightly
              judgmental AI co-pilot.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <p className="text-xs font-semibold tracking-wide text-emerald-300/80">
              PROCESSES
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              Methods built for momentum.
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              We listen to the people in the blast radius and redesign the
              flows that punish them.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <p className="text-xs font-semibold tracking-wide text-emerald-300/80">
              PRODUCT
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              Systems without handcuffs.
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              ERP, integrations, and web experiences tuned to your reality, not
              a publisher&apos;s quota sheet.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
