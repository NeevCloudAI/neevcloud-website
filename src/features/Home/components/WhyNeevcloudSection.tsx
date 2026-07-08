import Image from "next/image";
import Container from "@/shared/components/container";
import WhyComparisonCards from "./WhyComparisonCards";
import { WHY_FEATURES, WHY_NEEVCLOUD } from "../data/why-neevcloud.data";

export default function WhyNeevcloudSection() {
  return (
    <section
      aria-labelledby="why-heading"
      className="bg-cloud-gray py-16 md:py-24"
    >
      <Container className="flex flex-col gap-12 md:gap-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2
            id="why-heading"
            className="text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px]"
          >
            {WHY_NEEVCLOUD.title}
          </h2>
          <p className="text-[16px] leading-[150%] tracking-[-0.01em] text-gray-04">
            {WHY_NEEVCLOUD.description}
          </p>
        </div>

        <ul className="grid list-none gap-10 sm:grid-cols-3">
          {WHY_FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="relative h-28 w-28">
                <Image
                  src={feature.icon}
                  alt=""
                  aria-hidden
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-[20px] font-medium text-black">
                {feature.title}
              </h3>
              <p className="max-w-xs text-[14px] leading-[150%] text-gray-04">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>

        <WhyComparisonCards />
      </Container>
    </section>
  );
}
