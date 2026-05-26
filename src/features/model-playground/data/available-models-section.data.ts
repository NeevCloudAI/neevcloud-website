import type { AvailableModelCategory } from "../types/available-models-section.types";

export const AVAILABLE_MODEL_CATEGORIES: readonly AvailableModelCategory[] = [
  {
    category: {
      icon: "/icons/language.svg",
      badgeLabel: "TEXT · LANGUAGE",
      title: "Language Models",
      description:
        "Generate text, answer questions, summarize documents, and understand context across 100+ languages.",
      features: [
        { id: 1, title: "GPT-style models for open-ended generation" },
        { id: 2, title: "Instruction-tuned models for task completion" },
        { id: 3, title: "Specialized models for code generation" },
        {
          id: 4,
          title: "Multilingual models supporting 100+ languages",
        },
      ],
    },
    hover: {
      label: "TRY THESE TASKS",
      tasks: [
        { id: 1, title: "Creative writing and content generation" },
        { id: 2, title: "Question answering from context" },
        { id: 3, title: "Code completion and debugging" },
        { id: 4, title: "Translation across languages" },
      ],
      ctaLabel: "Explore Language Models",
      ctaHref: "/model-catalog",
    },
  },
  {
    category: {
      icon: "/icons/eye.svg",
      badgeLabel: "IMAGES · VISION",
      title: "Computer Vision",
      description:
        "Classify images, detect objects, segment scenes, and extract information from visual content with OCR and facial analysis.",
      features: [
        { id: 1, title: "Image segmentation and scene understanding" },
        { id: 2, title: "Optical character recognition (OCR)" },
        { id: 3, title: "Facial analysis and landmark detection" },
        { id: 4, title: "Object detection and classification" },
      ],
    },
    hover: {
      label: "TRY THESE TASKS",
      tasks: [
        { id: 1, title: "Object detection in real-time video" },
        { id: 2, title: "Document scanning and text extraction" },
        { id: 3, title: "Image classification and tagging" },
        { id: 4, title: "Visual search and similarity matching" },
      ],
      ctaLabel: "Explore Vision Models",
      ctaHref: "/model-catalog",
    },
  },
  {
    category: {
      icon: "/icons/mic.svg",
      badgeLabel: "AUDIO · SPEECH",
      title: "Audio and Speech",
      description:
        "Transcribe speech, understand audio content, and process voice data with speaker identification and language detection.",
      features: [
        { id: 1, title: "Speech-to-text transcription" },
        { id: 2, title: "Audio classification and tagging" },
        { id: 3, title: "Language identification" },
        { id: 4, title: "Voice activity detection" },
      ],
    },
    hover: {
      label: "TRY THESE TASKS",
      tasks: [
        { id: 1, title: "Meeting transcription and summaries" },
        { id: 2, title: "Voice command recognition" },
        { id: 3, title: "Audio content moderation" },
        { id: 4, title: "Multilingual speech translation" },
      ],
      ctaLabel: "Explore Audio Models",
      ctaHref: "/model-catalog",
    },
  },
  {
    category: {
      icon: "/icons/command.svg",
      badgeLabel: "DOMAIN · INDUSTRY",
      title: "Specialized Models",
      description:
        "Models trained for specific industries, healthcare, finance, legal, and scientific research, with domain-specific intelligence.",
      features: [
        { id: 1, title: "Scientific paper summarization" },
        { id: 2, title: "Medical text analysis" },
        { id: 3, title: "Financial document understanding" },
        { id: 4, title: "Code vulnerability detection" },
      ],
    },
    hover: {
      label: "TRY THESE TASKS",
      tasks: [
        { id: 1, title: "Clinical note analysis and coding" },
        { id: 2, title: "Regulatory document review" },
        { id: 3, title: "Research literature synthesis" },
        { id: 4, title: "Domain-specific Q&A systems" },
      ],
      ctaLabel: "Explore Specialized Models",
      ctaHref: "/model-catalog",
    },
  },
] as const;
