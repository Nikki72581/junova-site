"use client";
import Link from "next/link";
export default function Product() {
  return (<section className="container-lg py-20">
    <div className="card p-10">
      <h1 className="text-4xl font-bold">Your Systems, Supercharged</h1>
      <p className="mt-3 text-white/70 max-w-3xl">We modernize without lock-in. ERP, CRM, data, and AI should behave like one coherent nervous system. Junova designs the architecture and guides the build—independent, accountable, and fast.</p>
      <div className="mt-6 flex gap-3">
        <a href="https://junova1.odoo.com/web/login" target="_blank" className="rounded-full px-6 py-3 bg-white text-black font-semibold shadow-glow hover:shadow-glow2 transition">Client Login (Odoo)</a>
        <Link href="/contact" className="rounded-full px-6 py-3 border border-white/20 hover:border-white/50 transition">Talk to us</Link>
      </div>
    </div>
    <div className="mt-10 grid md:grid-cols-2 gap-6">
      <div className="card p-8"><h3 className="text-2xl font-bold">ERP + AI Blueprint</h3><p className="mt-2 text-white/70">Data model, integrations, automations, and governance.</p></div>
      <div className="card p-8"><h3 className="text-2xl font-bold">Publisher-Agnostic</h3><p className="mt-2 text-white/70">We don’t push licenses. We push outcomes.</p></div>
    </div>
  </section>);
}