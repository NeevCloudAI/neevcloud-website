import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type {
  BlogAuthor,
  BlogCardPost,
  BlogFaq,
  BlogHowToStep,
  BlogPost,
  BlogType,
} from "./blog-types";

const BLOG_DIRECTORY = path.join(process.cwd(), "content/blog");
const VALID_TYPES = new Set<BlogType>([
  "alternatives",
  "comparison",
  "case-study",
  "engineering",
  "product",
  "tutorial",
  "company",
  "research",
]);

function formatDate(rawDate: string): string {
  const date = new Date(rawDate);
  return Number.isNaN(date.getTime())
    ? rawDate
    : date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function estimateReadingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function toCardPost(post: BlogPost): BlogCardPost {
  const { slug, title, excerpt, image, date, type, featured, readingMinutes } = post;
  return { slug, title, excerpt, image, date, type, featured, readingMinutes };
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) return [];
  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIRECTORY, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  const featured = data.featured === true ? Number.MAX_SAFE_INTEGER : Number(data.featured) || 0;

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    content,
    date: formatDate(data.date ?? ""),
    rawDate: data.date ?? "",
    authorInfo: data.authorInfo as BlogAuthor | undefined,
    image: data.image ?? "",
    type: VALID_TYPES.has(data.type) ? (data.type as BlogType) : "engineering",
    featured,
    tags: Array.isArray(data.tags) ? data.tags : [],
    faqs: data.faqs as BlogFaq[] | undefined,
    howToSteps: data.howToSteps as BlogHowToStep[] | undefined,
    readingMinutes: estimateReadingMinutes(content),
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return getAllBlogSlugs()
    .map(getBlogPostBySlug)
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.rawDate < b.rawDate ? 1 : -1));
}

export function getAllBlogCards(): BlogCardPost[] {
  return getAllBlogPosts().map(toCardPost);
}

export function getFeaturedPosts(): BlogCardPost[] {
  return getAllBlogCards()
    .filter((post) => post.featured > 0)
    .sort((a, b) => a.featured - b.featured)
    .slice(0, 3);
}

export function getRelatedPosts(slug: string, type: BlogType, limit = 3): BlogCardPost[] {
  const others = getAllBlogCards().filter((post) => post.slug !== slug);
  const sameType = others.filter((post) => post.type === type);
  const rest = others.filter((post) => post.type !== type);
  return [...sameType, ...rest].slice(0, limit);
}
