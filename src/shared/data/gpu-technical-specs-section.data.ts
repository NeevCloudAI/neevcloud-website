import type { GpuTechnicalSpecsSectionContent } from "@/shared/types/gpu-technical-specs-section.types";
import { EXTERNAL_LINKS } from "../constants/external-links.constants";

export const NVIDIA_A100_TECHNICAL_SPECS_SECTION: GpuTechnicalSpecsSectionContent =
  {
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
    rows: [
      {
        id: "gpu-architecture",
        feature: "GPU Architecture",
        specification: "NVIDIA Ampere",
      },
      {
        id: "gpu-count",
        feature: "GPU Count per Node",
        specification: "Up to 8x NVIDIA A100 Tensor Core GPUs",
      },
      {
        id: "gpu-memory",
        feature: "GPU Memory",
        specification: "40GB / 80GB HBM2e per GPU",
      },
      {
        id: "nvlink-bandwidth",
        feature: "NVLink Bandwidth",
        specification: "600 GB/s total bidirectional bandwidth",
      },
      {
        id: "interconnect",
        feature: "Interconnect",
        specification: "NVIDIA NVSwitch for full GPU-to-GPU bandwidth",
      },
      {
        id: "compute-performance",
        feature: "Compute Performance",
        specification: "Up to 5 petaFLOPS of AI performance",
      },
      {
        id: "supported-workloads",
        feature: "Supported Workloads",
        specification: "AI Training, Deep Learning, HPC, Inference",
      },
      {
        id: "form-factor",
        feature: "Form Factor",
        specification: "Scalable data center platform",
      },
      {
        id: "power-efficiency",
        feature: "Power Efficiency",
        specification: "Optimized for maximum throughput per watt",
      },
    ],
    charts: [
      {
        id: "ai-training-performance",
        title: "Up to 3X Higher AI Training on Largest Models",
        caption: "Time Per 1,000 Iterations - Relative Performance",
        yAxisMax: 3,
        barChartHeight: 130,
        yAxisFormat: "multiplier",
        bars: [
          {
            id: "v100-fp16",
            name: "V100 ",
            description: "FP16",
            value: 0.7,
            displayValue: "0.7x",
            variant: "black",
          },
          {
            id: "a100-40gb-fp16",
            name: "A100 40GB",
            description: "FP16",
            value: 1,
            displayValue: "1x",
            variant: "default",
          },
          {
            id: "a100-80gb-fp16",
            name: "A100 80GB",
            description: "FP16",
            value: 3,
            displayValue: "3x",
            variant: "highlight",
          },
        ],
      },
      {
        id: "big-data-analytics",
        title: "2X Faster than A100 40GB on Big Data Analytics Benchmark",
        caption: "Time to Solution - Relative Performance",
        yAxisMax: 10,
        yAxisFormat: "multiplier",
        barChartHeight: 200,
        bars: [
          {
            id: "v100-32gb",
            name: "V100 32GB",
            description: "",
            value: 1,
            displayValue: "1x",
            variant: "black",
          },
          {
            id: "a100-40gb",
            name: "A100 40GB",
            description: "",
            value: 4,
            displayValue: "4x",
            variant: "default",
          },
          {
            id: "a100-80gb",
            name: "A100 80GB",
            description: "",
            value: 8,
            displayValue: "8x",
            variant: "highlight",
          },
        ],
        annotation: {
          label: "Up to 2X",
          fromBarIndex: 1,
          toBarIndex: 2,
        },
      },
    ],
  };

