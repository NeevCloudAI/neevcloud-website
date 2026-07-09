import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import { INFRA_BENTO, INFRA_BENTO_CARDS } from "../data/infra-bento.data";

// Per-card placement of the visual (bleeds off the card edges), matching Paper.
const IMAGE_CLASS: Record<string, string> = {
  gpu: "absolute right-0 top-1/2 w-[56%] max-w-none -translate-y-1/2 translate-x-[3%]",
  memory:
    "absolute bottom-0 left-1/2 w-[82%] max-w-none -translate-x-1/2 translate-y-[14%]",
  "ai-native": "absolute -left-2 bottom-0 w-[64%] max-w-none translate-y-[6%]",
  support: "absolute bottom-0 right-0 w-[52%] max-w-none",
};

export default function InfraBentoSection() {
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

        <ul className="grid list-none gap-6 lg:grid-cols-2">
          {INFRA_BENTO_CARDS.map((card) => {
            const isRight = card.variant === "image-right";
            return (
              <li
                key={card.key}
                className={cn(
                  "relative flex min-h-[380px] flex-col overflow-hidden rounded-2xl bg-black p-8 lg:min-h-[460px]",
                  isRight ? "justify-center" : "justify-start",
                )}
              >
                {/* subtle teal glow rising from the bottom-left */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_90%_at_18%_105%,rgba(0,81,80,0.5),transparent_58%)]"
                />

                {/* visual — bleeds off the card edges */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt=""
                  aria-hidden
                  className={cn(
                    "pointer-events-none select-none",
                    IMAGE_CLASS[card.key],
                  )}
                />

                <div
                  className={cn(
                    "relative z-10 flex flex-col gap-3",
                    isRight ? "max-w-[48%]" : "max-w-[92%]",
                  )}
                >
                  <h3 className="text-[22px] font-medium leading-[120%] tracking-[-0.01em] text-white md:text-[24px]">
                    {card.title}
                  </h3>
                  <p className="max-w-sm text-[14px] font-normal leading-[142%] tracking-[-0.02em] text-white/70">
                    {card.description}
                  </p>
                  {card.stat && (
                    <div className="mt-3">
                      <div className="text-[52px] font-medium leading-none text-neev-green md:text-[64px]">
                        {card.stat.value}
                      </div>
                      <div className="mt-1 text-[16px] leading-[132%] text-white/80">
                        {card.stat.label}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
