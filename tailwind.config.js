/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { junova: { bg: "#0a0b0f", panel: "#12131a", accent: "#6E3AFF", accent2: "#21D07A" } },
      backgroundImage: {
        plasma: "radial-gradient(1200px 600px at 10% 10%, rgba(110,58,255,0.35), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(33,208,122,0.25), transparent 60%), radial-gradient(800px 800px at 50% 100%, rgba(110,58,255,0.18), transparent 60%)"
      },
      boxShadow: { glow: "0 0 25px rgba(110,58,255,0.35)", glow2: "0 0 25px rgba(33,208,122,0.35)" }
    },
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./pages/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        junova: {
          start: "#6E3AFF",
          mid: "#4E6FEF",
          end: "#21D07A",
        },
      },
      backgroundImage: {
        "junova-gradient": "linear-gradient(to right, #6E3AFF, #4E6FEF, #21D07A)",
      },
    },
  },
  plugins: [],
};
