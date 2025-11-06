"use client";
export default function People() {
  const team = [
    { name: "Nikki R", role: "Chaos Wrangler", bio: "Vision-led strategist. Turns complex into simple and shippable." },
    { name: "Jess D", role: "System Whisperer", bio: "Ops architect. Makes tools behave and teams move faster." },
    { name: "Glitch (AI)", role: "Pattern Hunter", bio: "Sees around corners. Uncanny foresight without the ego." },
  ];
  return (<section className="container-lg py-20">
    <div className="card p-10"><h1 className="text-4xl font-bold">The Humans Behind the Code</h1>
      <p className="mt-3 text-white/70 max-w-3xl">We are senior operators who care about outcomes. We don’t take kickbacks. We don’t sell licenses. We act as your independent partner to design systems that serve people first.</p>
    </div>
    <div className="mt-10 grid md:grid-cols-3 gap-6">
      {team.map(m => (<div key={m.name} className="card p-8">
        <div className="h-28 w-28 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold">{m.name.split(" ").map(n=>n[0]).join("")}</div>
        <h3 className="mt-4 text-2xl font-bold">{m.name}</h3><p className="text-white/70">{m.role}</p><p className="mt-2 text-white/70">{m.bio}</p>
      </div>))}
    </div>
    <div className="mt-10 card p-8"><h2 className="text-2xl font-bold">Culture Manifesto</h2>
      <ul className="mt-3 space-y-2 text-white/80 list-disc pl-6"><li>People first. Tools second.</li><li>No dark incentives. No hidden agendas.</li><li>Clarity beats complexity. Outcomes beat outputs.</li><li>Speed with integrity. Autonomy with accountability.</li></ul>
    </div>
  </section>);
}