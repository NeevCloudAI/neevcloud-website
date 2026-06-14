import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type { MlWorkflowCategory } from "../types/ml-workflows-section.types";

export const ML_WORKFLOW_CATEGORIES: readonly MlWorkflowCategory[] = [
  {
    category: {
      icon: "/icons/test.svg",
      badgeLabel: "DATA · LIFECYCLE",
      title: "Versioning and Lifecycle",
      description:
        "Track model checkpoint versions, restore previous artifacts, and automate data lifecycle management with bucket policies.",
      features: [
        { id: 1, title: "model_v3.pt — latest checkpoint" },
        { id: 2, title: "model_v2.pt — 2 days ago" },
        { id: 3, title: "model_v1.pt — 7 days ago" },
        { id: 4, title: "Automated bucket lifecycle policies" },
      ],
    },
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
    category: {
      icon: "/icons/test.svg",
      badgeLabel: "AVAILABILITY · DR",
      title: "Multi-Region Replication",
      description:
        "Replicate datasets and models across availability zones for high availability and disaster recovery.",
      features: [
        { id: 1, title: "AZ-1 availability zone replication" },
        { id: 2, title: "AZ-2 availability zone replication" },
        { id: 3, title: "AZ-3 availability zone replication" },
        { id: 4, title: "Cross-zone disaster recovery" },
      ],
    },
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
    category: {
      icon: "/icons/test.svg",
      badgeLabel: "SECURITY · ACCESS",
      title: "Access Control",
      description:
        "Granular permissions with bucket policies, IAM integration, and pre-signed URLs for secure sharing.",
      features: [
        { id: 1, title: "training-data/ — read-write" },
        { id: 2, title: "checkpoints/ — read-only" },
        { id: 3, title: "secrets/ — deny" },
        { id: 4, title: "Granular bucket policies" },
      ],
    },
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
    category: {
      icon: "/icons/test.svg",
      badgeLabel: "SPEED · THROUGHPUT",
      title: "Performance Optimization",
      description:
        "Multipart uploads, parallel transfers, and intelligent tiering for optimal performance across workload sizes.",
      features: [
        { id: 1, title: "Multipart uploads — ~7 GB/s" },
        { id: 2, title: "Parallel transfers — ~6 GB/s" },
        { id: 3, title: "Standard uploads — ~1.2 GB/s" },
        { id: 4, title: "Intelligent tiering" },
      ],
    },
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
