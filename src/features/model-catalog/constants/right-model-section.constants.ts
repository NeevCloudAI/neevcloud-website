import type { RightModelTableHeader } from "../types/right-model-section.types";

export const RIGHT_MODEL_TABLE_HEADERS: readonly RightModelTableHeader[] = [
  { id: "model", name: "model" },
  { id: "provider", name: "provider" },
  { id: "size", name: "size" },
  { id: "context", name: "context" },
  { id: "input", name: "input price*" },
  { id: "output", name: "output price*" },
  { id: "actions", name: "actions" },
] as const;

export const RIGHT_MODEL_TABLE_CELL_CLASS =
  "px-3 py-2.5 text-left align-middle whitespace-nowrap first:pl-0 last:pr-0";

export const MODEL_PRICING_SKU_COUNT = 8;
