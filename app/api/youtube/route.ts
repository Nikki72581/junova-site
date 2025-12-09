import { NextResponse } from "next/server";

export const runtime = "edge";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const PLAYLIST_ID = "PL6JaEFg7KI7dPH_zKbynhFU2SLOTYepOR";

interface YouTubePlaylistItem {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      high?: { url: string };
      medium?: { url: string };
      default?: { url: string };
    };
    resourceId: {
      videoId: string;
    };
  };
}

interface YouTubeApiResponse {
  items: YouTubePlaylistItem[];
  pageInfo?: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export async function GET() {
  if (!YOUTUBE_API_KEY) {
    console.error("YouTube API key not configured");
    return NextResponse.json(
      { error: "YouTube API key not configured", videos: [] },
      { status: 500 }
    );
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=12&key=${YOUTUBE_API_KEY}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("YouTube API error:", response.status, errorData);

      if (response.status === 403) {
        return NextResponse.json(
          { error: "YouTube API quota exceeded or invalid API key", videos: [] },
          { status: 403 }
        );
      }

      throw new Error(`YouTube API responded with status: ${response.status}`);
    }

    const data: YouTubeApiResponse = await response.json();

    const videos = data.items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail:
        item.snippet.thumbnails.high?.url ||
        item.snippet.thumbnails.medium?.url ||
        item.snippet.thumbnails.default?.url ||
        "",
      publishedAt: item.snippet.publishedAt,
      videoId: item.snippet.resourceId.videoId,
    }));

    return NextResponse.json({ videos }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      }
    });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch videos",
        videos: [],
        message: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
