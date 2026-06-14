import type { CategoryFeatureItem } from "@/shared/components/category-feature-card";
import {
  FlaskConical,
  FlagTriangleRight,
  Landmark,
  Star,
  Trophy,
  Microscope,
  ChessPawn,
} from "@/shared/icons/lucide-icon-map";
import { Users } from "lucide-react";

export const CONTRIBUTE_CATEGORIES: readonly CategoryFeatureItem[] = [
  {
    icon: "/icons/spark.svg",
    badgeLabel: "pillar 01 - access",
    title: "Democratizing AI Access",
    description:
      "NeevCloud makes AI accessible beyond large enterprises by offering transparent, affordable GPU infrastructure so public institutions, universities, and social organizations can build and deploy AI within real-world budgets.",
    features: [
      {
        id: 1,
        title: "70% lower than foreign cloud",
        description: "Transparent INR pricing, no hidden fees",
        icon: "/icons/money-bag.svg",
      },
      {
        id: 2,
        title: "Public sector pricing",
        description: "Special rates for government and education",
        lucideIcon: Landmark,
      },
      {
        id: 3,
        title: "No scale minimum",
        description: "Start small, pay per second, scale instantly",
        lucideIcon: Users,
      },
    ],
  },
  {
    icon: "/icons/brain.svg",
    badgeLabel: "Pillar 02 · Capability",
    title: "Building Indigenous Capabilities",
    description:
      "India's AI future needs infrastructure it controls. NeevCloud offers nationally rooted, India-operated platforms that help public sector teams build on Indian infrastructure without relying on foreign-controlled systems.",
    features: [
      {
        id: 1,
        title: "100% Indian operations",
        description: "Operated entirely by Indian teams",
        lucideIcon: FlagTriangleRight,
      },
      {
        id: 2,
        title: "No foreign cloud dependency",
        description: "No AWS, GCP, Azure in the stack",
        lucideIcon: Star,
      },
      {
        id: 3,
        title: "Architectural sovereignty",
        description: "Data stays in India by design, not promise",
        lucideIcon: Trophy,
      },
    ],
  },
  {
    icon: "/icons/person.svg",
    badgeLabel: "Pillar 03 · Innovation",
    title: "Enabling Innovation Across Sectors",
    description:
      "NeevCloud supports public sector AI across agriculture, healthcare, education, smart cities, and governance by providing accessible infrastructure so impact is driven by ideas, not infrastructure limits.",
    features: [
      {
        id: 1,
        title: "AgriAI on Indian GPU",
        description: "Crop prediction, irrigation optimization",
        icon: "/icons/agri.svg",
      },
      {
        id: 2,
        title: "HealthAI infrastructure",
        description: "Diagnostics, drug discovery, clinical AI",
        icon: "/icons/health.svg",
      },
      {
        id: 3,
        title: "Smart city compute",
        description: "Traffic, urban planning, civic AI models",
        icon: "/icons/smart-city.svg",
      },
    ],
  },
  {
    lucideIcon: Microscope,
    badgeLabel: "Pillar 04 · Research",
    title: "Research & Skill Development",
    description:
      "NeevCloud enables AI research and talent development by giving universities, researchers, and training programs in India access to GPU compute without relying on costly foreign clouds.",
    features: [
      {
        id: 1,
        title: "Academic GPU access",
        description: "IITs, IISc, national research labs",
        lucideIcon: FlaskConical,
      },
      {
        id: 2,
        title: "Skill development programs",
        description: "AI training with real GPU compute",
        lucideIcon: ChessPawn,
      },
      {
        id: 3,
        title: "Research grants",
        description: "Subsidized access for approved research projects",
        icon: "/icons/research.svg",
      },
    ],
  },
] as const;
