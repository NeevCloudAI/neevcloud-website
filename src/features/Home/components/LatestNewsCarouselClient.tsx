import LatestNewsCard from "./LatestNewsCard";
import { LATEST_NEWS_ITEMS } from "../data/latest-news.data";

// Horizontal scroll row (no arrow controls). Bleeds to the right so the next
// card peeks; scroll/drag to advance.
export default function LatestNewsCarouselClient() {
  return (
    <ul className="flex list-none snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
      {LATEST_NEWS_ITEMS.map((item) => (
        <li key={item.title} className="snap-start">
          <LatestNewsCard item={item} />
        </li>
      ))}
    </ul>
  );
}
