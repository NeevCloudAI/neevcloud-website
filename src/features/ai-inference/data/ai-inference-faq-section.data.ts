import type { FaqItem } from "@/shared/data/faq-section-types";

export const AI_INFERENCE_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "Is KYC required to use NeevCloud?",
    answer:
      "Blender, Maya, Houdini, Cinema 4D, Unreal Engine, and any renderer that runs on Linux. Bring your own licenses or use open-source tools.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "What operating systems are available?",
    answer:
      "High-bandwidth network transfers with rsync, cloud storage sync (S3-compatible), or direct uploads. NVMe storage handles large asset libraries efficiently.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Can I attach multiple storage volumes?",
    answer:
      "Yes. Spot instances offer up to 60% savings for batch renders. Jobs checkpoint automatically and resume on new instances if preempted.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How does networking work with GPU instances?",
    answer:
      "GPUs excel at parallel processing, making them 5–10× faster for path tracing and real-time rendering. CPUs handle general tasks and can be cost-effective for simpler scenes.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "Can NeevCloud access my stored data?",
    answer:
      "Per-second billing for GPU instances. Only charged while rendering—no cost for idle time. Storage billed monthly per GB.",
  },
];
