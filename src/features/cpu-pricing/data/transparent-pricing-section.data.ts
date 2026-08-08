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
  },
  {
    id: "megafuse",
    name: "MegaFuse",
    vcpus: "4",
    ram: "8 GB",
  },
  {
    id: "stellarsurge",
    name: "StellarSurge",
    vcpus: "4",
    ram: "16 GB",
  },
  {
    id: "velocityvortex",
    name: "VelocityVortex",
    vcpus: "8",
    ram: "16 GB",
  },
  {
    id: "quantumquake",
    name: "QuantumQuake",
    vcpus: "8",
    ram: "64 GB",
  },
  {
    id: "aetheravalanche",
    name: "AetherAvalanche",
    vcpus: "32",
    ram: "128 GB",
  },
] as const;

export const CPU_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "hypernova",
    name: "HyperNova",
    vcpus: "16",
    ram: "32 GB",
  },
  {
    id: "nebulanucleus",
    name: "NebulaNucleus",
    vcpus: "32",
    ram: "64 GB",
  },
] as const;

export const CPU_IO_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "hypernovaio",
    name: "HyperNovaIO",
    vcpus: "2",
    ram: "2 GB",
  },
  {
    id: "infinityignitionio",
    name: "InfinityIgnitionIO",
    vcpus: "2",
    ram: "2 GB",
  },
  {
    id: "titanthunderio",
    name: "TitanThunderIO",
    vcpus: "2",
    ram: "2 GB",
  },
  {
    id: "nebulanucleusio",
    name: "NebulaNucleusIO",
    vcpus: "2",
    ram: "2 GB",
  },
] as const;

export const CPU_MEMORY_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "cosmiccascade",
    name: "CosmicCascade",
    vcpus: "2",
    ram: "8 GB",
  },
  {
    id: "turbonebula",
    name: "TurboNebula",
    vcpus: "4",
    ram: "32 GB",
  },
  {
    id: "infinityignition",
    name: "InfinityIgnition",
    vcpus: "8",
    ram: "32 GB",
  },
  {
    id: "titanthunder",
    name: "TitanThunder",
    vcpus: "16",
    ram: "64 GB",
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
