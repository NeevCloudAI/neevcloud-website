export type ModelFeature = {
  title: string;
  description: string;
};

export type RuntimeTab = "CLI" | "Python" | "Go" | "Rust" | "Terraform";

export type PlainRuntimeTab = Exclude<RuntimeTab, "CLI">;

export type RuntimeCodeMap = Record<PlainRuntimeTab, string[]>;

export type CodeTokenVariant =
  | "accent"
  | "command"
  | "flag"
  | "muted"
  | "url"
  | "prompt"
  | "string"
  | "keyword";

export type CodeToken = {
  text: string;
  variant: CodeTokenVariant;
};
