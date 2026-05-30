import { ServiceItem } from "@/shared/types/service-section.types";

export const DEFENCE_SOVEREIGN_SERVICES: readonly ServiceItem[] = [
  {
    id: "gpu-compute",
    index: "01",
    title: "GPU Compute",
    specs: "H100 · H200 · B200 · A100",
    description:
      "Single instances, multi-GPU clusters, or dedicated infrastructure with complete isolation.",
    highlight: "Complete",
    highlightSubtext: "ISOLATION",
    href: "/gpu-cluster",
  },
  {
    id: "storage",
    index: "02",
    title: "Storage",
    specs: "Encrypted · Air-gapped",
    description:
      "Encrypted persistent storage with data sovereignty. Air-gapped storage for classified information.",
    highlight: "AES-256",
    highlightSubtext: "ENCRYPTION",
    href: "/nvme",
  },
  {
    id: "network",
    index: "03",
    title: "Network",
    specs: "Isolated · InfiniBand",
    description:
      "Isolated networks, InfiniBand clusters, and air-gapped deployments. Custom network architectures.",
    highlight: "400 Gbps",
    highlightSubtext: "FABRIC",
    href: "/gpu-cluster",
  },
  {
    id: "dedicated-environments",
    index: "04",
    title: "Dedicated Environments",
    specs: "Single-tenant · Physical",
    description:
      "Single-tenant infrastructure, dedicated hardware, and physically isolated deployments.",
    highlight: "Single",
    highlightSubtext: "TENANCY",
    href: "/cpu-cluster",
  },
  {
    id: "on-site-options",
    index: "05",
    title: "On-Site Options",
    specs: "Customer facility deploy",
    description:
      "Infrastructure deployment for applications requiring physical control and site-specific security.",
    highlight: "On-Prem",
    highlightSubtext: "DEPLOY",
    href: "/public-sector",
  },
] as const;
