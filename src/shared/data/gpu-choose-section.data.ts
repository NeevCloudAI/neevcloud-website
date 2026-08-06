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
      hourly: "₹127.68",
      threeMonthPrice: "₹120.90",
      threeMonthSavings: "save upto 5%",
      sixMonthCommitment: "₹116.07",
      sixMonthSavings: "save upto 9%",
      oneYearCommitment: "₹111.23",
      oneYearSavings: "save upto 13%",
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
      hourly: "₹77.38",
      threeMonthPrice: "₹69.64",
      threeMonthSavings: "save upto 10%",
      sixMonthCommitment: "₹65.77",
      sixMonthSavings: "save upto 15%",
      oneYearCommitment: "₹61.90",
      oneYearSavings: "save upto 20%",
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
      hourly: "₹231.17",
      threeMonthPrice: "₹192.48",
      threeMonthSavings: "save upto 17%",
      sixMonthCommitment: "₹184.74",
      sixMonthSavings: "save upto 20%",
      oneYearCommitment: "₹179.91",
      oneYearSavings: "save upto 22%",
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
      hourly: "₹192.48",
      threeMonthPrice: "₹183.77",
      threeMonthSavings: "save upto 5%",
      sixMonthCommitment: "₹175.07",
      sixMonthSavings: "save upto 9%",
      oneYearCommitment: "₹170.23",
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
      id: "nvidia-rtx-3090-24cpu",
      sku: "Nvidia RTX 3090",
      skuSubtitle: "1x GPU, 24vCPUs, 112GB RAM, 24GB vRAM",
      hourly: "₹52.23",
      threeMonthPrice: "₹49.33",
      threeMonthSavings: "save upto 6%",
      sixMonthCommitment: "₹47.39",
      sixMonthSavings: "save upto 9%",
      oneYearCommitment: "₹44.49",
      oneYearSavings: "save upto 15%",
    },
    {
      id: "nvidia-rtx-3090-48cpu",
      sku: "Nvidia RTX 3090",
      skuSubtitle: "1x GPU, 48vCPUs, 128GB RAM, 24GB vRAM",
      hourly: "₹104.46",
      threeMonthPrice: "₹99.63",
      threeMonthSavings: "save upto 5%",
      sixMonthCommitment: "₹93.82",
      sixMonthSavings: "save upto 10%",
      oneYearCommitment: "₹88.99",
      oneYearSavings: "save upto 15%",
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
      hourly: "₹94.79",
      threeMonthPrice: "₹89.95",
      threeMonthSavings: "save upto 5%",
      sixMonthCommitment: "₹85.12",
      sixMonthSavings: "save upto 10%",
      oneYearCommitment: "₹80.28",
      oneYearSavings: "save upto 15%",
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
      skuSubtitle: "1x GPU, 48vCPUs, 128GB RAM, 48GB vRAM",
      hourly: "₹81.25",
      threeMonthPrice: "₹77.38",
      threeMonthSavings: "save upto 5%",
      sixMonthCommitment: "₹73.51",
      sixMonthSavings: "save upto 10%",
      oneYearCommitment: "₹68.67",
      oneYearSavings: "save upto 15%",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia RTX A6000 pricing terminal",
};

export const NVIDIA_A6000_SE_CHOOSE_SECTION: GpuChooseSectionContent = {
  titlePrefix: "Choose Your",
  titleHighlight: "Nvidia RTX 6000 PRO Blackwell SE Configuration",
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
      sku: "Nvidia RTX 6000 PRO Blackwell SE",
      skuSubtitle: "1x GPU, 64vCPUs, 112GB RAM, 96GB vRAM",
      hourly: "₹148.95",
      threeMonthPrice: "₹142.18",
      threeMonthSavings: "save upto 5%",
      sixMonthCommitment: "₹134.45",
      sixMonthSavings: "save upto 10%",
      oneYearCommitment: "₹126.71",
      oneYearSavings: "save upto 15%",
    },
  ],
  footerComment:
    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate",
  terminalAriaLabel: "Nvidia RTX 6000 PRO Blackwell SE pricing terminal",
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
      hourly: "₹28.05",
      threeMonthPrice: "₹27.08",
      threeMonthSavings: "save upto 3%",
      sixMonthCommitment: "₹25.15",
      sixMonthSavings: "save upto 10%",
      oneYearCommitment: "₹23.21",
      oneYearSavings: "save upto 17%",
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
