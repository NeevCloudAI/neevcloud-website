import type { CodeToken } from "@/shared/types/model-builder-section.types";

const RUST_SOURCE_LINES = [
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
];

function tokenizeRustLine(line: string): CodeToken[] {
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

export const runtimeTabRust = {
  id: "Rust" as const,
  codeLines: RUST_SOURCE_LINES.map(tokenizeRustLine),
};