export const NVIDIA_A30_TECHNICAL_SPECS_SECTION: GpuTechnicalSpecsSectionContent =
  {
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
    rows: [
      {
        id: "gpu-memory",
        feature: "GPU Memory",
        specification: "24GB HBM2",
      },
      {
        id: "memory-bandwidth",
        feature: "Memory Bandwidth",
        specification: "933GB/s",
      },
      {
        id: "tf32-performance",
        feature: "TF32 Tensor Core Performance",
        specification: "Up to 165 teraFLOPS",
      },
      {
        id: "interconnect",
        feature: "Interconnect",
        specification: "PCIe Gen4 (64GB/s), Third-gen NVLINK (200GB/s)",
      },
      {
        id: "form-factor",
        feature: "Form Factor",
        specification: "Dual-slot, full-height, full-length (FHFL)",
      },
      {
        id: "max-tdp",
        feature: "Max TDP",
        specification: "165W",
      },
      {
        id: "mig",
        feature: "Multi-Instance GPU (MIG)",
        specification: "4 instances@ 6GB, 2 instances@ 12GB, 1 instance@ 24GB",
      },
    ],
    charts: [
      {
        id: "bert-large-pretraining",
        title: "BERT Large Pre-Training (Normalized)",
        caption: "Relative Performance - Time to Train",
        yAxisMax: 2.5,
        yAxisStep: 0.5,
        barChartHeight: 300,
        yAxisFormat: "multiplier",
        referenceLine: 1,
        bars: [
          {
            id: "t4",
            name: "T4",
            value: 0.16,
            displayValue: "0.16X",
            variant: "default",
            arrowLabel: "6X",
          },
          {
            id: "v100",
            name: "V100",
            value: 0.41,
            displayValue: "0.41X",
            variant: "default",
            arrowLabel: "3X",
          },
          {
            id: "a30",
            name: "A30",
            value: 1,
            displayValue: "1.0X",
            variant: "highlight",
          },
        ],
      },
    ],
  };

export const NVIDIA_B200_TECHNICAL_SPECS_SECTION: GpuTechnicalSpecsSectionContent =
  {
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
    rows: [
      {
        id: "gpu",
        feature: "GPU",
        specification: "8x NVIDIA Blackwell GPUs",
      },
      {
        id: "gpu-memory",
        feature: "GPU Memory",
        specification: "1,440 GB total, 64 TB/s HBM3e bandwidth",
      },
      {
        id: "performance",
        feature: "Performance",
        specification:
          "FP4 Tensor Core: 144 PFLOPS | 72 PFLOPS*\nFP8 Tensor Core: 72 PFLOPS**",
      },
      {
        id: "nvswitch",
        feature: "NVIDIA NVSwitch",
        specification: "2X",
      },
      {
        id: "nvlink-bandwidth",
        feature: "NVIDIA NVLink Bandwidth",
        specification: "14.4 TB/s aggregate bandwidth",
      },
      {
        id: "system-power",
        feature: "System Power Usage",
        specification: "~14.3 kW max",
      },
      {
        id: "cpu",
        feature: "CPU",
        specification:
          "2 Intel® Xeon® Platinum 8570 Processors\n112 Cores total, 2.1 GHz (Base), 4 GHz (Max Boost)",
      },
      {
        id: "system-memory",
        feature: "System Memory",
        specification: "2 TB, configurable to 4 TB",
      },
      {
        id: "rack-units",
        feature: "Rack Units (RU)",
        specification: "10 RU",
      },
    ],
    charts: [
      {
        id: "training-speed-up",
        caption: "GPT-MoE-1.8T Model Training Speed-Up",
        yAxisLabel: "Speed up Over DGX H100",
        yAxisMax: 3,
        yAxisFormat: "multiplier",
        bars: [
          {
            id: "dgx-h100-training",
            name: "DGX H100",
            value: 1,
            displayValue: "1X",
            variant: "default",
          },
          {
            id: "dgx-b200-training",
            name: "DGX B200",
            value: 3,
            displayValue: "3X",
            variant: "highlight",
          },
        ],
      },
      {
        id: "realtime-throughput",
        caption: "GPT-MoE-1.8T Real-time Throughput",
        yAxisLabel: "Output Tokens/sec/GPU",
        yAxisMax: 60,
        yAxisFormat: "number",
        bars: [
          {
            id: "dgx-h100-throughput",
            name: "DGX H100",
            value: 3.5,
            displayValue: "3.5",
            variant: "default",
          },
          {
            id: "dgx-b200-throughput",
            name: "DGX B200",
            value: 58,
            displayValue: "58",
            variant: "highlight",
          },
        ],
        annotation: {
          label: "15X",
          fromBarIndex: 0,
          toBarIndex: 1,
        },
      },
    ],
  };

