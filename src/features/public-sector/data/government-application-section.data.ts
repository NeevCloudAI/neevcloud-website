import type { ApplicationCardItem } from "@/shared/types/application-card.types";

export const GOVERNMENT_APPLICATION_CARDS: readonly ApplicationCardItem[] = [
  {
    id: "smart-cities-governance",
    className: "md:col-span-3 md:row-span-2",
    label: "01 - FLAGSHIP",
    title: "Smart Cities & Governance",
    description:
      "Traffic optimization, public safety analytics, resource allocation, and citizen service platforms powered by AI on sovereign infrastructure.",
    icon: "/icons/brain.svg",
    image: "/images/fraud-detection.png",
  },
  {
    id: "healthcare-medical-research",
    className: "md:col-span-3",
    label: "02",
    title: "Healthcare & Medical Research",
    description:
      "Medical imaging, disease prediction, drug discovery research, and public health monitoring, with data sovereignty.",
    icon: "/icons/brain.svg",
  },
  {
    id: "agriculture-rural-development",
    className: "md:col-span-3",
    label: "03",
    title: "Agriculture & Rural Development",
    description:
      "Crop yield prediction, pest detection, weather forecasting, and agricultural advisory for farmer welfare initiatives.",
    icon: "/icons/brain.svg",
  },
  {
    id: "education-skills",
    className: "md:col-span-2",
    label: "04",
    title: "Education & Skills",
    description:
      "Personalized learning, regional language translation, and skill assessment tools for universities.",
    icon: "/icons/brain.svg",
  },
  {
    id: "defense-national-security",
    className: "md:col-span-2",
    label: "05 - ISOLATED",
    title: "Defense & National Security",
    description:
      "Strategic applications requiring complete data sovereignty, indigenous infrastructure, and isolation from foreign systems.",
    icon: "/icons/brain.svg",
    theme: "dark",
  },
  {
    id: "research-innovation",
    className: "md:col-span-2",
    label: "06",
    title: "Research & Innovation",
    description:
      "Government labs, public universities, and national institutions conducting AI research independently.",
    icon: "/icons/brain.svg",
  },
] as const;
