import Link from "next/link";
import {
  RiClaudeFill,
  RiGeminiFill,
  RiOpenaiFill,
  RiPerplexityFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import Container from "./container";
import { FOOTER, FOOTER_COLUMNS } from "../data/footer.data";
import { FOOTER_SOCIAL_LINKS } from "../data/footer-data";
import type { FooterCtaContent } from "../data/footer-types";
import { Text } from "../ui-lib";

// Prefilled "explore NeevCloud with your preferred LLM" prompt (V7-style).
const LLM_PROMPT = encodeURIComponent(
  "Tell me about NeevCloud (https://neevcloud.com), India's AI SuperCloud. What GPU infrastructure, inference services, and AI cloud products do they offer, and how could I use them for my AI workloads?",
);

const LLM_LINKS = [
  {
    label: "Ask Claude",
    href: `https://claude.ai/new?q=${LLM_PROMPT}`,
    icon: RiClaudeFill,
  },
  {
    label: "Ask ChatGPT",
    href: `https://chatgpt.com/?q=${LLM_PROMPT}`,
    icon: RiOpenaiFill,
  },
  {
    label: "Ask Perplexity",
    href: `https://www.perplexity.ai/search?q=${LLM_PROMPT}`,
    icon: RiPerplexityFill,
  },
  {
    label: "Ask Gemini",
    href: `https://gemini.google.com/app?q=${LLM_PROMPT}`,
    icon: RiGeminiFill,
  },
];

type CtaTarget = "_blank" | "_self" | "_parent" | "_top";

// Highlights the first "NeevCloud" occurrence in brand green; renders plain
// text untouched when the string doesn't contain it.
function renderHighlightedTitle(text: string) {
  const idx = text.indexOf("NeevCloud");
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <Text as="span" textColor={"primary"}>
        NeevCloud
      </Text>
      {text.slice(idx + "NeevCloud".length)}
    </>
  );
}

function BracketButton({
  label,
  href,
  target,
}: {
  label: string;
  href: string;
  target?: CtaTarget;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      aria-label={label}
      className="group relative inline-flex w-fit p-1.5"
    >
      <span
        className="relative block overflow-hidden px-6 py-2.5 text-sm font-medium tracking-[-0.02em] text-white transition-transform duration-300 group-hover:scale-[1.03]"
        style={{
          backgroundImage:
            "linear-gradient(126deg, #00A78B 10%, #00A78B 69%, #59D8A7 98%)",
        }}
      >
        <span className="relative z-10 text-[14px]">{label}</span>
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[130%]"
        />
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-neev-green transition-all duration-300 group-hover:-left-1 group-hover:-top-1"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-2.5 w-2.5 border-r-2 border-t-2 border-neev-green transition-all duration-300 group-hover:-right-1 group-hover:-top-1"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-neev-green transition-all duration-300 group-hover:-bottom-1 group-hover:-right-1"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-neev-green transition-all duration-300 group-hover:-bottom-1 group-hover:-left-1"
      />
    </Link>
  );
}

function SecondaryButton({
  label,
  href,
  target,
}: {
  label: string;
  href: string;
  target?: CtaTarget;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      aria-label={label}
      className="inline-flex w-fit items-center justify-center border border-white/15 px-6 py-2.5 text-[14px] font-medium text-white/80 transition-colors hover:border-white/35 hover:text-white"
    >
      {label}
    </Link>
  );
}

