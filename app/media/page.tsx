"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Fallback placeholder for broken/missing images
const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%231e293b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='16' fill='%2394a3b8'%3ENo Image Available%3C/text%3E%3C/svg%3E";

// Types
interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  videoId: string;
}

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  categories: string[];
}

export default function MediaPage() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [articleError, setArticleError] = useState<string | null>(null);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) => {
    setBrokenImages((prev) => new Set(prev).add(id));
  };

  // Fetch YouTube videos
  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        setLoadingVideos(true);
        const response = await fetch("/api/youtube");
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        setVideos(data.videos || []);
        setVideoError(null);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        setVideoError("Unable to load videos at this time.");
        setVideos([]);
      } finally {
        setLoadingVideos(false);
      }
    };

    fetchYouTubeVideos();
  }, []);

  // Fetch Medium articles
  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        setLoadingArticles(true);
        const response = await fetch("/api/medium");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data.articles || []);
        setArticleError(null);
      } catch (error) {
        console.error("Error fetching Medium articles:", error);
        setArticleError("Unable to load articles at this time.");
        setArticles([]);
      } finally {
        setLoadingArticles(false);
      }
    };

    fetchMediumArticles();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header Section */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(110,58,255,0.15),_transparent_50%)]" />

        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300/80">
            THOUGHT LEADERSHIP
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            Media & Insights
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-sm text-slate-300 md:text-base">
            Independent perspectives on ERP, systems strategy, and building freedom through better technology decisions.
          </p>
        </div>
      </section>

      {/* Medium Articles Section */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-8">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]">
            <span className="text-2xl font-semibold md:text-3xl">
              Recent Articles
            </span>
          </h2>
          <div className="mt-3 h-px w-20 bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]" />
        </div>

        {loadingArticles && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-video w-full rounded-lg bg-slate-800/50" />
                <div className="mt-3 h-4 w-3/4 rounded bg-slate-800/50" />
                <div className="mt-2 h-3 w-1/2 rounded bg-slate-800/50" />
              </div>
            ))}
          </div>
        )}

        {articleError && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 text-center">
            <p className="text-slate-400">{articleError}</p>
          </div>
        )}

        {!loadingArticles && !articleError && articles.length === 0 && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 text-center">
            <p className="text-slate-400">No articles available at this time.</p>
          </div>
        )}

        {!loadingArticles && !articleError && articles.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden transition-all duration-300 hover:border-slate-600 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                  <Image
                    src={
                      brokenImages.has(`article-${index}`)
                        ? FALLBACK_IMAGE
                        : article.thumbnail || FALLBACK_IMAGE
                    }
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={() => handleImageError(`article-${index}`)}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-100 line-clamp-2 group-hover:text-emerald-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400">
                    {new Date(article.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  {article.description && (
                    <p
                      className="mt-2 text-sm text-slate-300 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: article.description
                          .replace(/<[^>]*>/g, "")
                          .substring(0, 150) + "...",
                      }}
                    />
                  )}
                  {article.categories.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {article.categories.slice(0, 3).map((cat, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-slate-800/50 text-slate-300"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-3 flex items-center text-xs text-emerald-300">
                    Read on Medium
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* YouTube Videos Section */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-8">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]">
            <span className="text-2xl font-semibold md:text-3xl">
              Latest Videos
            </span>
          </h2>
          <div className="mt-3 h-px w-20 bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]" />
        </div>

        {loadingVideos && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-video w-full rounded-lg bg-slate-800/50" />
                <div className="mt-3 h-4 w-3/4 rounded bg-slate-800/50" />
                <div className="mt-2 h-3 w-1/2 rounded bg-slate-800/50" />
              </div>
            ))}
          </div>
        )}

        {videoError && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 text-center">
            <p className="text-slate-400">{videoError}</p>
          </div>
        )}

        {!loadingVideos && !videoError && videos.length === 0 && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 text-center">
            <p className="text-slate-400">No videos available at this time.</p>
          </div>
        )}

        {!loadingVideos && !videoError && videos.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden transition-all duration-300 hover:border-slate-600 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                  <Image
                    src={brokenImages.has(`video-${video.id}`) ? FALLBACK_IMAGE : video.thumbnail || FALLBACK_IMAGE}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={() => handleImageError(`video-${video.id}`)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <svg
                      className="h-16 w-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-100 line-clamp-2 group-hover:text-emerald-300 transition-colors">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400">
                    {new Date(video.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  {video.description && (
                    <p className="mt-2 text-sm text-slate-300 line-clamp-2">
                      {video.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
