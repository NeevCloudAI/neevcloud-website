"use client";

import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

const SCRIPT_ID = "hubspot-forms-v2";
const SCRIPT_SRC = "https://js-na2.hsforms.net/forms/embed/v2.js";

export default function GpuHeroHubspotPlaceholder() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    let mounted = false;

    const mountForm = () => {
      if (!active || mounted || !window.hbspt?.forms) return;

      mounted = true;
      window.hbspt.forms.create({
        portalId: "46035440",
        formId: "4e273072-c8f6-4a87-aa23-b0146fad2c9d",
        region: "na2",
        target: "#hubspot-form",
      });
      setIsLoading(false);
    };

    mountForm();

    const script =
      document.getElementById(SCRIPT_ID) ??
      (() => {
        const el = document.createElement("script");
        el.id = SCRIPT_ID;
        el.src = SCRIPT_SRC;
        el.async = true;
        document.body.appendChild(el);
        return el;
      })();

    script.addEventListener("load", mountForm, { once: true });
    script.addEventListener("error", () => active && setIsLoading(false), {
      once: true,
    });
    mountForm();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="relative min-h-[320px] bg-linear-to-r from-[#59D8A7] to-[#022C3C] p-4 md:p-10 rounded-md">
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-busy="true"
        >
          <Loader
            size={32}
            className="animate-spin text-primary"
            aria-hidden="true"
          />
          <span className="sr-only">Loading form</span>
        </div>
      )}
      <div id="hubspot-form" />
    </div>
  );
}
