import { Text } from "@/shared/ui-lib";
import type { ReactNode } from "react";

export type NeedsFeatureCardProps = {
  title: string;
  description: string;
  footer?: ReactNode;
};

export function NeedsFeatureCard({
  title,
  description,
  footer,
}: NeedsFeatureCardProps) {
  return (
    <article className="rounded-md bg-gray-10 p-4 md:px-7.5 md:py-10">
      <Text as="h3" weight="semibold">
        {title}
      </Text>
      <Text as="h6" textColor="gray-85" className="mt-2.5">
        {description}
      </Text>
      {footer}
    </article>
  );
}

function CodeBlockWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 rounded-xl bg-black p-4 md:mt-9 md:px-7.5 md:py-5">
      {children}
    </div>
  );
}

export function NeedsFeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 list-inside list-disc space-y-2.5 marker:text-primary">
      {items.map((item) => (
        <li key={item} className="text-sm text-gray-90">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function NeedsFeatureTags({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <Text
          key={item}
          fontFamily="spaceMono"
          as="small"
          textColor="white"
          className="rounded-xl bg-primary px-2.5 py-0.75"
        >
          {item}
        </Text>
      ))}
    </div>
  );
}

export function GpuResourceCodeBlock() {
  return (
    <CodeBlockWrapper>
      <Text as="small" textColor="white" fontFamily="spaceMono">
        resources:
      </Text>
      <Text as="small" textColor="white" fontFamily="spaceMono">
        &nbsp;&nbsp;limits:
      </Text>
      <Text as="small" textColor="primary" fontFamily="spaceMono">
        &nbsp;&nbsp;&nbsp;nvidia.com/gpu:
        <Text
          as="span"
          variant="small"
          textColor="white"
          fontFamily="spaceMono"
        >
          1
          <Text
            as="span"
            variant="small"
            textColor="gray-75"
            fontFamily="spaceMono"
          >
            # Just works
          </Text>
        </Text>
      </Text>
    </CodeBlockWrapper>
  );
}

export function HelmDeployCodeBlock() {
  return (
    <CodeBlockWrapper>
      <Text as="small" textColor="primary" fontFamily="spaceMono">
        helm
        <Text
          as="span"
          variant="small"
          textColor="white"
          fontFamily="spaceMono"
        >
          install vllm neevcloud/vllm \
        </Text>
      </Text>
      <Text as="small" textColor="primary" fontFamily="spaceMono">
        &nbsp;&nbsp; --set
        <Text
          as="span"
          variant="small"
          textColor="white"
          fontFamily="spaceMono"
        >
          model=
        </Text>
        <Text
          as="span"
          variant="small"
          textColor="red-50"
          fontFamily="spaceMono"
        >
          llama-3-70b
        </Text>
      </Text>
    </CodeBlockWrapper>
  );
}
