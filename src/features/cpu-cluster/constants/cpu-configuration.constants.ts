import type { CpuInstanceFamilyId } from "../types/cpu-configuration.types";

export const CPU_CONFIG_TABLE_HEADERS = [
  "instance",
  "vcpu",
  "ram",
  "config",
  "on-demand",
  "1 month",
  "3 month",
  "6 month",
  "1 year",
] as const;

export const CPU_CONFIG_CELL_CLASS =
  "px-3 py-2.5 text-left align-top whitespace-nowrap first:pl-0 last:pr-0";

export const DEFAULT_CPU_INSTANCE_FAMILY: CpuInstanceFamilyId =
  "general-purpose";
