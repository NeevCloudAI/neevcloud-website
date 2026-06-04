import {
  BenchmarkItem,
  FastestConfigFeature,
} from "../types/performance-section.types";
export const BENCHMARK_ITEMS: BenchmarkItem[] = [
  {
    id: "a100-medium",
    label: "1× A100",
    labelColor: "text-white",
    subtitle: "Medium · 5M polys",
    minutes: 12,
    valueColor: "text-white",
    barColor: "bg-gray-85",
  },
  {
    id: "h100-medium",
    label: "1× H100",
    labelColor: "text-white",
    subtitle: "Medium · 5M polys",
    minutes: 4,
    valueColor: "text-white",
    barColor: "bg-gray-85",
  },
  {
    id: "a100-high",
    label: "1× A100",
    labelColor: "text-white",
    subtitle: "High · 20M polys",
    minutes: 45,
    valueColor: "text-white",
    barColor: "bg-gray-85",
  },
  {
    id: "h100-high",
    label: "1× H100",
    labelColor: "text-white",
    subtitle: "High · 20M polys",
    minutes: 14,
    valueColor: "text-white",
    barColor: "bg-gray-85",
  },
  {
    id: "h100x8-high",
    label: "8× H100",
    labelColor: "text-white",
    subtitle: "High · 20M polys",
    minutes: 2,
    valueColor: "text-primary",
    barColor: "bg-gradient-to-r from-[#59D8A7] to-[#022C3C]",
    highlighted: true,
  },
];

export const BENCHMARK_FOOTNOTE =
  "Benchmarks: Blender 4.2 · Cycles · 4096 samples · 4K (4096×2160) · denoiser off · measured at p50 over 50 renders per config. Path-traced scenes selected from BMW27, Junkshop, and Classroom complexity profiles.";

export const FASTEST_CONFIG_FEATURES: FastestConfigFeature[] = [
  { id: "vs-a100", label: "vs A100", value: "22.5× faster" },
  { id: "vs-h100", label: "vs 1× H100", value: "7× faster" },
  { id: "interconnect", label: "interconnect", value: "NVLink + IB" },
  { id: "billing", label: "billing", value: "per-second" },
];

export const FASTEST_CONFIG_DESCRIPTION = [
  {
    text: "8× H100 with NVLink delivers a 20M-poly path-traced 4K frame in 2 minutes, ",
  },
  { text: "22.5× faster", highlight: true },
  { text: " than a single A100 and " },
  { text: "7× faster", highlight: true },
  {
    text: " than a single H100. Per-second billing means the cluster vanishes the moment your render finishes.",
  },
];
