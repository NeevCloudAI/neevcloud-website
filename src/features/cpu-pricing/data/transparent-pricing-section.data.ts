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
    linuxPriceMonthly: 699,
    windowsPriceMonthly: 1099,
  },
  {
    id: "nanoboost",
    name: "NanoBoost",
    vcpus: "2",
    ram: "4 GB",
    storage: "20 GB",
    linuxPriceMonthly: 899,
    windowsPriceMonthly: 1299,
  },
  {
    id: "stellarsurge",
    name: "StellarSurge",
    vcpus: "4",
    ram: "16 GB",
    storage: "20 GB",
    linuxPriceMonthly: 1860,
    windowsPriceMonthly: 2660,
  },
  {
    id: "megafuse",
    name: "MegaFuse",
    vcpus: "4",
    ram: "8 GB",
    storage: "20 GB",
    linuxPriceMonthly: 1380,
    windowsPriceMonthly: 2180,
  },
  {
    id: "velocityvortex",
    name: "VelocityVortex",
    vcpus: "8",
    ram: "16 GB",
    storage: "20 GB",
    linuxPriceMonthly: 2660,
    windowsPriceMonthly: 4260,
  },
] as const;

export const CPU_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "hypernova",
    name: "Hypernova",
    vcpus: "16",
    ram: "32 GB",
    storage: "20 GB",
    linuxPriceMonthly: 5220,
    windowsPriceMonthly: 8420,
  },
  {
    id: "nebulanucleus",
    name: "Nebula Nucleus",
    vcpus: "32",
    ram: "64 GB",
    storage: "20 GB",
    linuxPriceMonthly: 10340,
    windowsPriceMonthly: 16740,
  },
] as const;

export const CPU_MEMORY_OPTIMIZED_PRICING_ROWS: readonly CpuPricingRow[] = [
  {
    id: "cosmiccascade",
    name: "Cosmic Cascade",
    vcpus: "2",
    ram: "8 GB",
    storage: "20 GB",
    linuxPriceMonthly: 1299,
    windowsPriceMonthly: 1699,
  },
  {
    id: "turbonebula",
    name: "Turbo Nebula",
    vcpus: "2",
    ram: "32 GB",
    storage: "20 GB",
    linuxPriceMonthly: 2820,
    windowsPriceMonthly: 3620,
  },
  {
    id: "infinityignition",
    name: "Infinity Ignition",
    vcpus: "8",
    ram: "32 GB",
    storage: "20 GB",
    linuxPriceMonthly: 3620,
    windowsPriceMonthly: 5220,
  },
  {
    id: "titanthunder",
    name: "Titan Thunder",
    vcpus: "16",
    ram: "64 GB",
    storage: "20 GB",
    linuxPriceMonthly: 7140,
    windowsPriceMonthly: 10340,
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
