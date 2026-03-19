import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import {
  getArticleBySlug,
  getAllSlugs,
  getRelatedArticles,
} from "@/lib/sanity/queries";
import { estimateReadTime } from "@/lib/sanity/utils";
import type { PortableTextBlock } from "@portabletext/react";

export const revalidate = 60;
export const dynamicParams = true; // serve un-prerendered slugs on demand

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Skip static generation if Sanity isn't configured yet
  if (
    !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "your-project-id-here"
  ) {
    return [];
  }
  try {
    const slugs = await getAllSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.seo?.metaTitle ?? article.title} — Junova Learning Center`,
    description: article.seo?.metaDescription ?? article.description,
    openGraph: article.seo?.ogImage
      ? { images: [{ url: article.seo.ogImage }] }
      : undefined,
  };
}

// ── Portable Text components ───────────────────────────────────────────────

const CALLOUT_STYLES: Record<string, { border: string; bg: string; icon: string }> = {
  info:      { border: "border-blue-500/30",  bg: "bg-blue-500/5",  icon: "ℹ️" },
  tip:       { border: "border-green-500/30", bg: "bg-green-500/5", icon: "💡" },
  warning:   { border: "border-amber-500/30", bg: "bg-amber-500/5", icon: "⚠️" },
  important: { border: "border-red-500/30",   bg: "bg-red-500/5",   icon: "🔴" },
};

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-white/50 leading-relaxed mb-4">{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-lg font-semibold text-white/90 mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-base font-semibold text-white/80 mt-6 mb-2">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-sm font-semibold text-white/70 mt-4 mb-1.5">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside pl-5 space-y-1 mb-4 text-white/50">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside pl-5 space-y-1 mb-4 text-white/50">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-white/80">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="text-blue-300/80 bg-white/5 px-1.5 py-0.5 rounded text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-blue-400 hover:underline"
      >
        {children}
      </a>
    ),
    internalLink: ({ children, value }: any) => (
      <Link
        href={`/learn/${value?.slug}`}
        className="text-blue-400 hover:underline"
      >
        {children}
      </Link>
    ),
  },
  types: {
    codeBlock: ({ value }: any) => (
      <div className="my-6 rounded-lg overflow-hidden border border-white/5">
        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
          {value.filename && (
            <span className="text-xs text-white/30 font-mono">{value.filename}</span>
          )}
          {value.language && (
            <span className="ml-auto text-[10px] text-white/20 uppercase tracking-wider font-medium">
              {value.language}
            </span>
          )}
        </div>
        <pre className="p-4 overflow-x-auto bg-white/[0.02]">
          <code className="text-sm text-white/60 font-mono whitespace-pre">
            {value.code}
          </code>
        </pre>
      </div>
    ),
    callout: ({ value }: any) => {
      const style = CALLOUT_STYLES[value.tone] ?? CALLOUT_STYLES.info;
      return (
        <div className={`my-6 rounded-lg border ${style.border} ${style.bg} px-4 py-3`}>
          <div className="flex gap-2.5">
            <span className="text-base shrink-0 mt-0.5">{style.icon}</span>
            <div className="min-w-0">
              <PortableText
                value={value.body}
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>
      );
    },
    figure: ({ value }: any) => (
      <figure className="my-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={value.image?.asset?.url ?? value.image}
          alt={value.alt ?? ""}
          className="rounded-lg w-full border border-white/5"
        />
        {value.caption && (
          <figcaption className="mt-2 text-center text-xs text-white/25">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    videoEmbed: ({ value }: any) => {
      const youtubeId = value.url?.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/
      )?.[1];
      return (
        <figure className="my-6">
          {youtubeId ? (
            <div className="aspect-video rounded-lg overflow-hidden border border-white/5">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={value.caption ?? "Video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <a
              href={value.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-white/5 bg-white/5 px-4 py-3 text-sm text-blue-400 hover:underline"
            >
              ▶ Watch video
            </a>
          )}
          {value.caption && (
            <figcaption className="mt-2 text-center text-xs text-white/25">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

// ── Page ──────────────────────────────────────────────────────────────────

const DIFFICULTY_LABELS: Record<string, string> = {
  beginner:     "Beginner",
  intermediate: "Intermediate",
  advanced:     "Advanced",
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  const related = await getRelatedArticles(article._id, article.category);

  const readTime = estimateReadTime(
    article.body as PortableTextBlock[] ?? [],
    article.readTimeOverride
  );

  const displayDate = article.updatedAt ?? article.publishedAt;
  const dateLabel = article.updatedAt ? "Updated" : "Published";

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="lg:w-56 shrink-0">
          <div className="sticky top-24">
            <Link
              href="/learn/guides"
              className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors mb-6"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Guides
            </Link>

            {related.length > 0 && (
              <div>
                <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/20 mb-3">
                  In {article.category}
                </p>
                <div className="space-y-1">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/learn/${r.slug}`}
                      className="block rounded-md px-3 py-2 text-xs text-white/40 hover:bg-white/5 hover:text-white/70 transition-colors line-clamp-2"
                    >
                      {r.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <article className="flex-1 min-w-0 max-w-2xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-6">
            <Link href="/learn" className="hover:text-white/50 transition-colors">Learn</Link>
            <span>/</span>
            <Link href="/learn/guides" className="hover:text-white/50 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-white/40 truncate">{article.category}</span>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <span className="text-[10px] font-medium uppercase tracking-wider text-blue-400/70">
              {article.category}
            </span>
            <h1 className="mt-2 text-2xl font-semibold text-white leading-snug md:text-3xl">
              {article.title}
            </h1>
            <p className="mt-3 text-sm text-white/40">{article.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/20">
              <span>
                {dateLabel}{" "}
                {new Date(displayDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {readTime && <span>{readTime}</span>}
              {article.difficulty && (
                <span>{DIFFICULTY_LABELS[article.difficulty] ?? article.difficulty}</span>
              )}
            </div>
            {article.tags?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] text-white/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-6 h-px bg-white/5" />
          </header>

          {/* Body */}
          <div className="min-w-0">
            <PortableText
              value={article.body as PortableTextBlock[]}
              components={portableTextComponents}
            />
          </div>

          {/* Footer nav */}
          <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between">
            <Link
              href="/learn/guides"
              className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              All Guides
            </Link>
            <Link
              href="/contact"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Was this helpful? →
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
