import Link from "next/link";

type HeroGetStartedButtonProps = {
  label: string;
  href: string;
};

// Teal gradient CTA: shine-sweep on hover + four "targeting bracket" corners
// that spread out on hover (rre-style interaction).
export default function HeroGetStartedButton({
  label,
  href,
}: HeroGetStartedButtonProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group relative inline-flex w-fit p-1.5"
    >
      <span
        className="relative block overflow-hidden px-6 py-2.5 text-sm font-medium tracking-[-0.02em] text-white transition-all duration-300 group-hover:scale-[1.03]"
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
