import type { FaqItem } from "@/shared/data/faq-section-types";

export const AI_SUPERCLUSTERS_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "General",
    question: "What is an AI Supercluster?",
    answer:
      "A NeevCloud AI Supercluster is a 1,000 to 16,000-GPU dedicated AI infrastructure deployment, build-to-suit configured for your workload — your choice of GPU (GB300, GB200, B300, B200, H200, H100), interconnect, storage tier, and contract duration. Deployed at our AI Gigacampus in Raipur, Central India, with VPC handoff.",
  },
  {
    id: 2,
    category: "General",
    question: "Where are AI Superclusters deployed?",
    answer:
      "AI Superclusters are deployed at the NeevCloud AI Gigacampus in Raipur, Central India — a purpose-built facility designed for 1K–16K GPU superpods with liquid-cooled racks, renewable-backed power, and InfiniBand XDR fabric.",
  },
  {
    id: 3,
    category: "Networking",
    question: "What interconnect options are available?",
    answer:
      "NeevCloud supports InfiniBand XDR (800 Gb/s), InfiniBand NDR (400 Gb/s), and RoCE v2 Ethernet (400 Gb/s). For NVL72 superpods we deploy NVLink 5 + InfiniBand XDR by default. Custom topologies are available on request.",
  },
  {
    id: 4,
    category: "Networking",
    question: "Do you support hybrid and multi-cloud connectivity?",
    answer:
      "Yes. Direct Connect to VPCs is included. Bring-your-own-IP and BGP peering are supported for enterprise networks.",
  },
  {
    id: 5,
    category: "Software",
    question: "What software stack ships pre-installed?",
    answer:
      "Ubuntu 24.04, CUDA 12.6, NCCL, MPI, Slurm, Kubernetes, Docker, vLLM, SGLang, PyTorch, and JAX. Custom AMIs and container images can be pre-baked during the build phase.",
  },
  {
    id: 6,
    category: "Billing",
    question: "What is the SLA?",
    answer:
      "99.95% per-cluster uptime SLA, with credits for breaches. Hardware failure replacement within 4 hours, plus 24/7 NOC and a named TAM for reserved customers.",
  },
] as const;
