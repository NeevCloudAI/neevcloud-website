import type { EmployeeStory } from "../types/employee-stories-section.types";

export const EMPLOYEE_STORIES_SECTION = {
  titlePrefix: "Thriving in a Culture of",
  titleHighlight: "Excellence",
  description: "Contributor of our dynamic team, fostering growth and success.",
} as const;

export const EMPLOYEE_STORIES: readonly EmployeeStory[] = [
  {
    id: "sanjay-singh-rajawat",
    name: "Sanjay Singh Rajawat",
    title: "Associate Software Engineer",
    quote:
      "I've been able to work on impactful projects in AI cloud development. The supportive environment and access to advanced technologies have accelerated my learning.",
    image: "/images/sanjay-singh-rajawat.png",
  },
  {
    id: "ayushi-shekhawat",
    name: "Ayushi Shekhawat",
    title: "Sales Engineer",
    quote:
      "Joining the sales team was a game-changer. From the get-go, the training was spot-on, and the team's been like a second family. Feeling stoked about diving into the sales world here!",
    image: "/images/ayushi-shekhawat.png",
  },
  {
    id: "venktesh-sharma",
    name: "Venktesh Sharma",
    title: "Cloud Consultant",
    quote:
      "I've experienced immense growth in understanding cloud and AI solutions. Helping clients transition to AI-first infrastructure has been a fulfilling journey.",
    image: "/images/venktesh-sharma.png",
  },
  {
    id: "tanvi-ausare",
    name: "Tanvi Ausare",
    title: "SE - Content & Brand Communications",
    quote:
      "Working on complex network architectures that support AI workloads has sharpened my skills and given me the confidence to take on bigger challenges.",
    image: "/images/tanvi-ausare.png",
  },
  {
    id: "yatharth-shelat",
    name: "Yatharth Shelat",
    title: "Network Engineer - L2",
    quote:
      "Working on complex network architectures that support AI workloads has sharpened my skills and given me the confidence to take on bigger challenges.",
    image: "/images/yatharth-shelat.png",
  },
  {
    id: "akansha-dubey",
    name: "Akansha Dubey",
    title: "Server Engineer - L2",
    quote:
      "I've had the chance to work on advanced server systems, collaborate with an inspiring team, and contribute directly to building India's AI-first infrastructure.",
    image: "/images/akansha-dubey.png",
  },
] as const;
