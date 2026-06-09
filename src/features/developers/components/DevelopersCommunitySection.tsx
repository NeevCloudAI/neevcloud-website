import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  DEVELOPERS_CHANGELOG_CARD,
  DEVELOPERS_COMMUNITY_CARDS,
  DEVELOPERS_COMMUNITY_SECTION,
} from "../data/community-section.data";
import DevelopersChangelogCard from "./community/DevelopersChangelogCard";
import DevelopersCommunityCard from "./community/DevelopersCommunityCard";

const DevelopersCommunitySection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="developers-community-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full  md:w-[30%] h-[80%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="developers-community-section-heading"
          textColor="white"
          align="center"
          weight="semibold"
          className="max-w-2xl"
        >
          {DEVELOPERS_COMMUNITY_SECTION.title}
        </Text>

        <ul className="m-0 mt-4 grid w-full list-none grid-cols-1 gap-5 p-0 md:mt-12.5 md:grid-cols-2">
          {DEVELOPERS_COMMUNITY_CARDS.map((card) => (
            <li key={card.id}>
              <DevelopersCommunityCard card={card} />
            </li>
          ))}
        </ul>

        <div className="mt-5 w-full md:mt-5">
          <DevelopersChangelogCard card={DEVELOPERS_CHANGELOG_CARD} />
        </div>
      </Container>
    </section>
  );
};

export default DevelopersCommunitySection;
