import type { CodeToken } from "@/shared/types/model-builder-section.types";

/** Tokenized CLI block - matches Figma syntax colors (accent, flags, muted output, URL). */
const CLI_CODE_LINES: CodeToken[][] = [
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

export const runtimeTabCli = {
  id: "CLI" as const,
  codeLines: CLI_CODE_LINES,
};
