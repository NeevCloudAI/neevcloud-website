import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import { INFRA_BENTO, INFRA_BENTO_CARDS } from "../data/infra-bento.data";

// Infra-Bento grid (Paper node 6OG-0): 2×2 dark cards on a light section, with a
// diagonal content rhythm — text sits low on the top-left / bottom-right cards
// and high on the others, leaving the opposite end open for a visual.
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
          {INFRA_BENTO_CARDS.map((card) => (
            <li
              key={card.title}
              className={cn(
                "relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl bg-black p-8 md:min-h-[390px]",
                card.align === "bottom" ? "justify-end" : "justify-start",
              )}
            >
              {/* teal glow rising from the bottom */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-deep-forest/70 via-deep-forest/20 to-transparent"
              />
              <div className="relative flex flex-col gap-3">
                <h3 className="text-[22px] font-medium leading-[120%] tracking-[-0.01em] text-white md:text-[24px]">
                  {card.title}
                </h3>
                <p className="max-w-sm text-[14px] font-normal leading-[142%] tracking-[-0.02em] text-white/70">
                  {card.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
