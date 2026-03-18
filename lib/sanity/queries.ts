import { groq } from "next-sanity";
import { client } from "./client";
import type { PortableTextBlock } from "@portabletext/react";
export { estimateReadTime } from "./utils";

export interface SanityArticle {
  _id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  body: PortableTextBlock[];
}

const ARTICLE_FIELDS = groq`
  _id,
  title,
  "slug": slug.current,
  description,
  category,
  tags,
  publishedAt,
  body,
`;

export async function getAllArticles(): Promise<SanityArticle[]> {
  return client.fetch(
    groq`*[_type == "article"] | order(publishedAt desc) { ${ARTICLE_FIELDS} }`
  );
}

export async function getArticleBySlug(
  slug: string
): Promise<SanityArticle | null> {
  return client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0] { ${ARTICLE_FIELDS} }`,
    { slug }
  );
}

export async function getAllSlugs(): Promise<string[]> {
  const results: { slug: string }[] = await client.fetch(
    groq`*[_type == "article"] { "slug": slug.current }`
  );
  return results.map((r) => r.slug);
}

