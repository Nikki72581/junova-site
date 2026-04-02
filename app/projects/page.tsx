import { projects, type ProjectStatus } from "./projects";

const statusStyles: Record<ProjectStatus, { label: string; classes: string }> = {
  Active: {
    label: "Active",
    classes: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  },
  Shipped: {
    label: "Shipped",
    classes: "bg-[#4E6FEF]/15 text-[#93c5fd] border border-[#4E6FEF]/30",
  },
  "Open Source": {
    label: "Open Source",
    classes: "bg-[#6E3AFF]/15 text-[#c4b5fd] border border-[#6E3AFF]/30",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300/80 uppercase">
          Portfolio
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Projects</h1>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]" />
        <p className="mt-5 max-w-2xl text-sm text-slate-300 md:text-base">
          Things I&rsquo;ve built — solo, with AI, and in between.
        </p>

        {/* Project cards */}
        <div className="mt-12 flex flex-col gap-8">
          {projects.map(project => {
            const status = statusStyles[project.status];
            return (
              <div
                key={project.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 md:p-8"
              >
                <div className="flex flex-wrap items-start gap-3 justify-between">
                  <h2 className="text-2xl font-semibold">{project.name}</h2>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${status.classes}`}>
                    {status.label}
                  </span>
                </div>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.githubUrl || project.liveUrl) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-700 text-sm text-slate-300 hover:border-slate-500 hover:text-white transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#6E3AFF] to-[#21D07A] text-sm text-white font-medium hover:brightness-110 transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Site
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
