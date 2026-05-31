import type { ApplicationCardItem } from "@/shared/types/application-card.types";

export const GENERATIVE_AI_APPLICATION_CARDS: readonly ApplicationCardItem[] = [
  {
    id: "image-video-generation",
    className: "md:col-span-3 md:row-span-2",
    label: "01 - FEATURED",
    title: "Image & Video Generation",
    description:
      "Create visual content from text prompts. Power creative tools, design assistants, and media applications with FLUX, SD, and SVD.",
    icon: "/icons/drug-discovery.svg",
    image: "/images/healthcare-drug-discovery.png",
    imageSpacing: true,
    theme: "gray",
  },
  {
    id: "conversational-ai",
    className: "md:col-span-3",
    label: "02",
    title: "Conversational AI",
    description:
      "Chatbots, virtual assistants, customer support. Streaming responses, conversation memory.",
    icon: "/icons/medical-imaging.svg",
    theme: "gray",
  },
  {
    id: "rag-applications",
    className: "md:col-span-3",
    label: "03",
    title: "RAG Applications",
    description:
      "Ground LLM responses in proprietary data. Doc Q&A, knowledge bases, enterprise search.",
    icon: "/icons/genomic-analysis.svg",
    theme: "gray",
  },
  {
    id: "code-assistance",
    className: "md:col-span-2",
    label: "04",
    title: "Code Assistance",
    description:
      "Developer tools, completion, review, docs, bug detection, test generation.",
    icon: "/icons/medical-research.svg",
    theme: "gray",
  },
  {
    id: "content-generation",
    className: "md:col-span-2",
    label: "05 - MARKETING",
    title: "Content Generation",
    description:
      "Marketing copy, product descriptions, social posts, articles at scale.",
    icon: "/icons/startups-innovation.svg",
    theme: "dark",
  },
  {
    id: "multimodal-apps",
    className: "md:col-span-2",
    label: "06",
    title: "Multimodal Apps",
    description:
      "Combine text, image, audio. Visual Q&A, doc understanding, accessibility tools.",
    icon: "/icons/clinical-decision.svg",
    theme: "gray",
  },
] as const;
