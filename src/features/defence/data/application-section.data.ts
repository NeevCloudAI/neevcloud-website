import type { ApplicationCardItem } from "@/shared/types/application-card.types";

export const DEFENCE_APPLICATION_CARDS: readonly ApplicationCardItem[] = [
  {
    id: "intelligence-surveillance",
    className: "md:row-span-2",
    label: "01 - FEATURED",
    title: "Intelligence and Surveillance",
    description:
      "GPU infrastructure for processing reconnaissance data, satellite imagery analysis, signals intelligence, and pattern recognition.",
    icon: "/icons/intelligence-surveillance.svg",
    image: "/images/defence-intelligence-surveillance.png",
    theme: "gray",
    imageSpacing: true,
  },
  {
    id: "autonomous-systems",
    className: "md:col-span-1",
    label: "02",
    title: "Autonomous Systems",
    description:
      "Compute infrastructure for training and deploying AI models powering autonomous platforms, navigation systems, and decision support tools.",
    icon: "/icons/autonomous-systems.svg",
    theme: "gray",
  },
  {
    id: "secure-communications",
    className: "md:col-span-1",
    label: "03",
    title: "Secure Communications",
    description:
      "Infrastructure supporting encrypted communication systems, secure data transmission, and protected information processing.",
    icon: "/icons/secure-communications.svg",
    theme: "gray",
  },
  {
    id: "cyber-defence",
    className: "md:col-span-1",
    label: "04",
    title: "Cyber Defence",
    description:
      "AI-powered threat detection, intrusion analysis, and cybersecurity applications running on isolated, sovereign infrastructure.",
    icon: "/icons/cyber-defence.svg",
    theme: "gray",
  },
  {
    id: "research-development",
    className: "md:col-span-1",
    label: "05",
    title: "Research and Development",
    description:
      "Sovereign compute resources for defence research institutions developing indigenous AI capabilities and strategic technologies.",
    icon: "/icons/research-development.svg",
    theme: "gray",
  },
] as const;
