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
  { id: "smart-servers", label: "Smart Servers", icon: LUCIDE_ICONS.zap },
] as const;

export const CPU_GENERAL_PURPOSE_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "nano",
    name: "Nano",
    vcpus: "2",
    ram: "2 GB",
    pricePerHour: "₹8.50",
    bestFor: "Dev environments, lightweight apps",
  },
  {
    id: "nanoboost",
    name: "NanoBoost",
    vcpus: "2",
    ram: "2 GB",
    pricePerHour: "₹12.75",
    bestFor: "Small APIs, microservices",
  },
  {
    id: "megafuse",
    name: "MegaFuse",
    vcpus: "2",
    ram: "2 GB",
    pricePerHour: "₹26.50",
    bestFor: "App servers, mid-scale databases",
  },
  {
    id: "stellarsurge",
    name: "StellarSurge",
    vcpus: "2",
    ram: "2 GB",
    pricePerHour: "₹42.50",
    bestFor: "CI runners, monitoring stacks",
  },
  {
    id: "velocityvortex",
    name: "VelocityVortex",
    vcpus: "2",
    ram: "2 GB",
    pricePerHour: "₹51.00",
    bestFor: "Multi-service apps, orchestration",
  },
] as const;

export const CPU_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "hypernova",
    name: "HyperNova",
    vcpus: "16",
    ram: "2 GB",
    pricePerHour: "₹93.50",
    bestFor: "Batch jobs, media workloads",
  },
  {
    id: "nebulanucleus",
    name: "NebulaNucleus",
    vcpus: "32",
    ram: "4 GB",
    pricePerHour: "₹187.00",
    bestFor: "Heavy parallel compute, HPC workloads",
  },
] as const;

export const CPU_IO_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "hypernovaio",
    name: "HyperNovaIO",
    vcpus: "2",
    ram: "2 GB",
    pricePerHour: "₹8.50",
    bestFor: "Dev environments, lightweight apps",
  },
  {
    id: "infinityignitionio",
    name: "InfinityIgnitionIO",
    vcpus: "2",
    ram: "2 GB",
    pricePerHour: "₹12.75",
    bestFor: "Small APIs, microservices",
  },
  {
    id: "titanthunderio",
    name: "TitanThunderIO",
    vcpus: "2",
    ram: "2 GB",
    pricePerHour: "₹25.50",
    bestFor: "App servers, mid-scale databases",
  },
  {
    id: "nebulanucleusio",
    name: "NebulaNucleusIO",
    vcpus: "2",
    ram: "2 GB",
    pricePerHour: "₹42.50",
    bestFor: "CI runners, monitoring stacks",
  },
] as const;

export const CPU_MEMORY_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "cosmiccascade",
    name: "CosmicCascade",
    vcpus: "2",
    ram: "2 GB",
    pricePerHour: "₹21.25",
    bestFor: "Caching, small in-memory stores",
  },
  {
    id: "turbonebula",
    name: "TurboNebula",
    vcpus: "4",
    ram: "32 GB",
    pricePerHour: "₹68.00",
    bestFor: "Redis, Elasticsearch nodes",
  },
  {
    id: "infinityignition",
    name: "InfinityIgnition",
    vcpus: "8",
    ram: "32 GB",
    pricePerHour: "₹76.50",
    bestFor: "JVM workloads, large caches",
  },
  {
    id: "titanthunder",
    name: "TitanThunder",
    vcpus: "16",
    ram: "64 GB",
    pricePerHour: "₹153.00",
    bestFor: "In-memory analytics, embedding caches",
  },
] as const;

export const CPU_SMART_SERVER_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "smart-1",
    name: "Smart-1",
    vcpus: "12",
    ram: "24 GB",
    pricePerHour: "₹68.00",
    bestFor: "Mid-size production applications",
  },
  {
    id: "smart-2",
    name: "Smart-2",
    vcpus: "16",
    ram: "32 GB",
    pricePerHour: "₹93.50",
    bestFor: "Orchestration, control planes",
  },
  {
    id: "smart-3",
    name: "Smart-3",
    vcpus: "20",
    ram: "48 GB",
    pricePerHour: "₹127.50",
    bestFor: "Multi-tenant stacks",
  },
  {
    id: "smart-4",
    name: "Smart-4",
    vcpus: "24",
    ram: "64 GB",
    pricePerHour: "₹170.00",
    bestFor: "Enterprise-grade workloads",
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
  "smart-servers": CPU_SMART_SERVER_PRICING_ROWS,
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
    "smart-servers":
      "Pre-configured, high-spec instances for immediate production use with intelligent resource management.",
  };
