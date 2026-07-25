import Image from "next/image";
import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import WhyComparisonCards from "./WhyComparisonCards";
import { WHY_FEATURES, WHY_NEEVCLOUD } from "../data/why-neevcloud.data";

export default function WhyNeevcloudSection() {
  return (
    <section aria-labelledby="why-heading" className="bg-cloud-gray p-4">
      <Container className="flex flex-col gap-12 px-0">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2
            id="why-heading"
            className="w-full text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px]"
          >
            {/* "NeevCloud" carries the brand teal */}
            {WHY_NEEVCLOUD.title.split("NeevCloud")[0]}
            <span className="text-[#00A78A]">NeevCloud</span>
            {WHY_NEEVCLOUD.title.split("NeevCloud")[1]}
          </h2>
          <p className="max-w-[830px] text-[16px] font-normal leading-[132%] tracking-[-0.02em] text-black sm:text-[18px] md:text-[20px]">
            {WHY_NEEVCLOUD.description}
          </p>
        </div>

        <ul className="flex list-none flex-wrap items-start gap-5 sm:gap-2">
          {WHY_FEATURES.map((feature, index) => (
            <li
              key={feature.title}
              className="flex min-w-[240px] flex-1 basis-[min(100%,441px)] flex-row items-center gap-4 overflow-hidden border-b border-black/10 pb-5 text-left last:border-b-0 last:pb-0 sm:flex-col sm:border-b-0 sm:pb-0 sm:text-center md:min-w-0 md:basis-0"
            >
              <div
                className={cn(
                  "relative order-1 h-[61px] w-[70px] shrink-0 sm:h-[134px] sm:w-[153px]",
                  index === 0 && "home-why-icon-turntable"
                )}
              >
                <Image
                  src={feature.icon}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(min-width: 640px) 240px, 88px"
                  className="object-contain"
                />
              </div>
              <div className="order-2 flex flex-1 flex-col items-start gap-1 sm:w-full sm:flex-none sm:items-center sm:gap-2">
                <h3 className="text-[14px] font-medium leading-[120%] tracking-[-0.01em] text-black sm:text-[20px]">
                  {feature.title}
                </h3>
                <p className="max-w-[46ch] whitespace-pre-wrap text-[11px] font-normal leading-[142%] tracking-[-0.02em] text-black [text-wrap:balance] sm:text-[14px]">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <WhyComparisonCards />
      </Container>
    </section>
  );
}
