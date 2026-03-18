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
const BG = "#0a0b0f";
const PANEL = "#12131a";
const PRESSED = "#1a1b28";

export const junovaTheme = deepMerge(studioTheme, {
  color: {
    dark: {
      default: {
        base: {
          bg: BG,
          border: "#1c1e2a",
          focusRing: PURPLE,
          shadow: {
            outline: "rgba(110,58,255,0.3)",
          },
        },
        card: {
          enabled: { bg: BG },
          hovered: { bg: PANEL },
          pressed: { bg: PRESSED },
          selected: { bg: PURPLE },
          disabled: { bg: BG },
        },
        input: {
          default: {
            enabled: { bg: BG },
            hovered: { bg: PANEL },
          },
          invalid: {
            enabled: { bg: "#180a0a" },
            hovered: { bg: "#1e0d0d" },
          },
        },
        muted: {
          enabled: { bg: PANEL },
          hovered: { bg: PRESSED },
        },
      },
      primary: {
        base: {
          bg: "#0c0918",
          fg: "#d4c9ff",
          border: "#3a1e95",
          focusRing: PURPLE,
          shadow: {
            outline: "rgba(110,58,255,0.4)",
          },
        },
        card: {
          selected: { bg: PURPLE },
          hovered: { bg: "#13102a" },
        },
        solid: {
          default: {
            enabled: { bg: PURPLE },
            hovered: { bg: "#7b4fff" },
            pressed: { bg: "#5a2ed4" },
          },
        },
      },
      positive: {
        base: {
          bg: "#071210",
          fg: "#b0f0d0",
          border: "#145a30",
          focusRing: GREEN,
          shadow: {
            outline: "rgba(33,208,122,0.35)",
          },
        },
        solid: {
          default: {
            enabled: { bg: GREEN },
            hovered: { bg: "#28e88a" },
            pressed: { bg: "#18a85e" },
          },
        },
      },
      caution: {
        base: { focusRing: "#f0b429" },
      },
      critical: {
        base: { focusRing: "#ff5266" },
      },
    },
  },
});
