"use client";

import { useState } from "react";

type FaqItem = {
  id: number;
  category: "Getting Started" | "Billing" | "Security";
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "How quickly can I launch a GPU instance?",
    answer:
      'Available GPUs deploy within 2–5 minutes. Select your GPU, configure storage, and launch. Instances are ready when status shows "Running."',
  },
  {
    id: 2,
    category: "Billing",
    question: "What's included in the hourly price?",
    answer:
      "GPU compute, vCPU, RAM, InfiniBand networking, DDoS protection, and pre-built ML images. Persistent storage billed separately.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Can I switch between GPUs?",
    answer:
      "Yes. Stop your current instance, launch a new one with a different GPU, and attach your persistent storage to continue work.",
  },
  {
    id: 4,
    category: "Billing",
    question: "What happens when my reserved plan ends?",
    answer:
      "Instance automatically switches to on-demand pricing. You'll receive notification 7 days before plan expiry.",
  },
  {
    id: 5,
    category: "Security",
    question: "Is data kept within India?",
    answer:
      "Yes. All infrastructure operates within India. Your data never leaves Indian data centers unless you explicitly transfer it out.",
  },
];

type Topic = "All" | "Getting Started" | "Billing" | "Security";

const topics: { label: Topic; count: number }[] = [
  { label: "All", count: faqs.length },
  {
    label: "Getting Started",
    count: faqs.filter((f) => f.category === "Getting Started").length,
  },
  {
    label: "Billing",
    count: faqs.filter((f) => f.category === "Billing").length,
  },
  {
    label: "Security",
    count: faqs.filter((f) => f.category === "Security").length,
  },
];

export default function FaqSection() {
  const [activeTopic, setActiveTopic] = useState<Topic>("All");

  const filtered =
    activeTopic === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeTopic);

  return (
    <section
      className="relative min-h-screen py-16 px-4 overflow-hidden"
      style={{ background: "#0d1117" }}
    >
      {/* Teal glow — centered behind the cards column */}
      <div
        className="pointer-events-none absolute w-[1000px] h-[700px] rounded-full"
        style={{
          top: "53%",
          left: "53%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, #0d3028 0%, #0a2218 45%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="relative text-center mb-12">
        <h2 className="text-white font-semibold text-4xl">
          Frequently asked{" "}
          <span className="text-primary text-4xl font-semibold">Question</span>
        </h2>
        <p className="mt-2 text-base text-[#9aa4aa]">
          Everything you need to know before launching.
        </p>
      </div>

      {/* Layout */}
      <div className="relative max-w-360 mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="md:w-90 shrink-0">
          <p className="text-xl tracking-widest text-[#00A78A] uppercase mb-3 px-1">
            Topics
          </p>
          <ul className="flex flex-col gap-2">
            {topics.map(({ label, count }) => {
              const isActive = activeTopic === label;
              return (
                <li key={label}>
                  <button
                    onClick={() => setActiveTopic(label)}
                    className={`w-full border border-[#ffffff18] flex items-center text-white justify-between px-4 py-5 rounded-xl transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#161d25] border-[#00a78b44]"
                        : "bg-[#161d25]"
                    }`}
                  >
                    <span className="text-xl font-semibold">{label}</span>
                    <span
                      className={`text-xs rounded-xl w-8 h-6 flex items-center justify-center font-semibold ${
                        isActive
                          ? "bg-white text-black"
                          : "bg-[#2a3540] text-[#6E7B80] border border-[#6e7b8055]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* FAQ Cards */}
        <div className="flex-1 flex flex-col gap-4">
          {filtered.map((faq) => (
            <div
              key={faq.id}
              className="rounded-2xl px-6 py-5 border border-[#ffffff0d] transition-colors duration-200"
              style={{ background: "transparent" }}
            >
              <span className="inline-block text-[10px] px-2.5 py-0.5 rounded-lg mb-3 text-[#EAF4F4] bg-[#2a3540]">
                {faq.category}
              </span>
              <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
              <p className="text-[#EAF4F4] leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
