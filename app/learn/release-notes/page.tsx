const NOTES = [
  {
    version: "Change Notes v1.0",
    date: "2026-03-18",
    changes: [
      "Initial launch of the Junova Learning Center",
      "7 articles covering NetSuite, Microsoft Dynamics, Acumatica, AI & Automation, and ERP selection",
      "Search and category filtering on the Guides page",
      "Browse by Platform view for organizing articles by ERP system",
    ],
  },
];

export default function ReleaseNotesPage() {
  return (
    <div className="lp-page" style={{ maxWidth: 720 }}>
      {/* Header */}
      <div className="lp-page-header">
        <p className="lp-crumb">Learning Center</p>
        <h1 className="lp-page-title">Change Notes</h1>
        <p className="lp-page-desc">
          Updates to the Learning Center — new content, features, and changes.
        </p>
      </div>

      <div className="lp-timeline">
        {NOTES.map((note) => (
          <div key={note.version} className="lp-timeline-item">
            <div className="lp-timeline-meta">
              <h2 className="lp-timeline-version">{note.version}</h2>
              <span className="lp-timeline-date">
                {new Date(note.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <ul className="lp-timeline-changes">
              {note.changes.map((change, i) => (
                <li key={i} className="lp-timeline-change">
                  <span className="lp-timeline-dot" />
                  {change}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
