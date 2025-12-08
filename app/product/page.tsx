import Link from "next/link";

export default function ProductPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-16">
      {/* Hero */}
      <section className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Product
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Your Systems, Supercharged
        </h1>
        <p className="text-lg text-neutral-300">
          We modernize without lock-in. ERP, CRM, data, and AI should behave
          like one coherent nervous system. Junova designs the architecture and
          guides the build — independent, accountable, and fast.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/contact"
            className="rounded-full border border-emerald-400 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-400/10"
          >
            Talk to us
          </Link>
          <Link
            href="/client-login"
            className="rounded-full border border-neutral-700 px-5 py-2 text-sm font-medium text-neutral-300 transition hover:bg-neutral-900"
          >
            Client login
          </Link>
        </div>
      </section>

      {/* The stack beneath the story */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
            The stack beneath the story
          </h2>
          <p className="text-neutral-300">
            Your environment is probably a mix of legacy ERP, cloud apps,
            custom scripts, and a few things nobody wants to touch. That&apos;s
            where we come in. We make those systems behave like one product,
            not a collection of workarounds.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <h3 className="text-sm font-semibold text-white">
              ERP &amp; core systems
            </h3>
            <p className="text-sm text-neutral-300">
              We work at the data model and process level, not just inside one
              screen.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-400">
              <li>• Sage 100 (including VBScript customizations)</li>
              <li>• Acumatica</li>
              <li>• Microsoft Dynamics 365 Business Central</li>
            </ul>
          </div>

          <div className="space-y-2 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <h3 className="text-sm font-semibold text-white">
              Data, reporting &amp; databases
            </h3>
            <p className="text-sm text-neutral-300">
              From &quot;we have 40 Crystal reports&quot; to a coherent picture
              of the business.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-400">
              <li>• Crystal Reports tuning, rewrites, and replacements</li>
              <li>• SQL schema design and query optimization</li>
              <li>• Operational and management reporting that people use</li>
            </ul>
          </div>

          <div className="space-y-2 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <h3 className="text-sm font-semibold text-white">
              Integrations &amp; automations
            </h3>
            <p className="text-sm text-neutral-300">
              Connect the systems you already own instead of adding three more.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-400">
              <li>• REST API integrations across ERP, CRM, and web apps</li>
              <li>• C# services and custom logic where it&apos;s actually needed</li>
              <li>• Web integrations deployed on Vercel</li>
            </ul>
          </div>

          <div className="space-y-2 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <h3 className="text-sm font-semibold text-white">
              Commerce &amp; customer experience
            </h3>
            <p className="text-sm text-neutral-300">
              Tie online activity back to real inventory, real orders, and real
              balances.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-400">
              <li>• Shopify &amp; BigCommerce integrated with ERP</li>
              <li>• Order and customer data flowing in both directions</li>
              <li>
                • Payment experiences connected to AR and reconciliation (light
                touch, high impact)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What we actually build */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
            What we actually build
          </h2>
          <p className="text-neutral-300">
            We don&apos;t just write recommendations and walk away. We design
            and help implement the concrete building blocks that make your
            stack feel like one product.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <h3 className="text-sm font-semibold text-white">
              Connected workflows
            </h3>
            <p className="text-sm text-neutral-300">
              Streamlined flows across ERP, commerce, and operations so teams
              don&apos;t live in spreadsheets and email threads.
            </p>
            <p className="text-xs text-neutral-400">
              This might look like: automating handoffs between Sage 100 or BC,
              your eCommerce platform, and your shipping or fulfillment tools.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <h3 className="text-sm font-semibold text-white">
              Modern interfaces on top of legacy logic
            </h3>
            <p className="text-sm text-neutral-300">
              Clean, focused web experiences on Vercel that surface the right
              data from systems people don&apos;t want to log into directly.
            </p>
            <p className="text-xs text-neutral-400">
              This might look like: a secure page for customers to review
              invoices, pay, and see order status without exposing the full ERP.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <h3 className="text-sm font-semibold text-white">
              Insight, not just reports
            </h3>
            <p className="text-sm text-neutral-300">
              Turning Crystal Reports, SQL queries, and exports into a small set
              of views that actually drive decisions.
            </p>
            <p className="text-xs text-neutral-400">
              This might look like: a shared source of truth for margins,
              inventory, and cash timing that doesn&apos;t require three people
              to reconcile.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystems & tech fluency */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
            Ecosystems we speak fluently
          </h2>
          <p className="text-neutral-300">
            We&apos;ve lived through the evolution from on-prem ERP and VBScript
            tweaks to cloud platforms, APIs, and modern web stacks. That gives
            us range: we can stabilize what you have and help you design what
            comes next.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-1 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 text-sm text-neutral-300">
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Core platforms
            </h3>
            <p>Sage 100, Acumatica, Microsoft Dynamics 365 Business Central.</p>
            <p className="mt-2 text-neutral-400">
              Including real-world experience with scripting, customizations,
              and the political realities of changing systems.
            </p>
          </div>

          <div className="space-y-1 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 text-sm text-neutral-300">
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Integration &amp; development
            </h3>
            <p>
              REST APIs, EDI, C#, web integrations, and modern deployment
              patterns on Vercel.
            </p>
            <p className="mt-2 text-neutral-400">
              From small, targeted automations to larger integration patterns
              that reduce manual re-keying and swivel-chair work.
            </p>
          </div>

          <div className="space-y-1 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 text-sm text-neutral-300">
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Data &amp; reporting
            </h3>
            <p>Crystal Reports, SQL, and downstream analytics tooling.</p>
            <p className="mt-2 text-neutral-400">
              The focus is always on clarity and trust in the numbers, not just
              adding more charts.
            </p>
          </div>

          <div className="space-y-1 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 text-sm text-neutral-300">
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Commerce &amp; payments
            </h3>
            <p>Shopify, BigCommerce, and modern payment flows.</p>
            <p className="mt-2 text-neutral-400">
              Used selectively, to support real business objectives like lower
              friction for customers and cleaner reconciliation — not to chase
              buzzwords.
            </p>
          </div>
        </div>

        <p className="text-sm text-neutral-400">
          And when the right tool doesn&apos;t exist yet, we&apos;re comfortable
          imagining it, designing it, and helping you bring it to life.
        </p>
      </section>

      {/* Independence / publisher-agnostic */}
      <section className="space-y-4 border-t border-neutral-900 pt-10">
        <h2 className="text-2xl font-semibold text-white">
          Publisher-agnostic, outcome-obsessed
        </h2>
        <p className="text-neutral-300">
          We don&apos;t earn commission from publishers or resellers. When we
          recommend Sage, Acumatica, BC, Shopify, or anything else, it&apos;s
          because it fits your constraints, not our quota.
        </p>
        <p className="text-neutral-400 text-sm">
          The result: architecture that respects your team, your customers, and
          your future optionality.
        </p>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-emerald-400 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-400/10"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
