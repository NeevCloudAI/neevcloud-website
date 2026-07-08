import Image from "next/image";
import {
  LEGACY_CLOUD_ITEMS,
  NEEVCLOUD_ADVANTAGE_ITEMS,
} from "../data/why-neevcloud.data";

function WarningIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      aria-hidden
      className="mt-0.5 shrink-0"
    >
      <path
        d="M8 2.2l6 10.8H2L8 2.2z"
        stroke="#FE4D47"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M8 6.6v3M8 11.4v.02"
        stroke="#FE4D47"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      aria-hidden
      className="mt-0.5 shrink-0"
    >
      <path
        d="M3 8.5l3.2 3.2L13 5"
        stroke="#59D8A7"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyComparisonCards() {
  return (
    <div className="grid overflow-hidden rounded-2xl border border-cloud-gray lg:grid-cols-2">
      {/* Legacy Cloud */}
      <div className="flex flex-col gap-6 bg-white p-6 md:p-8">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-md bg-cloud-gray text-gray-04">
            <svg viewBox="0 0 16 16" width="15" height="15" fill="none">
              <path
                d="M10.5 2.5l3 3-8 8H2.5v-3l8-8z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="text-[20px] font-semibold text-black">Legacy Cloud</h3>
        </div>
        <ul className="grid list-none grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {LEGACY_CLOUD_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-[14px] leading-6 text-gray-04"
            >
              <WarningIcon />
              {item}
            </li>
          ))}
        </ul>
        <div className="relative mt-auto h-40 overflow-hidden rounded-lg md:h-48">
          <Image
            src="/images/home/why/legacy-cloud.png"
            alt="Legacy cloud infrastructure locked behind vendor walls"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* The NeevCloud Advantage */}
      <div className="flex flex-col gap-6 bg-black p-6 md:p-8">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/green-logo.svg"
            alt=""
            aria-hidden
            width={32}
            height={32}
            className="size-8"
          />
          <h3 className="text-[20px] font-semibold text-white">
            The NeevCloud Advantage
          </h3>
        </div>
        <ul className="grid list-none grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {NEEVCLOUD_ADVANTAGE_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-[14px] leading-6 text-white/80"
            >
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
