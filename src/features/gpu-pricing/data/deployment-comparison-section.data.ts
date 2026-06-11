import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type {
  DeploymentComparisonColumnHeader,
  DeploymentComparisonLegendItem,
  DeploymentComparisonServiceCard,
  DeploymentComparisonTableCategory,
} from "../types/deployment-comparison-section.types";

export const DEPLOYMENT_COMPARISON_HARDWARE_NOTE =
  "Same GPU hardware, same network fabric — only the abstraction layer differs.";

export const DEPLOYMENT_COMPARISON_COLUMN_HEADERS: readonly DeploymentComparisonColumnHeader[] =
  [
    {
      id: "container-header",
      icon: "zap",
      badge: "CONTAINER",
      title: "GPU AI Service",
      subtitle: "Kubernetes-native",
      variant: "container",
    },
    {
      id: "vm-header",
      icon: "server",
      badge: "FULL OS",
      title: "GPU VM Service",
      subtitle: "Kubernetes-native",
      variant: "vm",
    },
  ] as const;

export const DEPLOYMENT_COMPARISON_SERVICE_CARDS: readonly DeploymentComparisonServiceCard[] =
  [
    {
      id: "container-service",
      icon: "zap",
      title: "GPU AI Service",
      deploymentType: "Container K8s",
      tagline: "When you want speed and elastic scale",
      bullets: [
        "ML inference & distributed training",
        "Auto-scaling workloads",
        "Seconds to first request",
      ],
      ctaHref: EXTERNAL_LINKS.aiSupercloudConsole,
      variant: "container",
    },
    {
      id: "vm-service",
      icon: "server",
      title: "GPU VM Service",
      deploymentType: "Full OS · Linux",
      tagline: "When you need root control",
      bullets: [
        "Custom CUDA driver builds",
        "Persistent dev environments",
        "Complete OS-level access",
      ],
      ctaHref: "/",
      variant: "vm",
    },
  ] as const;

export const DEPLOYMENT_COMPARISON_TABLE_CATEGORIES: readonly DeploymentComparisonTableCategory[] =
  [
    {
      id: "infrastructure",
      label: "INFRASTRUCTURE",
      rows: [
        {
          id: "management",
          icon: "layers",
          label: "Management",
          container: { text: "Kubernetes-managed pods" },
          vm: { text: "Full Linux VMs" },
        },
        {
          id: "control-level",
          icon: "lock",
          label: "Control Level",
          container: { text: "Container environment" },
          vm: {
            text: "Complete OS access",
            subtext: "Root access",
            showCheck: true,
            variant: "vm-highlight",
          },
        },
      ],
    },
    {
      id: "performance",
      label: "PERFORMANCE",
      rows: [
        {
          id: "scaling",
          icon: "trendingUp",
          label: "Scaling",
          container: {
            text: "Auto-scaling via K8s",
            subtext: "Auto-scale",
            showCheck: true,
            variant: "container-highlight",
          },
          vm: { text: "Manual VM provisioning" },
        },
        {
          id: "best-for",
          icon: "disc2",
          label: "Best for",
          container: { text: "Inference, distributed training" },
          vm: { text: "Custom configs, dev envs" },
        },
      ],
    },
    {
      id: "economics",
      label: "ECONOMICS",
      rows: [
        {
          id: "pricing",
          icon: "dollarSign",
          label: "Pricing",
          container: { text: "GPU rates + K8s plane (free)" },
          vm: { text: "Same GPU rates" },
        },
        {
          id: "setup-time",
          icon: "timer",
          label: "Setup time",
          container: {
            text: "Seconds (deploy pod)",
            subtext: "~3 sec",
            showCheck: true,
            variant: "container-highlight",
          },
          vm: { text: "Minutes (boot VM)" },
        },
      ],
    },
  ] as const;

export const DEPLOYMENT_COMPARISON_LEGEND_ITEMS: readonly DeploymentComparisonLegendItem[] =
  [
    {
      id: "container-advantage",
      label: "Container advantage",
      variant: "container",
    },
    {
      id: "vm-advantage",
      label: "Container advantage",
      variant: "vm",
    },
  ] as const;

export const DEPLOYMENT_COMPARISON_HARDWARE_LEGEND =
  "Same underlying GPU hardware";
