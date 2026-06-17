"use client";

import { useCallback, useState } from "react";
import { Copy } from "lucide-react";
import { Button, Text } from "@/shared/ui-lib";
import type { GettingStartedCodeBlockProps } from "../../types/getting-started-section.types";

const GettingStartedCodeBlock = ({
  header,
  children,
  copyText,
}: GettingStartedCodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [copyText]);

  return (
    <div className="rounded-md border border-gray-80/24 bg-gray-80/18">
      <div className="flex items-center justify-between gap-2 border-b border-white/12 p-4 md:p-5">
        <Text as="small" textColor="gray-03" fontFamily="spaceMono">
          {header}
        </Text>
        <Button
          variant="ghost"
          size="none"
          spacing="none"
          onClick={handleCopy}
          aria-label={copied ? "Code copied" : "Copy code"}
        >
          <Copy size={14} aria-hidden="true" />
        </Button>
      </div>
      <div className="p-3.75 md:p-5">{children}</div>
    </div>
  );
};

export default GettingStartedCodeBlock;
