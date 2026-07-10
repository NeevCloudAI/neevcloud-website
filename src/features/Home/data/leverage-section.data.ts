export const LEVERAGE_SECTION = {
  title: "From manual toil to AI-scale leverage",
  subtitle:
    "Get rid of tedious cloud cost management with automation that works in real time.",
} as const;

export type LeverageRow = {
  stat: string;
  unit: string;
  /** first title line — brand teal */
  titleTeal: string;
  /** second title line — black */
  titleRest: string;
  description: string;
  /** bar widths as % of the row (from Paper JUD-0 proportions) */
  neev: number;
  legacy: number;
};

// Content + bar proportions from Paper "New Stats design" (JUD-0).
export const LEVERAGE_ROWS: LeverageRow[] = [
  {
    stat: "73",
    unit: "%",
    titleTeal: "Cost Reduction",
    titleRest: "vs. hyperscale on-demand.",
    description:
      "Committed capacity plus idle reclamation. Your finance team will notice.",
    neev: 20,
    legacy: 55,
  },
  {
    stat: "10",
    unit: "X",
    titleTeal: "Throughput",
    titleRest: "Faster iteration on large runs",
    description:
      "Deterministic interconnect eliminates straggler nodes in distributed training.",
    neev: 55,
    legacy: 13,
  },
  {
    stat: "30",
    unit: "%",
    titleTeal: "Low Latency",
    titleRest: "Guaranteed Reduction",
    description:
      "Removing the limits of geography and latency to redefine how AI is deployed and scaled.",
    neev: 55,
    legacy: 26,
  },
];
