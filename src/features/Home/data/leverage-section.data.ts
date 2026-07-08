export const LEVERAGE_SECTION = {
  title: "From manual toil to AI-scale leverage",
  subtitle:
    "Get rid of tedious cloud cost management with automation that works in real time.",
} as const;

export type LeverageRow = {
  stat: string;
  unit: string;
  highlight: string;
  rest: string;
  neev: number;
  legacy: number;
};

export const LEVERAGE_ROWS: LeverageRow[] = [
  {
    stat: "73",
    unit: "%",
    highlight:
      "Cost Reduction - Vs. Hyperscale On-Demand. Committed Capacity Plus Idle Reclamation.",
    rest: "Your Finance Team Will Notice.",
    neev: 20,
    legacy: 90,
  },
  {
    stat: "10",
    unit: "X",
    highlight:
      "Throughput. Faster Iteration On Large Runs. Deterministic Interconnect Eliminates Straggler",
    rest: "Nodes In Distributed Training.",
    neev: 98,
    legacy: 15,
  },
  {
    stat: "30",
    unit: "%",
    highlight:
      "Low Latency. Guaranteed Reduction. Removing The Limits Of Geography And Latency To Redefine How",
    rest: "AI Is Deployed And Scaled.",
    neev: 92,
    legacy: 42,
  },
];
