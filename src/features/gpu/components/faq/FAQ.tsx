"use client";

import Container from "@/shared/components/container";
import { Button, Text } from "@/shared/ui-lib";
import { useState } from "react";

type FaqItem = {
  id: number;
  category: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "Can CPU instances talk to GPU instances without egress charges?",
    answer:
      "Yes. CPU and GPU instances in the same region share a private network. Inter-instance traffic is free with no bandwidth limits.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "How quickly can I launch a CPU instance?",
    answer:
      "CPU instances deploy within 1–2 minutes. Select your configuration, choose an OS image, and launch. Instance is ready when status shows 'Running'.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Can I resize instances after launch?",
    answer:
      "Yes. Stop the instance, change the instance type, and restart. Your data on persistent storage remains intact.",
  },
  {
    id: 4,
    category: "Billing",
    question: "What's included in the hourly price?",
    answer:
      "vCPU, RAM, ephemeral storage, DDoS protection, and private networking. Persistent storage and floating IPs billed separately.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "Do you support autoscaling?",
    answer:
      "Yes. Use our API or Kubernetes integration to scale CPU instances based on load. Perfect for batch jobs and traffic spikes.",
  },
];

type Topic = "All" | "Getting Started" | "Networking" | "Billing" | "Scaling";

const topics: { label: Topic; count: number }[] = [
  { label: "All", count: 5 },
  {
    label: "Getting Started",
    count: 2,
  },
  {
    label: "Networking",
    count: 2,
  },
  {
    label: "Billing",
    count: 1,
  },
  {
    label: "Scaling",
    count: 1,
  },
];

export default function FaqSection() {
  const [activeTopic, setActiveTopic] = useState<Topic>("All");

  const filtered =
    activeTopic === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeTopic);

  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-[3vh] md:py-[7vh]">
      {/* <div className="absolute inset-0 bg-radial from-teal-300/30 via-transparent to-transparent blur-xl"></div> */}

      <Container className="flex flex-col items-center justify-center">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <Text as="h2" weight="semibold" textColor="white">
            Frequently asked
          </Text>
          <Text as="h2" weight="semibold" textColor="primary">
            Question
          </Text>
        </div>
        <Text textColor="white">
          Everything you need to know before launching.
        </Text>

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
          <aside className="md:min-w-90">
            <Text as="h4" textColor="primary" className="tracking-widest">
              TOPICS
            </Text>
            <ul className="flex flex-col gap-2 mt-2 md:mt-8">
              {topics.map(({ label, count }) => {
                const isActive = activeTopic === label;
                return (
                  <li key={label}>
                    <Button
                      variant="ghost"
                      size="full"
                      onClick={() => setActiveTopic(label)}
                      className={`border border-white-10 bg-gray-100 flex items-center justify-between p-4 rounded-xl
                       `}
                    >
                      <Text as="h4" weight="semibold">
                        {label}
                      </Text>
                      <Text
                        as="h6"
                        className={`px-3 rounded-xl ${isActive ? "bg-white text-black" : "bg-gray-90 text-gray-60 border border-gray-60"}`}
                      >
                        {count}
                      </Text>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* FAQ Cards */}
          <div className="flex flex-col gap-4">
            {filtered.map((faq) => (
              <div
                key={faq.id}
                className="rounded-lg p-2 md:p-8 bg-gray-100 flex flex-col gap-2"
              >
                <Text
                  as="small"
                  textColor="white"
                  className="bg-gray-95 w-fit px-2.5 py-0.5 rounded-lg"
                >
                  {faq.category}
                </Text>
                <Text as="h3" textColor="white" weight="semibold">
                  {faq.question}
                </Text>
                <Text textColor="white">{faq.answer}</Text>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
