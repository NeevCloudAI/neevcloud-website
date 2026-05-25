import { runtimeTabCli } from "@/shared/data/model-builder/tab-cli";
import { runtimeTabGo } from "@/shared/data/model-builder/tab-go";
import { runtimeTabPython } from "@/shared/data/model-builder/tab-python";
import { runtimeTabRust } from "@/shared/data/model-builder/tab-rust";
import { runtimeTabTerraform } from "@/shared/data/model-builder/tab-terraform";
import type {
  CodeToken,
  RuntimeTab,
} from "@/shared/types/model-builder-section.types";

export type RuntimeTabEntry = {
  id: RuntimeTab;
  codeLines: CodeToken[][];
};

export const RUNTIME_TAB_ENTRIES: RuntimeTabEntry[] = [
  runtimeTabCli,
  runtimeTabPython,
  runtimeTabGo,
  runtimeTabRust,
  runtimeTabTerraform,
];

export const RUNTIME_TABS: RuntimeTab[] = RUNTIME_TAB_ENTRIES.map(
  (entry) => entry.id,
);

export const RUNTIME_TAB_BY_ID: Record<RuntimeTab, RuntimeTabEntry> =
  Object.fromEntries(
    RUNTIME_TAB_ENTRIES.map((entry) => [entry.id, entry]),
  ) as Record<RuntimeTab, RuntimeTabEntry>;