export default function Footer({
  title,
  description,
  primaryCta,
  primaryCtaRoute,
  primaryCtaTarget,
  secondaryCta,
  secondaryCtaRoute,
  secondaryCtaTarget,
  className,
}: FooterCtaContent = {}) {
  return (
    <footer className="relative overflow-hidden bg-black">
      <Container
        className={cn(
          "relative z-10 flex flex-col gap-14 pb-8 pt-16 md:gap-20 md:pt-20",
          className,
        )}
      >
        {/* CTA band */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[32px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-white md:text-[48px]">
            {renderHighlightedTitle(title ?? FOOTER.ctaHeading)}
          </h2>
          <p className="max-w-2xl text-[16px] leading-[132%] tracking-[-0.02em] text-white/70 md:text-[20px]">
            {description ?? FOOTER.ctaSubtext}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <BracketButton
              label={primaryCta ?? FOOTER.ctaLabel}
              href={primaryCtaRoute ?? FOOTER.ctaHref}
              target={primaryCtaTarget ?? FOOTER.ctaTarget}
            />
            {secondaryCta && (
              <SecondaryButton
                label={secondaryCta}
                href={secondaryCtaRoute ?? ""}
                target={secondaryCtaTarget}
              />
            )}
          </div>
        </div>

        {/* Link columns */}
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-7"
        >
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-[14px] font-medium text-white/40">
                {column.title}
              </h3>
              <ul className="flex list-none flex-col gap-3">
                {column.links.map((item) => (
                  <li key={item.label}>
                    {item.href === "#" ? (
                      <span className="text-[14px] leading-[142%] text-white/70">
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-[14px] leading-[142%] text-white/70 transition-colors hover:text-neev-green"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-[14px] font-medium text-white/40">
                Summarize what NeevCloud does
              </h3>
              <div className="flex flex-wrap gap-2">
                {LLM_LINKS.map(({ label, href, icon: LlmIcon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-white/15 px-4 py-3 text-[15px] text-white/60 transition-colors hover:border-white/35 hover:text-white"
                  >
                    <LlmIcon size={20} aria-hidden />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[14px] font-medium text-white/40">
                Follow Us
              </h3>
              <ul className="flex list-none items-center gap-3">
                {FOOTER_SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group grid size-11 place-items-center border border-white/15 transition-colors hover:border-white/35"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={social.icon}
                        alt=""
                        aria-hidden
                        className="size-5 opacity-60 transition-opacity group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certification badges — the same six as the live site footer */}
          <ul className="flex list-none flex-wrap items-center gap-4 self-start lg:flex-nowrap lg:self-end">
            {[
              ["neevcloud_soc_light.svg", "AICPA SOC 2"],
              ["iso-9001-footer-neevcloud-icon-white.svg", "ISO 9001"],
              ["iso-27001-footer-neevcloud-icon-white.svg", "ISO 27001"],
              ["iso-27017-footer-neevcloud-icon-white.svg", "ISO 27017"],
              ["iso-20000-1-footer-neevcloud-icon-white.svg", "ISO 20000-1"],
              ["iso-27018-footer-neevcloud-icon-white.svg", "ISO 27018"],
            ].map(([file, label]) => (
              <li key={file}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/icons/certs/${file}`}
                  alt={`${label} certification`}
                  loading="lazy"
                  className="h-[62px] w-auto"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Giant subtle wordmark watermark, clipped at the bottom edge, with a
            teal glow that drifts through the letters */}
        <div
          aria-hidden
          className="pointer-events-none relative h-[110px] select-none overflow-hidden sm:h-[160px] lg:h-[220px]"
        >
          <div
            className="absolute inset-x-0 top-0 overflow-hidden bg-white/[0.06]"
            style={{
              aspectRatio: "1440 / 270",
              maskImage: "url(/icons/logo-white-with-name.svg)",
              maskRepeat: "no-repeat",
              maskSize: "100% auto",
              maskPosition: "top center",
              WebkitMaskImage: "url(/icons/logo-white-with-name.svg)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% auto",
              WebkitMaskPosition: "top center",
            }}
          >
            <div className="footer-watermark-glow absolute -top-1/2 h-[200%] w-[45%] rounded-full bg-[#00A78B]/60 blur-[70px]" />
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-white/50">{FOOTER.copyright}</p>
          <ul className="flex list-none flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER.legal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[13px] text-white/50 underline underline-offset-4 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
