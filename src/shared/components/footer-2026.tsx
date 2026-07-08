import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { FOOTER_2026, FOOTER_COLUMNS } from "../data/footer-2026.data";

function BracketButton({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group relative inline-flex w-fit p-1.5"
    >
      <span
        className="block px-6 py-2.5 text-sm font-medium tracking-[-0.02em] text-white transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(89,216,167,0.55)]"
        style={{
          backgroundImage:
            "linear-gradient(126deg, #00A78B 10%, #00A78B 69%, #59D8A7 98%)",
        }}
      >
        {label}
      </span>
      <span className="pointer-events-none absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-neev-green" />
      <span className="pointer-events-none absolute right-0 top-0 h-2.5 w-2.5 border-r-2 border-t-2 border-neev-green" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-neev-green" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-neev-green" />
    </Link>
  );
}

export default function Footer2026() {
  return (
    <footer className="bg-black">
      <Container className="flex flex-col gap-14 py-16 md:gap-20 md:py-20">
        {/* CTA band */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-3xl text-[32px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-white md:text-[56px]">
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
              <h3 className="text-[14px] font-medium text-white/50">
                {column.title}
              </h3>
              <ul className="flex list-none flex-col gap-3">
                {column.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] leading-[142%] text-white/80 transition-colors hover:text-neev-green"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Wordmark */}
        <div className="flex justify-center border-t border-white/10 pt-12">
          <Image
            src="/icons/logo-white-with-name.svg"
            alt="NeevCloud"
            width={480}
            height={90}
            className="h-auto w-full max-w-3xl opacity-90"
          />
        </div>
      </Container>
    </footer>
  );
}
