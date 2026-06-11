import type { GpuHeroSectionContent } from "@/shared/types/gpu-hero-section.types";

export const NVIDIA_A100_HERO: GpuHeroSectionContent = {
  badgeText: "Badge",
  titlePrefix: "Rent",
  titleHighlight: "Nvidia A100",
  titleSuffix: "GPU On-Demand",
  description:
    "Industry-leading platform for large-scale AI training, high-performance computing, and GPU-accelerated analytics, now accessible through our enterprise-grade cloud infrastructure. Enterprises planning large-scale AI workloads often evaluate A100 GPU cost, and our platform provides flexible access without heavy upfront investment. For memory-intensive training, teams can assess the 40GB or 80GB GPU on rent through our cloud infrastructure. Usage-based pricing allows customers to track A100 GPU price per hour, making it suitable for both experimentation and production. We also offer region-aware pricing in India, to support global teams efficiently.",
  bulletPoints: [
    "Delivering up to 312 TFLOPS of TF32 Tensor Core performance with Ampere architecture",
    "Choose between 40GB or 80GB HBM2e memory configurations",
    "Multi-Instance GPU partitioning into 7 isolated instances for optimal efficiency",
  ],
  features: ["40% Lower Than Others", "Sub-15ms Latency", "100% India-Hosted"],
  pricingPrefix: "Pricing start at",
  pricingAmount: "$1.32/GPU/h.",
  pricingFooter: "No credit card required · Deploy in 60 seconds",
};

export const NVIDIA_A30_HERO: GpuHeroSectionContent = {
  badgeText: "Nvidia A30",
  titlePrefix: "Rent",
  titleHighlight: "Nvidia A30",
  titleSuffix: "GPU On-Demand",
  description:
    "Designed for mainstream AI inference and virtualized multi-tenant deployments, now accessible through our cloud platform with Multi-Instance GPU technology. Enterprises assessing NVIDIA A30 price can deploy the GPU through our cloud platform without managing physical infrastructure. Organizations planning to buy NVIDIA A30 for inference or virtualized workloads gain immediate access with predictable usage-based billing. This provides clear visibility into the price while maintaining long-term clarity at scale.",
  bulletPoints: [
    "Delivering up to 330 TFLOPS of TF32 AI performance with balanced efficiency",
    "24GB HBM2 memory with 933 GB/s bandwidth in 165W TDP",
    "4-way MIG partitioning for optimal resource utilization and cost efficiency",
  ],
  features: ["40% Lower Than Others", "Sub-15ms Latency", "100% India-Hosted"],
  pricingPrefix: "Pricing start at",
  pricingAmount: "$0.61/GPU/h.",
  pricingFooter: "No credit card required · Deploy in 60 seconds",
};

export const NVIDIA_B200_HERO: GpuHeroSectionContent = {
  badgeText: "Nvidia DGX B200",
  titlePrefix: "Rent",
  titleHighlight: "Nvidia DGX B200",
  titleSuffix: "On-Demand",
  description:
    "Revolutionary dual-chip architecture for next-generation AI reasoning and trillion-parameter foundation models, now accessible through our cutting-edge Blackwell-powered cloud infrastructure. Buy or rent NVIDIA B200 GPUs on demand starting at a competitive rate for flexible workloads. With a transparent B200 rental price, organizations can track per-hour options and scale workloads efficiently.",
  bulletPoints: [
    "Delivering up to 20 PFLOPS of FP4 AI performance with a breakthrough dual-chip design",
    "192GB HBM3e memory with unprecedented 8 TB/s bandwidth",
    "15X faster inference and 3X faster training than H100 with native FP4 support",
  ],
  features: ["40% Lower Than Others", "Sub-15ms Latency", "100% India-Hosted"],
  pricingPrefix: "Pricing start at",
  pricingAmount: "$5.00/GPU/h.",
  pricingFooter: "No credit card required · Deploy in 60 seconds",
};

export const NVIDIA_B300_HERO: GpuHeroSectionContent = {
  badgeText: "Nvidia DGX B300",
  titlePrefix: "",
  titleHighlight: "Nvidia DGX B300",
  titleSuffix: "",
  titleSecondary: "Driving Enterprise AI Innovation",
  description:
    "With NVIDIA Blackwell Ultra GPUs, DGX B300 delivers 11x faster inference and 4x quicker training compared to previous generations, all in a compact form factor that fits seamlessly into your data center. Experience enterprise AI at the best NVIDIA B300 GPU price.",
  bulletPoints: [
    "LLM Inference & Training: Powered by NVIDIA Blackwell Ultra GPUs, DGX B300 accelerates large language model inference and training. Achieve 144 petaFLOPS of inference performance that enables your enterprise to operate at hyperscaler levels.",
    "Efficient & Sustainable Innovation: With multiple power options and an industry-leading liquid cooling system, DGX B300 is engineered for unmatched energy efficiency, reducing costs and environmental impact.",
  ],
  features: ["40% Lower Than Others", "Sub-15ms Latency", "100% India-Hosted"],
  pricingPrefix: "Pricing start at",
  pricingAmount: "$5.00/GPU/h.",
  pricingFooter: "No credit card required · Deploy in 60 seconds",
};

export const NVIDIA_H200_HERO: GpuHeroSectionContent = {
  badgeText: "Nvidia H200",
  titlePrefix: "Rent",
  titleHighlight: "Nvidia H200",
  titleSuffix: "GPU On-Demand",
  description:
    "Built for frontier AI research and memory-intensive workloads requiring massive compute power, now accessible through our high-performance cloud GPU infrastructure with flexible scaling. Teams can explore NVIDIA H200 price to plan enterprise deployments efficiently. Transparent pricing ensures predictable budgeting, allowing organizations to scale AI workloads seamlessly.",
  bulletPoints: [
    "Delivering up to 4,500 TFLOPS of AI compute with 141GB HBM3e memory",
    "4.8 TB/s memory bandwidth, nearly 2X faster than H100",
    "1.9X higher inference performance on Llama 2 70B models",
  ],
  features: ["40% Lower Than Others", "Sub-15ms Latency", "100% India-Hosted"],
  pricingPrefix: "Pricing start at",
  pricingAmount: "$2.39/GPU/h.",
  pricingFooter: "No credit card required · Deploy in 60 seconds",
};

export const NVIDIA_H100_HERO: GpuHeroSectionContent = {
  badgeText: "Nvidia H100",
  titlePrefix: "Rent",
  titleHighlight: "Nvidia H100",
  titleSuffix: "GPU On-Demand",
  description:
    "Engineered for training trillion-parameter LLMs and enterprise AI workloads at scale, now accessible through our NVIDIA-certified cloud platform with instant deployment. Organizations can evaluate the NVIDIA H100 GPU 80GB price for planning large-scale projects. Flexible rental options allow teams to scale workloads instantly, ensuring predictable budgeting.",
  bulletPoints: [
    "Delivering up to 4,000 TFLOPS of FP8 AI performance with 4th-gen Tensor Cores",
    "80GB HBM3 memory with industry-leading 3.35 TB/s bandwidth",
    "20X faster AI training than A100 with Multi-Instance GPU support",
  ],
  features: ["40% Lower Than Others", "Sub-15ms Latency", "100% India-Hosted"],
  pricingPrefix: "Pricing start at",
  pricingAmount: "$1.99/GPU/h.",
  pricingFooter: "No credit card required · Deploy in 60 seconds",
};
