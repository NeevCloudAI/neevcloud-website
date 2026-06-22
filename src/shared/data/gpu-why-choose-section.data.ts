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
  imageSrc: "/images/webp/nvidia-a100-gpu.webp",
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
  imageSrc: "/images/webp/nvidia-a30-gpu.webp",
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
  imageSrc: "/images/webp/nvidia-b200-gpu.webp",
  imageAlt: "NVIDIA DGX B200 GPU",
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
  imageSrc: "/images/webp/nvidia-b200-gpu.webp",
  imageAlt: "NVIDIA B300 GPU",
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
  imageSrc: "/images/webp/nvidia-h100-gpu.webp",
  imageAlt: "NVIDIA H100 GPU",
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
  imageSrc: "/images/webp/nvidia-h200-gpu.webp",
  imageAlt: "NVIDIA H200 GPU",
};

export const NVIDIA_RTX_3090_WHY_CHOOSE_SECTION: GpuWhyChooseSectionContent = {
  titlePrefix: "Accelerate Your AI Journey with",
  titleHighlight: "Nvidia RTX 3090",
  titleSuffix: "GPUs",
  description:
    "RTX 3090 GPUs are ready to deploy for your AI development, advanced data analytics, or machine learning workloads.",
  features: [
    {
      id: "ampere-architecture",
      title: "",
      description:
        "Built on NVIDIA's cutting-edge Ampere architecture, renowned for exceptional performance across diverse workloads",
    },
    {
      id: "ai-training-inference",
      title: "",
      description:
        "Excels in AI training and inference tasks, leveraging powerful Tensor cores for accelerated computations",
    },
    {
      id: "robust-gpu-die",
      title: "",
      description:
        "Features a robust GPU die, strategically designed to accommodate high-performance demands and ensure efficiency",
    },
    {
      id: "optimized-tensor-cores",
      title: "",
      description:
        "Optimized Tensor cores enhance performance in AI workloads, delivering rapid data processing and superior neural network training capabilities",
    },
    {
      id: "gddr6x-memory",
      title: "",
      description:
        "Equipped with 24 GB of ultra-fast GDDR6X memory, providing high bandwidth to effortlessly handle intensive tasks",
    },
  ],
  buttonCta: "Reserve Now",
  buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
  buttonTarget: "_blank",
  imageSrc: "/images/webp/nvidia-rtx-3090-gpu.webp",
  imageAlt: "NVIDIA RTX 3090 GPU",
};

export const NVIDIA_RTX_5090_WHY_CHOOSE_SECTION: GpuWhyChooseSectionContent = {
  titlePrefix: "Accelerate Your AI Journey with",
  titleHighlight: "Nvidia RTX 5090",
  titleSuffix: "GPUs",
  description:
    "With blazing-fast memory bandwidth, enhanced ray tracing, and advanced AI processing capabilities, the RTX 5090 stands as the ultimate GPU for intensive cloud-based computing—fully virtualized and ready to be deployed at scale.",
  features: [
    {
      id: "breakthrough-ai-acceleration",
      title: "Breakthrough AI Acceleration:",
      description:
        "Advanced CUDA and Tensor cores make RTX 5090 perfect for accelerating large-scale neural networks and inference pipelines in the cloud",
    },
    {
      id: "massive-memory-bandwidth",
      title: "Massive Memory Bandwidth:",
      description:
        "With next-gen GDDR7 memory and extremely high bandwidth, it's engineered for seamless data-intensive compute operations",
    },
    {
      id: "cloud-ready-architecture",
      title: "Cloud-Ready Architecture:",
      description:
        "Designed to support virtual workloads, remote rendering, and enterprise-scale applications across hybrid and public cloud environments",
    },
    {
      id: "powerful-compute-performance",
      title: "Powerful Compute Performance:",
      description:
        "Ideal for complex simulations, real-time AI rendering, and scientific visualization that demand maximum GPU horsepower",
    },
    {
      id: "reserve-now",
      title: "Reserve Now:",
      description:
        "Pre-configured and on-demand, NeevCloud lets you deploy RTX 5090 instantly—scale up your GPU infrastructure with just one click",
    },
  ],
  buttonCta: "Reserve Now",
  buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
  buttonTarget: "_blank",
  imageSrc: "/images/webp/nvidia-rtx-5090-gpu.webp",
  imageAlt: "NVIDIA RTX 5090 GPU",
};

