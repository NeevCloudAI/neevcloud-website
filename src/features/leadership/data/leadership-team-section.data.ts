import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type { LeadershipTeamMember } from "../types/leadership-team-section.types";

export const LEADERSHIP_TEAM_SECTION = {
  badgeText: "Our expert crew",
  titlePrefix: "Meet the",
  titleHighlight: "leadership team",
} as const;

export const LEADERSHIP_TEAM: readonly LeadershipTeamMember[] = [
  {
    name: "Vijayakumar Arumuga Nadar",
    title: "Chief AI Officer (CAIO)",
    description:
      "Architect of scalable AI systems, Vijayakumar leads the design and evolution of NeevCloud’s AI platforms. He bridges deep engineering with product vision to turn complex ideas into production-ready reality.",
    image: "/images/vijayakumar-arumuga-nadar.webp",
    linkedinHref: EXTERNAL_LINKS.vijayakumarArumugaNadarLinkedin,
  },
  {
    name: "Radheshyam Dhakad",
    title: "Chief Technology Officer",
    description:
      "Driving NeevCloud’s core technology strategy, Radheshyam builds resilient, future-ready infrastructure at scale. His leadership ensures performance, reliability, and innovation remain uncompromised.",
    image: "/images/radheshyam-dhakad.webp",
    linkedinHref: EXTERNAL_LINKS.radheshyamDhakadLinkedin,
  },
  {
    name: "Priyal Kothari",
    title: "Head - Efficiency Architect",
    description:
      "Leading operational excellence across NeevCloud, Priyal streamlines cross-functional workflows and builds systems that enhance efficiency at scale. Her leadership ensures teams operate with agility, alignment, and consistent performance across the organization.",
    image: "/images/priyal-kothari.webp",
    linkedinHref: EXTERNAL_LINKS.priyalKothariLinkedin,
  },
  {
    name: "Noel Varghese",
    title: "Head - Cybersecurity",
    description:
      "Strengthening trust and resilience, Noel secures NeevCloud’s platforms against evolving digital threats. He ensures every system meets the highest standards of security, compliance, and risk governance.",
    image: "/images/noel-varghese.webp",
    linkedinHref: EXTERNAL_LINKS.noelVargheseLinkedin,
  },
  {
    name: "Dinesh Maheshwari",
    title: "Head - Accounts",
    description:
      "The steward of financial discipline, Dinesh ensures operational efficiency through precision and transparency. His oversight enables sustainable growth across the NeevCloud ecosystem.",
    image: "/images/dinesh-maheshwari.webp",
    linkedinHref: EXTERNAL_LINKS.dineshMaheshwariLinkedin,
  },
  {
    name: "Shashwat Jain",
    title: "Head, Legal",
    description:
      "Shashwat anchors NeevCloud's growth with strong legal governance and regulatory clarity. He safeguards the company's interests while enabling confident, compliant expansion.",
    image: "/images/shashwat-jain.webp",
    linkedinHref: EXTERNAL_LINKS.shashwatJainLinkedin,
  },
  {
    name: "Shamsher Ansari",
    title: "Group Product Manager - Technical",
    description:
      "Driving the technical product vision at NeevCloud, Shamsher architects high-performance cloud platforms built for scale and complexity. He brings together deep engineering expertise and strategic clarity to transform infrastructure into powerful, production ready systems for next-generation AI workloads.",
    image: "/images/shamsher-ansari.webp",
    linkedinHref: EXTERNAL_LINKS.shamsherAnsariLinkedin,
  },
  {
    name: "Alok Pratap Singh",
    title: "Technical Program Manager",
    description:
      "Focused on delivering seamless product experiences, Alok translates complex technical requirements into intuitive, scalable solutions. He plays a key role in shaping NeevCloud’s offerings to meet evolving customer and infrastructure demands.",
    image: "/images/alok-pratap-singh.webp",
    linkedinHref: EXTERNAL_LINKS.alokPratapSinghLinkedin,
  },
  {
    name: "Rashmeet Kaur Bedi",
    title: "Senior Brand Manager",
    description:
      "Shaping NeevCloud’s voice and presence, Rashmeet translates technology into compelling brand narratives. She drives positioning, storytelling, and consistency across every touchpoint.",
    image: "/images/rashmeet-kaur-bedi.webp",
    linkedinHref: EXTERNAL_LINKS.rashmeetKaurBediLinkedin,
  },
  {
    name: "Sahil Ansari",
    title: "Team Lead, Sales",
    description:
      "At the frontlines of growth, Sahil connects customer needs with the right cloud and AI solutions. He leads with insight, agility, and a results-driven mindset.",
    image: "/images/sahil-ansari.webp",
    linkedinHref: EXTERNAL_LINKS.sahilAnsariLinkedin,
  },
  {
    name: "Mohit Mehroliya",
    title: "Senior HR Manager",
    description:
      "Champion of people and culture, Mohit builds teams that scale with ambition. He aligns talent strategy with NeevCloud’s fast-growing, innovation-driven environment.",
    image: "/images/mohit-mehroliya.webp",
    linkedinHref: EXTERNAL_LINKS.mohitMehroliyaLinkedin,
  },
  {
    name: "Kushal Kothari",
    title: "Product Manager, ZATA",
    description:
      "Kushal ensures ZATA’s initiatives move from vision to execution seamlessly. He drives cross-functional alignment to deliver projects on time, at scale, and with precision.",
    image: "/images/kushal-kothari.webp",
    linkedinHref: EXTERNAL_LINKS.kushalKothariLinkedin,
  },
];
