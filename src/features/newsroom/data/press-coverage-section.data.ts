import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type { PressCoverageCardItem } from "../types/press-coverage-section.types";

export const PRESS_COVERAGE_ITEMS = [
  {
    id: "entrepreneur-agnikul-partnership",
    date: "Feb 12, 2026",
    source: "Entrepreneur.com",
    title:
      "NeevCloud, Agnikul Cosmos partner to build India's first data centre in space",
    description:
      "The pilot launch is targeted by the end of 2026 as the companies plan...",
    image: "/images/webp/news-1.webp",
    readMoreHref: EXTERNAL_LINKS.news1,
  },
  {
    id: "w-media-indigenous-ai-datacenter",
    date: "Feb 13, 2026",
    source: "w.media",
    title:
      "NeevCloud and Agnikul Cosmos to launch India's first indigenous AI data center in space",
    description:
      "NeevCloud, an Indian sovereign AI cloud infrastructure company under...",
    image: "/images/webp/news-2.webp",
    readMoreHref: EXTERNAL_LINKS.news2,
  },
  {
    id: "cxotoday-ai-first-future",
    date: "Aug 14, 2025",
    source: "CXOtoday.com",
    title:
      "NeevCloud: Powering India's AI-First Future with Sovereign, Sustainable Cloud Infrastructure",
    description:
      "India's AI surge is real and urgent. The rise of generative models, automation...",
    image: "/images/webp/news-3.webp",
    readMoreHref: EXTERNAL_LINKS.news3,
  },
  {
    id: "techcircle-rackbank-ceo",
    date: "Jun 6, 2025",
    source: "techcircle.in",
    title:
      "India can build its own AI cloud, reduce reliance on foreign compute power, says RackBank CEO",
    description:
      "The data center and Artificial Intelligence (AI) infrastructure industry is...",
    image: "/images/webp/news-4.webp",
    readMoreHref: EXTERNAL_LINKS.news4,
  },
  {
    id: "et-now-insight-ai-cloud",
    date: "Sep 9, 2025",
    source: "ET Now Insight",
    title:
      "ET Edge Coverage - NeevCloud at the Forefront of AI Cloud Innovation",
    description:
      "NeevCloud was recently featured in ET Edge, spotlighting how we are driving...",
    image: "/images/webp/news-5.webp",
    readMoreHref: EXTERNAL_LINKS.news5,
  },
  {
    id: "w-media-central-india-dc",
    date: "Jul 9, 2025",
    source: "w.media",
    title:
      "Central India is emerging as a new DC market | Narendra Sen at Chennai CDC",
    description:
      "NeevCloud has expanded its footprint with a state-of-the-art cloud datacenter...",
    image: "/images/webp/news-6.webp",
    readMoreHref: EXTERNAL_LINKS.news6,
  },
  {
    id: "times-of-india-vijaykumar",
    date: "Jul 9, 2025",
    source: "Times of India",
    title: "Leadership Update - VijayKumar Nadar Joins NeevCloud Ventures",
    description:
      "We are proud to welcome VijayKumar Arumuga Nadar to the NeevCloud family.",
    image: "/images/webp/news-7.webp",
    readMoreHref: EXTERNAL_LINKS.news7,
  },
  {
    id: "tech-capital-jeff-ferry",
    date: "Jan 22, 2025",
    source: "The Tech Capital",
    title:
      "Ex-Goldman Sachs exec to lead India's first AI super cloud at NeevCloud",
    description:
      "Indian startup NeevCloud has named Jeff Ferry as a Board Member and...",
    image: "/images/webp/news-8.webp",
    readMoreHref: EXTERNAL_LINKS.news8,
  },
  {
    id: "et-now-swadesh-ke-sitare",
    date: "Apr 2, 2025",
    source: "ET Now",
    title: "The Times Network ET Now Swadesh ke Sitare Awards 2025, Indore",
    description:
      'NeevCloud was honored to be featured on ET Now\'s "Swadesh ke Sitare"...',
    image: "/images/webp/news-9.webp",
    readMoreHref: EXTERNAL_LINKS.news9,
  },
  {
    id: "analytics-india-40000-gpus",
    date: "May 6, 2025",
    source: "Analytics India Mag",
    title:
      "Another Indian Startup is Entering the AI Cloud Space with 40,000 GPUs",
    description:
      "This infrastructure aims to support Indian enterprises with training, inference...",
    image: "/images/webp/news-10.webp",
    readMoreHref: EXTERNAL_LINKS.news10,
  },
] as const satisfies readonly PressCoverageCardItem[];
