import { Brain, Eye, FlaskConical, ImageIcon, ShieldCheck, Zap } from "@/shared/icons/lucide-icon-map";
import type { FeatureCardProps } from "@/shared/components/feature-card";

export const AI_SUPERCLUSTERS_USE_CASES: readonly FeatureCardProps[] = [
  {
    title: "Foundation Model Training",
    description:
      "GB300 / GB200 NVL72 superpods with InfiniBand XDR for trillion-parameter pre-training, checkpointing to WekaFS at 2.5 TB/s. Best fit: GB300, GB200, B300.",
    lucideIcon: Brain,
  },
  {
    title: "Production LLM Inference",
    description:
      "B200 / H200 clusters with vLLM and SGLang pre-baked, sub-50ms first-token latency for Indic-language LLMs. Best fit: B200, H200.",
    lucideIcon: Zap,
  },
  {
    title: "Fine-Tuning & RLHF",
    description:
      "H100 / H200 8-GPU nodes with NVLink. LoRA, QLoRA, and DPO ready in pre-built containers. Best fit: H100, H200, B200.",
    lucideIcon: FlaskConical,
  },
  {
    title: "Computer Vision @ Scale",
    description:
      "H100 clusters with NVMe-backed dataset cache to train YOLOv11, Segment Anything, and custom diffusion models. Best fit: H100.",
    lucideIcon: Eye,
  },
  {
    title: "Sovereign Government AI",
    description:
      "Air-gapped clusters in Indian data centers for defence and public-sector workloads. Best fit: H100, H200, B200.",
    lucideIcon: ShieldCheck,
  },
  {
    title: "Real-Time Rendering & VFX",
    description:
      "H200 workstations plus render farm with USD pipelines, Omniverse, and Houdini. Best fit: H200.",
    lucideIcon: ImageIcon,
  },
] as const;
