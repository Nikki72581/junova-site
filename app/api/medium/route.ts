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
  // Priority: get the first hero/feature image, not tracking pixels

  // Pattern 1: First figure with img tag (Medium's hero images use this)
  const figureMatch = content.match(/<figure[^>]*>.*?<img[^>]+src=["']([^"'>]+)["']/);
  if (figureMatch && figureMatch[1] && !figureMatch[1].includes('stat?event') && !figureMatch[1].includes('width="1"')) {
    return figureMatch[1];
  }

  // Pattern 2: First img tag with alt attribute (usually content images, not tracking)
  const imgWithAltMatch = content.match(/<img[^>]+alt=["'][^"']*["'][^>]+src=["']([^"'>]+)["']/);
  if (imgWithAltMatch && imgWithAltMatch[1] && !imgWithAltMatch[1].includes('stat?event')) {
    return imgWithAltMatch[1];
  }

  // Pattern 3: Any img tag (but filter out tracking pixels)
  const imgMatch = content.match(/<img[^>]+src=["']([^"'>]+)["']/);
  if (imgMatch && imgMatch[1] && !imgMatch[1].includes('stat?event') && !imgMatch[1].includes('width="1"') && !imgMatch[1].includes('height="1"')) {
    return imgMatch[1];
  }

  // Pattern 4: Direct Medium CDN URL (last resort)
  const cdnMatch = content.match(/https:\/\/cdn-images-\d+\.medium\.com\/max\/\d+\/[^"\s<>]+/);
  if (cdnMatch && cdnMatch[0] && !cdnMatch[0].includes('stat?event')) {
    return cdnMatch[0];
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

    // Extract content:encoded first (has full content), fallback to description
    const contentMatch = itemContent.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
    const descMatch = itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/);
    const fullContent = contentMatch ? contentMatch[1] : "";
    const description = descMatch ? descMatch[1] : "";

    // Extract categories
    const categories: string[] = [];
    const categoryMatches = itemContent.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g);
    for (const catMatch of categoryMatches) {
      categories.push(catMatch[1]);
    }

    // Extract thumbnail from content:encoded first (where Medium stores the hero image), fallback to description
    const thumbnail = extractImageFromContent(fullContent) || extractImageFromContent(description);

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
