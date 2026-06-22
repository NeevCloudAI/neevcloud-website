import type { ApplicationCardItem } from "@/shared/types/application-card.types";

export const BFSI_APPLICATION_CARDS: readonly ApplicationCardItem[] = [
  {
    id: "fraud-detection",
    className: "md:col-span-3 md:row-span-2",
    label: "01 - FLAGSHIP",
    title: "Fraud Detection & Prevention",
    description:
      "Real-time transaction monitoring using ML models. Detect anomalies, prevent fraud, and reduce false positives with GPU-accelerated inference.",
    icon: "/icons/brain.svg",
    image: "/images/webp/fraud-detection.webp",
  },
  {
    id: "credit-risk",
    className: "md:col-span-3",
    label: "02",
    title: "Credit Risk Modeling",
    description:
      "Train credit scoring models, assess portfolio risk, and run stress tests on GPU clusters optimized for financial ML workloads.",
    icon: "/icons/brain.svg",
  },
  {
    id: "algorithmic-trading",
    className: "md:col-span-3",
    label: "03",
    title: "Algorithmic Trading & Quant",
    description:
      "Backtesting, portfolio optimization, and high-frequency trading strategies. GPU clusters for complex quantitative models.",
    icon: "/icons/brain.svg",
  },
  {
    id: "insurance-claims",
    className: "md:col-span-2",
    label: "04",
    title: "Insurance Claims",
    description:
      "Automated claims processing, risk assessment, and underwriting using AI models.",
    icon: "/icons/brain.svg",
  },
  {
    id: "analytics-personalization",
    className: "md:col-span-2",
    label: "05 - ENTERPRISE",
    title: "Analytics & Personalization",
    description:
      "Analyze customer behavior, predict churn, deliver personalized financial products with ML-powered segmentation.",
    icon: "/icons/brain.svg",
    theme: "dark",
  },
  {
    id: "regulatory-reporting",
    className: "md:col-span-2",
    label: "06",
    title: "Regulatory Reporting",
    description:
      "Automated compliance monitoring, transaction surveillance, audit-ready infrastructure.",
    icon: "/icons/brain.svg",
  },
] as const;
