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
          "8x OSFP ports; Up to 800Gb/s NVIDIA InfiniBand/Ethernet; 2x dual-port QSFP112 NVIDIA BlueField-3 DPU",
      },
      {
        id: "storage",
        feature: "Storage",
        specification: "OS: 2x 1.9TB NVMe M.2; Internal: 8x 3.84TB NVMe E1.S",
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
