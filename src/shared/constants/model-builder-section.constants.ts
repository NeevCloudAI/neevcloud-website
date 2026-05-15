import {
  CodeToken,
  ModelFeature,
  RuntimeCodeMap,
  RuntimeTab,
} from "@/shared/types/model-builder-section.types";

export const MODEL_BUILDER_FEATURES: ModelFeature[] = [
  {
    title: "One binary, every workflow",
    description:
      "NeevCloud handles auth, clusters, jobs, checkpoints, no context-switching between five consoles.",
  },
  {
    title: "Git-native deployments",
    description:
      "Choose 8x, 4x, 2x or 1x GPU instances to fit a wide range of AI workloads, from POC to production.",
  },
  {
    title: "Use UI, API or CLI",
    description:
      "Automate with the NeevCloud API to create, stop, and restart instances from your UI, CI/CD, or orchestration scripts.",
  },
];

export const MODEL_BUILDER_COPY = {
  titlePrefix: "The AI cloud built for",
  titleHighlight: "Frontier",
  titleSuffix: "model builders.",
  description:
    "No ticket-driven DevEx. A single CLI, typed SDKs for every runtime, and infrastructure that respects your repo structure.",
  terminalPath: "~/models/avatar · zsh",
} as const;

export const RUNTIME_TABS: RuntimeTab[] = [
  "CLI",
  "Python",
  "Go",
  "Rust",
  "Terraform",
];

/** Tokenized CLI block — matches Figma syntax colors (accent, flags, muted output, URL). */
export const CLI_CODE_LINES: CodeToken[][] = [
  [
    { text: "› ", variant: "prompt" },
    { text: "neevcloud", variant: "accent" },
    { text: " cluster create ", variant: "command" },
    { text: '"avatar"', variant: "command" },
    { text: " \\", variant: "flag" },
  ],
  [
    { text: "    ", variant: "command" },
    {
      text: "--gpu b200 --nodes 64 --region eu-west-2 --fabric ndr",
      variant: "flag",
    },
  ],
  [
    {
      text: "# provisioning avatar ............ ready in 94s",
      variant: "muted",
    },
  ],
  [{ text: "# 64 × B200 · 3.2 Tb/s per node · DLC", variant: "muted" }],
  [],
  [
    { text: "> ", variant: "prompt" },
    { text: "neevcloud", variant: "accent" },
    { text: " job submit ", variant: "command" },
    { text: "train.py", variant: "command" },
    { text: " --cluster ", variant: "flag" },
    { text: "avatar", variant: "command" },
    { text: " --checkpoint ", variant: "flag" },
    { text: "every=1h", variant: "command" },
  ],
  [
    { text: "✓ ", variant: "accent" },
    { text: "queued · id=job_7f1a · est 00:12:40", variant: "muted" },
  ],
  [],
  [
    { text: "> ", variant: "prompt" },
    { text: "neevcloud", variant: "accent" },
    { text: " serve ", variant: "command" },
    { text: "avatar/model.safetensors", variant: "command" },
    { text: " --private --autoscale ", variant: "flag" },
    { text: "1:32", variant: "command" },
  ],
  [
    { text: "→ ", variant: "muted" },
    { text: "https://avatar.neevcloud.run", variant: "url" },
    { text: " · p50 23ms · p99 41ms", variant: "muted" },
  ],
];

export const RUNTIME_CODE: RuntimeCodeMap = {
  Python: [
    "from neevcloud import NeevCloud",
    "",
    "client = NeevCloud(api_key=os.getenv('NEEVCLOUD_API_KEY'))",
    "",
    "cluster = client.clusters.create(",
    "    name='avatar',",
    "    gpu='b200',",
    "    nodes=64,",
    "    region='eu-west-2'",
    ")",
    "",
    "client.jobs.submit(",
    "    cluster=cluster.id,",
    "    entrypoint='train.py',",
    "    checkpoint='every=1h'",
    ")",
  ],
  Go: [
    "package main",
    "",
    'import neev "github.com/neevcloud/sdk-go"',
    "",
    "func main() {",
    '  client := neev.NewClient(neev.WithAPIKey(os.Getenv("NEEVCLOUD_API_KEY")))',
    "",
    "  cluster, _ := client.Clusters.Create(neev.ClusterRequest{",
    '    Name: "avatar", GPU: "b200", Nodes: 64, Region: "eu-west-2",',
    "  })",
    "",
    "  _, _ = client.Jobs.Submit(neev.JobRequest{",
    '    ClusterID: cluster.ID, Entrypoint: "train.py", Checkpoint: "every=1h",',
    "  })",
    "}",
  ],
  Rust: [
    "use neevcloud::client::NeevCloudClient;",
    "use neevcloud::types::{ClusterRequest, JobRequest};",
    "",
    "#[tokio::main]",
    "async fn main() -> anyhow::Result<()> {",
    "    let client = NeevCloudClient::from_env()?;",
    "",
    "    let cluster = client",
    "        .clusters()",
    "        .create(ClusterRequest {",
    '            name: "avatar".into(),',
    '            gpu: "b200".into(),',
    "            nodes: 64,",
    '            region: "eu-west-2".into(),',
    "        })",
    "        .await?;",
    "",
    "    client",
    "        .jobs()",
    "        .submit(JobRequest {",
    "            cluster_id: cluster.id,",
    '            entrypoint: "train.py".into(),',
    '            checkpoint: Some("every=1h".into()),',
    "        })",
    "        .await?;",
    "",
    "    Ok(())",
    "}",
  ],
  Terraform: [
    "terraform {",
    "  required_providers {",
    "    neevcloud = {",
    '      source  = "neevcloud/neevcloud"',
    '      version = ">= 0.1.0"',
    "    }",
    "  }",
    "}",
    "",
    'provider "neevcloud" {',
    "  api_key = var.neevcloud_api_key",
    "}",
    "",
    'resource "neevcloud_cluster" "avatar" {',
    '  name   = "avatar"',
    '  gpu    = "b200"',
    "  nodes  = 64",
    '  region = "eu-west-2"',
    "}",
    "",
    'resource "neevcloud_job" "training" {',
    "  cluster_id = neevcloud_cluster.avatar.id",
    '  entrypoint = "train.py"',
    '  checkpoint = "every=1h"',
    "}",
  ],
};
