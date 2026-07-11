import Image from "next/image";
import {
  RiCheckLine,
  RiErrorWarningLine,
  RiPencilLine,
} from "@remixicon/react";
import {
  LEGACY_CLOUD_ITEMS,
  NEEVCLOUD_ADVANTAGE_ITEMS,
} from "../data/why-neevcloud.data";

function WarningIcon() {
  return (
    <RiErrorWarningLine
      size={16}
      aria-hidden
      className="shrink-0 text-[#C62A12]"
    />
  );
}

function CheckIcon() {
  return (
    <RiCheckLine
      size={16}
      aria-hidden
      className="shrink-0 text-[#00A78B]"
    />
  );
}

function NeevCloudMark() {
  return (
    <span
      aria-hidden
      className="relative grid size-8 shrink-0 place-items-center bg-[#58D7A7]"
    >
      <svg
        viewBox="0 0 21.3 21.3"
        width="21"
        height="21"
        fill="none"
        className="size-[21px]"
      >
        <path
          d="M14.992 3.959V.31c0-.171-.139-.31-.31-.31H6.615c-.171 0-.31.139-.31.31v5.672c0 .151-.106.281-.253.312L.246 7.505A.31.31 0 0 0 0 7.808v13.184c0 .171.139.31.31.31h5.691c.171 0 .309-.139.309-.31V6.54c0-.151.106-.281.253-.312l8.038-1.695a.318.318 0 0 1 .384.312v16.147c0 .171.139.31.31.31h5.691c.171 0 .309-.139.309-.31V3.418a.31.31 0 0 0-.373-.303l-5.546 1.156a.318.318 0 0 1-.384-.312Z"
          fill="black"
        />
      </svg>
    </span>
  );
}

export default function WhyComparisonCards() {
  return (
    <div className="flex flex-col items-start overflow-hidden lg:flex-row">
      {/* Legacy Cloud */}
      <div className="flex w-full min-w-0 flex-col items-start gap-6 overflow-hidden bg-white px-5 py-5 lg:w-auto lg:flex-1 lg:basis-[670px] lg:py-10">
        <div className="flex items-center gap-3">
          <span className="grid size-8 shrink-0 place-items-center bg-[#C1C2C7] text-[#606060]">
            <RiPencilLine size={16} aria-hidden />
          </span>
          <h3 className="text-[20px] font-medium capitalize leading-[120%] tracking-[-0.01em] text-black">
            Legacy Cloud
          </h3>
        </div>
        <ul className="grid w-full list-none grid-cols-1 gap-x-3 gap-y-3 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3">
          {LEGACY_CLOUD_ITEMS.map((item) => (
            <li
              key={item}
              className="flex min-w-0 items-center gap-2 text-[14px] leading-[142%] tracking-[-0.02em] text-black"
            >
              <WarningIcon />
              {item}
            </li>
          ))}
        </ul>
        <div className="relative h-[150px] w-full shrink-0 overflow-hidden bg-[#EFEFEF] lg:mt-auto lg:h-[200px]">
          <Image
            src="/images/home/why/legacy-cloud-lock.jpg"
            alt="Legacy cloud infrastructure locked behind vendor walls"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* The NeevCloud Advantage — dark card with a teal wash from the top
          right and the glowing chip-stack render in the lower half */}
      {/* Mobile height mirrors the Legacy card's rendered height; the chip is
          absolutely anchored so the card can match without shrinking it. */}
      <div className="relative flex h-[418px] w-full min-w-0 flex-col items-start gap-6 overflow-hidden bg-black bg-[linear-gradient(233deg,#2E6B5A_-5%,rgba(11,15,14,0)_48%)] px-5 py-5 lg:h-[444px] lg:py-10 lg:w-auto lg:flex-1 lg:basis-[670px]">
        <div className="relative z-10 flex items-center gap-3">
          <NeevCloudMark />
          <h3 className="text-[20px] font-medium capitalize leading-[120%] tracking-[-0.01em] text-white">
            The NeevCloud Advantage
          </h3>
        </div>
        <ul className="relative z-10 grid w-full list-none grid-cols-1 gap-x-3 gap-y-3 sm:grid-flow-col sm:grid-cols-[max-content_max-content] sm:grid-rows-3 sm:justify-between">
          {NEEVCLOUD_ADVANTAGE_ITEMS.map((item) => (
            <li
              key={item}
              className="flex min-w-0 items-center gap-2 text-[14px] leading-[142%] tracking-[-0.02em] text-white md:whitespace-nowrap"
            >
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
        {/* glowing chip stack, centred in the lower area */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/why/advantage-chip.png"
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute bottom-0 left-1/2 w-[85%] max-w-[380px] -translate-x-1/2 translate-y-[12%] select-none lg:w-[63%] lg:max-w-none lg:translate-y-[15%]"
        />
      </div>
    </div>
  );
}
