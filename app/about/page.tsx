import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300/80 uppercase">
          The person behind the work
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">About</h1>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]" />

        {/* Photo + current role callout */}
        <div className="mt-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-slate-700">
              <Image
                src="/nicole.jpg"
                alt="Nicole Ronchetti"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Current role callout */}
          <div className="flex-1 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">
            <p className="text-xs font-semibold tracking-wide text-emerald-300/80 uppercase mb-1">
              Currently
            </p>
            <p className="text-lg font-semibold">
              Senior Consultant at{" "}
              <a
                href="https://www.stellarone.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200 transition"
              >
                Stellar One
              </a>
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Focused on Acumatica implementations for distribution and eCommerce. Stellar One is an Acumatica Gold-Certified Partner.
            </p>
            <div className="mt-4 border-t border-emerald-500/20 pt-4">
              <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase mb-1">Also</p>
              <p className="text-sm text-slate-300">Founder of Junova — building SaaS tools and writing about ERP, AI, and the way people actually work.</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-12 prose prose-invert prose-slate max-w-none text-slate-300 space-y-5 leading-relaxed">
          <p>
            I&rsquo;ve spent years in the ERP and SMB software world — and what makes my background a little unusual is the number of angles I&rsquo;ve seen it from. End user, consultant, VAR-side, ISV-side, product leadership. I&rsquo;ve been the person staring at a broken workflow wondering why the system doesn&rsquo;t support how the business actually runs. I&rsquo;ve also been the one building the system. I&rsquo;ve worked across Sage, Acumatica, Microsoft Dynamics, and NetSuite, in roles ranging from hands-on implementation to product and strategy.
          </p>

          <p>
            That range matters because ERP failure isn&rsquo;t usually a software problem — it&rsquo;s a people and process problem wearing software&rsquo;s clothes. Most implementations struggle not because the product is wrong, but because the process design was skipped, the people doing the work weren&rsquo;t consulted, or the vendor had incentives that didn&rsquo;t align with the customer. I&rsquo;ve seen all of that up close, from every side of the table.
          </p>

          <p>
            Junova started as my independent consulting LLC — the &ldquo;anti-VAR&rdquo; in the sense that I don&rsquo;t sell software and don&rsquo;t have quota pressure. I built it to work the way I thought consulting should work: honest assessments, process-first thinking, and no incentive to recommend something unless it&rsquo;s actually the right fit. That philosophy hasn&rsquo;t changed, even as my day job has.
          </p>

          <p>
            Now I&rsquo;m channeling most of my energy into my role at Stellar One, where I work on Acumatica implementations for distribution and eCommerce clients. Alongside that, I&rsquo;m building SaaS tools through Junova — things like CommissionFlow and ARFlow that solve specific, real problems I&rsquo;ve observed in the channel. And I write, because I think there&rsquo;s not nearly enough honest, practitioner-level content about what ERP consulting actually looks like — and how AI is changing that work, for better and sometimes for complicated.
          </p>
        </div>
      </div>
    </main>
  );
}
