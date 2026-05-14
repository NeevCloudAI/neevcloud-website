import { Command, Eye, Languages, Mic } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type AvailableModelCategory = {
  icon: LucideIcon;
  badgeLabel: string;
  title: string;
  description: string;
  features: readonly string[];
};

export const AVAILABLE_MODEL_CATEGORIES: readonly AvailableModelCategory[] = [
  {
    icon: Languages,
    badgeLabel: "TEXT · LANGUAGE",
    title: "Language Models",
    description:
      "Generate text, answer questions, summarize documents, and understand context across 100+ languages.",
    features: [
      "GPT-style models for open-ended generation",
      "Instruction-tuned models for task completion",
      "Specialized models for code generation",
      "Multilingual models supporting 100+ languages",
    ],
  },
  {
    icon: Eye,
    badgeLabel: "IMAGES · VISION",
    title: "Computer Vision",
    description:
      "Classify images, detect objects, segment scenes, and extract information from visual content with OCR and facial analysis.",
    features: [
      "Image segmentation and scene understanding",
      "Optical character recognition (OCR)",
      "Facial analysis and landmark detection",
      "Object detection and classification",
    ],
  },
  {
    icon: Mic,
    badgeLabel: "AUDIO · SPEECH",
    title: "Audio and Speech",
    description:
      "Transcribe speech, understand audio content, and process voice data with speaker identification and language detection.",
    features: [
      "Speech-to-text transcription",
      "Audio classification and tagging",
      "Language identification",
      "Voice activity detection",
    ],
  },
  {
    icon: Command,
    badgeLabel: "DOMAIN · INDUSTRY",
    title: "Specialized Models",
    description:
      "Models trained for specific industries, healthcare, finance, legal, and scientific research, with domain-specific intelligence.",
    features: [
      "Scientific paper summarization",
      "Medical text analysis",
      "Financial document understanding",
      "Code vulnerability detection",
    ],
  },
] as const;
