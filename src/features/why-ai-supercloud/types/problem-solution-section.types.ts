export type ProblemSolutionItem = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

export type ProblemSolutionColumn = {
  label: string;
  heading: string;
  description: string;
  items: readonly ProblemSolutionItem[];
};

export type ProblemSolutionColumnTheme = "problem" | "solution";

export type ProblemSolutionColumnProps = {
  column: ProblemSolutionColumn;
  theme: ProblemSolutionColumnTheme;
};
