import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  OFFERS_DEPLOYMENT_SECTION_ITEMS,
  type OffersDeploymentItem,
} from "../data/offers-deployment-section.data";

const OffersDeploymentItem = ({ item }: { item: OffersDeploymentItem }) => {
  return (
    <article className="flex h-full flex-col rounded-md bg-white p-4 md:p-9 border border-primary/60">
      <div className="flex items-center justify-between">
        <div>
          <Text as="small" textColor="primary" fontFamily="spaceMono">
            {item.stepLabel}
          </Text>
          <Text as="h3" className="mt-2.5" weight="semibold">
            {item.title}
          </Text>
        </div>
        <Text
          as="h1"
          className="text-[3rem] md:text-[7rem]"
          fontFamily="spaceMono"
          textColor="primary-85"
          weight="normal"
        >
          {item.stepNumber}
        </Text>
      </div>
      <Text
        as="h6"
        textColor="black/60"
        className="mt-5 md:mt-11.5"
        weight="regular"
      >
        {item.description}
      </Text>
      {item.listItems ? (
        <ul className="mt-5 md:mt-8.75 flex flex-col gap-3">
          {item.listItems.map((listItem) => (
            <li key={listItem} className="flex gap-2.5 rounded-md">
              <Text as="h6" textColor="primary" className="shrink-0">
                •
              </Text>
              <Text as="h6" textColor="black/60">
                {listItem}
              </Text>
            </li>
          ))}
        </ul>
      ) : (
        <pre className="mt-5 md:mt-8.75 flex gap-1 flex-col p-4 md:px-4.25 md:py-3 border border-primary rounded-md bg-primary/10">
          {item.codeSnippet?.map((snippet) => (
            <code
              key={snippet.code}
              className={`text-${snippet.textColor} text-xs`}
            >
              {snippet.code}
            </code>
          ))}
        </pre>
      )}
    </article>
  );
};

const OffersDeploymentSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="offers-deployment-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="offers-deployment-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Deploy in
          <Text as="span" variant="h2" textColor="primary">
            Three Simple Steps
          </Text>
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 md:gap-7.5 mt-4 md:grid-cols-3 md:mt-27.5">
          {OFFERS_DEPLOYMENT_SECTION_ITEMS.map((item) => (
            <li key={item.id}>
              <OffersDeploymentItem item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default OffersDeploymentSection;
