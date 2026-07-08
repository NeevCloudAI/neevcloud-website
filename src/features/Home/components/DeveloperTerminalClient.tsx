"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DEVELOPER_SECTION,
  DEVELOPER_TERMINAL_TABS,
} from "../data/developer-section.data";

export default function DeveloperTerminalClient() {
  const [activeId, setActiveId] = useState(DEVELOPER_TERMINAL_TABS[0].id);
  const active =
    DEVELOPER_TERMINAL_TABS.find((tab) => tab.id === activeId) ??
    DEVELOPER_TERMINAL_TABS[0];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#0c1310] shadow-2xl">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="flex items-center gap-2" aria-hidden>
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-space-mono text-[11px] tracking-[0.15em] text-white/40">
          {DEVELOPER_SECTION.terminalTitle}
        </span>
      </div>

      <pre className="classy min-h-[340px] overflow-x-auto px-5 py-5 font-space-mono text-[13px] leading-6 text-[#d7e3df] md:min-h-[420px]">
        <code>{active.code}</code>
      </pre>

      <div
        role="tablist"
        aria-label="SDK examples"
        className="grid grid-cols-5 border-t border-white/10"
      >
        {DEVELOPER_TERMINAL_TABS.map((tab) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(tab.id)}
              className={cn(
                "border-r border-white/10 px-3 py-3 text-center font-space-mono text-[12px] tracking-[0.12em] transition-colors last:border-r-0",
                selected
                  ? "bg-primary-90/15 text-neev-green"
                  : "text-white/45 hover:text-white/80",
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
