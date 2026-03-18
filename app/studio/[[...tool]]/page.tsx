"use client";

import { NextStudio } from "next-sanity/studio";
import type { NextStudioProps } from "next-sanity/studio";
import config from "../../../sanity.config";
import { junovaTheme } from "../../../sanity/theme";

export const dynamic = "force-dynamic";

// `theme` is passed to the underlying <Studio> via prop spread at runtime.
// The public TypeScript type omits it in v5, so we extend it locally.
type StudioPageProps = NextStudioProps & { theme?: unknown; scheme?: string };

const studioProps: StudioPageProps = {
  config,
  theme: junovaTheme,
  scheme: "dark",
};

export default function StudioPage() {
  return <NextStudio {...studioProps} />;
}
