"use client";

import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Text } from "@/shared/ui-lib";

const SCRIPT_ID = "hubspot-forms-v2";
const SCRIPT_SRC = "https://js-na2.hsforms.net/forms/embed/v2.js";
const FORM_TARGET_ID = "contact-hubspot-form";

const ContactConversationForm = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    let mounted = false;

    const mountForm = () => {
      if (!active || mounted || !window.hbspt?.forms) return;

      mounted = true;
      window.hbspt.forms.create({
        portalId: "46035440",
        formId: "4c987add-d98c-4ea0-865d-f3e486a894e1",
        region: "na2",
        target: `#${FORM_TARGET_ID}`,
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
        el.charset = "utf-8";
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
    <div
      className="relative flex md:flex-2 flex-col border border-primary-105 bg-white p-4 md:p-10"
      aria-labelledby="contact-conversation-form-heading"
    >
      <Text as="h3" id="contact-conversation-form-heading" className="sr-only">
        Contact form
      </Text>
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
      <div id={FORM_TARGET_ID} />
    </div>
  );
};

export default ContactConversationForm;
