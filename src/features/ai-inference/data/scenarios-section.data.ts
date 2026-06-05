import {
  Code2,
  ImageIcon,
  LayoutList,
  MessageSquare,
  PenLine,
  Search,
} from "lucide-react";
import type { AiInferenceScenarioItem } from "../types/scenarios-section.types";

export const AI_INFERENCE_SCENARIO_ITEMS: readonly AiInferenceScenarioItem[] = [
  {
    id: "customer-facing-chatbots",
    icon: MessageSquare,
    iconLabel: "Customer-facing chatbots",
    title: "Customer-Facing Chatbots",
    description:
      "Deploy conversational AI for customer support, sales assistance, and interactive product guides.",
    tags: ["Llama 3.1 70B", "Mistral 7B Instruct", "Custom fine-tuned"],
  },
  {
    id: "rag-applications",
    icon: Search,
    iconLabel: "RAG applications",
    title: "RAG Applications",
    description:
      "Knowledge-grounded AI for document Q&A, internal search, and enterprise knowledge bases.",
    tags: ["text-embedding-3-large", "Llama 3.1 70B", "GLM 4.0"],
  },
  {
    id: "content-generation",
    icon: PenLine,
    iconLabel: "Content generation",
    title: "Content Generation",
    description:
      "Automated content creation for marketing, product descriptions, and social media at scale.",
    tags: ["Llama 3.1 70B", "DeepSeek V3", "Custom brand voice"],
  },
  {
    id: "api-backends",
    icon: Code2,
    iconLabel: "API backends",
    title: "API Backends",
    description:
      "Power developer tools, code assistants, and AI-enhanced applications with reliable inference.",
    tags: ["DeepSeek V3", "Hermes 3", "Custom frameworks"],
  },
  {
    id: "batch-processing",
    icon: LayoutList,
    iconLabel: "Batch processing",
    title: "Batch Processing",
    description:
      "Process large volumes of text for classification, summarization, or entity extraction.",
    tags: ["Async batch API", "Queue management", "Cost optimized"],
  },
  {
    id: "image-generation",
    icon: ImageIcon,
    iconLabel: "Image generation",
    title: "Image Generation",
    description:
      "Create visual content for marketing, design prototyping, and creative applications.",
    tags: ["FLUX.1 Dev", "FLUX.1 Schnell", "Stable Diffusion XL"],
  },
] as const;
