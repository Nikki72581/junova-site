import { studioTheme } from "@sanity/ui";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepMerge(target: any, override: any): any {
  const result = { ...target };
  for (const key in override) {
    if (
      override[key] !== null &&
      typeof override[key] === "object" &&
      !Array.isArray(override[key]) &&
      target[key] !== null &&
      typeof target[key] === "object"
    ) {
      result[key] = deepMerge(target[key], override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}

// Junova brand palette
const PURPLE = "#6E3AFF";
const GREEN = "#21D07A";
const BG = "#0a0b0f";       // main canvas
const PANEL = "#12131a";    // hovered / muted panels
const BORDER = "#1c1e2a";   // subtle borders

// The ThemeProvider in Sanity v5 reads from theme.v2, not theme.color.
// theme.color is a source token spec; theme.v2 is the compiled output that is
// actually rendered. We deep-merge v2 directly so overrides take effect.
const v2Overrides = {
  color: {
    dark: {
      default: {
        bg: BG,
        border: BORDER,
        focusRing: PURPLE,
        muted: { bg: PANEL },
      },
      primary: {
        bg: "#0c0918",
        border: "#3a1e95",
        focusRing: PURPLE,
        muted: { bg: "#13102a" },
      },
      positive: {
        bg: "#071210",
        border: "#145a30",
        focusRing: GREEN,
        muted: { bg: "#0c1f16" },
      },
      caution: {
        focusRing: "#f0b429",
      },
      critical: {
        focusRing: "#ff5266",
      },
    },
  },
};

export const junovaTheme = deepMerge(studioTheme, {
  v2: deepMerge(studioTheme.v2, v2Overrides),
});
