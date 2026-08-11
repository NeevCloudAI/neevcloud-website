"use client";

import { useState } from "react";
import Link from "next/link";
import { RiArrowDownSLine } from "@remixicon/react";
import Container from "@/shared/components/container";
import type { FaqItem } from "@/shared/data/faq-section-types";
import { cn } from "@/lib/utils";

const FAQ_SECTION_TITLE = "Frequently Asked Questions";
const FAQ_FOOTER_LEAD = "Can't find an answer to your question?";
const FAQ_FOOTER_CTA_LABEL = "Get in touch";
const FAQ_FOOTER_CTA_HREF = "/contact-neevcloud#contact-form";

type FaqSectionProps = {
  items: readonly FaqItem[];
  description?: string;
  className?: string;
  showFooter?: boolean;
};

export default function FaqSection({
  items,
  description,
  className,
  showFooter = true,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className={cn(
        "bg-cloud-gray py-[34px] [overflow-anchor:none] md:py-24",
        className,
      )}
    >
      <Container className="flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-3 text-center">
          <h2
            id="faq-heading"
            className="text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px]"
          >
            {FAQ_SECTION_TITLE}
          </h2>
          {description && (
            <p className="text-[14px] leading-[150%] text-black/60 md:text-[16px]">
              {description}
            </p>
          )}
        </div>

        <div className="mx-auto w-full max-w-[960px]">
          <ul className="list-none border-t border-black/10">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={item.id} className="border-b border-black/10">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
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
                    id={`faq-panel-${item.id}`}
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

          {showFooter && (
            <p className="pt-8 text-center text-[14px] leading-[150%] text-black/60">
              {FAQ_FOOTER_LEAD}{" "}
              <Link
                href={FAQ_FOOTER_CTA_HREF}
                className="font-medium text-[#00A78B] transition-colors hover:text-primary-90"
              >
                {FAQ_FOOTER_CTA_LABEL}
              </Link>
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
