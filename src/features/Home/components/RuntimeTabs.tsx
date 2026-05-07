"use client";

import { Button, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import {
  CLI_CODE_LINES,
  MODEL_BUILDER_COPY,
  RUNTIME_CODE,
  RUNTIME_TABS,
} from "../constants/model-builder-section.constants";
import type {
  CodeToken,
  CodeTokenVariant,
  RuntimeTab,
} from "../types/model-builder-section.types";
import { tokenizeGenericCodeLine } from "../utils/model-builder-section.utils";

const TOKEN_CLASS: Record<CodeTokenVariant, string> = {
  accent: "text-primary",
  command: "text-white",
  flag: "text-white/60",
  muted: "text-white/45",
  url: "text-amber-200/95 underline decoration-amber-200/40 underline-offset-2",
  prompt: "text-white/50",
  string: "text-emerald-200/90",
};

function renderLineTokens(tokens: CodeToken[], lineKey: string) {
  if (tokens.length === 0) {
    return (
      <span key={lineKey} className="block min-h-[1.4em] select-none">
        {"\u00a0"}
      </span>
    );
  }
  return (
    <span key={lineKey} className="block whitespace-pre">
      {tokens.map((t, i) => (
        <span key={i} className={TOKEN_CLASS[t.variant]}>
          {t.text}
        </span>
      ))}
    </span>
  );
}

const RuntimeTabs = () => {
  const [activeTab, setActiveTab] = useState<RuntimeTab>("CLI");

  const highlightedLines = useMemo(() => {
    if (activeTab === "CLI") {
      return CLI_CODE_LINES.map((tokens, lineIdx) =>
        renderLineTokens(tokens, `cli-${lineIdx}`)
      );
    }
    const lines = RUNTIME_CODE[activeTab];
    return lines.map((line, lineIdx) =>
      renderLineTokens(tokenizeGenericCodeLine(line), `${activeTab}-${lineIdx}`)
    );
  }, [activeTab]);

  return (
    <div className="overflow-hidden">
      <div className={cn("rounded-md border border-white-10 bg-black")}>
        <div className="flex items-center justify-between border-b border-white-10 px-3 py-2">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="size-2 rounded-full bg-[#ff5f57]" />
            <span className="size-2 rounded-full bg-[#febc2e]" />
            <span className="size-2 rounded-full bg-[#28c840]" />
          </div>
          <Text as="small" textColor="white-50" className="tracking-wide ">
            {MODEL_BUILDER_COPY.terminalPath}
          </Text>
        </div>

        <pre
          id="runtime-code-panel"
          className="h-75 overflow-x-auto overflow-y-auto p-6 text-xs leading-relaxed sm:p-8 sm:text-sm "
          role="tabpanel"
          aria-labelledby={`runtime-tab-${activeTab}`}
        >
          <code className="font-space-mono">{highlightedLines}</code>
        </pre>
      </div>

      <div
        className="mt-4 flex items-stretch gap-px overflow-hidden rounded-md border border-white-10 md:mt-8 relative z-20"
        role="tablist"
        aria-label="Runtime examples"
      >
        {RUNTIME_TABS.map((item, index) => (
          <Button
            key={item}
            role="tab"
            fontFamily="spaceMono"
            aria-selected={item === activeTab}
            id={`runtime-tab-${item}`}
            aria-controls="runtime-code-panel"
            tabIndex={item === activeTab ? 0 : -1}
            onClick={() => setActiveTab(item)}
            textColor={item === activeTab ? "black" : "gray"}
            variant={item === activeTab ? "default" : "white-outline-right"}
            size="full"
            borderRadius={
              index === 0
                ? "left"
                : index === RUNTIME_TABS.length - 1
                  ? "right"
                  : "none"
            }
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RuntimeTabs;
