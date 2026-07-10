import Container from "@/shared/components/container";
import LeverageBarsClient from "./LeverageBarsClient";
import LeverageStatClient from "./LeverageStatClient";
import {
  LEVERAGE_ROWS,
  LEVERAGE_SECTION,
} from "../data/leverage-section.data";

export default function LeverageSection() {
  return (
    <section
      aria-labelledby="leverage-heading"
      className="relative isolate overflow-hidden bg-cloud-gray py-16 md:py-24"
    >
      <video
        aria-hidden
        autoPlay
        loop
        muted
        playsInline
        poster="/images/home/compare-bg.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      >
        <source src="/images/home/compare-bg.mp4" type="video/mp4" />
      </video>
      <Container className="flex max-w-6xl flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-3">
          <h2
            id="leverage-heading"
            className="text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px]"
          >
            {/* "AI-scale leverage" carries the brand teal */}
            {LEVERAGE_SECTION.title.split("AI-scale leverage")[0]}
            <span className="text-[#00A78A]">AI-scale leverage</span>
          </h2>
          <p className="text-[15px] leading-[150%] text-gray-04">
            {LEVERAGE_SECTION.subtitle}
          </p>
        </div>

        <ul className="flex list-none flex-col gap-5">
          {LEVERAGE_ROWS.map((row) => (
            <li
              key={row.stat + row.unit}
              className="grid gap-6 bg-white p-5 md:grid-cols-2 md:gap-10"
            >
              <div className="flex flex-col gap-3 md:border-r md:border-cloud-gray md:pr-10">
                <LeverageStatClient value={Number(row.stat)} unit={row.unit} />
                <p className="text-[16px] font-medium capitalize leading-6 text-black">
                  <span className="font-semibold text-[#00A78B]">
                    {row.highlight}
                  </span>
                  <span className="mt-1 block text-black">{row.rest}</span>
                </p>
              </div>

              <LeverageBarsClient neev={row.neev} legacy={row.legacy} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
