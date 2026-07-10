"use client";

import { useState } from "react";
import Link from "next/link";
import { RiArrowDownSLine } from "@remixicon/react";
import Container from "@/shared/components/container";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS, FAQ_SECTION } from "../data/faq.data";

// Open-list FAQ (Craft-style rows, NeevCloud styling): hairline dividers,
// one question expanded at a time, teal accents.
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      // overflow-anchor:none — accordion height changes otherwise trigger the
      // browser's scroll anchoring, which visibly nudges the page ("dancing").
      className="bg-cloud-gray py-16 [overflow-anchor:none] md:py-24"
    >
      <Container className="flex flex-col gap-10 md:gap-14">
        <h2
          id="faq-heading"
          className="text-center text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px]"
        >
          {FAQ_SECTION.title}
        </h2>

        <div className="mx-auto w-full max-w-[960px]">
          <ul className="list-none border-t border-black/10">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={item.question} className="border-b border-black/10">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[16px] font-medium leading-[132%] tracking-[-0.01em] text-black sm:text-[18px]">
                      {item.question}
                    </span>
                    <RiArrowDownSLine
                      size={22}
                      aria-hidden
                      className={cn(
                        "shrink-0 text-[#00A78B] transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    aria-hidden={!isOpen}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-[70ch] pb-5 text-[14px] font-normal leading-[160%] tracking-[-0.01em] text-black/70">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="pt-8 text-center text-[14px] leading-[150%] text-black/60">
            {FAQ_SECTION.footerLead}{" "}
            <Link
              href={FAQ_SECTION.footerCtaHref}
              className="font-medium text-[#00A78B] transition-colors hover:text-primary-90"
            >
              {FAQ_SECTION.footerCtaLabel}
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
