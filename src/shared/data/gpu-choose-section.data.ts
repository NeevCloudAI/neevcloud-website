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
      hourly: "₹127",
      threeMonthPrice: "₹120",
      threeMonthSavings: "save upto 2%",
      sixMonthCommitment: "₹115",
      sixMonthSavings: "save upto 7%",
      oneYearCommitment: "₹110",
      oneYearSavings: "save upto 12%",
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
      hourly: "₹59",
      threeMonthPrice: "₹57",
      threeMonthSavings: "save upto 2%",
      sixMonthCommitment: "₹54",
      sixMonthSavings: "save upto 7%",
      oneYearCommitment: "₹50",
      oneYearSavings: "save upto 12%",
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

export const NVIDIA_H200_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "H200 Configuration",
  description:
    "Fully-integrated pricing optimized for the most challenging AI workloads in budget.",
  terminalTitle: "~ nvidia-h200-pricing - bash - 80x24",
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
      id: "nvidia-h200-global",
      sku: "Nvidia H200",
      skuSubtitle: "(Location - Global)",
      hourly: "₹240",
      threeMonthPrice: "₹230",
      threeMonthSavings: "save upto 2%",
      sixMonthCommitment: "₹216",
      sixMonthSavings: "save upto 7%",
      oneYearCommitment: "₹204",
      oneYearSavings: "save upto 12%",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia H200 pricing terminal",
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
      hourly: "₹211",
      threeMonthPrice: "₹201",
      threeMonthSavings: "save upto 2%",
      sixMonthCommitment: "₹190",
      sixMonthSavings: "save upto 7%",
      oneYearCommitment: "₹180",
      oneYearSavings: "save upto 12%",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia H100 pricing terminal",
};

export const NVIDIA_RTX_3090_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "RTX 3090 Configuration",
  description:
    "Fully-integrated pricing optimized for the most challenging AI workloads in budget.",
  terminalTitle: "~ nvidia-rtx-3090-pricing - bash - 80x24",
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
      id: "nvidia-rtx-3090",
      sku: "Nvidia RTX 3090",
      skuSubtitle: "1x GPU, 48vCPUs, 128GB RAM, 24GB vRAM",
      hourly: "₹48.60",
      threeMonthPrice: "₹48.60",
      threeMonthSavings: "save upto 2%",
      sixMonthCommitment: "Based upon availability",
      oneYearCommitment: "Based upon availability",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia RTX 3090 pricing terminal",
};

export const NVIDIA_RTX_5090_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "RTX 5090 Configuration",
  description:
    "Fully-integrated pricing optimized for the most challenging AI workloads in budget.",
  terminalTitle: "~ nvidia-rtx-5090-pricing - bash - 80x24",
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
      id: "nvidia-rtx-5090",
      sku: "Nvidia RTX 5090",
      skuSubtitle: "1x GPU, 16vCPUs, 96GB RAM, 32GB vRAM",
      hourly: "₹48.60",
      threeMonthPrice: "₹48.60",
      threeMonthSavings: "save upto 2%",
      sixMonthCommitment: "Based upon availability",
      oneYearCommitment: "Based upon availability",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia RTX 5090 pricing terminal",
};

export const NVIDIA_A6000_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "RTX A6000 Configuration",
  description:
    "Fully-integrated pricing optimized for the most challenging AI workloads in budget.",
  terminalTitle: "~ nvidia-rtx-a6000-pricing - bash - 80x24",
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
      id: "nvidia-a6000",
      sku: "Nvidia RTX A6000",
      skuSubtitle: "1x GPU, 16vCPUs, 96GB RAM, 32GB vRAM",
      hourly: "₹48.60",
      threeMonthPrice: "₹48.60",
      threeMonthSavings: "save upto 2%",
      sixMonthCommitment: "Based upon availability",
      oneYearCommitment: "Based upon availability",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia RTX A6000 pricing terminal",
};

export const NVIDIA_A6000_SE_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "Nvidia RTX PRO 6000 SE Configuration",
  description:
    "Fully-integrated pricing optimized for the most challenging AI workloads in budget.",
  terminalTitle: "~ nvidia-rtx-pro-6000se-pricing - bash - 80x24",
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
      id: "nvidia-a6000se",
      sku: "Nvidia RTX Pro 6000 SE",
      skuSubtitle: "1x GPU, 64 vCPUs, 90GB vRAM, 112GB RAM",
      hourly: "₹48.60",
      threeMonthPrice: "₹48.60",
      threeMonthSavings: "save upto 2%",
      sixMonthCommitment: "Based upon availability",
      oneYearCommitment: "Based upon availability",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia RTX PRO 6000 SE pricing terminal",
};

export const NVIDIA_TESLA_T4_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "Nvidia Tesla T4 Configuration",
  description:
    "Fully-integrated pricing optimized for the most challenging AI workloads in budget.",
  terminalTitle: "~ nvidia-tesla-t4-pricing - bash - 80x24",
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
      id: "nvidia-teslat4",
      sku: "Nvidia Tesla T4",
      skuSubtitle: "1x GPU, 12vCPUs, 128GB RAM, 16GB vRAM",
      hourly: "₹48.60",
      threeMonthPrice: "₹48.60",
      threeMonthSavings: "save upto 2%",
      sixMonthCommitment: "Based upon availability",
      oneYearCommitment: "Based upon availability",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia Tesla T4 pricing terminal",
};

export const NVIDIA_NVL72_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "Nvidia GB200 NVL72 Configuration",
  description:
    "Fully-integrated pricing optimized for the most challenging AI workloads in budget.",
  terminalTitle: "~ nvidia-gb200-nvl72-pricing - bash - 80x24",
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
      id: "nvidia-nvl72",
      sku: "Nvidia GB200 NVL72",
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
  terminalAriaLabel: "Nvidia GB200 NVL72 pricing terminal",
};
