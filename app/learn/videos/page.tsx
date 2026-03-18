import Link from "next/link";

export default function VideosPage() {
  return (
    <div className="lp-page">
      {/* Header */}
      <div className="lp-page-header">
        <p className="lp-crumb">Learning Center</p>
        <h1 className="lp-page-title">Videos</h1>
        <p className="lp-page-desc">
          Video tutorials and recorded walkthroughs from the Junova team.
        </p>
      </div>

      {/* Empty state */}
      <div className="lp-empty">
        <div className="lp-empty-icon">
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="lp-empty-title">Videos coming soon</p>
        <p className="lp-empty-desc">
          We&apos;re recording walkthroughs and tutorials. Check back soon, or reach out to request a specific topic.
        </p>
        <Link href="/contact" className="lp-featured-cta" style={{ fontSize: "12px", padding: "0.5rem 1rem" }}>
          Request a topic →
        </Link>
      </div>
    </div>
  );
}
