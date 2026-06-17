"use client";

import { useState } from "react";
import { Button, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import AiSupercloudMegaMenu from "./mega-menus/ai-supercloud-mega-menu";

const megaMenuPanelClassName = cn(
  "absolute left-1/2 top-full z-100",
  "w-full max-w-[min(900px,calc(100vw-2rem))] 2xl:max-w-[min(1200px,calc(100vw-2rem))]",
  "-translate-x-1/2",
  "rounded-b-md bg-white shadow-md",
  "transition-opacity duration-150"
);

function shouldCloseMegaMenuOnClick(target: EventTarget | null): boolean {
  return Boolean(
    target instanceof Element && target.closest("a, button[type='button']")
  );
}

export default function AiSupercloudDesktopTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group ml-2 hidden md:ml-12 md:block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocusCapture={() => setIsOpen(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsOpen(false);
        }
      }}
    >
      <div className="relative flex h-20 items-center after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out after:content-[''] group-hover:after:scale-x-100 group-focus-within:after:scale-x-100">
        <Button variant="ghost" textColor="black" spacing="none">
          <Text weight="semibold" className="whitespace-nowrap">
            AI SuperCloud
          </Text>
        </Button>
      </div>
      <div
        className={cn(
          megaMenuPanelClassName,
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        role="presentation"
        onClickCapture={(event) => {
          if (shouldCloseMegaMenuOnClick(event.target)) {
            setIsOpen(false);
          }
        }}
      >
        <AiSupercloudMegaMenu />
      </div>
    </div>
  );
}
