import Container from "@/shared/components/container";
import Mesh from "@/shared/components/mesh-gradient";
import HeroGetStartedButton from "./HeroGetStartedButton";
import DeveloperTerminalClient from "./DeveloperTerminalClient";
import {
  DEVELOPER_FEATURES,
  DEVELOPER_SECTION,
} from "../data/developer-section.data";

export default function ForDevelopersSection() {
  return (
    <section
      aria-labelledby="developers-heading"
      className="relative isolate overflow-hidden bg-black py-16 md:py-24"
    >
      {/* Paper MeshGradient shader background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <Mesh
          speed={1}
          scale={1}
          distortion={1}
          swirl={0.2}
          colors={["#55D2A2", "#000000"]}
          className="h-full w-full opacity-50"
        />
      </div>
      <Container className="flex flex-col items-center gap-10 md:gap-12">
        <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2
            id="developers-heading"
            className="flex flex-wrap items-center justify-center gap-x-3 text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-white sm:text-[36px] md:text-[44px]"
          >
            {DEVELOPER_SECTION.titleLead}
            <span className="text-neev-green">{DEVELOPER_SECTION.titleCode}</span>
          </h2>
          <p className="text-[16px] leading-[150%] tracking-[-0.01em] text-white/70">
            {DEVELOPER_SECTION.subtitle}
          </p>
        </div>

        <ul className="grid w-full list-none gap-8 text-center sm:grid-cols-3">
          {DEVELOPER_FEATURES.map((feature) => (
            <li key={feature.title} className="flex flex-col gap-2">
              <h3 className="text-[18px] font-semibold text-white md:text-[20px]">
                {feature.title}
              </h3>
              <p className="text-[14px] leading-[150%] text-white/60">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>

        <HeroGetStartedButton
          label={DEVELOPER_SECTION.ctaLabel}
          href={DEVELOPER_SECTION.ctaHref}
        />

        <DeveloperTerminalClient />
      </Container>
    </section>
  );
}