export const NVIDIA_B300_TECHNICAL_SPECS_SECTION: GpuTechnicalSpecsSectionContent =
  {
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
    rows: [
      {
        id: "gpu",
        feature: "GPU",
        specification: "NVIDIA Blackwell Ultra GPUs",
      },
      {
        id: "cpu",
        feature: "CPU",
        specification: "Dual Intel® Xeon® Processors",
      },
      {
        id: "total-gpu-memory",
        feature: "Total GPU Memory",
        specification: "2.3TB",
      },
      {
        id: "performance",
        feature: "Performance",
        specification: "72 PFLOPS FP8 training; 144 PFLOPS FP4 inference",
      },
      {
        id: "networking",
        feature: "Networking",
        specification:
          "8x OSFP ports; Up to 800Gb/s NVIDIA Ethernet; 2x dual-port QSFP112 NVIDIA BlueField-3 DPU",
      },
      {
        id: "storage",
        feature: "Storage",
        specification: "OS: 2x 1.9TB NVMe M.2; Internal: 8x 3.84TB NVMe E1.S",
      },
    ],
  };

export const NVIDIA_H200_TECHNICAL_SPECS_SECTION: GpuTechnicalSpecsSectionContent =
  {
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
    rows: [
      {
        id: "gpu",
        feature: "GPU",
        specification: "NVIDIA H200 Tensor Core GPU",
      },
      {
        id: "base-architecture",
        feature: "Base Architecture",
        specification: "Hopper (H100 Family)",
      },
      {
        id: "gpu-count",
        feature: "GPU Count (HGX H200)",
        specification: "8 GPUs per server node",
      },
      {
        id: "total-gpu-memory",
        feature: "Total GPU Memory (Per Node)",
        specification: "1.13 TB (8 x 141 GB)",
      },
      {
        id: "memory-type",
        feature: "Memory Type",
        specification: "HBM3e (High Bandwidth Memory)",
      },
      {
        id: "gpu-interconnect",
        feature: "GPU Interconnect",
        specification: "NVIDIA NVSwitch (Fully Connected Mesh)",
      },
      {
        id: "host-interface",
        feature: "Host Interface",
        specification: "PCIe Gen 5",
      },
      {
        id: "ai-performance",
        feature: "AI Performance (FP8)",
        specification: "Up to 32 PFLOPS per HGX System",
      },
      {
        id: "power-efficiency",
        feature: "Power Efficiency",
        specification: "Optimized for energy-efficient AI compute",
      },
      {
        id: "deployment-options",
        feature: "Deployment Options",
        specification: "On-Prem, Private Cloud, and NeevCloud AI SuperCloud",
      },
    ],
    charts: [
      {
        id: "llm-inference-performance",
        title: "Up to 2X the LLM Inference Performance",
        caption: "Relative LLM inference performance vs H100 baseline",
        yAxisMax: 2,
        yAxisStep: 0.5,
        yAxisFormat: "multiplier",
        bars: [
          {
            id: "h100-llama2-13b",
            name: "Llama2 13B",
            description: "H100",
            value: 1,
            displayValue: "1X",
            variant: "default",
          },
          {
            id: "h200-llama2-13b",
            name: "Llama2 13B",
            description: "H200",
            value: 1.4,
            displayValue: "1.4X",
            variant: "highlight",
          },
          {
            id: "h100-gpt3-175b",
            name: "GPT-3 175B",
            description: "H100",
            value: 1,
            displayValue: "1X",
            variant: "default",
          },
          {
            id: "h200-gpt3-175b",
            name: "GPT-3 175B",
            description: "H200",
            value: 1.6,
            displayValue: "1.6X",
            variant: "highlight",
          },
          {
            id: "h100-llama2-70b",
            name: "Llama2 70B",
            description: "H100",
            value: 1,
            displayValue: "1X",
            variant: "default",
          },
          {
            id: "h200-llama2-70b",
            name: "Llama2 70B",
            description: "H200",
            value: 1.9,
            displayValue: "1.9X",
            variant: "highlight",
          },
        ],
        legend: [
          {
            label: "H100",
            variant: "default",
          },
          {
            label: "H200",
            variant: "highlight",
          },
        ],
      },
      {
        id: "energy-tco-reduction",
        title: "H200 Reduces LLM Energy Use and TCO by 50%",
        caption: "Llama2 70B LLM Inference Workload · Lower is Better",
        yAxisMax: 100,
        yAxisStep: 25,
        yAxisFormat: "number",
        bars: [
          {
            id: "h100-tco",
            name: "Total Cost of Ownership",
            description: "H100",
            value: 100,
            displayValue: "100%",
            variant: "default",
          },
          {
            id: "h200-tco",
            name: "Total Cost of Ownership",
            description: "H200",
            value: 50,
            displayValue: "50%",
            variant: "highlight",
          },
          {
            id: "h100-energy",
            name: "Energy Use",
            description: "H100",
            value: 100,
            displayValue: "100%",
            variant: "default",
          },
          {
            id: "h200-energy",
            name: "Energy Use",
            description: "H200",
            value: 50,
            displayValue: "50%",
            variant: "highlight",
          },
        ],
        legend: [
          {
            label: "H100",
            variant: "default",
          },
          {
            label: "H200",
            variant: "highlight",
          },
        ],
      },
    ],
  };

