import Container from "@/shared/components/container";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import { Divider, Text } from "@/shared/ui-lib";
import { MoveRight } from "lucide-react";
import Image from "next/image";

type LeadershipTeamMember = {
  name: string;
  title: string;
  description: string;
  image: string;
  linkedinHref: string;
};

const LEADERSHIP_TEAM: LeadershipTeamMember[] = [
  {
    name: "Vijayakumar Arumuga Nadar",
    title: "Chief AI Officer (CAIO)",
    description:
      "Architect of scalable AI systems, Vijayakumar leads the design and evolution of NeevCloud’s AI platforms. He bridges deep engineering with product vision to turn complex ideas into production-ready reality.",
    image: "/images/vijayakumar-arumuga-nadar.png",
    linkedinHref: EXTERNAL_LINKS.vijayakumarArumugaNadarLinkedin,
  },
  {
    name: "Radheshyam Dhakad",
    title: "Chief Technology Officer",
    description:
      "Driving NeevCloud’s core technology strategy, Radheshyam builds resilient, future-ready infrastructure at scale. His leadership ensures performance, reliability, and innovation remain uncompromised.",
    image: "/images/radheshyam-dhakad.png",
    linkedinHref: EXTERNAL_LINKS.radheshyamDhakadLinkedin,
  },
  {
    name: "Priyal Kothari",
    title: "Head - Efficiency Architect",
    description:
      "Leading operational excellence across NeevCloud, Priyal streamlines cross-functional workflows and builds systems that enhance efficiency at scale. Her leadership ensures teams operate with agility, alignment, and consistent performance across the organization.",
    image: "/images/priyal-kothari.png",
    linkedinHref: EXTERNAL_LINKS.priyalKothariLinkedin,
  },
  {
    name: "Noel Varghese",
    title: "Head - Cybersecurity",
    description:
      "Strengthening trust and resilience, Noel secures NeevCloud’s platforms against evolving digital threats. He ensures every system meets the highest standards of security, compliance, and risk governance.",
    image: "/images/noel-varghese.png",
    linkedinHref: EXTERNAL_LINKS.noelVargheseLinkedin,
  },
  {
    name: "Dinesh Maheshwari",
    title: "Head - Accounts",
    description:
      "The steward of financial discipline, Dinesh ensures operational efficiency through precision and transparency. His oversight enables sustainable growth across the NeevCloud ecosystem.",
    image: "/images/dinesh-maheshwari.png",
    linkedinHref: EXTERNAL_LINKS.dineshMaheshwariLinkedin,
  },
  {
    name: "Shashwat Jain",
    title: "Head, Legal",
    description:
      "Shashwat anchors NeevCloud's growth with strong legal governance and regulatory clarity. He safeguards the company's interests while enabling confident, compliant expansion.",
    image: "/images/shashwat-jain.png",
    linkedinHref: EXTERNAL_LINKS.shashwatJainLinkedin,
  },
  {
    name: "Shamsher Ansari",
    title: "Group Product Manager - Technical",
    description:
      "Driving the technical product vision at NeevCloud, Shamsher architects high-performance cloud platforms built for scale and complexity. He brings together deep engineering expertise and strategic clarity to transform infrastructure into powerful, production ready systems for next-generation AI workloads.",
    image: "/images/shamsher-ansari.png",
    linkedinHref: EXTERNAL_LINKS.shamsherAnsariLinkedin,
  },
  {
    name: "Alok Pratap Singh",
    title: "Technical Program Manager",
    description:
      "Focused on delivering seamless product experiences, Alok translates complex technical requirements into intuitive, scalable solutions. He plays a key role in shaping NeevCloud’s offerings to meet evolving customer and infrastructure demands.",
    image: "/images/alok-pratap-singh.png",
    linkedinHref: EXTERNAL_LINKS.alokPratapSinghLinkedin,
  },
  {
    name: "Rashmeet Kaur Bedi",
    title: "Senior HR Manager",
    description:
      "Shaping NeevCloud’s voice and presence, Rashmeet translates technology into compelling brand narratives. She drives positioning, storytelling, and consistency across every touchpoint.",
    image: "/images/rashmeet-kaur-bedi.png",
    linkedinHref: EXTERNAL_LINKS.rashmeetKaurBediLinkedin,
  },
  {
    name: "Sahil Ansari",
    title: "Group Product Manager - Technical",
    description:
      "At the frontlines of growth, Sahil connects customer needs with the right cloud and AI solutions. He leads with insight, agility, and a results-driven mindset.",
    image: "/images/sahil-ansari.png",
    linkedinHref: EXTERNAL_LINKS.sahilAnsariLinkedin,
  },
  {
    name: "Mohit Mehroliya",
    title: "Senior HR Manager",
    description:
      "Champion of people and culture, Mohit builds teams that scale with ambition. He aligns talent strategy with NeevCloud’s fast-growing, innovation-driven environment.",
    image: "/images/mohit-mehroliya.png",
    linkedinHref: EXTERNAL_LINKS.mohitMehroliyaLinkedin,
  },
  {
    name: "Kushal Kothari",
    title: "Product Manager, ZATA",
    description:
      "Kushal ensures ZATA’s initiatives move from vision to execution seamlessly. He drives cross-functional alignment to deliver projects on time, at scale, and with precision.",
    image: "/images/kushal-kothari.png",
    linkedinHref: EXTERNAL_LINKS.kushalKothariLinkedin,
  },
];

type LeadershipTeamCardProps = {
  member: LeadershipTeamMember;
};

const LeadershipTeamCard = ({ member }: LeadershipTeamCardProps) => {
  return (
    <article className="rounded-lg bg-gray-10 flex justify-center shadow-lg">
      <div className="p-4 md:p-10 flex flex-col justify-between">
        <div>
          <Text as="h3" textColor="gray-100" weight="semibold">
            {member.name}
          </Text>
          <div className="w-fit">
            <Text weight="medium" className="mt-2.5" textColor="gray-90">
              {member.title}
            </Text>
            <Divider
              orientation="horizontal"
              className="mt-1 bg-[radial-gradient(ellipse_at_center,#58D7A7_0%,#58D7A7_53%,#58D7A799_85%,#58D7A71a_100%)]"
            />
          </div>
          <Text className="mt-5 max-w-sm">{member.description}</Text>
        </div>
        <a
          href={member.linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex mt-4 items-center gap-2 bg-primary-25 hover:bg-linear-to-r from-[#5CB7A8] to-[#92EFE0] p-1.5 rounded-md"
          aria-label={`${member.name} on LinkedIn`}
        >
          <Image
            src="/icons/linkedin-bg.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
          />
          <Text weight="semibold" textColor="gray-100">
            {member.name}
          </Text>
          <MoveRight className="size-6" />
        </a>
      </div>
      <Image
        src={member.image}
        alt={member.name}
        width={350}
        height={350}
        className="rounded-r-lg"
      />
    </article>
  );
};

const LeaderShipTeam = () => {
  return (
    <section className="relative bg-white py-8 md:py-16 2xl:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="small"
          textColor="primary-70"
          className="bg-primary-20 p-1 rounded-md border border-primary-30"
        >
          Our expert crew
        </Text>

        <Text
          as="h1"
          align="center"
          className="max-w-5xl mt-4 md:mt-6"
          weight="medium"
        >
          Meet the
          <Text as="span" variant="h1" textColor="primary" weight="medium">
            leadership team
          </Text>
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 md:mt-12.5 w-full">
          {LEADERSHIP_TEAM.map((member) => (
            <LeadershipTeamCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LeaderShipTeam;
