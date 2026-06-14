import { CloudStorageCardData } from "../types/cloud-storage-section.types";

export const CLOUD_STORAGE_CARDS: readonly CloudStorageCardData[] = [
  {
    id: "full-s3-api-compatibility",
    iconSrc: "/icons/s3.svg",
    title: "Full S3 API Compatibility",
    description:
      "Use boto3, s3cmd, rclone, or any S3 SDK out of the box. No code changes, no API rewrites, no migration friction.",
    features: [
      { text: "AWS CLI and SDKs (boto3, aws-sdk)" },
      { text: "Data tools (rclone, s3cmd, MinIO client)" },
      { text: "ML frameworks (PyTorch, TensorFlow, Hugging Face)" },
      { text: "Orchestration (Airflow, Prefect, Kubeflow)" },
    ],
  },
  {
    id: "mlops-ready-storage",
    iconSrc: "/icons/mlops.svg",
    title: "MLOps-Ready Storage",
    description:
      "Purpose-built for ML workflows. Store training datasets, model checkpoints, artifacts, and pipeline outputs with persistence across instance lifecycles.",
    features: [
      { text: "Training dataset storage" },
      { text: "Model checkpoint versioning" },
      { text: "Experiment artifact tracking" },
      { text: "Pipeline output persistence" },
    ],
  },
  {
    id: "compute-independent-persistence",
    iconSrc: "/icons/compute.svg",
    title: "Compute-Independent Persistence",
    description:
      "Data persists when GPU instances are stopped or terminated. Access from any instance, share across teams, and maintain data availability.",
    features: [
      { text: "Survives instance termination" },
      { text: "Accessible from multiple instances" },
      { text: "Team collaboration support" },
      { text: "Long-term artifact storage" },
    ],
  },
  {
    id: "india-resident-infrastructure",
    iconSrc: "/icons/resident.svg",
    title: "India-Resident Infrastructure",
    description:
      "Storage operates within the Indian infrastructure under Indian jurisdiction. Complete data sovereignty with regulatory compliance.",
    features: [
      { text: "Data never leaves India" },
      { text: "Indian jurisdiction only" },
      { text: "DPDP Act compliant" },
      { text: "Audit-ready infrastructure" },
    ],
  },
] as const;
