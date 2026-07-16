export const BLOG_SECTION = {
  title: "Latest From The Blog",
  ctaLabel: "View All Posts",
  ctaHref: "https://blog.neevcloud.com/",
} as const;

export type BlogPost = {
  title: string;
  href: string;
  image: string;
  date: string;
};

// Real posts from blog.neevcloud.com (RSS), newest first.
export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Fine-Tuning Open-Source LLMs on RTX PRO 6000: Best Practices",
    href: "https://blog.neevcloud.com/fine-tuning-open-source-llms-on-rtx-pro-6000-best-practices",
    image:
      "https://cdn.hashnode.com/uploads/covers/67a20ef8875434c6d881b8a5/08a77de5-0354-4374-ac2e-bc8416285301.jpg",
    date: "Jun 29, 2026",
  },
  {
    title: "Operators for the Inference Era: Simplifying LLM Serving on Kubernetes",
    href: "https://blog.neevcloud.com/operators-for-the-inference-era-simplifying-llm-serving-on-kubernetes",
    image:
      "https://cdn.hashnode.com/uploads/covers/67a20ef8875434c6d881b8a5/3217c9f5-806c-4a0b-bee9-0d180e75d8bf.jpg",
    date: "Jun 15, 2026",
  },
  {
    title: "The Agentic Control Plane: Why Every AI Platform Will Need This Layer And Most Don't Have It Yet",
    href: "https://blog.neevcloud.com/the-agentic-control-plane-why-every-ai-platform-will-need-this-layer-and-most-don-t-have-it-yet",
    image:
      "https://cdn.hashnode.com/uploads/covers/67a20ef8875434c6d881b8a5/cb71b41e-b632-4cdb-91ba-7accd02f385f.jpg",
    date: "Jun 08, 2026",
  },
  {
    title: "From Prototype to Production: Running AI Agents Reliably on Kubernetes",
    href: "https://blog.neevcloud.com/from-prototype-to-production-running-ai-agents-reliably-on-kubernetes",
    image:
      "https://cdn.hashnode.com/uploads/covers/67a20ef8875434c6d881b8a5/8d9cfb9c-9a96-49b4-b33b-c68708d6187e.jpg",
    date: "May 25, 2026",
  },
  {
    title: "Kubernetes Is Becoming the Operating System for AI Infrastructure",
    href: "https://blog.neevcloud.com/kubernetes-is-becoming-the-operating-system-for-ai-infrastructure",
    image:
      "https://cdn.hashnode.com/uploads/covers/67a20ef8875434c6d881b8a5/541ab32c-5d78-4b81-bc42-c29598717a98.jpg",
    date: "May 20, 2026",
  },
  {
    title: "Why AI-Native Kubernetes Is the Next Evolution of Cloud Infrastructure",
    href: "https://blog.neevcloud.com/why-ai-native-kubernetes-is-the-next-evolution-of-cloud-infrastructure",
    image:
      "https://cdn.hashnode.com/uploads/covers/67a20ef8875434c6d881b8a5/44c735f8-d683-4e65-9fac-aa5291adb0e1.jpg",
    date: "Apr 27, 2026",
  },
  {
    title: "Confidential AI Meets Sovereign AI: Building Trust into India's AI Stack",
    href: "https://blog.neevcloud.com/confidential-ai-meets-sovereign-ai-building-trust-into-india-s-ai-stack",
    image:
      "https://cdn.hashnode.com/uploads/covers/67a20ef8875434c6d881b8a5/f99467cb-9d62-43d4-8f97-25089adf8f98.jpg",
    date: "Apr 20, 2026",
  },
  {
    title: "Project Orion: Taking Orbital AI Infrastructure Beyond Earth",
    href: "https://blog.neevcloud.com/project-orion-taking-orbital-ai-infrastructure-beyond-earth",
    image:
      "https://cdn.hashnode.com/uploads/covers/67a20ef8875434c6d881b8a5/07220756-7137-416b-a0a0-04f4c00c4973.jpg",
    date: "Apr 14, 2026",
  },
  {
    title: "Agentic AI at Enterprise Scale: From Scripts to Autonomous Systems",
    href: "https://blog.neevcloud.com/agentic-ai-at-enterprise-scale-from-scripts-to-autonomous-systems",
    image:
      "https://cdn.hashnode.com/uploads/covers/67a20ef8875434c6d881b8a5/4a31d252-9f04-4bc2-bbd8-c1ff761bb104.jpg",
    date: "Apr 06, 2026",
  },
  {
    title: "Inside GB300 Architecture: Memory, Bandwidth & AI Performance Explained",
    href: "https://blog.neevcloud.com/inside-gb300-architecture-memory-bandwidth-ai-performance-explained",
    image:
      "https://cdn.hashnode.com/uploads/covers/67a20ef8875434c6d881b8a5/7d7daed1-69dd-4ef7-8e77-56e0937c08d7.jpg",
    date: "Mar 30, 2026",
  },
];
