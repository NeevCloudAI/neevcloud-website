import Container from "@/shared/components/container";
import LazyBgVideo from "@/shared/components/lazy-bg-video";
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
      {/* 3.3MB decorative loop — deferred until the section nears the viewport */}
      <LazyBgVideo
        src="/images/home/compare-bg.mp4"
        poster="/images/home/compare-bg.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <Container className="flex flex-col gap-10 md:gap-14">
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

        {/* New stats cards (Paper JUD-0): 3-up, stat + two-line title + copy on
            top, NeevCloud vs Legacy bars pinned at the bottom. */}
        <ul className="grid list-none gap-4 lg:grid-cols-3">
          {LEVERAGE_ROWS.map((row) => (
            <li
              key={row.stat + row.unit}
              className="flex min-h-[380px] flex-col justify-between gap-10 bg-white p-6 lg:min-h-[443px]"
            >
              <div className="flex flex-col gap-4">
                <LeverageStatClient value={Number(row.stat)} unit={row.unit} />
                <p className="text-[14px] font-medium leading-[142%] tracking-[-0.02em] lg:text-[20px]">
                  <span className="block text-[14px] font-medium text-[#01A78B] lg:text-[20px]">
                    {row.titleTeal}
                  </span>
                  <span className="block text-[14px] font-medium text-black lg:text-[20px]">
                    {row.titleRest}
                  </span>
                </p>
                <p className="text-[14px] font-normal leading-[142%] tracking-[-0.02em] text-black">
                  {row.description}
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
