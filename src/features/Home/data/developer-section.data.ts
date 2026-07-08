export const DEVELOPER_SECTION = {
  titleLead: "NeevCloud Is Built",
  titleCode: "<For Developers By Developers>",
  subtitle:
    "The AI cloud built for Frontier model builders. No ticket-driven DevEx. A single CLI, typed SDKs for every runtime, and infrastructure that respects your repo structure.",
  ctaLabel: "GET STARTED",
  ctaHref: "#",
  terminalTitle: "~/MODELS/AVATAR · ZSH",
} as const;

export const DEVELOPER_FEATURES = [
  {
    title: "One Binary, Every Workflow",
    description:
      "NeevCloud handles auth, clusters, jobs, checkpoints, no context-switching between five consoles",
  },
  {
    title: "Git-Native Deployments",
    description:
      "Choose 8x, 4x, 2x or 1x GPU instances to fit a wide range of AI workloads, from POC to production.",
  },
  {
    title: "Use UI, API Or CLI",
    description:
      "Automate with the NeevCloud API to create, stop, and restart instances from your UI, CI/CD, or orchestration scripts.",
  },
];

export type DeveloperTerminalTab = {
  id: string;
  label: string;
  code: string;
};

// CLI content is taken verbatim from the design. Other-language snippets are
// illustrative — TODO: confirm the canonical SDK examples.
export const DEVELOPER_TERMINAL_TABS: DeveloperTerminalTab[] = [
  {
    id: "cli",
    label: "CLI",
    code: `› neevcloud cluster create "avatar" \\
    --gpu b200 --nodes 64 --region eu-west-2 --fabric ndr
# provisioning avatar ............ ready in 94s
# 64 × B200 · 3.2 Tb/s per node · DLC

› neevcloud job submit train.py --cluster avatar --checkpoint every=1h
✓ queued · id=job_7f1a · est 00:12:40

› neevcloud serve avatar/model.safetensors --private --autoscale 1:32
→ https://avatar.neevcloud.run · p50 23ms · p99 41ms`,
  },
  {
    id: "python",
    label: "PYTHON",
    code: `from neevcloud import Client

nc = Client()
cluster = nc.clusters.create(
    "avatar", gpu="b200", nodes=64, region="eu-west-2", fabric="ndr"
)
job = nc.jobs.submit("train.py", cluster=cluster.id, checkpoint="every=1h")
endpoint = nc.serve("avatar/model.safetensors", private=True, autoscale=(1, 32))
print(endpoint.url)  # https://avatar.neevcloud.run`,
  },
  {
    id: "go",
    label: "GO",
    code: `nc := neevcloud.New()

cluster, _ := nc.Clusters.Create(ctx, neevcloud.Cluster{
    Name: "avatar", GPU: "b200", Nodes: 64, Region: "eu-west-2",
})
job, _ := nc.Jobs.Submit(ctx, "train.py", cluster.ID, "every=1h")
ep, _ := nc.Serve(ctx, "avatar/model.safetensors", neevcloud.Autoscale(1, 32))
fmt.Println(ep.URL)`,
  },
  {
    id: "rust",
    label: "RUST",
    code: `let nc = neevcloud::Client::new();

let cluster = nc.clusters()
    .create("avatar", Gpu::B200, 64, "eu-west-2").await?;
let job = nc.jobs()
    .submit("train.py", &cluster.id, "every=1h").await?;
let ep = nc.serve("avatar/model.safetensors")
    .private().autoscale(1, 32).await?;
println!("{}", ep.url);`,
  },
  {
    id: "terraform",
    label: "TERRAFORM",
    code: `resource "neevcloud_cluster" "avatar" {
  name   = "avatar"
  gpu    = "b200"
  nodes  = 64
  region = "eu-west-2"
  fabric = "ndr"
}

resource "neevcloud_endpoint" "serve" {
  model     = "avatar/model.safetensors"
  private   = true
  autoscale = [1, 32]
}`,
  },
];
