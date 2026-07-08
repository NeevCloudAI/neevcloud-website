import Image from "next/image";
import Container from "@/shared/components/container";
import {
  LEVERAGE_ROWS,
  LEVERAGE_SECTION,
} from "../data/leverage-section.data";

function CompareBar({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "neev" | "legacy";
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={
          tone === "neev"
            ? "w-24 shrink-0 text-[13px] font-semibold leading-4 text-primary-90"
            : "w-24 shrink-0 text-[13px] leading-4 text-gray-03"
        }
      >
        {label}
      </span>
      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-cloud-gray">
        <div
          className={
            tone === "neev"
              ? "h-full rounded-full bg-gradient-to-r from-primary to-neev-green"
              : "h-full rounded-full bg-gray-01"
          }
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function LeverageSection() {
  return (
    <section
      aria-labelledby="leverage-heading"
      className="relative isolate overflow-hidden bg-cloud-gray py-16 md:py-24"
    >
      <Image
        src="/images/home/compare-bg.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        unoptimized
        className="-z-10 object-cover opacity-60"
      />
      <Container className="flex max-w-6xl flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-3">
          <h2
            id="leverage-heading"
            className="text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px]"
          >
            {LEVERAGE_SECTION.title}
          </h2>
          <p className="text-[15px] leading-[150%] text-gray-04">
            {LEVERAGE_SECTION.subtitle}
          </p>
        </div>

        <ul className="flex list-none flex-col gap-5">
          {LEVERAGE_ROWS.map((row) => (
            <li
              key={row.stat + row.unit}
              className="grid gap-6 rounded-lg bg-white p-5 md:grid-cols-2 md:gap-10"
            >
              <div className="flex flex-col gap-3 md:border-r md:border-cloud-gray md:pr-10">
                <p className="flex items-baseline">
                  <span className="text-[48px] font-semibold leading-none text-primary-90 md:text-[56px]">
                    {row.stat}
                  </span>
                  <span className="text-[48px] font-semibold leading-none text-primary-90/50 md:text-[56px]">
                    {row.unit}
                  </span>
                </p>
                <p className="text-[14px] capitalize leading-6">
                  <span className="text-[14px] text-primary-90">
                    {row.highlight}{" "}
                  </span>
                  <span className="text-[14px] text-gray-02">{row.rest}</span>
                </p>
              </div>

              <div className="flex flex-col justify-center gap-5">
                <CompareBar label="With NeevCloud" value={row.neev} tone="neev" />
                <CompareBar label="Legacy Cloud" value={row.legacy} tone="legacy" />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
