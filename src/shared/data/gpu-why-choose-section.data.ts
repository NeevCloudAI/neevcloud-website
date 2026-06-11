import type { GpuWhyChooseSectionContent } from "@/shared/types/gpu-why-choose-section.types";
import { EXTERNAL_LINKS } from "../constants/external-links.constants";

export const NVIDIA_A100_WHY_CHOOSE_SECTION: GpuWhyChooseSectionContent = {
  titlePrefix: "Why Choose",
  titleHighlight: "Nvidia A100",
  titleSuffix: "GPUs?",
  description:
    "The NVIDIA A100 represents a significant leap in GPU technology, engineered to meet the most demanding AI and HPC challenges. Its advanced features are designed to handle complex simulations, large-scale data processing, and cutting-edge AI applications, making it an essential tool for pushing the boundaries of what's possible in computing.",
  features: [
    {
      id: "cutting-edge-performance",
      title: "Cutting-Edge Performance:",
      description:
        "With up to 312 teraflops (TFLOPS), the A100 redefines AI computing, far surpassing the V100 in both speed and efficiency. Ideal for intensive AI model training and large-scale HPC tasks.",
    },
    {
      id: "flexible-memory-options",
      title: "Flexible Memory Options:",
      description:
        "Choose between 40GB or 80GB of HBM2e memory to handle your largest datasets and most complex models effortlessly.",
    },
    {
      id: "innovative-mig",
      title: "Innovative Multi-Instance GPU (MIG):",
      description:
        "Maximize resource utilization by partitioning the A100 into up to seven individual GPUs, each capable of handling distinct workloads simultaneously.",
    },
    {
      id: "advanced-tensor-cores",
      title: "Advanced Tensor Cores:",
      description:
        "Benefit from third-generation Tensor Cores that accelerate AI and HPC processes, enhancing performance beyond the capabilities of the V100.",
    },
    {
      id: "unified-memory-architecture",
      title: "Unified Memory Architecture:",
      description:
        "Seamlessly manage massive datasets and complex tasks with the A100's substantial memory capacity.",
    },
  ],
  buttonCta: "Reserve Now",
  buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
  buttonTarget: "_blank",
  imageSrc: "/images/nvidia-a100-gpu.png",
  imageAlt: "NVIDIA A100 GPU module",
};

export const NVIDIA_A30_WHY_CHOOSE_SECTION: GpuWhyChooseSectionContent = {
  titlePrefix: "Why Choose",
  titleHighlight: "Nvidia A30",
  titleSuffix: "GPUs?",
  description:
    "The NVIDIA A30 Tensor Core GPU is engineered to deliver exceptional performance for AI inference and enterprise virtualization. With its advanced architecture and versatile features, the A30 is the ideal solution for organizations seeking to optimize their AI workloads and maximize resource efficiency.",
  features: [
    {
      id: "robust-compute-power",
      title: "Robust Compute Power:",
      description:
        "Achieve up to 165 TFLOPS of TF32 deep learning performance and 10.3 TFLOPS for HPC tasks.",
    },
    {
      id: "advanced-memory-bandwidth",
      title: "Advanced Memory & Bandwidth:",
      description:
        "Equipped with 24GB HBM2 memory and a blazing 933GB/s bandwidth for seamless data processing.",
    },
    {
      id: "efficient-virtualization",
      title: "Efficient Virtualization:",
      description:
        "Leverage Multi-Instance GPU (MIG) technology to partition the GPU into multiple isolated instances, ensuring that your virtualized workloads are efficiently distributed and optimized.",
    },
    {
      id: "enhanced-connectivity",
      title: "Enhanced Connectivity:",
      description:
        "With PCIe Gen4 and third-generation NVLINK, connect multiple GPUs at higher speeds to collaborate on complex projects.",
    },
    {
      id: "optimized-resource-allocation",
      title: "Optimized Resource Allocation:",
      description:
        "Maximum efficiency through advanced virtualization and on-demand scaling.",
    },
    {
      id: "enhanced-security-reliability",
      title: "Enhanced Security & Reliability:",
      description:
        "Enterprise-grade security measures and round-the-clock support ensure uninterrupted operations for mission-critical inferencing workloads.",
    },
    {
      id: "nvlink-interface",
      title: "3rd generation NVLink interface",
      description: "with 900 GB/s bidirectional bandwidth.",
    },
  ],
  buttonCta: "Reserve Now",
  buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
  buttonTarget: "_blank",
  imageSrc: "/images/nvidia-a30-gpu.png",
  imageAlt: "NVIDIA A30 GPU",
};

export const NVIDIA_B200_WHY_CHOOSE_SECTION: GpuWhyChooseSectionContent = {
  titlePrefix: "Accelerate Your AI Journey with",
  titleHighlight: "Nvidia DGX B200",
  titleSuffix: "",
  description:
    "The NVIDIA B200 takes performance to the next level, offering exceptional capabilities for high-performance computing and generative AI workloads. Here are the key specifications and features of the B200:",
  features: [
    {
      id: "memory-stacks",
      title: "",
      description:
        "Utilizes 12-high stacks for higher memory capacity, reaching up to 288GB",
    },
    {
      id: "ai-inferencing-performance",
      title: "",
      description:
        "5X the AI inferencing performance gain over the previous generation",
    },
    {
      id: "memory-bandwidth",
      title: "",
      description:
        "8 TB/s of memory bandwidth for lightning-fast data processing",
    },
    {
      id: "nvlink-interface",
      title: "",
      description: "Advanced NVLink interface for seamless host connectivity",
    },
  ],
  buttonCta: "Reserve Now",
  buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
  buttonTarget: "_blank",
  imageSrc: "/images/nvidia-b200-gpu.png",
  imageAlt: "NVIDIA DGX B200 GPU",
};