export const NVIDIA_H100_TECHNICAL_SPECS_SECTION: GpuTechnicalSpecsSectionContent =
  {
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
    rows: [
      {
        id: "gpu-memory",
        feature: "GPU Memory",
        specification: "80GB",
      },
      {
        id: "gpu-memory-bandwidth",
        feature: "GPU Memory Bandwidth",
        specification: "3.35TB/s",
      },
      {
        id: "max-tdp",
        feature: "Max Thermal Design Power (TDP)",
        specification: "Up to 700W (configurable)",
      },
      {
        id: "mig",
        feature: "Multi-Instance GPUs",
        specification: "Up to 7 MIGS @ 10GB each",
      },
      {
        id: "interconnect",
        feature: "Interconnect",
        specification: "NVIDIA NVLink™: 900GB/s\nPCIe Gen5: 128GB/s",
      },
      {
        id: "server-options",
        feature: "Server Options",
        specification:
          "NVIDIA HGX H100 Partner and NVIDIA-Certified Systems™ with 4 or 8 GPUs\nNVIDIA DGX H100 with 8 GPUs",
      },
      {
        id: "decoders",
        feature: "Decoders",
        specification: "7 NVDEC\n7 JPEG",
      },
      {
        id: "form-factor",
        feature: "Form Factor",
        specification: "SXM",
      },
      {
        id: "power-efficiency",
        feature: "Power Efficiency",
        specification: "Optimized for maximum throughput per watt",
      },
    ],
    charts: [
      {
        id: "gpt3-175b",
        caption: "GPT-3 175B Params",
        yAxisLabel: "Speed up over A100",
        yAxisMax: 4,
        yAxisFormat: "multiplier",
        bars: [
          {
            id: "a100-gpt3",
            name: "NVIDIA A100 Tensor Core GPU",
            value: 1,
            displayValue: "1x",
            variant: "default",
          },
          {
            id: "h100-gpt3",
            name: "NVIDIA H100 Tensor Core GPU",
            value: 4,
            displayValue: "4x",
            variant: "highlight",
          },
        ],
      },
      {
        id: "moe-switch-xxl",
        caption: "MoE Switch XXL 395B Params",
        yAxisLabel: "Speed up over A100",
        yAxisMax: 9,
        yAxisFormat: "multiplier",
        bars: [
          {
            id: "a100-moe",
            name: "NVIDIA A100 Tensor Core GPU",
            value: 1,
            displayValue: "1x",
            variant: "default",
          },
          {
            id: "h100-moe",
            name: "NVIDIA H100 Tensor Core GPU",
            value: 5,
            displayValue: "5x",
            variant: "highlight",
          },
          {
            id: "h100-nvswitch-moe",
            name: "NVIDIA H100 + NVLink Switch System",
            value: 9,
            displayValue: "9x",
            variant: "highlight-light",
          },
        ],
        legend: [
          {
            label: "NVIDIA A100 Tensor Core GPU",
            variant: "default",
          },
          {
            label: "NVIDIA H100 Tensor Core GPU",
            variant: "highlight",
          },
          {
            label: "NVIDIA H100 + NVLink Switch System",
            variant: "highlight-light",
          },
        ],
      },
    ],
  };

