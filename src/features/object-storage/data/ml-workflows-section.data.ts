import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type { MlWorkflowCardData } from "../types/ml-workflows-section.types";

export const ML_WORKFLOW_CARDS: readonly MlWorkflowCardData[] = [
  {
    id: 1,
    variant: "versioning",
    title: "Versioning and Lifecycle",
    description:
      "Track model checkpoint versions, restore previous artifacts, and automate data lifecycle management with bucket policies.",
    linkLabel: "+ Explore Features",
    linkHref: EXTERNAL_LINKS.storage,
    linkTarget: "_blank",
    hover: {
      label: "VERSION CONTROL",
      tasks: [
        { id: 1, title: "Object versioning for checkpoints" },
        { id: 2, title: "Restore previous versions" },
        { id: 3, title: "Lifecycle policies for cost optimization" },
        { id: 4, title: "Automatic tiering and deletion" },
      ],
      ctaLabel: "Explore Object Storage",
      ctaHref: EXTERNAL_LINKS.storage,
      ctaTarget: "_blank",
    },
  },
  {
    id: 2,
    variant: "replication",
    title: "Multi-Region Replication",
    description:
      "Replicate datasets and models across availability zones for high availability and disaster recovery.",
    linkLabel: "+ Explore Features",
    linkHref: EXTERNAL_LINKS.storage,
    linkTarget: "_blank",
    hover: {
      label: "REPLICATION FEATURES",
      tasks: [
        { id: 1, title: "Cross-AZ replication" },
        { id: 2, title: "Automatic synchronization" },
        { id: 3, title: "Disaster recovery support" },
        { id: 4, title: "Geographic redundancy" },
      ],
      ctaLabel: "Explore Object Storage",
      ctaHref: EXTERNAL_LINKS.storage,
      ctaTarget: "_blank",
    },
  },
  {
    id: 3,
    variant: "access-control",
    title: "Access Control",
    description:
      "Granular permissions with bucket policies, IAM integration, and pre-signed URLs for secure sharing.",
    linkLabel: "+ Explore Features",
    linkHref: EXTERNAL_LINKS.storage,
    linkTarget: "_blank",
    hover: {
      label: "SECURITY CONTROLS",
      tasks: [
        { id: 1, title: "Bucket-level policies" },
        { id: 2, title: "Object-level permissions" },
        { id: 3, title: "Pre-signed URL generation" },
        { id: 4, title: "IAM role integration" },
      ],
      ctaLabel: "Explore Object Storage",
      ctaHref: EXTERNAL_LINKS.storage,
      ctaTarget: "_blank",
    },
  },
  {
    id: 4,
    variant: "performance",
    title: "Performance Optimization",
    description:
      "Multipart uploads, parallel transfers, and intelligent tiering for optimal performance across workload sizes.",
    linkLabel: "+ Explore Features",
    linkHref: EXTERNAL_LINKS.storage,
    linkTarget: "_blank",
    hover: {
      label: "PERFORMANCE FEATURES",
      tasks: [
        { id: 1, title: "Multipart upload support" },
        { id: 2, title: "Parallel transfer acceleration" },
        { id: 3, title: "Automatic tiering" },
        { id: 4, title: "Edge caching (future)" },
      ],
      ctaLabel: "Explore Object Storage",
      ctaHref: EXTERNAL_LINKS.storage,
      ctaTarget: "_blank",
    },
  },
] as const;
