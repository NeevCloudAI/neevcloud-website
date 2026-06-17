import type { GettingStartedStep } from "../types/getting-started-section.types";

export const GETTING_STARTED_STEPS: readonly GettingStartedStep[] = [
  {
    id: "create-bucket",
    number: "01",
    sidebarLabel: "create bucket",
    title: "create a bucket",
    description:
      "create S3-compatible buckets through console, CLI, or API. Configure region, access controls, and versioning in seconds.",
    tabs: [
      {
        id: "bash",
        label: "bash",
        codeHeader: "bash · AWS CLI (S3-compatible)",
      },
      {
        id: "python",
        label: "python",
        codeHeader: "python · boto3",
      },
    ],
    nextLabel: "upload data",
  },
  {
    id: "upload-data",
    number: "02",
    sidebarLabel: "upload data",
    title: "upload training data",
    description:
      "upload training datasets, model checkpoints, and artifacts using standard S3 tools and SDKs. Multipart uploads accelerate large files.",
    tabs: [
      {
        id: "bash",
        label: "bash",
        codeHeader: "bash · AWS CLI",
      },
      {
        id: "multipart",
        label: "python - multipart",
        codeHeader: "python · boto3 multipart",
      },
    ],
    nextLabel: "GPU access",
  },
  {
    id: "access-from-gpu",
    number: "03",
    sidebarLabel: "access from GPU",
    title: "access from GPU instances",
    description:
      "mount buckets or access directly from training scripts using standard S3 libraries. PyTorch, TensorFlow, and Hugging Face all work natively.",
    tabs: [
      {
        id: "pytorch",
        label: "pytorch",
        codeHeader: "python · PyTorch + S3 backend",
      },
      {
        id: "hugging-face",
        label: "hugging face",
        codeHeader: "python · Hugging Face Datasets",
      },
    ],
    nextLabel: "lifecycle policies",
  },
  {
    id: "lifecycle-policies",
    number: "04",
    sidebarLabel: "lifecycle policies",
    title: "configure lifecycle policies",
    description:
      "automate data management with lifecycle rules for archiving, tiering, and deletion. reduce costs by moving stale checkpoints to cold storage.",
    tabs: [
      {
        id: "json-policy",
        label: "json policy",
        codeHeader: "json · lifecycle configuration",
      },
      {
        id: "python-apply",
        label: "python · apply",
        codeHeader: "python · apply via boto3",
      },
    ],
    nextLabel: "start over",
    successMessage:
      "You're all set. Bucket created, data uploaded, GPU access configured, and lifecycle policies active. Your ML pipeline is running on NeevCloud object storage.",
  },
] as const;
