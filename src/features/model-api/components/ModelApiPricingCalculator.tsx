"use client";

import { useState, useRef, useCallback } from "react";

const WORKLOAD_MIX = [
  { label: "Text", defaultPercent: 70 },
  { label: "Vision", defaultPercent: 20 },
  { label: "Audio", defaultPercent: 10 },
  { label: "Specialized", defaultPercent: 0 },
];

const PRICES = [0.0001, 0.0003, 0.0002, 0.001];
const REQUEST_STEPS = [
  10000, 100000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000,
  50000000,
];

function formatRequests(val: number) {
  if (val >= 1000000) return `${val / 1000000}M`;
  if (val >= 1000) return `${val / 1000}K`;
  return val.toString();
}

function SimpleSlider({
  value,
  max = 100,
  onChange,
  isMain = false,
}: {
  value: number;
  max?: number;
  onChange: (val: number) => void;
  isMain?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const percent = (value / max) * 100;

  // Use a ref to always have the latest onChange without re-creating event listeners
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const maxRef = useRef(max);
  maxRef.current = max;

  const getValueFromClientX = useCallback((clientX: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const ratio = Math.min(1, Math.max(0, x / rect.width));
    const newVal = Math.round(ratio * maxRef.current);
    onChangeRef.current(newVal);
  }, []); // stable — reads from refs

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      getValueFromClientX(e.clientX);

      const handleMouseMove = (ev: MouseEvent) => {
        getValueFromClientX(ev.clientX);
      };
      const handleMouseUp = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    },
    [getValueFromClientX],
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      getValueFromClientX(e.touches[0].clientX);

      const handleTouchMove = (ev: TouchEvent) => {
        ev.preventDefault();
        getValueFromClientX(ev.touches[0].clientX);
      };
      const handleTouchEnd = () => {
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      };
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    },
    [getValueFromClientX],
  );

  return (
    <div
      ref={trackRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{
        position: "relative",
        flex: 1,
        height: "20px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {/* Track background */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "3px",
          borderRadius: "9999px",
          backgroundColor: "#d1d5db",
        }}
      />
      {/* Filled track */}
      <div
        style={{
          position: "absolute",
          left: 0,
          height: "3px",
          borderRadius: "9999px",
          width: `${percent}%`,
          backgroundColor: isMain ? "#00a78b" : "#9ca3af",
        }}
      />
      {/* Thumb */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${percent}%`,
          transform: "translate(-50%, -50%)",
          width: isMain ? "20px" : "18px",
          height: isMain ? "20px" : "18px",
          borderRadius: "9999px",
          backgroundColor: isMain ? "#00a78b" : "#374151",
          boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
          flexShrink: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default function ModelApiPricingCalculator() {
  const [requestIndex, setRequestIndex] = useState(4);
  const [workload, setWorkload] = useState(
    WORKLOAD_MIX.map((w) => w.defaultPercent),
  );

  const totalRequests = REQUEST_STEPS[requestIndex];

  const categoryAmounts = workload.map((pct, i) => {
    const requests = (pct / 100) * totalRequests;
    return Math.round(requests * PRICES[i]);
  });

  const totalCost = categoryAmounts.reduce((a, b) => a + b, 0);

  // Stable handler using functional updater — no closure over `workload`
  const makeWorkloadHandler = useCallback(
    (index: number) => (val: number) => {
      setWorkload((prev) => {
        const next = [...prev];
        next[index] = val;
        return next;
      });
    },
    [],
  );

  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        background:
          "linear-gradient(135deg, #e8f8f5 0%, #f0faf8 60%, #e6f4f1 100%)",
        borderRadius: "12px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "4px",
          }}
        >
          <span
            style={{ fontSize: "12px", color: "#6b7280", marginBottom: "3px" }}
          >
            live estimate
          </span>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#111827",
              lineHeight: 1.1,
            }}
          >
            Monthly cost
          </span>
        </div>
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontSize: "48px",
              fontWeight: "800",
              color: "#111827",
              lineHeight: 1,
            }}
          >
            ₹{totalCost}
          </div>
          <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "2px" }}>
            / month at current mix
          </div>
        </div>
      </div>

      <div
        style={{
          height: "1px",
          backgroundColor: "#d1d5db",
          marginBottom: "20px",
        }}
      />

      {/* Total requests slider */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "13px", color: "#6b7280" }}>
            Total monthly requests
          </span>
          <span
            style={{ fontSize: "15px", fontWeight: "700", color: "#111827" }}
          >
            {formatRequests(totalRequests)}
          </span>
        </div>
        {/* setRequestIndex from useState is already a stable reference */}
        <SimpleSlider
          value={requestIndex}
          max={REQUEST_STEPS.length - 1}
          onChange={setRequestIndex}
          isMain={true}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {["10K", "100K", "1M", "10M", "50M"].map((label) => (
            <span key={label} style={{ fontSize: "11px", color: "#9ca3af" }}>
              {label}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          height: "1px",
          backgroundColor: "#d1d5db",
          marginBottom: "18px",
        }}
      />

      {/* Workload mix */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <span style={{ fontSize: "13px", color: "#6b7280" }}>
            Workload mix
          </span>
          <span style={{ fontSize: "12px", color: "#9ca3af" }}>
            % of {formatRequests(totalRequests)} requests
          </span>
        </div>

        {WORKLOAD_MIX.map((item, i) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: i < WORKLOAD_MIX.length - 1 ? "16px" : "0",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                color: "#111827",
                width: "76px",
                flexShrink: 0,
              }}
            >
              {item.label}
            </span>
            <SimpleSlider
              value={workload[i]}
              max={100}
              onChange={makeWorkloadHandler(i)}
              isMain={false}
            />
            <span
              style={{
                fontSize: "12px",
                color: "#6b7280",
                width: "34px",
                textAlign: "right",
                flexShrink: 0,
              }}
            >
              {workload[i]}%
            </span>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#111827",
                width: "44px",
                textAlign: "right",
                flexShrink: 0,
              }}
            >
              ₹{categoryAmounts[i]}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "24px",
        }}
      >
        <button
          style={{
            backgroundColor: "#00a78b",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 22px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            letterSpacing: "0.01em",
            whiteSpace: "nowrap",
          }}
        >
          Start with 10,000 free requests
        </button>
      </div>
    </div>
  );
}
