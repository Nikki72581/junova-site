"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { SanityArticle } from "@/lib/sanity/queries";
import { estimateReadTime } from "@/lib/sanity/utils";

// ── Per-category display metadata ─────────────────────────────────────────────
type Color = "blue" | "teal" | "gold" | "coral";

const CATEGORY_META: Record<string, { icon: string; color: Color; tag: string }> = {
  "NetSuite":           { icon: "📊", color: "blue",  tag: "NS"   },
  "Microsoft Dynamics": { icon: "🔷", color: "blue",  tag: "D365" },
  "Acumatica":          { icon: "⚙️", color: "teal",  tag: "ACU"  },
  "AI & Automation":    { icon: "🤖", color: "gold",  tag: "AI"   },
  "General ERP":        { icon: "📋", color: "coral", tag: "ERP"  },
};

function getDots(body: any[]): number {
  const readTime = estimateReadTime(body);
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

interface Props {
  articles: SanityArticle[];
}

export default function LearnClient({ articles }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filters = ["All", ...Object.keys(CATEGORY_META)];

  const categoryCounts = useMemo(
    () =>
      articles.reduce<Record<string, number>>((acc, a) => {
        acc[a.category] = (acc[a.category] || 0) + 1;
        return acc;
      }, {}),
    [articles]
  );

  const featured = articles[0] ?? null;

  const platformItems = Object.entries(CATEGORY_META).map(([label, meta]) => ({
    label,
    icon: meta.icon,
    count: categoryCounts[label] || 0,
  }));

  const visibleArticles = useMemo(
    () =>
      activeCategory === "All"
        ? articles
        : articles.filter((a) => a.category === activeCategory),
    [activeCategory, articles]
  );

  const featuredMeta = featured ? CATEGORY_META[featured.category] : null;
  const sectionLabel =
    activeCategory === "All" ? "All Guides" : `${activeCategory} Guides`;

  return (
    <>
      {/* Hero */}
      <section className="lp-hero">
        <div className="lp-hero-glow" />
        <div className="lp-hero-inner">
          <div className="lp-animate">
            <span className="lp-eyebrow">
              <span className="lp-eyebrow-dot" />
              Junova Knowledge Base
            </span>
          </div>

          <h1 className="lp-animate lp-animate-d1">
            Everything you need to<br />
            <em>run your system confidently</em>
          </h1>

          <p className="lp-hero-sub lp-animate lp-animate-d2">
            Step-by-step procedures, quick references, and best practices —
            written the way your team actually works.
          </p>

          <div className="lp-search-wrap lp-animate lp-animate-d3">
            <div className="lp-search">
              <span className="lp-search-icon">⌕</span>
              <input
                type="search"
                placeholder="Search guides, platforms, topics…"
                aria-label="Search knowledge base"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    window.location.href = "/learn/guides";
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="lp-stats lp-animate lp-animate-d4">
        {[
          { num: String(articles.length), label: "Guides Published" },
          { num: String(Object.keys(categoryCounts).length), label: "Platforms Covered" },
          { num: "∞", label: "Free to Access" },
        ].map((s) => (
          <div key={s.label} className="lp-stat">
            <span className="lp-stat-num">{s.num}</span>
            <span className="lp-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Main body */}
      <div className="lp-body lp-animate lp-animate-d5">

        {/* Sidebar */}
        <aside className="lp-sidebar">
          <div>
            <p className="lp-sidebar-heading">Browse by Platform</p>
            <ul className="lp-sidebar-nav">
              <li
                className={`lp-sidebar-item${activeCategory === "All" ? " active" : ""}`}
                onClick={() => setActiveCategory("All")}
              >
                <span className="lp-sidebar-icon">📚</span>
                <span className="lp-sidebar-label">All Guides</span>
                <span className="lp-sidebar-badge">{articles.length}</span>
              </li>
              {platformItems.filter((p) => p.count > 0).map((p) => (
                <li
                  key={p.label}
                  className={`lp-sidebar-item${activeCategory === p.label ? " active" : ""}`}
                  onClick={() => setActiveCategory(p.label)}
                >
                  <span className="lp-sidebar-icon">{p.icon}</span>
                  <span className="lp-sidebar-label">{p.label}</span>
                  <span className="lp-sidebar-badge">{p.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="lp-sidebar-heading">Resources</p>
            <ul className="lp-sidebar-nav">
              <li className="lp-sidebar-item">
                <Link href="/contact" style={{ display: "contents", color: "inherit" }}>
                  <span className="lp-sidebar-icon">📞</span>
                  <span className="lp-sidebar-label">Contact Junova</span>
                </Link>
              </li>
              <li className="lp-sidebar-item">
                <Link href="/contact" style={{ display: "contents", color: "inherit" }}>
                  <span className="lp-sidebar-icon">🗓️</span>
                  <span className="lp-sidebar-label">Book a Session</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="lp-content">

          {/* Featured card */}
          {featured && featuredMeta && (
            <div className="lp-featured">
              <div className="lp-featured-accent" />
              <div className="lp-featured-inner">
                <div className="lp-featured-left">
                  <p className="lp-featured-eyebrow">★ Featured Guide</p>
                  <h2>{featured.title}</h2>
                  <p className="lp-featured-desc">{featured.description}</p>
                  <div className="lp-featured-meta">
                    <span className="lp-meta-chip">{featuredMeta.icon} {featured.category}</span>
                    <span className="lp-meta-chip">·</span>
                    <span className="lp-meta-chip">⏱ {estimateReadTime(featured.body)}</span>
                  </div>
                </div>
                <Link href={`/learn/${featured.slug}`} className="lp-featured-cta">
                  Read Guide →
                </Link>
              </div>
            </div>
          )}

          {/* Filter pills */}
          <div className="lp-filter-row">
            <span className="lp-filter-label">Filter:</span>
            {filters.map((f) => (
              <button
                key={f}
                className={`lp-filter-pill${activeCategory === f ? " active" : ""}`}
                onClick={() => setActiveCategory(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Section title */}
          <p className="lp-section-title">{sectionLabel}</p>

          {/* Guide cards */}
          <div className="lp-cards">
            {visibleArticles.map((article) => {
              const meta = CATEGORY_META[article.category] ?? {
                icon: "📄", color: "blue" as Color, tag: "ART",
              };
              const dots = getDots(article.body);
              return (
                <Link
                  key={article._id}
                  href={`/learn/${article.slug}`}
                  className="lp-card"
                >
                  <div className="lp-card-top">
                    <div className={`lp-card-icon ${meta.color}`}>{meta.icon}</div>
                    <span className={`lp-card-tag ${meta.color}`}>{meta.tag}</span>
                  </div>
                  <p className="lp-card-title">{article.title}</p>
                  <p className="lp-card-desc">{article.description}</p>
                  <div className="lp-card-footer">
                    <DifficultyDots count={dots} color={meta.color} />
                    <span className="lp-card-time">{estimateReadTime(article.body)}</span>
                    <span className="lp-card-arrow">→</span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
