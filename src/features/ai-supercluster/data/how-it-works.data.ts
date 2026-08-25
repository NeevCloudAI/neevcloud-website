export type AiSuperclusterStep = {
  number: string;
  title: string;
  description: string;
  tag: string;
};

export const AI_SUPERCLUSTER_STEPS: readonly AiSuperclusterStep[] = [
  {
    number: "01",
    title: "Configure",
    description:
      "Pick GPU, nodes, fabric, storage, and duration in the live configurator above. Get instant pricing.",
    tag: "Day 0",
  },
  {
    number: "02",
    title: "Validate",
    description:
      "NeevCloud architects review your spec and confirm fit for your workload.",
    tag: "Day 1-3",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We rack, cable, burn-in, and run NCCL/MLPerf validation on your dedicated cluster.",
    tag: "Day 4-12",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Cluster handed off via VPC peering. SSH, Slurm, or Kubernetes — your call.",
    tag: "Day 13-14",
  },
] as const;
