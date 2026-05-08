"use client";

import { useState } from "react";
import Image from "next/image";
import { tabs, useCaseData, type TabId } from "@/lib/Usecasedata";

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("01");
  const data = useCaseData[activeTab];

  return (
    <section className="w-full py-10 sm:py-16 px-4 sm:px-8 md:px-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="flex justify-center items-center gap-2">
          <span className="text-black text-[40px] font-semibold leading-none">
            Use
          </span>
          <span className="text-primary text-[40px] font-semibold leading-none">
            Cases
          </span>
        </div>
        <p className="mt-2 text-base">Built for Every AI Workload</p>
      </div>

      {/* Tab bar */}
      <div className="w-full max-w-360 mx-auto">
        {/* ── Mobile (<md): horizontally scrollable tabs ── */}
        <div className="md:hidden flex overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-none flex flex-col items-start px-4 py-3 border-l last:border-r border-b border-t border-border-muted transition-colors duration-200 text-left rounded-tl-lg rounded-tr-lg min-w-[110px] ${
                activeTab === tab.id ? "bg-tab-active" : "bg-transparent"
              }`}
            >
              <span
                className={`block text-[11px] leading-tight mb-1 ${
                  activeTab === tab.id ? "text-white" : "text-black"
                }`}
              >
                {tab.id}
              </span>
              <span
                className={`block text-[13px] font-semibold leading-snug whitespace-nowrap ${
                  activeTab === tab.id ? "text-white" : "text-text-near-black"
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* ── Desktop (md+): 6-column grid ── */}
        <div className="hidden md:grid md:grid-cols-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-start px-5 py-4 border-l last:border-r border-b border-t border-border-muted transition-colors duration-200 text-left rounded-tl-lg rounded-tr-lg ${
                activeTab === tab.id ? "bg-tab-active" : "bg-transparent"
              }`}
            >
              <span
                className={`text-base mb-1 ${
                  activeTab === tab.id ? "text-white" : "text-black"
                }`}
              >
                {tab.id}
              </span>
              <span
                className={`font-semibold text-2xl ${
                  activeTab === tab.id ? "text-white" : "text-text-near-black"
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content panel */}
      <div className="w-full max-w-360 mx-auto rounded-b-lg overflow-hidden relative bg-gray-10 min-h-[360px]">
        {/* Vector.svg decorative — hidden on mobile */}
        <div className="absolute pointer-events-none hidden md:block bottom-0 left-0 w-[620px] h-[500px] z-0 opacity-55">
          <Image
            src="/icons/Vector.svg"
            alt=""
            fill
            className="object-contain mt-84"
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-6 p-5 sm:p-8">
          {/* Left content */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Icon */}
            <div className="w-15 h-15 rounded-md flex items-center justify-center border border-border-muted bg-white relative overflow-hidden">
              <Image
                src="/icons/Frame.svg"
                alt=""
                width={36}
                height={36}
                className="object-contain"
              />
            </div>

            <h3 className="text-[40px] font-semibold text-black">
              {data.title}
            </h3>

            <p className="text-2xl leading-relaxed">{data.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              {data.tags.map((tag: string) => {
                const isHighlight = data.highlightTags.includes(tag);
                return (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-[14px] text-white ${
                      isHighlight
                        ? "bg-primary"
                        : "bg-tag-default border border-border-card"
                    }`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right info cards */}
          <div className="flex flex-col gap-3 w-full lg:w-[340px] lg:mt-10 rounded-xl p-3 bg-primary border-2 border-primary backdrop-blur-[20px]">
            {/* Card 1 — Best For */}
            <div className="rounded-lg p-4 bg-white border border-border-card">
              <p className="uppercase tracking-widest mb-1 text-text-muted text-[12px]">
                Best For
              </p>
              <p className="font-semibold text-2xl text-black">
                {data.bestFor}
              </p>
              <p className="text-base text-gray-100 mt-0.5">
                {data.bestForSub}
              </p>
            </div>

            {/* Card 2 — Recommended Cluster */}
            <div className="rounded-lg p-4 bg-white border border-border-card">
              <p className="uppercase tracking-widest mb-1 text-text-muted text-[12px]">
                Recommended Cluster
              </p>
              <p className="font-bold text-2xl text-black">{data.cluster}</p>
              <p className="text-base text-gray-100 mt-0.5">
                {data.clusterSub}
              </p>
            </div>

            {/* Card 3 — Starting At */}
            <div className="rounded-lg p-4 bg-white border border-border-card">
              <p className="uppercase tracking-widest mb-1 text-text-muted text-[12px]">
                Starting At
              </p>
              <p className="font-bold text-2xl text-black">{data.price}</p>
              <p className="text-base text-gray-100 mt-0.5">{data.priceSub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