export const NVIDIA_H200_WHY_CHOOSE_SECTION: GpuWhyChooseSectionContent = {
  titlePrefix: "Accelerate Your AI Journey with",
  titleHighlight: "Nvidia H200",
  titleSuffix: "GPUs",
  description:
    "The H200 will represent the apex of NVIDIA's roadmap, built with cutting-edge GPU innovations for the most computationally intense AI workloads. While full specifications haven't been released yet, the H200 is expected to deliver:",
  features: [
    {
      id: "training-performance",
      title: "Ground-breaking Training Performance",
      description:
        "Radically faster training enabled by next-gen Tensor Cores and Transformer Engines optimized for the largest AI models",
    },
    {
      id: "inference-throughput",
      title: "Unrivaled Inference Throughput",
      description:
        "Orders of magnitude higher inference throughput to power real-time AI applications at exceptional cost-efficiency",
    },
    {
      id: "scalability",
      title: "Uncompromised Scalability",
      description:
        "The ability to scale seamlessly from single GPU to multi-GPU systems using advanced GPU interconnects",
    },
    {
      id: "cloud-optimized",
      title: "Optimized for the Cloud",
      description:
        "Built from the ground up for multi-tenant, secure, and sustainable AI deployments at cloud scale",
    },
  ],
  buttonCta: "Reserve Now",
  buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
  buttonTarget: "_blank",
  imageSrc: "/images/nvidia-h200-gpu.png",
  imageAlt: "NVIDIA H200 GPU",
};

export const NVIDIA_H100_WHY_CHOOSE_SECTION: GpuWhyChooseSectionContent = {
  titlePrefix: "Accelerate Your AI Journey with",
  titleHighlight: "Nvidia H100",
  titleSuffix: "GPUs",
  description:
    "Leverage the revolutionary NVIDIA H100 GPU on NeevCloud to accelerate your AI training, inference, data analytics, and HPC workloads. Our cloud platform provides seamless deployment, auto-scaling, and on-demand access to this game-changing accelerator.",
  features: [
    {
      id: "hopper-architecture",
      title: "",
      description:
        "Based on the new NVIDIA Hopper architecture, NVIDIA H100 offers up to 6X higher AI performance over the previous generation",
    },
    {
      id: "transistors",
      title: "",
      description: "80 billion transistors packed into a 814mm2 die size",
    },
    {
      id: "tensor-cores",
      title: "",
      description:
        "4th generation Tensor Cores with support for FP8 tensor operations",
    },
    {
      id: "nvlink-interface",
      title: "",
      description:
        "3rd generation NVLink interface with 900 GB/s bidirectional bandwidth",
    },
    {
      id: "hbm3-memory",
      title: "",
      description:
        "HBM3 memory technology with up to 80 GB of high bandwidth memory",
    },
    {
      id: "transformer-engine",
      title: "",
      description:
        "Transformer Engine to accelerate large language model inference",
    },
    {
      id: "mig-partitioning",
      title: "",
      description:
        "Multi-Instance GPU (MIG) partitioning for improved resource utilization",
    },
  ],
  buttonCta: "Reserve Now",
  buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
  buttonTarget: "_blank",
  imageSrc: "/images/nvidia-h100-gpu.png",
  imageAlt: "NVIDIA H100 GPU",
};

export const NVIDIA_B300_WHY_CHOOSE_SECTION: GpuWhyChooseSectionContent = {
  titlePrefix: "Accelerate Your AI Journey with",
  titleHighlight: "Nvidia B300",
  titleSuffix: "",
  description: "An AI Factory for the Era of Generative Intelligence",
  features: [
    {
      id: "revolutionary-ai-infrastructure",
      title: "Revolutionary AI Infrastructure:",
      description:
        "Delivers enterprise-grade performance for demanding training and inference workloads.",
    },
    {
      id: "breakthrough-hardware",
      title: "Breakthrough Hardware:",
      description:
        "Powered by NVIDIA Blackwell Ultra GPUs and dual Intel Xeon processors for reliable, high-speed AI computing.",
    },
    {
      id: "unmatched-performance",
      title: "Unmatched Performance:",
      description:
        "Achieves 72 PFLOPS for FP8 training and 144 PFLOPS for FP4 inference, accelerating model development.",
    },
    {
      id: "scalable-flexible",
      title: "Scalable & Flexible:",
      description:
        "Designed for both bare metal and cloud GPU deployments to seamlessly scale with your business needs.",
    },
    {
      id: "optimized-connectivity",
      title: "Optimized Connectivity:",
      description:
        "Advanced NVLink and high-speed networking ensure efficient data transfer and storage for large-scale AI applications.",
    },
  ],
  buttonCta: "Reserve Now",
  buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
  buttonTarget: "_blank",
  imageSrc: "/images/nvidia-b200-gpu.png",
  imageAlt: "NVIDIA B300 GPU",
};
