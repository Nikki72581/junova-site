import { NextResponse } from "next/server";

export const runtime = "edge";

const MEDIUM_RSS_URL = "https://medium.com/feed/@nicole_68130";

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  categories: string[];
}

function extractImageFromContent(content: string): string | undefined {
  // Try multiple patterns to extract image from content

  // Pattern 1: Standard img tag
  const imgMatch = content.match(/<img[^>]+src=["']([^"'>]+)["']/);
  if (imgMatch && imgMatch[1]) {
    // Filter out tracking pixels (1x1 images)
    if (!imgMatch[1].includes('stat?event') && !imgMatch[1].includes('width="1"')) {
      return imgMatch[1];
    }
  }

  // Pattern 2: Figure with img tag (Medium uses this)
  const figureMatch = content.match(/<figure[^>]*>.*?<img[^>]+src=["']([^"'>]+)["']/);
  if (figureMatch && figureMatch[1]) {
    if (!figureMatch[1].includes('stat?event')) {
      return figureMatch[1];
    }
  }

  // Pattern 3: Any Medium CDN image URL
  const cdnMatch = content.match(/https:\/\/cdn-images-\d+\.medium\.com\/[^"\s<>]+/);
  if (cdnMatch && cdnMatch[0]) {
    if (!cdnMatch[0].includes('stat?event')) {
      return cdnMatch[0];
    }
  }

  return undefined;
}

function parseRSSFeed(xmlText: string): MediumArticle[] {
  const articles: MediumArticle[] = [];

  // Extract items using regex (simple XML parsing)
  const itemMatches = xmlText.matchAll(/<item>([\s\S]*?)<\/item>/g);

  for (const itemMatch of itemMatches) {
    const itemContent = itemMatch[1];

    // Extract title
    const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const title = titleMatch ? titleMatch[1] : "";

    // Extract link
    const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
    const link = linkMatch ? linkMatch[1].trim() : "";

    // Extract pubDate
    const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
    const pubDate = pubDateMatch ? pubDateMatch[1] : "";

    // Extract description/content
    const descMatch = itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) ||
                      itemContent.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
    const description = descMatch ? descMatch[1] : "";

    // Extract categories
    const categories: string[] = [];
    const categoryMatches = itemContent.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g);
    for (const catMatch of categoryMatches) {
      categories.push(catMatch[1]);
    }

    // Extract thumbnail
    const thumbnail = extractImageFromContent(description);

    if (title && link) {
      articles.push({
        title,
        link,
        pubDate,
        description,
        thumbnail,
        categories,
      });
    }
  }

  return articles;
}

export async function GET() {
  try {
    const response = await fetch(MEDIUM_RSS_URL, {
      next: { revalidate: 300 }, // Cache for 5 minutes
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Junova-Media-Bot/1.0)',
      },
    });

    if (!response.ok) {
      console.error("Medium RSS fetch error:", response.status, response.statusText);
      throw new Error(`Failed to fetch Medium RSS: ${response.status}`);
    }

    const xmlText = await response.text();
    const articles = parseRSSFeed(xmlText);

    return NextResponse.json({ articles }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
      }
    });
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch articles",
        articles: [],
        message: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
