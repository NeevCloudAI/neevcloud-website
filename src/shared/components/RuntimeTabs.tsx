"use client";

import { Button, Text } from "@/shared/ui-lib";
import { useMemo, useState } from "react";
import { MODEL_BUILDER_COPY } from "@/shared/constants/model-builder-section.constants";
import {
  RUNTIME_TAB_BY_ID,
  RUNTIME_TABS,
} from "@/shared/data/model-builder/runtime-tabs-data";
import type {
  CodeToken,
  CodeTokenVariant,
  RuntimeTab,
} from "@/shared/types/model-builder-section.types";

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
      <span
        key={lineKey}
        className="block min-h-[1.4em] select-none leading-[28px]"
      >
        {"\u00a0"}
      </span>
    );
  }
  return (
    <span key={lineKey} className="block whitespace-pre leading-[28px]">
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
    const { codeLines } = RUNTIME_TAB_BY_ID[activeTab];
    return codeLines.map((tokens, lineIdx) =>
      renderLineTokens(tokens, `${activeTab}-${lineIdx}`),
    );
  }, [activeTab]);

  return (
    <div className="w-full flex-2 overflow-hidden">
      <div className="rounded-lg border border-white/12 bg-white/6">
        <div className="flex items-center justify-between border-b border-white/12 p-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <Text as="small" textColor="gray-80" className="tracking-wide mr-4">
            {MODEL_BUILDER_COPY.terminalPath}
          </Text>
        </div>

        <pre
          id="runtime-code-panel"
          className="max-h-85 overflow-x-auto classy overflow-y-auto p-4 text-xs leading-relaxed md:px-10 md:py-7.5"
          role="tabpanel"
          aria-labelledby={`runtime-tab-${activeTab}`}
        >
          <code className="font-space-mono">{highlightedLines}</code>
        </pre>
      </div>

      <div
        className="mt-4 flex items-stretch gap-px overflow-hidden rounded-md border border-white/12 md:mt-8 relative z-20"
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
