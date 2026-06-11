"use client";

import { useId, useState } from "react";
import Container from "@/shared/components/container";
import { Button, Divider, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import {
  WITH_NEEVCLOUD_BULLETS,
  WITH_NEEVCLOUD_SUMMARY_CARDS,
  WITHOUT_NEEVCLOUD_BULLETS,
  WITHOUT_NEEVCLOUD_SUMMARY_CARDS,
} from "../data/comparison-section.data";
import type { ComparisonSummaryCard } from "../types/comparison-section.types";

type ComparisonCardsPanelProps = {
  cards: ComparisonSummaryCard[];
  inverted: boolean;
};

function ComparisonCardsPanel({ cards, inverted }: ComparisonCardsPanelProps) {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-[minmax(5.5rem,auto)_minmax(11rem,14rem)_minmax(0,1fr)] md:gap-x-10 md:gap-y-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className={cn(
            "grid grid-cols-1 gap-4 rounded-md p-4 md:col-span-3 md:grid-cols-subgrid md:items-center md:p-8",
            inverted ? "bg-gray-80 text-white" : "bg-white text-black",
          )}
        >
          <Text
            as="h1"
            weight="semibold"
            className="mx-0 shrink-0 text-5xl leading-none md:text-[4.5rem]"
          >
            {card.title}
          </Text>
          <div className="flex min-w-0 flex-col gap-2.5">
            <Text as="small" className="mx-0">
              {card.subtitle}
            </Text>
            <Text as="h6" weight="semibold" className="mx-0">
              {card.subtitle2}
            </Text>
          </div>
          <Text as="small" className="mx-0 min-w-0">
            {card.description}
          </Text>
        </div>
      ))}
    </div>
  );
}

export default function ComparisonSectionClient() {
  const [isWithNeevCloud, setIsWithNeevCloud] = useState(true);
  const descriptionId = useId();

  const bullets = isWithNeevCloud
    ? WITH_NEEVCLOUD_BULLETS
    : WITHOUT_NEEVCLOUD_BULLETS;

  const summaryCards = isWithNeevCloud
    ? WITH_NEEVCLOUD_SUMMARY_CARDS
    : WITHOUT_NEEVCLOUD_SUMMARY_CARDS;

  return (
    <div
      className={cn(
        "py-8 md:py-16 2xl:py-25",
        isWithNeevCloud ? "bg-gray-10" : "bg-black",
      )}
    >
      <Container className="flex flex-col items-center">
        <Text
          as="h2"
          align="center"
          className="max-w-md"
          textColor={isWithNeevCloud ? "black" : "white"}
        >
          From manual toil to
          <Text
            as="span"
            variant="h2"
            textColor={isWithNeevCloud ? "primary" : "white"}
          >
            AI-scale leverage
          </Text>
        </Text>
        <Text
          as="h6"
          id={descriptionId}
          textColor={isWithNeevCloud ? "black-5" : "white"}
          align="center"
          className="mt-2.5"
        >
          Get rid of tedious cloud cost management with automation that works in
          real time.
        </Text>

        <div
          className="mt-4 md:mt-7.5 inline-flex rounded-md"
          role="group"
          aria-label="Compare NeevCloud vs hyperscalers"
          aria-describedby={descriptionId}
        >
          <Button
            variant="outline-primary"
            className={cn(
              "rounded-r-none",
              isWithNeevCloud ? "bg-white" : "bg-gray-80 text-white",
            )}
            textColor="black"
            weight="semibold"
            onClick={() => setIsWithNeevCloud(false)}
            aria-pressed={!isWithNeevCloud}
            type="button"
          >
            Without NeevCloud
          </Button>
          <Button
            weight="semibold"
            className={cn(
              "rounded-l-none",
              isWithNeevCloud ? "" : "bg-gray-90 text-white",
            )}
            onClick={() => setIsWithNeevCloud(true)}
            aria-pressed={isWithNeevCloud}
            type="button"
          >
            With NeevCloud
          </Button>
        </div>

        <div className="mt-4 md:mt-12.5 flex flex-col md:flex-row items-center gap-5 md:gap-4 w-full">
          <div
            className={cn(
              "w-full rounded-md p-4 md:flex-2 md:p-8",
              isWithNeevCloud ? "bg-primary" : "bg-gray-90",
            )}
          >
            <ComparisonCardsPanel
              cards={summaryCards}
              inverted={!isWithNeevCloud}
            />
          </div>

          <div className="flex flex-col md:flex-1 w-full">
            <Text
              as="h3"
              weight="semibold"
              textColor={isWithNeevCloud ? undefined : "white"}
            >
              {isWithNeevCloud ? "With NeevCloud" : "Global Hyperscalers"}
            </Text>
            <Text
              as="h3"
              weight="normal"
              textColor={isWithNeevCloud ? undefined : "white"}
              className="mt-2.5 text-2xl md:text-[30px]"
            >
              {isWithNeevCloud ? "AI-First by design" : "Scale Without Focus"}
            </Text>

            <Text
              as="h6"
              className={cn(
                isWithNeevCloud ? "mt-4 md:mt-12.5" : "mt-4 md:mt-7.5",
              )}
              textColor={isWithNeevCloud ? "black-5" : "white"}
            >
              {bullets[0]}
            </Text>
            <Divider
              orientation="horizontal"
              className={cn(
                "my-4.5",
                isWithNeevCloud ? "bg-black-10" : "bg-white-10",
              )}
            />

            {bullets.slice(1).map((label, idx) => (
              <div key={label}>
                <Text as="h6" textColor={isWithNeevCloud ? undefined : "white"}>
                  {label}
                </Text>
                <Divider
                  orientation="horizontal"
                  className={cn(
                    "my-4.5",
                    isWithNeevCloud ? "bg-black-10" : "bg-white-10",
                  )}
                  aria-hidden={idx === bullets.length - 2}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
