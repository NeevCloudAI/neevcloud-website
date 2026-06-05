import { AI_INFERENCE_FAMILY_CONFIGURATION } from "../constants/transparent-pricing-section.constants";
import type {
  AiInferenceModelFamily,
  AiInferenceModelFamilyId,
  AiInferenceModelFamilyOption,
  AiInferencePricingRow,
} from "../types/transparent-pricing-section.types";

export const AI_INFERENCE_MODEL_FAMILY_OPTIONS: readonly AiInferenceModelFamilyOption[] =
  [
    { id: "popular-llms", number: "01", label: "Popular LLMs" },
    { id: "embedding-models", number: "02", label: "Embedding Models" },
    { id: "image-models", number: "03", label: "Image Models" },
    { id: "custom-models", number: "04", label: "Custom Models" },
  ] as const;

export const AI_INFERENCE_POPULAR_LLM_ROWS: readonly AiInferencePricingRow[] = [
  {
    id: "llama-3-1-8b",
    model: "Llama 3.1 8B",
    cells: ["₹4.17", "₹6.68", "128K"],
  },
  {
    id: "llama-3-1-70b",
    model: "Llama 3.1 70B",
    cells: ["₹22.55", "₹70.97", "128K"],
  },
  {
    id: "llama-3-1-405b",
    model: "Llama 3.1 405B",
    cells: ["73.48", "100.20", "128K"],
  },
  {
    id: "kimi-k2-instruct",
    model: "Kimi K2 Instruct",
    cells: ["₹12.54", "₹16.72", "128K"],
  },
  {
    id: "glm-4-5",
    model: "GLM 4.5",
    cells: ["₹8.35", "₹112.54", "128K"],
  },
  {
    id: "deepseek-v3",
    model: "DeepSeek V3",
    cells: ["₹18.39", "₹25.11", "64K"],
  },
  {
    id: "hermes-4",
    model: "Hermes 4",
    cells: ["₹15.06", "₹20.90", "32K"],
  },
] as const;

export const AI_INFERENCE_EMBEDDING_MODEL_ROWS: readonly AiInferencePricingRow[] =
  [
    {
      id: "text-embedding-3-small",
      model: "text-embedding-3-small",
      cells: ["₹4.17", "1536", "RAG, semantic search"],
    },
    {
      id: "text-embedding-3-large",
      model: "text-embedding-3-large",
      cells: ["₹22.55", "3072", "High-precision retrieval"],
    },
    {
      id: "text-embedding-ada-002",
      model: "text-embedding-ada-002",
      cells: ["₹73.48", "1536", "General embeddings"],
    },
  ] as const;

export const AI_INFERENCE_IMAGE_MODEL_ROWS: readonly AiInferencePricingRow[] = [
  {
    id: "stable-diffusion-xl",
    model: "Stable Diffusion XL",
    cells: ["₹4.17", "₹6.68", "128K"],
  },
  {
    id: "flux-1-dev",
    model: "FLUX.1 Dev",
    cells: ["₹22.55", "₹70.97", "128K"],
  },
  {
    id: "flux-1-schnell",
    model: "FLUX.1 Schnell",
    cells: ["₹73.48", "₹100.20", "128K"],
  },
] as const;

export const AI_INFERENCE_CUSTOM_MODEL_ROWS: readonly AiInferencePricingRow[] =
  [
    {
      id: "custom-under-10b",
      model: "< 10B parameters",
      cells: ["₹4.17", "Custom endpoint"],
    },
    {
      id: "custom-10b-70b",
      model: "10B - 70B parameters",
      cells: ["₹22.55", "Optimized serving"],
    },
    {
      id: "custom-70b-plus",
      model: "70B+ parameters",
      cells: ["₹73.48", "Contact sales"],
    },
  ] as const;

export const AI_INFERENCE_MODEL_FAMILIES: readonly AiInferenceModelFamily[] = [
  {
    id: "popular-llms",
    number: "01",
    sidebarLabel: "Popular LLMs",
    titleName: AI_INFERENCE_FAMILY_CONFIGURATION.titleName,
    subtitle: AI_INFERENCE_FAMILY_CONFIGURATION.subtitle,
    tableHeaders: [
      "Model",
      "Input / 1M tokens",
      "Output / 1M tokens",
      "Context",
    ],
    rows: AI_INFERENCE_POPULAR_LLM_ROWS,
  },
  {
    id: "embedding-models",
    number: "02",
    sidebarLabel: "Embedding Models",
    titleName: AI_INFERENCE_FAMILY_CONFIGURATION.titleName,
    subtitle: AI_INFERENCE_FAMILY_CONFIGURATION.subtitle,
    tableHeaders: ["Model", "Price / 1M tokens", "Dimensions", "Use Case"],
    rows: AI_INFERENCE_EMBEDDING_MODEL_ROWS,
  },
  {
    id: "image-models",
    number: "03",
    sidebarLabel: "Image Models",
    titleName: AI_INFERENCE_FAMILY_CONFIGURATION.titleName,
    subtitle: AI_INFERENCE_FAMILY_CONFIGURATION.subtitle,
    tableHeaders: [
      "Model",
      "Input / 1M tokens",
      "Output / 1M tokens",
      "Context",
    ],
    rows: AI_INFERENCE_IMAGE_MODEL_ROWS,
  },
  {
    id: "custom-models",
    number: "04",
    sidebarLabel: "Custom Models",
    titleName: AI_INFERENCE_FAMILY_CONFIGURATION.titleName,
    subtitle: AI_INFERENCE_FAMILY_CONFIGURATION.subtitle,
    tableHeaders: ["Model", "Base Price / 1M tokens", "Notes"],
    rows: AI_INFERENCE_CUSTOM_MODEL_ROWS,
  },
] as const;

export const AI_INFERENCE_MODEL_FAMILY_BY_ID: Record<
  AiInferenceModelFamilyId,
  AiInferenceModelFamily
> = {
  "popular-llms": AI_INFERENCE_MODEL_FAMILIES[0],
  "embedding-models": AI_INFERENCE_MODEL_FAMILIES[1],
  "image-models": AI_INFERENCE_MODEL_FAMILIES[2],
  "custom-models": AI_INFERENCE_MODEL_FAMILIES[3],
};
