import { getAllArticles } from "@/lib/sanity/queries";
import type { SanityArticle } from "@/lib/sanity/queries";
import LearnClient from "./LearnClient";

export const revalidate = 60; // ISR: re-fetch from Sanity every 60 seconds

export default async function LearnPage() {
  let articles: Awaited<ReturnType<typeof getAllArticles>> = [];
  try {
    articles = await getAllArticles();
  } catch {
    // Sanity not yet configured — show empty state
  }
  return <LearnClient articles={articles} />;
}
