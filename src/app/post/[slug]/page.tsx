import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { PostContent } from "./PostContent";

interface PostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Mental Wealth Solutions`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="min-h-screen pt-28 pb-20">
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gold/70 hover:text-gold transition-colors text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-3xl mx-auto px-6 mb-12">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-wider text-gold/70 bg-gold/10 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-cream/40 text-sm">
          <span>{post.author}</span>
          {post.date && (
            <>
              <span className="w-1 h-1 rounded-full bg-gold/40" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </>
          )}
        </div>
      </header>

      <GoldDivider />

      {/* Markdown Content */}
      <div className="max-w-3xl mx-auto px-6 prose-mws">
        <PostContent content={post.content} />
      </div>

      {/* Footer nav */}
      <div className="max-w-3xl mx-auto px-6 mt-16 pt-8 border-t border-white/5">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-400 transition-colors font-medium"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          All Posts
        </Link>
      </div>
    </article>
  );
}
