import Container from "@/shared/components/container";
import Mesh from "@/shared/components/mesh-gradient";
import HeroGetStartedButton from "./HeroGetStartedButton";
import DeveloperTerminalClient from "./DeveloperTerminalClient";
import {
  DEVELOPER_FEATURES,
  DEVELOPER_SECTION,
} from "../data/developer-section.data";

export default function ForDevelopersSection() {
  const brandName = "NeevCloud";
  const titleRest = DEVELOPER_SECTION.titleLead.replace(brandName, "").trim();

  return (
    <section
      aria-labelledby="developers-heading"
      className="relative isolate overflow-hidden bg-black py-[34px] md:py-24"
    >
      {/* Paper MeshGradient shader — 800×800, pinned top-right, with fade overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Mobile: mesh spans the whole section from the very top; desktop keeps
            the Paper 800px top-right placement. */}
        <div className="absolute -right-px -top-px h-full w-full sm:h-[800px] sm:max-h-full sm:w-[800px] sm:max-w-full">
          {/* rotation only from sm: rotating the tall mobile box swings the
              gradient away from the section top (black band) */}
          <Mesh
            speed={1}
            scale={1}
            distortion={1}
            swirl={0.2}
            colors={["#55D2A2", "#000000"]}
            className="h-full w-full opacity-50 sm:rotate-[270deg]"
          />
          {/* fade to black — bottom + left */}
          <div className="absolute inset-x-0 bottom-0 h-[252px] bg-gradient-to-b from-transparent to-black" />
          <div className="absolute inset-y-0 left-0 w-[120px] bg-gradient-to-l from-transparent to-black sm:w-[346px]" />
        </div>
      </div>
      <Container className="flex flex-col items-center gap-10 md:gap-12">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2
            id="developers-heading"
            className="text-[28px] font-normal leading-[120%] tracking-[-0.01em] text-white sm:text-[36px] md:text-[44px]"
          >
            <span className="block">
              <span className="text-neev-green">{brandName}</span>
              {titleRest ? ` ${titleRest}` : ""}
            </span>
            <span className="block text-white">
              {DEVELOPER_SECTION.titleCode}
            </span>
          </h2>
          <p className="max-w-2xl text-[16px] leading-[150%] tracking-[-0.01em] text-white/70">
            {DEVELOPER_SECTION.subtitle}
          </p>
        </div>

        <ul className="grid w-full list-none gap-4 text-center sm:grid-cols-3">
          {DEVELOPER_FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col items-center justify-center gap-2 rounded-md border border-white/[0.06] bg-black/20 p-4"
            >
              <h3 className="text-[20px] font-medium leading-[120%] text-white">
                {feature.title}
              </h3>
              <p className="text-[14px] font-normal leading-[142%] text-white/70">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>

        <HeroGetStartedButton
          target="_self"
          label={DEVELOPER_SECTION.ctaLabel}
          href={DEVELOPER_SECTION.ctaHref}
        />

        <DeveloperTerminalClient />
      </Container>
    </section>
  );
}
