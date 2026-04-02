const contactLinks = [
  {
    label: "LinkedIn",
    value: "nicole-ronchetti-65242523",
    href: "https://www.linkedin.com/in/nicole-ronchetti-65242523/",
    description: "Connect and follow along",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Medium",
    value: "@nicole_68130",
    href: "https://medium.com/@nicole_68130",
    description: "Articles on ERP, AI, and building",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "Nikki72581",
    href: "https://github.com/Nikki72581",
    description: "Projects and open source work",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    label: "Email",
    value: "nicole@junova.io",
    href: "mailto:nicole@junova.io",
    description: "For anything else",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-2xl px-4 py-14 md:py-20">
        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300/80 uppercase">
          Get in touch
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Say Hi</h1>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]" />
        <p className="mt-5 text-sm text-slate-300 md:text-base">
          Whether it&rsquo;s about ERP, a project idea, or just to connect — here&rsquo;s where to find me.
        </p>

        {/* Contact links */}
        <div className="mt-10 flex flex-col gap-4">
          {contactLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-900/40 px-6 py-5 hover:border-slate-600 transition"
            >
              <span className="text-slate-400 group-hover:text-emerald-300 transition flex-shrink-0">
                {link.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  {link.label}
                </p>
                <p className="text-base font-medium text-white truncate">{link.value}</p>
                <p className="text-sm text-slate-400">{link.description}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-600 group-hover:text-slate-400 transition flex-shrink-0"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
