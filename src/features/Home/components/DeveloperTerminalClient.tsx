"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  DEVELOPER_SECTION,
  DEVELOPER_TERMINAL_TABS,
} from "../data/developer-section.data";

// Lightweight editor-style syntax colouring for the five static SDK snippets —
// a tiny tokenizer beats shipping a highlighter library for known content.
const TOKEN_RE =
  /(#[^\n]*|\/\/[^\n]*)|("[^"\n]*"|'[^'\n]*')|(--[a-z][a-z-]*)|(\b(?:from|import|let|mut|fn|func|print|println!|return|use|await|async|resource|provider|var|type|struct|new|True|False|ctx|nil)\b)|(\b\d+(?:\.\d+)?\b)|([›✓→·×])/g;

const TOKEN_CLASS = [
  "text-[#6e7c83]", // comment
  "text-[#ce9178]", // string
  "text-[#9cdcfe]", // flag / parameter
  "text-[#c586c0]", // keyword
  "text-[#b5cea8]", // number
  "text-neev-green", // prompt / status glyph
];

function highlight(code: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of code.matchAll(TOKEN_RE)) {
    const start = m.index ?? 0;
    if (start > last) out.push(code.slice(last, start));
    const groupIdx = m.slice(1).findIndex((g) => g !== undefined);
    out.push(
      <span key={start} className={TOKEN_CLASS[groupIdx]}>
        {m[0]}
      </span>,
    );
    last = start + m[0].length;
  }
  if (last < code.length) out.push(code.slice(last));
  return out;
}

// Matches Paper node 6L8-0: 932px window (#1E1E1E), header + code on a
// white/6% panel, separate tab bar with a teal active tab.
export default function DeveloperTerminalClient() {
  const [activeId, setActiveId] = useState(DEVELOPER_TERMINAL_TABS[0].id);
  const active =
    DEVELOPER_TERMINAL_TABS.find((tab) => tab.id === activeId) ??
    DEVELOPER_TERMINAL_TABS[0];

  return (
    <div className="mx-auto w-full max-w-[932px] overflow-hidden rounded-xl bg-[#1E1E1E] shadow-2xl">
      {/* body panel */}
      <div className="bg-white/[0.06]">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2" aria-hidden>
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-space-mono text-[13px] uppercase tracking-[0.1em] text-[#868686]">
            {DEVELOPER_SECTION.terminalTitle}
          </span>
        </div>

        <pre
          key={active.id}
          role="tabpanel"
          id={`sdk-panel-${active.id}`}
          aria-labelledby={`sdk-tab-${active.id}`}
          tabIndex={0}
          className="classy code-swap min-h-[340px] overflow-x-auto px-6 py-6 font-space-mono text-[14px] leading-[22px] text-white md:min-h-[370px]"
        >
          <code>{highlight(active.code)}</code>
        </pre>
      </div>

      {/* tab bar */}
      <div
        role="tablist"
        aria-label="SDK examples"
        className="grid grid-cols-5 border-t border-white/10"
      >
        {DEVELOPER_TERMINAL_TABS.map((tab, index) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`sdk-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`sdk-panel-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={cn(
                "px-1 py-3.5 text-center font-space-mono text-[11px] uppercase tracking-tight transition-colors sm:py-2 sm:px-3 sm:text-[14px] sm:tracking-[0.08em]",
                index > 0 && "border-l border-white/10",
                selected
                  ? "bg-[#00A78B29] text-[#00A78B]"
                  : "text-[#868686] hover:text-white/80",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
