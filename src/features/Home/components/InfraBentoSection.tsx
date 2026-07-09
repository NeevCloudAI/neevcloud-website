import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import {
  INFRA_BENTO,
  INFRA_BENTO_CARDS,
  type InfraBentoCard,
} from "../data/infra-bento.data";

// Per-card placement of the visual (bleeds off the card edges), matching Paper 6OL-0.
const IMAGE_CLASS: Record<string, string> = {
  gpu: "absolute right-0 top-[46%] w-[66%] max-w-none -translate-y-1/2 translate-x-[4%]",
  memory: "absolute left-2 top-[42%] w-[90%] max-w-none",
  "ai-native": "absolute -left-3 bottom-0 w-[74%] max-w-none translate-y-[4%]",
  support: "absolute -bottom-1 right-0 w-[58%] max-w-none",
};

function BentoCard({ card }: { card: InfraBentoCard }) {
  const isRight = card.variant === "image-right";
  return (
    <div
      className={cn(
        "relative flex h-[360px] flex-col overflow-hidden rounded-lg bg-gradient-to-b from-black to-deep-forest p-6 lg:h-[400px]",
        isRight ? "justify-center" : "justify-start",
      )}
    >
      {/* visual — bleeds off the card edges */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.image}
        alt=""
        aria-hidden
        className={cn("pointer-events-none select-none", IMAGE_CLASS[card.key])}
      />

      <div
        className={cn(
          "relative z-10 flex flex-col gap-3",
          isRight ? "max-w-[46%]" : "max-w-[92%]",
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
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2
            id="infra-bento-heading"
            className="text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px]"
          >
            {INFRA_BENTO.title}
          </h2>
          <p className="text-[16px] leading-[150%] tracking-[-0.01em] text-gray-04">
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
