"use client";

import { Button, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import type {
  CodeToken,
  CodeTokenVariant,
  RuntimeTab,
} from "@/shared/types/model-builder-section.types";
import { tokenizeGenericCodeLine } from "../utils/model-builder-section.utils";

const TOKEN_CLASS: Record<CodeTokenVariant, string> = {
  accent: "text-primary", // teal — NeevCloud, create, True
  command: "text-white", // white — variable names
  flag: "text-white/50", // muted — operators, punctuation
  muted: "text-white/50", // muted — dots, brackets
  url: "text-primary underline decoration-primary/40 underline-offset-2",
  prompt: "text-primary",
  string: "text-teal-300", // teal strings — all quoted values
  keyword: "text-red-400", // red — from, import
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

interface RuntimeTabsProps {
  tabs: RuntimeTab[];
  cliCodeLines: CodeToken[][];
  runtimeCode: Partial<Record<Exclude<RuntimeTab, "CLI">, string[]>>;
  terminalPath: string;
  showCopy?: boolean;
}

const RuntimeTabs = ({
  tabs,
  cliCodeLines,
  runtimeCode,
  terminalPath,
  showCopy,
}: RuntimeTabsProps) => {
  const [activeTab, setActiveTab] = useState<RuntimeTab>(tabs[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text =
      activeTab === "CLI"
        ? cliCodeLines
            .map((tokens) => tokens.map((t) => t.text).join(""))
            .join("\n")
        : (runtimeCode[activeTab as Exclude<RuntimeTab, "CLI">] ?? []).join(
            "\n",
          );

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
    } else {
      const el = document.createElement("textarea");
      el.value = text;
      el.style.position = "absolute";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const highlightedLines = useMemo(() => {
    if (activeTab === "CLI") {
      return cliCodeLines.map((tokens, lineIdx) =>
        renderLineTokens(tokens, `cli-${lineIdx}`),
      );
    }
    const lines = runtimeCode[activeTab as Exclude<RuntimeTab, "CLI">] ?? [];
    return lines.map((line, lineIdx) =>
      renderLineTokens(
        tokenizeGenericCodeLine(line),
        `${activeTab}-${lineIdx}`,
      ),
    );
  }, [activeTab, cliCodeLines, runtimeCode]);

  return (
    <div className="overflow-hidden">
      <div className={cn("rounded-md border border-white-10 bg-black")}>
        {/* Terminal top bar — z-10 so scrollbar never overlaps it */}
        <div className="relative z-10 flex items-center justify-between border-b border-white-10 px-3 py-2">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="size-2 rounded-full bg-[#ff5f57]" />
            <span className="size-2 rounded-full bg-[#febc2e]" />
            <span className="size-2 rounded-full bg-[#28c840]" />
          </div>

          {/* Terminal path — home only */}
          {terminalPath && (
            <Text as="small" textColor="white-50" className="tracking-wide">
              {terminalPath}
            </Text>
          )}

          {/* Copy icon — serverless only */}
          {showCopy && (
            <button
              onClick={handleCopy}
              aria-label="Copy code"
              className={cn(
                "ml-auto transition-colors cursor-pointer",
                copied ? "text-primary" : "text-white/40 hover:text-white/80",
              )}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          )}
        </div>

        {/* Code panel — scrollbar stays inside this div */}
        <div className="relative">
          <pre
            id="runtime-code-panel"
            className="h-75 overflow-x-auto overflow-y-auto p-6 text-xs leading-relaxed sm:p-8 sm:text-sm"
            role="tabpanel"
            aria-labelledby={`runtime-tab-${activeTab}`}
          >
            <code className="font-space-mono">{highlightedLines}</code>
          </pre>
        </div>
      </div>

      {/* Tab switcher */}
      <div
        className="mt-4 flex items-stretch gap-px overflow-hidden rounded-md border border-white-10 md:mt-8 relative z-20"
        role="tablist"
        aria-label="Runtime examples"
      >
        {tabs.map((item, index) => (
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
                : index === tabs.length - 1
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
