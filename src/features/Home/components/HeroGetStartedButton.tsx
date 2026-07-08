import Link from "next/link";

type HeroGetStartedButtonProps = {
  label: string;
  href: string;
};

// Teal gradient CTA framed by four "targeting bracket" corner marks.
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
        className="block px-6 py-2.5 text-sm font-medium tracking-[-0.02em] text-white transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(89,216,167,0.55)]"
        style={{
          backgroundImage:
            "linear-gradient(126deg, #00A78B 10%, #00A78B 69%, #59D8A7 98%)",
        }}
      >
        {label}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-neev-green"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-2.5 w-2.5 border-r-2 border-t-2 border-neev-green"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-neev-green"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-neev-green"
      />
    </Link>
  );
}
