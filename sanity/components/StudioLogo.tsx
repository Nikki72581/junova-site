export function StudioLogo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "2px 0",
      }}
    >
      {/* Logomark: J with gradient background */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient
            id="junova-grad"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#6E3AFF" />
            <stop offset="60%" stopColor="#4E6FEF" />
            <stop offset="100%" stopColor="#21D07A" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#junova-grad)" />
        {/* Letter J */}
        <path
          d="M13 6h2v8.5a3.5 3.5 0 0 1-7 0V14h2v.5a1.5 1.5 0 0 0 3 0V6Z"
          fill="white"
        />
      </svg>

      {/* Wordmark */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "-0.02em",
            background:
              "linear-gradient(135deg, #6E3AFF 0%, #4E6FEF 50%, #21D07A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Junova
        </span>
        <span
          style={{
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.22)",
          }}
        >
          Studio
        </span>
      </div>
    </div>
  );
}
