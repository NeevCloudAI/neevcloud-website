"use client";

import { useState } from "react";
import { faqs, topics, type Topic } from "@/lib/Faqdata";

export default function FaqSection() {
  const [activeTopic, setActiveTopic] = useState<Topic>("All");

  const filtered =
    activeTopic === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeTopic);

  return (
    <section className="relative min-h-screen py-16 px-4 overflow-hidden bg-surface-terminal">
      {/* Teal glow — centered behind the cards column */}
      <div className="pointer-events-none absolute w-[1000px] h-[700px] rounded-full top-[53%] left-[53%] -translate-x-1/2 -translate-y-1/2 bg-glow-faq" />

      {/* Header */}
      <div className="relative text-center mb-12">
        <h2 className="text-white font-semibold text-4xl">
          Frequently asked{" "}
          <span className="text-primary text-4xl font-semibold">Question</span>
        </h2>
        <p className="mt-2 text-base text-text-dim">
          Everything you need to know before launching.
        </p>
      </div>

      {/* Layout */}
      <div className="relative max-w-360 mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="md:w-90 shrink-0">
          <p className="text-xl tracking-widest text-primary uppercase mb-3 px-1">
            Topics
          </p>
          <ul className="flex flex-col gap-2">
            {topics.map(({ label, count }) => {
              const isActive = activeTopic === label;
              return (
                <li key={label}>
                  <button
                    onClick={() => setActiveTopic(label)}
                    className={`w-full flex items-center text-white justify-between px-4 py-5 rounded-xl transition-all duration-200 cursor-pointer bg-surface-faq ${
                      isActive
                        ? "border border-border-primary-faint"
                        : "border border-border-faint"
                    }`}
                  >
                    <span className="text-xl font-semibold">{label}</span>
                    <span
                      className={`text-xs rounded-xl w-8 h-6 flex items-center justify-center font-semibold ${
                        isActive
                          ? "bg-white text-black"
                          : "bg-surface-chip text-text-muted border border-border-chip"
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
              className="rounded-2xl px-6 py-5 border border-border-card-dark bg-transparent transition-colors duration-200"
            >
              <span className="inline-block text-[10px] px-2.5 py-0.5 rounded-lg mb-3 text-gray-10 bg-surface-chip">
                {faq.category}
              </span>
              <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
              <p className="text-gray-10 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
