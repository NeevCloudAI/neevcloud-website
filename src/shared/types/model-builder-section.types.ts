export type ModelFeature = {
  title: string;
  description: string;
};

export type RuntimeTab = "CLI" | "Python" | "Go" | "Rust" | "Terraform";

export type CodeTokenVariant =
  | "accent"
  | "command"
  | "flag"
  | "muted"
  | "url"
  | "prompt"
  | "string";

export type CodeToken = {
  text: string;
  variant: CodeTokenVariant;
};
