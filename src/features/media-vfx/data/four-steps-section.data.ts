import type {
  Step,
  StepOneAsset,
  StepThreeBilling,
  CardRow,
} from "../types/four-steps-section.types";

export const STEPS: Step[] = [
  {
    number: "01",
    label: "Step - 01",
    title: "Upload Assets",
    heading: "High-throughput ingest",
    description1:
      "Transfer scene files, textures, and assets to high-performance NVMe storage with fast upload speeds and persistent project directories.",
    description2:
      "Multi-stream parallel transfers saturate ~40 Gbps to your project bucket. Persistent NVMe project directories survive between render sessions, no re-uploading textures each job.",
  },
  {
    number: "02",
    label: "Step - 02",
    title: "Configure Render Job",
    heading: "Composable render jobs",
    description1:
      "Select GPU type (H100, A100), number of nodes, and rendering software. Integrate with Blender, Maya, Houdini, or custom pipelines.",
    description2:
      "Compose any combination of GPU type, count, render engine, and software version. Bring your own license, or use pre-baked images for Cycles, Arnold, Mantra, Redshift, V-Ray, OctaneRender.",
  },
  {
    number: "03",
    label: "Step - 03",
    title: "Launch Rendering",
    heading: "Distributed at scale",
    description1:
      "Jobs are distributed across the GPU cluster with automatic load balancing. Monitor progress in real time with frame completion tracking.",
    description2:
      "Frames distribute across the cluster with automatic load balancing and frame-level checkpointing. If a spot node is preempted, only the in-flight frame is re-queued, never the whole job.",
  },
  {
    number: "04",
    label: "Step - 04",
    title: "Download Results",
    heading: "Zero-friction delivery",
    description1:
      "Rendered frames are available immediately. Download directly or sync to cloud storage. No egress charges within the India region.",
    description2:
      "Rendered frames stream out as they complete, you don't wait for the whole job. Zero egress within India region; integrate with Frame.io, ShotGrid, or your post pipeline.",
  },
];

export const STEP_ONE_ASSETS: StepOneAsset[] = [
  {
    name: "hero_room.blend",
    size: "4.2 GB",
    seconds: 65,
    barColor: "bg-gradient-to-r from-[#59D8A7] to-[#022C3C]",
  },
  {
    name: "textures_4k/",
    size: "12.8 GB",
    seconds: 90,
    barColor: "bg-gradient-to-r from-[#59D8A7] to-[#022C3C]",
  },
  {
    name: "rig_main.fbx",
    size: "880 MB",
    seconds: 40,
    barColor: "bg-gradient-to-r from-[#59D8A7] to-[#022C3C]",
  },
  {
    name: "audio_mix.wav",
    size: "120 MB",
    seconds: 20,
    barColor: "bg-gradient-to-r from-[#59D8A7] to-[#022C3C]",
  },
];

export const STEP_TWO_ROWS: CardRow[] = [
  {
    left: "GPU",
    right: "8X H100",
    leftColor: "gray-85",
    rightColor: "white",
  },
  {
    left: "ENGINE",
    right: "Blender · Cycles",
    leftColor: "gray-85",
    rightColor: "white",
  },
  {
    left: "SAMPLES",
    right: "4096",
    leftColor: "gray-85",
    rightColor: "white",
  },
  {
    left: "RES",
    right: "4096 × 2166",
    leftColor: "gray-85",
    rightColor: "white",
  },
  {
    left: "FRAMES",
    right: "1-240",
    leftColor: "gray-85",
    rightColor: "white",
  },
];

export const STEP_THREE_BILLING: StepThreeBilling = {
  title: "December usage · Llama 3.1 70B",
  subtitle: "Billing period · Dec 1 to Dec 31",
  rows: [
    {
      label: "Input tokens",
      sub: "14.2M @ ₹15.20 / 1M",
      value: "₹2,158.40",
      neg: false,
    },
    {
      label: "Output tokens",
      sub: "9.8M @ ₹45.60 / 1M",
      value: "₹4,468.80",
      neg: false,
    },
    {
      label: "Volume discount",
      sub: "auto-applied above 10M",
      value: "-₹1,490.16",
      neg: true,
    },
  ],
  total: "₹5,137.04",
  totalLabel: "DECEMBER TOTAL",
  totalSub: "~₹0.0002 per call · paid in INR · no surprises",
};

export const STEP_FOUR_ROWS: CardRow[] = [
  {
    icon: "✓",
    iconColor: "primary",
    left: "frame_1240.exr",
    right: "200 MB",
    leftColor: "white",
    rightColor: "gray-85",
  },
  {
    icon: "✓",
    iconColor: "primary",
    left: "frame_1241.exr",
    right: "200 MB",
    leftColor: "white",
    rightColor: "gray-85",
  },
  {
    icon: "↓ ",
    iconColor: "gray-85",
    left: "frame_1242.exr",
    right: "200 MB",
    leftColor: "white",
    rightColor: "gray-85",
  },
  {
    icon: "↓",
    iconColor: "gray-85",
    left: "frame_1243.exr",
    right: "200 MB",
    leftColor: "white",
    rightColor: "gray-85",
  },
  {
    icon: "↓ ",
    iconColor: "gray-85",
    left: "frame_1244.exr",
    right: "200 MB",
    leftColor: "white",
    rightColor: "gray-85",
  },
];
