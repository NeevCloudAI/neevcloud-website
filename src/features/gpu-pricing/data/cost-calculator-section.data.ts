import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type {
  GpuCostCalculatorCommitment,
  GpuCostCalculatorGpuType,
  GpuCostCalculatorPreset,
} from "../types/cost-calculator-section.types";

export const GPU_COST_CALCULATOR_SECTION = {
  badgeText: "Cost calculator",
  titlePrefix: "Estimate your",
  titleHighlight: "GPU costs.",
  description:
    "Interactive estimate based on your configuration, usage, and commitment level. Updates in real time.",
  configureLabel: "CONFIGURE",
  configureTitle: "Build your estimate",
  configureSubtitle: "Adjust any field - your monthly cost updates instantly.",
  gpuTypeLabel: "GPU TYPE",
  usageLabel: "USAGE - HOURS / MONTH",
  commitmentLabel: "COMMITMENT",
  summaryLiveLabel: "live · updates as you tweak",
  summaryTitle: "ESTIMATED MONTHLY COST",
  deployCta: "Deploy this config →",
  deployCtaRoute: EXTERNAL_LINKS.deployGpu,
  contactCta: "Contact sales",
  contactCtaRoute: "/contact-neevcloud",
} as const;

export const GPU_COST_CALCULATOR_GPU_TYPES: readonly GpuCostCalculatorGpuType[] =
  [
    { id: "1x-h100", label: "1x H100", ratePerHour: 179.1 },
    { id: "2x-h100", label: "2x H100", ratePerHour: 358.2 },
    {
      id: "4x-h100",
      label: "4x H100",
      ratePerHour: 716.4,
      badge: "+79.5%",
    },
    { id: "8x-a100", label: "8x A100", ratePerHour: 468.5 },
    { id: "5x-l40s", label: "5x L40s", ratePerHour: 465.5 },
    {
      id: "6x-l40s",
      label: "6x L40s",
      ratePerHour: 558.0,
      badge: "+20%",
    },
  ] as const;

export const GPU_COST_CALCULATOR_COMMITMENTS: readonly GpuCostCalculatorCommitment[] =
  [
    { id: "on-demand", label: "On-demand", discountPercent: 0 },
    { id: "1-month", label: "1 month", discountPercent: 6 },
    { id: "3-months", label: "3 months", discountPercent: 13 },
    { id: "12-months", label: "12 months", discountPercent: 20 },
  ] as const;

export const GPU_COST_CALCULATOR_PRESETS: readonly GpuCostCalculatorPreset[] = [
  {
    id: "dev",
    title: "DEV",
    subtitle: "Development",
    gpuTypeId: "1x-h100",
    hoursPerMonth: 240,
    commitmentId: "on-demand",
  },
  {
    id: "inference",
    title: "INFERENCE",
    subtitle: "Production inference",
    gpuTypeId: "2x-h100",
    hoursPerMonth: 450,
    commitmentId: "on-demand",
  },
  {
    id: "training",
    title: "TRAINING · 50H",
    subtitle: "Training project",
    gpuTypeId: "4x-h100",
    hoursPerMonth: 200,
    commitmentId: "3-months",
  },
  {
    id: "full-time",
    title: "FULL-TIME",
    subtitle: "Full-time training",
    gpuTypeId: "8x-a100",
    hoursPerMonth: 730,
    commitmentId: "12-months",
  },
] as const;

export const GPU_COST_CALCULATOR_GPU_TYPE_BY_ID = Object.fromEntries(
  GPU_COST_CALCULATOR_GPU_TYPES.map((gpuType) => [gpuType.id, gpuType]),
) as Record<GpuCostCalculatorGpuType["id"], GpuCostCalculatorGpuType>;

export const GPU_COST_CALCULATOR_COMMITMENT_BY_ID = Object.fromEntries(
  GPU_COST_CALCULATOR_COMMITMENTS.map((commitment) => [
    commitment.id,
    commitment,
  ]),
) as Record<GpuCostCalculatorCommitment["id"], GpuCostCalculatorCommitment>;
