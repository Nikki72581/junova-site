"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { articles, CATEGORIES } from "../articles";

type Color = "blue" | "teal" | "gold" | "coral";

const CATEGORY_META: Record<string, { icon: string; color: Color; tag: string }> = {
  "NetSuite":           { icon: "📊", color: "blue",  tag: "NS"  },
  "Microsoft Dynamics": { icon: "🔷", color: "blue",  tag: "D365"},
  "Acumatica":          { icon: "⚙️", color: "teal",  tag: "ACU" },
  "AI & Automation":    { icon: "🤖", color: "gold",  tag: "AI"  },
  "General ERP":        { icon: "📋", color: "coral", tag: "ERP" },
};

function getDots(readTime: string): number {
  const mins = parseInt(readTime) || 5;
  if (mins <= 7)  return 1;
  if (mins <= 10) return 2;
  return 3;
}

function DifficultyDots({ count, color }: { count: number; color: Color }) {
  return (
    <div className="lp-card-dots">
      {[1, 2, 3].map((i) => (
        <div key={i} className={`lp-dot${i <= count ? ` filled-${color}` : ""}`} />
      ))}
    </div>
  );
}

export default function GuidesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCat = activeCategory === "All" || a.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="lp-page">
      {/* Header */}
      <div className="lp-page-header">
        <p className="lp-crumb">Learning Center</p>
        <h1 className="lp-page-title">Guides</h1>
        <p className="lp-page-desc">
          Practical how-to articles for ERP platforms and software.
        </p>
      </div>

      {/* Search + category filters */}
      <div className="lp-filter-bar">
        <div className="lp-search-sm">
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--text3)", flexShrink: 0 }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder="Search guides…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search guides"
          />
        </div>
        <div className="lp-filter-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`lp-filter-pill${activeCategory === cat ? " active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="lp-results-count">
        {filtered.length} guide{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        {search ? ` matching "${search}"` : ""}
      </p>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="lp-empty">
          <div className="lp-empty-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="lp-empty-title">No guides found</p>
          <p className="lp-empty-desc">Try adjusting your search or selecting a different category.</p>
        </div>
      ) : (
        <div className="lp-cards">
          {filtered.map((article) => {
            const meta = CATEGORY_META[article.category] ?? { icon: "📄", color: "blue" as Color, tag: "ART" };
            const dots = getDots(article.readTime);
            return (
              <Link key={article.slug} href={`/learn/${article.slug}`} className="lp-card">
                <div className="lp-card-top">
                  <div className={`lp-card-icon ${meta.color}`}>{meta.icon}</div>
                  <span className={`lp-card-tag ${meta.color}`}>{meta.tag}</span>
                </div>
                <p className="lp-card-title">{article.title}</p>
                <p className="lp-card-desc">{article.description}</p>
                <div className="lp-card-footer">
                  <DifficultyDots count={dots} color={meta.color} />
                  <span className="lp-card-time">{article.readTime}</span>
                  <span className="lp-card-arrow">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
