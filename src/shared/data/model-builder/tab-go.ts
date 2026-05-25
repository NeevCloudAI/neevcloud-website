import type { CodeToken } from "@/shared/types/model-builder-section.types";

const GO_SOURCE_LINES = [
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
];

function tokenizeGoLine(line: string): CodeToken[] {
  if (line === "") {
    return [{ text: "", variant: "command" }];
  }

  const tokens: CodeToken[] = [];
  let i = 0;

  while (i < line.length) {
    const c = line[i];
    if (c === '"' || c === "'") {
      const quote = c;
      let j = i + 1;
      while (j < line.length && line[j] !== quote) {
        if (line[j] === "\\" && j + 1 < line.length) {
          j += 2;
        } else {
          j += 1;
        }
      }
      if (j < line.length) {
        j += 1;
      }
      tokens.push({ text: line.slice(i, j), variant: "string" });
      i = j;
      continue;
    }
    if (c === "/" && line[i + 1] === "/") {
      tokens.push({ text: line.slice(i), variant: "muted" });
      break;
    }

    let j = i;
    while (
      j < line.length &&
      line[j] !== '"' &&
      line[j] !== "'" &&
      !(line[j] === "/" && line[j + 1] === "/")
    ) {
      j += 1;
    }
    if (j > i) {
      tokens.push({ text: line.slice(i, j), variant: "command" });
      i = j;
    } else {
      tokens.push({ text: c, variant: "command" });
      i += 1;
    }
  }

  return tokens.length > 0 ? tokens : [{ text: line, variant: "command" }];
}

export const runtimeTabGo = {
  id: "Go" as const,
  codeLines: GO_SOURCE_LINES.map(tokenizeGoLine),
};
