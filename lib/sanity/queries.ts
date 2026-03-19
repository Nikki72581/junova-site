import { groq } from "next-sanity";
import { client } from "./client";
import type { PortableTextBlock } from "@portabletext/react";
export { estimateReadTime } from "./utils";

// ── Types ──────────────────────────────────────────────────────────────────

export interface SanityArticle {
  _id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  status: "draft" | "published" | "archived";
  difficulty: "beginner" | "intermediate" | "advanced";
  readTimeOverride?: number;
  isFeatured?: boolean;
  coverImage?: { asset: { url: string }; alt?: string };
  seo?: { metaTitle?: string; metaDescription?: string; ogImage?: string };
  body?: PortableTextBlock[];
}

// ── Field projections ──────────────────────────────────────────────────────

/**
 * Fields for list/grid views — excludes body for performance.
 * Use this for index pages, category pages, and related article lists.
 */
const LIST_FIELDS = groq`
  _id,
  title,
  "slug": slug.current,
  description,
  category,
  tags,
  publishedAt,
  updatedAt,
  status,
  difficulty,
  readTimeOverride,
  isFeatured,
  "coverImage": coverImage { alt, "url": asset->url },
`;

/**
 * Fields for the single article page — includes body, SEO, and internalLink resolution.
 */
const DETAIL_FIELDS = groq`
  ${LIST_FIELDS}
  seo { metaTitle, metaDescription, "ogImage": ogImage.asset->url },
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": reference->slug.current,
        "title": reference->title
      }
    }
  },
`;

// ── Queries ────────────────────────────────────────────────────────────────

export async function getAllArticles(): Promise<SanityArticle[]> {
  return client.fetch(
    groq`*[_type == "article" && status == "published"] | order(isFeatured desc, publishedAt desc) { ${LIST_FIELDS} }`
  );
}

export async function getArticleBySlug(
  slug: string
): Promise<SanityArticle | null> {
  return client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0] { ${DETAIL_FIELDS} }`,
    { slug }
  );
}

export async function getAllSlugs(): Promise<string[]> {
  const results: { slug: string }[] = await client.fetch(
    groq`*[_type == "article" && status == "published"] { "slug": slug.current }`
  );
  return results.map((r) => r.slug);
}

export async function getFeaturedArticle(): Promise<SanityArticle | null> {
  return client.fetch(
    groq`*[_type == "article" && status == "published" && isFeatured == true][0] { ${LIST_FIELDS} }`
  );
}

export async function getArticlesByCategory(
  category: string
): Promise<SanityArticle[]> {
  return client.fetch(
    groq`*[_type == "article" && status == "published" && category == $category] | order(publishedAt desc) { ${LIST_FIELDS} }`,
    { category }
  );
}

export async function getRelatedArticles(
  articleId: string,
  category: string
): Promise<SanityArticle[]> {
  return client.fetch(
    groq`*[_type == "article" && status == "published" && _id != $articleId && category == $category] | order(publishedAt desc)[0..3] { ${LIST_FIELDS} }`,
    { articleId, category }
  );
}
