import LatestNewsCard from "./LatestNewsCard";
import { LATEST_NEWS_ITEMS } from "../data/latest-news.data";

// Horizontal scroll row (no arrow controls). Bleeds to the right so the next
// card peeks; scroll/drag to advance.
export default function LatestNewsCarouselClient() {
  return (
    <ul className="flex list-none snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-webkit-mask-image:linear-gradient(to_right,#000_0%,#000_90%,transparent_100%)] [mask-image:linear-gradient(to_right,#000_0%,#000_90%,transparent_100%)]">
      {LATEST_NEWS_ITEMS.map((item, index) => (
        <li key={item.title} className="snap-start">
          <LatestNewsCard item={item} priority={index < 3} />
        </li>
      ))}
    </ul>
  );
}
