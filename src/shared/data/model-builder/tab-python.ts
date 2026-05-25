import type { CodeToken } from "@/shared/types/model-builder-section.types";

const PYTHON_SOURCE_LINES = [
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
];

function tokenizePythonLine(line: string): CodeToken[] {
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
    if (c === "#") {
      tokens.push({ text: line.slice(i), variant: "muted" });
      break;
    }

    let j = i;
    while (j < line.length && line[j] !== '"' && line[j] !== "'" && line[j] !== "#") {
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

export const runtimeTabPython = {
  id: "Python" as const,
  codeLines: PYTHON_SOURCE_LINES.map(tokenizePythonLine),
};
