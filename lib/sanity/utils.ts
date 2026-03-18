import type { PortableTextBlock } from "@portabletext/react";

/** Estimate reading time from Portable Text body (≈200 wpm) */
export function estimateReadTime(body: PortableTextBlock[]): string {
  if (!body?.length) return "5 min read";
  const text = body
    .filter((b) => b._type === "block")
    .map((b: any) =>
      (b.children ?? []).map((c: any) => c.text ?? "").join(" ")
    )
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}
