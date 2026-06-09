import type { GpuWhyChooseNeevcloudSectionContent } from "@/shared/types/gpu-why-choose-neevcloud-section.types";
import { EXTERNAL_LINKS } from "../constants/external-links.constants";

export const GPU_WHY_CHOOSE_NEEVCLOUD_SECTION: GpuWhyChooseNeevcloudSectionContent =
  {
    whyChoose: {
      titlePrefix: "Why Choose",
      titleHighlight: "NeevCloud?",
      cards: [
        {
          id: "gpu-savings",
          title: "57% Savings on GPU Cloud",
          icon: "/icons/saving.svg",
          description:
            "Achieve up to 57% lower total cost while accelerating machine learning with AI superclusters delivering predictable pricing, long-term efficiency, and consistently higher performance than traditional GPU cloud instances.",
        },
        {
          id: "support",
          title: "24*7*365 best in class support",
          icon: "/icons/support.svg",
          description:
            "Ensure uninterrupted machine learning operations with always-on expert support delivering proactive monitoring, rapid incident response, continuous optimization, and guaranteed availability for business-critical AI infrastructure workloads.",
        },
        {
          id: "hardware-replacement",
          title: "Hardware Replacement",
          icon: "/icons/hardware.svg",
          description:
            "Protect mission-critical workloads and eliminate downtime through proactive hardware replacement programs, ensuring system reliability, data integrity, continuous availability, and predictable performance across high-density AI infrastructure.",
        },
      ],
    },
    roi: {
      titlePrefix: "",
      titleHighlight: "Maximise your ROI",
      titleSuffix: "with flexible GPU infrastructure",
      description:
        "A modern, AI-native Cloud designed for AI Workloads. Deploy, Manage and Monitor your GPU-enabled AI Cloud.",
      cards: [
        {
          id: "early-access",
          title: "Early access to latest GPU",
          icon: "/icons/access.svg",
          description:
            "Stay ahead of innovation cycles with priority access to next-generation GPUs, enabling faster experimentation, higher training throughput, improved model accuracy, and competitive advantage across demanding AI workloads.",
        },
        {
          id: "plug-and-play",
          title: "Plug and Play",
          icon: "/icons/plug-play.svg",
          description:
            "Deploy AI infrastructure rapidly with a plug-and-play architecture that simplifies provisioning, management, and operations while reducing deployment risk, accelerating time-to-value, and minimizing operational complexity from day one.",
        },
        {
          id: "infiniband",
          title: "InfiniBand for distributed training",
          icon: "/icons/infiniband.svg",
          description:
            "Power large-scale distributed training with InfiniBand networking, delivering ultra-low latency, predictable scalability, and optimized interconnect performance for synchronized GPU clusters and data-intensive workloads.",
        },
        {
          id: "instant-scalability",
          title: "Instant Scalability",
          icon: "/icons/scalability.svg",
          description:
            "Scale compute, storage, and networking instantly without re-architecting, enabling elastic expansion for training spikes, inference growth, seasonal demand, and uninterrupted performance across mission-critical AI environments.",
        },
        {
          id: "sovereignty-compliance",
          title: "Sovereignty and Compliance",
          icon: "/icons/protected.svg",
          description:
            "Maintain full data sovereignty with India-first infrastructure ensuring regulatory compliance, secure data residency, audit readiness, and enterprise governance while supporting innovation across sensitive AI workloads and regulated industries.",
        },
      ],
    },
    buttonCta: "Reserve Now",
    buttonLink: EXTERNAL_LINKS.aiSupercloudConsole,
    buttonTarget: "_blank",
  };
