"use client";
import { motion } from "framer-motion";

const cols = [
  {
    title: "People",
    body: "We align leadership, roles, and reality. No fantasy swimlanes—just operating models that people can actually follow.",
  },
  {
    title: "Processes",
    body: "We map the value stream, remove friction, and codify the 20% that drives 80% of outcomes. Documentation that breathes.",
  },
  {
    title: "Product",
    body: "We design a systems blueprint across ERP, CRM, and AI so your stack works like a single brain, not a committee.",
  },
];

export default function Processes() {
  return (
    <section className="container-lg py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold">People • Processes • Product</h1>
        <p className="mt-3 text-white/70 max-w-3xl mx-auto">
          The Junova 3P framework turns chaos into coherent momentum. It’s simple, fast, and brutally honest.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {cols.map((c, i) => (
          <motion.div
            key={c.title}
            className="card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-bold">{c.title}</h3>
            <p className="mt-2 text-white/70">{c.body}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 card p-8">
        <h2 className="text-2xl font-bold">Engagement Flow</h2>
        <ol className="mt-3 space-y-2 list-decimal pl-6 text-white/80">
          <li>Signal scan: we listen, read, and analyze.</li>
          <li>Alignment sprint: we define outcomes and constraints.</li>
          <li>Blueprint: architecture across ERP, data, and AI.</li>
          <li>Implementation: ship value fast, iterate weekly.</li>
          <li>Enablement: documentation, training, and handoff.</li>
        </ol>
      </div>
    </section>
  );
}
