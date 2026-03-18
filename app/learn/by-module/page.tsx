import Link from "next/link";
import { articles } from "../articles";

type Color = "blue" | "teal" | "gold" | "coral";

const CATEGORY_META: Record<string, { icon: string; color: Color; tag: string; abbr: string }> = {
  "NetSuite":           { icon: "📊", color: "blue",  tag: "NS",   abbr: "N"   },
  "Microsoft Dynamics": { icon: "🔷", color: "blue",  tag: "D365", abbr: "D"   },
  "Acumatica":          { icon: "⚙️", color: "teal",  tag: "ACU",  abbr: "A"   },
  "AI & Automation":    { icon: "🤖", color: "gold",  tag: "AI",   abbr: "AI"  },
  "General ERP":        { icon: "📋", color: "coral", tag: "ERP",  abbr: "ERP" },
};

const grouped = articles.reduce<Record<string, typeof articles>>((acc, a) => {
  if (!acc[a.category]) acc[a.category] = [];
  acc[a.category].push(a);
  return acc;
}, {});

export default function ByModulePage() {
  return (
    <div className="lp-page">
      {/* Header */}
      <div className="lp-page-header">
        <p className="lp-crumb">Learning Center</p>
        <h1 className="lp-page-title">By Product</h1>
        <p className="lp-page-desc">
          Browse articles organized by ERP platform and module area.
        </p>
      </div>

      {/* Groups */}
      <div>
        {Object.entries(grouped).map(([category, categoryArticles]) => {
          const meta = CATEGORY_META[category];
          return (
            <section key={category} className="lp-module-section">
              <div className="lp-module-header">
                <div className="lp-module-icon">{meta?.abbr ?? category.charAt(0)}</div>
                <h2 className="lp-module-name">{category}</h2>
                <span className="lp-module-count">
                  {categoryArticles.length} guide{categoryArticles.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="lp-cards">
                {categoryArticles.map((article) => (
                  <Link key={article.slug} href={`/learn/${article.slug}`} className="lp-card">
                    <div className="lp-card-top">
                      <div className={`lp-card-icon ${meta?.color ?? "blue"}`}>
                        {meta?.icon ?? "📄"}
                      </div>
                      <span className={`lp-card-tag ${meta?.color ?? "blue"}`}>
                        {meta?.tag ?? "ART"}
                      </span>
                    </div>
                    <p className="lp-card-title">{article.title}</p>
                    <p className="lp-card-desc">{article.description}</p>
                    <div className="lp-card-footer">
                      <span className="lp-card-time">{article.readTime}</span>
                      <span className="lp-card-arrow">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
