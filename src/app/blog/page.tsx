import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { GoldDivider } from "@/components/ui/GoldDivider";

export const revalidate = 300; // ISR: revalidate every 5 minutes

export const metadata: Metadata = {
  title: "Blog | Mental Wealth Solutions",
  description:
    "Insights on narcissistic abuse recovery, mental wealth building, and emotional resilience by Matthew Sexton, LCSW.",
};

export default async function BlogIndex() {
  // Blog is temporarily down while articles are being updated
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

      {/* Placeholder while articles are being updated */}
      <div className="max-w-2xl mx-auto px-6">
        <div className="glass-card p-10 text-center border-l-2 border-gold/40">
          <div className="text-4xl mb-5">&#9998;</div>
          <h2 className="font-heading text-xl font-bold text-cream mb-3">
            Articles Being Updated
          </h2>
          <p className="text-cream/50 text-sm leading-relaxed max-w-md mx-auto">
            Our blog content is currently being refreshed with new,
            evidence-based articles. Check back soon for updated insights on
            wellness, personal growth, and mental health strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
