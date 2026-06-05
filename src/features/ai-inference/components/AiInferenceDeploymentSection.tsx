import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";

type AiInferenceDeploymentItem = {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  codeSnippet?: string;
};

const AI_INFERENCE_DEPLOYMENT_SECTION_ITEMS: AiInferenceDeploymentItem[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Upload Model Weights",
    description:
      "Upload your fine-tuned weights to storage or reference a HuggingFace model ID.",
    codeSnippet: [
      "# Upload to NeevCloud storage",
      "neevcloud models upload \\",
      "  --model-path ./my-finetuned-model \\",
      "  --name my-custom-llm",
    ].join("\n"),
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Launch Instance",
    description: "Choose flavor, OS, volume type, network, and SSH key.",
    codeSnippet: [
      "# Deploy inference endpoint",
      "neevcloud inference create \\",
      "  --model my-custom-llm \\",
      "  --gpu h100 \\",
      "  --replicas 2 \\",
      "  --autoscale-max 8",
    ].join("\n"),
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Connect via SSH",
    description:
      "Access your instance using the public IP and SSH key. Windows instances support RDP.",
    codeSnippet: [
      "from openai import OpenAI",
      "client = OpenAI(",
      "api_key='nc-...',",
      "base_url='https://your-model.neevcloud.ai/v1'",
      ")",
      "response = client.chat.completions.create(",
      "model='my-custom-llm',",
      "messages=[{'role': 'user', 'content': 'Hello!'}]",
      ")",
    ].join("\n"),
  },
] as const;

type AiInferenceDeploymentItemProps = {
  item: AiInferenceDeploymentItem;
};

const AiInferenceDeploymentItem = ({
  item,
}: AiInferenceDeploymentItemProps) => {
  return (
    <article className="flex h-full flex-col rounded-md bg-black-80 p-4 md:p-9 border border-black-30">
      <div className="flex items-start justify-between">
        <Text
          as="h3"
          className="mt-2.5 md:max-w-45"
          weight="semibold"
          textColor="white"
        >
          {item.title}
        </Text>
        <Text
          as="h1"
          className="text-[3rem] md:text-[7rem]"
          fontFamily="spaceMono"
          textColor="primary-180"
          weight="normal"
        >
          {item.stepNumber}
        </Text>
      </div>
      <Text
        as="h6"
        textColor="gray-10"
        className="mt-5 md:mt-11.5"
        weight="regular"
      >
        {item.description}
      </Text>
      <div className="mt-5 md:mt-8.75 border border-black-5 rounded-md">
        <div className="flex items-center justify-between gap-2 px-4 py-3 bg-black-100 rounded-t-md border-b border-black-5">
          <div className="flex items-center gap-1" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <Text textColor="gray-75" fontFamily="spaceMono">
            bash
          </Text>
        </div>
        <pre className="md:h-50 whitespace-pre-wrap p-4 font-space-mono text-xs text-primary-190 bg-black rounded-b-md">
          {item.codeSnippet}
        </pre>
      </div>
    </article>
  );
};

const AiInferenceDeploymentSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-25"
      aria-labelledby="cpu-pricing-deployment-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="cpu-pricing-deployment-section-heading"
          textColor="white"
          align="center"
          className="max-w-4xl"
        >
          Deploy in
          <Text as="span" variant="h2" textColor="primary">
            Minutes
          </Text>
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 md:gap-7.5 mt-4 md:grid-cols-3 md:mt-12.5">
          {AI_INFERENCE_DEPLOYMENT_SECTION_ITEMS.map((item) => (
            <li key={item.id}>
              <AiInferenceDeploymentItem item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default AiInferenceDeploymentSection;
