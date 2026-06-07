import type { GpuChooseSectionContent } from "@/shared/types/gpu-choose-section.types";

export const NVIDIA_A100_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "A100 Configuration",
  description:
    "Fully-integrated pricing optimized for the most challenging AI workloads in budget.",
  terminalTitle: "~ cpu-configuration - bash - 80x24",
  pricingCommand: "> --pricing --currency=INR",
  pricingComment: "// sorted by hourly rate",
  tableHeaders: [
    "sku",
    "hourly",
    "3-months commitment",
    "6-months commitment",
    "1-year commitment",
  ],
  rows: [
    {
      id: "nvidia-a100-global",
      sku: "Nvidia A100",
      skuSubtitle: "(Location - Global)",
      hourly: "₹48.60",
      threeMonthPrice: "₹48.60",
      threeMonthSavings: "save upto 2%",
      sixMonthCommitment: "Based upon availability",
      oneYearCommitment: "Based upon availability",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Transparent inference pricing terminal",
};

export const NVIDIA_A30_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "A30 Configuration",
  description:
    "Fully-integrated pricing optimized for the most challenging AI workloads in budget.",
  terminalTitle: "~ nvidia-a30-pricing - bash - 80x24",
  pricingCommand: "> --pricing --currency=INR",
  pricingComment: "// sorted by hourly rate",
  tableHeaders: [
    "sku",
    "hourly",
    "3-months commitment",
    "6-months commitment",
    "1-year commitment",
  ],
  rows: [
    {
      id: "nvidia-a30",
      sku: "Nvidia A30",
      skuSubtitle: "1x GPU, 24vCPUs, 24GB vRAM, 192GB RAM",
      hourly: "₹48.60",
      threeMonthPrice: "₹48.60",
      threeMonthSavings: "save upto 2%",
      sixMonthCommitment: "₹48.60",
      sixMonthSavings: "save upto 5%",
      oneYearCommitment: "₹48.60",
      oneYearSavings: "save upto 7%",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia A30 pricing terminal",
};

export const NVIDIA_B200_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "DGX B200 Configuration",
  description:
    "Fully-integrated pricing optimized for the most challenging AI workloads in budget.",
  terminalTitle: "~ nvidia-dgx-b200-pricing - bash - 80x24",
  pricingCommand: "> --pricing --currency=INR",
  pricingComment: "// sorted by hourly rate",
  tableHeaders: [
    "sku",
    "hourly",
    "3-months commitment",
    "6-months commitment",
    "1-year commitment",
  ],
  rows: [
    {
      id: "nvidia-b200-global",
      sku: "Nvidia B200",
      skuSubtitle: "(Location - Global)",
      hourly: "₹48.60",
      threeMonthPrice: "Based upon availability",
      sixMonthCommitment: "Based upon availability",
      oneYearCommitment: "Based upon availability",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia DGX B200 pricing terminal",
};

export const NVIDIA_B300_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "DGX B300 Configuration",
  description:
    "Fully-integrated pricing optimized for the most challenging AI workloads in budget.",
  terminalTitle: "~ nvidia-dgx-b300-pricing - bash - 80x24",
  pricingCommand: "> --pricing --currency=INR",
  pricingComment: "// sorted by hourly rate",
  tableHeaders: [
    "sku",
    "hourly",
    "3-months commitment",
    "6-months commitment",
    "1-year commitment",
  ],
  rows: [
    {
      id: "nvidia-b300-global",
      sku: "Nvidia B300",
      skuSubtitle: "(Location - Global)",
      hourly: "₹48.60",
      threeMonthPrice: "Based upon availability",
      sixMonthCommitment: "Based upon availability",
      oneYearCommitment: "Based upon availability",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia DGX B300 pricing terminal",
};

export const NVIDIA_H100_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "H100 Configuration",
  description:
    "Fully-integrated pricing optimized for the most challenging AI workloads in budget.",
  terminalTitle: "~ nvidia-h100-pricing - bash - 80x24",
  pricingCommand: "> --pricing --currency=INR",
  pricingComment: "// sorted by hourly rate",
  tableHeaders: [
    "sku",
    "hourly",
    "3-months commitment",
    "6-months commitment",
    "1-year commitment",
  ],
  rows: [
    {
      id: "nvidia-h100-global",
      sku: "Nvidia H100",
      skuSubtitle: "(Location - Global)",
      hourly: "₹48.00",
      threeMonthPrice: "₹48.00",
      threeMonthSavings: "save upto 2%",
      sixMonthCommitment: "Based upon availability",
      oneYearCommitment: "Based upon availability",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia H100 pricing terminal",
};
