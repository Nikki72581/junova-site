import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicole-ronchetti-65242523/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Medium",
    href: "https://medium.com/@nicole_68130",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Nikki72581",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nicoleronchetti/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

const featuredCards = [
  {
    eyebrow: "LATEST WRITING",
    title: "Thoughts on ERP, AI, and the people caught in between",
    description: "Articles on ERP consulting, AI-augmented workflows, and building technology that actually serves people.",
    href: "/writing",
    linkLabel: "Read the writing →",
  },
  {
    eyebrow: "FEATURED PROJECT",
    title: "CommissionFlow",
    description: "SaaS platform for managing VAR sales commissions and residual revenue tracking — built to solve a real problem in the Acumatica channel.",
    href: "/projects",
    linkLabel: "See the projects →",
  },
  {
    eyebrow: "CONNECT",
    title: "LinkedIn & Medium",
    description: "Where I share takes on ERP, AI, and building. Follow along or just come say hi.",
    href: "https://www.linkedin.com/in/nicole-ronchetti-65242523/",
    linkLabel: "Find me on LinkedIn →",
    external: true,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        {/* Glow background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative h-[480px] w-[480px] opacity-60">
            <Image
              src="/junova-robot-glow.png"
              alt=""
              fill
              className="object-contain blur-[1px]"
            />
          </div>
        </div>

        {/* Radial overlay for depth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(46,213,167,0.15),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(81,69,255,0.15),_transparent_60%)]" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center md:py-28">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300/80 uppercase">
            Senior Consultant at Stellar One · Founder of Junova
          </p>

          <h1 className="mt-5 text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            Nicole Ronchetti
          </h1>

          <p className="mt-4 text-lg text-emerald-300/90 font-medium md:text-xl">
            Acumatica consultant, builder, writer.
          </p>

          <p className="mt-6 max-w-2xl text-sm text-slate-300 md:text-base leading-relaxed">
            I&rsquo;ve spent years in the ERP world from every angle — end user, consultant,
            VAR-side, ISV-side, product leadership. Now I&rsquo;m a Senior Consultant at{" "}
            <a href="https://www.stellarone.io/" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 transition">
              Stellar One
            </a>{" "}
            and founder of{" "}
            <a href="/" className="text-emerald-300 hover:text-emerald-200 transition">
              Junova
            </a>
            , where I build SaaS tools and write about the intersection of ERP, AI, and how people actually work.
          </p>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-4">
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/50 hover:text-white transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED LINKS */}
      <section className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <p className="text-xs font-semibold tracking-[0.24em] text-emerald-300/90 uppercase">
          What I&apos;m doing
        </p>

        <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]" />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredCards.map(card => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col"
            >
              <p className="text-xs font-semibold tracking-wide text-emerald-300/80 uppercase">
                {card.eyebrow}
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-snug">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-300 flex-1">{card.description}</p>
              {card.external ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 text-sm text-emerald-300 hover:text-emerald-200 transition font-medium"
                >
                  {card.linkLabel}
                </a>
              ) : (
                <Link
                  href={card.href}
                  className="mt-5 text-sm text-emerald-300 hover:text-emerald-200 transition font-medium"
                >
                  {card.linkLabel}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
