import { Button, Divider, Text } from "@/shared/ui-lib";
import Image from "next/image";
import type { ModelCardData } from "@/features/serverless-inference/data/models-section-types";

type ModelCardProps = {
  model: ModelCardData;
};

const ModelCard = ({ model }: ModelCardProps) => {
  const { name, provider, icon, tags, context, price, params } = model;

  return (
    <article className="relative bg-gray-10 rounded-md p-4 md:p-8 flex flex-col gap-4 overflow-hidden">
      <div className="flex gap-4">
        <div className="p-3 bg-white rounded-md h-fit">
          <Image src={icon} alt={`${name} logo`} width={30} height={30} />
        </div>
        <div className="flex flex-col justify-between">
          <Text as="h4" weight="semibold">
            {name}
          </Text>
          <Text>{provider}</Text>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Text
            key={tag.name}
            className={`bg-${tag.color} px-4 py-1 rounded-full`}
          >
            {tag.name}
          </Text>
        ))}
      </div>

      <div className="bg-white rounded-md py-4 px-6 flex justify-between gap-4">
        <div className="flex flex-col items-center justify-between">
          <Text textColor="blue-40">CONTEXT</Text>
          <Text>{context}</Text>
        </div>
        <Divider className="bg-gray-60 h-10" />
        <div className="flex flex-col items-center justify-between">
          <Text textColor="blue-40">PRICE/1M</Text>
          <Text textColor="primary">{price}</Text>
        </div>
        <Divider className="bg-gray-60 h-10" />
        <div className="flex flex-col items-center justify-between">
          <Text textColor="blue-40">PARAMS</Text>
          <Text>{params}</Text>
        </div>
      </div>

      <div className="flex gap-4 justify-between">
        <Button>Try in Playground</Button>
        <Button variant="outline" textColor="black" weight="semibold">
          Read Documentation
        </Button>
      </div>

      <div className="absolute bottom-0 right-0 opacity-80 pointer-events-none">
        <Image
          src="/icons/green-logo.svg"
          alt=""
          aria-hidden="true"
          width={100}
          height={100}
        />
      </div>
    </article>
  );
};

export default ModelCard;
