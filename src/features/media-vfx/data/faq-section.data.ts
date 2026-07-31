import type { FaqItem } from "@/shared/data/faq-section-types";

export const MEDIA_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "General",
    question: "What rendering software is supported?",
    answer:
      "Blender, Maya, Houdini, Cinema 4D, Unreal Engine, and any renderer that runs on Linux. Bring your own licenses or use open-source tools.",
  },
  {
    id: 2,
    category: "Storage",
    question: "How do I transfer large scene files?",
    answer:
      "High-bandwidth network transfers with rsync, cloud storage sync (S3-compatible), or direct uploads. NVMe storage handles large asset libraries efficiently.",
  },
  {
    id: 3,
    category: "Billing",
    question: "Can I use spot instances for rendering?",
    answer:
      "Yes. Spot instances offer up to 60% savings for batch renders. Jobs checkpoint automatically and resume on new instances if preempted.",
  },
  {
    id: 4,
    category: "Performance",
    question: "What's the difference between CPU and GPU rendering?",
    answer:
      "GPUs excel at parallel processing, making them 5-10× faster for path tracing and real-time rendering. CPUs handle general tasks and can be cost-effective for simpler scenes.",
  },
  {
    id: 5,
    category: "Billing",
    question: "How is billing calculated for render jobs?",
    answer:
      "Per-second billing for GPU instances. Only charged while rendering-no cost for idle time. Storage billed monthly per GB.",
  },
];