export const NVIDIA_A6000_WHY_CHOOSE_SECTION: GpuWhyChooseSectionContent = {
  titlePrefix: "Accelerate Your AI Journey with",
  titleHighlight: "Nvidia RTX A6000",
  titleSuffix: "GPUs",
  description:
    "The NVIDIA RTX A6000, powered by the advanced NVIDIA Ampere architecture and equipped with 48GB of ultra-fast GDDR6 memory, is engineered for professionals. It delivers exceptional performance for graphics, AI, and compute-intensive workflows, making it the ideal choice for enterprise solutions and virtual workstations.",
  features: [
    {
      id: "massive-memory-bandwidth",
      title: "Massive Memory & Bandwidth:",
      description:
        "Experience 48GB of GDDR6 memory combined with 768GB/s throughput for smooth, high-performance data operations.",
    },
    {
      id: "unmatched-compute",
      title: "Unmatched Compute Capabilities:",
      description:
        "Harness the power of 10,752 CUDA cores and the advanced NVIDIA Ampere architecture for superior graphics and compute performance.",
    },
    {
      id: "ray-tracing-ai",
      title: "Cutting-Edge Ray Tracing & AI Acceleration:",
      description:
        "Benefit from second-generation RT cores and third-generation Tensor cores, delivering rapid ray tracing and enhanced AI-driven performance.",
    },
    {
      id: "nvlink-connectivity",
      title: "Scalable Multi-GPU Connectivity:",
      description:
        "Utilize NVIDIA NVLink to seamlessly connect multiple GPUs, scaling your system for the most demanding workloads.",
    },
    {
      id: "virtual-workstation",
      title: "Optimized Virtual Workstation Support:",
      description:
        "Fully compatible with NVIDIA RTX Virtual Workstation and vGPU solutions, ideal for creating versatile, high-powered virtual environments.",
    },
  ],
  buttonCta: "Reserve Now",
  buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
  buttonTarget: "_blank",
  imageSrc: "/images/webp/nvidia-a6000-gpu.webp",
  imageAlt: "NVIDIA RTX A6000 GPU",
};

export const NVIDIA_A6000_SE_WHY_CHOOSE_SECTION: GpuWhyChooseSectionContent = {
  titlePrefix: "Accelerate Your AI Journey with",
  titleHighlight: "Nvidia RTX PRO 6000 SE",
  titleSuffix: "GPUs",
  description:
    "NVIDIA's RTX PRO 6000 SE instances deliver up to 4000 TOPS of AI compute and 96 GB GDDR7 memory in a secure, on-demand GPU cloud environment—ideal for fine-tuning large language models, real-time ray tracing, and complex simulations. The RTX PRO 6000 SE is built on NVIDIA Blackwell architecture and is ready to deploy on NeevCloud.",
  features: [
    {
      id: "ai-tops-performance",
      title: "4000 TOPS AI Performance:",
      description: "Lightning-fast deep learning training and inference",
    },
    {
      id: "gddr7-memory",
      title: "96 GB GDDR7 Memory & 1.8 TB/s Bandwidth:",
      description:
        "Manage massive datasets and multi-billion-parameter models seamlessly",
    },
    {
      id: "mig-support",
      title: "Multi-Instance GPU (MIG):",
      description:
        "Partition one RTX PRO 6000 SE into multiple isolated GPU instances for optimized multi-tenant workloads",
    },
    {
      id: "rt-tensor-cores",
      title: "4th Gen Ray Tracing Cores & 5th Gen Tensor Cores:",
      description:
        "Accelerate ray-tracing and AI workloads with higher efficiency",
    },
    {
      id: "tensor-cores-fp4",
      title: "5th Gen Tensor Cores",
      description: "Supporting FP4 precision and DLSS 4 multi-frame generation",
    },
    {
      id: "rt-cores-mega-geometry",
      title: "4th Gen Ray Tracing Cores",
      description:
        "With RTX Mega Geometry for up to 100x more ray-traced triangles",
    },
    {
      id: "video-engines",
      title: "Next-Gen Video Engines (9th Gen NVENC, 6th Gen NVDEC)",
      description: "For professional video workflows",
    },
  ],
  buttonCta: "Reserve Now",
  buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
  buttonTarget: "_blank",
  imageSrc: "/images/webp/nvidia-rtx-pro-6000-se-gpu.webp",
  imageAlt: "NVIDIA RTX PRO 6000 SE GPU",
};

