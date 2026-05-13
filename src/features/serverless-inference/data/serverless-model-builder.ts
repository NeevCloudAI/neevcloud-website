import {
  CodeToken,
  RuntimeTab,
} from "@/shared/types/model-builder-section.types";
import {
  ModelBuilderCopy,
  ModelBuilderSectionProps,
  ModelFeature,
} from "@/shared/components/ModelBuilderSection";

const features: ModelFeature[] = [
  {
    title: "OpenAI-compatible API",
    description:
      "Drop in NeevCloud's base URL and your existing OpenAI SDK code works instantly — no rewrites needed.",
  },
  {
    title: "20+ models, one endpoint",
    description:
      "Switch between Llama, Kimi, GLM and more with a single parameter change. No re-integration required.",
  },
  {
    title: "Billed in INR, hosted in India",
    description:
      "Every inference request is processed inside India. Pay in INR with no forex surprises.",
  },
];

const copy: ModelBuilderCopy = {
  titlePrefix: "The AI cloud built for",
  titleHighlight: "Frontier",
  titleSuffix: " model builders.",
  description1:
    "No ticket-driven DevEx. A single CLI, typed SDKs for every runtime,",
  description2: "and infrastructure that respects your repo structure.",
  terminalPath: "",
};

const tabs: RuntimeTab[] = ["CLI", "Python", "Go", "Rust", "Terraform"];

const cliCodeLines: CodeToken[][] = [
  [
    { text: "from ", variant: "keyword" },
    { text: "NeevCloud", variant: "command" },
    { text: " import ", variant: "keyword" },
    { text: "NeevCloud", variant: "command" },
  ],
  [],
  [
    { text: "client", variant: "command" },
    { text: " = ", variant: "command" },
    { text: "NeevCloud", variant: "accent" },
    { text: "( ", variant: "command" },
    { text: "api_key", variant: "command" },
    { text: '="sk-neev-..."', variant: "command" },
    { text: ",", variant: "muted" },
  ],
  [
    { text: "  base_url", variant: "command" },
    { text: '="https://api.neevcloud.com/v1"', variant: "command" },
    { text: " )", variant: "muted" },
  ],
  [],
  [
    { text: "response", variant: "command" },
    { text: " = ", variant: "muted" },
    { text: "client", variant: "command" },
    { text: ".chat.completions.", variant: "command" },
    { text: "create", variant: "accent" },
    { text: "(", variant: "command" },
  ],
  [
    { text: "  model", variant: "command" },
    { text: '="', variant: "command" },
    { text: "meta-llama-3.1-70b-instruct", variant: "string" },
    { text: '",', variant: "command" },
  ],
  [
    { text: "  messages", variant: "command" },
    { text: "=[{", variant: "command" },
    { text: ' "role"', variant: "string" },
    { text: ": ", variant: "command" },
    { text: '"user"', variant: "string" },
    { text: ", ", variant: "command" },
    { text: '"content"', variant: "command" },
    { text: ": ", variant: "command" },
    { text: '"Hello"', variant: "string" },
    { text: " }],", variant: "command" },
  ],
  [
    { text: "  stream", variant: "command" },
    { text: "=", variant: "command" },
    { text: "True", variant: "accent" },
  ],
  [{ text: ")", variant: "command" }],
];

const runtimeCode = {
  Python: [
    "from neevcloud import NeevCloud",
    "",
    "client = NeevCloud(",
    '    api_key="sk-neev-...",',
    '    base_url="https://api.neevcloud.com/v1"',
    ")",
    "",
    "response = client.chat.completions.create(",
    '    model="meta-llama-3.1-70b-instruct",',
    '    messages=[{ "role": "user", "content": "Hello" }],',
    "    stream=True",
    ")",
  ],
  Go: [
    "package main",
    "",
    'import neev "github.com/neevcloud/sdk-go"',
    "",
    "func main() {",
    '  client := neev.NewClient("sk-neev-...",',
    '    neev.WithBaseURL("https://api.neevcloud.com/v1"),',
    "  )",
    "",
    "  resp, _ := client.Chat.Completions.Create(neev.ChatRequest{",
    '    Model: "meta-llama-3.1-70b-instruct",',
    '    Messages: []neev.Message{{ Role: "user", Content: "Hello" }},',
    "    Stream: true,",
    "  })",
    "}",
  ],
  Rust: [
    "use neevcloud::Client;",
    "use neevcloud::types::{ChatRequest, Message};",
    "",
    "#[tokio::main]",
    "async fn main() -> anyhow::Result<()> {",
    '    let client = Client::new("sk-neev-...")',
    '        .with_base_url("https://api.neevcloud.com/v1");',
    "",
    "    let resp = client.chat().completions().create(ChatRequest {",
    '        model: "meta-llama-3.1-70b-instruct".into(),',
    "        messages: vec![Message {",
    '            role: "user".into(),',
    '            content: "Hello".into(),',
    "        }],",
    "        stream: Some(true),",
    "    }).await?;",
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
    "  api_key  = var.neevcloud_api_key",
    '  base_url = "https://api.neevcloud.com/v1"',
    "}",
    "",
    'resource "neevcloud_inference" "llama" {',
    '  model  = "meta-llama-3.1-70b-instruct"',
    '  prompt = "Hello"',
    "  stream = true",
    "}",
  ],
};

export const SERVERLESS_MODEL_BUILDER_PROPS: ModelBuilderSectionProps = {
  copy,
  features,
  tabs,
  cliCodeLines,
  runtimeCode,
  showCopy: true,
};
