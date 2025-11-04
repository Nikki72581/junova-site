"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as any;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) setStatus("Thanks. We’ll be in touch.");
      else setStatus("Something went sideways. Try again.");
    } catch {
      setStatus("Network issue. Try again.");
    }
  }

  return (
    <section className="container-lg py-20">
      <div className="card p-10 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Let’s create something the VARs will fear.</h1>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-white/70">Name</label>
            <input name="name" required className="w-full mt-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-white/40" />
          </div>
          <div>
            <label className="block text-sm text-white/70">Email</label>
            <input name="email" type="email" required className="w-full mt-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-white/40" />
          </div>
          <div>
            <label className="block text-sm text-white/70">Message</label>
            <textarea name="message" rows={5} required className="w-full mt-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-white/40" />
          </div>
          <button className="rounded-full px-6 py-3 bg-white text-black font-semibold shadow-glow hover:shadow-glow2 transition">Send</button>
          {status && <p className="text-sm text-white/70 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
