export type BlogType =
  | "alternatives"
  | "comparison"
  | "case-study"
  | "engineering"
  | "product"
  | "tutorial"
  | "company"
  | "research";

export type BlogFaq = { question: string; answer: string };
export type BlogHowToStep = { name: string; text: string };
export type BlogAuthor = { name: string; title?: string; url?: string };
export type BlogHeading = { id: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  rawDate: string;
  authorInfo?: BlogAuthor;
  image: string;
  type: BlogType;
  featured: number;
  tags: string[];
  faqs?: BlogFaq[];
  howToSteps?: BlogHowToStep[];
  readingMinutes: number;
};

export type BlogCardPost = Pick<
  BlogPost,
  | "slug"
  | "title"
  | "excerpt"
  | "image"
  | "date"
  | "type"
  | "featured"
  | "readingMinutes"
  | "authorInfo"
>;

export const BLOG_TYPE_LABELS: Record<BlogType, string> = {
  alternatives: "Alternatives",
  comparison: "Comparison",
  "case-study": "Case Study",
  engineering: "Engineering",
  product: "Product",
  tutorial: "Tutorial",
  company: "Company",
  research: "Research",
};