export const NVIDIA_RTX_3090_TECHNICAL_SPECS_SECTION: GpuTechnicalSpecsSectionContent =
  {
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
    rows: [
      {
        id: "gpu-architecture",
        feature: "GPU Architecture",
        specification: "Ampere",
      },
      {
        id: "tensor-cores",
        feature: "Tensor Cores",
        specification: "3rd Generation",
      },
      {
        id: "gpu-memory",
        feature: "GPU Memory",
        specification: "24 GB GDDR6X",
      },
      {
        id: "cuda-cores",
        feature: "NVIDIA CUDA® Cores",
        specification: "10496",
      },
      {
        id: "nvlink-bandwidth",
        feature: "NVIDIA NVLink™ (SLI-Ready)",
        specification: "Yes",
      },
      {
        id: "supplementary-power-connectors",
        feature: "Supplementary Power Connectors",
        specification: "Yes",
      },
      {
        id: "graphics-card-power",
        feature: "Graphics Card Power",
        specification: "350W",
      },
      {
        id: "form-factor",
        feature: "Form Factor",
        specification: "Scalable data center platform",
      },
      {
        id: "power-efficiency",
        feature: "Power Efficiency",
        specification: "Optimized for maximum throughput per watt",
      },
    ],
  };

export const NVIDIA_RTX_5090_TECHNICAL_SPECS_SECTION: GpuTechnicalSpecsSectionContent =
  {
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
    rows: [
      {
        id: "gpu",
        feature: "GPU",
        specification: "NVIDIA RTX 5090",
      },
      {
        id: "architecture",
        feature: "Architecture",
        specification: "Blackwell Next-Gen",
      },
      {
        id: "gpu-memory",
        feature: "GPU Memory",
        specification: "32 GB GDDR7",
      },
      {
        id: "memory-bandwidth",
        feature: "Memory Bandwidth",
        specification: "1.7 TB/s",
      },
      {
        id: "cuda-cores",
        feature: "CUDA Cores",
        specification: "21760",
      },
      {
        id: "tensor-cores",
        feature: "Tensor Cores",
        specification: "Advanced 5th-gen for enhanced AI workloads",
      },
      {
        id: "rt-cores",
        feature: "Ray Tracing Cores",
        specification: "4th-gen RT cores for accelerated computation",
      },
      {
        id: "power-consumption",
        feature: "Power Consumption",
        specification: "575W (Cloud-optimized configurations)",
      },
    ],
    charts: [
      {
        id: "rtx-5090-performance-comparison",
        caption: "Relative performance vs RTX 4090 baseline",
        yAxisMax: 2.6,
        yAxisStep: 0.5,
        yAxisFormat: "multiplier",
        referenceLine: 1,
        bars: [
          {
            id: "rtx-4090-cyberpunk",
            name: "Cyberpunk 2077",
            description: "RTX 4090",
            value: 1,
            displayValue: "1X",
            variant: "default",
          },
          {
            id: "rtx-5090-cyberpunk",
            name: "Cyberpunk 2077",
            description: "RTX 5090",
            value: 2.4,
            displayValue: "2.4X",
            variant: "highlight",
          },
          {
            id: "rtx-4090-indiana-jones",
            name: "Indiana Jones",
            description: "RTX 4090",
            value: 1,
            displayValue: "1X",
            variant: "default",
          },
          {
            id: "rtx-5090-indiana-jones",
            name: "Indiana Jones",
            description: "RTX 5090",
            value: 2.1,
            displayValue: "2.1X",
            variant: "highlight",
          },
          {
            id: "rtx-4090-davinci",
            name: "DaVinci Resolve",
            description: "RTX 4090",
            value: 1,
            displayValue: "1X",
            variant: "default",
          },
          {
            id: "rtx-5090-davinci",
            name: "DaVinci Resolve",
            description: "RTX 5090",
            value: 1.4,
            displayValue: "1.4X",
            variant: "highlight",
          },
          {
            id: "rtx-4090-d5-render",
            name: "D5 Render",
            description: "RTX 4090",
            value: 1,
            displayValue: "1X",
            variant: "default",
          },
          {
            id: "rtx-5090-d5-render",
            name: "D5 Render",
            description: "RTX 5090",
            value: 2.6,
            displayValue: "2.6X",
            variant: "highlight",
          },
          {
            id: "rtx-4090-genai",
            name: "Generative AI",
            description: "RTX 4090",
            value: 1,
            displayValue: "1X",
            variant: "default",
          },
          {
            id: "rtx-5090-genai",
            name: "Generative AI",
            description: "RTX 5090",
            value: 2.1,
            displayValue: "2.1X",
            variant: "highlight",
          },
        ],
        legend: [
          {
            label: "RTX 4090",
            variant: "default",
          },
          {
            label: "RTX 5090",
            variant: "highlight",
          },
        ],
      },
    ],
  };

