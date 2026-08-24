"use client";

import { Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  AI_SUPERCLUSTERS_DURATIONS,
  AI_SUPERCLUSTERS_GPU_TYPES,
  AI_SUPERCLUSTERS_INTERCONNECTS,
  AI_SUPERCLUSTERS_STORAGE_OPTIONS,
} from "../../data/configurator.data";
import type { AiSuperclustersConfig } from "../../types/ai-superclusters.types";
import { getGpuTotal } from "../../utils/ai-superclusters-configurator-utils";

const SCRIPT_ID = "hubspot-forms-v2";
const SCRIPT_SRC = "https://js-na2.hsforms.net/forms/embed/v2.js";
const FORM_TARGET_ID = "ai-superclusters-hubspot-form";
const PORTAL_ID = "46035440";
const FORM_ID = "8ab662a3-3491-4665-b9ec-7ceaafd3341f";
const FIND_FORM_MAX_ATTEMPTS = 20;
const FIND_FORM_RETRY_MS = 250;

function setDropdown(form: HTMLFormElement, name: string, matchValue: string) {
  const select = form.querySelector<HTMLSelectElement>(`select[name="${name}"]`);
  if (!select) return;

  const target = matchValue.toLowerCase().trim();
  const match = Array.from(select.options).find((option) => {
    const value = option.value.toLowerCase().trim();
    const text = option.text.toLowerCase().trim();
    return (
      value === target ||
      text === target ||
      value.includes(target) ||
      text.includes(target) ||
      target.includes(value)
    );
  });
  if (!match) return;

  select.value = match.value;
  select.dispatchEvent(new Event("change", { bubbles: true }));
}

function setExclusiveCheckbox(
  form: HTMLFormElement,
  groupName: string,
  matchValue: string,
) {
  const target = matchValue.toLowerCase().trim();

  form
    .querySelectorAll<HTMLInputElement>(
      `input[type="checkbox"][name="${groupName}"]`,
    )
    .forEach((checkbox) => {
      const value = checkbox.value.toLowerCase().trim();
      const shouldCheck =
        value === target || value.includes(target) || target.includes(value);

      if (checkbox.checked !== shouldCheck) {
        checkbox.checked = shouldCheck;
        checkbox.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });
}

function applyConfigToForm(form: HTMLFormElement, config: AiSuperclustersConfig) {
  const gpuType = AI_SUPERCLUSTERS_GPU_TYPES.find((gpu) => gpu.id === config.gpuId);
  const interconnect = AI_SUPERCLUSTERS_INTERCONNECTS.find(
    (option) => option.id === config.interconnectId,
  );
  const storage = AI_SUPERCLUSTERS_STORAGE_OPTIONS.find(
    (option) => option.id === config.storageId,
  );
  const duration = AI_SUPERCLUSTERS_DURATIONS.find(
    (option) => option.id === config.durationId,
  );
  if (!gpuType || !interconnect || !storage || !duration) return;

  setDropdown(form, "which_gpu_you_looking_for", gpuType.label);
  setDropdown(form, "expected_number_of_gpu", String(getGpuTotal(config)));
  setExclusiveCheckbox(form, "compute_interconnect", interconnect.hubspotValue);
  setExclusiveCheckbox(form, "storage_interconnect", interconnect.hubspotValue);
  setExclusiveCheckbox(form, "storage_systems", storage.hubspotValue);
  setDropdown(form, "commitment", duration.hubspotValue);
}

type AiSuperclustersHubspotFormProps = {
  config: AiSuperclustersConfig;
};

export default function AiSuperclustersHubspotForm({
  config,
}: AiSuperclustersHubspotFormProps) {
  const [isLoading, setIsLoading] = useState(true);
  const formElRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    let active = true;
    let mounted = false;
    let attempts = 0;

    const findForm = () => {
      const form = document.querySelector<HTMLFormElement>(
        `#${FORM_TARGET_ID} form`,
      );

      if (form) {
        formElRef.current = form;
        applyConfigToForm(form, config);
        setIsLoading(false);
        return;
      }

      if (!active || attempts >= FIND_FORM_MAX_ATTEMPTS) return;
      attempts += 1;
      setTimeout(findForm, FIND_FORM_RETRY_MS);
    };

    const mountForm = () => {
      if (!active || mounted || !window.hbspt?.forms) return;

      mounted = true;
      window.hbspt.forms.create({
        portalId: PORTAL_ID,
        formId: FORM_ID,
        region: "na2",
        target: `#${FORM_TARGET_ID}`,
      });
      findForm();
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

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (formElRef.current) applyConfigToForm(formElRef.current, config);
  }, [config]);

  return (
    <div className="relative min-h-[220px]">
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center gap-2"
          aria-busy="true"
        >
          <Loader size={20} className="animate-spin text-primary" aria-hidden="true" />
          <span className="text-xs text-white/60">Loading form…</span>
        </div>
      )}
      <div id={FORM_TARGET_ID} />
    </div>
  );
}
