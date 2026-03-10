import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  getFirestorePosts,
  getFirestorePostBySlug,
  type FirestoreBlogPost,
} from "./firestore";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// ---------- MDX helpers (sync, unchanged) ----------

function getMdxPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      return getMdxPostBySlug(slug);
    })
    .filter((post): post is BlogPost => post !== null);
}

function getMdxPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    date: data.date ?? "",
    author: data.author ?? "Matthew Sexton, LCSW",
    tags: data.tags ?? [],
    content,
  };
}

function getMdxSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

// ---------- Firestore → BlogPost adapter ----------

function adaptFirestorePost(fp: FirestoreBlogPost): BlogPost {
  return {
    slug: fp.slug,
    title: fp.title,
    excerpt: fp.excerpt,
    date: fp.date,
    author: fp.author,
    tags: fp.tags,
    content: fp.content,
  };
}

// ---------- Public API (async — merges MDX + Firestore) ----------

export async function getAllPosts(): Promise<BlogPost[]> {
  const mdxPosts = getMdxPosts();
  const firestorePosts = await getFirestorePosts();

  // Merge: MDX slugs take precedence (hand-written override)
  const mdxSlugsSet = new Set(mdxPosts.map((p) => p.slug));
  const uniqueFirestorePosts = firestorePosts
    .filter((fp) => !mdxSlugsSet.has(fp.slug))
    .map(adaptFirestorePost);

  const merged = [...mdxPosts, ...uniqueFirestorePosts];

  return merged.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Check MDX first (hand-written takes priority)
  const mdx = getMdxPostBySlug(slug);
  if (mdx) return mdx;

  // Fall back to Firestore
  const fp = await getFirestorePostBySlug(slug);
  if (fp) return adaptFirestorePost(fp);

  return null;
}

export async function getAllSlugs(): Promise<string[]> {
  const mdxSlugs = getMdxSlugs();
  const firestorePosts = await getFirestorePosts();
  const firestoreSlugs = firestorePosts.map((p) => p.slug);

  // Deduplicate
  return Array.from(new Set(mdxSlugs.concat(firestoreSlugs)));
}
