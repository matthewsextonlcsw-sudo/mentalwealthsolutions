import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { GoldDivider } from "@/components/ui/GoldDivider";

export const metadata: Metadata = {
  title: "Blog | Mental Wealth Solutions",
  description:
    "Insights on narcissistic abuse recovery, mental wealth building, and emotional resilience by Matthew Sexton, LCSW.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="min-h-screen pt-28 pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          <span className="gold-text-gradient">The Blog</span>
        </h1>
        <p className="text-cream/60 text-lg max-w-2xl mx-auto font-light">
          Insights on narcissistic abuse recovery, mental wealth building, and
          the patterns that shape our relationships.
        </p>
      </div>

      <GoldDivider />

      {/* Posts grid */}
      <div className="max-w-5xl mx-auto px-6">
        {posts.length === 0 ? (
          <p className="text-center text-cream/40 text-lg">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/post/${post.slug}`}
                className="glass-card p-8 group hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
              >
                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs uppercase tracking-wider text-gold/70 bg-gold/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h2 className="font-heading text-xl md:text-2xl font-bold text-cream group-hover:text-gold transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-cream/50 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}

                {/* Meta */}
                <div className="flex items-center justify-between text-cream/30 text-xs mt-auto pt-4 border-t border-white/5">
                  <span>{post.author}</span>
                  {post.date && (
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