export const NVIDIA_TESLA_T4_WHY_CHOOSE_SECTION: GpuWhyChooseSectionContent = {
  titlePrefix: "Accelerate Your AI Journey with",
  titleHighlight: "Nvidia Tesla T4",
  titleSuffix: "GPUs",
  description:
    "The NVIDIA Tesla T4 GPU Specs, built on the advanced NVIDIA Turing architecture, is the perfect GPU for modern data centers and cloud environments. Designed to accelerate AI, machine learning, and deep learning inference, it powers enterprise-grade workloads while delivering remarkable energy efficiency, all at a flexible price that fits cloud and enterprise budgets.",
  features: [
    {
      id: "ai-performance",
      title: "Powerful AI Performance:",
      description:
        "Leverage 2,560 CUDA cores and Turing Tensor Cores to boost ML and deep learning tasks—ideal for high-performance GPU cloud solutions.",
    },
    {
      id: "multi-precision",
      title: "Efficient Multi-Precision:",
      description:
        "Achieve up to 8.1 TFLOPS (single-precision) and 65 TFLOPS (mixed-precision) with advanced INT8 and INT4 performance, ensuring optimal inferencing.",
    },
    {
      id: "energy-efficient",
      title: "Compact & Energy-Efficient Design:",
      description:
        "Its low-profile form factor and 70W power consumption make the Tesla T4 perfect for scale-out server environments in the cloud.",
    },
    {
      id: "compute-apis",
      title: "Versatile Compute APIs:",
      description:
        "Supports CUDA, NVIDIA TensorRT™, and ONNX, providing seamless integration with a wide range of professional AI and data analytics applications.",
    },
    {
      id: "cloud-integration",
      title: "",
      description:
        "Engineered for seamless integration into GPU cloud infrastructures, the NVIDIA Tesla T4 accelerates AI and ML workloads across virtual and hybrid cloud setups.",
    },
    {
      id: "cloud-solution",
      title: "",
      description:
        "Nvidia T4 GPU cloud solution delivers exceptional performance with maximum efficiency.",
    },
  ],
  buttonCta: "Reserve Now",
  buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
  buttonTarget: "_blank",
  imageSrc: "/images/webp/nvidia-tesla-t4-gpu.webp",
  imageAlt: "NVIDIA Tesla T4 GPU",
};

export const NVIDIA_NVL72_WHY_CHOOSE_SECTION: GpuWhyChooseSectionContent = {
  titlePrefix: "Accelerate Your AI Journey with",
  titleHighlight: "Nvidia GB200 NVL72",
  titleSuffix: "",
  description:
    "An AI Factory for the Era of Generative Intelligence. Built on NVIDIA Blackwell architecture, GB200 NVL72 delivers extreme performance for hyperscale AI training, inference, and next-generation datacenter workloads.",
  features: [
    {
      id: "extreme-ai-performance",
      title: "Extreme AI Performance:",
      description:
        "Built for demanding AI workloads requiring high compute density and efficiency.",
    },
    {
      id: "advanced-architecture",
      title: "Advanced Architecture:",
      description:
        "Combines next-generation GPUs with optimized system design for faster processing.",
    },
    {
      id: "high-throughput",
      title: "High Throughput:",
      description:
        "Enables faster model training and inference across large datasets.",
    },
    {
      id: "scalable-infrastructure",
      title: "Scalable Infrastructure:",
      description:
        "Designed to support large AI clusters and hyperscale deployments.",
    },
  ],
  buttonCta: "Reserve Now",
  buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
  buttonTarget: "_blank",
  imageSrc: "/images/webp/nvidia-b200-gpu.webp",
  imageAlt: "NVIDIA GB200 NVL72",
};
