"use client";
import Link from "next/link";
import "./learn.css";

const NAV_LINKS = [
  { href: "/learn/guides",        label: "Guides" },
  { href: "/learn/by-module",     label: "By Product" },
  { href: "/learn/videos",        label: "Videos" },
  { href: "/learn/release-notes", label: "Change Notes" },
];

function LearnNav() {
  return (
    <nav className="lp-nav">
      <div className="lp-nav-inner">
        {/* Left: logo + label */}
        <div className="lp-nav-left">
          <Link href="/" className="lp-logo">
            junova<span>.</span>
          </Link>
          <div className="lp-nav-divider" />
          <Link href="/learn" className="lp-nav-label">
            Learning Center
          </Link>
        </div>

        {/* Center: nav links */}
        <div className="lp-nav-links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="lp-nav-link">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <Link href="/contact" className="lp-nav-cta">
          Contact Support →
        </Link>
      </div>
    </nav>
  );
}

function LearnFooter() {
  return (
    <footer className="lp-footer">
      <div className="lp-footer-inner">
        <div>
          <Link href="/" className="lp-footer-logo">
            junova<span>.</span>
          </Link>
          <p className="lp-footer-tagline">
            We don&apos;t sell software. We build freedom.
          </p>
        </div>
        <div className="lp-footer-links">
          <Link href="/"        className="lp-footer-link">junova.io</Link>
          <Link href="/contact" className="lp-footer-link">Privacy</Link>
          <Link href="/contact" className="lp-footer-link">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lp-root">
      <LearnNav />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </div>
      <LearnFooter />
    </div>
  );
}
