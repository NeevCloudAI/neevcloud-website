import {
  PerformanceBenchmarkWorkload,
  PerformanceSummaryMetric,
} from "../types/performance-section.types";

export const HEALTHCARE_PERFORMANCE_SUMMARY_METRICS: readonly PerformanceSummaryMetric[] =
  [
    {
      id: "medical-image-segmentation",
      label: "MEDICAL IMAGE SEGMENTATION",
      value: "4.2x",
      footer: "faster on H100 vs A100",
    },
    {
      id: "protein-folding",
      label: "PROTEIN FOLDING",
      value: "3.8x",
      footer: "faster on H100 vs A100",
    },
    {
      id: "genomic-variant-calling",
      label: "GENOMIC VARIANT CALLING",
      value: "2.9x",
      footer: "faster on H100 vs A100",
    },
  ] as const;

export const HEALTHCARE_PERFORMANCE_BENCHMARKS: readonly PerformanceBenchmarkWorkload[] =
  [
    {
      id: "ct-scan-segmentation",
      title: "CT scan segmentation",
      detail: "512 x 512 x 380",
      rows: [
        {
          id: "ct-scan-a100",
          gpu: "1x A100",
          processingTime: "8.5 sec",
          relativeTimePercent: 100,
          isBaseline: true,
        },
        {
          id: "ct-scan-h100",
          gpu: "1x H100",
          processingTime: "2.0 sec",
          relativeTimePercent: 24,
          isBaseline: false,
        },
      ],
    },
    {
      id: "alphafold2-protein-structure",
      title: "AlphaFold2 protein structure",
      detail: "1,024-residue chain",
      rows: [
        {
          id: "alphafold2-a100",
          gpu: "1x A100",
          processingTime: "12 min",
          relativeTimePercent: 100,
          isBaseline: true,
        },
        {
          id: "alphafold2-h100",
          gpu: "1x H100",
          processingTime: "3.2 min",
          relativeTimePercent: 27,
          isBaseline: false,
        },
      ],
    },
    {
      id: "whole-genome-variant-calling",
      title: "Whole genome variant calling",
      detail: "30x WGS - 100GB FASTQ",
      rows: [
        {
          id: "wgs-a100",
          gpu: "8x A100",
          processingTime: "45 min",
          relativeTimePercent: 100,
          isBaseline: true,
        },
        {
          id: "wgs-h100",
          gpu: "8x H100",
          processingTime: "15 min",
          relativeTimePercent: 33,
          isBaseline: false,
        },
      ],
    },
  ] as const;

export const HEALTHCARE_PERFORMANCE_DISCLAIMER =
  "Benchmarks represent typical medical AI workloads. Actual times vary by model architecture, dataset size, and processing parameters. Measured at p50 over 50 runs per configuration on NeevCloud production infrastructure (ap-south-1 - Indore).";
