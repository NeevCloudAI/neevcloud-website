"use client";

import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import type { FaqTopic } from "@/shared/data/faq-section-types";
import { useFilteredFaqs } from "@/shared/hooks/use-filtered-faqs";
import { buildFaqTopicSummaries } from "@/shared/lib/build-faq-topic-summaries";
import Container from "@/shared/components/container";
import { useState } from "react";
import FaqItemCard from "./faq-item-card";
import FaqSectionHeader from "./faq-section-header";
import FaqTopicSidebar from "./faq-topic-sidebar";

const FAQ_ITEMS = CPU_CLUSTER_FAQ_ITEMS;
const TOPIC_SUMMARIES = buildFaqTopicSummaries(FAQ_ITEMS);

export default function FaqSection() {
  const [activeTopic, setActiveTopic] = useState<FaqTopic>("All");
  const filteredFaqs = useFilteredFaqs(FAQ_ITEMS, activeTopic);

  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-[3vh] md:py-[7vh]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial from-teal-300/30 via-transparent to-transparent blur-xl"
      />

      <Container className="flex flex-col items-center justify-center">
        <FaqSectionHeader />

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-8 w-full max-w-6xl">
          <FaqTopicSidebar
            topics={TOPIC_SUMMARIES}
            activeTopic={activeTopic}
            onTopicChange={setActiveTopic}
          />

          <div className="flex flex-col gap-4 flex-1 min-w-0">
            {filteredFaqs.map((faq) => (
              <FaqItemCard key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
