import { LUCIDE_ICONS } from "@/shared/icons/lucide-icon-map";
import type {
  CpuInstanceTypeId,
  CpuInstanceTypeOption,
  CpuPricingRow,
} from "../types/transparent-pricing-section.types";

export const CPU_INSTANCE_TYPE_OPTIONS: readonly CpuInstanceTypeOption[] = [
  {
    id: "general-purpose",
    label: "General Purpose",
    icon: LUCIDE_ICONS["server"],
  },
  { id: "cpu-optimized", label: "CPU Optimized", icon: LUCIDE_ICONS.cpu },
  {
    id: "io-optimized",
    label: "I/O Optimized",
    icon: LUCIDE_ICONS["hard-drive"],
  },
  {
    id: "memory-optimized",
    label: "Memory Optimized",
    icon: LUCIDE_ICONS["memory-stick"],
  },
] as const;

export const CPU_GENERAL_PURPOSE_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "nanoboost",
    name: "NanoBoost",
    vcpus: "2",
    ram: "2 GB",
    priceOnDemand: "₹0.97",
    price3Month: "₹0.92",
    price6Month: "₹0.87",
    price1Year: "₹0.82",
    bestFor: "Small APIs, microservices",
  },
  {
    id: "megafuse",
    name: "MegaFuse",
    vcpus: "4",
    ram: "8 GB",
    priceOnDemand: "₹1.92",
    price3Month: "₹1.83",
    price6Month: "₹1.73",
    price1Year: "₹1.63",
    bestFor: "App servers, mid-scale databases",
  },
  {
    id: "stellarsurge",
    name: "StellarSurge",
    vcpus: "4",
    ram: "16 GB",
    priceOnDemand: "₹2.59",
    price3Month: "₹2.46",
    price6Month: "₹2.33",
    price1Year: "₹2.20",
    bestFor: "CI runners, monitoring stacks",
  },
  {
    id: "velocityvortex",
    name: "VelocityVortex",
    vcpus: "8",
    ram: "16 GB",
    priceOnDemand: "₹3.71",
    price3Month: "₹3.52",
    price6Month: "₹3.34",
    price1Year: "₹3.15",
    bestFor: "Multi-service apps, orchestration",
  },
  {
    id: "quantumquake",
    name: "QuantumQuake",
    vcpus: "8",
    ram: "64 GB",
    priceOnDemand: "₹7.70",
    price3Month: "₹7.31",
    price6Month: "₹6.93",
    price1Year: "₹6.54",
    bestFor: "In-memory workloads, large-scale caching",
  },
  {
    id: "aetheravalanche",
    name: "AetherAvalanche",
    vcpus: "32",
    ram: "128 GB",
    priceOnDemand: "₹19.72",
    price3Month: "₹18.74",
    price6Month: "₹17.75",
    price1Year: "₹16.76",
    bestFor: "Largest in-memory workloads, HPC-scale compute",
  },
] as const;

export const CPU_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "hypernova",
    name: "HyperNova",
    vcpus: "16",
    ram: "32 GB",
    priceOnDemand: "₹7.27",
    price3Month: "₹6.91",
    price6Month: "₹6.55",
    price1Year: "₹6.18",
    bestFor: "Batch jobs, media workloads",
  },
  {
    id: "nebulanucleus",
    name: "NebulaNucleus",
    vcpus: "32",
    ram: "64 GB",
    priceOnDemand: "₹14.41",
    price3Month: "₹13.69",
    price6Month: "₹12.97",
    price1Year: "₹12.25",
    bestFor: "Heavy parallel compute, HPC workloads",
  },
] as const;

export const CPU_IO_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "hypernovaio",
    name: "HyperNovaIO",
    vcpus: "2",
    ram: "2 GB",
    priceOnDemand: "₹8.50",
    bestFor: "Dev environments, lightweight apps",
  },
  {
    id: "infinityignitionio",
    name: "InfinityIgnitionIO",
    vcpus: "2",
    ram: "2 GB",
    priceOnDemand: "₹12.75",
    bestFor: "Small APIs, microservices",
  },
  {
    id: "titanthunderio",
    name: "TitanThunderIO",
    vcpus: "2",
    ram: "2 GB",
    priceOnDemand: "₹25.50",
    bestFor: "App servers, mid-scale databases",
  },
  {
    id: "nebulanucleusio",
    name: "NebulaNucleusIO",
    vcpus: "2",
    ram: "2 GB",
    priceOnDemand: "₹42.50",
    bestFor: "CI runners, monitoring stacks",
  },
] as const;

export const CPU_MEMORY_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "cosmiccascade",
    name: "CosmicCascade",
    vcpus: "2",
    ram: "8 GB",
    priceOnDemand: "₹1.36",
    price3Month: "₹1.29",
    price6Month: "₹1.23",
    price1Year: "₹1.16",
    bestFor: "Caching, small in-memory stores",
  },
  {
    id: "turbonebula",
    name: "TurboNebula",
    vcpus: "4",
    ram: "32 GB",
    priceOnDemand: "₹3.91",
    price3Month: "₹3.72",
    price6Month: "₹3.52",
    price1Year: "₹3.33",
    bestFor: "Redis, Elasticsearch nodes",
  },
  {
    id: "infinityignition",
    name: "InfinityIgnition",
    vcpus: "8",
    ram: "32 GB",
    priceOnDemand: "₹5.03",
    price3Month: "₹4.78",
    price6Month: "₹4.53",
    price1Year: "₹4.28",
    bestFor: "JVM workloads, large caches",
  },
  {
    id: "titanthunder",
    name: "TitanThunder",
    vcpus: "16",
    ram: "64 GB",
    priceOnDemand: "₹9.93",
    price3Month: "₹9.43",
    price6Month: "₹8.94",
    price1Year: "₹8.44",
    bestFor: "In-memory analytics, embedding caches",
  },
] as const;

export const CPU_PRICING_ROWS_BY_INSTANCE_TYPE: Record<
  CpuInstanceTypeId,
  readonly CpuPricingRow[]
> = {
  "general-purpose": CPU_GENERAL_PURPOSE_PRICING_ROWS,
  "cpu-optimized": CPU_OPTIMIZED_PRICING_ROWS,
  "io-optimized": CPU_IO_OPTIMIZED_PRICING_ROWS,
  "memory-optimized": CPU_MEMORY_OPTIMIZED_PRICING_ROWS,
};

export const CPU_INSTANCE_TYPE_DESCRIPTIONS: Record<CpuInstanceTypeId, string> =
  {
    "general-purpose":
      "Balanced compute and memory for APIs, databases, web servers, monitoring, and dev environments.",
    "cpu-optimized":
      "High core count for compute-heavy tasks such as batch processing, media transcoding, and data preprocessing pipelines.",
    "io-optimized":
      "Enhanced disk IOPS and throughput for storage-intensive workloads like databases, log pipelines, and high-frequency read/writes.",
    "memory-optimized":
      "High RAM-to-CPU ratio for in-memory databases, large caches, embedding lookups, and JVM workloads.",
  };
