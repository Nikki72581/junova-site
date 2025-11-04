"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <section className="container-lg py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-sm text-white/80">
          <span className="h-2 w-2 rounded-full bg-junova-accent animate-pulse" />
          Independent. Uncompromised. Unowned.
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
          We don’t sell software.<br className="hidden md:block" /> We build freedom.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Junova is the anti-VAR. We advise, architect, and operationalize systems that serve you
          instead of the publishers. No kickbacks. No quotas. Just clarity, speed, and outcomes.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full px-6 py-3 bg-white text-black font-semibold shadow-glow hover:shadow-glow2 transition"
          >
            Talk to us
          </Link>
          <Link
            href="/processes"
            className="rounded-full px-6 py-3 border border-white/20 hover:border-white/50 transition"
          >
            How we work
          </Link>
        </div>
      </motion.div>

      <div className="mt-24 grid md:grid-cols-3 gap-6">
        {[
          { title: "People", href: "/people", blurb: "Humans first. Senior minds who can ship." },
          { title: "Processes", href: "/processes", blurb: "Methodologies built for momentum." },
          { title: "Product", href: "/product", blurb: "Systems that scale without handcuffs." },
        ].map((card) => (
          <motion.a
            key={card.title}
            href={card.href}
            className="card p-8 block hover:translate-y-[-2px] transition"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-2xl font-bold">{card.title}</h3>
            <p className="mt-2 text-white/70">{card.blurb}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
