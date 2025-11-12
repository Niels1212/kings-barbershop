import { useRef } from "react";
import { CAROUSEL_SCROLL_AMOUNT, SCROLL_BEHAVIOR } from "@/lib/constants";

export function useHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -CAROUSEL_SCROLL_AMOUNT : CAROUSEL_SCROLL_AMOUNT,
        behavior: SCROLL_BEHAVIOR,
      });
    }
  };

  return { scrollRef, scroll };
}