export const NVIDIA_A6000_TECHNICAL_SPECS_SECTION: GpuTechnicalSpecsSectionContent =
  {
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
    rows: [
      {
        id: "gpu",
        feature: "GPU",
        specification: "NVIDIA RTX™ A6000",
      },
      {
        id: "gpu-memory",
        feature: "GPU Memory",
        specification: "48GB GDDR6 with error-correcting code (ECC)",
      },
      {
        id: "display-ports",
        feature: "Display Ports",
        specification: "4x Display Port 1.4a",
      },
      {
        id: "thermal",
        feature: "Thermal",
        specification: "Active cooling for optimal temperature management",
      },
      {
        id: "nvlink",
        feature: "NVLink",
        specification:
          "2-way low profile; enables connection of 2 RTX A6000 GPUs",
      },
      {
        id: "vgpu-software",
        feature: "vGPU Software Support",
        specification:
          "NVIDIA vPC/vApps, NVIDIA RTX Virtual Workstation, NVIDIA Virtual Compute Server",
      },
      {
        id: "vr-ready",
        feature: "VR Ready",
        specification: "Yes",
      },
    ],
    charts: [
      {
        id: "bert-large-training",
        title:
          "Over 3X Higher Out-of-the-Box Performance with TF32 for AI Training",
        caption: "BERT Large Training",
        yAxisMax: 3.5,
        yAxisStep: 0.5,
        yAxisFormat: "multiplier",
        referenceLine: 1,
        bars: [
          {
            id: "rtx-6000-tf32",
            name: "RTX 6000 TF32",
            value: 1,
            displayValue: "1.0X",
            variant: "default",
          },
          {
            id: "rtx-a6000-tf32",
            name: "RTX A6000 TF32",
            value: 3.1,
            displayValue: "3.1X",
            variant: "highlight",
          },
        ],
        legend: [
          {
            label: "RTX 6000 TF32",
            variant: "default",
          },
          {
            label: "RTX A6000 TF32",
            variant: "highlight",
          },
        ],
      },
    ],
  };

