import {
  STEP_ONE_FILTERS,
  STEP_ONE_MODELS,
  STEP_THREE_BILLING,
  STEP_TWO_CODE_LINES,
  STEP_TWO_TERMINAL_PATH,
} from "../data/three-steps-data";
import Image from "next/image";

// ─── Step 1: Model picker ─────────────────────────────────────────────────────

export function StepOnePanel() {
  return (
    <div className="bg-white rounded-xl p-4 w-full shadow-sm relative overflow-hidden">
      <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-15">
        <Image
          src="/icons/logo.svg"
          alt=""
          aria-hidden="true"
          width={170}
          height={170}
          style={{ filter: "brightness(0)" }}
        />
      </div>
      {/* Search bar */}
      <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 mb-3">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
        <span className="text-gray-400 text-sm">Search 20+ models...</span>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 mb-3 flex-wrap">
        {STEP_ONE_FILTERS.map((f) => (
          <span
            key={f}
            className={`text-xs px-3 py-1 rounded-full cursor-pointer font-medium ${
              f === "All"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Model rows */}
      <div className="flex flex-col divide-y divide-gray-100">
        {STEP_ONE_MODELS.map((m, i) => (
          <div
            key={i}
            className={`flex items-center justify-between py-3 pl-3 ${
              i === 0
                ? "border-l-3 border-l-teal-500 border-b border-b-gray-200 rounded-sm [background:linear-gradient(to_right,#e6f7f5,transparent)]"
                : "border-b border-b-gray-200"
            }`}
          >
            <div>
              <p className="text-sm font-semibold text-gray-900">{m.name}</p>
              <p className="text-xs mt-0.5">{m.meta}</p>
            </div>
            <p className="text-sm font-semibold text-teal-600 ml-4 whitespace-nowrap">
              {m.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Step 2: Code snippet ─────────────────────────────────────────────────────

export function StepTwoPanel() {
  return (
    <div className="bg-[#111] rounded-xl overflow-hidden w-full shadow-sm">
      {/* Terminal top bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-auto text-white/30 text-xs font-mono">
          {STEP_TWO_TERMINAL_PATH}
        </span>
      </div>

      {/* Code */}
      <div className="p-5 font-mono text-sm leading-7">
        {STEP_TWO_CODE_LINES.map((line, i) => {
          if (line.type === "comment")
            return (
              <div key={i} className="text-white/35">
                {line.text}
              </div>
            );

          if (line.type === "keyword")
            return (
              <div key={i}>
                {/* from / import are RED as shown in image */}
                <span className="text-red-400">{line.text}</span>
                <span className="text-white/80">{line.rest}</span>
                <span className="text-red-400">{line.keyword2}</span>
                <span className="text-white/80">{line.rest2}</span>
              </div>
            );

          if (line.type === "var")
            return (
              <div key={i}>
                <span className="text-teal-400">{line.text}</span>
                <span className="text-white/70">{line.rest}</span>
                {line.highlight && (
                  <span className="text-teal-400">{line.highlight}</span>
                )}
                <span className="text-white/70">{line.rest2}</span>
              </div>
            );

          if (line.type === "fn")
            return (
              <div key={i}>
                <span className="text-teal-400">{line.text}</span>
                <span className="text-white/70">{line.rest}</span>
              </div>
            );

          return (
            <div key={i} className="text-white/70">
              {line.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step 3: Billing summary ──────────────────────────────────────────────────

export function StepThreePanel() {
  const { title, subtitle, rows, total, totalLabel, totalSub } =
    STEP_THREE_BILLING;

  return (
    <div className="bg-white rounded-xl w-full shadow-sm  relative overflow-hidden">
      <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-15">
        <Image
          src="/icons/logo.svg"
          alt=""
          aria-hidden="true"
          width={170}
          height={170}
          style={{ filter: "brightness(0)" }}
        />
      </div>
      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-[var(--gray-60)]">
        <p className="text-base font-bold text-gray-900">{title}</p>
        <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
      </div>

      {/* Rows */}
      <div className="flex flex-col divide-y divide-gray-100 px-5 mb-5">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex items-start justify-between py-4 border-b border-[var(--gray-60)] "
          >
            <div>
              <p className="text-sm font-semibold text-gray-900">{row.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{row.sub}</p>
            </div>
            {/* Discount in teal, others in black */}
            <p
              className={`text-sm font-semibold ml-4 whitespace-nowrap ${
                row.neg ? "text-teal-600" : "text-gray-900"
              }`}
            >
              {row.value}
            </p>
          </div>
        ))}
      </div>

      {/* Total box — light teal background as in image */}
      <div className="mx-5 mb-5 bg-teal-50 border border-[#00A78A3D] rounded-lg p-4 text-center">
        <p className="text-xs font-bold tracking-widest uppercase">
          {totalLabel}
        </p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{total}</p>
        <p className="text-xs text-gray-400 mt-1">{totalSub}</p>
      </div>
    </div>
  );
}

// ─── Panel registry ───────────────────────────────────────────────────────────

export const STEP_PANELS = [
  <StepOnePanel key="step-1" />,
  <StepTwoPanel key="step-2" />,
  <StepThreePanel key="step-3" />,
];
