import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { FOOTER_2026, FOOTER_COLUMNS } from "../data/footer-2026.data";

// Teal gradient CTA matching the hero button: shine-sweep on hover + four
// "targeting bracket" corners that spread out on hover. No drop shadow.
function BracketButton({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
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
        <span className="relative z-10">{label}</span>
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

export default function Footer2026() {
  return (
    <footer className="relative overflow-hidden bg-black">
      <Container className="relative z-10 flex flex-col gap-14 pb-8 pt-16 md:gap-20 md:pt-20">
        {/* CTA band */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[32px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-white md:text-[48px]">
            {FOOTER_2026.ctaHeading}
          </h2>
          <p className="max-w-2xl text-[16px] leading-[132%] tracking-[-0.02em] text-white/70 md:text-[20px]">
            {FOOTER_2026.ctaSubtext}
          </p>
          <BracketButton
            label={FOOTER_2026.ctaLabel}
            href={FOOTER_2026.ctaHref}
          />
        </div>

        {/* Link columns */}
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
        >
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-[14px] font-medium text-white/40">
                {column.title}
              </h3>
              <ul className="flex list-none flex-col gap-3">
                {column.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] leading-[142%] text-white/70 transition-colors hover:text-neev-green"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Giant subtle wordmark watermark, clipped at the bottom edge */}
        <div
          aria-hidden
          className="pointer-events-none relative h-[110px] select-none overflow-hidden sm:h-[160px] lg:h-[220px]"
        >
          <Image
            src="/icons/logo-white-with-name.svg"
            alt=""
            width={1440}
            height={270}
            className="absolute inset-x-0 top-0 w-full opacity-[0.06]"
          />
        </div>

        {/* Bottom legal row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-white/50">{FOOTER_2026.copyright}</p>
          <ul className="flex list-none flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_2026.legal.map((item) => (
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
