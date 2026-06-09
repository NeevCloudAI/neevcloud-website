import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type { DevelopersTutorialCardItem } from "../types/tutorials-section.types";

export const DEVELOPERS_TUTORIALS_SECTION = {
  titlePrefix: "Build Something Real in Under",
  titleHighlight: "30 Minutes",
  description:
    "Hands-on guides from first API call to production-grade AI systems.",
  cardCtaLabel: "Start Tutorials",
  viewAllCta: "View All Tutorials",
  viewAllCtaRoute: EXTERNAL_LINKS.tutorials,
  viewAllCtaTarget: "_blank",
} as const;

export const DEVELOPERS_TUTORIAL_CARDS: readonly DevelopersTutorialCardItem[] = [
  {
    id: "streaming-chatbot",
    title: "Build a streaming chatbot with NeevCloud + Next.js",
    difficulty: "Beginner",
    duration: "20 MIN",
    ctaHref: EXTERNAL_LINKS.tutorials,
    ctaTarget: "_blank",
  },
  {
    id: "fine-tune-llama",
    title: "Fine-tune Llama 3 8B on your dataset with LoRA",
    difficulty: "Intermediate",
    duration: "30 MIN",
    ctaHref: EXTERNAL_LINKS.tutorials,
    ctaTarget: "_blank",
  },
  {
    id: "deploy-vllm",
    title: "Deploy vLLM on NKS for production inference",
    difficulty: "Intermediate",
    duration: "25 MIN",
    ctaHref: EXTERNAL_LINKS.tutorials,
    ctaTarget: "_blank",
  },
  {
    id: "rag-pipeline",
    title: "RAG pipeline: embeddings + vector search + completions",
    difficulty: "Intermediate",
    duration: "30 MIN",
    ctaHref: EXTERNAL_LINKS.tutorials,
    ctaTarget: "_blank",
  },
  {
    id: "agentic-loop",
    title: "Agentic loop with tool-use in Python",
    difficulty: "Intermediate",
    duration: "20 MIN",
    ctaHref: EXTERNAL_LINKS.tutorials,
    ctaTarget: "_blank",
  },
  {
    id: "migrate-openai",
    title: "Migrate from OpenAI to NeevCloud in 10 minutes",
    difficulty: "Beginner",
    duration: "10 MIN",
    ctaHref: EXTERNAL_LINKS.tutorials,
    ctaTarget: "_blank",
  },
] as const;
