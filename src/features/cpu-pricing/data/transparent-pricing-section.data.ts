import { LUCIDE_ICONS } from "@/shared/icons/lucide-icon-map";
import type {
  CpuInstanceTypeId,
  CpuInstanceTypeOption,
  CpuOsToggleOption,
  CpuPricingRow,
  CpuInstanceTypeConfig,
  CpuStorageVolumeOption,
} from "../types/transparent-pricing-section.types";

export const CPU_INSTANCE_TYPE_OPTIONS: readonly CpuInstanceTypeOption[] = [
  {
    id: "general-purpose",
    label: "General Purpose",
    icon: LUCIDE_ICONS["server"],
  },
  { id: "cpu-optimized", label: "CPU Optimized", icon: LUCIDE_ICONS.cpu },
  {
    id: "memory-optimized",
    label: "Memory Optimized",
    icon: LUCIDE_ICONS["memory-stick"],
  },
] as const;

export const CPU_OS_TOGGLE_OPTIONS: readonly CpuOsToggleOption[] = [
  { id: "linux", label: "Linux Price" },
  { id: "windows", label: "Windows Price" },
] as const;

export const CPU_GENERAL_PURPOSE_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "nano",
    name: "Nano",
    vcpus: "2",
    ram: "2 GB",
    storage: "20 GB",
    linuxPriceMonthly: 739,
    windowsPriceMonthly: 1139,
  },
  {
    id: "nanoboost",
    name: "NanoBoost",
    vcpus: "2",
    ram: "4 GB",
    storage: "20 GB",
    linuxPriceMonthly: 939,
    windowsPriceMonthly: 1339,
  },
  {
    id: "stellarsurge",
    name: "StellarSurge",
    vcpus: "4",
    ram: "16 GB",
    storage: "20 GB",
    linuxPriceMonthly: 1900,
    windowsPriceMonthly: 2700,
  },
  {
    id: "megafuse",
    name: "MegaFuse",
    vcpus: "4",
    ram: "8 GB",
    storage: "20 GB",
    linuxPriceMonthly: 1420,
    windowsPriceMonthly: 2220,
  },
  {
    id: "velocityvortex",
    name: "VelocityVortex",
    vcpus: "8",
    ram: "16 GB",
    storage: "20 GB",
    linuxPriceMonthly: 2700,
    windowsPriceMonthly: 4300,
  },
] as const;

export const CPU_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "hypernova",
    name: "Hypernova",
    vcpus: "16",
    ram: "32 GB",
    storage: "20 GB",
    linuxPriceMonthly: 5260,
    windowsPriceMonthly: 8400,
  },
  {
    id: "nebulanucleus",
    name: "Nebula Nucleus",
    vcpus: "32",
    ram: "64 GB",
    storage: "20 GB",
    linuxPriceMonthly: 10380,
    windowsPriceMonthly: 16780,
  },
] as const;

export const CPU_MEMORY_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "cosmiccascade",
    name: "Cosmic Cascade",
    vcpus: "2",
    ram: "8 GB",
    storage: "20 GB",
    linuxPriceMonthly: 739,
    windowsPriceMonthly: 1739,
  },
  {
    id: "turbonebula",
    name: "Turbo Nebula",
    vcpus: "2",
    ram: "32 GB",
    storage: "20 GB",
    linuxPriceMonthly: 939,
    windowsPriceMonthly: 3600,
  },
  {
    id: "infinityignition",
    name: "Infinity Ignition",
    vcpus: "8",
    ram: "32 GB",
    storage: "20 GB",
    linuxPriceMonthly: 1900,
    windowsPriceMonthly: 6260,
  },
  {
    id: "titanthunder",
    name: "Titan Thunder",
    vcpus: "16",
    ram: "64 GB",
    storage: "20 GB",
    linuxPriceMonthly: 1420,
    windowsPriceMonthly: 10380,
  },
] as const;

export const CPU_PRICING_ROWS_BY_INSTANCE_TYPE: Record<
  CpuInstanceTypeId,
  readonly CpuPricingRow[]
> = {
  "general-purpose": CPU_GENERAL_PURPOSE_PRICING_ROWS,
  "cpu-optimized": CPU_OPTIMIZED_PRICING_ROWS,
  "memory-optimized": CPU_MEMORY_OPTIMIZED_PRICING_ROWS,
};

export const CPU_INSTANCE_TYPE_CONFIG: Record<
  CpuInstanceTypeId,
  CpuInstanceTypeConfig
> = {
  "general-purpose": {
    title: "general purpose instances",
    subtitle: "// Balanced vCPU : 2c/2GB to 32c/128GB",
  },
  "cpu-optimized": {
    title: "cpu optimized instances",
    subtitle: "// High vCPU density : 16c/32GB to 32c/64GB",
  },
  "memory-optimized": {
    title: "memory optimized instances",
    subtitle: "// High RAM per vCPU : 2c/8GB to 16c/64GB",
  },
};

export const CPU_STORAGE_VOLUME_OPTIONS: readonly CpuStorageVolumeOption[] = [
  {
    id: "ssd",
    label: "SSD Storage",
    description: "Standard Speed",
    pricePerGb: 2,
  },
  {
    id: "nvme",
    label: "NVMe Ultra",
    description: "Extreme Performance",
    pricePerGb: 5,
  },
] as const;
