"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'%3E%3Crect width='640' height='360' fill='%231e293b'/%3E%3Ctext x='320' y='185' font-family='sans-serif' font-size='18' fill='%23475569' text-anchor='middle'%3ENo Image%3C/text%3E%3C/svg%3E";

type Article = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string | null;
  categories: string[];
};

type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  videoId: string;
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ArticleCard({ article, brokenImages, onImageError }: {
  article: Article;
  brokenImages: Set<string>;
  onImageError: (src: string) => void;
}) {
  const imgSrc = article.thumbnail && !brokenImages.has(article.thumbnail)
    ? article.thumbnail
    : FALLBACK_IMAGE;

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden flex flex-col hover:border-slate-600 transition"
    >
      <div className="relative h-44 w-full bg-slate-800">
        <Image
          src={imgSrc}
          alt={article.title}
          fill
          className="object-cover group-hover:opacity-90 transition"
          onError={() => article.thumbnail && onImageError(article.thumbnail)}
          unoptimized={imgSrc === FALLBACK_IMAGE}
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#6E3AFF]/20 text-[#a78bfa] border border-[#6E3AFF]/30">
            Medium
          </span>
          <span className="text-xs text-slate-500">{formatDate(article.pubDate)}</span>
        </div>
        <h3 className="text-base font-semibold leading-snug group-hover:text-emerald-300 transition flex-1">
          {article.title}
        </h3>
        {article.description && (
          <p className="mt-2 text-sm text-slate-400 line-clamp-2">{article.description}</p>
        )}
        <p className="mt-3 text-xs text-emerald-300/80 font-medium">Read on Medium →</p>
      </div>
    </a>
  );
}

function VideoCard({ video, brokenImages, onImageError }: {
  video: Video;
  brokenImages: Set<string>;
  onImageError: (src: string) => void;
}) {
  const imgSrc = !brokenImages.has(video.thumbnail) ? video.thumbnail : FALLBACK_IMAGE;
  const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden flex flex-col hover:border-slate-600 transition"
    >
      <div className="relative h-44 w-full bg-slate-800">
        <Image
          src={imgSrc}
          alt={video.title}
          fill
          className="object-cover group-hover:opacity-90 transition"
          onError={() => onImageError(video.thumbnail)}
          unoptimized={imgSrc === FALLBACK_IMAGE}
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-black/80 transition">
            <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
            YouTube
          </span>
          <span className="text-xs text-slate-500">{formatDate(video.publishedAt)}</span>
        </div>
        <h3 className="text-base font-semibold leading-snug group-hover:text-emerald-300 transition flex-1">
          {video.title}
        </h3>
        {video.description && (
          <p className="mt-2 text-sm text-slate-400 line-clamp-2">{video.description}</p>
        )}
        <p className="mt-3 text-xs text-emerald-300/80 font-medium">Watch on YouTube →</p>
      </div>
    </a>
  );
}

export default function WritingPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  function handleImageError(src: string) {
    setBrokenImages(prev => new Set(prev).add(src));
  }

  useEffect(() => {
    fetch("/api/medium")
      .then(r => r.json())
      .then(data => setArticles(data.items ?? []))
      .finally(() => setLoadingArticles(false));

    fetch("/api/youtube")
      .then(r => r.json())
      .then(data => setVideos(data.videos ?? []))
      .finally(() => setLoadingVideos(false));
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300/80 uppercase">
          Writing & Appearances
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Writing</h1>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]" />
        <p className="mt-5 max-w-2xl text-sm text-slate-300 md:text-base">
          Thoughts on ERP, AI-augmented consulting, and building technology that serves people.
        </p>

        {/* Articles */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold text-white mb-6">Articles</h2>
          {loadingArticles ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/40 h-64 animate-pulse" />
              ))}
            </div>
          ) : articles.length === 0 ? (
            <p className="text-slate-400 text-sm">No articles found.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map(a => (
                <ArticleCard
                  key={a.link}
                  article={a}
                  brokenImages={brokenImages}
                  onImageError={handleImageError}
                />
              ))}
            </div>
          )}
        </section>

        {/* Appearances */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-white mb-6">Appearances</h2>
          {loadingVideos ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/40 h-64 animate-pulse" />
              ))}
            </div>
          ) : videos.length === 0 ? (
            <p className="text-slate-400 text-sm">No appearances found.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map(v => (
                <VideoCard
                  key={v.id}
                  video={v}
                  brokenImages={brokenImages}
                  onImageError={handleImageError}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