export const NVIDIA_A6000_SE_TECHNICAL_SPECS_SECTION: GpuTechnicalSpecsSectionContent =
  {
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
    rows: [
      {
        id: "gpu-architecture",
        feature: "GPU Architecture",
        specification: "NVIDIA Blackwell",
      },
      {
        id: "cuda-cores",
        feature: "CUDA Cores",
        specification: "24,064",
      },
      {
        id: "tensor-cores",
        feature: "Tensor Cores",
        specification: "5th Generation",
      },
      {
        id: "rt-cores",
        feature: "Ray Tracing Cores",
        specification: "4th Generation",
      },
      {
        id: "ai-tops",
        feature: "AI TOPS",
        specification: "4000 TOPS",
      },
      {
        id: "fp32-performance",
        feature: "Single-Precision FP32",
        specification: "125 TFLOPS",
      },
      {
        id: "rt-core-performance",
        feature: "RT Core Performance",
        specification: "380 TFLOPS",
      },
      {
        id: "gpu-memory",
        feature: "GPU Memory",
        specification: "96 GB GDDR7 with ECC",
      },
      {
        id: "memory-interface",
        feature: "Memory Interface",
        specification: "512-bit",
      },
      {
        id: "memory-bandwidth",
        feature: "Memory Bandwidth",
        specification: "1792 GB/s",
      },
      {
        id: "compute-apis",
        feature: "Compute APIs",
        specification: "CUDA 12.8, OpenCL 3.0, DirectCompute",
      },
    ],
    charts: [
      {
        id: "memory-comparison",
        caption: "Memory (GB)",
        yAxisMax: 140,
        yAxisStep: 20,
        yAxisFormat: "number",
        bars: [
          {
            id: "rtx-pro-6000-memory",
            name: "NVIDIA RTX Pro6000",
            value: 96,
            displayValue: "96 GB",
            variant: "highlight",
          },
          {
            id: "rtx-6000-ada-memory",
            name: "NVIDIA RTX 6000 Ada",
            value: 48,
            displayValue: "48 GB",
            variant: "default",
          },
          {
            id: "a100-memory",
            name: "NVIDIA A100",
            value: 40,
            displayValue: "40 GB",
            variant: "default",
          },
          {
            id: "h100-memory",
            name: "NVIDIA H100",
            value: 80,
            displayValue: "80 GB",
            variant: "default",
          },
        ],
        legend: [
          {
            label: "NVIDIA RTX Pro6000",
            variant: "highlight",
          },
          {
            label: "NVIDIA RTX 6000 Ada",
            variant: "default",
          },
          {
            label: "NVIDIA A100",
            variant: "default",
          },
          {
            label: "NVIDIA H100",
            variant: "default",
          },
        ],
      },
      {
        id: "memory-bandwidth-comparison",
        caption: "Memory Bandwidth (GB/s)",
        yAxisMax: 4000,
        yAxisStep: 500,
        yAxisFormat: "number",
        bars: [
          {
            id: "rtx-pro-6000-bandwidth",
            name: "NVIDIA RTX Pro6000",
            value: 1792,
            displayValue: "1792 GB/s",
            variant: "highlight",
          },
          {
            id: "rtx-6000-ada-bandwidth",
            name: "NVIDIA RTX 6000 Ada",
            value: 960,
            displayValue: "960 GB/s",
            variant: "default",
          },
          {
            id: "a100-bandwidth",
            name: "NVIDIA A100",
            value: 1555,
            displayValue: "1555 GB/s",
            variant: "default",
          },
          {
            id: "h100-bandwidth",
            name: "NVIDIA H100",
            value: 2000,
            displayValue: "2000 GB/s",
            variant: "default",
          },
        ],
        legend: [
          {
            label: "NVIDIA RTX Pro6000",
            variant: "highlight",
          },
          {
            label: "NVIDIA RTX 6000 Ada",
            variant: "default",
          },
          {
            label: "NVIDIA A100",
            variant: "default",
          },
          {
            label: "NVIDIA H100",
            variant: "default",
          },
        ],
      },
    ],
  };

export const NVIDIA_TESLA_T4_TECHNICAL_SPECS_SECTION: GpuTechnicalSpecsSectionContent =
  {
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
    rows: [
      {
        id: "gpu-architecture",
        feature: "GPU Architecture",
        specification: "NVIDIA Turing",
      },
      {
        id: "cuda-cores",
        feature: "CUDA Cores",
        specification: "2,560",
      },
      {
        id: "tensor-cores",
        feature: "Tensor Cores",
        specification: "320",
      },
      {
        id: "gpu-memory",
        feature: "GPU Memory",
        specification: "16 GB GDDR6",
      },
      {
        id: "ecc-support",
        feature: "ECC Support",
        specification: "Yes",
      },
      {
        id: "fp32-performance",
        feature: "FP32 (Single Precision)",
        specification: "8.1 TFLOPS",
      },
      {
        id: "interconnect-bandwidth",
        feature: "Interconnect Bandwidth",
        specification: "32 GB/sec",
      },
      {
        id: "memory-bandwidth",
        feature: "Memory Bandwidth",
        specification: "300 GB/sec",
      },
      {
        id: "compute-apis",
        feature: "Compute APIs",
        specification: "CUDA, NVIDIA TensorRT™, ONNX",
      },
      {
        id: "vgpu-support",
        feature: "Virtualization (vGPU) Support",
        specification: "Yes",
      },
    ],
  };

export const NVIDIA_NVL72_TECHNICAL_SPECS_SECTION: GpuTechnicalSpecsSectionContent =
  {
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
    rows: [
      {
        id: "architecture",
        feature: "Architecture",
        specification: "NVIDIA Blackwell Architecture",
      },
      {
        id: "configuration",
        feature: "Configuration",
        specification: "NVL72 System",
      },
      {
        id: "gpu-interconnect",
        feature: "GPU Interconnect",
        specification: "NVLink",
      },
      {
        id: "performance",
        feature: "Performance",
        specification: "High-performance AI training & inference",
      },
      {
        id: "deployment",
        feature: "Deployment",
        specification: "Large-scale AI clusters & datacenters",
      },
    ],
  };
