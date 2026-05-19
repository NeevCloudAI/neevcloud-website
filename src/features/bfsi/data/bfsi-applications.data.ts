import { BFSICard } from "../types/bfsi-applications.types";

export const BFSI_CARDS: BFSICard[] = [
  {
    id: 1,
    badge: "01 – FLAGSHIP",
    icon: "/icons/ai-network.svg",
    title: "Fraud Detection & Prevention",
    description:
      "Real-time transaction monitoring using ML models. Detect anomalies, prevent fraud, and reduce false positives with GPU-accelerated inference.",
    variant: "flagship",
    imageSrc: "/images/usecases_bfsi.png",
  },
  {
    id: 2,
    badge: "02",
    icon: "/icons/brain-star.svg",
    title: "Credit Risk Modeling",
    description:
      "Train credit scoring models on large datasets. Assess portfolio risk and optimize lending decisions with predictive analytics.",
  },
  {
    id: 3,
    badge: "03",
    icon: "/icons/brain-star.svg",
    title: "Algorithmic Trading & Quant",
    description:
      "Backtesting, portfolio optimization, and high-frequency trading strategies. GPU clusters for complex quantitative models.",
  },
  {
    id: 4,
    badge: "04",
    icon: "/icons/brain-star.svg",
    title: "Insurance Claims",
    description:
      "Automated claims processing, risk assessment, and underwriting using AI models.",
  },
  {
    id: 5,
    badge: "05 – ENTERPRISE",
    icon: "/icons/brain-star.svg",
    title: "Analytics & Personalization",
    description:
      "Analyze customer behavior, predict churn, deliver personalized financial products with ML-powered segmentation.",
    variant: "enterprise",
  },
  {
    id: 6,
    badge: "06",
    icon: "/icons/brain-star.svg",
    title: "Regulatory Reporting",
    description:
      "Automated compliance monitoring, transaction surveillance, audit-ready infrastructure.",
  },
];
