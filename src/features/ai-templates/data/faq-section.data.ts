import type { FaqItem } from "@/shared/data/faq-section-types";

export const AI_TEMPLATES_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "General",
    question: "What are AI Templates?",
    answer:
      "AI Templates are pre-built GPU images optimized for specific AI workloads. Each ships with a matched OS, CUDA runtime, framework libraries, system utilities, and network configuration, so your environment is ready the moment your GPU deploys.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "How long does a template take to deploy?",
    answer:
      "Templates launch within seconds. Compressed registry images expand on deployment, so you connect and start working almost immediately, no manual CUDA installs or dependency resolution.",
  },
  {
    id: 3,
    category: "General",
    question: "Can I switch templates between workloads?",
    answer:
      "Yes. You select a template during GPU deployment and can switch templates between workloads without rebuilding environments.",
  },
  {
    id: 4,
    category: "Getting Started",
    question: "How do I connect to my environment?",
    answer:
      "Depending on the template, you connect via SSH, JupyterLab, a web dashboard (like ComfyUI or Open WebUI), or an API endpoint (like vLLM or Triton). Each template lists its exposed ports and access methods.",
  },
  {
    id: 5,
    category: "General",
    question: "Which template should I choose?",
    answer:
      "Start from your primary workload, training, inference, fine-tuning, image generation, or experimentation and match it to the template descriptions. The Quick Selection Guide above maps common workloads to the right template.",
  },
  {
    id: 6,
    category: "General",
    question: "Can I build my own environment from scratch?",
    answer:
      "Yes. The Ubuntu 22.04 and 24.04 Base templates give you a minimal OS with just SSH, so you have complete control over CUDA versions and framework installation.",
  },
  {
    id: 7,
    category: "Compliance",
    question: "Where is my data processed?",
    answer:
      "All GPU workloads run on infrastructure hosted within India, helping meet data residency and compliance requirements.",
  },
];
