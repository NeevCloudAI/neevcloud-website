// ─── Benchmark Chart Card ───────────────────────────────────────────────────

export interface BenchmarkItem {
  id: string;
  label: string; // e.g. "1× A100"
  labelColor: string; // e.g. "text-white"
  subtitle: string; // e.g. "Medium · 5M polys"
  minutes: number; // render time in minutes
  highlighted?: boolean; // true for the hero/best result
  valueColor: string; // add this
  barColor: string; // add this
}

export interface PerformanceBenchmarkCardProps {
  items: BenchmarkItem[];
  footnote?: string;
  className?: string;
}

// ─── Fastest Config Card ────────────────────────────────────────────────────

export interface FastestConfigFeature {
  id: string;
  label: string; // monospaced left text, e.g. "vs A100"
  value: string; // bold right text, e.g. "22.5× faster"
}

export interface FastestConfigCardProps {
  minutesPerFrame: number;
  features: FastestConfigFeature[];
  className?: string;
}
