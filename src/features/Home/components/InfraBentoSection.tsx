import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import {
  INFRA_BENTO,
  INFRA_BENTO_CARDS,
  type InfraBentoCard,
} from "../data/infra-bento.data";

// Per-card placement of the visual (bleeds off the card edges), matching Paper 6OL-0.
// Mobile (<lg): all cards are 300px tall with the copy on top and the visual
// anchored to the bottom (per the mobile bento design).
const IMAGE_CLASS: Record<string, string> = {
  gpu: "absolute -bottom-2 left-0 w-full max-w-none lg:bottom-auto lg:left-auto lg:right-0 lg:top-[46%] lg:w-[66%] lg:-translate-y-1/2 lg:translate-x-[4%]",
  memory:
    "absolute bottom-0 right-0 w-[82%] max-w-none lg:left-1/2 lg:right-auto lg:w-[75.6%] lg:-translate-x-1/2",
  "ai-native": "absolute -left-6 bottom-0 w-[102%] max-w-none translate-y-[4%]",
  support:
    "absolute bottom-0 left-0 w-full max-w-none lg:-bottom-1 lg:left-auto lg:right-0 lg:w-[58%]",
};

function BentoCard({ card }: { card: InfraBentoCard }) {
  const isRight = card.variant === "image-right";
  return (
    <div
      className={cn(
        "relative flex h-[300px] flex-col overflow-hidden rounded-lg bg-gradient-to-b from-black to-deep-forest p-6 lg:h-[400px]",
        isRight ? "justify-start lg:justify-center" : "justify-start",
      )}
    >
      {/* visual — bleeds off the card edges */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.image}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className={cn("pointer-events-none select-none", IMAGE_CLASS[card.key])}
      />

      <div
        className={cn(
          "relative z-10 flex flex-col gap-3",
          isRight ? "max-w-full lg:max-w-[46%]" : "max-w-[92%]",
        )}
      >
        <h3 className="text-[22px] font-medium leading-[120%] tracking-[-0.01em] text-white md:text-[24px]">
          {card.title}
        </h3>
        <p className="max-w-sm text-[14px] font-normal leading-[142%] tracking-[-0.02em] text-white/70">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function InfraBentoSection() {
  const [gpu, memory, aiNative, support] = INFRA_BENTO_CARDS;
  return (
    <section
      aria-labelledby="infra-bento-heading"
      className="bg-gray-light py-16 md:py-24"
    >
      <Container className="flex flex-col gap-12 md:gap-16">
        <div className="mx-auto flex max-w-none flex-col items-center gap-4 text-center">
          <h2
            id="infra-bento-heading"
            className="text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px]"
          >
            {/* Line 1 in brand teal, "Not Adds Them!" on its own line */}
            <span className="block text-[#00A78A]">
              Infrastructure That Removes Barriers,
            </span>
            <span className="block">
              {INFRA_BENTO.title.split("Barriers,")[1]?.trim()}
            </span>
          </h2>
          <p className="max-w-3xl text-[16px] leading-[150%] tracking-[-0.01em] text-gray-04">
            {INFRA_BENTO.subtitle}
          </p>
        </div>

        {/* Bento: wide→narrow on row 1, narrow→wide on row 2 (Paper 802:514). */}
        <div className="flex flex-col gap-6">
          <div className="grid gap-6 lg:grid-cols-[802fr_514fr]">
            <BentoCard card={gpu} />
            <BentoCard card={memory} />
          </div>
          <div className="grid gap-6 lg:grid-cols-[514fr_802fr]">
            <BentoCard card={aiNative} />
            <BentoCard card={support} />
          </div>
        </div>
      </Container>
    </section>
  );
}
